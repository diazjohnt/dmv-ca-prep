/* Builds handbook.js: a map from each question's handbook reference
   ("Section 6: Parallel Parking") to the actual passage from the extracted
   handbook text, shown in the app when an answer is wrong.

   Run:  node tools\build-excerpts.js <path-to-handbook.txt>
   Regenerate whenever questions.js gains refs or the handbook revision changes. */
"use strict";
const fs = require("fs");
const path = require("path");

const txtPath = process.argv[2];
if (!txtPath) { console.error("usage: node build-excerpts.js <handbook.txt>"); process.exit(2); }

const bankSrc = fs.readFileSync(path.join(__dirname, "..", "docs", "questions.js"), "utf8");
const BANK = JSON.parse(bankSrc.slice(bankSrc.indexOf("["), bankSrc.lastIndexOf("]") + 1));

/* ---- collect distinct refs (first segment of any "A / B" ref) ---- */
const refs = [...new Set(BANK.map(q => q.ref.split(" / ")[0].trim()))];

/* ---- load + pre-clean text ---- */
const rawLines = fs.readFileSync(txtPath, "utf8").split(/\r?\n/);
const lines = rawLines.map(l =>
  l.replace(/\f/g, "")                               // page-break chars prefix each page
   .replace(/G\d{2}-\d+[A-Z]? \(CA\)/g, "")          // stray figure codes
   .replace(/\s+$/g, "")
);
const isPageNum = (l) => /^\s*\d{1,3}\s*$/.test(l);
const indentOf = (l) => l.length - l.trimStart().length;

/* ---- section boundaries ---- */
const sectionStart = {};                              // sectionNumber -> line index
lines.forEach((l, i) => {
  const m = l.match(/^SECTION (\d+)\./);
  if (m) sectionStart[parseInt(m[1], 10)] = i;
});
const sectionEnd = (n) => {
  const starts = Object.entries(sectionStart).map(([k, v]) => [parseInt(k, 10), v]).sort((a, b) => a[1] - b[1]);
  for (const [num, idx] of starts) if (idx > sectionStart[n]) return idx;
  return lines.length;
};

/* ---- heading normalization + matching ---- */
const norm = (s) => s.replace(/^\s*\d+\.\s*/, "").toLowerCase().replace(/[^a-z0-9]/g, "");

/* Hand-written passages for regions the PDF extraction garbles (form overlays)
   or where the first match is a figure grid. Keys are exact ref strings.

   Two kinds live here, and the difference decides whether an entry can ever be
   retired. Structural ones stand in for pages the layout dump cannot represent
   as prose at all: a scanned form, a grid of sign art with no body text. Those
   are permanent. The rest stand in for passages the extractor once mangled,
   and each is debt: when the extractor learns to read that page, check the
   extraction against the entry and delete it. Two went that way with the
   figure-column fix. Anything left here must still read verbatim against the
   official PDF, since the app presents it as the handbook's own words. */
