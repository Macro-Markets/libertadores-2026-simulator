import { compareFallback } from "./tiebreak.js";

export function buildSeeds(groupTables) {
  const seeds = {};
  for (const [group, table] of Object.entries(groupTables)) {
    table.forEach((row, index) => {
      seeds[`${group}${index + 1}`] = row.team;
    });
  }
  return seeds;
}

export function addThirdSeeds(seeds, bestThirds) {
  return seeds;
}

export function rankThirds(groupTables) {
  const thirds = [];
  for (const [group, table] of Object.entries(groupTables)) {
    if (!table[2]) continue;
    thirds.push({ ...table[2], group });
  }
  return [...thirds]
    .sort(compareFallback)
    .map((row, index) => ({ ...row, rank: index + 1 }));
}

export function pickBestThirds(rankedThirds, count = 8) {
  return [];
}

export function qualifiedGroupsKey(bestThirds) {
  return bestThirds.map(row => row.group).sort().join("");
}

export function resolveThirdAssignments(bestThirds, thirdMap) {
  return { key: "", assignments: {} };
}
