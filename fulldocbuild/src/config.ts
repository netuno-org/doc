import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config = {
  repositories: [
    {
      name: "docs",
      url: "https://github.com/netuno-org/doc.git",
      directory: path.resolve(__dirname, "../cache")
    }
  ],
  outputDir: path.resolve(__dirname, "../output"),
  sources: {
    en: path.resolve(__dirname, "../cache/docs/docs"),
    pt: path.resolve(__dirname, "../cache/docs/i18n/pt/docusaurus-plugin-content-docs/current")
  }
};