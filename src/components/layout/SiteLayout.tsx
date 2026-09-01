import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const links = [
  ['/who-we-help', 'Who We Help'],
  ['/how-it-works', 'How We Work'],
  ['/automation-audit', 'Automation Audit'],
  ['/about', 'About'],
]

export function SiteLayout() {
  const [menu, setMenu] = useState(false)
  const location = useLocation()

  return <>
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand-logo" aria-label="Booth Marketing home">
          <img src="/booth-marketing-logo.png" alt="Booth Marketing" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
          <Link className="nav-cta" to="/automation-audit">Request an Audit</Link>
        </nav>
        <button onClick={() => setMenu(true)} className="mobile-trigger" aria-label="Open menu"><Menu /></button>
      </div>
    </header>

    <AnimatePresence>
      {menu && <>
        <motion.button className="mobile-overlay" aria-label="Close menu overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenu(false)} />
        <motion.aside className="mobile-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: .25 }}>
          <button className="mobile-close" onClick={() => setMenu(false)} aria-label="Close menu"><X /></button>
          <nav className="mobile-links" aria-label="Mobile navigation">
            {links.map(([to, label]) => <Link key={to} to={to} onClick={() => setMenu(false)}>{label}</Link>)}
            <Link className="mobile-cta" to="/automation-audit" onClick={() => setMenu(false)}>Request an Audit</Link>
          </nav>
        </motion.aside>
      </>}
    </AnimatePresence>

    <motion.main key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .18 }}><Outlet /></motion.main>

    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/booth-marketing-logo.png" alt="Booth Marketing" />
            <p>Automation systems built around real businesses.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {links.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
          </nav>
        </div>
        <div className="footer-bottom">© 2026 Booth Marketing</div>
      </div>
    </footer>
  </>
}
