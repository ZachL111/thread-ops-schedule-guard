# Review Journal

This journal records the domain cases that matter before widening the public API.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 146, lane `ship`
- `stress`: `rename risk`, score 160, lane `ship`
- `edge`: `operator cost`, score 204, lane `ship`
- `recovery`: `idempotence`, score 160, lane `ship`
- `stale`: `dry-run spread`, score 198, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.
