import assert from "node:assert/strict";

import { GROUPS, GROUP_KEYS } from "../scripts/data/groups.js";
import { TEAM_LOGO_URLS, teamFlagUrl } from "../scripts/data/teams.js";
import { loadFixtures, getMatchId } from "../scripts/data/fixtures.js";
import { computeAllGroupTables } from "../scripts/engine/standings.js";
import { buildSeeds } from "../scripts/engine/qualifiers.js";
import { buildKnockoutMatches, countMatches } from "../scripts/engine/bracket-engine.js";

const fixtures = await loadFixtures();

assert.equal(GROUP_KEYS.length, 8, "Libertadores should have 8 groups");
assert.equal(Object.values(GROUPS).flat().length, 32, "Libertadores should have 32 clubs");
assert.equal(fixtures.length, 96, "Group stage should have 96 matches");
assert.ok(Object.keys(TEAM_LOGO_URLS).length >= 20, "Most clubs should have Wikimedia badge URLs");
assert.ok(teamFlagUrl("Flamengo").includes("wikimedia.org"), "Mapped clubs should use Wikimedia badges");
assert.ok(teamFlagUrl("Cusco").includes("flagcdn.com"), "Unmapped clubs should fall back to country flags");

for (const group of GROUP_KEYS) {
  const groupFixtures = fixtures.filter(match => match.group === group);
  assert.equal(groupFixtures.length, 12, `Group ${group} should have 12 matches`);
}

const scores = {};
fixtures.forEach((match, index) => {
  scores[getMatchId(match)] = { home: String(index % 3), away: String((index + 1) % 3) };
});

const tables = computeAllGroupTables(fixtures, scores);
const seeds = buildSeeds(tables);

assert.equal(Object.keys(seeds).length, 32, "All group positions should produce seeds");
assert.ok(seeds.A1, "A1 seed should exist");
assert.ok(seeds.H2, "H2 seed should exist");

const rounds = buildKnockoutMatches(seeds, {}, {});

assert.equal(rounds.R16.length, 8, "Knockout should start with 8 round-of-16 matches");
assert.equal(rounds.QF.length, 4, "Quarterfinals should have 4 matches");
assert.equal(rounds.SF.length, 2, "Semifinals should have 2 matches");
assert.equal(rounds.F.length, 1, "Final should have 1 match");
assert.equal(countMatches(rounds), 15, "Knockout should have 15 matches");
assert.equal(rounds.R16[0].homeTeam, seeds.A1, "R16 should use group winner seed");
assert.equal(rounds.R16[0].awayTeam, seeds.B2, "R16 should use runner-up seed");

console.log("smoke ok");
