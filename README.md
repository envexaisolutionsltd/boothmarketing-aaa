# Booth Marketing

Production website and private lead-tracking admin for Booth Marketing.

Booth Marketing builds conversion-focused websites and landing pages for established businesses. The site is positioned around a modern buying journey where AI and search can create the shortlist, but the website still has to earn trust and turn attention into action.

## Positioning

**AI is changing how customers search. Your website still has to earn the decision.**

Core buying journey:

`Ask AI → Shortlist → Website → Trust → Action`

The public site focuses exclusively on websites and landing pages. Automation services are not part of the current offer or public navigation.

## Public website

Primary routes include:

- `/` — homepage and core positioning
- `/websites` — website service
- `/how-it-works` — delivery process
- `/about` — Booth Marketing positioning and founder-led approach
- `/website-audit` — Website Conversion Audit and lead form
- `/privacy` — privacy information
- `/terms` — terms

The primary conversion action is **Request Website Audit**.

Website Audit submissions are sent through the lead API and stored for review in the private admin area. Website addresses entered without a protocol are normalized to HTTPS before storage.

## Private admin

The admin is intentionally lightweight and focused on website enquiries rather than functioning as a large CRM.

Current purpose:

`Website form → lead stored → admin → lead tracked`

Lead statuses:

- New
- Contacted
- Qualified
- Call Booked
- Closed

The admin is private and protected by the application's admin authentication flow.

## Design system

The established Booth Marketing visual direction is intentionally restrained and premium:

- near-black backgrounds
- modern sans-serif typography
- muted grey supporting copy
- cream primary CTA buttons
- restrained rose/red accents
- low-contrast borders
- generous whitespace
- dark interface cards
- Booth Marketing script logo with rose
- responsive layouts designed for desktop, tablet and mobile

The site avoids stereotypical AI imagery, generic agency visuals and excessive gradients.

## Technology

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- PostgreSQL via `postgres`
- Vercel deployment
- Playwright-based live mobile QA in GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Environment

Production requires the relevant database and admin environment variables to be configured in the deployment environment. Secrets must not be committed to this repository.

## QA

The repository includes repeatable live mobile QA covering key public experiences at 320px, 375px, 390px and 430px widths, including the mobile navigation, homepage geometry, primary Website Audit CTA, Website Audit page and an Instagram-style mobile browser user agent.

The QA suite reflects the current website-only navigation and explicitly checks that the retired Automation navigation item is not present.

## Deployment

The `main` branch is connected to Vercel. Changes pushed to `main` trigger the configured Vercel deployment workflow.

Production domain: `www.boothmarketing.co.uk`

## Project status

The public website is in production-stage completion. Core positioning, website service pages, responsive navigation, Website Audit conversion flow, lead API, private lead tracking, SEO foundations and automated mobile QA are implemented.

A project should only be treated as fully release-verified after the latest production deployment, automated checks and a real Website Audit submission have all completed successfully. This README intentionally does not claim a successful check that has not actually been verified.
