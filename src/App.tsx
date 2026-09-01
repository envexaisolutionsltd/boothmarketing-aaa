import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import About from './pages/About'
import AutomationAudit from './pages/AutomationAudit'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import WhatWeAutomate from './pages/WhatWeAutomate'
import WhoWeHelp from './pages/WhoWeHelp'

export default function App() {
  return <Routes>
    <Route element={<SiteLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/what-we-automate" element={<WhatWeAutomate />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/who-we-help" element={<WhoWeHelp />} />
      <Route path="/automation-audit" element={<AutomationAudit />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
}
