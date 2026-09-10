import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import { diagrams, screenshots, evidenceLinks } from "./learnupEvidence";
import "./LearnUpCaseStudy.css";
import LearnUpSwitcher from "./LearnUpSwitcher";

const chapters = ["Overview", "Process", "Requirements", "System Design", "Validation", "Reflection"];
const chapterId = (index) => `learnup-${index + 1}`;
const number = (index) => String(index + 1).padStart(2, "0");
const stats = [[3, "Core authenticated roles"], [9, "Use cases"], [8, "Functional requirements"], [6, "Non-functional requirements"], [7, "Business rules"], [10, "User stories"], [18, "Acceptance criteria"]];
const trace = [
  ["Objective", "OBJ-02", "Course Discovery & Learning"],
  ["Business requirement", "BRQ-02", "Discovery & Enrollment"],
  ["Functional requirement", "FR-02", "Student Enrollment"],
  ["Use case / User story", "UC-05 / US-05", "Enroll in Course"],
  ["Business rule", "BR-02", "Prevent Duplicate Enrollment"],
  ["Acceptance criteria", "AC-07 / AC-08 / AC-09", "Acceptance defined"],
  ["Test / UAT-style validation", "TC-02 / UAT-07 / UAT-08", "Behavior checked locally"],
  ["Validated behavior", "ENROLLMENT + DUPLICATE PREVENTION", "The requirement becomes observable behavior."],
];
const mappings = [
  ["FR-05", "Course Submission", "/api/courses/{id}/submit", "Validation + ownership", "Course state / data"],
  ["FR-06", "Admin Review", "Approve / reject behavior", "Admin authorization", "Course state"],
  ["FR-02", "Student Enrollment", "Enrollment / order behavior", "Duplicate enrollment rule", "Enrollment / order data"],
  ["FR-08", "AI Tutor", "/api/ai/chat/stream", "Gemini integration", "AI response"],
];

function EvidenceLink({ href, children }) {
  return href ? <a className="lu-button" href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true"> ↗</span></a>
    : <button className="lu-button" disabled>{children}</button>;
}
function Actions({ closing = false }) {
  return <div className="lu-actions">
    <EvidenceLink href={evidenceLinks.documentation}>{closing ? "Explore Full BA Documentation" : "View BA Documentation"}</EvidenceLink>
    <EvidenceLink href={evidenceLinks.source}>View Source Code</EvidenceLink>
    <Link className="lu-back" to="/project">← Back to Projects</Link>
  </div>;
}
function Section({ index, label, title, intro, children, className = "" }) {
  return <section id={chapterId(index)} className={`lu-section ${className}`} aria-labelledby={`lu-title-${index}`}>
    <header className="lu-section-heading"><span className="lu-section-number" aria-hidden="true">{number(index)}</span>
      <div><p className="lu-eyebrow">{number(index)} / {label || chapters[index]}</p><h2 id={`lu-title-${index}`}>{title}</h2>{intro && <p className="lu-intro">{intro}</p>}</div>
    </header>{children}
  </section>;
}
function Asset({ asset, onExpand, product = false, hero = false }) {
  return <figure className={`lu-asset ${product ? "lu-product-asset" : "lu-diagram"} ${hero ? "lu-cover-asset" : ""}`}>
    <div className="lu-asset-bar"><span>{asset.type || "Product evidence"}</span><span>{asset.src ? "Original asset" : "Awaiting asset"}</span></div>
    {asset.src ? <div className="lu-image-scroll" role="region" aria-label={`${asset.title} preview; scroll or expand`} tabIndex={0}><button className="lu-image-button" onClick={() => onExpand(asset)} aria-label={`Expand ${asset.title}`}>
      <img src={asset.src} alt={`${asset.title} — ${asset.type || "LearnUp application screenshot"}`} loading={hero ? "eager" : "lazy"} /><span className="lu-expand">Expand visual ↗</span>
    </button></div> : <div className="lu-placeholder"><span className="lu-placeholder-symbol" aria-hidden="true">{product ? "▧" : "◇"}</span><p className="lu-eyebrow">{product ? "Screenshot placeholder" : "Diagram placeholder"}</p><strong>{asset.title}</strong><p>{product ? "A real application capture belongs here." : "Original diagram awaiting a web-compatible export."}</p>{asset.file && <code>{asset.file}</code>}</div>}
    <figcaption>{asset.title}{asset.src && <span> · Original labels preserved · Click to expand</span>}</figcaption>
  </figure>;
}

