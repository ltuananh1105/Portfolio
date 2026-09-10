import React, { useCallback, useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { diagrams, evidenceLinks } from "./learnupEvidence";
import "./LearnUpCaseStudy.css";
import LearnUpSwitcher from "./LearnUpSwitcher";

const chapters = [
  { key: "overview", label: "Overview" },
  { key: "process", label: "Process" },
  { key: "requirements", label: "Requirements" },
  { key: "traceability", label: "Traceability" },
  { key: "validation", label: "Validation" },
  { key: "system-evidence", label: "System Evidence" },
];

const chapterKeys = chapters.map((chapter) => chapter.key);
const number = (index) => String(index + 1).padStart(2, "0");

const requirementsStats = [
  { value: 8, label: "Functional Requirements" },
  { value: 6, label: "Non-Functional Requirements" },
  { value: 7, label: "Business Rules" },
  { value: 10, label: "User Stories" },
  { value: 18, label: "Acceptance Criteria" },
];

const traceSequence = [
  { label: "WHY", id: "OBJ-02 / BRQ-02", detail: "Course Discovery & Learning / Discovery & Enrollment" },
  { label: "WHAT", id: "FR-02 / UC-05 / US-05", detail: "Student Enrollment / Enroll in Course" },
  { label: "RULE", id: "BR-02", detail: "Prevent Duplicate Enrollment" },
  { label: "EXPECTATION", id: "AC-07 / AC-08 / AC-09", detail: "Documented acceptance criteria" },
  { label: "VALIDATION", id: "TC-02 / UAT-07 / UAT-08", detail: "Validation evidence" },
  { label: "RESULT", id: "✓ VALIDATED", detail: "Enrollment + Duplicate Prevention" },
];

const validationRows = [
  {
    scenario: "Duplicate Enrollment",
    expected: "Duplicate enrollment is prevented",
    evidence: "TC-02 / UAT-08",
    result: "PASS",
  },
  {
    scenario: "Teacher Ownership",
    expected: "Teacher B cannot modify Teacher A's course",
    evidence: "TC-04 / UAT-11",
    result: "PASS",
  },
  {
    scenario: "Unauthorized Course Review",
    expected: "Student cannot approve or reject a course",
    evidence: "TC-06",
    result: "PASS",
  },
  {
    scenario: "AI Failure Handling",
    expected: "Failure returns controlled behavior without hanging",
    evidence: "TC-07 / UAT-13",
    result: "PASS",
  },
];

const apiMappings = [
  {
    id: "FR-05",
    title: "Course Submission",
    api: "/api/courses/{id}/submit",
    logic: "Validation + ownership",
    impact: "Course state / data",
  },
  {
    id: "FR-06",
    title: "Admin Review",
    api: "Approve / reject behavior",
    logic: "Admin authorization",
    impact: "Course state",
  },
  {
    id: "FR-02",
    title: "Student Enrollment",
    api: "Enrollment / order behavior",
    logic: "Duplicate enrollment rule",
    impact: "Enrollment / order data",
  },
  {
    id: "FR-08",
    title: "AI Tutor",
    api: "/api/ai/chat/stream",
    logic: "Gemini integration",
    impact: "AI response",
  },
];

const systemFlowSteps = [
  "User",
  "Frontend",
  "REST API",
  "Business logic",
  "Database / External AI Service",
  "Response",
];

function EvidenceLink({ href, children }) {
  if (!href) return null;

  return (
    <a className="lu-button" href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}

function Asset({ asset, onExpand }) {
  if (!asset?.src) return null;

  return (
    <figure className="lu-asset">
      <div className="lu-asset-meta">
        <span>{asset.type || "Evidence"}</span>
        <span>Original asset</span>
      </div>
      <button
        type="button"
        className="lu-image-button"
        onClick={() => onExpand(asset)}
        aria-label={`Expand ${asset.title}`}
      >
        <img src={asset.src} alt={asset.title} loading="lazy" />
        <span className="lu-expand">Open full evidence ↗</span>
      </button>
      <figcaption>
        {asset.title}
        <span> · Click to expand</span>
      </figcaption>
    </figure>
  );
}

function LearnUpCaseStudy() {
  const location = useLocation();
  const navigate = useNavigate();
  const chapterRef = useRef(null);
  const requestedChapter = location.hash.slice(1);
  const activeChapter = chapterKeys.includes(requestedChapter)
    ? requestedChapter
    : "overview";
  const activeIndex = chapterKeys.indexOf(activeChapter);
  const [expanded, setExpanded] = useState(null);
  const [zoom, setZoom] = useState(100);

  function changeChapter(index) {
    if (index < 0 || index >= chapters.length) return;
    navigate({
      pathname: location.pathname,
      search: location.search,
      hash: chapterKeys[index],
    });
  }

  const closeViewer = useCallback(() => {
    navigate("/project");
  }, [navigate]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        if (expanded) {
          setExpanded(null);
          return;
        }

        closeViewer();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeViewer, expanded]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      chapterRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [activeChapter]);

  const renderOverview = () => (
    <section className="lu-case-section">
      <header className="lu-chapter-header">
        <p className="lu-eyebrow">01 / OVERVIEW</p>
        <h1>Understanding the system before defining requirements.</h1>
        <p className="lu-lead">
          A retrospective analysis of the LearnUp academic system, structured
          around course lifecycle, learning, and administration.
        </p>
      </header>

      <div className="lu-meta-grid">
        <div>
          <span className="lu-meta-label">PROJECT</span>
          <strong>LearnUp</strong>
        </div>
        <div>
          <span className="lu-meta-label">TYPE</span>
          <strong>Academic Full-Stack Project</strong>
        </div>
        <div>
          <span className="lu-meta-label">ROLE</span>
          <strong>BA Analysis + Development</strong>
        </div>
        <div>
          <span className="lu-meta-label">ANALYSIS FOCUS</span>
          <strong>Requirements · Process · Traceability · Validation</strong>
        </div>
      </div>

      <div className="lu-two-col">
        <div>
          <p className="lu-label">PROJECT CONTEXT</p>
          <p className="lu-body-copy">
            LearnUp is an academic English-learning platform supporting Student,
            Teacher, and Admin roles.
          </p>
        </div>
        <div>
          <p className="lu-label">SYSTEM NEED</p>
          <p className="lu-body-copy">
            LearnUp needs to support the course lifecycle from content creation
            and administrative review to enrollment, learning, assessment, and
            progress tracking.
          </p>
        </div>
      </div>

      <div className="lu-actors">
        <div className="lu-actors-header">
          <p className="lu-label">PRIMARY ACTORS</p>
        </div>
        <div className="lu-actors-list">
          <div>
            <span className="lu-actor-index">01</span>
            <h3>Student</h3>
          </div>
          <div>
            <span className="lu-actor-index">02</span>
            <h3>Teacher</h3>
          </div>
          <div>
            <span className="lu-actor-index">03</span>
            <h3>Admin</h3>
          </div>
          <div className="lu-guest-box">
            <span className="lu-actor-index">Guest</span>
            <h3>Unauthenticated</h3>
          </div>
        </div>
      </div>

      <div className="lu-objective-block">
        <div className="lu-objective-header">
          <p className="lu-label">OBJECTIVES</p>
        </div>
        <div className="lu-objective-grid">
          {[
            "Course Management & Approval",
            "Course Discovery & Learning",
            "Learning Progress & Results",
            "Platform Administration",
          ].map((objective, index) => (
            <div key={objective} className="lu-objective-item">
              <code>OBJ-0{index + 1}</code>
              <span>{objective}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="lu-note-inline">
        <p className="lu-label">CASE STUDY NOTE</p>
        <p>
          BA documentation was formalized retrospectively from the completed
          academic system to create a structured analysis case study.
        </p>
      </div>
    </section>
  );

  const renderProcess = () => (
    <section className="lu-case-section">
      <header className="lu-chapter-header">
        <p className="lu-eyebrow">02 / PROCESS</p>
        <h1>How the workflow moves from action to decision.</h1>
      </header>

      <LearnUpSwitcher
        id="lu-process"
        label="Process artifacts"
        items={[
          {
            label: "Course Creation & Review",
            content: (
              <>
                <div className="lu-process-canvas">
                  <div className="lu-process-lane">
                    <span className="lu-process-role">Teacher</span>
                    <div className="lu-process-node">Create Course</div>
                    <div className="lu-process-arrow" aria-hidden="true">
                      ↓
                    </div>
                    <div className="lu-process-node">Manage Content</div>
                    <div className="lu-process-arrow" aria-hidden="true">
                      ↓
                    </div>
                    <div className="lu-process-node">Submit for Review</div>
                  </div>

                  <div className="lu-process-connector" aria-hidden="true">
                    →
                  </div>

                  <div className="lu-process-lane">
                    <span className="lu-process-role">System</span>
                    <div className="lu-process-node">Validate Submission</div>
                    <div className="lu-process-arrow" aria-hidden="true">
                      ↓
                    </div>
                    <div className="lu-process-node">Pending</div>
                  </div>

                  <div className="lu-process-connector" aria-hidden="true">
                    →
                  </div>

                  <div className="lu-process-lane">
                    <span className="lu-process-role">Admin</span>
                    <div className="lu-process-node">Review Course</div>
                    <div className="lu-process-arrow" aria-hidden="true">
                      ↓
                    </div>
                    <div className="lu-process-node">Decision</div>
                  </div>
                </div>

                <div className="lu-process-branch-grid">
                  <article className="lu-branch-item">
                    <p className="lu-label">APPROVE</p>
                    <p>Published</p>
                  </article>
                  <article className="lu-branch-item">
                    <p className="lu-label">REJECT</p>
                    <p>Record Reason</p>
                    <p>Teacher Revises</p>
                    <p>Resubmit</p>
                  </article>
                  <article className="lu-branch-item">
                    <p className="lu-label">INVALID</p>
                    <p>Remains Draft</p>
                    <p>Teacher fixes content</p>
                  </article>
                </div>

                <div className="lu-rule-strip">
                  <div>
                    <p className="lu-label">TEACHER OWNERSHIP</p>
                    <p>Only the course owner can manage the course.</p>
                  </div>
                  <div>
                    <p className="lu-label">SUBMISSION VALIDATION</p>
                    <p>Required conditions are checked before review.</p>
                  </div>
                  <div>
                    <p className="lu-label">ADMIN REVIEW</p>
                    <p>Only Admin can approve or reject.</p>
                  </div>
                </div>

                <div className="lu-inline-actions">
                  <button
                    type="button"
                    className="lu-button"
                    onClick={() => setExpanded(diagrams.courseReview)}
                  >
                    View detailed process diagram ↗
                  </button>
                </div>
              </>
            ),
          },
          {
            label: "Student Enrollment",
            content: (
              <>
                <div className="lu-enrollment-flow">
                  {[
                    "Select Course",
                    "Choose Enroll",
                    "Authentication Check",
                    "Availability Check",
                    "Existing Enrollment Check",
                    "Create Enrollment",
                    "Success",
                  ].map((step, index, array) => (
                    <React.Fragment key={step}>
                      <div className={`lu-enrollment-step ${index === array.length - 1 ? "is-success" : ""}`}>
                        {step}
                      </div>
                      {index < array.length - 1 && (
                        <div className="lu-enrollment-arrow" aria-hidden="true">
                          →
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="lu-process-branch-grid">
                  <article className="lu-branch-item">
                    <p className="lu-label">NOT AUTHENTICATED</p>
                    <p>Require Login</p>
                  </article>
                  <article className="lu-branch-item">
                    <p className="lu-label">UNAVAILABLE</p>
                    <p>Enrollment Unavailable</p>
                  </article>
                  <article className="lu-branch-item">
                    <p className="lu-label">ALREADY ENROLLED</p>
                    <p>Inform Student</p>
                  </article>
                </div>

                <div className="lu-inline-actions">
                  <button
                    type="button"
                    className="lu-button"
                    onClick={() => setExpanded(diagrams.enrollment)}
                  >
                    View detailed activity diagram ↗
                  </button>
                </div>
              </>
            ),
          },
        ]}
      />
    </section>
  );

  const renderRequirements = () => (
    <section className="lu-case-section">
      <header className="lu-chapter-header">
        <p className="lu-eyebrow">03 / REQUIREMENTS</p>
        <h1>From system need to testable behavior.</h1>
      </header>

      <div className="lu-spotlight">
        <div className="lu-spotlight-header">
          <span className="lu-chip">Requirement spotlight</span>
          <div className="lu-spotlight-title-row">
            <h2>Student Enrollment</h2>
            <code>FR-02</code>
          </div>
        </div>
        <p className="lu-body-copy large">
          The system must allow an eligible student to enroll in a course while
          preventing duplicate enrollment.
        </p>
        <div className="lu-spotlight-meta">
          <div>
            <p className="lu-label">REQUIREMENT</p>
            <code>FR-02</code>
            <span>Student Enrollment</span>
          </div>
          <div>
            <p className="lu-label">BUSINESS RULE</p>
            <code>BR-02</code>
            <span>Prevent Duplicate Enrollment</span>
          </div>
          <div>
            <p className="lu-label">ACCEPTANCE</p>
            <code>AC-07 / AC-08 / AC-09</code>
          </div>
        </div>
      </div>

      <div className="lu-stats-grid">
        {requirementsStats.map((stat) => (
          <div key={stat.label} className="lu-stat-box">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );

  const renderTraceability = () => (
    <section className="lu-case-section">
      <header className="lu-chapter-header">
        <p className="lu-eyebrow">04 / TRACEABILITY</p>
        <h1>One requirement. End-to-end evidence.</h1>
        <p className="lu-lead">
          Tracing Student Enrollment from business objective to validated system
          behavior.
        </p>
      </header>

      <div className="lu-trace-panel">
        <div className="lu-trace-header">
          <span className="lu-chip">Enrollment / End-to-end evidence</span>
          <span className="lu-trace-subtitle">
            Why → What → Rule → Expectation → Validation → Result
          </span>
        </div>

        <div className="lu-trace-chain">
          {traceSequence.map((item, index) => (
            <React.Fragment key={item.label}>
              <div className="lu-trace-step">
                <span className="lu-label">{item.label}</span>
                <strong>{item.id}</strong>
                <small>{item.detail}</small>
              </div>
              {index < traceSequence.length - 1 && (
                <div className="lu-trace-arrow" aria-hidden="true">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {evidenceLinks.rtm && (
        <div className="lu-inline-actions">
          <EvidenceLink href={evidenceLinks.rtm}>View full RTM</EvidenceLink>
        </div>
      )}
    </section>
  );

  const renderValidation = () => (
    <section className="lu-case-section">
      <header className="lu-chapter-header">
        <p className="lu-eyebrow">05 / VALIDATION</p>
        <h1>Requirements should result in observable behavior.</h1>
      </header>

      <div className="lu-validation-summary">
        <div>
          <strong>7</strong>
          <span>Test Scenarios</span>
        </div>
        <div>
          <strong>14</strong>
          <span>UAT-style Scenarios</span>
        </div>
      </div>

      <div className="lu-validation-table-wrap">
        <table className="lu-validation-table">
          <thead>
            <tr>
              <th>SCENARIO</th>
              <th>EXPECTED BEHAVIOR</th>
              <th>EVIDENCE</th>
              <th>RESULT</th>
            </tr>
          </thead>
          <tbody>
            {validationRows.map((row) => (
              <tr key={row.scenario}>
                <td>{row.scenario}</td>
                <td>{row.expected}</td>
                <td>{row.evidence}</td>
                <td className="lu-result-pass">{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lu-note-inline subtle">
        <p className="lu-label">VALIDATION CONTEXT</p>
        <p>
          Validation was performed locally against the implemented academic
          system using UAT-style scenarios. It was not client UAT.
        </p>
      </div>
    </section>
  );

  const renderSystemEvidence = () => (
    <section className="lu-case-section">
      <header className="lu-chapter-header">
        <p className="lu-eyebrow">06 / SYSTEM EVIDENCE</p>
        <h1>How requirements connect to implementation.</h1>
        <p className="lu-lead">
          Technical evidence is used here to show how analyzed requirements are
          supported by the implemented system.
        </p>
      </header>

      <LearnUpSwitcher
        id="lu-system"
        label="System evidence artifacts"
        items={[
          {
            label: "Use Case",
            content: <Asset asset={diagrams.useCase} onExpand={setExpanded} />,
          },
          {
            label: "Data Model",
            content: (
              <>
                <Asset asset={diagrams.erd} onExpand={setExpanded} />
                <div className="lu-entity-list">
                  {[
                    "Users",
                    "Categories",
                    "Courses",
                    "Chapters",
                    "Lessons",
                    "Enrollments",
                    "Orders",
                    "Quizzes",
                    "Questions",
                    "Question Options",
                    "Lesson Progress",
                    "Quiz Results",
                  ].map((entity) => (
                    <span key={entity}>{entity}</span>
                  ))}
                </div>
              </>
            ),
          },
          {
            label: "System Flow",
            content: (
              <div className="lu-system-flow">
                <p className="lu-label">SYSTEM FLOW</p>
                <div className="lu-system-flow-steps">
                  {systemFlowSteps.map((step, index) => (
                    <React.Fragment key={step}>
                      <div className="lu-system-node">{step}</div>
                      {index < systemFlowSteps.length - 1 && (
                        <div className="lu-system-arrow" aria-hidden="true">
                          →
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ),
          },
          {
            label: "API Mapping",
            content: (
              <div className="lu-api-panel">
                <div className="lu-system-flow-steps compact">
                  <div className="lu-system-node">Requirement</div>
                  <div className="lu-system-arrow" aria-hidden="true">
                    →
                  </div>
                  <div className="lu-system-node">Workflow / UI</div>
                  <div className="lu-system-arrow" aria-hidden="true">
                    →
                  </div>
                  <div className="lu-system-node">REST API</div>
                  <div className="lu-system-arrow" aria-hidden="true">
                    →
                  </div>
                  <div className="lu-system-node">Business logic</div>
                  <div className="lu-system-arrow" aria-hidden="true">
                    →
                  </div>
                  <div className="lu-system-node">SQL data</div>
                </div>

                <div className="lu-api-mappings">
                  {apiMappings.map((mapping) => (
                    <article key={mapping.id} className="lu-api-card">
                      <div className="lu-api-heading">
                        <h3>{mapping.title}</h3>
                        <code>{mapping.id}</code>
                      </div>
                      <div className="lu-api-row">
                        <span className="lu-label">API / capability</span>
                        <code>{mapping.api}</code>
                      </div>
                      <div className="lu-api-row">
                        <span className="lu-label">Business logic</span>
                        <p>{mapping.logic}</p>
                      </div>
                      <div className="lu-api-row">
                        <span className="lu-label">
                          {mapping.id === "FR-08" ? "Response" : "Data impact"}
                        </span>
                        <p>{mapping.impact}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="lu-access-model">
                  <div>
                    <p className="lu-label">AUTHENTICATION</p>
                    <h3>Who are you?</h3>
                  </div>
                  <div>
                    <p className="lu-label">AUTHORIZATION</p>
                    <h3>What can your role do?</h3>
                  </div>
                  <div>
                    <p className="lu-label">OWNERSHIP</p>
                    <h3>Is this resource yours?</h3>
                  </div>
                </div>

                <div className="lu-note-inline subtle">
                  <p className="lu-label">OWNERSHIP RULE</p>
                  <p>
                    A Teacher role does not automatically mean the teacher can
                    modify every course. Ownership rules restrict course
                    modification to the course owner.
                  </p>
                </div>
              </div>
            ),
          },
        ]}
      />

      <div className="lu-technical-foundation">
        <p className="lu-label">TECHNICAL FOUNDATION</p>
        <div className="lu-tech-list">
          <span>React</span>
          <span>Spring Boot</span>
          <span>SQL Server</span>
          <span>Gemini API</span>
        </div>
      </div>

      <div className="lu-change-analysis">
        <p className="lu-label">HYPOTHETICAL CHANGE ANALYSIS</p>
        <div className="lu-change-flow">
          <div>
            <span>Simulated Payment</span>
          </div>
          <div className="lu-change-arrow" aria-hidden="true">
            →
          </div>
          <div>
            <span>Real Payment Gateway</span>
          </div>
        </div>
        <div className="lu-impact-list">
          <span>Requirements</span>
          <span>Process</span>
          <span>API</span>
          <span>Data</span>
          <span>Security</span>
          <span>Testing</span>
        </div>
        <p className="lu-small-note">
          This was a portfolio exercise for practicing Change Request and Impact
          Analysis, not an actual client-requested change.
        </p>
      </div>
    </section>
  );

  const chapterContent = {
    overview: renderOverview(),
    process: renderProcess(),
    requirements: renderRequirements(),
    traceability: renderTraceability(),
    validation: renderValidation(),
    "system-evidence": renderSystemEvidence(),
  };

  return (
    <main className="learnup-viewer-page" aria-label="LearnUp case study viewer">
      <div className="learnup-case-study-viewer" role="dialog" aria-modal="true">
        <header className="learnup-viewer-header">
          <div className="learnup-branding">
            <span className="learnup-brand">LEARNUP</span>
            <span className="learnup-separator">/</span>
            <span className="learnup-case-id">CASE STUDY 01</span>
          </div>

          <div className="learnup-header-title">
            Course Lifecycle &amp; Learning Management
          </div>

          <button type="button" className="learnup-close" onClick={closeViewer}>
            CLOSE ×
          </button>
        </header>

        <div className="learnup-viewer-body">
          <aside className="learnup-sidebar">
            <div className="learnup-sidebar-top">
              <span className="lu-label">CHAPTER INDEX</span>
              <strong>
                {number(activeIndex)} / {chapters.length}
              </strong>
            </div>

            <nav className="learnup-sidebar-nav" aria-label="LearnUp chapter navigation">
              {chapters.map((chapter, index) => (
                <button
                  type="button"
                  key={chapter.key}
                  className={activeChapter === chapter.key ? "is-active" : ""}
                  onClick={() => changeChapter(index)}
                >
                  <span>{number(index)}</span>
                  {chapter.label}
                </button>
              ))}
            </nav>
          </aside>

          <div className="learnup-content-pane" ref={chapterRef} tabIndex={-1}>
            {chapterContent[activeChapter]}

            <div className="lu-chapter-controls">
              {activeIndex > 0 ? (
                <button type="button" onClick={() => changeChapter(activeIndex - 1)}>
                  ← Previous: {chapters[activeIndex - 1].label}
                </button>
              ) : (
                <span />
              )}

              <span className="lu-chapter-count">
                {number(activeIndex)} / {chapters.length}
              </span>

              {activeIndex < chapters.length - 1 ? (
                <button type="button" onClick={() => changeChapter(activeIndex + 1)}>
                  Next: {chapters[activeIndex + 1].label} →
                </button>
              ) : (
                <div className="lu-closure-block">
                  <p className="lu-label">CASE STUDY COMPLETE</p>
                  <h3>From requirement to system behavior.</h3>
                  <div className="lu-inline-actions">
                    {evidenceLinks.documentation && (
                      <EvidenceLink href={evidenceLinks.documentation}>
                        Full BA Documentation
                      </EvidenceLink>
                    )}
                    {evidenceLinks.source && (
                      <EvidenceLink href={evidenceLinks.source}>
                        Source Code
                      </EvidenceLink>
                    )}
                    <Link className="lu-back-link" to="/project">
                      ← Back to Work
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={Boolean(expanded)}
        onHide={() => setExpanded(null)}
        fullscreen
        className="lu-lightbox"
        aria-labelledby="lu-lightbox-title"
        restoreFocus
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title id="lu-lightbox-title">{expanded?.title}</Modal.Title>
        </Modal.Header>

        <div className="lu-zoom-tools">
          <button
            type="button"
            onClick={() => setZoom((current) => Math.max(100, current - 50))}
            disabled={zoom === 100}
            aria-label="Zoom out"
          >
            −
          </button>
          <output aria-live="polite">{zoom}%</output>
          <button
            type="button"
            onClick={() => setZoom((current) => Math.min(300, current + 50))}
            disabled={zoom === 300}
            aria-label="Zoom in"
          >
            +
          </button>
          <button type="button" onClick={() => setZoom(100)}>
            Fit
          </button>
          <span>Scroll to explore · Escape to close</span>
        </div>

        <Modal.Body>
          {expanded && (
            <div className="lu-zoom-canvas" style={{ width: `${zoom}%` }}>
              <img src={expanded.src} alt={expanded.title} />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </main>
  );
}

export default LearnUpCaseStudy;
