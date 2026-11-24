import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, written to /output/entry.txt.
const ENTRY = "Our new robot vacuum quit on day one. Said the job really sucked.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
