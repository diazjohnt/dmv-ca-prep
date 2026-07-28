/* Applies reworked answer choices to docs/questions.js.

   Usage:  node tools/apply-rewrites.js <rewrites-file.js>

   The rewrites file exports { "QID": ["correct", "distractor", "distractor"] }.
   The correct answer stays first, matching the bank convention. Only the
   "choices" array is replaced; ids, topics, tags, explanations, and handbook
   references are left untouched.

   Answer choices follow the style of the official DMV sample tests:
   grammatically parallel, comparable in length, every option a plausible
   answer to the question asked, and no option carrying its own justification.
   Reasoning belongs in "explain", which is shown after answering. */
"use strict";
const fs = require("fs");
const path = require("path");

const file = process.argv[2];
if (!file) { console.error("usage: node tools/apply-rewrites.js <rewrites-file.js>"); process.exit(2); }
const REWRITES = require(path.resolve(file));

const QP = path.join(__dirname, "..", "docs", "questions.js");
const src = fs.readFileSync(QP, "utf8");
const start = src.indexOf("["), end = src.lastIndexOf("]") + 1;
const bank = JSON.parse(src.slice(start, end));
const byId = new Map(bank.map(q => [q.id, q]));

let applied = 0;
const problems = [];
for (const [id, choices] of Object.entries(REWRITES)) {
  const q = byId.get(id);
  if (!q) { problems.push(id + ": not in bank"); continue; }
  if (!Array.isArray(choices) || choices.length !== 3) { problems.push(id + ": needs exactly 3 choices"); continue; }
  const trimmed = choices.map(c => String(c).trim());
  if (new Set(trimmed.map(c => c.toLowerCase())).size !== 3) { problems.push(id + ": duplicate choices"); continue; }
  if (trimmed.some(c => !c)) { problems.push(id + ": empty choice"); continue; }
  q.choices = trimmed;
  q.answer = 0;
  applied++;
}

if (problems.length) {
  console.error("REFUSING TO WRITE, " + problems.length + " problem(s):");
  problems.forEach(p => console.error("  " + p));
  process.exit(1);
}

/* Re-emit preserving the file's existing key order and 2-space array indent. */
const KEYS = ["id", "topic", "drills", "sign", "q", "choices", "answer", "explain", "ref"];
const body = bank.map(o => {
  const present = KEYS.filter(k => o[k] !== undefined);
  const lines = ["  {"];
  present.forEach((k, i) => {
    lines.push("    " + JSON.stringify(k) + ": " + JSON.stringify(o[k]) + (i === present.length - 1 ? "" : ","));
  });
  lines.push("  }");
  return lines.join("\n");
}).join(",\n");
fs.writeFileSync(QP, src.slice(0, start) + "[\n" + body + "\n]" + src.slice(end));

/* Report the effect on the length tell. */
const longest = bank.filter(q => q.choices[0].length === Math.max(...q.choices.map(c => c.length))).length;
console.log("Applied " + applied + " rewrites.");
console.log("Correct answer is now the longest option in " + longest + " of " + bank.length +
  " questions (" + Math.round(100 * longest / bank.length) + "%).");
