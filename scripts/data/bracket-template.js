import { t } from "../i18n/index.js";

export const R16_TEMPLATE = [
  { id: "R16-1", label: "Oitavas · 1", home: "A1", away: "B2", side: "L" },
  { id: "R16-2", label: "Oitavas · 2", home: "C1", away: "D2", side: "L" },
  { id: "R16-3", label: "Oitavas · 3", home: "E1", away: "F2", side: "L" },
  { id: "R16-4", label: "Oitavas · 4", home: "G1", away: "H2", side: "L" },
  { id: "R16-5", label: "Oitavas · 5", home: "B1", away: "A2", side: "R" },
  { id: "R16-6", label: "Oitavas · 6", home: "D1", away: "C2", side: "R" },
  { id: "R16-7", label: "Oitavas · 7", home: "F1", away: "E2", side: "R" },
  { id: "R16-8", label: "Oitavas · 8", home: "H1", away: "G2", side: "R" }
];

export const NEXT_ROUNDS = {
  QF: [
    ["R16-1", "R16-2"], ["R16-3", "R16-4"],
    ["R16-5", "R16-6"], ["R16-7", "R16-8"]
  ],
  SF: [
    ["QF-1", "QF-2"],
    ["QF-3", "QF-4"]
  ],
  F: [["SF-1", "SF-2"]]
};

export const ROUND_ORDER = ["R16", "QF", "SF", "F"];

export function roundLabel(round) {
  return t(`round.${round}`);
}

export function isLeftSide(matchId) {
  if (matchId === "F" || matchId === "F-1") return null;
  if (matchId.startsWith("R16-")) {
    const idx = Number(matchId.split("-")[1]);
    return idx <= 4;
  }
  if (matchId.startsWith("QF-")) {
    const idx = Number(matchId.split("-")[1]);
    return idx <= 2;
  }
  if (matchId.startsWith("SF-")) {
    return matchId === "SF-1";
  }
  return null;
}
