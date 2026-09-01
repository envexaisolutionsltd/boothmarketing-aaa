import { CTA, NumberedRows, PageHero } from '../components/sections/CommonSections'

const personaFacts = [
  ['Name', 'Daniel Mercer'],
  ['Age', '42'],
  ['Location', 'Manchester, UK'],
  ['Role', 'Managing Director'],
  ['Company', 'Mercer Commercial Services Ltd'],
  ['Business', 'B2B facilities and compliance services'],
  ['Team', '28 employees'],
  ['Revenue', 'Approx. £2.8m annually'],
  ['Years trading', '11 years'],
]

const buyerQuestions = [
  'Could this process actually be automated?',
  'Can you work with the systems we already use?',
  'Will we need to replace our existing software?',
  'What would you automate first?',
  'What happens when automation cannot handle an exception?',
  'Can this help us grow without adding the same amount of admin overhead?',
]

export default function WhoWeHelp() {
  return <>
    <PageHero
      eyebrow="Who we help"
      title="Established B2B companies where growth has made the operation harder to run."
      copy="Booth Marketing is best suited to teams that already have customers, staff and systems, but still rely on too much manual handling between them."
    />

    <section className="content-section prototype-persona-section">
      <div className="site-container">
        <div className="eyebrow">Prototype buyer profile</div>
        <h2 className="content-heading">Meet Daniel Mercer, the fictional decision-maker this prototype is designed around.</h2>
        <p className="content-copy">Daniel is not a real client or testimonial. He is an internal prototype persona used to keep the website focused on the problems, objections and buying triggers of a realistic established B2B owner.</p>

        <div className="persona-shell">
          <div className="persona-summary">
            <div className="persona-initials">DM</div>
            <div>
              <span className="persona-kicker">Fictional prototype persona</span>
              <h3>Daniel Mercer</h3>
              <p>His business already works. The problem is that too many people are still manually connecting the software, chasing the next step and holding processes together through memory.</p>
            </div>
          </div>
          <div className="persona-facts">
            {personaFacts.map(([label, value]) => <div className="persona-fact" key={label}><small>{label}</small><strong>{value}</strong></div>)}
          </div>
        </div>

        <div className="persona-context-grid">
          <article>
            <span>Existing tools</span>
            <h3>He already has software.</h3>
            <p>Outlook, Excel, HubSpot, Xero, Microsoft Teams, SharePoint, enquiry forms and a job-management system. The issue is not a lack of tools. It is the manual work between them.</p>
          </article>
          <article>
            <span>Main frustration</span>
            <h3>Growth keeps creating more admin.</h3>
            <p>More leads, clients and jobs create more copying, chasing, updating and checking. Daniel wants capacity to grow without back-office effort rising at the same rate.</p>
          </article>
          <article>
            <span>Conversion trigger</span>
            <h3>He wants diagnosis before technology.</h3>
            <p>Daniel contacts Booth Marketing when he believes we understand why the operation feels harder than it should and will examine the workflow before recommending automation.</p>
          </article>
        </div>

        <div className="buyer-question-panel">
          <div>
            <div className="eyebrow">What Daniel is asking</div>
            <h3>The website should answer the questions already in his head.</h3>
          </div>
          <div className="buyer-question-list">
            {buyerQuestions.map((question, index) => <div key={question}><small>{String(index + 1).padStart(2, '0')}</small><span>{question}</span></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">Good fit</div>
        <h2 className="content-heading">You probably recognise the problem before you know the solution.</h2>
        <NumberedRows items={[
          ['The business already works', 'You are not looking for a speculative AI experiment. You have real processes, real customers and real operational pressure.'],
          ['Your team repeats the same admin', 'Useful people spend time copying, chasing, updating, checking and rebuilding information.'],
          ['You already use several systems', 'The issue is often not a lack of software. It is that people manually connect the software together.'],
          ['Growth is adding overhead', 'More clients or jobs create more back-office work, and you want capacity to scale more cleanly.'],
          ['You value practical recommendations', 'You want somebody to understand the workflow first and say when automation is not the right answer.'],
        ]} />
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">Not the right fit</div>
        <h2 className="content-heading">We are not trying to automate everything for everyone.</h2>
        <NumberedRows items={[
          ['You want AI because it is fashionable', 'Technology is not the objective. The business problem has to come first.'],
          ['There is no stable process yet', 'If the workflow changes every day, simplifying it may matter more than automating it.'],
          ['You need human judgment at every step', 'Sensitive, relationship-heavy or exception-driven work may need to remain human.'],
          ['You expect a tool to fix a management problem', 'Automation can improve a process. It cannot create clarity where ownership and decision-making are fundamentally absent.'],
        ]} />
      </div>
    </section>

    <CTA />
  </>
}
