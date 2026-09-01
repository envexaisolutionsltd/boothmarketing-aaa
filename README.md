# Booth Marketing Frontend

Frontend-only website for Booth Marketing, a B2B AI automation agency.

## Positioning
The site is built around established B2B owners whose companies work but have accumulated manual processes, repeated admin, weak handoffs, duplicated information, and disconnected systems.

Internal prototype persona: Daniel Mercer, 42, Managing Director of a 28-person Manchester B2B facilities and compliance company. He already uses normal business software. His problem is that people manually connect the systems and keep the operation moving.

## Approved design
The supplied September 2026 screenshots are the visual source of truth:
- near-black background
- bold modern sans-serif typography
- muted grey copy
- cream rectangular CTA buttons
- subtle red accent
- thin low-contrast borders
- generous vertical whitespace
- restrained dark cards
- real Booth script logo with rose
- operational diagrams instead of stereotypical AI graphics

## Stack
- React 19
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Router
- React Hook Form
- Zod

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

Vercel is configured to deploy the `dist` output with SPA rewrites.

## Frontend only
The Automation Audit form validates locally and currently does not transmit or store data.
