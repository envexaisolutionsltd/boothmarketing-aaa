"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const trainingArc = [
  ["01", "Scout", "Map how your gym handles enquiries, trials, follow-up and front-desk admin."],
  ["02", "Analyse", "Find where leads wait, staff repeat work or opportunities quietly disappear."],
  ["03", "Train", "Design the highest-value automation around the way your gym actually operates."],
  ["04", "Deploy", "Launch the workflow with clear ownership and human handoffs."],
  ["05", "Ascend", "Refine the system as your member journey gets stronger."],
];

const attacks = [
  ["01", "Hyperbolic Lead Chamber", "Build a cleaner flow of gym enquiries and qualify them before your team spends time chasing.", "Attention", "Enquiry", "Qualified"],
  ["02", "Energy Blast Campaigns", "Turn local attention into structured enquiries instead of sending traffic into a dead end.", "Audience", "Offer", "Lead"],
  ["03", "Transformation Funnel", "Move prospects from first interest to booked trial with one clear next action.", "Visitor", "Trial", "Staff"],
  ["04", "Gravity Retention System", "Keep trials and member follow-up consistent without relying on someone remembering every step.", "Trial", "Follow-up", "Member"],
];

const scannerCopy: Record<string,string> = {
  "Missed enquiries":"Capture the enquiry immediately, collect the right context and make the next action visible before the prospect goes cold.",
  "Trial follow-up":"Give every trial a defined follow-up sequence while keeping the actual close personal.",
  "Lead generation":"Build a more consistent route from local attention to a qualified gym enquiry.",
  "Front-desk admin":"Remove repetitive routing, copying and notifications from routine operational work.",
  "Member retention":"Create consistent touchpoints around moments where members are most likely to disengage.",
  "Reporting":"Turn recurring lead and operational information into a clearer owner-level view."
};

function Arrow(){return <span className="arrow" aria-hidden="true">↗</span>}
function Brand(){return <span className="brand-lockup"><Image src="/chatgpt_image_jan_27,_2026,_04_29_01_am.png" alt="Booth Marketing" width={360} height={110} priority className="brand-logo"/></span>}

