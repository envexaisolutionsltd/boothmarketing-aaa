"use client";

import Image from "next/image";
import { useState } from "react";

const funnel = [
  ["87", "Website visitors"], ["24", "Enquiries"], ["11", "Followed up"],
  ["6", "Trials booked"], ["3", "Showed up"], ["2", "New members"],
];
const services = [
  ["⌁", "High-converting websites", "Designed to turn visitors into booked trials."],
  ["⚡", "Automated follow-up", "Instant replies, smart follow-up and fewer no-shows."],
  ["◉", "AI & automation", "Assistants that handle repetitive conversations and booking."],
  ["⚙", "CRM & pipelines", "Organised, automated and clear from lead to member."],
  ["↗", "Reporting that matters", "See what is working and where leads are leaking."],
  ["◎", "Ongoing optimisation", "Test, refine and improve the growth system."],
];
const process = [
  ["01", "Audit", "We find the leaks and opportunities."],
  ["02", "Build", "We build your website and automations."],
  ["03", "Launch", "We launch and connect the system."],
  ["04", "Optimise", "We improve leads and conversions."],
  ["05", "Scale", "We scale what works."],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  return <main className="bm2" id="top">
    <header className="bm2-nav">
      <a className="bm2-logo" href="#top"><span>BOOTH</span><b>MARKETING</b></a>
      <nav><a href="#system">SYSTEM</a><a href="#results">RESULTS</a><a href="#work">WORK</a><a href="#about">ABOUT</a></nav>
      <a className="bm2-btn orange" href="#audit">GET MORE MEMBERS <i>→</i></a>
      <button className="bm2-menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">☰</button>
      {menu && <div className="bm2-mobile"><a href="#system">SYSTEM</a><a href="#results">RESULTS</a><a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#audit">GET MORE MEMBERS</a></div>}
    </header>

    <section className="bm2-hero">
      <div className="bm2-hero-art" aria-hidden="true"><Image src="/booth-approved-reference.webp" alt="" fill priority sizes="(max-width: 800px) 100vw, 62vw" /></div>
      <div className="bm2-hero-copy">
        <p className="bm2-kicker">GROWTH SYSTEMS FOR GYMS <span>━━━━╾»</span></p>
        <h1>YOUR GYM DOESN&apos;T<br/>NEED MORE FOLLOWERS.<br/><em>IT NEEDS MORE</em><br/><strong>MEMBERS.</strong></h1>
        <p>We build high-converting websites and automated follow-up systems that turn local attention into <b>booked trials</b> and <b>paying members.</b></p>
        <div className="bm2-actions"><a className="bm2-btn orange" href="#audit">GET MORE MEMBERS <i>→</i></a><a className="bm2-btn blue" href="#system">SEE HOW IT WORKS</a></div>
        <div className="bm2-trust"><span>★★★★★</span> Built for independent gyms that want a stronger member journey.</div>
      </div>
      <div className="bm2-sidecards">
        <article className="orange-card"><h3>ATTRACT</h3><p>High-Converting Websites</p><p>Local SEO</p><p>Ads & Offers</p><p>Landing Pages</p><p>Content Systems</p></article>
        <article className="blue-card"><h3>CONVERT</h3><p>Instant Follow-Up</p><p>AI Assistants</p><p>CRM Automation</p><p>Lead Nurturing</p><p>Trial Booking</p></article>
      </div>
    </section>

    <section className="bm2-leaks" id="system">
      <div className="bm2-leak-title"><h2>YOUR GYM ISN&apos;T<br/>SHORT ON LEADS.<br/><em>IT&apos;S LEAKING THEM.</em></h2><p>Every leak is revenue walking out the door.</p></div>
      <div className="bm2-funnel">{funnel.map(([n,l],i)=><article key={l}><span>{i===5?"♕":"○"}</span><strong>{n}</strong><small>{l}</small>{i<5&&<b>›</b>}</article>)}</div>
      <div className="bm2-warning">⚠ THAT&apos;S POTENTIAL MEMBERS YOUR GYM COULD BE MISSING.</div>
    </section>

    <section className="bm2-system" id="work">
      <div className="bm2-system-side attract"><h2>ATTRACT</h2><p>Bring in high-intent leads.</p><ul><li>High-Converting Websites</li><li>Local SEO That Brings Traffic</li><li>Ads & Offers That Get Clicks</li><li>Landing Pages That Convert</li><li>Content That Builds Authority</li></ul></div>
      <div className="bm2-core"><p>THE BOOTH MARKETING</p><h2>GYM GROWTH SYSTEM</h2><div className="bm2-orbit"><span>BM</span></div><h3><em>ATTRACT.</em> <strong>CONVERT.</strong> GROW.</h3><p>A SYSTEM THAT DELIVERS MEMBERS, NOT EXCUSES.</p></div>
      <div className="bm2-system-side convert"><h2>CONVERT</h2><p>Turn leads into members.</p><ul><li>Instant Lead Response</li><li>AI Follow-Up Systems</li><li>CRM & Pipeline Automation</li><li>Trial Booking Automation</li><li>Nurture, Reminders, Re-Engage</li></ul></div>
    </section>

    <section className="bm2-commercial" id="results">
      <article className="bm2-calc"><p className="bm2-label">HOW MUCH REVENUE IS YOUR GYM LOSING?</p><h2>FIND THE LEAKS<br/>BEFORE YOU BUY MORE LEADS.</h2><div className="bm2-metrics"><span><b>40</b> leads / month</span><span><b>20%</b> close rate</span><span><b>£40</b> avg monthly value</span></div><p className="bm2-loss">A stronger follow-up system can recover opportunities your gym already paid to create.</p><a className="bm2-btn orange" href="#audit">GET MY FREE GYM GROWTH AUDIT →</a></article>
      <article className="bm2-results"><p className="bm2-label">REAL SYSTEMS. REAL GYMS.</p><h2>RESULTS BELONG HERE.</h2><p>We won&apos;t invent case studies. As client results are verified, this section becomes the proof wall: booked trials, response rates, show-up rates and new members.</p><div className="bm2-result-cards"><span>TRIAL BOOKINGS<br/><b>TRACKED</b></span><span>FOLLOW-UP<br/><b>AUTOMATED</b></span><span>PIPELINE<br/><b>VISIBLE</b></span></div></article>
    </section>

    <section className="bm2-services">{services.map(([icon,title,copy])=><article key={title}><span>{icon}</span><h3>{title}</h3><p>{copy}</p></article>)}</section>

    <section className="bm2-process" id="about"><div className="bm2-process-intro"><p>OUR PROCESS</p><h2>THE TRANSFORMATION ARC</h2><span>A proven process that turns your gym into a member magnet.</span></div><div className="bm2-process-grid">{process.map(([n,t,c])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{c}</p></article>)}</div></section>

    <section className="bm2-audit" id="audit"><div><p>FREE GYM GROWTH AUDIT</p><h2>READY TO POWER UP<br/>YOUR GYM?</h2><span>We&apos;ll review your website, lead journey, trial follow-up and admin flow, then show you the clearest opportunities to improve.</span></div><form action="/api/audit" method="post"><input name="name" placeholder="YOUR NAME" required/><input name="business" placeholder="GYM NAME" required/><input name="email" type="email" placeholder="WORK EMAIL" required/><textarea name="friction" placeholder="WHERE ARE LEADS OR TIME LEAKING?" rows={4} required/><button className="bm2-btn orange" type="submit">GET MY FREE GYM GROWTH AUDIT →</button><small>No pressure. Useful insight even if we never work together.</small></form></section>

    <footer className="bm2-footer"><a className="bm2-logo" href="#top"><span>BOOTH</span><b>MARKETING</b></a><p>ATTRACT. CONVERT. GROW.</p></footer>
  </main>
}
