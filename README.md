# Booth Marketing Frontend V2

Frontend-only rebuild for Booth Marketing, a B2B AI automation agency.

## Positioning
The site is designed around an established B2B owner whose company works but has accumulated manual processes, repeated admin, weak handoffs, duplicated data and disconnected software.

Internal prototype persona: Daniel Mercer, 42, Managing Director of a 28-person Manchester B2B facilities and compliance company. He uses normal business software already. His problem is that people manually connect the systems and keep the operation moving.

## Design direction
Preserves the visual language of the approved Booth Marketing version:
- warm neutral background
- deep editorial typography
- muted burgundy accents
- thin rules and generous whitespace
- operational diagrams instead of stereotypical AI graphics
- restrained motion
- no AI grid backgrounds
- no fake testimonials, client logos or ROI claims
- no pricing
- founder section near the end
- 75% mobile navigation drawer
- single-open FAQ accordion

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
The Automation Audit form validates and displays a success state locally. It does not currently transmit or store data.