function LearnUpCaseStudy() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const [zoom, setZoom] = useState(100);
  const pageRef = useRef(null);
  useEffect(() => {
    const sections = Array.from(pageRef.current.querySelectorAll("section[id]"));
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => { let current = 0; sections.forEach((section, index) => { if (section.getBoundingClientRect().top <= 210) current = index; }); setActive(current); });
    };
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(pageRef.current);
    window.addEventListener("scroll", update, { passive: true }); update();
    return () => { resizeObserver.disconnect(); window.removeEventListener("scroll", update); cancelAnimationFrame(frame); };
  }, []);
  const expand = (asset) => { setZoom(100); setExpanded(asset); };
  return <main className="learnup-case-study" ref={pageRef}>
    <Particle />
    <div className="lu-shell">
      <nav className="lu-nav" aria-label="LearnUp chapters"><span className="lu-nav-progress">{number(active)} <span>/ {chapters.length}</span></span>
        <div className="lu-nav-links">{chapters.map((chapter, index) => <a key={chapter} href={`#${chapterId(index)}`} aria-current={active === index ? "location" : undefined}><span>{number(index)}</span> {chapter}</a>)}</div>
        <label className="lu-mobile-nav">Chapter<select aria-label="Jump to chapter" value={active} onChange={(event) => { const index = Number(event.target.value); document.getElementById(chapterId(index)).scrollIntoView(); setActive(index); }}>{chapters.map((chapter, index) => <option key={chapter} value={index}>{number(index)} / {chapter}</option>)}</select></label>
      </nav>
      <section className="lu-hero" id={chapterId(0)} aria-labelledby="lu-hero-title">
        <p className="lu-eyebrow"><span className="lu-dot" />01 / Business Analysis Case Study</p>
        <div className="lu-hero-grid"><div>
          <h1 id="lu-hero-title">LEARN<span>UP</span><span className="lu-title-period">.</span></h1>
          <p className="lu-platform">AI-Powered English Learning Platform</p>
          <h2>From structured requirements<br />to <em>validated system behavior.</em></h2>
          <p className="lu-subtitle">Business Analysis &amp; System Analysis Case Study</p>
          <dl className="lu-meta"><div><dt>Project type</dt><dd>Academic Full-Stack Project</dd></div><div><dt>Role</dt><dd>BA Analysis + Development</dd></div></dl>
        </div><div className="lu-hero-visual"><Asset asset={screenshots[0]} product hero onExpand={expand} /><p className="lu-visual-note">THE PRODUCT / Course creation to learning</p></div></div>
        <Actions />
        <div className="lu-artifacts" aria-label="Documented artifact summary">{stats.map(([count, label]) => <div key={label}><strong>{count}</strong><span>{label}</span></div>)}</div>
        <p className="lu-footnote">Documentation artifacts, not business performance metrics. Guest is an unauthenticated actor.</p>
        <div className="lu-overview-context">
          <h3>One platform. Three core roles. One connected course lifecycle.</h3>
        <div className="lu-roles">{[["01", "Student", "Discover courses · Enroll · Learn · Complete quizzes · Track progress"], ["02", "Teacher", "Create courses · Manage chapters, lessons and quizzes · Submit for review · Revise rejected courses"], ["03", "Admin", "Review submitted courses · Approve / Reject · Manage platform data"]].map(([id, title, text]) => <article key={title}><span className="lu-role-index">{id}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="lu-guest"><strong>Guest</strong><span>Unauthenticated actor</span>Browse eligible public content · Register / Login</p>
        <div className="lu-context-grid"><div><p className="lu-eyebrow">The system need</p><p className="lu-statement">LearnUp needs to support the course lifecycle from content creation and administrative review to enrollment, learning, assessment, and progress tracking.</p></div><div className="lu-objectives">{["Course Management & Approval", "Course Discovery & Learning", "Learning Progress & Results", "Platform Administration"].map((text, index) => <div key={text}><code>OBJ-0{index + 1}</code><span>{text}</span></div>)}</div></div>
        <div className="lu-scope"><div><h3>In scope</h3><p>Authentication &amp; access · Course discovery · Course/content management · Submission &amp; administrative review · Enrollment · Simulated payment · Learning &amp; progress · Quiz &amp; results · AI-assisted learning · Platform administration</p></div><div><h3>Out of scope / Limitations</h3><p>Real payment gateway · Production deployment · Native mobile application · Long-term AI personalization · AI auto-grading official results</p></div></div>
        <p className="lu-boundary">BA documentation was formalized retrospectively from the completed academic system to create a structured analysis case study. No real stakeholder interviews or client UAT were conducted.</p>
        </div>
      </section>
      <Section index={1} label="Process Analysis" title={<>From course creation<br /><em>to student enrollment.</em></>} intro="Creation is only the beginning. Ownership, submission validation and administrative review govern publication.">
        <LearnUpSwitcher id="lu-process" label="Process artifacts" items={[
          { label: "Course Creation & Review", content: <Asset asset={diagrams.courseReview} onExpand={expand} /> },
          { label: "Student Enrollment", content: <><Asset asset={diagrams.enrollment} onExpand={expand} /><div className="lu-panel-note"><code>FR-02 · UC-05 · BR-02</code><p>Enrollment connects a published course to a learner. The academic implementation includes simulated payment and duplicate enrollment prevention.</p></div></> },
        ]} />
        <div className="lu-rules">{[["01 / Teacher ownership", "A teacher can manage only owned courses."], ["02 / Admin review", "Only Admin can approve or reject submitted courses."], ["03 / Submission validation", "A course must satisfy required conditions before submission."]].map(([title, text]) => <div key={title}><p className="lu-eyebrow">{title}</p><p>{text}</p></div>)}</div>
      </Section>
      <Section index={2} label="Requirements & Traceability" title={<>From business objective<br />to <em>validated system behavior.</em></>}>
        <div className="lu-requirement-counts">{stats.slice(2).map(([count, label]) => <p key={label}><strong>{count}</strong>{label}</p>)}</div>
        <p className="lu-intro">One concrete example: define enrollment, describe the user goal, prevent duplicates, and specify acceptance.</p>
        <div className="lu-signature">
          <div className="lu-trace-intro"><span className="lu-pill">Enrollment / End-to-end evidence</span><span className="lu-footnote">Why → What → Rule & expectation → Prove</span></div>
          <ol className="lu-trace-groups">{["Why", "What", "Rule & expectation", "Prove"].map((group, groupIndex) => <li className="lu-trace-group" key={group}>
            <h3><span>{number(groupIndex)}</span>{group}</h3>
            <ol>{trace.slice(groupIndex * 2, groupIndex * 2 + 2).map(([label, id, text], stepIndex) => <li key={id} className={groupIndex === 3 && stepIndex === 1 ? "lu-trace-result" : ""}>
              <span className="lu-trace-label">{label}</span><code>{id}</code><p>{text}</p>
            </li>)}</ol>
          </li>)}</ol>
          <div className="lu-trace-end"><p>One requirement, traced from business objective to validated system behavior.</p><EvidenceLink href={evidenceLinks.rtm}>View Full RTM</EvidenceLink></div>
        </div>
      </Section>
      <Section index={3} label="System Design" title={<>From requirements<br /><em>to system structure.</em></>}>
        <LearnUpSwitcher id="lu-system" label="System design artifacts" items={[
          { label: "Use Case", content: <Asset asset={diagrams.useCase} onExpand={expand} /> },
          { label: "ERD", content: <>
        <Asset asset={diagrams.erd} onExpand={expand} />
        <div className="lu-entities">{["Users", "Categories", "Courses", "Chapters", "Lessons", "Enrollments", "Orders", "Quizzes", "Questions", "Question Options", "Lesson Progress", "Quiz Results"].map((entity) => <span key={entity}>{entity}</span>)}</div>
          </> },
          { label: "System Flow", content: <>
        <Asset asset={diagrams.systemFlow} onExpand={expand} />
        <p className="lu-eyebrow">Conceptual web presentation / Not the original system-flow diagram</p>
        <p className="lu-bridge">User <span>→</span> Frontend <span>→</span> REST API <span>→</span> Business logic <span>→</span> Database / External AI Service <span>→</span> Response</p>
        <p className="lu-stack">React <span>·</span> Spring Boot <span>·</span> SQL Server <span>·</span> JWT <span>·</span> Gemini API</p>
          </> },
          { label: "API Mapping", content: <div className="lu-api-panel">
        <h3 className="lu-subheading">A requirement needs a path through the system.</h3>
        <p className="lu-bridge">Requirement <span>→</span> Workflow / UI <span>→</span> REST API <span>→</span> Business logic <span>→</span> SQL data</p>
        <div className="lu-mappings">{mappings.map(([id, title, api, logic, data]) => <article key={id}><div><code>{id}</code><h4>{title}</h4></div><div><span>API / capability</span><code>{api}</code></div><div><span>Business logic</span><p>{logic}</p></div><div><span>{id === "FR-08" ? "Response" : "Data impact"}</span><p>{data}</p></div></article>)}</div>
        <p className="lu-footnote">The AI path returns a response from an external service; it does not automatically update official Quiz Results.</p>
        <div className="lu-access">{[["Authentication", "Who are you?"], ["Authorization", "What can your role do?"], ["Ownership", "Is this resource yours?"]].map(([title, text]) => <div key={title}><p className="lu-eyebrow">{title}</p><h3>{text}</h3></div>)}</div>
        <p className="lu-boundary">A Teacher role does not automatically mean that the teacher can modify every course. Ownership rules restrict course modification to the course owner.</p>
          </div> },
        ]} />
      </Section>
      <Section index={4} label="Validation & Working Product" title={<>From requirement<br /><em>to working behavior.</em></>}>
        <div className="lu-validation-intro"><div><strong>7</strong><span>Test scenarios</span></div><div><strong>14</strong><span>UAT-style scenarios</span></div><p>Documented academic validation.<br />Four selected examples below.</p></div>
        <div className="lu-validation">{[["Duplicate Enrollment", null, "Duplicate enrollment should be rejected."], ["Teacher Ownership", "Teacher B attempts to modify Teacher A’s course.", "Access denied."], ["Unauthorized Course Review", "Student attempts to approve/reject a course.", "403 / denied."], ["AI Failure Handling", null, "Return an error without leaving the application hanging."]].map(([title, scenario, expected], index) => <article key={title}><div className="lu-validation-top"><span className="lu-eyebrow">Example {number(index)}</span><span className="lu-pass">✓ PASS</span></div><h3>{title}</h3>{scenario && <p><strong>Scenario</strong>{scenario}</p>}<p><strong>Expected</strong>{expected}</p></article>)}</div>
        <p className="lu-boundary">Validation was performed locally against the implemented academic system using UAT-style scenarios. It was not client UAT.</p>
        <div className="lu-product-gallery">
          <h3>From analysis to a working system.</h3>
          <p>The academic application connects these requirements to teacher, admin and student workflows. Real UI captures are pending.</p>
          <LearnUpSwitcher id="lu-product" label="Product screenshots" items={screenshots.map((asset, index) => ({
            label: ["Teacher", "Admin", "Student", "AI Tutor"][index],
            content: <><Asset asset={asset} product onExpand={expand} /><div className="lu-product-caption"><code>{asset.id}</code><p>{asset.caption}</p></div></>,
          }))} />
        </div>
      </Section>
      <Section index={5} title={<>What this project<br /><em>taught me.</em></>}>
        <details className="lu-change-exercise" open>
          <summary>Change impact exercise</summary>
        <span className="lu-pill">Hypothetical Change Analysis</span>
        <div className="lu-change"><div><p className="lu-eyebrow">Current</p><h3>Simulated Payment</h3></div><span aria-hidden="true">→</span><div><p className="lu-eyebrow">Proposed</p><h3>Real Payment Gateway</h3></div></div>
        <p className="lu-eyebrow">Affected areas</p><ol className="lu-impact">{["Requirements", "Process", "API", "Data", "Security", "Testing"].map((area, index) => <li key={area}><span>{number(index)}</span>{area}</li>)}</ol>
        <p className="lu-boundary">This was a portfolio exercise for practicing Change Request and Impact Analysis, not an actual client-requested change.</p>
        </details>
        <div className="lu-reflection"><p className="lu-statement">A requirement becomes more useful when you can follow it all the way to <em>observable behavior.</em></p><div>{["Traceability keeps business requirements connected to system behavior.", "Technical knowledge helps check how requirements appear in APIs, data, authorization and ownership rules.", "Validation closes the loop between a requirement and its implementation."].map((text, index) => <p key={text}><span>{number(index)}</span>{text}</p>)}</div></div>
        <div className="lu-limitations"><p className="lu-eyebrow">Project limitations</p><p>Academic environment · No real stakeholder interviews · Local UAT-style validation · Simulated payment · No production deployment</p></div>
        <div className="lu-closing"><p className="lu-eyebrow">Continue beyond the presentation</p><h2>Explore the <em>evidence.</em></h2><Actions closing /></div>
      </Section>
    </div>
    <Modal show={Boolean(expanded)} onHide={() => setExpanded(null)} fullscreen className="lu-lightbox" aria-labelledby="lu-lightbox-title" restoreFocus>
      <Modal.Header closeButton closeVariant="white"><Modal.Title id="lu-lightbox-title">{expanded?.title}</Modal.Title></Modal.Header>
      <div className="lu-zoom-tools"><button onClick={() => setZoom(Math.max(100, zoom - 50))} disabled={zoom === 100} aria-label="Zoom out">−</button><output aria-live="polite">{zoom}%</output><button onClick={() => setZoom(Math.min(300, zoom + 50))} disabled={zoom === 300} aria-label="Zoom in">+</button><button onClick={() => setZoom(100)}>Fit</button><span>Scroll to explore · Escape to close</span></div>
      <Modal.Body>{expanded && <div className="lu-zoom-canvas" style={{ width: `${zoom}%` }}><img src={expanded.src} alt={expanded.title} /></div>}</Modal.Body>
    </Modal>
  </main>;
}
export default LearnUpCaseStudy;
