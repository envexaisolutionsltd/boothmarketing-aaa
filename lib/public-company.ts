export const boothMarketingPublic = {
  companyName: 'Booth Marketing',
  domain: 'https://www.boothmarketing.co.uk',
  positioning: 'AI is changing how customers search. Your website still has to earn the decision.',
  buyingJourney: ['Ask AI', 'Shortlist', 'Website', 'Trust', 'Action'],
  whatWeDo: 'Booth Marketing builds conversion-focused websites and landing pages for established businesses, with strategy, messaging, responsive design and development shaped around the buyer decision.',
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
  idealCustomer: 'Established businesses that need their website to communicate more clearly, earn trust faster and create a stronger path from attention to action.',
  problemsSolved: [
    'Vague positioning or offer clarity',
    'Weak first-impression trust and credibility',
    'Slow or confusing mobile journeys',
    'Pages that try to serve every visitor intent at once',
    'Weak calls to action or conversion paths',
    'A dated website where targeted improvements or a rebuild may be justified',
  ],
  process: [
    { step: 1, name: 'Understand the buyer', description: 'Clarify who is arriving, what they know, what they compare and what could stop trust.' },
    { step: 2, name: 'Diagnose the current site', description: 'Review clarity, positioning, proof, mobile experience, page structure and the route from attention to action.' },
    { step: 3, name: 'Design the decision path', description: 'Decide what the buyer needs to see, in what order, and where different offers or audiences need different pages.' },
    { step: 4, name: 'Build for speed and trust', description: 'Create a fast, mobile-first site that communicates clearly.' },
    { step: 5, name: 'Measure and improve', description: 'Use real behaviour and conversion data to refine pages after launch.' },
  ],
  callsToAction: [
    { name: 'Request Website Audit', path: '/website-audit', description: 'Start with a diagnostic review of the current website before committing to a rebuild.' },
  ],
  engagementNote: 'Work is scoped around the business problem rather than a fixed website package. Booth Marketing does not publish pricing, guarantees or fixed delivery commitments in the current public site.',
} as const

export type BoothMarketingPublic = typeof boothMarketingPublic
