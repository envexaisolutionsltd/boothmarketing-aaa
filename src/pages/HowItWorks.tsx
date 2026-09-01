import { CTA, NumberedRows, PageHero } from '../components/sections/CommonSections'

export default function HowItWorks() {
  return <>
    <PageHero
      eyebrow="How we work"
      title="We do not start with AI. We start with the process that keeps wasting your team's time."
      copy="The quickest way to build the wrong system is to automate a messy workflow without understanding it first. We map what happens today, simplify it, then automate only the parts that genuinely benefit from it."
    />

    <section className="page-section">
      <div className="site-container rule-grid">
        <div className="eyebrow">The process</div>
        <div>
          <h2 className="section-title">From operational friction to a workflow your team can actually rely on.</h2>
          <NumberedRows items={[
            ['Identify the friction', 'Start with a process that is repetitive, slow, inconsistent, difficult to track or too dependent on one person.'],
            ['Map what happens now', 'We document the people, systems, inputs, decisions, handoffs and exceptions involved today.'],
            ['Find the unnecessary handling', 'We separate useful human judgment from copying, chasing, updating and routine administration.'],
            ['Simplify before automating', 'If a step can be removed or ownership can be clarified, that should happen before technology is added.'],
            ['Design the improved flow', 'We define what should happen automatically, where people still intervene and how exceptions become visible.'],
            ['Build and test carefully', 'The workflow is implemented in controlled stages and tested against the normal path as well as important exceptions.'],
            ['Handover with clarity', 'Your team should know what the system does, where humans remain responsible and what happens when something needs attention.'],
          ]} />
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="site-container rule-grid">
        <div className="eyebrow">What this avoids</div>
        <div>
          <h2 className="section-title">The goal is fewer operational headaches, not another complicated system to manage.</h2>
          <NumberedRows items={[
            ['No technology-first recommendations', 'A tool is only useful if it solves a clearly understood problem in the workflow.'],
            ['No replacing systems unnecessarily', 'Where possible, we improve how your existing tools work together rather than forcing a complete rebuild.'],
            ['No automating judgment-heavy work', 'Sensitive decisions, commercial judgment, relationships and unusual exceptions stay with people.'],
            ['No invisible failures', 'Important exceptions should be surfaced clearly so somebody knows when the workflow needs human attention.'],
          ]} />
        </div>
      </div>
    </section>

    <CTA />
  </>
}
