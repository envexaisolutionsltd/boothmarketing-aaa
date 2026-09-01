# Booth Marketing Automation Audit

A responsive, frontend-only lead capture landing page built with Vite, React, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The calendar URL is stored in `CALENDAR_BOOKING_URL` near the top of `src/App.jsx`.

The audit form intentionally performs client-side validation only. It does not transmit or store form data.

## Brand assets

The approved transparent logo is stored at `public/booth-marketing-logo.png`. The reusable `BrandLogo` and `RoseMark` components in `src/App.jsx` crop the same master asset non-destructively for full-wordmark and rose-only placements.
