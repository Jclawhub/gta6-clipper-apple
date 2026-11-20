// gta6-clipper-01 — Windah Basudara GTA 6 moment entry.
//
// Copies VIDEO.json from the repository root into the output directory so
// the bounty house can read the submitted YouTube Short URL.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The file holds the public URL of the uploaded YouTube Short; until the
// clip is uploaded it stays a placeholder, which is fine — the copy is
// byte-for-byte, so whatever is in VIDEO.json is what the house reads.
const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

if (!existsSync(source)) {
  throw new Error(`VIDEO.json not found at ${source}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`Copied ${source} -> ${target}`);
