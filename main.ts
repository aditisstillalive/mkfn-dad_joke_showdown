import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One dad joke, written to /output/entry.txt.
const ENTRY = "Kids, I've started a band called Duvet. We only play covers.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
