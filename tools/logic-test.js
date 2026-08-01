/* Node smoke tests for the pure logic in app.js.
   Run:  node tools\logic-test.js  */
"use strict";
const fs = require("fs");
const path = require("path");
const assert = require("assert");

const bankSrc = fs.readFileSync(path.join(__dirname, "..", "docs", "questions.js"), "utf8");
const BANK = JSON.parse(bankSrc.slice(bankSrc.indexOf("["), bankSrc.lastIndexOf("]") + 1));
const hbSrc = fs.readFileSync(path.join(__dirname, "..", "docs", "handbook.js"), "utf8");
const HANDBOOK = JSON.parse(hbSrc.slice(hbSrc.indexOf("{"), hbSrc.lastIndexOf("}") + 1));
const { mulberry32, passNeeded, topicQuotas, buildTest, buildDrill, buildFocused, lengthChoices } = require(path.join(__dirname, "..", "docs", "app.js"));

let passed = 0;
function ok(name, fn) { fn(); passed++; console.log("  ok - " + name); }

ok("pass thresholds match the real DMV lines", () => {
  assert.strictEqual(passNeeded(36), 30);
  assert.strictEqual(passNeeded(40), 33);
  assert.strictEqual(passNeeded(46), 38);
  assert.strictEqual(passNeeded(10), 8);
});

ok("quotas sum exactly and never exceed pools", () => {
  for (const len of [10, 20, 36, 40, 46]) {
    const pools = [24, 26, 28, 30, 28, 22, 34, 26, 34, 24, 46, 28, 22, 18, 6, 26];
    const q = topicQuotas(pools, len);
    assert.strictEqual(q.reduce((a, b) => a + b, 0), len, "sum for " + len);
    q.forEach((v, i) => assert.ok(v <= pools[i] && v >= 0));
  }
});

ok("buildTest returns exact length, unique ids, valid perms", () => {
  for (const len of [10, 36, 40, 46]) {
    const t = buildTest(BANK, len, {}, mulberry32(42));
    assert.strictEqual(t.length, len);
    assert.strictEqual(new Set(t.map(x => x.id)).size, len);
    t.forEach(x => assert.deepStrictEqual([...x.perm].sort().join(""), "012"));
  }
});

ok("tests are topic-balanced (no topic hogs the test)", () => {
  const t = buildTest(BANK, 46, {}, mulberry32(7));
  const byId = new Map(BANK.map(q => [q.id, q]));
  const counts = {};
  t.forEach(x => { const tp = byId.get(x.id).topic; counts[tp] = (counts[tp] || 0) + 1; });
  const topics = Object.keys(counts);
  assert.ok(topics.length >= 12, "expected most topics represented, got " + topics.length);
  Object.entries(counts).forEach(([tp, c]) => assert.ok(c <= 8, tp + " has " + c));
});

ok("previously-seen questions are avoided when fresh ones exist", () => {
  const seen = {};
  BANK.forEach((q, i) => { if (i % 2 === 0) seen[q.id] = 3; });
  const t = buildTest(BANK, 46, seen, mulberry32(99));
  const reused = t.filter(x => seen[x.id]).length;
  assert.strictEqual(reused, 0, reused + " previously-seen questions were reused");
});

ok("same seed => same test (deterministic given rng)", () => {
  const a = buildTest(BANK, 46, {}, mulberry32(1234));
  const b = buildTest(BANK, 46, {}, mulberry32(1234));
  assert.deepStrictEqual(a, b);
});

ok("correct answers land on all three display positions", () => {
  const t = buildTest(BANK, 46, {}, mulberry32(5));
  const slots = [0, 0, 0];
  for (let s = 0; s < 40; s++) {
    buildTest(BANK, 46, {}, mulberry32(s)).forEach(x => slots[x.perm.indexOf(0)]++);
  }
  const total = slots.reduce((a, b) => a + b, 0);
  slots.forEach(c => assert.ok(c / total > 0.25 && c / total < 0.42, "slot share " + (c / total).toFixed(2)));
});

ok("drills preserve ids and shuffle choices", () => {
  const ids = BANK.slice(0, 12).map(q => q.id);
  const d = buildDrill(ids, mulberry32(3));
  assert.deepStrictEqual(d.map(x => x.id).sort(), ids.slice().sort());
  d.forEach(x => assert.deepStrictEqual([...x.perm].sort().join(""), "012"));
});

ok("every question ref has a handbook excerpt", () => {
  const missing = [];
  for (const q of BANK) {
    const key = q.ref.split(" / ")[0].trim();
    if (!HANDBOOK[key] || HANDBOOK[key].length < 40) missing.push(q.id + " -> " + key);
  }
  assert.deepStrictEqual(missing, [], missing.join(", "));
});

