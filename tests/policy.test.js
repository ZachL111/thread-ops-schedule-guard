import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 84,
    "capacity": 91,
    "latency": 26,
    "risk": 14,
    "weight": 9,
    "score": 205,
    "decision": "accept"
  },
  {
    "name": "case_2",
    "demand": 61,
    "capacity": 72,
    "latency": 18,
    "risk": 7,
    "weight": 11,
    "score": 196,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 98,
    "capacity": 85,
    "latency": 27,
    "risk": 7,
    "weight": 8,
    "score": 247,
    "decision": "accept"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
