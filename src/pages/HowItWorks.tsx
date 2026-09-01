import { CTA, NumberedRows, PageHero } from '../components/sections/CommonSections'

export default function HowItWorks() {
  return <>
    <PageHero
      eyebrow="How we work"
      title="We understand the process before we touch the technology."
      copy="You should not end up with another complicated system your team hates using. We start with the workflow, simplify it, then automate only the parts that genuinely benefit from it."
    />

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">The process</div>
        <h2 className="content-heading">A practical path from operational friction to a clearer workflow.</h2>
        <NumberedRows items={[
          ['Find the friction', 'Choose one workflow that is repetitive, slow, difficult to track or too dependent on one person.'],
          ['Map what happens today', 'We look at the people, systems, handoffs, decisions and exceptions involved in the current process.'],
          ['Remove unnecessary steps', 'We simplify before automating so technology is not built on top of avoidable complexity.'],
          ['Decide what should happen automatically', 'We define which repeatable steps can run reliably and which decisions should stay human.'],
          ['Test the normal path and the exceptions', 'A useful workflow should handle predictable work and make unusual situations visible to the right person.'],
          ['Make it understandable', 'Your team should know what happens automatically, where they intervene and what to do when something needs attention.'],
        ]} />
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">What we try to avoid</div>
        <h2 className="content-heading">Less complexity, not more.</h2>
        <NumberedRows items={[
          ['Replacing software unnecessarily', 'If your existing systems can support a better process, keeping them may be the better answer.'],
          ['Automating an unstable workflow', 'A process that changes constantly may need simplifying and clarifying before it is ready for automation.'],
          ['Removing judgment where it matters', 'Sensitive decisions, relationships, exceptions and commercial judgment remain with people.'],
          ['Creating a black box', 'The workflow should be clear enough that your team understands how it works and when it needs human attention.'],
        ]} />
      </div>
    </section>

    <CTA />
  </>
}
