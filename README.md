# Bharatnomy — Concept 02: Civic Signals

A second, structurally different visual direction for Bharatnomy. This version combines light editorial storytelling with a bright cartographic data interface. Its visual language is deliberately distinct from Concept 01: chalk white, pale periwinkle, cobalt blue, vermilion and muted gold replace the botanical/sage identity.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local Vite URL printed in the terminal (usually `http://localhost:5173`).

For a production build:

```bash
npm run build
npm run preview
```

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS 3
- Framer Motion
- Recharts
- React Router
- Lucide icons

## Included pages

- `/` — Civic Signals story homepage with chapter rail, connected research network and embedded data observatory
- `/research` — research programme, current Maharashtra heat research, publication types and questions
- `/data` — interactive Data Lab with Map / Chart / Table views
- `/datasets` — open-data approach, release standards and sample downloadable files
- `/about` — firm profile and team descriptions
- `/standards` — editorial standards, sourcing and correction policy
- `/careers` — careers / expression-of-interest information

## Two included demonstration data products

1. `District Heat Readiness Index` — heat exposure, plan readiness and cooling access.
2. `District Renewable Capacity Snapshot` — solar, wind and total illustrative capacity.

Both include CSV and README downloads under `public/data/`. The values are synthetic demonstration values, not official statistics or published Bharatnomy research. The geographic map is a schematic interaction prototype, not a geographically accurate district boundary layer. Replace the files and map geometry with verified data and authoritative GIS boundaries before publication.

## Brand replacement

The temporary brand mark is implemented in `src/components/BrandMark.tsx` and styled in `src/styles.css`. The placeholder SVG is at `public/brand/logo-placeholder.svg`. Replace the mark with approved logo artwork when available.

## Design direction — Civic Signals

- Light chalk-white base with pale periwinkle surfaces; no full-page dark theme.
- Cobalt blue for interaction and data emphasis, vermilion for selected/alert states, and muted gold as a small accent.
- Fraunces display typography, Space Grotesk UI/body typography and IBM Plex Mono for metadata.
- A split cartographic hero with a layered signal-atlas panel (instead of the previous orbital globe treatment).
- Five research lenses recomposed as a connected node network.
- Warm field-note panel for the Maharashtra heat research project.
- A bright Data Observatory with Map / Chart / Table views and visible controls.

Google Fonts are loaded remotely in `index.html`; a network connection is needed to fetch those font files. CSS fallbacks are defined in the stylesheet.