const OVERRIDES = {
  /* Structural: a form overlay, extracts as "NAME (FIRST, MIDDLE, LAST) DMV places..." */
  "Section 12: Driver's License Restrictions":
    "DMV places restrictions on a driver's license to ensure a driver is operating a vehicle within their ability. Restrictions may be imposed by DMV or required by law. Restrictions placed on your driving privilege will be reasonable and necessary for your safety and the safety of others. Restrictions and conditions may include:\n• Requiring a driver to place special mechanical devices on their vehicle, such as hand controls.\n• Limiting when and where a person may drive, such as no night or freeway driving.\n• Requiring eyeglasses or corrective contact lenses.\n• Requiring additional devices, such as outside mirrors.\nNOTE: There are no specific restrictions for seniors. All restrictions are based on conditions, not age.",
  "Section 7: Warning Signs":
    "Warning signs are diamond-shaped yellow signs that warn you of specific road conditions and dangers ahead. Examples include: Slippery When Wet, Merging Traffic, Divided Highway, Two Way Traffic, Lane Ends, End Divided Highway, Traffic Signal Ahead, Pedestrian Crossing, Added Lane, Crossroad, Stop Ahead, Yield Ahead, Directional Arrow, Curve, T Intersection, and Winding Road. Separate warning signs also warn of conditions related to pedestrians, bicyclists, schools, playgrounds, school buses, and school passenger loading zones. Obey all warning signs regardless of their shape or color.",
  "Section 7: Right-of-Way Rules":
    "Right-of-way rules help you understand who goes first when vehicles, pedestrians, and bicyclists meet on the road. The vehicle that arrives to the intersection first has the right-of-way. Other vehicles, bicyclists, and pedestrians must wait for the person who has the right-of-way. Never assume that other drivers will give you the right-of-way. Give up your right-of-way when it will help prevent collisions.",
  "Section 7: Pedestrian Signals or Signs":
    "WALK or Walking Person: you may cross the street. DON'T WALK or Raised Hand: you may not cross the street. Flashing DON'T WALK or Flashing Raised Hand: do not start crossing the street: the traffic signal light is about to change. Drivers must yield to pedestrians, even if the DON'T WALK light is flashing. Numbers count down the seconds left for crossing the street. Sounds such as beeping, chirping, or verbal messages help blind or visually impaired pedestrians cross the street. If there are no pedestrian signals, obey the vehicle traffic signals.",
  "Section 7: Yellow and Black Circular Sign":
    "A yellow and black circular sign or an X-shaped sign means you are approaching a railroad crossing. Look, listen, slow down, and prepare to stop. Let any trains pass before you proceed. Many railroad crossings also have a blue and white sign to tell you what to do if there is an emergency on or near the tracks, or if your vehicle has stalled on the tracks.",
  "Section 6: Choosing a Lane":
    "Traffic lanes are often referred to by number. The left (or fast) lane is called the Number 1 Lane. The lane to the right of the Number 1 Lane is called the Number 2 Lane. Then the Number 3 Lane, etc. Here are some tips for choosing a lane:\n• Use the left lane to pass or turn left.\n• Use the right lane to enter or exit traffic or when you enter the road from a curb or shoulder.",
  "Section 6: Right Turns":
    "To make a right turn:\n• Drive close to the right edge of the road. If a designated right turn lane is available, enter at the opening. You can drive in a bike lane within 200 feet from the turn. Check for bicyclists in your blind spots.\n• Watch for pedestrians, bicyclists, or motorcyclists between your vehicle and the curb.\n• Start signaling about 100 feet before the turn.\n• Look over your right shoulder and reduce your speed.\n• Stop behind the limit line. A limit line is a wide white line that shows the drivers where to stop before an intersection or crosswalk. If there is no limit line, stop before you enter the crosswalk. If there is no crosswalk, stop before you enter the intersection.\n• Look both ways (left-right-left) and turn when it is safe.\n• Complete your turn in the right lane. Do not turn wide into another lane.",
  "Section 6: Left Turns":
    "To turn left:\n• Drive close to the center divider or into the left turn lane. Enter a designated left turn lane at the opening. Do not cross any solid line. Enter a two-way center left turn lane within 200 feet of the turn. Respect the right-of-way of any vehicle, bicyclist, or motorcyclist already in the lane. Always yield to pedestrians.\n• Start signaling 100 feet before the turn.\n• Look over your left shoulder and reduce your speed.\n• Stop behind the limit line. If there is no limit line, stop before you enter the crosswalk. If there is no crosswalk, stop before you enter the intersection.\n• Look both ways (left-right-left) and begin your turn when it is safe.\n• Proceed into the intersection while turning to complete your turn in the left lane.\n• Do not turn the steering wheel too soon and enter the lane of oncoming vehicles. Keep your wheels pointed straight ahead until it is safe to start your turn. If your wheels are pointed to the left and a vehicle hits you from behind, you could be pushed into oncoming traffic.",
  "Section 6: Parking on a Hill":
    "When you park on a hill, your vehicle could roll due to equipment failure. Remember to set the parking brake and leave the vehicle in park, or in gear for manual transmission. To park:\n• On a sloping driveway: Turn the wheels so the vehicle will not roll into the street, leave the vehicle in park and set the parking brake.\n• Headed downhill: Turn your front wheels into the curb or right toward the side of the road.\n• Headed uphill: Turn your front wheels away from the curb (left-towards the center of the road) and let your vehicle roll back a few inches. The wheel should gently touch the curb.\n• Headed either uphill or downhill when there is no curb: Turn the wheels to the right so the vehicle will roll away from the center of the road if the brakes fail.",
  "Section 7: Braking":
    "Large vehicles and commercial trucks take longer to stop than passenger vehicles traveling at the same speed. When traveling, they create extra space in front of their vehicle to use if they need to stop suddenly. The average passenger vehicle traveling at 55 mph can stop within 300 feet. A large vehicle traveling at the same speed can take up to 400 feet to stop. The heavier the vehicle and the faster it is moving, the longer it takes to safely stop, so a loaded truck will take longer to stop than an empty truck. Do not move in front of a large vehicle and suddenly slow down or stop. The large vehicle will not be able to stop fast enough to avoid crashing into you.",
  "Section 8: Seat Belts":
    "You and your passengers must wear seat belts. You can get a ticket if you do not. If your passenger is under 16 years old, you can also get a ticket if they are not wearing their seat belt. Wearing the lap belt and shoulder harness of a seat belt will increase your chance of survival in most types of collisions. When you are in a collision, your vehicle stops. But you keep moving at the same speed you were traveling. You only stop when you hit the dashboard or windshield. If you are struck from the side, the impact could push you back and forth across the seat. Seat and shoulder belts keep you in a better position to control the vehicle. They may also minimize serious injuries. It is important to wear the seat belt correctly to avoid injury or death:\n• Wear the shoulder harness across your shoulder and chest. There should be little to no slack. Do not wear the shoulder belt under your arm or behind your back.\n• Adjust the lap belt so that it is snug and lies low across your hips. Otherwise, you might slide out of the belt in a crash.\n• If you are pregnant, wear the lap belt as low as possible under your abdomen. Place the shoulder strap between your breasts and to the side of your abdomen's bulge."
};

