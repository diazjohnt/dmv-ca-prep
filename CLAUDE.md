# Project conventions

A static practice-exam site for the California Class C knowledge test. No build
step, no framework, no server, no database. The application lives in `docs/`,
which GitHub Pages serves; tooling, documentation, and the source handbook PDF
live outside it.

## Question bank

- `docs/questions.js` is `const QUESTION_BANK =` followed by a **strict JSON
  array** and a semicolon: double quotes, no trailing commas, no comments inside
  the array. Tools parse it directly, so it must stay valid JSON.
- `"answer"` is **always 0**. Write the correct choice first; the application
  shuffles choice order at display time so position carries no signal.
- `"ref"` uses the form `Section 6: Parallel Parking` and must match a key in
  `docs/handbook.js`.
- `"sign"` is optional and must match a key of `SIGN_ART` in `docs/app.js`.
- `"drills"` is optional and lists the focused-practice pools a question belongs
  to. Pools are curated in the data rather than detected at runtime, so they do
  not drift as questions are added:
  - `signs` for road signs, `signals` for lights, arrows, and pedestrian signals.
  - `numbers` only when answering requires recalling a specific numeric
    threshold such as a distance, speed, age, waiting period, dollar amount, or
    percentage. Incidental digits do not qualify, including form codes such as
    SR 22 and DS 699, service numbers such as 911 and 511, and procedural values
    such as a 45-degree parking angle.
  - Retag with `node tools/tag-drills.js`, which is idempotent.

## Generated files

`docs/handbook.js` is generated and must not be hand edited. Rebuild it with
`node tools/build-excerpts.js <handbook.txt>`, where the text file comes from
running `pdftotext -layout` (poppler) over the PDF in `appendix/`. Correct bad
passages through the `OVERRIDES` and `ALIASES` maps in that script.

## Checks

Run both after any change and before opening a pull request:

```
powershell -File tools/validate.ps1     # bank structure, must print VALIDATION PASSED
node tools/logic-test.js                # test generation, scoring, and content rules
```

`docs/app.js` exports its pure functions when loaded under Node, which is how the
logic tests reach them. Keep all DOM code inside the
`typeof document !== "undefined"` guard.

## Interface conventions

- The setup panel is a single cascading flow: kind of test, then subject for
  focused tests, then length, then mode, with the start button last. Later steps
  adapt to earlier answers so the options shown are always valid.
- Settings are stored as `{type, subject, lengthPref, mode}`. `lengthPref` is
  `"short"` or `"full"` rather than a number, so the choice survives switching
  subjects.
- `lengthChoices(poolSize, isFocused)` offers a 10 question sample plus either
  the full test (standard, capped at 46) or all of a focused subject. **Labels
  must not contain counts.** Advertising a pool size next to a smaller maximum
  reads as a contradiction.
- Focused runs are stored with `focused: true`. They feed per-topic accuracy and
  the weak-spot bank but are excluded from the attempt list and readiness trend,
  which measures standard-test readiness only.
- The quiz action row is three outlined buttons of matching size and type,
  separated by role: Back (secondary, lighter weight), Flag (warning, filled
  while set), Next (primary).
- **No em dashes in project copy**: interface text, question text, explanations,
  section references, and documentation. Passages quoted from the handbook in
  `docs/handbook.js` keep their original punctuation, because they are verbatim
  source text and must remain searchable against the official PDF. A logic test
  enforces both halves of this rule.

## Caching

When any file listed in `CORE` changes, increment `VERSION` in `docs/sw.js`.
Otherwise installed clients keep serving the previous copy until a hard refresh.

## Deploying

Pushing to `main` publishes automatically: GitHub Pages serves `main:/docs`. If
the application directory is ever moved, the Pages source setting must change in
the same step, and the setting change alone does not trigger a rebuild. Verify a
deploy by loading the site and confirming application markup rather than a 200
response, since a missing `index.html` causes the README to be rendered instead.

## Reference

The official Class C knowledge test has 36 questions for applicants 18 and older
(30 to pass) and 46 for applicants under 18 (38 to pass), roughly 83 percent
either way. `passNeeded(n)` returns `round(n * 38 / 46)`, which reproduces both.
