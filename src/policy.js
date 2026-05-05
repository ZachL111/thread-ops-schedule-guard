export const threshold = 167;
const riskPenalty = 4;
const latencyPenalty = 2;
const weightBonus = 6;

export function score(signal) {
  return signal.demand * 2 + signal.capacity + signal.weight * weightBonus
    - signal.latency * latencyPenalty - signal.risk * riskPenalty;
}

export function classify(signal) {
  return score(signal) >= threshold ? "accept" : "review";
}
