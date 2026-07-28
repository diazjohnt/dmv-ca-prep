/* CA DMV Practice. Application logic.
   Pure test-generation functions are defined first and exported for the Node
   smoke tests (tools/logic-test.js); all DOM code is guarded so this file can
   be loaded headlessly. */

"use strict";

/* ================= Pure logic ================= */

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleInPlace(arr, rnd) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* Real DMV pass lines: 36→30, 40→33, 46→38 (~83%). round(n*38/46) hits all three. */
function passNeeded(n) { return Math.round(n * 38 / 46); }

/* Largest-remainder allocation of `length` slots across topic pools,
   capped by pool size, exact total guaranteed. */
function topicQuotas(poolSizes, length) {
  const totalPool = poolSizes.reduce((a, b) => a + b, 0);
  const exact = poolSizes.map(s => length * s / totalPool);
  const quotas = exact.map(Math.floor);
  let remaining = length - quotas.reduce((a, b) => a + b, 0);
  const order = exact
    .map((e, i) => ({ i, frac: e - Math.floor(e) }))
    .sort((a, b) => b.frac - a.frac);
  for (const { i } of order) {
    if (remaining <= 0) break;
    if (quotas[i] < poolSizes[i]) { quotas[i]++; remaining--; }
  }
  let guard = 0;
  while (remaining > 0 && guard++ < 1000) {
    for (let i = 0; i < quotas.length && remaining > 0; i++) {
      if (quotas[i] < poolSizes[i]) { quotas[i]++; remaining--; }
    }
  }
  return quotas;
}

/* Build a test: topic-balanced draw preferring least-seen questions, then a
   per-question shuffle of the three choices. Returns [{id, perm}] where
   perm[displaySlot] = original choice index (original 0 = correct). */
function buildTest(bank, length, seen, rnd) {
  const byTopic = new Map();
  for (const q of bank) {
    if (!byTopic.has(q.topic)) byTopic.set(q.topic, []);
    byTopic.get(q.topic).push(q);
  }
  const topics = [...byTopic.keys()].sort();
  const pools = topics.map(t => byTopic.get(t));
  const quotas = topicQuotas(pools.map(p => p.length), Math.min(length, bank.length));
  const picked = [];
  pools.forEach((pool, i) => {
    const copy = pool.slice();
    shuffleInPlace(copy, rnd);                    // random tiebreak…
    copy.sort((a, b) => (seen[a.id] || 0) - (seen[b.id] || 0)); // …stable sort by times seen
    picked.push(...copy.slice(0, quotas[i]));
  });
  shuffleInPlace(picked, rnd);
  return picked.map(q => {
    const perm = shuffleInPlace([0, 1, 2], rnd);
    return { id: q.id, perm };
  });
}

/* Focused test: draw from one subject pool, preferring least-seen questions. */
function buildFocused(ids, length, seen, rnd) {
  const pool = ids.slice();
  shuffleInPlace(pool, rnd);                                   // random tiebreak…
  pool.sort((a, b) => (seen[a] || 0) - (seen[b] || 0));        // …then least-seen first
  const picked = pool.slice(0, Math.min(length, pool.length));
  shuffleInPlace(picked, rnd);
  return picked.map(id => ({ id, perm: shuffleInPlace([0, 1, 2], rnd) }));
}

/* Length choices for a pool: always "10 or full", where full is 46 when the
   pool allows it and the whole pool otherwise. Pools of 10 or fewer offer
   only "All". */
function lengthChoices(poolSize, isFocused) {
  const full = isFocused ? poolSize : Math.min(46, poolSize);
  const fullLabel = isFocused ? "All" : "Full test";
  const fullNote = isFocused ? "every question in this subject" : "same length as the real test";
  if (poolSize <= 10) return [{ pref: "full", value: poolSize, label: fullLabel, note: fullNote }];
  return [
    { pref: "short", value: 10, label: "10 question sample", note: "quick practice" },
    { pref: "full", value: full, label: fullLabel, note: fullNote }
  ];
}

