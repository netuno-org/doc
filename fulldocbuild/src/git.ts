import { mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

async function runGit(args: string[], cwd?: string): Promise<boolean> {
  const proc = Bun.spawn(["git", ...args], {
    cwd,
    stdout: "inherit",
    stderr: "inherit"
  });
  return (await proc.exited) === 0;
}

export async function syncRepo(name: string, url: string, dir: string) {
  const targetDir = path.join(dir, name);

  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }

  if (!existsSync(targetDir)) {
    console.log(`Cloning ${name}...`);
    await runGit(["clone", url, name], dir);
  } else {
    console.log(`Updating ${name}...`);
    await runGit(["pull", "origin", "master"], targetDir);
  }
}