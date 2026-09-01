import { motion } from 'framer-motion'
import { ButtonLink } from '../components/ui/ButtonLink'
import { FAQ } from '../components/ui/FAQ'
import { CTA, NumberedRows } from '../components/sections/CommonSections'
import { faqs, painPoints, useCases } from '../data/content'

export default function Home() {
  return <>
    <section className="page-section !pt-[88px] md:!pt-[118px]">
      <div className="site-container grid gap-14 lg:grid-cols-[1.25fr_.75fr] lg:items-stretch">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
          <div className="eyebrow">B2B AI automation for established businesses</div>
          <h1 className="display mt-5">Your business works. Too much of the work still depends on someone doing it by hand.</h1>
          <p className="lead mt-8">We help B2B teams reduce repetitive admin, weak handoffs, manual follow-up and disconnected processes without forcing unnecessary technology into the business.</p>
          <div className="mt-9 flex flex-wrap gap-3"><ButtonLink to="/automation-audit">Request an Automation Audit</ButtonLink><ButtonLink to="/what-we-automate" secondary>See What We Automate</ButtonLink></div>
          <p className="mt-5 max-w-2xl text-sm text-[#68635b]">You do not need to know what should be automated. Start with the process that keeps wasting time.</p>
        </motion.div>
        <div className="signal-panel">
          {['Leads need manually assigning or chasing','Information is copied between inboxes, sheets and systems','Client onboarding creates the same admin every time','Important work slows when one person is unavailable'].map((x,i)=><div className="signal-item" key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}
        </div>
      </div>
    </section>

    <section className="page-section"><div className="site-container rule-grid"><div className="eyebrow">Does this sound familiar?</div><div><h2 className="section-title">The company has grown faster than the process behind it.</h2><p className="lead mt-6">Operational friction usually looks small in isolation. It becomes expensive when those small tasks repeat across every lead, client, job and internal handoff.</p><div className="mt-12"><NumberedRows items={painPoints}/></div></div></div></section>

    <section className="page-section"><div className="site-container"><div className="rule-grid"><div className="eyebrow">Before and after</div><div><h2 className="section-title">Automation should remove handling, not remove control.</h2><p className="lead mt-6">The point is not to replace people. It is to stop using people as the connection between systems when a reliable workflow can handle the movement of information.</p></div></div><div className="workflow-wrap"><div className="workflow-panel"><div className="eyebrow">Manual handling</div><h3 className="mt-4 text-2xl font-bold">One enquiry, six small jobs</h3>{['Enquiry arrives','Details copied','CRM updated','Owner assigned','Follow-up sent','Progress checked'].map((x,i)=><div className="workflow-step" key={x}><span>{x}</span><small>{String(i+1).padStart(2,'0')}</small></div>)}</div><div className="workflow-arrow">→</div><div className="workflow-panel"><div className="eyebrow">Clearer operational flow</div><h3 className="mt-4 text-2xl font-bold">One intake, visible progress</h3>{['Enquiry captured once','Context organised','CRM updated','Right person notified','Follow-up triggered','Status stays visible'].map((x,i)=><div className="workflow-step" key={x}><span>{x}</span><small>{String(i+1).padStart(2,'0')}</small></div>)}</div></div><p className="outcome-line">Automation handles the movement of information. Your team keeps the judgment, relationships and decisions that actually need people.</p></div></section>

    <section className="page-section"><div className="site-container rule-grid"><div className="eyebrow">What we automate</div><div><h2 className="section-title">Start with the operational bottleneck, not the technology.</h2><p className="lead mt-6">We look for work that is repeated, rules-based, time-consuming or easy to miss, then decide whether automation is actually the right answer.</p><div className="mt-12"><NumberedRows items={useCases.slice(0,6)}/></div><div className="mt-8"><ButtonLink to="/what-we-automate" secondary>Explore All Use Cases</ButtonLink></div></div></div></section>

    <section className="quote-band"><div className="site-container"><div className="eyebrow !text-[#c48b8e]">Our principle</div><blockquote>We redesign the process, then automate the repetitive parts.</blockquote></div></section>

    <section className="page-section"><div className="site-container rule-grid"><div className="eyebrow">What we do not automate</div><div><h2 className="section-title">Not everything should be automated.</h2><p className="lead mt-6">Good automation makes the business easier to run. If a process depends on judgment, relationships or changing context, the right answer may be to keep that part human.</p><div className="mt-12"><NumberedRows items={[["Automate repetition","Routine movement of information, structured checks, reminders, updates and rules-based steps."],["Keep judgment human","Commercial decisions, sensitive conversations, exceptions and work where context genuinely matters."],["Avoid unnecessary complexity","If simplifying the process is better than building a system, that is the recommendation we should make."]]}/></div></div></div></section>

    <section className="page-section"><div className="site-container rule-grid"><div className="eyebrow">How it works</div><div><h2 className="section-title">Clarity before commitment.</h2><p className="lead mt-6">You do not need a technical brief. We start by understanding the workflow that is causing pressure and work forward from there.</p><div className="mt-12"><NumberedRows items={[["Show us the friction","Bring one real process that is repetitive, slow, difficult to track or too dependent on one person."],["We map what happens now","We look at the people, systems, handoffs and decisions involved before suggesting any technology."],["We identify what is worth changing","You get a practical view of what could be automated, simplified, connected or left alone."],["You decide what happens next","If there is a worthwhile project, we can scope it. If there is not, you still leave with clearer operational thinking."]]}/></div></div></div></section>

    <section className="page-section"><div className="site-container rule-grid"><div className="eyebrow">Questions owners ask</div><div><h2 className="section-title">Before you hand us a process, you should know how we think.</h2><div className="mt-10"><FAQ items={faqs}/></div></div></div></section>
    <CTA />
  </>
}
