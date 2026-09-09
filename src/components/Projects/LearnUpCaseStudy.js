import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";

const overviewBullets = [
  "Academic full-stack English learning platform",
  "Business Analysis and System Analysis case study",
  "Structured requirements, workflows, API mapping, validation and change analysis",
];

const businessAnalysisItems = [
  "Business Context",
  "Problem & Objectives",
  "Stakeholder Analysis",
  "Scope Definition",
  "AS-IS limitations",
  "TO-BE process design",
];

const requirements = [
  "BRQ-01 Course Lifecycle",
  "BRQ-02 Discovery & Enrollment",
  "BRQ-03 Learning & Assessment",
  "BRQ-04 Progress & Results",
  "BRQ-05 Platform Administration",
  "BRQ-06 AI-assisted Learning",
];

const useCases = [
  "UC-01 Authenticate User",
  "UC-02 Create & Manage Course",
  "UC-03 Submit Course for Review",
  "UC-04 Review Course",
  "UC-05 Enroll in Course",
  "UC-06 Learn & Track Progress",
  "UC-07 Complete Quiz",
  "UC-08 Use AI Tutor",
  "UC-09 Manage Platform Data",
];

const validationItems = [
  "Published Course Filtering — PASS",
  "Duplicate Enrollment — PASS",
  "Progress Update — PASS",
  "Teacher Ownership Protection — PASS",
  "Invalid Course Submission — PASS",
  "Unauthorized Course Review — PASS",
  "AI Failure Handling — PASS",
];

const technicalStack = [
  "React",
  "Spring Boot",
  "SQL Server",
  "JWT",
  "Gemini API",
  "Draw.io",
  "Figma",
  "Git",
  "GitHub",
];

const traceabilityRows = [
  {
    business: "BRQ-01 Course Lifecycle",
    requirement: "FR-05 Course Submission",
    useCase: "UC-03 Submit Course for Review",
    userStory: "US-02 Submit Course",
    acceptance: "Valid course submission moves Course to Pending",
    api: "POST /api/courses/{id}/submit",
    test: "Invalid submission remains Draft",
  },
  {
    business: "BRQ-02 Discovery & Enrollment",
    requirement: "FR-02 Student Enrollment",
    useCase: "UC-05 Enroll in Course",
    userStory: "US-05 Enroll in Course",
    acceptance: "Students can enroll only once per public course",
    api: "POST /api/courses/{id}/enroll",
    test: "Duplicate enrollment is blocked",
  },
];

function LearnUpCaseStudy() {
  return (
    <Container fluid className="project-section case-study-section">
      <Particle />
      <Container>
        <Row className="mb-4">
          <Col>
            <Button as={Link} to="/project" variant="primary" className="mb-3">
              ← Back to Projects
            </Button>
            <h1 className="project-heading">
              LearnUp <strong className="purple">Case Study</strong>
            </h1>
            <p style={{ color: "white" }}>
              English Learning Platform • Business Analysis & System Analysis
              Case Study
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Overview</Card.Title>
                <Card.Text>
                  LearnUp is an academic full-stack project that demonstrates
                  how business needs can be translated into structured
                  requirements, workflows, interfaces, data models, and system
                  validation.
                </Card.Text>
                <ul className="case-study-list">
                  {overviewBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>System Challenge</Card.Title>
                <Card.Text>
                  The project was designed to support multiple user roles and a
                  structured course lifecycle while keeping business rules,
                  approval flows, and data integrity clear across the system.
                </Card.Text>
                <ul className="case-study-list">
                  <li>Guest, Student, Teacher, and Admin actors</li>
                  <li>Course publishing and review workflow</li>
                  <li>
                    Learning progress, assessment, and AI-assisted support
                  </li>
                  <li>Platform administration and ownership protection</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h3 className="case-study-section-title">Business Analysis</h3>
            <div className="case-study-badges">
              {businessAnalysisItems.map((item) => (
                <span key={item} className="ba-skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="mt-4 g-4">
          <Col md={6}>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Requirements</Card.Title>
                <ul className="case-study-list">
                  {requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Business Process</Card.Title>
                <Card.Text>
                  Course lifecycle: Draft → Submit → Validation → Pending →
                  Admin Review → Approve / Reject → Published / Rejected.
                </Card.Text>
                <ul className="case-study-list">
                  <li>Teacher creates course in Draft state</li>
                  <li>Teacher submits course for review</li>
                  <li>Admin approves or rejects with reason</li>
                  <li>Rejected course returns to Draft for revision</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h3 className="case-study-section-title">Use Case Analysis</h3>
            <div className="case-study-badges">
              {useCases.map((item) => (
                <span key={item} className="ba-skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Requirement Traceability</Card.Title>
                <div className="traceability-table">
                  {traceabilityRows.map((row) => (
                    <div className="traceability-row" key={row.business}>
                      <div>
                        <strong>Business:</strong> {row.business}
                      </div>
                      <div>
                        <strong>FR:</strong> {row.requirement}
                      </div>
                      <div>
                        <strong>UC:</strong> {row.useCase}
                      </div>
                      <div>
                        <strong>User Story:</strong> {row.userStory}
                      </div>
                      <div>
                        <strong>Acceptance:</strong> {row.acceptance}
                      </div>
                      <div>
                        <strong>API:</strong> {row.api}
                      </div>
                      <div>
                        <strong>Test:</strong> {row.test}
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4 g-4">
          <Col md={6}>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Data Model / ERD</Card.Title>
                <Card.Text>
                  The project included entity relationships for users, courses,
                  chapters, lessons, quizzes, enrollments, payments, progress,
                  reviews, and AI interactions.
                </Card.Text>
                <ul className="case-study-list">
                  <li>User, Course, Enrollment, Review</li>
                  <li>Lesson, Quiz, Question, Quiz Result</li>
                  <li>Payment, Progress, AI Tutor Request</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>System Flow</Card.Title>
                <Card.Text>
                  The system flow connects authentication, course discovery,
                  enrollment, learning, assessments, approval, and admin review
                  into one coherent academic platform experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h3 className="case-study-section-title">Testing & Validation</h3>
            <div className="case-study-badges">
              {validationItems.map((item) => (
                <span key={item} className="ba-skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Change Analysis</Card.Title>
                <Card.Text>
                  CR-EX-01: Replace simulated payment with a real payment
                  gateway. This example was used to demonstrate impact analysis
                  on enrollment, payment APIs, security, data model, and
                  testing.
                </Card.Text>
                <ul className="case-study-list">
                  <li>Potential changes in FR-02, UC-05, US-05</li>
                  <li>Impact on Enrollment Process, Orders and Payment APIs</li>
                  <li>
                    Additional validation for security, data consistency and
                    user flows
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h3 className="case-study-section-title">Technical Stack</h3>
            <div className="case-study-badges">
              {technicalStack.map((item) => (
                <span key={item} className="ba-skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default LearnUpCaseStudy;
