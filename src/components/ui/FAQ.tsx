import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'

export function FAQ({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0)
  return <div>
    {items.map(([q, a], index) => {
      const active = open === index
      return <div className="faq-item" key={q}>
        <button className="faq-trigger" onClick={() => setOpen(active ? null : index)} aria-expanded={active}>
          <span>{q}</span>
          <motion.span animate={{ rotate: active ? 45 : 0 }}><Plus size={22}/></motion.span>
        </button>
        <AnimatePresence initial={false}>
          {active && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .22 }}><div>{a}</div></motion.div>}
        </AnimatePresence>
      </div>
    })}
  </div>
}
