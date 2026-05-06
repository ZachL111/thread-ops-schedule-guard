# thread-ops-schedule-guard

`thread-ops-schedule-guard` is a JavaScript project in automation. Its focus is to develop a JavaScript command-oriented project for schedule scenarios with transition tables, invalid-transition tests, and single-node deterministic mode.

## Why It Exists

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Thread Ops Schedule Guard Review Notes

The first comparison I would make is `operator cost` against `dry-run spread` because it shows where the rule is most opinionated.

## Features

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/thread-ops-schedule-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `operator cost` and `dry-run spread`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture Notes

The repository has two validation layers: the original compact policy fixture and the domain review fixture. They are separate so one can change without hiding failures in the other.

The JavaScript addition stays small enough to inspect in one sitting.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Tests

The verifier is intentionally local. It should fail if the fixture score math, lane assignment, or language-specific test drifts.

## Limitations And Roadmap

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
