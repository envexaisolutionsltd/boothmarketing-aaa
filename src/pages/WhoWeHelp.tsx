import { CTA, NumberedRows, PageHero } from '../components/sections/CommonSections'

export default function WhoWeHelp() {
  return <>
    <PageHero
      eyebrow="Who we help"
      title="For established B2B companies where growth has made the operation harder to run."
      copy="You already have customers, staff and software. The problem is that too much of the business still depends on people copying information, chasing updates, remembering the next step and holding processes together manually."
    />

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">You are probably a good fit if</div>
        <h2 className="content-heading">The business works, but keeping everything moving takes more effort than it should.</h2>
        <NumberedRows items={[
          ['Your team repeats the same admin', 'People spend useful time copying details, creating the same documents, checking statuses and chasing information.'],
          ['Important work depends on someone noticing', 'Leads, client requests and internal tasks can sit still until the right person sees them and remembers what happens next.'],
          ['Your systems do not work together cleanly', 'Email, CRM, spreadsheets, project tools and shared folders all contain parts of the same process, so people become the connection between them.'],
          ['One person knows how the process really works', 'When that person is busy or away, progress slows because ownership, context or the next step is not visible enough.'],
          ['Growth is creating more back-office work', 'More clients and jobs create more administration, and you want capacity to scale without adding the same amount of coordination overhead.'],
        ]} />
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">Probably not the right fit</div>
        <h2 className="content-heading">The answer is not always more automation.</h2>
        <NumberedRows items={[
          ['You want AI because it sounds impressive', 'The business problem has to come first. Technology is only useful when it improves a clearly understood workflow.'],
          ['The process changes every day', 'If there is no stable way of working yet, simplifying and clarifying ownership may matter more than automating it.'],
          ['The real problem is unclear management', 'Automation can improve a process, but it cannot replace clear responsibility and decision-making.'],
        ]} />
      </div>
    </section>

    <CTA />
  </>
}
