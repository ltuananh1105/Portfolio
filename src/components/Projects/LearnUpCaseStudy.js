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

const traceSequence = [
  {
    label: "WHY",
    id: "OBJ-02 / BRQ-02",
    detail: "Course Discovery & Learning / Discovery & Enrollment",
  },
  {
    label: "WHAT",
    id: "FR-02 / UC-05 / US-05",
    detail: "Student Enrollment / Enroll in Course",
  },
  { label: "RULE", id: "BR-02", detail: "Prevent Duplicate Enrollment" },
  {
    label: "EXPECTATION",
    id: "AC-07 / AC-08 / AC-09",
    detail: "Documented acceptance criteria",
  },
  {
    label: "VALIDATION",
    id: "TC-02 / UAT-07 / UAT-08",
    detail: "Validation evidence",
  },
  {
    label: "RESULT",
    id: "✓ VALIDATED",
    detail: "Enrollment + Duplicate Prevention",
  },
];

const validationRows = [
  {
    scenario: "Duplicate Enrollment",
    req: "FR-02 / BR-02 / AC-08",
    expected: "Duplicate enrollment is prevented",
    evidence: "TC-02 / UAT-08",
    result: "PASS",
  },
  {
    scenario: "Teacher Ownership",
    req: "FR-04 / BR-04 / AC-03",
    expected: "Teacher B cannot modify Teacher A's course",
    evidence: "TC-04 / UAT-11",
    result: "PASS",
  },
  {
    scenario: "Unauthorized Course Review",
    req: "FR-06 / BR-05 / AC-06",
    expected: "Student cannot approve or reject a course",
    evidence: "TC-06",
    result: "PASS",
  },
  {
    scenario: "AI Failure Handling",
    req: "FR-08 / BR-07 / AC-17",
    expected: "Failure returns controlled behavior without hanging",
    evidence: "TC-07 / UAT-13",
    result: "PASS",
  },
];

const requirementInventory = {
  functional: [
    { id: "FR-01", title: "Public Course Discovery", br: "BRQ-02", desc: "System shall allow Guest and Student to discover, search, and view public course details." },
    { id: "FR-02", title: "Student Enrollment", br: "BRQ-02", desc: "System shall allow Student to enroll in courses via an order / simulated payment workflow." },
    { id: "FR-03", title: "Learning, Quiz & Progress", br: "BRQ-03, BRQ-04", desc: "System shall allow enrolled Students to access lesson content, attempt quizzes, and track progress (0%-100%)." },
    { id: "FR-04", title: "Course Content Management", br: "BRQ-01", desc: "System shall allow Teachers to create and manage course chapters, lessons, and quizzes within their owned courses." },
    { id: "FR-05", title: "Course Submission", br: "BRQ-01", desc: "System shall allow Teachers to submit eligible draft courses for Admin review." },
    { id: "FR-06", title: "Course Review", br: "BRQ-01", desc: "System shall allow Admins to review submitted courses and either Approve (publish) or Reject (with reason)." },
    { id: "FR-07", title: "Platform Administration", br: "BRQ-05", desc: "System shall provide Admins with platform-level user management and category management capabilities." },
    { id: "FR-08", title: "AI Tutor", br: "BRQ-06", desc: "System shall allow authenticated users to send prompts and receive AI-assisted English learning responses via Gemini API." },
  ],
  nonFunctional: [
    { id: "NFR-01", title: "Security", desc: "BCrypt password hashing, JWT authentication, Role-based access control, and Teacher resource ownership validation." },
    { id: "NFR-02", title: "Data Integrity", desc: "Enforces email uniqueness, unique enrollment constraints, and progress tracking boundaries." },
    { id: "NFR-03", title: "Usability", desc: "Responsive web interface with explicit loading states, modal dialogs, and error feedback." },
    { id: "NFR-04", title: "Performance & Responsiveness", desc: "Supports streaming response via Server-Sent Events (SSE) for AI Tutor interactions." },
    { id: "NFR-05", title: "Maintainability", desc: "Separation of concerns between React frontend, Spring Boot REST controllers, JPA services, and database layers." },
    { id: "NFR-06", title: "Configuration & Portability", desc: "Externalized environment configuration for database credentials, JWT secrets, CORS, and Gemini API keys." },
  ],
  businessRules: [
    { id: "BR-01", title: "Unique Email", desc: "Each user account must use a unique email address across the platform." },
    { id: "BR-02", title: "Unique Enrollment", desc: "A student cannot create duplicate enrollments for the same course." },
    { id: "BR-03", title: "Public Course Visibility", desc: "Only courses in the approved/published status are displayed in public course discovery." },
    { id: "BR-04", title: "Teacher Resource Ownership", desc: "Teachers may only edit and manage course resources that belong to their explicit ownership." },
    { id: "BR-05", title: "Course Review Authority", desc: "Only users with the Admin role are authorized to approve or reject submitted courses." },
    { id: "BR-06", title: "Learning Progress Range", desc: "Learning progress values must strictly remain within the 0% to 100% range." },
    { id: "BR-07", title: "AI Result Boundary", desc: "AI Tutor interactions cannot automatically generate, alter, or decide official student quiz results." },
  ]
};

