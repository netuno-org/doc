import path from "node:path";
import { mkdir } from "node:fs/promises";

import discovery from "./discovery";
import { hashContent, loadHashes, saveHashes } from "./hashes";
import { selectLanguage } from "./menu";
import translate from "./llm";

const CONCURRENCY = 30;

// Ignores the hashes and translates every file again
const force = Bun.argv.includes("--force");

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
    "docusaurus-plugin-content-docs\\current\\library\\objects",
    "docusaurus-plugin-content-docs\\current\\library\\resources",
  ],
);


const currentPath = path.resolve(process.cwd(), "..");

const destinationBasePath = language.code === 'en' ? path.join(currentPath, "docs") : path.join(
  currentPath,
  "i18n",
  language.code,
);

const hashesFilePath = path.join(
  process.cwd(),
  "hashes",
  `${language.code}.json`,
);

const hashes = await loadHashes(hashesFilePath);

type PendingFile = {
  relativePath: string;
  key: string;
  content: string;
  hash: string;
};

const pending: PendingFile[] = [];
const sourceKeys = new Set<string>();

for (const sourceFilePath of files) {
  const content = await Bun.file(sourceFilePath).text();

  const relativePath = path.relative(
    sourceBasePath,
    sourceFilePath,
  );

  // Same key on Windows and Linux
  const key = relativePath.split(path.sep).join("/");
  const hash = hashContent(content);

  sourceKeys.add(key);

  const isUpToDate =
    !force &&
    hashes[key] === hash &&
    await Bun.file(path.join(destinationBasePath, relativePath)).exists();

  if (!isUpToDate) {
    pending.push({ relativePath, key, content, hash });
  }
}

// Source files that were renamed or deleted; their old translation is kept
for (const key of Object.keys(hashes)) {
  if (!sourceKeys.has(key)) {
    delete hashes[key];
    console.warn(`Removido da origem: ${key} (a tradução antiga não foi apagada)`);
  }
}

console.log(`${pending.length} de ${files.length} ficheiros para traduzir.`);

// Writes are chained so concurrent workers never write the file at the same time
let saving = saveHashes(hashesFilePath, hashes);

function queueSave() {
  saving = saving.then(() => saveHashes(hashesFilePath, hashes));
}

async function processFile({ relativePath, content }: PendingFile) {
  const translatedContent = await translate({
    content,
    language: language.label,
  });

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

const failed: string[] = [];

async function worker() {
  while (pending.length > 0) {
    const file = pending.shift();

    if (!file) {
      return;
    }

    try {
      await processFile(file);
    } catch (error) {
      failed.push(file.relativePath);
      console.error(`Erro em ${file.relativePath}: ${error instanceof Error ? error.message : error}`);
      continue;
    }

    hashes[file.key] = file.hash;
    queueSave();
  }
}

const workers = Array.from(
  { length: Math.min(CONCURRENCY, pending.length) },
  () => worker(),
);

await Promise.all(workers);
await saving;

if (failed.length > 0) {
  console.error(`\n${failed.length} ficheiro(s) falharam e serão traduzidos na próxima execução:`);
  failed.forEach((file) => console.error(`- ${file}`));
  process.exitCode = 1;
} else if (workers.length === 0) {
  console.log("Nada para traduzir.");
} else {
  console.log("Tradução concluída.");
}
