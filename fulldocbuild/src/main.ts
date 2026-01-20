import { config } from "./config.js";
import { readFile, readdir, writeFile, mkdir, rm, copyFile } from "fs/promises";
import { existsSync } from "fs";
import { generateDoc } from "./markdown.js";
import path from "path";


async function copyFolder(source: string, destination: string) {
    // Remove o destino se já existir
    // if (existsSync(destination)) {
    //     await rm(destination, { recursive: true, force: true });
    // }
    
    // Cria o diretório de destino
    await mkdir(destination, { recursive: true });
    
    const entries = await readdir(source, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(source, entry.name);
        const destPath = path.join(destination, entry.name);

        if (entry.isDirectory()) {
            await copyFolder(srcPath, destPath);
        } else {
            await copyFile(srcPath, destPath);
        }
    }
}

async function SyncData() {
    
  console.log("\nSyncing Cache...\n");

  if (existsSync('./cache')) {
    await rm('./cache', { recursive: true, force: true });
  }

  if (!existsSync("./cache")) {
    await mkdir("./cache", { recursive: true });
  }

  const sourcePathPT = path.resolve("..", "i18n", "pt", "docusaurus-plugin-content-docs", "current");
  const destPathPT = path.resolve(".", "cache", "docs", "i18n", "pt", "docusaurus-plugin-content-docs", "current");
  await copyFolder(sourcePathPT, destPathPT);

  const sourcePathEN = path.resolve("..", "docs");
  const destPathEN = path.resolve(".", "cache", "docs", "docs");
  await copyFolder(sourcePathEN, destPathEN);

  const sourcePathPlainPT = path.resolve("..", "doc-plain", "i18n", "pt", "docusaurus-plugin-content-docs", "current", "library");
  const destPathPlainPT = path.resolve(".", "cache", "docs", "i18n", "pt", "docusaurus-plugin-content-docs", "current", "library");
  await copyFolder(sourcePathPlainPT, destPathPlainPT);

  const sourcePathPlainEN = path.resolve("..", "doc-plain", "docs", "library");
  const destPathPlainEN = path.resolve(".", "cache", "docs", "docs", "library");
  await copyFolder(sourcePathPlainEN, destPathPlainEN);
  console.log(sourcePathEN, destPathEN);

  console.log("\nGenerating documentation...\n");
}

async function Main() {
  await SyncData();

  const enChars = await generateDoc("en", config.sources.en, config.outputDir);
  const ptChars = await generateDoc("pt", config.sources.pt, config.outputDir);

  console.log("\nDone!\n");
  console.log(`  EN: ${enChars?.toLocaleString() || 0} characters`);
  console.log(`  PT: ${ptChars?.toLocaleString() || 0} characters`);
}

Main();