const implementationRefs = [
  {
    title: "REST API & System Mapping",
    file: "ba-docs/06-system-analysis/api-mapping.md",
    url: evidenceLinks.apiMapping,
    desc: "Traces Functional Requirements to REST API endpoints, controllers, and data entities.",
  },
  {
    title: "Course Submission & Review Logic",
    file: "backend/.../CourseController.java",
    url: evidenceLinks.courseController,
    desc: "Enforces submission validation, state transitions (Draft -> Pending -> Published/Rejected), and ownership check.",
  },
  {
    title: "Security & Access Control Config",
    file: "backend/.../security/SecurityConfig.java",
    url: evidenceLinks.securityConfig,
    desc: "Configures Spring Security, JWT filters, public endpoints, and Role-Based Access Control (Admin/Teacher/Student).",
  },
  {
    title: "Enrollment Entity & Repository",
    file: "backend/.../entity/Enrollment.java",
    url: evidenceLinks.enrollmentEntity,
    desc: "Database mapping for student enrollments enforcing unique constraints.",
  },
  {
    title: "Gemini AI Tutor Controller",
    file: "backend/.../AiController.java",
    url: evidenceLinks.aiController,
    desc: "Handles AI prompt processing and Server-Sent Events (SSE) streaming integration.",
  },
];

function TextLink({ href, children }) {
  if (!href) return null;

  return (
    <a className="lu-text-link" href={href} target="_blank" rel="noreferrer">
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
        <span>Original Diagram</span>
      </div>
      <button
        type="button"
        className="lu-image-button"
        onClick={() => onExpand(asset)}
        aria-label={`Expand ${asset.title}`}
      >
        <img src={asset.src} alt={asset.title} loading="lazy" />
        <span className="lu-expand">Open full diagram ↗</span>
      </button>
      <figcaption>
        {asset.title}
        <span> · Click to expand</span>
      </figcaption>
    </figure>
  );
}

