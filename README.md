# Booth Marketing

Production website and private lead-tracking admin for Booth Marketing.

Booth Marketing designs conversion-focused websites and landing pages for established B2B businesses whose current website no longer reflects the company behind it.

## Positioning

**Your business has moved forward. Has your website kept up?**

Core buying journey:

`Referral or outreach → Website check → Confidence → Conversation`

The website is positioned as the validation and conversion layer around reputation, referrals, outbound activity and other sources of buyer attention. AI-assisted search is supporting context, not the primary reason to buy.

The public site focuses on websites and landing pages. The primary conversion action is **Request Website Audit**.

## Public website

Primary routes include:

- `/` - homepage and core positioning
- `/websites` - website service
- `/work` - selected independent concept work
- `/how-it-works` - delivery process
- `/about` - Booth Marketing positioning and founder-led approach
- `/website-audit` - Website Conversion Audit and lead form
- `/privacy` - privacy information
- `/terms` - terms

Website Audit submissions are sent through the lead API and stored for review in the private admin area. Website addresses entered without a protocol are normalized to HTTPS before storage.

## Selected work

The public portfolio uses independent concept work to demonstrate Booth Marketing's approach to positioning, design and conversion. Concept work is disclosed and is not presented as commissioned client work.

Current visible concepts:

- Northstead Commercial Risk
- Purple Door Leeds
- Graft Haus Gym

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
- restrained rose and red accents
- low-contrast borders
- generous whitespace
- dark interface cards
- Booth Marketing script logo with rose
- responsive layouts designed for desktop, tablet and mobile

The homepage rose is a desktop-only visual and must remain hidden below 1180px. The site avoids stereotypical AI imagery, generic agency visuals, AI-style background grids and excessive gradients.

## Technology

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- PostgreSQL via `postgres`
- Vercel deployment
- Playwright-based live responsive QA

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

The repository includes repeatable live QA for the production site. It covers mobile widths, an Instagram-style mobile browser, tablet widths and representative desktop widths. Checks include homepage geometry, the primary Website Audit CTA, responsive navigation, the current B2B positioning, the Website Audit page and the desktop-only rose rule.

## Deployment

The `main` branch is connected to Vercel. Changes pushed to `main` trigger the configured Vercel deployment workflow.

Production domain: `www.boothmarketing.co.uk`

## Project status

The public website is production-stage. Core B2B positioning, website service pages, selected work, responsive navigation, Website Audit conversion flow, lead API, private lead tracking, SEO foundations and repeatable production QA are implemented.

A release should only be treated as verified after the latest production deployment and the current production QA have completed successfully.
