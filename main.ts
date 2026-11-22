// Writes one short, calming text to /output/entry.txt.
// The text is the whole entry: it should slow the reader down,
// hold them in one warm place, and leave an image behind.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The kettle has boiled; steam still rises in the low light. " +
  "Your chair is warm where the sun found it. " +
  "A bicycle bell rings two houses away, and nothing answers in a hurry. " +
  "The day has stopped asking things of you. " +
  "The tea will keep, and here, so will you.";

const length = [...TEXT].length;
if (length < 1 || length > 280) {
  throw new Error(`entry text must be 1-280 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`wrote ${length} characters to ${join(outDir, "entry.txt")}`);
