import { motion } from 'framer-motion'
import { ButtonLink } from '../components/ui/ButtonLink'
import { painPoints } from '../data/content'

const manualSteps = ['Enquiry arrives', 'Details copied', 'Follow-up assigned', 'Spreadsheet updated']
const clearerSteps = ['One clear intake', 'Context organised', 'Right person notified', 'Progress stays visible']

const approach = [
  ['Built Around Your Workflow', 'We start with the way your business operates and identify where a practical change would genuinely improve it.'],
  ['Practical Over Flashy', 'The goal is not to add more technology. It is to reduce unnecessary work and make the process easier to run.'],
  ['Clear Before Complex', 'You should understand what is changing, why it matters, and how it fits the business before anything is built.'],
]

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="site-container">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}>
          <div className="hero-pill"><span />For established businesses with real operations</div>
          <h1>Your business has grown. <span>Too much of the work is still moved forward by hand.</span></h1>
          <p>If leads, client requests, or internal work depend on copying details, chasing updates, and someone remembering the next step, the process is costing your team time.</p>
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
              <div className="eyebrow">Manual handling</div>
              <div className="workflow-list">{manualSteps.map((step, index) => <div className="workflow-item" key={step}><small>{String(index + 1).padStart(2, '0')}</small><i /><span>{step}</span></div>)}</div>
            </div>
            <div className="workflow-col">
              <div className="eyebrow">Clearer operational flow</div>
              <div className="workflow-list">{clearerSteps.map((step, index) => <div className="workflow-item" key={step}><small>{String(index + 1).padStart(2, '0')}</small><i /><span>{step}</span></div>)}</div>
            </div>
          </div>
          <div className="workflow-foot">The aim is not to automate every step. It is to remove unnecessary handling while keeping human judgment where it matters.</div>
        </div>
      </div>
    </section>

    <section className="familiar-section">
      <div className="site-container">
        <div className="eyebrow">Does this sound familiar?</div>
        <h2 className="section-title">The business is growing. The process is still being held together manually.</h2>
        <p className="section-copy">Operational friction usually appears in ordinary moments: an enquiry waiting, an update being chased, or the same information being moved twice.</p>
        <div className="pain-grid">{painPoints.slice(0, 4).map(([title, copy], index) => <article className="pain-card" key={title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <div className="process-note">These are usually process problems before they are technology problems.</div>
      </div>
    </section>

    <section className="approach-section">
      <div className="site-container">
        <div className="eyebrow">Our approach</div>
        <h2 className="section-title">Less technology to manage.<br />More control over the process.</h2>
        <p className="section-copy">We understand the operation first, then decide what should be improved, what could be automated, and what should stay human.</p>
        <div className="approach-grid">{approach.map(([title, copy], index) => <article className="approach-card" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <div className="approach-cta"><p>See the full process, including how opportunities are assessed before anything is built.</p><ButtonLink to="/how-it-works">How We Work</ButtonLink></div>
      </div>
    </section>

    <section className="audit-home-cta">
      <div className="site-container audit-home-inner">
        <div className="eyebrow">Free automation audit</div>
        <h2>Find out what is actually worth improving.</h2>
        <p>Review one real workflow, identify unnecessary handling, and leave with clearer recommendations, including what should remain manual.</p>
        <ButtonLink to="/automation-audit">Explore the Automation Audit</ButtonLink>
      </div>
    </section>
  </>
}
