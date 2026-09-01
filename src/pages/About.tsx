import { CTA, NumberedRows, PageHero } from '../components/sections/CommonSections'

export default function About() {
  return <>
    <PageHero
      eyebrow="About Booth Marketing"
      title="The business problem comes before the technology."
      copy="Booth Marketing is a B2B AI automation agency focused on helping established companies reduce repetitive handling, weak handoffs, duplicated work and unnecessary dependence on individual memory."
    />

    <section className="page-section">
      <div className="site-container rule-grid">
        <div className="eyebrow">What we believe</div>
        <div>
          <h2 className="section-title">A useful system should make the business easier to run, not give the team another thing to manage.</h2>
          <p className="lead">Established businesses rarely need more software for the sake of it. They need fewer unnecessary steps, clearer ownership, better visibility and less time spent moving information around manually.</p>
          <NumberedRows items={[
            ['Understand the existing workflow first', 'We look at how the team actually works today before deciding what should change.'],
            ['Fix the process before adding technology', 'If unnecessary steps or unclear ownership are causing the problem, those issues should be addressed first.'],
            ['Use automation where repetition adds no value', 'Copying information, sending routine updates, triggering reminders and performing structured checks are often better handled by the workflow itself.'],
            ['Keep people where judgment matters', 'Relationships, sensitive conversations, commercial decisions and unusual exceptions remain with the people best placed to handle them.'],
            ['Build something the team can understand', 'People should know what happens automatically, where they still intervene and what happens when a process needs attention.'],
          ]} />
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="site-container rule-grid">
        <div className="eyebrow">Why Booth Marketing exists</div>
        <div>
          <h2 className="section-title">Too many capable teams are spending their day keeping systems and processes stitched together by hand.</h2>
          <p className="lead">The opportunity is not to automate everything. It is to remove the repetitive operational work that quietly consumes capacity, slows response times and makes growth more difficult than it needs to be.</p>
          <p className="body-copy">The rose in the Booth Marketing identity is a personal tribute to the founder's late grandad, for whom roses held a special meaning.</p>
        </div>
      </div>
    </section>

    <CTA />
  </>
}
