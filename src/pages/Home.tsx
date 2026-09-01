import { motion } from 'framer-motion'
import { ButtonLink } from '../components/ui/ButtonLink'
import { FAQ } from '../components/ui/FAQ'
import { faqs, painPoints } from '../data/content'

const manualSteps = ['Enquiry arrives', 'Details copied', 'CRM updated', 'Owner chased', 'Follow-up sent', 'Spreadsheet checked']
const clearerSteps = ['Enquiry captured once', 'Context organised', 'CRM updated', 'Owner assigned', 'Follow-up triggered', 'Status stays visible']

const changes = [
  ['Connect what already works', 'Use the systems you already rely on where possible, then improve how information moves between them.'],
  ['Remove unnecessary handling', 'Reduce copying, chasing, routing, checking and repeated setup that does not require human judgment.'],
  ['Keep judgment human', 'People stay responsible for decisions, exceptions and relationships while repeatable steps happen more reliably.'],
]

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="site-container">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}>
          <div className="hero-pill"><span />For established B2B businesses with real operations</div>
          <h1>Your business has grown. <span>The operation should not still depend on this much manual effort.</span></h1>
          <p>If leads, client requests, onboarding, reporting or internal work depend on copying details, chasing updates and somebody remembering the next step, your team is doing work the process should be doing for them.</p>
          <div className="page-hero-actions"><ButtonLink to="/automation-audit">Request an Automation Audit</ButtonLink><ButtonLink to="/what-we-automate" secondary>See Where Manual Work Hides</ButtonLink></div>
        </motion.div>
      </div>
    </section>

    <section className="familiar-section">
      <div className="site-container">
        <div className="eyebrow">Does this sound familiar?</div>
        <h2 className="section-title">The warning signs look small. Together, they make the company harder to run than it should be.</h2>
        <div className="pain-grid">{painPoints.slice(0, 4).map(([title, copy], index) => <article className="pain-card" key={title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <div className="process-note">If the business only runs smoothly because good people remember everything, the process is carrying more risk than it should.</div>
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">Why this keeps happening</div>
        <h2 className="content-heading">Your software probably is not the problem. The gaps between it are.</h2>
        <p className="content-copy">Email, CRM, spreadsheets, project tools, accounting software and shared folders can all work perfectly well on their own. The friction appears when people have to manually connect them together.</p>
        <div className="numbered-list">
          {[
            ['Information arrives in one place and gets re-entered somewhere else', 'Staff become responsible for copying the same details between inboxes, spreadsheets, CRM records and internal systems.'],
            ['The next step lives in somebody’s head', 'A lead, request or internal task only moves when the right person notices it and remembers what happens next.'],
            ['Visibility has to be rebuilt manually', 'Managers wait for somebody to gather updates before they can see what is actually happening across the operation.'],
          ].map(([title, copy], index) => <div className="numbered-row" key={title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </div>
    </section>

    <section className="workflow-section">
      <div className="site-container">
        <div className="workflow-box">
          <div className="workflow-head"><span>One enquiry, two very different operating models</span><small>Illustrative workflow</small></div>
          <div className="workflow-columns">
            <div className="workflow-col"><div className="eyebrow">People move the work</div><div className="workflow-list">{manualSteps.map((step, index) => <div className="workflow-item" key={step}><small>{String(index + 1).padStart(2, '0')}</small><i /><span>{step}</span></div>)}</div></div>
            <div className="workflow-col"><div className="eyebrow">The process moves the work</div><div className="workflow-list">{clearerSteps.map((step, index) => <div className="workflow-item" key={step}><small>{String(index + 1).padStart(2, '0')}</small><i /><span>{step}</span></div>)}</div></div>
          </div>
          <div className="workflow-foot">Your people should handle judgment, exceptions and relationships. They should not have to be the connection between software systems.</div>
        </div>
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">The growth problem</div>
        <h2 className="content-heading">More customers should not automatically mean more manual coordination.</h2>
        <p className="content-copy">Growth exposes weak processes quickly. The real question is whether the business can handle more volume without adding the same amount of administrative effort behind it.</p>
        <div className="approach-grid">
          {[
            ['More leads', 'Should not mean more manual routing, CRM updates and follow-up checking.'],
            ['More clients', 'Should not mean rebuilding the same onboarding process by hand every time.'],
            ['More jobs', 'Should not mean more spreadsheets, chasing and management reporting effort.'],
          ].map(([title, copy], index) => <article className="approach-card" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="approach-section">
      <div className="site-container">
        <div className="eyebrow">What Booth Marketing changes</div>
        <h2 className="section-title">A business that needs less manual intervention to keep moving.</h2>
        <p className="section-copy">We understand the operation first, then decide what should be simplified, connected, automated or deliberately left human.</p>
        <div className="approach-grid">{changes.map(([title, copy], index) => <article className="approach-card" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <div className="approach-cta"><p>The goal is fewer operational headaches, not another complicated system your team has to manage.</p><ButtonLink to="/how-it-works">See How We Work</ButtonLink></div>
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">Before you ask</div>
        <h2 className="content-heading">You do not need a technical brief, a new software stack or a plan to automate everything.</h2>
        <div className="numbered-list">
          {[
            ['We work with what already exists where possible', 'If the systems you already use can support a better workflow, replacing them should not be the default answer.'],
            ['Not every process should be automated', 'Judgment, exceptions, commercial decisions and relationship-heavy work often belong with people.'],
            ['The team should understand what changes', 'A useful workflow should be clear enough that people know what happens automatically and when they need to step in.'],
            ['The audit does not commit you to a build', 'The first step is understanding whether the process is even worth changing.'],
          ].map(([title, copy], index) => <div className="numbered-row" key={title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
        <div className="faq-list"><FAQ items={faqs.slice(0, 5)} /></div>
      </div>
    </section>

    <section className="audit-home-cta">
      <div className="site-container audit-home-inner">
        <div className="eyebrow">Automation audit</div>
        <h2>Bring us the process your team is tired of doing manually.</h2>
        <p>We will look at where the unnecessary handling is, what could be simplified, what could be automated, and what should remain human.</p>
        <ButtonLink to="/automation-audit">Request an Automation Audit</ButtonLink>
      </div>
    </section>
  </>
}
