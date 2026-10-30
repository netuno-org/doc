import path from "node:path";
import { mkdir } from "node:fs/promises";

export type Hashes = Record<string, string>;

export function hashContent(content: string): string {
  return new Bun.CryptoHasher("sha256").update(content).digest("hex");
}

export async function loadHashes(filePath: string): Promise<Hashes> {
  const file = Bun.file(filePath);

  if (!(await file.exists())) {
    return {};
  }

  return file.json();
}

export async function saveHashes(filePath: string, hashes: Hashes) {
  const sorted = Object.fromEntries(
    Object.keys(hashes)
      .sort()
      .map((key) => [key, hashes[key]]),
  );

  await mkdir(path.dirname(filePath), {
    recursive: true,
  });

  await Bun.write(filePath, JSON.stringify(sorted, null, 2) + "\n");
}
