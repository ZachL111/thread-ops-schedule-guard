import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 56, slack: 35, drag: 29, confidence: 86 };
assert.equal(domainReviewScore(item), 146);
assert.equal(domainReviewLane(item), "ship");
