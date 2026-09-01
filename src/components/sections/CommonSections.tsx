import { motion } from 'framer-motion'
import { ButtonLink } from '../ui/ButtonLink'

export function PageHero({ eyebrow, title, copy, secondary }: { eyebrow: string; title: string; copy: string; secondary?: { label: string; to: string } }) {
  return <section className="page-section !pt-[96px] md:!pt-[126px]">
    <div className="site-container">
      <motion.div initial={{opacity:0, y:18}} animate={{opacity:1, y:0}} transition={{duration:.45}}>
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="display mt-5">{title}</h1>
        <p className="lead mt-8">{copy}</p>
        <div className="mt-9 flex flex-wrap gap-3"><ButtonLink to="/automation-audit">Request an Automation Audit</ButtonLink>{secondary && <ButtonLink to={secondary.to} secondary>{secondary.label}</ButtonLink>}</div>
      </motion.div>
    </div>
  </section>
}

export function CTA() {
  return <section className="cta-band"><div className="site-container rule-grid"><div><div className="eyebrow">Automation Audit</div><h2 className="section-title mt-5">Bring us the process your team is tired of doing manually.</h2></div><div><p className="lead">You do not need to know the solution. Tell us where the work is getting stuck and we will help determine what is actually worth improving.</p><div className="mt-8"><ButtonLink to="/automation-audit">Request Your Audit</ButtonLink></div></div></div></section>
}

export function NumberedRows({ items }: { items: [string, string][] }) {
  return <div>{items.map(([title, copy], i) => <div className="usecase-row" key={title}><div className="row-number">{String(i+1).padStart(2,'0')}</div><div className="row-title">{title}</div><div className="row-copy">{copy}</div></div>)}</div>
}
