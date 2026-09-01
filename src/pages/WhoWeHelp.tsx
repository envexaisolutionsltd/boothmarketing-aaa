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
        <p className="content-copy">Most of the companies we are best suited to are not starting from scratch. They have real operations, real customers and real pressure. The friction appears between the systems and people already in place.</p>
        <NumberedRows items={[
          ['Your team repeats the same admin every day', 'People spend useful time copying details, creating the same documents, sending routine updates, checking statuses and chasing information.'],
          ['Important work depends on someone noticing', 'Leads, client requests and internal tasks can sit still until the right person sees them and remembers what should happen next.'],
          ['The same information lives in several places', 'Email, spreadsheets, CRM records, project tools and shared folders all contain parts of the same story, so people become the connection between systems.'],
          ['Certain processes rely on one person knowing everything', 'When that person is busy or away, the process slows because ownership, context or the next step is not visible enough.'],
          ['Growth keeps creating more back-office work', 'More clients and jobs create more administration, and you can see that scaling the current process will eventually become expensive or fragile.'],
        ]} />
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">What you probably do not want</div>
        <h2 className="content-heading">You do not need another tool that creates more work for the team.</h2>
        <p className="content-copy">You need the operation to become easier to run. That means using the systems you already have where possible, simplifying the process first and only introducing automation when there is a clear reason.</p>
        <NumberedRows items={[
          ['No unnecessary software replacement', 'If your current systems can support a better workflow, the answer should not be to replace them for the sake of a new technology stack.'],
          ['No automation for the sake of AI', 'The business problem comes first. AI is useful only when it improves a defined part of the workflow.'],
          ['No black-box process your team cannot understand', 'The people using the workflow should know what happens automatically, what still needs human judgment and what happens when something unusual occurs.'],
          ['No forcing every step to become automated', 'Commercial decisions, sensitive conversations, exceptions and relationship-heavy work often belong with people.'],
        ]} />
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">The buying question</div>
        <h2 className="content-heading">You do not need to know what you want built. You only need to know where the business keeps getting stuck.</h2>
        <p className="content-copy">A useful starting point might be one process that always needs chasing, one workflow that falls apart when somebody is away, or one area where the same information keeps being entered twice.</p>
      </div>
    </section>

    <CTA />
  </>
}
