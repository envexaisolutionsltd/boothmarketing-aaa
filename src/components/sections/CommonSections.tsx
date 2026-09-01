import { motion } from 'framer-motion'
import { ButtonLink } from '../ui/ButtonLink'

export function PageHero({ eyebrow, title, copy, secondary }: { eyebrow: string; title: string; copy: string; secondary?: { label: string; to: string } }) {
  return <section className="page-hero">
    <div className="site-container">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{copy}</p>
        <div className="page-hero-actions"><ButtonLink to="/automation-audit">Request an Automation Audit</ButtonLink>{secondary && <ButtonLink to={secondary.to} secondary>{secondary.label}</ButtonLink>}</div>
      </motion.div>
    </div>
  </section>
}

export function CTA() {
  return <section className="supporting-cta">
    <div className="site-container">
      <div className="eyebrow">Free automation audit</div>
      <h2>Find out what is actually worth improving.</h2>
      <p>Bring one real workflow. We will look at where unnecessary handling exists, what could change, and what should stay human.</p>
      <ButtonLink to="/automation-audit">Explore the Automation Audit</ButtonLink>
    </div>
  </section>
}

export function NumberedRows({ items }: { items: [string, string][] }) {
  return <div className="numbered-list">{items.map(([title, copy], index) => <div className="numbered-row" key={title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{title.replace(/^\d+\.\s*/, '')}</h3><p>{copy}</p></div>)}</div>
}
