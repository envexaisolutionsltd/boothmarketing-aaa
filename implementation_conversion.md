# Conversion Implementation Plan

## Objective and Scope
- **Goal:** Increase qualified automation audit submissions from the current landing page.
- **Focus areas only:** clarity of offer, trust signals, CTA strength, conversion flow.
- **Primary conversion event:** successful submission of the automation audit form on the homepage.
- **Secondary conversion event:** click-throughs to the form from hero/nav/final CTA.

## Current-State CRO Diagnosis

### 1) Clarity of Offer
- [ ] **Issue:** Hero headline communicates pain clearly, but the concrete offer details are delayed (what exactly is included, deliverable format, timeline, who it is for at a practical level).
- [ ] **Issue:** Offer language shifts between "Request Audit", "Schedule Consultation", and "Submit", creating intent ambiguity.
- [ ] **Issue:** Value proposition is mostly conceptual ("systematic efficiency") vs outcome-specific (time saved, bottlenecks found, implementation roadmap).
- [ ] **Issue:** Qualification section is strong, but appears before practical proof/outcomes for many buyers.

### 2) Trust Signals
- [ ] **Issue:** Numeric credibility stats exist, but no visible proof context (logos, case examples, named outcomes, testimonial snippets).
- [ ] **Issue:** Footer trust infrastructure is weak (privacy/terms appear as buttons without visible linked policy pages in the flow).
- [ ] **Issue:** Risk reversal exists ("no pressure"), but there is no explicit privacy/reply promise near submit.
- [ ] **Issue:** Structured data includes ratings, but on-page human trust markers are limited.

### 3) CTA Strength
- [ ] **Issue:** CTA copy is inconsistent across page sections, reducing cognitive clarity.
- [ ] **Issue:** Hero CTA is visually prominent but not paired with a concise micro-benefit line immediately below.
- [ ] **Issue:** Form submit text is generic (`[ SUBMIT ]`) instead of outcome-oriented.
- [ ] **Issue:** No sticky mobile CTA to reduce scroll friction.

### 4) Conversion Flow
- [ ] **Issue:** Long page sections before decision moment may increase drop-off for high-intent visitors.
- [ ] **Issue:** Form has several optional fields that may still feel high-friction for top-of-funnel leads.
- [ ] **Issue:** Two different contact flows/routes exist (`/` form and `/contact` flow), risking messaging drift.
- [ ] **Issue:** Thank-you messaging is good, but no immediate calendar handoff or "next step scheduling" option.

---

## Implementation Roadmap (Phased)

## Phase 1 - Messaging Alignment (Offer Clarity First)
**Priority:** Critical  
**Timeline:** 2-3 days  
**Owner:** Strategy + copy

### Checklist
- [ ] Define one canonical offer statement: **"Free Automation Audit"** (single naming standard site-wide).
- [ ] Create a 1-sentence offer explainer directly under hero headline: what user gets, by when, and in what format.
- [ ] Add a 3-bullet "What you receive" block above the form:
  - [ ] workflow bottleneck map
  - [ ] prioritized automation opportunities
  - [ ] recommended next-step plan
- [ ] Add "Ideal for" one-line qualifier near hero CTA (team profile + business stage).
- [ ] Ensure all CTA labels match intent (no mix of audit/consultation unless defined as same thing).

### Exit Criteria
- [ ] Every CTA and section uses the same offer language.
- [ ] A visitor can answer "What is this offer?" within 5 seconds of landing.

---

## Phase 2 - Trust Layer Expansion (Proof + Risk Reversal)
**Priority:** Critical  
**Timeline:** 3-5 days  
**Owner:** Strategy + content + design

### Checklist
- [ ] Add a "Proof strip" directly below hero (client types, outcomes, or anonymized logos if permissions are limited).
- [ ] Add at least 2 short testimonial/case snippets with measurable outcomes.
- [ ] Convert abstract stats into contextualized statements (e.g., what "200+ automations" means operationally).
- [ ] Add a trust block near form:
  - [ ] privacy assurance (no spam / no data sharing)
  - [ ] response-time promise (e.g., within 48 hours)
  - [ ] no-obligation statement
