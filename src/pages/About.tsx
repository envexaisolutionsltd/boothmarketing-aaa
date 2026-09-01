import { CTA, NumberedRows, PageHero } from '../components/sections/CommonSections'

export default function About() {
  return <>
    <PageHero
      eyebrow="About Booth Marketing"
      title="The business problem comes before the technology."
      copy="Booth Marketing helps established B2B companies reduce the repetitive handling, weak handoffs and disconnected processes that quietly make growth harder to manage."
    />

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">What we believe</div>
        <h2 className="content-heading">A useful system should make the business easier to run, not give the team another thing to manage.</h2>
        <NumberedRows items={[
          ['Understand the workflow first', 'We look at how the team actually works today before deciding what should change.'],
          ['Simplify before automating', 'If unnecessary steps or unclear ownership are causing the problem, those issues should be addressed first.'],
          ['Use what already works where possible', 'Existing software should not be replaced simply because a newer tool exists.'],
          ['Keep people where judgment matters', 'Relationships, commercial decisions and unusual exceptions remain with the people best placed to handle them.'],
        ]} />
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">Why Booth Marketing exists</div>
        <h2 className="content-heading">Capable teams should not spend their day holding systems and processes together by hand.</h2>
        <p className="content-copy">The opportunity is not to automate everything. It is to remove the repetitive operational work that consumes capacity, slows response times and makes the company more dependent on individual memory than it needs to be.</p>
        <p className="body-copy">The rose in the Booth Marketing identity is a personal tribute to the founder's late grandad, for whom roses held a special meaning.</p>
      </div>
    </section>

    <CTA />
  </>
}
