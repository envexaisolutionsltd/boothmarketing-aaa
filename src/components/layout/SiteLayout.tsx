import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const links = [
  ['/what-we-automate', 'What We Automate'],
  ['/how-it-works', 'How It Works'],
  ['/who-we-help', 'Who We Help'],
  ['/about', 'About'],
]

export function SiteLayout() {
  const [menu, setMenu] = useState(false)
  const location = useLocation()

  return <>
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0b]/90 backdrop-blur-xl">
      <div className="flex min-h-[76px] w-full items-center justify-between gap-7 px-5 md:px-8 lg:px-10">
        <Link to="/" className="font-serif text-[21px] font-bold tracking-[-0.03em] text-[#f5f1ea]">Booth Marketing</Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={({isActive}) => `text-sm font-semibold transition ${isActive ? 'text-[#f1b6aa]' : 'text-[#d8d4cf] hover:text-white'}`}>{label}</NavLink>)}
          <Link className="btn-primary !min-h-[44px]" to="/automation-audit">Request an Audit</Link>
        </nav>
        <button onClick={() => setMenu(true)} className="text-white lg:hidden" aria-label="Open menu"><Menu /></button>
      </div>
    </header>

    <AnimatePresence>
      {menu && <>
        <motion.button aria-label="Close menu overlay" className="fixed inset-0 z-40 bg-black/55" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setMenu(false)} />
        <motion.aside className="fixed right-0 top-0 z-50 flex h-full w-[75vw] max-w-[420px] flex-col border-l border-white/10 bg-[#111114] p-7 text-white" initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{duration:.25}}>
          <button className="ml-auto text-white" onClick={() => setMenu(false)} aria-label="Close menu"><X /></button>
          <div className="mt-12 flex flex-col gap-1">
            {links.map(([to, label]) => <Link key={to} onClick={() => setMenu(false)} to={to} className="border-b border-white/10 py-5 font-serif text-[1.8rem] leading-tight">{label}</Link>)}
            <Link onClick={() => setMenu(false)} to="/automation-audit" className="mt-8 rounded-full bg-[#f5f1ea] px-5 py-4 text-center font-bold text-[#111]">Request an Audit</Link>
          </div>
        </motion.aside>
      </>}
    </AnimatePresence>

    <motion.main key={location.pathname} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.2}}><Outlet/></motion.main>

    <footer className="border-t border-white/10 py-12">
      <div className="site-container grid gap-10 md:grid-cols-2">
        <div><div className="font-serif text-xl font-bold tracking-[-.03em]">Booth Marketing</div><p className="mt-3 max-w-sm text-[#aaa6a0]">B2B AI automation built around real operational problems.</p></div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">{links.map(([to,label]) => <Link key={to} to={to} className="text-sm font-semibold text-[#aaa6a0] transition hover:text-white">{label}</Link>)}</div>
        <div className="col-span-full flex flex-col gap-2 border-t border-white/10 pt-7 text-sm text-[#777] md:flex-row md:justify-between"><span>© 2026 Booth Marketing</span><span>Practical automation. Human judgment where it matters.</span></div>
      </div>
    </footer>
  </>
}
