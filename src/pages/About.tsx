import { CTA, NumberedRows, PageHero } from '../components/sections/CommonSections'

export default function About() {
  return <>
    <PageHero eyebrow="About Booth Marketing" title="The business problem comes before the technology." copy="Booth Marketing is a B2B AI automation agency focused on reducing unnecessary manual handling inside established businesses." />

    <section className="page-section">
      <div className="site-container rule-grid">
        <div className="eyebrow">What we believe</div>
        <div>
          <h2 className="section-title">A system is only useful when it makes a real process easier to run.</h2>
          <p className="lead">Businesses do not need more technology for the sake of it. They need fewer unnecessary steps, clearer ownership, better visibility, and less time spent moving information by hand.</p>
          <NumberedRows items={[
            ['Existing workflow first', 'We understand how the team works today before deciding what should change.'],
            ['No predetermined answer', 'An audit can conclude that a process should be simplified, left manual, or revisited later.'],
            ['Practical over impressive', 'Useful, maintainable workflows matter more than technology that looks good in a demo.'],
            ['Human where it matters', 'Relationships, judgment, and complex decisions remain with the people best placed to make them.'],
            ['Clear enough to own', 'You should understand what changed, why it matters, and where people still need to intervene.'],
          ]} />
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="site-container rule-grid">
        <div className="eyebrow">The Booth Marketing identity</div>
        <div>
          <h2 className="section-title">Practical automation with a personal foundation.</h2>
          <p className="lead">Booth Marketing was built around a simple idea: businesses should not adopt technology because it is fashionable. They should use it when it removes a genuine operational problem.</p>
          <p className="body-copy">The rose in the Booth Marketing identity is a personal tribute to the founder's late grandad, for whom roses held a special meaning.</p>
        </div>
      </div>
    </section>

    <CTA />
  </>
}
