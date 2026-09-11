import React from "react";
import portrait from "../../Assets/anh_totnghiep.jpg";
export default function About() {
  return <main className="editorial-page"><div className="editorial-shell">
    <header className="about-composition"><div><p className="editorial-eyebrow">About</p><h1>Business Analysis with a technical foundation.</h1>
      <p>I’m Lê Tuấn Anh, a Management Information Systems student at Ho Chi Minh City Open University, interested in Business Analysis and software product development.</p>
      <p>Through academic projects, I have practiced turning system needs into structured requirements, process flows, business rules, user stories, acceptance criteria, and validation scenarios. My development background also helps me communicate requirements with a better understanding of APIs, databases, and implementation constraints.</p></div>
      <img src={portrait} alt="Lê Tuấn Anh" className="about-portrait" width="853" height="1280" /></header>
    <section className="editorial-section"><h2>How I approach analysis</h2><div className="analysis-columns">{[
      ["Understand", "Clarify the problem, users, context, scope, and expected outcome."],
      ["Structure", "Translate findings into processes, requirements, rules, and acceptance criteria."],
      ["Validate", "Trace requirements to system behavior and check whether the implemented solution meets expectations."]
    ].map(([title,body],i)=><div key={title}><p className="editorial-eyebrow">0{i+1}</p><h3>{title}</h3><p>{body}</p></div>)}</div></section>
    <section className="editorial-section about-foundation">
      <h2>Foundation</h2>
      <div className="about-foundation-groups">
        <div className="about-foundation-primary">
          <h3><span>01 /</span> Business Analysis</h3>
          <ul>
            <li>Requirements Analysis</li>
            <li>Process Modeling</li>
            <li>Traceability</li>
            <li>Validation</li>
          </ul>
        </div>
        <div>
          <h3><span>02 /</span> Technical Foundation</h3>
          <ul>
            <li>SQL</li>
            <li>SQL Server</li>
            <li>REST API</li>
            <li>JSON</li>
            <li>Git / GitHub</li>
          </ul>
        </div>
        <div className="about-foundation-exposure">
          <h3><span>03 /</span> Programming Exposure</h3>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>React</li>
            <li>C#</li>
            <li>C++</li>
          </ul>
        </div>
      </div>
    </section>
  </div></main>;
}