function RequirementList({ items }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="lu-req-inventory-list">
      {items.map((item) => {
        const isOpen = expandedId === item.id;
        return (
          <div key={item.id} className={`lu-req-item ${isOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="lu-req-item-header"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
            >
              <div className="lu-req-item-main">
                <code>{item.id}</code>
                <strong>{item.title}</strong>
              </div>
              <span className="lu-req-toggle-icon">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="lu-req-item-body">
                <p>{item.desc}</p>
                {item.br && (
                  <span className="lu-req-br-tag">
                    Related BRQ: {item.br}
                  </span>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
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

  function openDiagram(asset) {
    setZoom(100);
    setExpanded(asset);
  }

  function changeChapter(index) {
    if (index < 0 || index >= chapters.length) return;
    navigate({
      pathname: location.pathname,
      search: location.search,
      hash: chapterKeys[index],
    });
  }

  const closeViewer = useCallback(() => {
    navigate("/projects");
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
      chapterRef.current?.scrollTo({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        top: 0,
        left: 0,
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [activeChapter]);

  const renderOverview = () => (
    <section className="lu-case-section">
      <header className="lu-chapter-header">
        <p className="lu-eyebrow">01 / OVERVIEW</p>
        <h1>Understanding LearnUp</h1>
        <p className="lu-lead">
          A retrospective business analysis of the LearnUp academic online learning platform, structured around course lifecycle, enrollment, and platform administration.
        </p>
      </header>

      {/* Snapshot */}
      <div className="lu-snapshot-block">
        <p className="lu-label">PROJECT SNAPSHOT</p>
        <div className="lu-snapshot-grid">
          <div>
            <span className="lu-meta-label">PROJECT</span>
            <strong>LearnUp</strong>
          </div>
          <div>
            <span className="lu-meta-label">TYPE</span>
            <strong>Academic Full-Stack System</strong>
          </div>
          <div>
            <span className="lu-meta-label">ROLE</span>
            <strong>BA Analysis &amp; Development</strong>
          </div>
          <div>
            <span className="lu-meta-label">FOCUS</span>
            <strong>Requirements · Process · Traceability · Validation</strong>
          </div>
        </div>
      </div>

      {/* Scope */}
      <div className="lu-scope-block">
        <p className="lu-label">SYSTEM CONTEXT &amp; SCOPE</p>
        <div className="lu-scope-grid">
          <article className="lu-scope-card">
            <h3>In Scope</h3>
            <ul>
              <li><strong>Course Lifecycle:</strong> Teacher course creation, chapter/lesson management, and quiz builder.</li>
              <li><strong>Course Review &amp; Publishing:</strong> Submission workflow with Admin Approval or Rejection (with reason).</li>
              <li><strong>Student Enrollment:</strong> Course enrollment via order/simulated payment flow and duplicate prevention.</li>
              <li><strong>Learning &amp; Progress:</strong> Lesson access, completion tracking (0%–100%), and quiz attempt logging.</li>
              <li><strong>AI Tutor:</strong> Authenticated AI learning assistant using Gemini API with SSE streaming.</li>
              <li><strong>Platform Administration:</strong> Admin management of platform users, categories, and revenue overview.</li>
            </ul>
          </article>

          <article className="lu-scope-card out-of-scope">
            <h3>Out of Scope</h3>
            <ul>
              <li><strong>Real Payment Gateway:</strong> Uses simulated payment processing; no real banking integration.</li>
              <li><strong>Production Deployment:</strong> Evaluated and executed in local development environment.</li>
              <li><strong>Native Mobile App:</strong> Built as a responsive web application; no iOS/Android native apps.</li>
              <li><strong>Long-term AI Model:</strong> No long-term personalized learning model or historical student profiling.</li>
              <li><strong>Automated AI Grading:</strong> AI Tutor does not automatically grade or decide official quiz results.</li>
              <li><strong>Production-Scale Testing:</strong> No commercial load testing or independent penetration testing.</li>
            </ul>
          </article>
        </div>
      </div>

      {/* Primary Actors */}
      <div className="lu-actors">
        <p className="lu-label">PRIMARY ACTORS</p>
        <div className="lu-actors-editorial">
          <div className="lu-actor-item">
            <span className="lu-actor-num">01</span>
            <div>
              <h3>Student</h3>
              <p>Discovers, enrolls, accesses lesson content, completes quizzes, and tracks learning progress.</p>
            </div>
          </div>
          <div className="lu-actor-item">
            <span className="lu-actor-num">02</span>
            <div>
              <h3>Teacher</h3>
              <p>Creates course content, manages chapters and quizzes, and submits courses for review.</p>
            </div>
          </div>
          <div className="lu-actor-item">
            <span className="lu-actor-num">03</span>
            <div>
              <h3>Admin</h3>
              <p>Reviews submitted courses (approves/rejects) and administers platform users and categories.</p>
            </div>
          </div>
          <div className="lu-actor-item guest">
            <span className="lu-actor-num">GUEST</span>
            <div>
              <h3>Unauthenticated User</h3>
              <p>Browses public courses, views course details, registers, and logs in.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <div className="lu-objective-block">
        <p className="lu-label">BUSINESS OBJECTIVES</p>
        <div className="lu-objective-grid">
          {[
            { id: "OBJ-01", title: "Course Lifecycle & Approval Workflow" },
            { id: "OBJ-02", title: "Course Discovery & Enrollment" },
            { id: "OBJ-03", title: "Learning Progress & Assessment" },
            { id: "OBJ-04", title: "Platform Data & User Administration" },
          ].map((item) => (
            <div key={item.id} className="lu-objective-item">
              <code>{item.id}</code>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Transparency Note */}
      <div className="lu-note-inline">
        <p className="lu-label">TRANSPARENCY &amp; LIMITATIONS NOTE</p>
        <p>
          LearnUp was developed as a solo academic project with retrospective BA documentation formalized directly from the implemented codebase. No real client stakeholder interviews, commercial client sign-off, or production deployments were conducted. All validation scenarios were executed locally in the project environment.
        </p>
      </div>
    </section>
  );

  const renderProcess = () => (
    <section className="lu-case-section">
      <header className="lu-chapter-header">
        <p className="lu-eyebrow">02 / PROCESS</p>
        <h1>How the system moves from action to outcome</h1>
        <p className="lu-lead">
          Core business workflows mapped across user roles, validation gates, and state transitions.
        </p>
      </header>

      <LearnUpSwitcher
        id="lu-process"
        label="Process workflows"
        items={[
          {
            label: "Course Creation & Review",
            content: (
              <div className="lu-process-content">
                <div className="lu-process-canvas">
                  <div className="lu-process-lane">
                    <span className="lu-process-role">Teacher</span>
                    <div className="lu-process-node">Create Course</div>
                    <div className="lu-process-arrow" aria-hidden="true">↓</div>
                    <div className="lu-process-node">Manage Content</div>
                    <div className="lu-process-arrow" aria-hidden="true">↓</div>
                    <div className="lu-process-node">Submit for Review</div>
                  </div>

                  <div className="lu-process-connector" aria-hidden="true">→</div>

                  <div className="lu-process-lane">
                    <span className="lu-process-role">System</span>
                    <div className="lu-process-node">Validate Submission</div>
                    <div className="lu-process-arrow" aria-hidden="true">↓</div>
                    <div className="lu-process-node">Pending State</div>
                  </div>

                  <div className="lu-process-connector" aria-hidden="true">→</div>

                  <div className="lu-process-lane">
                    <span className="lu-process-role">Admin</span>
                    <div className="lu-process-node">Review Course</div>
                    <div className="lu-process-arrow" aria-hidden="true">↓</div>
                    <div className="lu-process-node">Approve / Reject</div>
                  </div>
                </div>

                <div className="lu-process-branch-grid">
                  <article className="lu-branch-item">
                    <p className="lu-label">APPROVE</p>
                    <p>Course status becomes Published and visible in public discovery.</p>
                  </article>
                  <article className="lu-branch-item">
                    <p className="lu-label">REJECT</p>
                    <p>Status becomes Rejected with reason recorded for Teacher revision.</p>
                  </article>
                  <article className="lu-branch-item">
                    <p className="lu-label">INVALID</p>
                    <p>Remains Draft if required content/submission rules are not met.</p>
                  </article>
                </div>

                <div className="lu-rule-strip">
                  <div>
                    <p className="lu-label">TEACHER OWNERSHIP</p>
                    <p>Only the course owner can manage or submit the course.</p>
                  </div>
                  <div>
                    <p className="lu-label">SUBMISSION VALIDATION</p>
                    <p>Required chapter and lesson rules are checked before review.</p>
                  </div>
                  <div>
                    <p className="lu-label">ADMIN AUTHORITY</p>
                    <p>Only Admin role can approve or reject submitted courses.</p>
                  </div>
                </div>

                <div className="lu-inline-actions">
                  <button
                    type="button"
                    className="lu-text-link-btn"
                    onClick={() => openDiagram(diagrams.courseReview)}
                  >
                    View detailed process diagram ↗
                  </button>
                </div>
              </div>
            ),
          },
          {
            label: "Student Enrollment",
            content: (
              <div className="lu-process-content">
                <div className="lu-enrollment-flow">
                  {[
                    "Select Course",
                    "Choose Enroll",
                    "Auth Check",
                    "Availability Check",
                    "Existing Enrollment Check",
                    "Order / Simulated Payment",
                    "Create Enrollment",
                    "Success",
                  ].map((step, index, array) => (
                    <React.Fragment key={step}>
                      <div className={`lu-enrollment-step ${index === array.length - 1 ? "is-success" : ""}`}>
                        {step}
                      </div>
                      {index < array.length - 1 && (
                        <div className="lu-enrollment-arrow" aria-hidden="true">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="lu-process-branch-grid">
                  <article className="lu-branch-item">
                    <p className="lu-label">UNAUTHENTICATED</p>
                    <p>Redirect to Login prior to starting enrollment flow.</p>
                  </article>
                  <article className="lu-branch-item">
                    <p className="lu-label">UNAVAILABLE</p>
                    <p>Enrollment blocked if course is not in Published status.</p>
                  </article>
                  <article className="lu-branch-item">
                    <p className="lu-label">ALREADY ENROLLED</p>
                    <p>Duplicate enrollment prevented; direct access given.</p>
                  </article>
                </div>

                <div className="lu-inline-actions">
                  <button
                    type="button"
                    className="lu-text-link-btn"
                    onClick={() => openDiagram(diagrams.enrollment)}
                  >
                    View detailed activity diagram ↗
                  </button>
                </div>
              </div>
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
        <h1>Structuring expected system behavior</h1>
        <p className="lu-lead">
          Formalized requirement inventory and spotlight traceability.
        </p>
      </header>

      {/* Stats line */}
      <div className="lu-stats-summary-line">
        <span>8 Functional Requirements</span>
        <span className="dot">•</span>
        <span>6 Non-Functional Requirements</span>
        <span className="dot">•</span>
        <span>7 Business Rules</span>
        <span className="dot">•</span>
        <span>10 User Stories</span>
        <span className="dot">•</span>
        <span>18 Acceptance Criteria</span>
      </div>

      {/* Spotlight */}
      <div className="lu-spotlight">
        <div className="lu-spotlight-header">
          <span className="lu-chip">Requirement Spotlight</span>
          <div className="lu-spotlight-title-row">
            <h2>Student Enrollment</h2>
            <code>FR-02</code>
          </div>
        </div>
        <p className="lu-body-copy large">
          The system shall allow eligible students to enroll in published courses via an order / simulated payment workflow while strictly preventing duplicate enrollments.
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
            <p className="lu-label">ACCEPTANCE CRITERIA</p>
            <code>AC-07 / AC-08 / AC-09</code>
          </div>
        </div>
      </div>

      {/* Requirement Inventory */}
      <div className="lu-inventory-section">
        <p className="lu-label">REQUIREMENT INVENTORY</p>
        <LearnUpSwitcher
          id="lu-req-inventory"
          label="Requirement Inventory"
          items={[
            {
              label: `Functional (${requirementInventory.functional.length})`,
              content: <RequirementList items={requirementInventory.functional} />,
            },
            {
              label: `Non-functional (${requirementInventory.nonFunctional.length})`,
              content: <RequirementList items={requirementInventory.nonFunctional} />,
            },
            {
              label: `Business Rules (${requirementInventory.businessRules.length})`,
              content: <RequirementList items={requirementInventory.businessRules} />,
            },
          ]}
        />
      </div>
    </section>
  );

  const renderTraceability = () => (
    <section className="lu-case-section">
      <header className="lu-chapter-header">
        <p className="lu-eyebrow">04 / TRACEABILITY</p>
        <h1>Connecting intent to validation</h1>
        <p className="lu-lead">
          Traceability example demonstrating how business objectives translate down to verified system behavior.
        </p>
      </header>

      <div className="lu-trace-panel">
        <div className="lu-trace-header">
          <span className="lu-chip">Student Enrollment — Traceability Example</span>
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
                <div className="lu-trace-arrow" aria-hidden="true">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {evidenceLinks.rtm && (
        <div className="lu-inline-actions" style={{ marginTop: "24px" }}>
          <TextLink href={evidenceLinks.rtm}>View full RTM document on GitHub</TextLink>
        </div>
      )}
    </section>
  );

  const renderValidation = () => (
    <section className="lu-case-section">
      <header className="lu-chapter-header">
        <p className="lu-eyebrow">05 / VALIDATION</p>
        <h1>Checking implemented behavior against expectations</h1>
        <p className="lu-lead">
          System behavior verified using test scenarios and UAT-style user goal validations.
        </p>
      </header>

      <div className="lu-validation-summary-line">
        <strong>7 Executed Test Scenarios</strong>
        <span className="dot">•</span>
        <strong>14 Verified UAT-Style Scenarios</strong>
      </div>

      <div className="lu-validation-table-wrap">
        <table className="lu-validation-table">
          <thead>
            <tr>
              <th>SCENARIO</th>
              <th>RELATED REQUIREMENT</th>
              <th>EXPECTED BEHAVIOR</th>
              <th>EVIDENCE</th>
              <th>RESULT</th>
            </tr>
          </thead>
          <tbody>
            {validationRows.map((row) => (
              <tr key={row.scenario}>
                <td><strong>{row.scenario}</strong></td>
                <td><code>{row.req}</code></td>
                <td>{row.expected}</td>
                <td>{row.evidence}</td>
                <td className="lu-result-pass">✓ {row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lu-note-inline subtle">
        <p className="lu-label">VALIDATION CONTEXT &amp; BOUNDARY</p>
        <p>
          Validation was performed locally against the implemented academic system using UAT-style scenarios. It was not client UAT.
        </p>
      </div>
    </section>
  );

  const renderSystemEvidence = () => (
    <section className="lu-case-section">
      <header className="lu-chapter-header">
        <p className="lu-eyebrow">06 / SYSTEM EVIDENCE</p>
        <h1>Connecting analysis to implementation</h1>
        <p className="lu-lead">
          Evidence separated into visual analysis artifacts and source code implementation references.
        </p>
      </header>

      <div className="lu-evidence-level">
        <p className="lu-label">ANALYSIS ARTIFACTS</p>
        <LearnUpSwitcher
          id="lu-system-artifacts"
          label="System analysis artifacts"
          items={[
            {
              label: "Use Case Diagram",
              content: <Asset asset={diagrams.useCase} onExpand={openDiagram} />,
            },
            {
              label: "ERD Data Model",
              content: (
                <>
                  <Asset asset={diagrams.erd} onExpand={openDiagram} />
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
              label: "Course Review Process",
              content: <Asset asset={diagrams.courseReview} onExpand={openDiagram} />,
            },
            {
              label: "Enrollment Activity Flow",
              content: <Asset asset={diagrams.enrollment} onExpand={openDiagram} />,
            },
          ]}
        />
      </div>

      <div className="lu-evidence-level" style={{ marginTop: "40px" }}>
        <p className="lu-label">IMPLEMENTATION REFERENCES</p>
        <div className="lu-impl-grid">
          {implementationRefs.map((ref) => (
            <article key={ref.title} className="lu-impl-card">
              <div className="lu-impl-header">
                <h3>{ref.title}</h3>
                <code>{ref.file}</code>
              </div>
              <p>{ref.desc}</p>
              {ref.url && <TextLink href={ref.url}>View file on GitHub</TextLink>}
            </article>
          ))}
        </div>
      </div>

      <div className="lu-note-inline subtle">
        <p className="lu-label">DISCLOSURE</p>
        <p>
          Implementation references map directly to verified files in the project repository. No fabricated swagger screenshots, postman execution dumps, token dumps, or production logs are presented.
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
            <span className="learnup-separator">|</span>
            <span className="learnup-case-id">Business Analysis Case Study</span>
          </div>

          <button
            type="button"
            className="learnup-close"
            onClick={closeViewer}
            aria-label="Close LearnUp case study and return to Work"
          >
            Close ×
          </button>
        </header>

        <div className="learnup-viewer-body">
          <aside className="learnup-sidebar">
            <div className="learnup-sidebar-top">
              <span className="lu-sidebar-title">CASE STUDY</span>
            </div>

            <nav className="learnup-sidebar-nav" aria-label="LearnUp chapter navigation">
              {chapters.map((chapter, index) => (
                <button
                  type="button"
                  key={chapter.key}
                  className={activeChapter === chapter.key ? "is-active" : ""}
                  aria-current={activeChapter === chapter.key ? "step" : undefined}
                  onClick={() => changeChapter(index)}
                >
                  <span className="nav-num">{number(index)}</span>
                  <span className="nav-label">{chapter.label}</span>
                </button>
              ))}
            </nav>

            <div className="learnup-sidebar-bottom">
              <span>{number(activeIndex)} / {number(chapters.length - 1)}</span>
            </div>
          </aside>

          <div className="learnup-content-pane" ref={chapterRef} tabIndex={-1}>
            {chapterContent[activeChapter]}

            <div className="lu-chapter-controls">
              {activeIndex > 0 ? (
                <button
                  type="button"
                  className="lu-ctrl-btn"
                  onClick={() => changeChapter(activeIndex - 1)}
                >
                  ← Previous: {chapters[activeIndex - 1].label}
                </button>
              ) : (
                <span />
              )}

              <span className="lu-chapter-count">
                {number(activeIndex)} / {number(chapters.length - 1)}
              </span>

              {activeIndex < chapters.length - 1 ? (
                <button
                  type="button"
                  className="lu-ctrl-btn"
                  onClick={() => changeChapter(activeIndex + 1)}
                >
                  Next: {chapters[activeIndex + 1].label} →
                </button>
              ) : (
                <div className="lu-closure-block">
                  <p className="lu-label">CASE STUDY COMPLETE</p>
                  <h3>From requirement to system behavior.</h3>
                  <div className="lu-inline-actions">
                    {evidenceLinks.documentation && (
                      <TextLink href={evidenceLinks.documentation}>
                        Full BA Documentation
                      </TextLink>
                    )}
                    {evidenceLinks.source && (
                      <TextLink href={evidenceLinks.source}>
                        Source Code Repository
                      </TextLink>
                    )}
                    <Link className="lu-back-link" to="/projects">
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
          <button
            type="button"
            onClick={() => setZoom(100)}
            aria-label="Fit diagram to viewer"
          >
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
