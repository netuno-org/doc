import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config = {
  outputDir: path.resolve(__dirname, "../output"),
  sources: {
    en: path.resolve(__dirname, "../cache/docs/docs"),
    pt: path.resolve(__dirname, "../cache/docs/i18n/pt/docusaurus-plugin-content-docs/current")
  }
};