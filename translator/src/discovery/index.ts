import path from "node:path";

async function discovery(
  basePath: string,
  extensions: string[] = [".md", ".mdx", ".json"],
  ignorePaths: string[] = [],
): Promise<string[]> {
  const patterns = extensions.map((ext) => `**/*${ext}`);
  const files: string[] = [];

  const ignoredAbsolutePaths = ignorePaths.map((ignorePath) =>
    path.resolve(basePath, ignorePath),
  );

  for (const pattern of patterns) {
    const glob = new Bun.Glob(pattern);

    for await (const file of glob.scan({
      cwd: basePath,
      onlyFiles: true,
    })) {
      const absolutePath = path.resolve(basePath, file);

      const shouldIgnore = ignoredAbsolutePaths.some(
        (ignoredPath) =>
          absolutePath === ignoredPath ||
          absolutePath.startsWith(ignoredPath + path.sep),
      );

      if (shouldIgnore) {
        continue;
      }

      files.push(absolutePath);
    }
  }

  return files;
}

export default discovery;