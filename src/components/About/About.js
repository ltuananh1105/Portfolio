import React from "react";
import illustration from "../../Assets/about.png";
export default function About() {
  return <main className="editorial-page"><div className="editorial-shell">
    <header className="about-composition"><div><p className="editorial-eyebrow">About</p><h1>Business Analysis with a technical foundation.</h1>
      <p>I’m Lê Tuấn Anh, a Management Information Systems student at Ho Chi Minh City Open University, interested in Business Analysis and software product development.</p>
      <p>Through academic projects, I have practiced turning system needs into structured requirements, process flows, business rules, user stories, acceptance criteria, and validation scenarios. My development background also helps me communicate requirements with a better understanding of APIs, databases, and implementation constraints.</p></div>
      <img src={illustration} alt="" className="about-illustration" /></header>
    <section className="editorial-section"><h2>How I approach analysis</h2><div className="analysis-columns">{[
      ["Understand", "Clarify the problem, users, context, scope, and expected outcome."],
      ["Structure", "Translate findings into processes, requirements, rules, and acceptance criteria."],
      ["Validate", "Trace requirements to system behavior and check whether the implemented solution meets expectations."]
    ].map(([title,body],i)=><div key={title}><p className="editorial-eyebrow">0{i+1}</p><h3>{title}</h3><p>{body}</p></div>)}</div></section>
    <section className="editorial-section"><h2>Foundation</h2><div className="foundation-columns"><div><h3>Business Analysis</h3><ul><li>Requirements Analysis</li><li>Process Modeling</li><li>Traceability</li><li>Validation</li></ul></div><div><h3>Technical</h3><ul><li>SQL / SQL Server</li><li>REST API</li><li>Draw.io</li><li>Git / GitHub</li></ul></div></div></section>
  </div></main>;
}
