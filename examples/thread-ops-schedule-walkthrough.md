# Thread Ops Schedule Guard Walkthrough

This walk-through keeps the domain vocabulary close to the data instead of burying it in prose.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 146 | ship |
| stress | rename risk | 160 | ship |
| edge | operator cost | 204 | ship |
| recovery | idempotence | 160 | ship |
| stale | dry-run spread | 198 | ship |

Start with `edge` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The next useful expansion would be a malformed fixture around rename risk and idempotence.
