import { readFile, readdir, writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";


const replacements: Array<[RegExp, string]> = [
  [/javascript/gi, "js"],
  [/typescript/gi, "ts"],
  [/node\.js/gi, "Node"],
  [/reactjs/gi, "React"],
  [/react\.js/gi, "React"],
  [/express\.js/gi, "Express"],
  [/vuejs/gi, "Vue"],
  [/vue\.js/gi, "Vue"],
  [/angularjs/gi, "Angular"],
  [/python/gi, "Py"],
  [/ruby/gi, "Rb"],
  [/kotlin/gi, "Kt"],
  [/groovy/gi, "Groovy"],

];


function applyReplacements(text: string): string {
  replacements.forEach(([pattern, replacement]) => {
    text = text.replace(pattern, replacement);
  });
  return text;
}

export function cleanMarkdown(md: string): string {
  md = md.replace(/^---[\s\S]*?---\s*\n?/, "");
  md = md.replace(/<!--[\s\S]*?-->/g, "");

  md = md.replace(/data:[^;]+;base64,[A-Za-z0-9+/=]+/g, "[BASE64]");

  const blocks: string[] = md.split(/(```[\s\S]*?```)/g) as string[];
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (!block) continue;

    // // Se for bloco de código, mantém
    // if (/^```/.test(block)) continue;

    let text = block;

    // Remove # iniciais de títulos
    text = text
      .split("\n")
      .map((line) => line.replace(/^#{1,6}\s*/, ""))
      .join("\n");

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

    // Aplica substituições
    text = applyReplacements(text);

    // Remove tags <a>
    text = text.replace(/<a[^>]*>(.*?)<\/a>/gi, "$1");

 

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

      contents.push(`\n---\n<!-- source: ${relativePath} -->\n---\n\n${data}\n`);
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