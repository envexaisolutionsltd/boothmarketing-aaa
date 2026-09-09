export const boothMarketingPublic = {
  companyName: 'Booth Marketing',
  domain: 'https://www.boothmarketing.co.uk',
  positioning: 'AI is changing how customers search. Your website still has to earn the decision.',
  buyingJourney: ['Ask AI', 'Shortlist', 'Website', 'Trust', 'Action'],
  whatWeDo: 'Booth Marketing builds conversion-focused websites, landing pages and practical business automation systems for established businesses. The primary focus is websites and landing pages; practical business automation is a secondary service.',
  primaryServices: [
    {
      name: 'Conversion-Focused Websites',
      description: 'Website strategy, page architecture, messaging, responsive design and development built around trust, clarity and conversion.',
    },
    {
      name: 'Landing Pages',
      description: 'Focused conversion paths for specific offers, campaigns and audiences when a full website rebuild is not justified.',
    },
    {
      name: 'Website Conversion Audit',
      description: 'A diagnostic review of first-impression trust, offer clarity, positioning, mobile usability, calls to action, proof, page structure, performance friction and AI/search clarity.',
    },
  ],
  secondaryServices: [
    {
      name: 'Practical Business Automation',
      description: 'Practical automation systems shaped around established business workflows. This is a secondary Booth Marketing service; no public fixed package, pricing or delivery commitment should be inferred.',
    },
  ],
  idealCustomer: 'Established businesses that need their website to communicate more clearly, earn trust faster and create a stronger path from attention to action, or that have a clearly identified operational workflow suitable for practical automation.',
  problemsSolved: [
    'Vague positioning or offer clarity',
    'Weak first-impression trust and credibility',
    'Slow or confusing mobile journeys',
    'Pages that try to serve every visitor intent at once',
    'Weak calls to action or conversion paths',
    'A dated website where targeted improvements or a rebuild may be justified',
    'Clearly identified repetitive business workflows where practical automation may be appropriate',
  ],
  process: [
    { step: 1, name: 'Understand the buyer', description: 'Clarify who is arriving, what they know, what they compare and what could stop trust.' },
    { step: 2, name: 'Diagnose the current site', description: 'Review clarity, positioning, proof, mobile experience, page structure and the route from attention to action.' },
    { step: 3, name: 'Design the decision path', description: 'Decide what the buyer needs to see, in what order, and where different offers or audiences need different pages.' },
    { step: 4, name: 'Build for speed and trust', description: 'Create a fast, mobile-first site that communicates clearly.' },
    { step: 5, name: 'Measure and improve', description: 'Use real behaviour and conversion data to refine pages after launch.' },
  ],
  callsToAction: [
    { name: 'Request Website Audit', path: '/website-audit', description: 'Start a website engagement with a diagnostic review of the current website before committing to a rebuild.' },
    { name: 'Submit Enquiry', path: '/website-audit', description: 'The current public lead infrastructure can receive a deliberate sales enquiry. WebMCP exposes this without exposing admin or CRM data.' },
  ],
  engagementNote: 'Work is scoped around the business problem rather than a fixed package. Booth Marketing does not publish prices, guarantees, client claims, case-study results or fixed delivery commitments in the current public content.',
} as const

export type BoothMarketingPublic = typeof boothMarketingPublic
