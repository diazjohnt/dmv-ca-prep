/* One-time tagger: writes "drills" arrays into docs/questions.js.
   Focused-practice pools are curated data, not runtime pattern matching, so
   they cannot drift as questions are added. Re-running is safe (idempotent).

   Run:  node tools\tag-drills.js  */
"use strict";
const fs = require("fs");
const path = require("path");

const QPATH = path.join(__dirname, "..", "docs", "questions.js");
const range = (prefix, a, b) => {
  const out = [];
  for (let i = a; i <= b; i++) out.push(prefix + String(i).padStart(2, "0"));
  return out;
};

/* Road signs: physical signs, shapes, colors, placards, reflectors. */
const SIGNS = range("SIG-", 15, 34);

/* Traffic signals: lights, arrows, and pedestrian signals. */
const SIGNALS = range("SIG-", 1, 14);

/* Numbers and limits: the answer turns on a specific numeric threshold such as
   a distance, speed, age, waiting period, dollar amount, or percentage.
   Deliberately excludes incidental digits (form codes like SR 22 and DS 699,
   phone numbers like 911 and 511, "45-degree angle" inside a procedure). */
const NUMBERS = [
  "LIC-01", "LIC-05", "LIC-06", "LIC-07", "LIC-08", "LIC-09", "LIC-10", "LIC-15",
  "INT-02", "INT-04", "INT-05", "INT-12", "INT-13", "INT-14",
  "LAN-16", "LAN-19",
  "TRN-02", "TRN-16", "TRN-18",
  "PRK-03", "PRK-14", "PRK-15", "PRK-20",
  "MRG-03", "MRG-04", "MRG-05", "MRG-07", "MRG-08",
  "ROW-19",
  "SHR-03", "SHR-09", "SHR-15", "SHR-19", "SHR-24", "SHR-25", "SHR-32",
  "SPD-02", "SPD-03", "SPD-04", "SPD-05", "SPD-06", "SPD-07", "SPD-08", "SPD-09",
  "SPD-10", "SPD-11", "SPD-12", "SPD-16", "SPD-21", "SPD-24",
  "SAF-01", "SAF-32", "SAF-33", "SAF-34",
  "DUI-02", "DUI-03", "DUI-04", "DUI-10", "DUI-11", "DUI-14", "DUI-16", "DUI-19",
  "DUI-25", "DUI-26", "DUI-27",
  "REC-01", "REC-02", "REC-03", "REC-08", "REC-09", "REC-10", "REC-11", "REC-12", "REC-14",
  "INS-01", "INS-02", "INS-03", "INS-09", "INS-10",
  "REG-01", "REG-02", "REG-03",
  "MSC-09", "MSC-10", "MSC-11", "MSC-15"
];

const tags = {};
const add = (ids, tag) => ids.forEach(id => { (tags[id] = tags[id] || []).push(tag); });
add(SIGNS, "signs");
add(SIGNALS, "signals");
add(NUMBERS, "numbers");

let src = fs.readFileSync(QPATH, "utf8");
src = src.replace(/\n\s*"drills": \[[^\]]*\],/g, "");   // idempotent: strip old tags

let applied = 0;
for (const [id, list] of Object.entries(tags)) {
  const needle = '"id": "' + id + '",';
  const at = src.indexOf(needle);
  if (at < 0) { console.error("MISSING id in bank: " + id); process.exitCode = 1; continue; }
  const insert = '\n    "drills": [' + list.map(t => '"' + t + '"').join(", ") + '],';
  src = src.slice(0, at + needle.length) + insert + src.slice(at + needle.length);
  applied++;
}

fs.writeFileSync(QPATH, src);

const bank = JSON.parse(src.slice(src.indexOf("["), src.lastIndexOf("]") + 1));
const count = (t) => bank.filter(q => (q.drills || []).includes(t)).length;
console.log("Tagged " + applied + " questions across " + bank.length + " in the bank:");
console.log("  signs    " + count("signs"));
console.log("  signals  " + count("signals"));
console.log("  numbers  " + count("numbers"));
