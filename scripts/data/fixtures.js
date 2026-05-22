import { GROUPS } from "./groups.js";

const ROUND_LABELS = {
  R1: "1ª rodada",
  R2: "2ª rodada",
  R3: "3ª rodada",
  R4: "4ª rodada",
  R5: "5ª rodada",
  R6: "6ª rodada"
};

const ROUND_DATES = {
  R1: "2026-04-07",
  R2: "2026-04-14",
  R3: "2026-04-28",
  R4: "2026-05-05",
  R5: "2026-05-19",
  R6: "2026-05-26"
};

const GROUP_VENUES = {
  A: "Grupo A",
  B: "Grupo B",
  C: "Grupo C",
  D: "Grupo D",
  E: "Grupo E",
  F: "Grupo F",
  G: "Grupo G",
  H: "Grupo H"
};

const PAIRINGS = [
  ["R1", 2, 0], ["R1", 3, 1],
  ["R2", 1, 2], ["R2", 0, 3],
  ["R3", 1, 0], ["R3", 3, 2],
  ["R4", 2, 1], ["R4", 3, 0],
  ["R5", 0, 1], ["R5", 2, 3],
  ["R6", 0, 2], ["R6", 1, 3]
];

function buildFixtures() {
  return Object.entries(GROUPS).flatMap(([group, teams]) => (
    PAIRINGS.map(([roundKey, homeIndex, awayIndex], index) => ({
      round: ROUND_LABELS[roundKey],
      group,
      homeKey: teams[homeIndex],
      awayKey: teams[awayIndex],
      venue: GROUP_VENUES[group],
      venueKey: "",
      dateIso: ROUND_DATES[roundKey],
      roundKey,
      localTime: "",
      matchOrder: index + 1
    }))
  ));
}

let cached = null;

export async function loadFixtures() {
  if (!cached) cached = buildFixtures();
  return cached;
}

export function getMatchId(match) {
  return `${match.roundKey}|${match.group}|${match.homeKey}|${match.awayKey}`;
}
