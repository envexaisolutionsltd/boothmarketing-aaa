"use client";

import { FormEvent, useEffect, useState } from "react";

const processSteps = [
  ["01", "Understand", "Learn how the business actually operates before proposing technology."],
  ["02", "Map", "Document the workflow, handoffs, repeated tasks and bottlenecks."],
  ["03", "Prioritise", "Separate genuine automation opportunities from work that should stay human."],
  ["04", "Build", "Create a cleaner system around the business and its existing operation."],
  ["05", "Improve", "Review what is working and refine the workflow where it creates real value."],
];

const solutions = [
  ["01", "Capture every opportunity", "Lead capture, qualification and follow-up designed around how your team already sells.", "Enquiry", "Qualified", "Owner"],
  ["02", "Remove repetitive admin", "Reduce routine routing, re-entry, notifications and handoffs that consume the team’s time.", "Task", "System", "Done"],
  ["03", "Connect disconnected systems", "Create a clearer flow of information between the places your business already works.", "Input", "Workflow", "Record"],
  ["04", "Improve customer response", "Make routine enquiries and follow-up easier to handle while keeping people involved where judgement matters.", "Request", "Context", "Human"],
];

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }
function Brand() { return <span className="brand-lockup"><span className="brand-symbol" aria-hidden="true"><i/><i/></span><span className="brand-type"><strong>BOOTH</strong><small>MARKETING</small></span></span>; }

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [diagnostic, setDiagnostic] = useState("Follow-up");

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-process-step]"));
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) setActiveStep(Number((visible.target as HTMLElement).dataset.processStep || 0));
    }, { rootMargin: "-30% 0px -45% 0px", threshold: [0.2,.5] });
    items.forEach(i => observer.observe(i));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }

  const diagnosticCopy: Record<string,string> = {
    "Follow-up":"Route new opportunities, trigger the right follow-up and surface the ones that need a person.",
    "Data entry":"Move structured information between steps without asking the team to repeatedly copy it.",
    "Scheduling":"Coordinate routine booking steps, confirmations and internal notifications around a clear process.",
    "Lead qualification":"Collect useful context, apply agreed criteria and hand qualified opportunities to the right owner.",
    "Reporting":"Bring recurring operational information into a clearer, repeatable reporting workflow.",
    "Customer enquiries":"Handle repeatable requests consistently and escalate conversations that need human judgement."
  };

  return <main id="top">
    <div className="page-grid" aria-hidden="true"/>
    <header className="site-header-wrap"><div className="site-header shell">
      <a className="brand" href="#top" aria-label="Booth Marketing home"><Brand/></a>
      <nav className="desktop-nav" aria-label="Primary"><a href="#solutions">Solutions</a><a href="#approach">Approach</a><a href="#work">Work</a><a href="#audit">Audit</a></nav>
      <a className="header-cta" href="#audit">Request an Audit <Arrow/></a>
    </div></header>

    <section className="hero shell">
      <div className="hero-copy-wrap"><p className="eyebrow"><span className="status-dot"/> AI AUTOMATION · SYSTEMS CONSULTANCY</p>
        <h1>Stop running your business through <span>manual work.</span></h1>
        <p className="hero-copy">Booth Marketing designs automation systems that connect the work already happening inside your business — so your team spends less time moving information and more time doing useful work.</p>
        <p className="hero-subcopy">AI is part of the system. It is not the product.</p>
        <a className="primary-cta" href="#audit">Request an Automation Audit <Arrow/></a>
        <div className="hero-trust"><span>No sales pressure</span><span>Practical recommendations</span><span>Business-first approach</span></div>
      </div>
      <div className="ops-canvas" aria-label="Illustrative operational workflow"><div className="ops-topline"><span>LIVE OPERATION MAP</span><span className="live-pill"><i/> FLOW ACTIVE</span></div>
        <div className="ops-stage"><div className="connector connector-a"><b/></div><div className="connector connector-b"><b/></div><div className="connector connector-c"><b/></div>
          <div className="ops-node node-1"><small>01</small><strong>Lead arrives</strong><span>Website · Referral · Inbox</span></div><div className="ops-node node-2"><small>02</small><strong>Qualified</strong><span>Rules · Context · Routing</span></div><div className="ops-node node-3"><small>03</small><strong>Record updated</strong><span>Owner · Status · Context</span></div><div className="ops-node node-4"><small>04</small><strong>Human handoff</strong><span>Right person · Right moment</span></div>
        </div><div className="ops-footer"><span><i/> Less re-entry</span><span><i/> Clear ownership</span><span><i/> Better handoffs</span></div>
      </div>
    </section>

    <section className="editorial-break section-line"><div className="shell"><p>MANUAL WORK DOESN’T SCALE.</p><h2>If a process repeats, follows a pattern and moves information between people or systems, it is worth reviewing.</h2></div></section>

    <section className="section shell section-line" id="solutions"><div className="section-heading"><p className="eyebrow">PROBLEM-LED SOLUTIONS</p><h2>Start with the friction. Not the technology.</h2><p>We look at what is slowing the operation down, then decide whether automation actually belongs there.</p></div>
      <div className="solution-grid">{solutions.map(([n,title,copy,a,b,c]) => <article className="solution-card" key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p><div className="solution-flow"><i>{a}</i><b>→</b><i>{b}</i><b>→</b><i>{c}</i></div></article>)}</div>
    </section>

    <section className="workflow-showcase section-line" id="approach"><div className="shell"><div className="section-heading"><p className="eyebrow">SEE WHERE WORK GETS STUCK</p><h2>A better workflow makes the next action obvious.</h2></div>
      <div className="before-after"><article><span>BEFORE</span><div className="flow-stack bad"><i>Enquiry</i><i>Copy details</i><i>Manual update</i><i>Missed follow-up</i><i>Unclear owner</i></div></article><div className="transform-mark">→</div><article><span>AFTER</span><div className="flow-stack good"><i>Enquiry</i><i>Qualification</i><i>Record updated</i><i>Follow-up</i><i>Human decision</i></div></article></div>
    </div></section>

    <section className="thinking-section section-line"><div className="shell thinking-layout"><div className="thinking-sticky"><p className="eyebrow">HOW WE WORK</p><h2>Understand first. Automate second.</h2><p>The goal is not more software. It is a cleaner way for work to move.</p><div className="process-progress"><span style={{width:`${((activeStep+1)/processSteps.length)*100}%`}}/></div><div className="process-count">0{activeStep+1} <span>/ 0{processSteps.length}</span></div></div>
      <div className="process-list">{processSteps.map(([n,title,copy],i)=><article className={`process-step ${activeStep===i?"active":""}`} data-process-step={i} key={n}><span className="process-number">{n}</span><div><h3>{title}</h3><p>{copy}</p></div><div className="process-orbit"><i/></div></article>)}</div></div></section>

    <section className="section shell section-line outcomes"><div className="section-heading"><p className="eyebrow">BUSINESS OUTCOMES</p><h2>Less effort moving information. More clarity around what happens next.</h2></div><div className="outcome-grid"><article className="outcome-card outcome-large"><span>01</span><h3>Reduced manual work</h3><p>Remove repetitive admin where a clear process can handle it consistently.</p><div className="mini-flow"><i/><b/><i/><b/><i/></div></article><article className="outcome-card"><span>02</span><h3>Connected workflows</h3><p>Move information without unnecessary re-entry.</p></article><article className="outcome-card"><span>03</span><h3>Clear ownership</h3><p>Make responsibilities and next actions easier to understand.</p></article><article className="outcome-card outcome-wide"><span>04</span><h3>More useful human time</h3><p>Keep people focused on judgement, relationships and expertise — the work that should stay human.</p></article></div></section>

    <section className="project-section section-line" id="work"><div className="shell"><div className="section-heading"><p className="eyebrow">SYSTEM PROOF</p><h2>Show the system, not a wall of logos.</h2><p>Examples of the kinds of operational workflows Booth Marketing can design around a business.</p></div><div className="project-grid"><article className="project-feature"><span>LEAD OPERATIONS</span><h3>From raw opportunity to a cleaner working list.</h3><div className="project-diagram"><i>Source</i><b>→</b><i>Collect</i><b>→</b><i>Clean</i><b>→</b><i>Route</i></div><p>Useful for workflows where opportunities need collecting, structuring, de-duplicating and moving into a usable process.</p></article><article><span>ENQUIRY FLOW</span><h3>Capture → context → owner</h3><p>Reduce the gap between an inbound request and the person responsible for the next action.</p></article><article><span>FOLLOW-UP FLOW</span><h3>Trigger → check → handoff</h3><p>Make routine follow-up consistent without removing the human decision from important conversations.</p></article></div></div></section>

    <section className="guardrails section-line"><div className="shell guardrails-grid"><div><p className="eyebrow">WHAT WE WON’T AUTOMATE</p><h2>Not everything should be automated.</h2></div><div><p>High-stakes judgement</p><p>Sensitive conversations</p><p>Relationship-led decisions</p><p>Simple processes with no meaningful return</p><p>Workflows without enough volume to justify complexity</p></div></div></section>

    <section className="diagnostic section-line"><div className="shell diagnostic-layout"><div><p className="eyebrow">QUICK DIAGNOSTIC</p><h2>Where does your team lose time?</h2><div className="diagnostic-tabs">{Object.keys(diagnosticCopy).map(item=><button className={diagnostic===item?"active":""} onClick={()=>setDiagnostic(item)} key={item}>{item}</button>)}</div></div><div className="diagnostic-result"><span>POSSIBLE OPPORTUNITY</span><p>{diagnosticCopy[diagnostic]}</p><a href="#audit">Review this in an audit <Arrow/></a></div></div></section>

    <section id="audit" className="audit-section section-line"><div className="shell audit-shell"><div className="audit-copy"><p className="eyebrow">FREE AUTOMATION AUDIT</p><h2>Find out what is actually worth automating.</h2><p>We review how work moves through your business, where repeated effort is being spent and where a better system could remove friction.</p><div className="audit-list"><span>Workflow review</span><span>Bottleneck analysis</span><span>Automation opportunities</span><span>Priority recommendations</span></div><p className="reassurance">Useful insight even if no further work happens.</p></div>
      <form className="audit-form" onSubmit={handleSubmit}>{submitted?<div className="form-success" role="status"><span>REQUEST PREPARED</span><h3>Thanks — your request is ready.</h3><p>This page is currently frontend-only. Connect the form to your approved inbox or form endpoint before using it for live lead capture.</p><button type="button" onClick={()=>setSubmitted(false)}>Send another request</button></div>:<><div className="form-head"><span>REQUEST AN AUDIT</span><small>~ 2 minutes</small></div><div className="form-row"><label>Name<input required name="name" placeholder="Your name"/></label><label>Business<input required name="business" placeholder="Business name"/></label></div><label>Work email<input required type="email" name="email" placeholder="you@business.com"/></label><label>What feels manual or inefficient?<textarea required name="friction" rows={5} placeholder="Tell us where the operational friction is."/></label><button className="primary-cta form-button" type="submit">Request an Automation Audit <Arrow/></button><p className="form-note">No sales pressure. No obligation.</p></>}</form></div></section>

    <section className="section shell section-line next-steps"><div className="section-heading"><p className="eyebrow">WHAT HAPPENS NEXT</p><h2>A straightforward review. You decide what happens after.</h2></div><div className="timeline">{[["01","Intro call","A focused conversation about the business."],["02","Workflow review","We map the handoffs and bottlenecks."],["03","Opportunities","We separate useful automation from noise."],["04","Recommendations","You get a practical priority view."],["05","You decide","Use the recommendations however you choose."]].map(([n,t,c])=><article className="timeline-step" key={n}><span>{n}</span><i/><h3>{t}</h3><p>{c}</p></article>)}</div></section>

    <section className="final-cta section-line"><div className="final-glow"/><div className="shell final-inner"><p className="eyebrow">FREE AUTOMATION AUDIT</p><h2>Find out where your business is losing time.</h2><p>One clear review. Practical recommendations. No sales pressure.</p><a className="primary-cta" href="#audit">Request an Automation Audit <Arrow/></a></div></section>
    <footer className="footer shell"><a className="brand" href="#top"><Brand/></a><p>Systems first. Automation where it makes sense.</p></footer>
  </main>;
}
