import path from "node:path";
import { mkdir } from "node:fs/promises";

import discovery from "./discovery";
import { selectLanguage } from "./menu";
import translate from "./llm";

const CONCURRENCY = 30;

const language = selectLanguage();

const sourceBasePath = path.resolve(
  process.cwd(),
  language.code === 'en' ? "../i18n/pt/docusaurus-plugin-content-docs/current" : "../i18n/pt",
);

const files = await discovery(
  sourceBasePath,
  [".md", ".mdx", ".json"],
  [
    "library/objects",
    "library/resources",
  ],
);


const currentPath = path.resolve(process.cwd(), "..");

const destinationBasePath = language.code === 'en' ? path.join(currentPath, "docs") : path.join(
  currentPath,
  "i18n",
  language.code,
);

async function processFile(sourceFilePath: string) {
  const content = await Bun.file(sourceFilePath).text();

  const translatedContent = await translate({
    content,
    language: language.label,
  });

  const relativePath = path.relative(
    sourceBasePath,
    sourceFilePath,
  );

  const destinationFilePath = path.join(
    destinationBasePath,
    relativePath,
  );

  await mkdir(path.dirname(destinationFilePath), {
    recursive: true,
  });

  await Bun.write(
    destinationFilePath,
    translatedContent,
  );

  console.log(`${relativePath} -> ${language.code}`);
}

async function worker() {
  while (files.length > 0) {
    const file = files.shift();

    if (!file) {
      return;
    }

    await processFile(file);
  }
}

const workers = Array.from(
  { length: Math.min(CONCURRENCY, files.length) },
  () => worker(),
);

await Promise.all(workers);

console.log("Tradução concluída.");