function buildDrill(ids, rnd) {
  return ids.map(id => {
    const perm = shuffleInPlace([0, 1, 2], rnd);
    return { id, perm };
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { mulberry32, shuffleInPlace, passNeeded, topicQuotas, buildTest, buildDrill, buildFocused, lengthChoices };
}

/* ================= App (browser only) ================= */
if (typeof document !== "undefined") (function () {

  const BANK = QUESTION_BANK; // global lexical binding from questions.js
  const BANK_MAP = new Map(BANK.map(q => [q.id, q]));

  /* Focused-subject pools: sign/signal questions, and questions whose answer
     choices are numbers to memorize (feet, mph, days, BAC, fines…). */
  const inDrill = (tag) => BANK.filter(q => (q.drills || []).includes(tag)).map(q => q.id);
  const SUBJECTS = {
    signs: { name: "Road signs", blurb: "Shapes, colors, meanings", ids: inDrill("signs") },
    signals: { name: "Traffic signals", blurb: "Lights, arrows, walk signals", ids: inDrill("signals") },
    numbers: { name: "Numbers & limits", blurb: "Distances, speeds, days, BAC", ids: inDrill("numbers") }
  };
  const ALL_QIDS = BANK.map(q => q.id);

  const TOPIC_NAMES = {
    "licensing": "Licenses & permits",
    "intro-driving": "Signals, lights & horn",
    "lanes": "Lanes & road markings",
    "turns": "Turns & U-turns",
    "parking": "Parking",
    "merging-passing": "Merging & passing",
    "signals-signs": "Signs & traffic signals",
    "right-of-way": "Right-of-way",
    "sharing-road": "Sharing the road",
    "speed": "Speed limits",
    "safe-driving": "Safe driving",
    "alcohol-drugs": "Alcohol & drugs",
    "records-penalties": "Records & penalties",
    "insurance-collisions": "Insurance & collisions",
    "registration": "Vehicle registration",
    "vehicle-misc": "Police stops & vehicle rules"
  };

  /* ---- Road-sign art (content imagery, real-world sign colors) ---- */
  const DIAMOND = (inner) =>
    '<svg viewBox="0 0 120 120" role="img"><path d="M60 3 117 60 60 117 3 60Z" fill="#ffcd00" stroke="#1a1a19" stroke-width="4"/>' + inner + "</svg>";
  const SIGN_ART = {
    stop: '<svg viewBox="0 0 120 120" role="img"><path d="M37 4h46l33 33v46l-33 33H37L4 83V37Z" fill="#c8102e" stroke="#fff" stroke-width="5"/><text x="60" y="72" text-anchor="middle" font-size="30" font-weight="800" fill="#fff" font-family="system-ui,sans-serif">STOP</text></svg>',
    yield: '<svg viewBox="0 0 120 110" role="img"><path d="M6 6h108L60 104Z" fill="#c8102e" stroke="var(--baseline,#999)" stroke-width="2"/><path d="M22 15h76L60 84Z" fill="#fff"/><text x="60" y="42" text-anchor="middle" font-size="19" font-weight="800" fill="#c8102e" font-family="system-ui,sans-serif">YIELD</text></svg>',
    rr: '<svg viewBox="0 0 120 120" role="img"><circle cx="60" cy="60" r="56" fill="#ffcd00" stroke="#1a1a19" stroke-width="4"/><path d="M28 28 92 92M92 28 28 92" stroke="#1a1a19" stroke-width="9" stroke-linecap="round"/><text x="24" y="68" text-anchor="middle" font-size="24" font-weight="800" fill="#1a1a19" font-family="system-ui,sans-serif">R</text><text x="96" y="68" text-anchor="middle" font-size="24" font-weight="800" fill="#1a1a19" font-family="system-ui,sans-serif">R</text></svg>',
    school: '<svg viewBox="0 0 120 120" role="img"><path d="M60 4 116 44V116H4V44Z" fill="#ffcd00" stroke="#1a1a19" stroke-width="4"/><circle cx="47" cy="56" r="7" fill="#1a1a19"/><path d="M47 63v20M47 70l-9 12M47 70l9 12M47 68l-10-4M47 68l10-4" stroke="#1a1a19" stroke-width="4" stroke-linecap="round"/><circle cx="76" cy="50" r="7" fill="#1a1a19"/><path d="M76 57v20M76 64l-9 13M76 64l9 13M76 61l-10-3M76 61l10-3" stroke="#1a1a19" stroke-width="4" stroke-linecap="round"/></svg>',
    warning: DIAMOND('<text x="60" y="76" text-anchor="middle" font-size="52" font-weight="800" fill="#1a1a19" font-family="system-ui,sans-serif">!</text>'),
    dne: '<svg viewBox="0 0 120 120" role="img"><rect x="2" y="2" width="116" height="116" rx="10" fill="#fff" stroke="var(--baseline,#999)" stroke-width="2"/><circle cx="60" cy="60" r="50" fill="#c8102e"/><rect x="22" y="52" width="76" height="16" rx="3" fill="#fff"/><text x="60" y="42" text-anchor="middle" font-size="15" font-weight="800" fill="#fff" font-family="system-ui,sans-serif">DO NOT</text><text x="60" y="92" text-anchor="middle" font-size="15" font-weight="800" fill="#fff" font-family="system-ui,sans-serif">ENTER</text></svg>',
    wrongway: '<svg viewBox="0 0 150 90" role="img"><rect x="2" y="2" width="146" height="86" rx="8" fill="#c8102e" stroke="#fff" stroke-width="4"/><text x="75" y="40" text-anchor="middle" font-size="24" font-weight="800" fill="#fff" font-family="system-ui,sans-serif">WRONG</text><text x="75" y="72" text-anchor="middle" font-size="24" font-weight="800" fill="#fff" font-family="system-ui,sans-serif">WAY</text></svg>',
    slowmoving: '<svg viewBox="0 0 120 110" role="img"><path d="M60 6 112 100H8Z" fill="#e4581f" stroke="#a3172a" stroke-width="7" stroke-linejoin="round"/></svg>',
    slippery: DIAMOND('<rect x="44" y="38" width="34" height="14" rx="6" fill="#1a1a19"/><circle cx="52" cy="56" r="5" fill="#1a1a19"/><circle cx="72" cy="56" r="5" fill="#1a1a19"/><path d="M34 70q8-7 0-14M50 78q8-7 0-14M66 86q8-7 0-14" transform="rotate(-38 60 70)" stroke="#1a1a19" stroke-width="4" fill="none" stroke-linecap="round"/>'),
    merge: DIAMOND('<path d="M60 96V52q0-14 0-14" stroke="#1a1a19" stroke-width="8" fill="none"/><path d="M42 92q2-22 16-34" stroke="#1a1a19" stroke-width="7" fill="none"/><path d="M60 22 50 42h20Z" fill="#1a1a19"/><path d="M60 40V24" stroke="#1a1a19" stroke-width="8"/>'),
    signalahead: DIAMOND('<rect x="46" y="30" width="28" height="60" rx="8" fill="#1a1a19"/><circle cx="60" cy="44" r="7" fill="#c8102e"/><circle cx="60" cy="60" r="7" fill="#ffcd00" stroke="#1a1a19" stroke-width="1.5"/><circle cx="60" cy="76" r="7" fill="#00843d"/>'),
    laneends: DIAMOND('<path d="M42 26v68" stroke="#1a1a19" stroke-width="8" stroke-linecap="round"/><path d="M80 26q0 34-30 52" stroke="#1a1a19" stroke-width="8" fill="none" stroke-linecap="round"/>'),
    dividedhwy: DIAMOND('<ellipse cx="60" cy="62" rx="9" ry="22" fill="#1a1a19"/><path d="M44 92q-2-26 0-38q1-8 -6-10" stroke="#1a1a19" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M40 36 32 50l14 2Z" fill="#1a1a19"/><path d="M76 92q2-26 0-38q-1-8 6-10" stroke="#1a1a19" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M80 36 74 52l14-2Z" fill="#1a1a19"/>'),
    pedestrian: DIAMOND('<circle cx="58" cy="34" r="8" fill="#1a1a19"/><path d="M58 42q-3 14 2 22M60 64l-10 26M60 64l8 24M58 46l-13 10M58 46l13 6" stroke="#1a1a19" stroke-width="5" fill="none" stroke-linecap="round"/>')
  };

  /* ---- Storage ---- */
  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
      catch { return fallback; }
    },
    set(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* private mode */ } },
    del(key) { try { localStorage.removeItem(key); } catch { } }
  };
  const K = { settings: "dmvprep.settings", seen: "dmvprep.seen", history: "dmvprep.history", active: "dmvprep.active" };

  let settings = Object.assign({ type: "standard", subject: "signs", lengthPref: "full", mode: "exam" },
    store.get(K.settings, {}));
  if (settings.lengthPref !== "short" && settings.lengthPref !== "full") {
    settings.lengthPref = settings.length === 10 ? "short" : "full";   // migrate older {length: n}
  }
  delete settings.length; delete settings.customLen;
  if (!SUBJECTS[settings.subject]) settings.subject = "signs";
  if (settings.type !== "standard" && settings.type !== "focused") settings.type = "standard";
  let active = store.get(K.active, null);
  const rnd = mulberry32(Date.now() ^ (Math.random() * 0xffffffff));

  const $ = (id) => document.getElementById(id);
  const screens = ["home", "quiz", "results", "history"];

  function show(name) {
    screens.forEach(s => { $("screen-" + s).hidden = s !== name; });
    window.scrollTo(0, 0);
  }

  function toast(msg) {
    const t = $("toast");
    t.textContent = msg; t.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => { t.hidden = true; }, 2400);
  }

  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const pct = (a, b) => b ? Math.round(100 * a / b) : 0;

  /* ================= Home ================= */

  function currentPool() {
    return settings.type === "focused" ? SUBJECTS[settings.subject].ids : ALL_QIDS;
  }
  function currentChoices() {
    return lengthChoices(currentPool().length, settings.type === "focused");
  }
  function effectiveLength() {
    const choices = currentChoices();
    const hit = choices.find(c => c.pref === settings.lengthPref);
    return (hit || choices[choices.length - 1]).value;
  }

  /* Handbook source passage for a question's reference (first ref when combined). */
  function excerptFor(ref) {
    if (typeof HANDBOOK_EXCERPTS === "undefined") return null;
    return HANDBOOK_EXCERPTS[ref.split(" / ")[0].trim()] || null;
  }
  function hbBlock(ref) {
    const ex = excerptFor(ref);
    if (!ex) return "";
    return `<details class="hb"><summary>📖 What the handbook says</summary><div class="hb-text">${esc(ex).replace(/\n/g, "<br>")}<span class="hb-src">Text from the 2025 California Driver’s Handbook (line breaks adjusted). Searchable in the official PDF.</span></div></details>`;
  }

  function renderHome() {
    const focused = settings.type === "focused";

    document.querySelectorAll("[data-type]").forEach(b =>
      b.setAttribute("aria-checked", String(b.dataset.type === settings.type)));
    document.querySelectorAll("[data-mode]").forEach(b =>
      b.setAttribute("aria-checked", String(b.dataset.mode === settings.mode)));

    $("subjectSeg").innerHTML = Object.entries(SUBJECTS).map(([key, s]) =>
      `<button class="seg-btn subject" data-subject="${key}" role="radio" aria-checked="${key === settings.subject}">
         <strong>${esc(s.name)}</strong><small>${esc(s.blurb)}</small>
       </button>`).join("");

    $("subjectStep").hidden = !focused;
    $("lenStepNum").textContent = focused ? "3" : "2";
    $("modeStepNum").textContent = focused ? "4" : "3";

    const choices = currentChoices();
    const activePref = (choices.find(c => c.pref === settings.lengthPref) || choices[choices.length - 1]).pref;
    $("lenSeg").innerHTML = choices.map(c =>
      `<button class="seg-btn" data-lenpref="${c.pref}" role="radio" aria-checked="${c.pref === activePref}">${c.label}<small>${c.note}</small></button>`).join("");

    const n = effectiveLength();
    $("passNote").textContent = `Pass line: ${passNeeded(n)} of ${n} correct, about 83 percent, the same bar as the real test.`;
    $("startTest").textContent = focused
      ? `Start ${SUBJECTS[settings.subject].name.toLowerCase()} test`
      : "Start test";

    const hist = store.get(K.history, []);
    const standard = hist.filter(h => !h.focused);
    $("statsCard").hidden = standard.length === 0;
    if (standard.length) {
      const passes = standard.filter(h => h.pass).length;
      const best = Math.max(...standard.map(h => pct(h.correct, h.len)));
      const last = standard[standard.length - 1];
      $("statTiles").innerHTML = [
        tile(standard.length, "tests taken"),
        tile(pct(passes, standard.length) + "%", "pass rate"),
        tile(best + "%", "best score"),
        tile(pct(last.correct, last.len) + "%", "last score")
      ].join("");
    }
    $("resumeNote").hidden = !(active && !active.submitted);
  }
  const tile = (v, l) => `<div class="stat-tile"><span class="stat-val">${v}</span><span class="stat-lbl">${l}</span></div>`;

  /* ================= Quiz ================= */

  function startTest(fromResume) {
    if (!fromResume) {
      const n = effectiveLength();
      const seen = store.get(K.seen, {});
      const focused = settings.type === "focused";
      active = {
        items: focused
          ? buildFocused(SUBJECTS[settings.subject].ids, n, seen, rnd)
          : buildTest(BANK, n, seen, rnd),
        answers: {}, flags: {}, idx: 0,
        mode: settings.mode, isDrill: false,
        focused: focused, subject: focused ? settings.subject : null,
        startedAt: Date.now(), submitted: false
      };
      store.set(K.active, active);
    }
    show("quiz");
    renderQuestion();
  }

  function startDrill(ids, label) {
    if (active && !active.submitted && !confirm("Discard your in-progress test and start this drill?")) return;
    const list = ids.filter(id => BANK_MAP.has(id));
    if (!list.length) { toast("Nothing to practice. Nice!"); return; }
    active = {
      items: buildDrill(shuffleInPlace(list.slice(), rnd), rnd),
      answers: {}, flags: {}, idx: 0,
      mode: "study", isDrill: true,
      startedAt: Date.now(), submitted: false
    };
    store.set(K.active, active);
    toast(label);
    show("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const n = active.items.length;
    const i = active.idx;
    const item = active.items[i];
    const q = BANK_MAP.get(item.id);
    const picked = active.answers[i]; // display-slot index or undefined
    const locked = active.mode === "study" && picked !== undefined;

    const answered = Object.keys(active.answers).length;
    $("progressText").textContent = `${answered} of ${n} answered`;
    $("counterNow").textContent = String(i + 1);
    $("counterTotal").textContent = String(n);
    $("progressFill").style.width = (100 * answered / n) + "%";

    const signWrap = $("qSign");
    if (q.sign && SIGN_ART[q.sign]) { signWrap.innerHTML = SIGN_ART[q.sign]; signWrap.hidden = false; }
    else { signWrap.innerHTML = ""; signWrap.hidden = true; }

    $("qText").textContent = q.q;

    const letters = ["A", "B", "C"];
    $("choices").innerHTML = item.perm.map((orig, slot) => {
      let cls = "choice";
      if (locked) {
        if (orig === 0) cls += " is-correct";
        else if (slot === picked) cls += " is-wrong";
      }
      const checked = !locked && picked === slot;
      return `<button class="${cls}" data-slot="${slot}" role="radio" aria-checked="${checked}" ${locked ? "disabled" : ""}>
        <span class="choice-letter">${letters[slot]}</span><span>${esc(q.choices[orig])}</span></button>`;
    }).join("");

    const fb = $("feedback");
    if (locked) {
      const correct = item.perm[picked] === 0;
      fb.innerHTML = `<span class="verdict ${correct ? "ok" : "no"}">${correct ? "✓ Correct" : "✗ Not quite"}</span>
        ${esc(q.explain)}<span class="ref">${esc(q.ref)} · California Driver’s Handbook</span>
        ${correct ? "" : hbBlock(q.ref)}`;
      fb.hidden = false;
    } else { fb.hidden = true; fb.innerHTML = ""; }

    $("prevQ").disabled = i === 0;
    const flagged = !!active.flags[i];
    $("flagQ").setAttribute("aria-pressed", String(flagged));
    $("flagQ").textContent = flagged ? "Flagged" : "Flag";
    const last = i === n - 1;
    $("nextQ").textContent = last ? (answered === n ? "Finish" : "Review") : "Next";
  }

  let advanceTimer = null;
  function pickChoice(slot) {
    const i = active.idx;
    if (active.mode === "study" && active.answers[i] !== undefined) return;
    if (active.mode === "exam" && advanceTimer) return; // ignore double-taps mid-advance
    active.answers[i] = slot;
    store.set(K.active, active);
    renderQuestion();
    if (active.mode === "exam") {
      advanceTimer = setTimeout(() => { advanceTimer = null; nextQuestion(); }, 160);
    }
  }

  function nextQuestion() {
    if (advanceTimer) { clearTimeout(advanceTimer); advanceTimer = null; }
    if (active.idx < active.items.length - 1) { active.idx++; store.set(K.active, active); renderQuestion(); }
    else if (active.mode === "study" && Object.keys(active.answers).length === active.items.length) {
      finishTest(); // study mode already showed every answer, no review sheet needed
    }
    else openPalette(true);
  }

  /* ---- Palette / submit sheet ---- */
  function openPalette(fromEnd) {
    const grid = $("paletteGrid");
    grid.innerHTML = active.items.map((_, i) => {
      const cls = ["pal-btn"];
      if (active.answers[i] !== undefined) cls.push("answered");
      if (active.flags[i]) cls.push("flagged");
      if (i === active.idx) cls.push("current");
      return `<button class="${cls.join(" ")}" data-jump="${i}" aria-label="Question ${i + 1}">${i + 1}</button>`;
    }).join("");
    const unanswered = active.items.length - Object.keys(active.answers).length;
    $("submitTest").textContent = unanswered
      ? `Submit (${unanswered} unanswered)` : "Submit test";
    const jump = $("jumpInput");
    jump.max = String(active.items.length);
    jump.value = "";
    jump.placeholder = "1 to " + active.items.length;
    $("paletteSheet").hidden = false;
  }

  function goToQuestion(oneBased) {
    const n = active.items.length;
    const idx = Math.min(n, Math.max(1, oneBased)) - 1;
    active.idx = idx;
    store.set(K.active, active);
    closePalette();
    renderQuestion();
  }
  function closePalette() { $("paletteSheet").hidden = true; }

  function submitTest() {
    const unanswered = active.items.length - Object.keys(active.answers).length;
    if (unanswered > 0 && !confirm(`You have ${unanswered} unanswered question${unanswered > 1 ? "s" : ""}. Unanswered questions count as wrong. Submit anyway?`)) return;
    closePalette();
    finishTest();
  }

  function finishTest() {
    active.submitted = true;
    const perTopic = {};
    const missed = [];
    let correct = 0;
    const seen = store.get(K.seen, {});
    active.items.forEach((item, i) => {
      const q = BANK_MAP.get(item.id);
      seen[item.id] = (seen[item.id] || 0) + 1;
      const t = perTopic[q.topic] || (perTopic[q.topic] = [0, 0]);
      t[1]++;
      const picked = active.answers[i];
      const ok = picked !== undefined && item.perm[picked] === 0;
      if (ok) { correct++; t[0]++; } else missed.push(item.id);
    });
    store.set(K.seen, seen);

    const result = {
      ts: Date.now(), len: active.items.length, correct,
      pass: correct >= passNeeded(active.items.length),
      mode: active.mode, perTopic, missed, wasDrill: active.isDrill,
      focused: !!active.focused, subject: active.subject,
      answers: active.items.map((item, i) => ({ id: item.id, perm: item.perm, picked: active.answers[i] ?? null }))
    };

    if (!active.isDrill) {
      /* Focused runs are stored with focused:true. They feed per-topic
         accuracy and the weak-spot bank, but are filtered out of the
         attempt list and readiness trend. */
      const hist = store.get(K.history, []);
      hist.push({
        ts: result.ts, len: result.len, correct, pass: result.pass, mode: result.mode,
        perTopic, missed, focused: result.focused, subject: result.subject
      });
      while (hist.length > 200) hist.shift();
      store.set(K.history, hist);
    }
    store.del(K.active); active = null;
    renderResults(result);
    show("results");
  }

  /* ================= Results ================= */

  function renderResults(r) {
    const p = pct(r.correct, r.len);
    const need = passNeeded(r.len);
    const chip = $("resultChip");
    if (r.wasDrill) { chip.className = "result-chip"; chip.textContent = "Practice drill"; }
    else if (r.pass) { chip.className = "result-chip pass"; chip.textContent = "✓ PASS"; }
    else { chip.className = "result-chip fail"; chip.textContent = "✗ NOT YET"; }
    $("resultScore").innerHTML = `${r.correct}<small> / ${r.len} (${p}%)</small>`;
    const subjectLine = r.focused && SUBJECTS[r.subject]
      ? `${SUBJECTS[r.subject].name} · focused practice. Counts toward your topic stats, not your readiness trend. `
      : "";
    $("resultNote").textContent = r.wasDrill
      ? "Drills are for practice. They don’t count toward your history."
      : subjectLine + `Pass line for this length: ${need} of ${r.len}. ` + (r.pass
        ? (r.focused ? "Solid. You know this subject." : "That’s a passing score on the real test. Keep it up!")
        : `You needed ${need - r.correct} more. Review your misses below and try again.`);

    renderTopicChart($("topicChart"), r.perTopic);

    const missedQs = r.missed.map(id => BANK_MAP.get(id)).filter(Boolean);
    $("missedHead").textContent = missedQs.length
      ? `Review your ${missedQs.length} miss${missedQs.length > 1 ? "es" : ""}`
      : "Review";
    const pickedById = {};
    (r.answers || []).forEach(a => { pickedById[a.id] = a; });
    $("missedList").innerHTML = missedQs.length ? missedQs.map(q => {
      const a = pickedById[q.id];
      let yourLine = "<p class='miss-line you'>✗ You didn’t answer this one.</p>";
      if (a && a.picked !== null && a.picked !== undefined) {
        yourLine = `<p class="miss-line you">✗ Your answer: ${esc(q.choices[a.perm[a.picked]])}</p>`;
      }
      return `<div class="miss-item">
        ${q.sign && SIGN_ART[q.sign] ? `<div class="miss-sign">${SIGN_ART[q.sign]}</div>` : ""}
        <p class="miss-q">${esc(q.q)}</p>
        ${yourLine}
        <p class="miss-line ans">✓ Correct: ${esc(q.choices[0])}</p>
        <p class="miss-expl">${esc(q.explain)}</p>
        <span class="miss-ref">${esc(q.ref)} · California Driver’s Handbook</span>
        ${hbBlock(q.ref)}
      </div>`;
    }).join("") : `<p class="all-correct">✓ Perfect. Nothing to review!</p>`;

    const drillBtn = $("drillMisses");
    drillBtn.hidden = missedQs.length === 0;
    drillBtn.onclick = () => startDrill(r.missed, "Practicing the ones you missed");
  }

  function renderTopicChart(el, perTopic) {
    const rows = Object.keys(perTopic).sort((a, b) =>
      (TOPIC_NAMES[a] || a).localeCompare(TOPIC_NAMES[b] || b));
    el.innerHTML = rows.map(t => {
      const [c, n] = perTopic[t];
      const w = pct(c, n);
      return `<div class="topic-row">
        <div class="topic-head"><span class="topic-name">${esc(TOPIC_NAMES[t] || t)}</span>
        <span class="topic-val">${c}/${n} · ${w}%</span></div>
        <div class="topic-track"><div class="topic-fill${w === 0 ? " zero" : ""}" style="width:${w}%"></div></div>
      </div>`;
    }).join("");
  }

  /* ================= History ================= */

  function renderHistory() {
    const all = store.get(K.history, []);
    const hist = all.filter(h => !h.focused);   // readiness record: standard tests only
    $("historyEmpty").hidden = hist.length > 0;
    $("historyEmpty").textContent = all.length > hist.length
      ? "No standard tests yet. Focused sessions aren’t listed here. They feed your topic accuracy below. Take a standard test to start tracking readiness."
      : "No tests taken yet. Your scores will show up here.";
    $("attemptList").innerHTML = hist.slice().reverse().map(h => {
      const when = new Date(h.ts).toLocaleDateString(undefined, { month: "short", day: "numeric" }) +
        " · " + new Date(h.ts).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
      return `<div class="attempt"><span class="when">${when}</span>
        <span class="score">${h.correct}/${h.len} (${pct(h.correct, h.len)}%)</span>
        <span class="mini-chip ${h.pass ? "pass" : "fail"}">${h.pass ? "✓ pass" : "✗ fail"}</span></div>`;
    }).join("");

    renderTrend(hist);

    /* Topic accuracy and the weak-spot bank draw on every test, focused included. */
    $("lifetimeCard").hidden = all.length === 0;
    if (all.length) {
      const agg = {};
      all.forEach(h => Object.entries(h.perTopic).forEach(([t, [c, n]]) => {
        const a = agg[t] || (agg[t] = [0, 0]); a[0] += c; a[1] += n;
      }));
      renderTopicChart($("lifetimeChart"), agg);
      const focusedCount = all.length - hist.length;
      $("lifetimeNote").textContent = focusedCount
        ? `Includes ${focusedCount} focused session${focusedCount > 1 ? "s" : ""}. The trend above counts standard tests only.`
        : "";
    }

    const missedIds = [...new Set(all.flatMap(h => h.missed))].filter(id => BANK_MAP.has(id));
    $("missBankCard").hidden = missedIds.length === 0;
    if (missedIds.length) {
      $("missBankNote").textContent = `${missedIds.length} question${missedIds.length > 1 ? "s" : ""} you’ve gotten wrong at least once. Drill them until they stick.`;
      $("drillAllMisses").onclick = () => startDrill(missedIds, "Practicing all your misses");
    }
  }

  function renderTrend(hist) {
    const wrap = $("trendWrap");
    if (hist.length < 2) { wrap.innerHTML = ""; return; }
    const data = hist.slice(-30);
    const W = 320, H = 130, L = 30, R = 8, T = 10, B = 22;
    const iw = W - L - R, ih = H - T - B;
    const x = (i) => L + (data.length === 1 ? iw / 2 : i * iw / (data.length - 1));
    const y = (v) => T + ih - (v / 100) * ih;
    const line = data.map((h, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(pct(h.correct, h.len)).toFixed(1)}`).join("");
    const gl = (v, label) =>
      `<line x1="${L}" y1="${y(v)}" x2="${W - R}" y2="${y(v)}" stroke="var(--grid)" stroke-width="1"/>
       <text x="${L - 5}" y="${y(v) + 3.5}" text-anchor="end" font-size="9.5" fill="var(--muted)">${label}</text>`;
    const passY = y(83);
    const pts = data.map((h, i) =>
      `<circle cx="${x(i).toFixed(1)}" cy="${y(pct(h.correct, h.len)).toFixed(1)}" r="4" fill="var(--series)"/>
       <circle cx="${x(i).toFixed(1)}" cy="${y(pct(h.correct, h.len)).toFixed(1)}" r="11" fill="transparent" data-pt="${hist.length - data.length + i}" style="cursor:pointer"/>`).join("");
    wrap.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Score trend across your last ${data.length} tests">
      ${gl(0, "0")}${gl(50, "50")}${gl(100, "100")}
      <line x1="${L}" y1="${passY}" x2="${W - R}" y2="${passY}" stroke="var(--good)" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="${W - R}" y="${passY - 4}" text-anchor="end" font-size="9.5" fill="var(--good-text)">pass · 83%</text>
      <path d="${line}" fill="none" stroke="var(--series)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
      ${pts}</svg>`;
    wrap.querySelectorAll("[data-pt]").forEach(c => {
      const show = (ev) => {
        const h = hist[parseInt(c.dataset.pt, 10)];
        let tip = document.querySelector(".trend-tip");
        if (!tip) { tip = document.createElement("div"); tip.className = "trend-tip"; document.body.appendChild(tip); }
        tip.textContent = `${new Date(h.ts).toLocaleDateString()}. ${h.correct}/${h.len} (${pct(h.correct, h.len)}%) ${h.pass ? "✓" : "✗"}`;
        const r2 = c.getBoundingClientRect();
        tip.style.left = Math.min(window.innerWidth - 180, Math.max(8, r2.left - 60)) + "px";
        tip.style.top = (r2.top - 40) + "px";
      };
      c.addEventListener("mouseenter", show);
      c.addEventListener("click", show);
      c.addEventListener("mouseleave", () => document.querySelector(".trend-tip")?.remove());
    });
  }

  /* ================= Wiring ================= */

  $("startTest").addEventListener("click", () => {
    if (active && !active.submitted && !confirm("Discard your in-progress test and start a new one?")) return;
    startTest(false);
  });
  $("resumeTest").addEventListener("click", () => startTest(true));
  $("brandHome").addEventListener("click", () => { renderHome(); show("home"); });
  $("navHistory").addEventListener("click", () => { renderHistory(); show("history"); });
  $("homeHistory").addEventListener("click", () => { renderHistory(); show("history"); });
  $("historyHome").addEventListener("click", () => { renderHome(); show("home"); });
  $("resultsHome").addEventListener("click", () => { renderHome(); show("home"); });
  $("newFromResults").addEventListener("click", () => startTest(false));

  document.querySelectorAll("[data-type]").forEach(b => b.addEventListener("click", () => {
    settings.type = b.dataset.type;
    store.set(K.settings, settings); renderHome();
  }));
  $("subjectSeg").addEventListener("click", (e) => {
    const b = e.target.closest("[data-subject]");
    if (!b) return;
    settings.subject = b.dataset.subject;
    store.set(K.settings, settings); renderHome();
  });
  $("lenSeg").addEventListener("click", (e) => {
    const b = e.target.closest("[data-lenpref]");
    if (!b) return;
    settings.lengthPref = b.dataset.lenpref;
    store.set(K.settings, settings); renderHome();
  });
  document.querySelectorAll("[data-mode]").forEach(b => b.addEventListener("click", () => {
    settings.mode = b.dataset.mode;
    store.set(K.settings, settings); renderHome();
  }));

  $("choices").addEventListener("click", (e) => {
    const btn = e.target.closest(".choice");
    if (btn && !btn.disabled) pickChoice(parseInt(btn.dataset.slot, 10));
  });
  $("nextQ").addEventListener("click", nextQuestion);
  $("prevQ").addEventListener("click", () => {
    if (active.idx > 0) { active.idx--; store.set(K.active, active); renderQuestion(); }
  });
  $("flagQ").addEventListener("click", () => {
    active.flags[active.idx] = !active.flags[active.idx];
    store.set(K.active, active); renderQuestion();
  });
  $("quitTest").addEventListener("click", () => {
    if (confirm("Exit this test? Your progress is saved and you can resume from the home screen.")) {
      store.set(K.active, active); renderHome(); show("home");
    }
  });
  $("openPalette").addEventListener("click", () => openPalette(false));
  $("closePalette").addEventListener("click", closePalette);
  $("paletteSheet").addEventListener("click", (e) => { if (e.target === $("paletteSheet")) closePalette(); });
  $("paletteGrid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-jump]");
    if (b) goToQuestion(parseInt(b.dataset.jump, 10) + 1);
  });
  $("jumpForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const v = parseInt($("jumpInput").value, 10);
    if (!isNaN(v)) goToQuestion(v);
  });
  $("submitTest").addEventListener("click", submitTest);
  $("clearHistory").addEventListener("click", () => {
    if (confirm("Delete all saved scores and history from this browser?")) {
      store.del(K.history); store.del(K.seen); renderHistory(); toast("History cleared");
    }
  });

  document.addEventListener("keydown", (e) => {
    if ($("screen-quiz").hidden || !$("paletteSheet").hidden) return;
    if (e.key >= "1" && e.key <= "3") pickChoice(parseInt(e.key, 10) - 1);
    else if (e.key === "a" || e.key === "b" || e.key === "c") pickChoice(e.key.charCodeAt(0) - 97);
    else if (e.key === "ArrowRight" || e.key === "Enter") nextQuestion();
    else if (e.key === "ArrowLeft" && active.idx > 0) { active.idx--; store.set(K.active, active); renderQuestion(); }
  });

  /* Service worker: offline + instant repeat loads (https / localhost only). */
  if ("serviceWorker" in navigator &&
    (location.protocol === "https:" || ["localhost", "127.0.0.1"].includes(location.hostname))) {
    navigator.serviceWorker.register("sw.js").catch(() => { });
  }

  renderHome();
  show("home");
})();
