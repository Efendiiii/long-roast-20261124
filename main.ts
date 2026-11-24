// The Long Roast: Lawmakers and the File They Cannot Convert
// One satirical sentence, at most 320 characters, roasting lawmakers who
// would regulate AI, crypto or the internet but cannot convert a file to PDF.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "She drafted the bill that would license every algorithm in the country, then emailed her staff a photo of her screen because she could not find the button that turns a document into a PDF.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 320 characters.
if (entry.length < 1 || entry.length > 320) {
  throw new Error(
    `entry must be 1-320 characters, got ${entry.length}`
  );
}

// Exactly one sentence: a single terminal period, nothing else that ends
// a sentence, and no abbreviation or ellipsis smuggled in.
const terminators = entry.match(/[.!?]+/g) ?? [];
if (terminators.length !== 1 || !entry.endsWith(".")) {
  throw new Error(
    `entry must be exactly one sentence, got ${terminators.length} terminator(s)`
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
