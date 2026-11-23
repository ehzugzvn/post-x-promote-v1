// Entry hand-in for post-x-promote-make-your-own-bounty-01.
//
// The real entry here is not this code at all — it is a public post on X
// that promotes a make.fun bounty. This little program exists only so the
// judging pipeline has something concrete to run: it takes the file that
// holds the post's address (POST.json, sitting next to the bot) and drops
// a copy of it into the output folder, the way you would hand a slip of
// paper with a URL written on it across a counter.

import { access, copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";

const POST_FILENAME: string = "POST.json";
const DEFAULT_BOT_DIR: string = "/bot";
const DEFAULT_OUTPUT_DIR: string = "/output";

async function main(): Promise<void> {
  const botDir: string = process.env.MAKEFUN_BOT_DIR ?? DEFAULT_BOT_DIR;
  const outputDir: string =
    process.env.MAKEFUN_OUTPUT_DIR ?? DEFAULT_OUTPUT_DIR;

  const sourcePath: string = join(botDir, POST_FILENAME);
  const targetPath: string = join(outputDir, POST_FILENAME);

  try {
    await mkdir(outputDir, { recursive: true });
    await copyFile(sourcePath, targetPath);
    // Double-check the hand-in actually landed where we think it did,
    // so a silent partial copy can never pass as a success.
    await access(targetPath);
  } catch (err) {
    const detail: string =
      err instanceof Error ? err.message : String(err);
    console.error(
      `Could not hand in ${POST_FILENAME} from ${sourcePath}: ${detail}`,
    );
    process.exit(1);
  }

  console.log(`Done — ${POST_FILENAME} handed in at ${targetPath}`);
}

await main();
