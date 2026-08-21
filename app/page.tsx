"use client";

export default function Home() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <main style={{ margin: 0, background: "#020305", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        *{box-sizing:border-box} html{scroll-behavior:smooth;background:#020305} body{margin:0;background:#020305}
        .visual-page{position:relative;width:100%;max-width:1600px;margin:0 auto;background:#020305}
        .visual-page img{display:block;width:100%;height:auto;user-select:none;-webkit-user-drag:none}
        .hotspot{position:absolute;z-index:5;border:0;background:transparent;cursor:pointer;color:transparent;font-size:0}
        .hotspot:focus-visible{outline:3px solid #00e5ff;outline-offset:3px}
        .top-cta{top:1.3%;right:2.2%;width:18%;height:3.3%}
        .hero-cta{top:26.4%;left:2.2%;width:20.5%;height:2.9%}
        .how-cta{top:26.4%;left:23.8%;width:17%;height:2.9%}
        .audit-cta{top:75.9%;left:2.8%;width:22%;height:2.6%}
        .results-cta{top:75.9%;left:63%;width:17%;height:2.6%}
        .anchor{position:absolute;left:0;width:1px;height:1px;pointer-events:none}
        #systems{top:45%} #results{top:63%} #process{top:88%} #audit{top:70%}
        @media(max-width:700px){
          .visual-page{width:100%;overflow:hidden}
          .visual-page img{width:170%;max-width:none;transform:translateX(-1.5%);transform-origin:top left}
          .top-cta{top:.9%;right:2%;width:32%;height:2.2%}
          .hero-cta{top:17.9%;left:3%;width:35%;height:2%}
          .how-cta{top:17.9%;left:40%;width:30%;height:2%}
          .audit-cta{top:51.5%;left:4%;width:38%;height:2%}
          .results-cta{top:51.5%;left:62%;width:28%;height:2%}
        }
      `}</style>
      <div className="visual-page">
        <img src="/booth-visual-reference.webp" alt="Booth Marketing gym growth systems — attract, convert and grow with websites, automation, CRM and follow-up systems." />
        <button className="hotspot top-cta" onClick={() => go("audit")} aria-label="Get more members">Get more members</button>
        <button className="hotspot hero-cta" onClick={() => go("audit")} aria-label="Get more members">Get more members</button>
        <button className="hotspot how-cta" onClick={() => go("systems")} aria-label="See how it works">See how it works</button>
        <button className="hotspot audit-cta" onClick={() => go("audit")} aria-label="Get my free gym growth audit">Get my free gym growth audit</button>
        <button className="hotspot results-cta" onClick={() => go("results")} aria-label="See more results">See more results</button>
        <span id="systems" className="anchor" />
        <span id="results" className="anchor" />
        <span id="audit" className="anchor" />
        <span id="process" className="anchor" />
      </div>
    </main>
  );
}
