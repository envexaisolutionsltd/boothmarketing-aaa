import { CTA, NumberedRows, PageHero } from '../components/sections/CommonSections'

export default function WhatWeAutomate() {
  return <>
    <PageHero
      eyebrow="What we automate"
      title="The work between your systems, people and next steps."
      copy="The strongest opportunities are usually not dramatic. They are the repetitive processes your team already knows are slower, more manual or more fragile than they should be."
    />

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">Where manual work usually hides</div>
        <h2 className="content-heading">Start with the places where the team keeps copying, chasing, checking and rebuilding information.</h2>
        <NumberedRows items={[
          ['Leads sit until somebody notices', 'Capture enquiries once, organise the context, update the CRM, route the lead and keep the next step visible.'],
          ['New clients trigger the same admin every time', 'Reduce repeated emails, document requests, folder creation, task setup and internal handoffs during onboarding.'],
          ['The same information is entered more than once', 'Move structured information between systems without asking staff to copy it manually.'],
          ['Internal handoffs need chasing', 'Make ownership and status clearer when work moves between people, departments or software.'],
          ['Reports have to be rebuilt by hand', 'Bring operational information together without asking somebody to recreate the same management picture repeatedly.'],
          ['One person holds the process together', 'Reduce dependence on individual memory by making the next step, ownership and exceptions visible.'],
        ]} />
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">Use the simplest tool that works</div>
        <h2 className="content-heading">Not every automation needs AI, and not every process should be automated.</h2>
        <NumberedRows items={[
          ['Normal automation', 'Use rules, triggers, routing, updates and structured checks when the next step is predictable.'],
          ['AI-assisted automation', 'Use AI when the workflow genuinely benefits from interpretation, classification, extraction or summarisation.'],
          ['Human work', 'Keep judgment, sensitive decisions, exceptions and relationship-heavy work with the people best placed to handle it.'],
        ]} />
      </div>
    </section>

    <CTA />
  </>
}
