import { CTA, NumberedRows, PageHero } from '../components/sections/CommonSections'
import { useCases } from '../data/content'

export default function WhatWeAutomate() {
  return <>
    <PageHero
      eyebrow="What we automate"
      title="The repetitive work between your people, systems and next steps."
      copy="Most established businesses do not need a dramatic transformation. They need routine work to stop depending on somebody copying information, chasing updates, checking statuses and remembering what happens next."
    />

    <section className="page-section">
      <div className="site-container rule-grid">
        <div className="eyebrow">Common opportunities</div>
        <div>
          <h2 className="section-title">Start where the team already feels the friction.</h2>
          <p className="lead">The strongest opportunities are usually ordinary processes that happen repeatedly and add little value when handled manually.</p>
          <NumberedRows items={useCases} />
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="site-container rule-grid">
        <div className="eyebrow">A useful filter</div>
        <div>
          <h2 className="section-title">A process is worth examining when the manual handling has become part of the problem.</h2>
          <NumberedRows items={[
            ['It happens repeatedly', 'The same sequence occurs every day, every week or every time a lead, client or job reaches a particular stage.'],
            ['The next step is usually predictable', 'The process follows reasonably clear rules and the information needed to continue already exists somewhere in the business.'],
            ['People are moving information rather than using judgment', 'Staff are copying, formatting, routing, checking or updating instead of doing work that genuinely needs a person.'],
            ['Delays create real consequences', 'A missed handoff, late reply, forgotten document or stale status creates avoidable pressure for the team or customer.'],
            ['The workflow touches several systems', 'Information moves between email, CRM, spreadsheets, forms, documents and project tools, with people manually connecting the dots.'],
          ]} />
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="site-container rule-grid">
        <div className="eyebrow">Where AI can help</div>
        <div>
          <h2 className="section-title">AI is useful when a workflow needs interpretation, not when a simple rule would do the job better.</h2>
          <NumberedRows items={[
            ['Classify incoming information', 'Sort enquiries, requests or documents when the meaning matters more than a simple field value.'],
            ['Summarise useful context', 'Turn long emails, notes or updates into a cleaner summary for the person who needs to act.'],
            ['Extract structured details', 'Pull relevant information from unstructured content so the next step can happen without manual re-entry.'],
            ['Draft repeatable communications', 'Prepare a first draft where the context is known and a human can still review anything sensitive or important.'],
          ]} />
        </div>
      </div>
    </section>

    <CTA />
  </>
}
