# Booth Marketing — Visuals Update Implementation

## Objective
Transform the capture landing page from a functional dark wireframe into a premium, modern and dynamic B2B automation consultancy experience while preserving one conversion goal: **Request an Automation Audit**.

## Design principles
- Business-first, not AI-first.
- Calm and credible rather than futuristic or gimmicky.
- Strong visual hierarchy: hero H1 is always the dominant headline.
- One restrained mint accent used for action and system state.
- Depth through charcoal surfaces, thin borders, grid texture and restrained light rather than glassmorphism or neon.
- Motion should communicate workflow and progression rather than decorate the page.
- Mobile should be purpose-built and materially shorter/cleaner than a stacked desktop layout.

## Implemented changes

### 1. Navigation and brand presentation
- Added a sticky premium navigation bar.
- Added concise anchor navigation for Approach, Audit and Process.
- Kept the Automation Audit as the only primary conversion CTA.
- Reworked the brand lockup into a cleaner Booth Marketing treatment.
- Mobile navigation removes non-essential links and preserves the primary action.

### 2. Hero redesign
- Rewrote the hero into a shorter problem/outcome hierarchy.
- Reduced supporting copy and kept one primary CTA.
- Added low-pressure trust cues beneath the CTA.
- Replaced the static generic workflow panel with a bespoke operation-map visual.
- Added animated data-flow points between Lead, Qualification, CRM and Human Handoff states.
- Kept all workflow content illustrative rather than presenting fake performance data.

### 3. For / Not For positioning
- Replaced two generic cards with a larger editorial split composition.
- Increased typography contrast and reduced checklist-template styling.
- Used asymmetry to make the intended customer profile visually dominant.

### 4. How We Think
- Made this the primary signature scroll section.
- Added sticky explanatory copy on desktop.
- Added scroll-aware active states for Understand, Find Friction, Choose Wisely and Design the System.
- Added a progress indicator and restrained orbit animation.
- Collapses to a compact linear experience on mobile.

### 5. Outcomes
- Replaced four identical cards with an asymmetric editorial grid.
- Made Reduced Manual Work the primary visual outcome.
- Added a restrained process graphic rather than generic AI icons.
- Maintained grounded outcome language without unsupported numerical claims.

### 6. Credibility
- Removed customer-facing internal commentary about avoiding fabricated claims.
- Reframed credibility around supported capability signals only.
- No fabricated clients, testimonials, revenue figures, performance metrics or logos were introduced.

### 7. Automation Audit
- Elevated the audit into the primary conversion moment.
- Improved visual separation and form hierarchy.
- Reduced the form to Name, Business, Work Email and operational friction.
- Added clear deliverables and a no-pressure reassurance message.
- Preserved the frontend-only form behaviour; no fake backend submission is claimed.

### 8. What Happens Next
- Replaced the five heavy static boxes with a connected timeline.
- Desktop uses a horizontal process line.
- Mobile converts to a compact vertical stepper.
- Copy was shortened to improve scanning and page length.

### 9. Final CTA
- Increased whitespace and headline impact.
- Added a restrained ambient background treatment.
- Kept the same Automation Audit offer and CTA rather than introducing a second offer.

### 10. Motion and accessibility
- Added restrained workflow, progress, hover and status motion.
- Added `prefers-reduced-motion` fallbacks.
- Maintained visible keyboard focus states.
- Maintained minimum practical CTA target sizing.
- Avoided animation that blocks access to content.

### 11. Mobile optimisation
- Reduced section spacing at narrow viewports.
- Removed desktop navigation links rather than squeezing them into the header.
- Converted asymmetric desktop layouts into intentional single-column compositions.
- Converted the process timeline into a vertical stepper.
- Reduced large visual panels and headline sizing for 375–430px screens.
- Avoided endless stacks of oversized cards.

## Conversion hierarchy
1. Operational problem and desired outcome
2. Clear customer fit
3. Booth Marketing's operating philosophy
4. Business outcomes
5. Credibility signals
6. Free Automation Audit
7. What happens next
8. Final Automation Audit CTA

## Constraints retained
- Frontend only.
- No pricing or checkout.
- No urgency language.
- No AI hype or robot imagery.
- No tools/platform names.
- No new npm dependencies.
- One primary conversion goal throughout.
- No fabricated proof or performance claims.

## Future production requirement
The audit form remains frontend-only by design. Before using it to capture real leads, connect it to an approved form/inbox endpoint and replace the demonstration success state with the real submission result.
