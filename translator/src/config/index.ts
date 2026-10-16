import path from "node:path";

// Docusaurus configs whose `i18n.locales` must list every translated language
export const CONFIG_FILES = ["docusaurus.config.js", "docusaurus.config.sample.js"];

const LOCALES_PATTERN = /(locales:\s*\[)([^\]]*)(\])/;

// Adds the language code to `i18n.locales` in each config file that doesn't have it yet.
// Returns the files that were changed.
export async function addLocale(
  projectPath: string,
  languageCode: string,
): Promise<string[]> {
  const changed: string[] = [];

  for (const fileName of CONFIG_FILES) {
    const filePath = path.join(projectPath, fileName);
    const file = Bun.file(filePath);

    if (!await file.exists()) {
      console.warn(`Configuração não encontrada: ${fileName}`);
      continue;
    }

    const content = await file.text();
    const match = content.match(LOCALES_PATTERN);

    if (!match) {
      throw new Error(`Lista "locales" não encontrada em ${fileName}`);
    }

    const [, start, list, end] = match;
    const locales = [...list!.matchAll(/['"]([^'"]+)['"]/g)].map(([, code]) => code);

    if (locales.includes(languageCode)) {
      continue;
    }

    const newList = [...locales, languageCode].map((code) => `'${code}'`).join(", ");

    await Bun.write(filePath, content.replace(LOCALES_PATTERN, `${start}${newList}${end}`));
    changed.push(fileName);
  }

  return changed;
}
