import path from "node:path";
import { existsSync } from "node:fs";
import { cp, rm } from "node:fs/promises";

// Generated from the Netuno API: copied from the reference folder instead of translated
export const LIBRARY_FOLDERS = ["objects", "resources"];

const DEFAULT_LANGUAGE = "en";

// Replaces each library folder in the destination with the reference copy for
// the language, or the default language one. Returns the language used per folder.
export async function copyLibrary(
  referenceBasePath: string,
  languageCode: string,
  destinationLibraryPath: string,
): Promise<Record<string, string>> {
  const sources: Record<string, string> = {};

  // Resolve every source first, so nothing is deleted if one is missing
  for (const folder of LIBRARY_FOLDERS) {
    const code = [languageCode, DEFAULT_LANGUAGE].find((code) =>
      existsSync(path.join(referenceBasePath, code, folder)),
    );

    if (!code) {
      throw new Error(
        `Pasta de consulta não encontrada: ${path.join(referenceBasePath, DEFAULT_LANGUAGE, folder)}`,
      );
    }

    sources[folder] = code;
  }

  for (const [folder, code] of Object.entries(sources)) {
    const destinationPath = path.join(destinationLibraryPath, folder);

    await rm(destinationPath, {
      recursive: true,
      force: true,
    });

    await cp(path.join(referenceBasePath, code, folder), destinationPath, {
      recursive: true,
    });
  }

  return sources;
}
