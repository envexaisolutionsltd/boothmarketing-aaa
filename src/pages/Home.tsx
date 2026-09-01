import { motion } from 'framer-motion'
import { ButtonLink } from '../components/ui/ButtonLink'
import { FAQ } from '../components/ui/FAQ'
import { faqs, painPoints } from '../data/content'

const manualSteps = ['Enquiry arrives', 'Details copied', 'Follow-up assigned', 'Spreadsheet updated']
const clearerSteps = ['One clear intake', 'Context organised', 'Right person notified', 'Progress stays visible']

const approach = [
  ['Understand the workflow', 'We look at how the work actually moves today, including the people, systems, handoffs and exceptions involved.'],
  ['Remove unnecessary handling', 'We simplify the process before introducing technology, so automation is not built on top of avoidable complexity.'],
  ['Automate the repeatable parts', 'Routine movement of information, reminders, updates and rules-based steps can run without depending on someone remembering every time.'],
]

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="site-container">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}>
          <div className="hero-pill"><span />For established B2B businesses with real operations</div>
          <h1>Your business works. <span>Running it should not require this much manual effort.</span></h1>
          <p>If leads, client requests, onboarding, reporting or internal work depend on copying details, chasing updates and somebody remembering what happens next, your team is doing work the process should be doing for them.</p>
          <ButtonLink to="/automation-audit">Request an Automation Audit</ButtonLink>
        </motion.div>
      </div>
    </section>

    <section className="workflow-section">
      <div className="site-container">
        <div className="workflow-box">
          <div className="workflow-head"><span>A common operational pattern</span><small>Illustrative workflow, not a client result</small></div>
          <div className="workflow-columns">
            <div className="workflow-col">
              <div className="eyebrow">What happens now</div>
              <div className="workflow-list">{manualSteps.map((step, index) => <div className="workflow-item" key={step}><small>{String(index + 1).padStart(2, '0')}</small><i /><span>{step}</span></div>)}</div>
            </div>
            <div className="workflow-col">
              <div className="eyebrow">A clearer operational flow</div>
              <div className="workflow-list">{clearerSteps.map((step, index) => <div className="workflow-item" key={step}><small>{String(index + 1).padStart(2, '0')}</small><i /><span>{step}</span></div>)}</div>
            </div>
          </div>
          <div className="workflow-foot">The goal is not to remove people from the process. It is to stop using people for repetitive movement of information when their attention is better used elsewhere.</div>
        </div>
      </div>
    </section>

    <section className="familiar-section">
      <div className="site-container">
        <div className="eyebrow">Does this sound familiar?</div>
        <h2 className="section-title">The company has grown. The process behind it has not kept up.</h2>
        <p className="section-copy">The warning signs rarely look dramatic. They look like small pieces of admin repeated across every lead, client, job and internal handoff.</p>
        <div className="pain-grid">{painPoints.slice(0, 4).map(([title, copy], index) => <article className="pain-card" key={title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <div className="process-note">If the business only runs smoothly because good people remember everything, the process is carrying more risk than it should.</div>
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">The hidden operational cost</div>
        <h2 className="content-heading">Every small manual task becomes expensive when it happens hundreds of times.</h2>
        <p className="content-copy">One copied field, one reminder or one status check may take only a minute. The real cost appears when those actions repeat across the whole business and become part of how every new customer or job gets handled.</p>
        <div className="numbered-list">
          {[
            ['Useful people spend time on low-value handling', 'Experienced staff become responsible for moving information between tools instead of doing work that needs judgment or relationships.'],
            ['Response speed depends on availability', 'A lead or request can wait simply because the person who normally handles it is busy, in a meeting or away.'],
            ['Growth creates administrative drag', 'More customers mean more manual steps, making increased volume feel heavier instead of more scalable.'],
            ['Management visibility arrives late', 'You often need somebody to collect updates before you can see what is happening across the operation.'],
          ].map(([title, copy], index) => <div className="numbered-row" key={title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </div>
    </section>

    <section className="approach-section">
      <div className="site-container">
        <div className="eyebrow">How Booth Marketing approaches it</div>
        <h2 className="section-title">Make the business easier to run before making it more technical.</h2>
        <p className="section-copy">We start with the operational friction, not with a tool. The right result may involve automation, AI, a better connection between systems, or simply removing unnecessary steps.</p>
        <div className="approach-grid">{approach.map(([title, copy], index) => <article className="approach-card" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <div className="approach-cta"><p>You keep human judgment where it matters. We remove the repetitive handling around it.</p><ButtonLink to="/how-it-works">How We Work</ButtonLink></div>
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">Where we usually look first</div>
        <h2 className="content-heading">Start with the processes your team is already tired of doing manually.</h2>
        <div className="numbered-list">
          {[
            ['Lead handling and follow-up', 'Capture enquiries once, organise the context, update the CRM, route the lead and keep the next step visible.'],
            ['Client onboarding', 'Reduce repeated emails, document chasing, folder creation, task setup and internal handoffs every time a new client starts.'],
            ['Repetitive administration', 'Remove routine copying, formatting, document creation, notifications and structured checks.'],
            ['Internal handoffs', 'Make ownership and status clearer when work moves between people, teams or systems.'],
            ['Reporting and visibility', 'Bring operational information together without rebuilding the same management picture by hand.'],
          ].map(([title, copy], index) => <div className="numbered-row" key={title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">Not everything should be automated</div>
        <h2 className="content-heading">A better process still needs people where judgment, context and relationships matter.</h2>
        <p className="content-copy">The goal is not maximum automation. The goal is a business that requires less unnecessary intervention to keep moving.</p>
        <div className="numbered-list">
          {[
            ['Automate repetition', 'Routine movement of information, reminders, structured checks, updates and rules-based tasks are usually strong candidates.'],
            ['Keep judgment human', 'Commercial decisions, sensitive conversations, exceptions and relationship-heavy work should remain with the right person.'],
            ['Make exceptions visible', 'When the system cannot confidently continue, the right person should know what needs attention instead of the process silently failing.'],
          ].map(([title, copy], index) => <div className="numbered-row" key={title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </div>
    </section>

    <section className="content-section">
      <div className="site-container">
        <div className="eyebrow">Questions you may already be asking</div>
        <h2 className="content-heading">You should understand the approach before trusting us with an operational process.</h2>
        <div className="faq-list"><FAQ items={faqs} /></div>
      </div>
    </section>

    <section className="audit-home-cta">
      <div className="site-container audit-home-inner">
        <div className="eyebrow">Automation audit</div>
        <h2>You do not need to know what you want automated.</h2>
        <p>Bring us one process that keeps wasting time, getting chased or depending too heavily on somebody remembering what happens next. We will help work out what is actually worth changing.</p>
        <ButtonLink to="/automation-audit">Request an Automation Audit</ButtonLink>
      </div>
    </section>
  </>
}
