import path from "node:path";

// Same slugger and version used by Docusaurus to create the heading ids
import GithubSlugger from "github-slugger";

import { LIBRARY_FOLDERS } from "../library";

// [label](/docs/page#anchor), [label](#anchor) and href="/docs/page#anchor"
const LINK = /(\]\(|\bhref=\{?["'])([^)\s"'#]*)#([^)\s"']+)/g;

const EXTERNAL = /^[a-z][a-z0-9+.-]*:/i;

// Library pages are copied, not translated, so their anchors are already protected
const LIBRARY = new RegExp(`^/docs/library/(?:${LIBRARY_FOLDERS.join("|")})/`);

const FRONT_MATTER = /^---\r?\n[\s\S]*?\r?\n---\r?\n/;

const HEADING = /^#{1,6}[ \t]+(.+?)(?:[ \t]+#+)?[ \t]*$/;

const EXPLICIT_ID = /\s*\{#([^}]+)\}\s*$/;

const FENCE = /^[ \t]*(```|~~~)/;

// Heading text as Docusaurus sees it, without the markdown syntax
function plainText(heading: string) {
  return heading
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/(\*\*|__)(.+?)\1/g, "$2")
    .replace(/(^|\W)([*_])(?!\s)(.+?)(?<!\s)\2(?=\W|$)/g, "$1$3")
    .replace(/\\(.)/g, "$1");
}

// The anchors of every heading, in the order they appear
export function headingSlugs(content: string) {
  const slugger = new GithubSlugger();
  const slugs: string[] = [];
  let fence: string | null = null;

  for (const line of content.replace(FRONT_MATTER, "").split(/\r?\n/)) {
    const fenceMatch = line.match(FENCE);

    if (fenceMatch) {
      if (!fence) {
        fence = fenceMatch[1];
      } else if (fenceMatch[1] === fence) {
        fence = null;
      }
      continue;
    }

    const heading = !fence && line.match(HEADING);

    if (!heading) {
      continue;
    }

    const explicitId = heading[1].match(EXPLICIT_ID);

    slugs.push(
      explicitId
        ? explicitId[1]
        : slugger.slug(plainText(heading[1])),
    );
  }

  return slugs;
}

function decode(anchor: string) {
  try {
    return decodeURIComponent(anchor);
  } catch {
    return anchor;
  }
}

type Props = {
  sourceBasePath: string;
  destinationBasePath: string;
  // Folder of the docs inside the base paths ("" for English)
  docsRelativePath: string;
  // Source files relative to sourceBasePath
  files: string[];
};

// Each file is translated alone, so the model can't know how a heading of
// another page was translated. The anchor is taken from the heading in the
// same position of the translated page.
export async function fixAnchors({
  sourceBasePath,
  destinationBasePath,
  docsRelativePath,
  files,
}: Props) {
  const contents = new Map<string, string | null>();

  async function read(filePath: string) {
    if (!contents.has(filePath)) {
      const file = Bun.file(filePath);
      contents.set(filePath, await file.exists() ? await file.text() : null);
    }
    return contents.get(filePath) ?? null;
  }

  // Finds the page file of a link, relative to the base paths
  async function resolveTarget(file: string, link: string) {
    if (link === "") {
      return file;
    }

    if (!link.startsWith("/docs/") || LIBRARY.test(link)) {
      return null;
    }

    const page = path.join(docsRelativePath, link.slice("/docs/".length).replace(/\/$/, ""));

    for (const candidate of [`${page}.md`, `${page}.mdx`, path.join(page, "index.md"), path.join(page, "index.mdx")]) {
      if (await read(path.join(sourceBasePath, candidate)) !== null) {
        return candidate;
      }
    }

    return null;
  }

  function links(content: string) {
    return [...content.matchAll(LINK)]
      .filter((match) => !EXTERNAL.test(match[2]))
      .map((match) => ({ link: match[2], anchor: decode(match[3]) }));
  }

  let fixed = 0;

  for (const file of files.filter((file) => /\.mdx?$/.test(file))) {
    const source = await read(path.join(sourceBasePath, file));
    const destinationPath = path.join(destinationBasePath, file);
    const destination = await read(destinationPath);

    if (!source || !destination) {
      continue;
    }

    // Links are matched by target and position, the model keeps their order
    const sourceLinks = new Map<string, string[]>();

    for (const { link, anchor } of links(source)) {
      sourceLinks.set(link, [...(sourceLinks.get(link) ?? []), anchor]);
    }

    const destinationCounts = new Map<string, number>();

    for (const { link } of links(destination)) {
      destinationCounts.set(link, (destinationCounts.get(link) ?? 0) + 1);
    }

    const positions = new Map<string, number>();
    const replacements: { index: number; from: string; to: string }[] = [];

    for (const match of destination.matchAll(LINK)) {
      const [, , link, rawAnchor] = match;

      if (EXTERNAL.test(link)) {
        continue;
      }

      const position = positions.get(link) ?? 0;
      positions.set(link, position + 1);

      const target = await resolveTarget(file, link);

      if (!target) {
        continue;
      }

      const translatedTarget = await read(path.join(destinationBasePath, target));
      const sourceTarget = await read(path.join(sourceBasePath, target));

      if (!translatedTarget || !sourceTarget) {
        continue;
      }

      const translatedSlugs = headingSlugs(translatedTarget);
      const anchor = decode(rawAnchor);

      if (translatedSlugs.includes(anchor)) {
        continue;
      }

      const where = `${file.split(path.sep).join("/")}: ${link}#${anchor}`;
      const sourceAnchors = sourceLinks.get(link) ?? [];

      if (sourceAnchors.length !== destinationCounts.get(link)) {
        console.warn(`Âncora não corrigida em ${where} (os links não correspondem à origem)`);
        continue;
      }

      const sourceSlugs = headingSlugs(sourceTarget);
      const headingIndex = sourceSlugs.indexOf(sourceAnchors[position]);

      if (headingIndex === -1) {
        console.warn(`Âncora não corrigida em ${where} (já está partida na origem)`);
        continue;
      }

      if (sourceSlugs.length !== translatedSlugs.length) {
        console.warn(`Âncora não corrigida em ${where} (os títulos não correspondem à origem)`);
        continue;
      }

      const anchorStart = match.index + match[1].length + link.length + 1;

      replacements.push({
        index: anchorStart,
        from: rawAnchor,
        to: translatedSlugs[headingIndex],
      });
    }

    if (replacements.length === 0) {
      continue;
    }

    let content = destination;

    // From the end, so the earlier indexes stay valid
    for (const { index, from, to } of replacements.reverse()) {
      content = content.slice(0, index) + to + content.slice(index + from.length);
      console.log(`Âncora corrigida em ${file.split(path.sep).join("/")}: #${decode(from)} -> #${to}`);
    }

    contents.set(destinationPath, content);
    await Bun.write(destinationPath, content);
    fixed += replacements.length;
  }

  return fixed;
}