ok("handbook excerpts are whole passages, not cut off mid-sentence", () => {
  /* The figure captions beside the text on a two-column page arrive in the
     extracted handbook as short lines of their own. Read as headings, they cut
     the passage short: the WRONG WAY excerpt was once the single fragment
     "If you enter a roadway against traffic, DO NOT ENTER and". */
  const cut = [];
  for (const [ref, passage] of Object.entries(HANDBOOK)) {
    const text = passage.trim();
    const last = text.slice(text.lastIndexOf("\n") + 1).trim();
    /* A trailing ellipsis marks a passage the display window ended early. */
    if (!/[.!?:”")\]…]$/.test(last)) cut.push(ref + ': "' + last.slice(-48) + '"');
    if (/^[a-z]/.test(text)) cut.push(ref + " starts mid-sentence");
  }
  assert.deepStrictEqual(cut, [], cut.length + " excerpt(s) cut off mid-sentence:\n  " + cut.join("\n  "));
});

const drillIds = (tag) => BANK.filter(q => (q.drills || []).includes(tag)).map(q => q.id);

ok("length choices show a sample and a full option, without stray counts", () => {
  const std = lengthChoices(422, false);
  assert.deepStrictEqual(std.map(c => c.label), ["10 question sample", "Full test", "Extreme"]);
  assert.deepStrictEqual(std.map(c => c.value), [10, 46, 422]);  // full caps at the real length, extreme takes the bank

  const signs = lengthChoices(20, true);
  assert.deepStrictEqual(signs.map(c => c.label), ["10 question sample", "All"]);
  assert.deepStrictEqual(signs.map(c => c.value), [10, 20]);      // focused "All" means the whole pool

  const numbers = lengthChoices(86, true);
  assert.deepStrictEqual(numbers.map(c => c.value), [10, 86]);

  const tiny = lengthChoices(6, true);
  assert.deepStrictEqual(tiny.map(c => c.label), ["All"]);
  assert.deepStrictEqual(tiny.map(c => c.value), [6]);

  // No label may advertise a number, since counts confused the length step.
  [std, signs, numbers, tiny].flat().forEach(c =>
    assert.ok(!/\d/.test(c.label.replace("10 question sample", "")), "stray count in " + c.label));
});

ok("extreme is offered only where it means more than the full test", () => {
  // A focused subject already ends in "All", so a second whole-pool option would duplicate it.
  [lengthChoices(20, true), lengthChoices(86, true), lengthChoices(6, true)].forEach(cs =>
    assert.ok(!cs.some(c => c.pref === "extreme"), "focused pools must not offer extreme"));

  // A standard bank no deeper than the real test has nothing extra to give.
  [lengthChoices(46, false), lengthChoices(30, false), lengthChoices(9, false)].forEach(cs =>
    assert.ok(!cs.some(c => c.pref === "extreme"), "a shallow bank must not offer extreme"));

  const real = lengthChoices(BANK.length, false);
  const extreme = real.find(c => c.pref === "extreme");
  assert.ok(extreme, "the real bank is deeper than 46 and should offer extreme");
  assert.strictEqual(extreme.value, BANK.length);
});

ok("an extreme test serves the whole bank, once each, at the same pass bar", () => {
  const t = buildTest(BANK, BANK.length, {}, mulberry32(21));
  assert.strictEqual(t.length, BANK.length);
  assert.strictEqual(new Set(t.map(x => x.id)).size, BANK.length);
  assert.deepStrictEqual(
    t.map(x => x.id).sort(),
    BANK.map(q => q.id).sort(),
    "every question in the bank must appear exactly once"
  );
  t.forEach(x => assert.deepStrictEqual([...x.perm].sort().join(""), "012"));

  // Asking for more than the bank holds still yields the bank, not a short test.
  assert.strictEqual(buildTest(BANK, BANK.length + 50, {}, mulberry32(22)).length, BANK.length);

  // Seen counts must not shrink an extreme run: it is every question by definition.
  const seen = {};
  BANK.forEach((q, i) => { if (i % 3 === 0) seen[q.id] = 4; });
  assert.strictEqual(buildTest(BANK, BANK.length, seen, mulberry32(23)).length, BANK.length);

  const need = passNeeded(BANK.length);
  const share = need / BANK.length;
  assert.ok(share > 0.82 && share < 0.84, "extreme pass share drifted to " + share.toFixed(3));
});

ok("every drill pool is tagged in the data and non-trivial", () => {
  for (const tag of ["signs", "signals", "numbers"]) {
    assert.ok(drillIds(tag).length >= 10, tag + " pool too small: " + drillIds(tag).length);
  }
  // Signs and signals must not overlap: a question belongs to one or the other.
  const s = new Set(drillIds("signs"));
  assert.strictEqual(drillIds("signals").filter(id => s.has(id)).length, 0);
});

ok("numbers pool excludes incidental digits", () => {
  const nums = new Set(drillIds("numbers"));
  // Form codes, phone numbers, and procedural digits must not qualify.
  ["PRK-02", "DUI-24", "REC-15", "INS-08", "SAF-42", "LIC-14"].forEach(id =>
    assert.ok(!nums.has(id), id + " should not be in the numbers pool"));
  // Genuine numeric thresholds must qualify.
  ["PRK-14", "SPD-04", "DUI-02", "INS-01", "REG-01"].forEach(id =>
    assert.ok(nums.has(id), id + " should be in the numbers pool"));
});

ok("focused tests draw only from their subject pool", () => {
  const signIds = drillIds("signs");
  const numIds = drillIds("numbers");

  const signTest = buildFocused(signIds, 10, {}, mulberry32(11));
  assert.strictEqual(signTest.length, 10);
  assert.strictEqual(new Set(signTest.map(x => x.id)).size, 10);
  signTest.forEach(x => {
    assert.ok(signIds.includes(x.id), x.id + " not in signs pool");
    assert.deepStrictEqual([...x.perm].sort().join(""), "012");
  });

  const numTest = buildFocused(numIds, 46, {}, mulberry32(12));
  assert.strictEqual(numTest.length, 46);
  numTest.forEach(x => assert.ok(numIds.includes(x.id)));

  // "All" must return the whole pool and never more.
  assert.strictEqual(buildFocused(signIds, signIds.length, {}, mulberry32(13)).length, signIds.length);
  assert.strictEqual(buildFocused(signIds, 99, {}, mulberry32(14)).length, signIds.length);
});

ok("focused draws prefer unseen questions", () => {
  const signIds = drillIds("signs");
  const seen = {};
  signIds.forEach((id, i) => { if (i % 2 === 0) seen[id] = 2; });
  const t = buildFocused(signIds, 10, seen, mulberry32(15));
  assert.strictEqual(t.filter(x => seen[x.id]).length, 0);
});

ok("the correct answer cannot be guessed from its length", () => {
  /* Answer choices follow the DMV sample-test style: parallel phrasing and
     comparable length, with reasoning left to the explanation. If the correct
     answer is conspicuously the longest, a test-taker can score well without
     knowing the material, which defeats the purpose of practising. */
  const conspicuous = BANK.filter(q => {
    const [correct, ...rest] = q.choices.map(c => c.length);
    const longestOther = Math.max(...rest);
    return correct > longestOther * 1.25 && correct - longestOther >= 10;
  }).map(q => q.id);
  assert.deepStrictEqual(conspicuous, [],
    conspicuous.length + " question(s) have a conspicuously long correct answer");

  const longestCount = BANK.filter(q =>
    q.choices[0].length === Math.max(...q.choices.map(c => c.length))).length;
  const rate = longestCount / BANK.length;
  assert.ok(rate < 0.55,
    "correct answer is the longest option in " + Math.round(rate * 100) + "% of questions; keep it near chance");
});

ok("every distractor is a distinct, plausible alternative", () => {
  for (const q of BANK) {
    const norm = q.choices.map(c => c.trim().toLowerCase().replace(/[.,;:]$/, ""));
    assert.strictEqual(new Set(norm).size, 3, q.id + " has duplicate choices");
    q.choices.forEach(c => {
      assert.ok(c.trim().length >= 3, q.id + " has an empty or trivial choice");
      assert.ok(/[.?!]$/.test(c.trim()), q.id + ' choice should end with punctuation: "' + c + '"');
    });
  }
});

/* This test necessarily contains the character it searches for; that is why
   this file is not itself part of the list being checked. */
ok("project copy carries no em dashes, handbook quotes keep theirs", () => {
  const ours = ["docs/index.html", "docs/app.js", "docs/questions.js", "README.md"];
  for (const f of ours) {
    const text = fs.readFileSync(path.join(__dirname, "..", f), "utf8");
    const n = (text.match(/—/g) || []).length;
    assert.strictEqual(n, 0, f + " still has " + n + " em dashes");
  }
  assert.ok(hbSrc.includes("—"), "handbook passages should stay verbatim");
});

console.log("ALL LOGIC TESTS PASSED (" + passed + ")");
