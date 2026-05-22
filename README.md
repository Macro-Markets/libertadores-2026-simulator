# Libertadores 2026 Simulator · Macro Markets

Interactive, static, zero-build simulator for the **CONMEBOL Libertadores 2026**.

Use it to fill group-stage scores, watch standings update live, simulate the knockout bracket from the round of 16 to the final, reveal a champion path, and share the full scenario by URL or PNG.

## Features

- **Full Libertadores flow** — group stage, round of 16, quarterfinals, semifinals, and final.
- **Official 2026 group draw** — 32 clubs across groups A-H.
- **Live standings engine** — tables update as scores change, with points, goal difference, goals scored, head-to-head, and ranking fallback.
- **Shareable state** — scores and bracket picks are encoded in the URL hash.
- **Share card** — generates a PNG preview for the projected champion.
- **No build step** — plain HTML, CSS, and JavaScript modules.

## Run Locally

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

## Test

```bash
node tests/smoke.mjs
```

## Data

The groups follow the official CONMEBOL draw announced on March 19, 2026:

- Group A: Flamengo, Estudiantes, Cusco, Independiente Medellin
- Group B: Nacional, Universitario, Coquimbo Unido, Deportes Tolima
- Group C: Fluminense, Bolivar, Deportivo La Guaira, Independiente Rivadavia
- Group D: Boca Juniors, Cruzeiro, Universidad Catolica, Barcelona SC
- Group E: Penarol, Corinthians, Santa Fe, Platense
- Group F: Palmeiras, Cerro Porteno, Junior, Sporting Cristal
- Group G: LDU Quito, Lanus, Always Ready, Mirassol
- Group H: Independiente del Valle, Libertad, Rosario Central, Universidad Central

The group-stage fixture generator creates a six-matchday, home-and-away round robin for each group.

## Structure

```text
index.html
scripts/
  data/                    # Clubs, fixtures, bracket template
  engine/                  # Standings, tiebreaks, knockout propagation
  i18n/                    # Portuguese, English, Spanish strings
  state/                   # Persistence and URL serialization
  ui/                      # Renderers for groups, bracket, champion, share
styles/
  tokens.css
  base.css
  components.css
  sections.css
tests/
  smoke.mjs
```
