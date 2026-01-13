import { config } from "./config.js";
import { syncRepo } from "./git.js";
import { generateDoc } from "./markdown.js";

console.log("\nSyncing repositories...\n");
for (const repo of config.repositories) {
  await syncRepo(repo.name, repo.url, repo.directory);
}

console.log("\nGenerating documentation...\n");
const enChars = await generateDoc("en", config.sources.en, config.outputDir);
const ptChars = await generateDoc("pt", config.sources.pt, config.outputDir);

console.log("\nDone!\n");
console.log(`  EN: ${enChars?.toLocaleString() || 0} characters`);
console.log(`  PT: ${ptChars?.toLocaleString() || 0} characters`);