- [ ] Ensure policy links are clearly functional and discoverable from form area and footer.

### Exit Criteria
- [ ] Form area contains at least 3 concrete trust assurances.
- [ ] Visitors see social proof before first major CTA and again near submit.

---

## Phase 3 - CTA Optimization (Action Clarity + Friction Reduction)
**Priority:** High  
**Timeline:** 2-4 days  
**Owner:** CRO + design

### Checklist
- [ ] Standardize primary CTA text to one action phrase across hero/nav/final/form.
- [ ] Add microcopy below primary CTA clarifying effort and payoff (e.g., "2-minute request, actionable audit summary").
- [ ] Replace generic submit copy with outcome-focused wording.
- [ ] Add sticky CTA on mobile that scrolls to form.
- [ ] Add repeated CTA anchors after key sections (qualification, approach, proof).
- [ ] Keep one visual hierarchy: primary CTA style, secondary CTA style.

### Exit Criteria
- [ ] No CTA copy conflicts remain.
- [ ] Mobile users can reach conversion action in one tap from any scroll depth.

---

## Phase 4 - Conversion Flow Simplification (Path to Submit)
**Priority:** High  
**Timeline:** 3-5 days  
**Owner:** CRO + product

### Checklist
- [ ] Consolidate to one primary lead capture path (homepage form OR dedicated contact path, not competing narratives).
- [ ] Reduce perceived form friction:
  - [ ] clearly mark only essential fields
  - [ ] move non-essential qualification to post-submit or step 2
  - [ ] keep challenge question but add guidance example
- [ ] Add inline "What happens after submit" immediately adjacent to form CTA.
- [ ] Add instant post-submit options:
  - [ ] schedule call now
  - [ ] or wait for email follow-up
- [ ] Ensure thank-you page/state restates timeline and expected communication channel.

### Exit Criteria
- [ ] One clear conversion path with no conflicting route intent.
- [ ] Median time-to-submit is reduced without lowering lead quality.

---

## Phase 5 - Measurement and Iteration Cadence
**Priority:** High  
**Timeline:** Ongoing (weekly)  
**Owner:** CRO + analytics

### Checklist
- [ ] Track funnel events:
  - [ ] hero CTA click
  - [ ] nav CTA click
  - [ ] final CTA click
  - [ ] form start
  - [ ] form submit success
  - [ ] form error
- [ ] Create baseline metrics before rollout (current conversion rate, drop-off by section, form completion rate).
- [ ] Run one controlled test at a time in this order:
  - [ ] CTA copy consistency
  - [ ] trust block near form
  - [ ] reduced form friction
  - [ ] proof strip placement
- [ ] Review weekly and maintain a prioritized backlog by impact x effort.

### Exit Criteria
- [ ] Clear uplift attribution by experiment.
- [ ] Winning variants are documented and rolled into default page.

---

## 30-Day Execution Sequence
- [ ] **Week 1:** Phase 1 (offer messaging alignment) + analytics baseline.
- [ ] **Week 2:** Phase 2 (trust assets and proof placement).
- [ ] **Week 3:** Phase 3 (CTA system consistency + mobile sticky CTA).
- [ ] **Week 4:** Phase 4 initial simplification + first A/B test from Phase 5.

## Success Metrics (Primary and Guardrails)
- [ ] **Primary:** automation audit submission conversion rate.
- [ ] **Primary:** form completion rate (start -> submit).
- [ ] **Secondary:** CTA click-through rate by section.
- [ ] **Guardrail:** lead quality acceptance rate (qualified vs unqualified submissions).
- [ ] **Guardrail:** no increase in form error rate.

## Fast Wins (Can Ship in 48 Hours)
- [ ] Unify all CTA copy to one phrase tied to the same offer.
- [ ] Add "What you get" 3-bullet block above form.
- [ ] Add trust microcopy next to submit button (privacy + no obligation + response window).
- [ ] Change submit label to outcome-focused action.
- [ ] Add one short proof snippet above the first CTA fold.