/* Aliases where a question ref's wording differs from the printed heading. */
const ALIASES = {
  "Carpool/HOV Lanes": "Carpool/High-Occupancy Vehicle (HOV) Lanes",
  "NEVs and LSVs": "Neighborhood Electric Vehicles (NEVs) and Low-speed",
  "BAC Limits": "Blood Alcohol Concentration (BAC) Limits",
  "Alcohol or Cannabis Products in a Vehicle": "Use or Possession of Alcohol or Cannabis",
  "Financial Responsibility": "Financial Responsibility, Insurance"
};

function findHeading(sec, heading) {
  const start = sectionStart[sec] !== undefined ? sectionStart[sec] : 0;
  const end = sectionStart[sec] !== undefined ? sectionEnd(sec) : lines.length;
  const target = norm(ALIASES[heading] || heading);
  let best = -1;
  for (let i = start; i < end; i++) {                 // pass 1: exact
    if (norm(lines[i]) === target) return i;
  }
  for (let i = start; i < end; i++) {                 // pass 2: line starts with target
    const n = norm(lines[i]);
    if (n && n.startsWith(target)) { best = i; break; }
  }
  if (best >= 0) return best;
  for (let i = start; i < end - 1; i++) {             // pass 3: heading split across two lines
    const n2 = norm(lines[i]) + norm(lines[i + 1]);
    if (n2 === target || (n2 && n2.startsWith(target) && norm(lines[i]).length > 3)) return i;
  }
  for (let i = start; i < end; i++) {                 // pass 4: line contains target
    if (norm(lines[i]).includes(target)) return i;
  }
  return -1;
}