export default function Home(){
  const [menu,setMenu]=useState(false);
  const [submitted,setSubmitted]=useState(false);
  const [sending,setSending]=useState(false);
  const [error,setError]=useState("");
  const [activeStep,setActiveStep]=useState(0);
  const [scanner,setScanner]=useState("Missed enquiries");

  useEffect(()=>{
    const items=Array.from(document.querySelectorAll<HTMLElement>("[data-process-step]"));
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible)setActiveStep(Number((visible.target as HTMLElement).dataset.processStep||0));
    },{rootMargin:"-30% 0px -45% 0px",threshold:[.2,.5]});
    items.forEach(i=>observer.observe(i));
    return()=>observer.disconnect();
  },[]);

  async function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();setSending(true);setError("");
    const form=new FormData(e.currentTarget);
    const payload={name:String(form.get("name")||""),business:String(form.get("business")||""),email:String(form.get("email")||""),friction:String(form.get("friction")||"")};
    try{const r=await fetch("/api/audit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});if(!r.ok)throw new Error();setSubmitted(true)}catch{setError("Something went wrong. Please try again.")}finally{setSending(false)}
  }

  const close=()=>setMenu(false);
  return <main id="top" className="gym-site anime-site">
    <div className="page-grid" aria-hidden="true"/><div className="energy-orb energy-one" aria-hidden="true"/><div className="energy-orb energy-two" aria-hidden="true"/>

    <header className="site-header-wrap"><div className="site-header shell"><a className="brand" href="#top" aria-label="Booth Marketing home"><Brand/></a><nav className="desktop-nav" aria-label="Primary"><a href="#attacks">Growth Systems</a><a href="#transformation">Transformations</a><a href="#method">Method</a><a href="#audit">Gym Audit</a></nav><a className="header-cta" href="#audit">Power Up My Gym <Arrow/></a><button className="menu-button" type="button" aria-label="Open menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}><span/><span/></button></div>{menu&&<nav className="mobile-nav shell" aria-label="Mobile"><a onClick={close} href="#attacks">Growth Systems</a><a onClick={close} href="#transformation">Transformations</a><a onClick={close} href="#method">Method</a><a onClick={close} href="#audit">Power Up My Gym <Arrow/></a></nav>}</header>

    <section className="anime-hero cinematic-hero">
      <div className="cinematic-hero-media" aria-hidden="true">
        <div className="cinematic-hero-overlay" />
        <div className="cinematic-hero-vignette" />
        <div className="hero-speed-overlay" />
        <span className="energy-lightning lightning-one"/><span className="energy-lightning lightning-two"/><span className="energy-lightning lightning-three"/>
      </div>
      <div className="shell cinematic-hero-content">
        <div className="hero-copy-wrap">
          <p className="eyebrow"><span className="status-dot"/> GYM GROWTH SYSTEMS // POWER LEVEL 01</p>
          <h1>Take your gym to its <span>final form.</span></h1>
          <p className="hero-copy">Booth Marketing builds member acquisition and automation systems for independent gyms — helping you capture more enquiries, book more trials and follow up without relying on staff memory.</p>
          <p className="hero-subcopy">Your coaches train members. We train the system behind the gym.</p>
          <a className="primary-cta" href="#audit">Unlock My Gym&apos;s Final Form <Arrow/></a>
          <div className="hero-trust"><span>Gym-focused</span><span>Practical systems</span><span>No sales pressure</span></div>
        </div>
        <aside className="battle-hud" aria-label="Gym growth system status"><div className="battle-hud-top"><span>CURRENT POWER LEVEL</span><i>● LIVE</i></div><strong>ASCENDING</strong><div className="battle-power-bar"><i/></div><small>ENQUIRIES → TRIALS → MEMBERS</small></aside>
      </div>
    </section>

    <section className="proof-strip section-line"><div className="shell"><span>More enquiries</span><span>Better follow-up</span><span>Less front-desk admin</span></div></section>
    <section className="editorial-break section-line"><div className="shell"><p>EVERY GYM HAS ANOTHER LEVEL.</p><h2>Most gyms do not need more software. They need a stronger system for turning attention into members.</h2></div></section>
    <section className="section shell section-line" id="attacks"><div className="section-heading"><p className="eyebrow">GYM GROWTH ARSENAL // SPECIAL ATTACKS</p><h2>Four systems. One mission: stronger gym growth.</h2><p>Anime names on the outside. Serious commercial systems underneath.</p></div><div className="solution-grid">{attacks.map(([n,title,copy,a,b,c])=><article className="solution-card attack-card" key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p><div className="solution-flow"><i>{a}</i><b>→</b><i>{b}</i><b>→</b><i>{c}</i></div><div className="attack-burst" aria-hidden="true"/></article>)}</div></section>
    <section className="workflow-showcase section-line" id="transformation"><div className="shell"><div className="section-heading"><p className="eyebrow">POWER LEVEL TRANSFORMATION</p><h2>Turn a fragile member journey into a trained growth system.</h2></div><div className="before-after power-compare"><article><span>BEFORE // POWER LEVEL: UNTRAINED</span><div className="power-meter low"><b/><b/><i/><i/><i/><i/><i/><i/></div><div className="flow-stack bad"><i>Instagram enquiry</i><i>Staff notices later</i><i>Details copied manually</i><i>Trial happens</i><i>Follow-up forgotten</i></div></article><div className="transform-mark">→</div><article><span>AFTER // POWER LEVEL: ASCENDED</span><div className="power-meter high"><b/><b/><b/><b/><b/><b/><b/><b/></div><div className="flow-stack good"><i>Enquiry captured</i><i>Prospect qualified</i><i>Trial booked</i><i>Follow-up triggered</i><i>Staff closes personally</i></div></article></div></div></section>
    <section className="project-section section-line"><div className="shell"><div className="section-heading"><p className="eyebrow">GYM TRANSFORMATIONS</p><h2>Show the battle before you show the victory.</h2><p>Use this section for real case studies as they come in. No fake power levels, no invented results.</p></div><div className="project-grid transformation-grid"><article className="project-feature"><span>THE ENEMY</span><h3>Slow enquiry follow-up.</h3><div className="project-diagram"><i>Lead</i><b>→</b><i>Wait</i><b>→</b><i>Forgotten</i></div><p>Problem: a prospect asks about the gym, but the next action depends on somebody remembering.</p></article><article><span>THE TRAINING ARC</span><h3>Capture → route → follow-up</h3><p>Build a clear system around the prospect instead of adding another dashboard for staff to check.</p></article><article><span>THE TRANSFORMATION</span><h3>Defined next actions</h3><p>Once you have measured results, this becomes the place to show them honestly.</p></article></div></div></section>
    <section className="thinking-section section-line" id="method"><div className="shell thinking-layout"><div className="thinking-sticky"><p className="eyebrow">THE TRAINING ARC</p><h2>Great systems are trained.</h2><p>Your coaches, staff and community are the gym. Automation should support them, not get between them and the member.</p><div className="process-progress"><span style={{width:`${((activeStep+1)/trainingArc.length)*100}%`}}/></div><div className="process-count">0{activeStep+1} <span>/ 0{trainingArc.length}</span></div></div><div className="process-list">{trainingArc.map(([n,title,copy],i)=><article className={`process-step ${activeStep===i?"active":""}`} data-process-step={i} key={n}><span className="process-number">ARC {n}</span><div><h3>{title}</h3><p>{copy}</p></div><div className="process-orbit"><i/></div></article>)}</div></div></section>
    <section className="guardrails section-line"><div className="shell guardrails-grid"><div><p className="eyebrow">KNOW WHEN NOT TO FIGHT</p><h2>Automate the admin. Not the culture.</h2></div><div><p>Coaching stays human.</p><p>Member relationships stay human.</p><p>Important sales conversations stay human.</p><p>Repetitive admin does not need to.</p></div></div></section>
    <section className="diagnostic section-line"><div className="shell diagnostic-layout"><div><p className="eyebrow">POWER SCANNER</p><h2>What is draining your gym&apos;s power?</h2><div className="diagnostic-tabs">{Object.keys(scannerCopy).map(item=><button type="button" className={scanner===item?"active":""} onClick={()=>setScanner(item)} key={item}>{item}</button>)}</div></div><div className="diagnostic-result scanner-result"><span>WEAK POINT DETECTED</span><p>{scannerCopy[scanner]}</p><a href="#audit">Scan My Full Gym <Arrow/></a></div></div></section>
    <section id="audit" className="audit-section section-line"><div className="shell audit-shell"><div className="audit-copy"><p className="eyebrow">MISSION // FREE GYM GROWTH AUDIT</p><h2>Discover your next power-up.</h2><p>We review how your gym currently handles enquiries, trials, follow-up and repetitive admin — then show you where stronger systems could improve the operation.</p><div className="audit-list"><span>Lead journey review</span><span>Trial conversion gaps</span><span>Follow-up opportunities</span><span>Admin automation</span></div><p className="reassurance">Useful insight even if we never work together.</p></div><form className="audit-form mission-panel" onSubmit={handleSubmit}>{submitted?<div className="form-success" role="status"><span>MISSION RECEIVED</span><h3>Your growth arc starts here.</h3><p>We&apos;ll review the gym context you shared and get in touch about the next step.</p></div>:<><div className="form-head"><span>MISSION APPLICATION</span><small>~ 2 minutes</small></div><div className="form-row"><label>Gym owner name<input required name="name" autoComplete="name" placeholder="Your name"/></label><label>Gym name<input required name="business" autoComplete="organization" placeholder="Gym name"/></label></div><label>Work email<input required type="email" name="email" autoComplete="email" placeholder="you@gym.com"/></label><label>Where are you losing the most leads or time?<textarea required name="friction" rows={5} placeholder="Trial follow-up, missed enquiries, admin, retention..."/></label><button className="primary-cta form-button" type="submit" disabled={sending}>{sending?"Sending…":"Begin My Growth Arc"} {!sending&&<Arrow/>}</button>{error&&<p className="form-error" role="alert">{error}</p>}<p className="form-note">Free gym automation audit. No obligation.</p></>}</form></div></section>
    <section className="section shell section-line next-steps"><div className="section-heading"><p className="eyebrow">YOUR GROWTH ARC</p><h2>Five stages. One stronger operating system.</h2></div><div className="timeline">{[["01","Scout","Short intro call."],["02","Analyse","Review the member journey."],["03","Identify","Find the leaks."],["04","Battle Plan","Prioritise the systems."],["05","Ascend","You decide what happens next."]].map(([n,t,c])=><article className="timeline-step" key={n}><span>{n}</span><i/><h3>{t}</h3><p>{c}</p></article>)}</div></section>
    <section className="final-cta section-line"><div className="final-glow"/><div className="final-energy" aria-hidden="true"/><div className="shell final-inner"><p className="eyebrow">YOUR NEXT ARC STARTS HERE</p><h2>Your gym has not reached its <span>final form</span> yet.</h2><p>Find the leaks costing you time and member opportunities.</p><a className="primary-cta" href="#audit">Unlock My Gym&apos;s Final Form <Arrow/></a></div></section>
    <footer className="footer shell"><a className="brand" href="#top" aria-label="Booth Marketing home"><Brand/></a><p>Gym growth systems. Anime energy. Serious operations.</p></footer>
  </main>
}
