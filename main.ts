// One-Line Office Jokes — entry program.
//
// Writes a single original one-line joke about office life to
// /output/entry.txt. The joke turns on a real office detail (the
// shared printer that only ever jams on urgent pages) and lands its
// punch in the last few words. Deterministic, stdlib only, no network.
//
// Before writing, the program enforces the same gate the sealed
// scorer applies: UTF-8 text, 1 to 199 characters, on one line, not
// only white space. If the joke ever failed that gate the program
// exits non-zero and writes nothing, rather than submitting an
// invalid entry.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The office printer only jams on pages marked URGENT, so now I label " +
  "everything \u201cdraft \u2014 please ignore\u201d and it hasn\u2019t jammed since.";

const MAX_CHARS = 199;

function validate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1 to ${MAX_CHARS} characters, got ${chars.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
}

validate(JOKE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