/* A line "looks like" a heading: short, Title-ish, no sentence punctuation. */
const STOPWORDS = new Set(["a", "an", "and", "at", "by", "for", "in", "of", "on", "or", "the", "to", "with", "your", "if", "is", "are"]);
function looksLikeHeading(l) {
  const t = l.trim();
  if (!t || t.length < 3 || t.length > 62) return false;
  if (/[.:;,!?]$/.test(t)) return false;
  if (t.includes(". ")) return false;
  if (/^[•. -]/.test(t)) return false;
  if (/^(NOTE|IMPORTANT|EXCEPTION):/i.test(t)) return false;
  if (!/^[A-Z0-9]/.test(t)) return false;
  const words = t.split(/\s+/).filter(w => !STOPWORDS.has(w.toLowerCase()));
  if (!words.length) return false;
  const caps = words.filter(w => /^[A-Z0-9("'’]/.test(w)).length;
  return caps / words.length >= 0.6;
}

/* Distance right of the passage margin at which a line belongs to the figure
   column beside the text rather than to the passage. Sub-bullets indent by up
   to 8; the art column on every two-column page starts well beyond that. */
const ASIDE = 12;

/* A line that stops short of sentence-ending punctuation is continued by the
   line after it, whether it is passage text or a wrapped figure caption. */
const unfinished = (s) => !!s && !/[.!?:;•][")'”’\]]*$/.test(s);

function extractPassage(headIdx, sec) {
  const end = sectionStart[sec] !== undefined ? sectionEnd(sec) : lines.length;
  const margin = indentOf(lines[headIdx]);
  const out = [];
  let chars = 0;
  let carry = -1;                                      // column an unfinished caption runs in
  for (let i = headIdx + 1; i < end && chars < 8000; i++) {
    const l = lines[i];
    const asideCol = carry;                            // a caption reaches the next line only
    carry = -1;
    if (isPageNum(l)) continue;
    if (/^SECTION \d+\./.test(l)) break;
    let trimmed = l.trim();
    if (!trimmed) continue;
    const indent = indentOf(l);
    /* The three rules below run in this order and the order is load-bearing.
       Each narrows what is left of the line before the next one reads it: the
       caption splice and the gap rule cut art off the right, then the heading
       tests judge what remains. Note that they judge `trimmed`, which those
       cuts may have rewritten, while `indent` still describes the line as it
       sits on the page, which is what decides whether it is art at all. */
    /* The rest of a caption that ran onto a second line can end up touching
       the body text with a single space, too narrow for the gap rule below.
       Cut at the column the caption started in. Only the line that finishes
       the caption is cut, so body text of the same width is left alone. */
    if (asideCol > 0 && indent < asideCol && l.length > asideCol
        && l[asideCol] !== " " && l[asideCol - 1] === " ") {
      if (unfinished(l.slice(asideCol).trim())) carry = asideCol;
      trimmed = l.slice(0, asideCol).trim();
    }
    /* Columnar figure captions (big internal space runs): keep any real text
       before the first gap, drop bare caption words entirely. Cut BEFORE the
       heading check so "Heading   Caption" lines still stop the passage. */
    const gap = trimmed.match(/^(.*?\S) {3,}\S/);
    if (gap) {
      trimmed = gap[1].trim();
      if (!/[.:;•]/.test(trimmed) && trimmed.split(/\s+/).length <= 2) continue;
    }
    /* A caption that sits alone on its line, because the body text beside it
       wrapped short, arrives here with nothing to its left. It is art, not
       passage: skip it and let the sentence it interrupts continue. Treating
       one as a heading truncated the passage mid-sentence, which is how
       "DO NOT ENTER and" came to be the whole of the WRONG WAY excerpt. A
       centered figure or table title still ends the passage, but only where
       the prose has already finished a sentence. */
    const prev = out[out.length - 1];
    if (indent - margin >= ASIDE) {
      if (prev && looksLikeHeading(trimmed) && !unfinished(prev)) break;
      if (unfinished(trimmed)) carry = indent;
      continue;
    }
    if (prev && looksLikeHeading(trimmed) && !/^\d+\.\s/.test(trimmed)) break;
    out.push(trimmed);
    chars += trimmed.length;
  }
  /* reflow: bullets and numbered steps start new lines; prose joins with spaces */
  let text = "";
  for (const l of out) {
    /* The trailing test is for the handbook's em dash sub-bullets. It read
       /^. /, an unescaped dot, so any line whose first word was one character
       ("A", "a", "6") also started a new line and split a sentence in two. */
    if (/^[•]/.test(l) || /^\d+\.\s/.test(l) || /^(NOTE|IMPORTANT|EXCEPTION):/i.test(l) || /^[—–-] /.test(l)) {
      text += "\n" + l;
    } else {
      text += (text ? " " : "") + l;
    }
  }
  return text.replace(/ {2,}/g, " ").replace(/\n /g, "\n").trim();
}

/* A question cites a section, not a paragraph, and sections run long. Taking
   the first 1200 characters showed the section's opening rather than the part
   that answers the question: the immigration-status rule, for one, sits well
   past the cutoff of the section its questions cite. That was tolerable when
   the passage only appeared after a wrong answer. It appears after every
   answer now, so the window has to be chosen rather than assumed.

   The window is a contiguous run of the source, so the text stays verbatim and
   still matches a search of the official PDF. */
const MAX = 1200;
const STOP = new Set(("the a an and or of to in on at for is are be you your with that this it "
  + "when if not do does can may must should will from as by their they them there its").split(" "));
const keyTerms = (s) => new Set(s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/)
  .filter(w => w.length > 3 && !STOP.has(w)));

/* Units a window is built from: bullets and numbered steps stay whole, and
   prose (which the reflow joins into one long line) splits into sentences so
   a long paragraph is still windowable. */
function splitUnits(text) {
  const units = [];
  for (const line of text.split("\n")) {
    if (line.length <= MAX / 2 || /^[•\d—–]/.test(line.trim())) { units.push(line); continue; }
    const parts = line.match(/[^.!?]+(?:[.!?]+["')\]]*|$)\s*/g) || [line];
    let buf = "";
    for (const p of parts) {
      if (buf && (buf + p).length > MAX / 2) { units.push(buf.trim()); buf = p; }
      else buf += p;
    }
    if (buf.trim()) units.push(buf.trim());
  }
  return units.filter(u => u.length);
}

function selectWindow(text, probe) {
  if (text.length <= MAX) return text;
  const units = splitUnits(text);
  const best = { score: -1, from: 0, to: 0 };
  for (let i = 0; i < units.length; i++) {
    let len = 0, j = i;
    const seen = new Set();
    while (j < units.length && len + units[j].length + 1 <= MAX) {
      len += units[j].length + 1;
      for (const w of keyTerms(units[j])) if (probe.has(w)) seen.add(w);
      j++;
    }
    if (j === i) continue;                       // single unit longer than MAX
    /* Prefer coverage; on a tie prefer the earlier window, which keeps the
       section opening for questions whose answer matches nothing in particular. */
    if (seen.size > best.score) { best.score = seen.size; best.from = i; best.to = j; }
  }
  if (best.score < 0) {                          // nothing fit: fall back to the opening
    const cut = text.lastIndexOf(". ", MAX);
    return (cut > 300 ? text.slice(0, cut + 1) : text.slice(0, MAX)) + " …";
  }
  let out = units.slice(best.from, best.to).join("\n").trim();
  if (best.from > 0) out = "… " + out;
  if (best.to < units.length) out = out + " …";
  return out;
}

/* ---- build ---- */
const map = {};
const missing = [];
for (const ref of refs) {
  if (OVERRIDES[ref]) { map[ref] = OVERRIDES[ref]; continue; }
  const m = ref.match(/^Section (\d+): (.+)$/);
  if (!m) { missing.push(ref + "  (unparseable)"); continue; }
  const sec = parseInt(m[1], 10);
  const idx = findHeading(sec, m[2]);
  if (idx < 0) { missing.push(ref); continue; }
  const full = extractPassage(idx, sec);
  if (full.length < 40) { missing.push(ref + "  (too short: " + full.length + ")"); continue; }
  /* Aim the window at what the citing questions actually assert. */
  const probe = keyTerms(BANK.filter(q => q.ref.split(" / ")[0].trim() === ref)
    .map(q => q.choices[0] + " " + q.explain).join(" "));
  map[ref] = selectWindow(full, probe);
}

console.log("Distinct refs: " + refs.length);
console.log("Extracted:     " + Object.keys(map).length);
if (missing.length) {
  console.log("MISSING (" + missing.length + "):");
  missing.forEach(r => console.log("  - " + r));
}

const banner = "// AUTO-GENERATED by tools/build-excerpts.js. Regenerate, don't hand-edit.\n" +
  "// Passages from the California Driver's Handbook (DL 600 rev. 6/2025),\n" +
  "// © California DMV, CC BY-NC 4.0. Shown as source context for answers.\n";
fs.writeFileSync(path.join(__dirname, "..", "docs", "handbook.js"),
  banner + "const HANDBOOK_EXCERPTS =\n" + JSON.stringify(map, null, 1) + ";\n");
console.log("Wrote docs/handbook.js (" + Math.round(fs.statSync(path.join(__dirname, "..", "docs", "handbook.js")).size / 1024) + " KB)");
process.exit(missing.length ? 1 : 0);
