import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line review of the dullest everyday object: a doorstop. Its whole
// job is sitting still, and the joke is that it does that job better than
// any gadget. One line, 98 characters (limit 200).
const line =
  "Doorstop review: it has one job, does it silently, and has never once asked for a software update.";

// Self-check: the gate refuses anything over 200 characters.
if ([...line].length > 200 || line.trim().length === 0) {
  throw new Error("entry must be 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
