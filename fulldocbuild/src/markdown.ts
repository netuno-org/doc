import { readFile, readdir, writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { connect } from "http2";

export function cleanMarkdown(md: string): string {
  // md = md.replace(/^---[\s\S]*?---\s*\n?/, "");
  // md = md.replace(/<!--[\s\S]*?-->/g, "");

  md = md.replace(/data:[^;]+;base64,[A-Za-z0-9+/=]+/g, "[BASE64]");

  const blocks: string[] = md.split(/(```[\s\S]*?```)/g) as string[];
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (!block) continue;

    // Se for bloco de código, mantém
    if (/^```/.test(block)) continue;

    let text = block;

    // // Remove # iniciais de títulos
    // text = text
    //   .split("\n")
    //   .map((line) => line.replace(/^#{1,6}\s*/, ""))
    //   .join("\n");

    // Remove emojis
    text = text.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "");

    // Remove imagens em Markdown
    text = text.replace(/!\[.*?\]\(.*?\)/g, "");

    // Substitui 2 ou mais espaços consecutivos por 1
    text = text.replace(/ {2,}/g, " ");

    // Substitui 2 ou mais quebras de linha consecutivas por 1
    text = text.replace(/\n{2,}/g, "\n");

    // Remove negrito **
    text = text.replace(/\*\*(.*?)\*\*/g, "$1");

    // // Remove tags <a>
    // text = text.replace(/<a[^>]*>(.*?)<\/a>/gi, "$1");


    blocks[i] = text;
  }

  return blocks.join("").trim();
}

async function collectMarkdown(dir: string, baseDir = dir): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const contents: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      contents.push(...await collectMarkdown(fullPath, baseDir));
    } else if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) {
      const relativePath = path.relative(baseDir, fullPath);
      let data = await readFile(fullPath, "utf-8");

      data = cleanMarkdown(data);
    
      let { frontMatter, content } = extractFrontMatter(data);
      frontMatter = { path:  relativePath.replace(/\\/g, "/").replace(/\.(md|mdx)$/, ""), ...frontMatter}
      data = data.replace(/^---[\s\S]*?---\s*\n?/, "");
       
      contents.push(
        [
          "---",
          ...Object.entries(frontMatter).map(
            ([key, value]) => `${key}: ${value}`
          ),
          "---",
          "",
          content,
          "",
        ].join("\n")
      );
    }
  }

  return contents;
}

export async function generateDoc(lang: string, sourceDir: string, outputDir: string) {
  if (!existsSync(sourceDir)) {
    console.warn(`Source not found: ${sourceDir}`);
    return;
  }

  console.log(`Generating fulldoc-${lang}.md...`);

  if (!existsSync(outputDir)) {
    await mkdir(outputDir, { recursive: true });
  }

  const contents = await collectMarkdown(sourceDir);
  const fullContent = contents.join("\n");
  const outputFile = path.join(outputDir, `fulldoc-${lang}.md`);
  
  await writeFile(outputFile, fullContent, "utf-8");
  
  const charCount = fullContent.length;
  console.log(`fulldoc-${lang}.md generated with ${charCount.toLocaleString()} characters`);
  
  return charCount;
}


type FrontMatter = Record<string, string | number>;

export function extractFrontMatter(md: string): {
  frontMatter: FrontMatter;
  content: string;
} {
  const match = md.match(/^---\s*([\s\S]*?)\s*---\s*/);

  if (!match) {
    return { frontMatter: {}, content: md };
  }

  const raw: any = match[1];
  const content = md.slice(match[0].length);

  const frontMatter: FrontMatter = {};

  raw.split("\n").forEach(line => {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) return;

    const value = rest.join(":").trim();

    frontMatter[key.trim()] =
      isNaN(Number(value)) ? value : Number(value);
  });

  return { frontMatter, content };
}
