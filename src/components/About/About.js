import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";

const analysisApproach = [
  {
    title: "Context first",
    text: "I start by understanding the business problem, stakeholders, workflow pain points, and measurable outcomes before defining requirements.",
  },
  {
    title: "Requirements with traceability",
    text: "I translate business needs into clear requirements, use cases, rules, and testable acceptance criteria so the solution stays evidence-driven.",
  },
  {
    title: "Validation and feedback",
    text: "I review whether system behavior matches expectations, identify gaps early, and support process improvement through structured validation.",
  },
];

const technicalFoundation = [
  "Requirements Analysis",
  "Business Process Modeling",
  "UML / BPMN",
  "User Stories",
  "Acceptance Criteria",
  "Traceability Matrix",
  "SQL",
  "API Logic",
  "ERD",
  "System Validation",
  "Data-informed Decision Making",
];

const educationHighlights = [
  "Management Information Systems student at Ho Chi Minh City Open University",
  "Focused on Business Analysis, process thinking, and system design",
  "Interested in applying BA methods to real teams, product workflows, and digital systems",
];

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row className="about-hero align-items-center">
            <Col md={7} className="about-intro">
              <p className="kicker">About</p>
              <h1>
                I help turn business needs into clear, testable, and practical
                system outcomes.
              </h1>
              <p className="about-lead">
                I’m <span className="purple">Lê Tuấn Anh</span>, a Management
                Information Systems student with a strong interest in Business
                Analysis, requirements modeling, process thinking, and
                evidence-based system decisions.
              </p>
              <p className="about-lead">
                My focus is on bridging business context with technical
                execution — understanding what users need, documenting the logic
                clearly, and validating that the final system actually delivers
                the intended value.
              </p>
            </Col>
            <Col md={5} className="about-img">
              <img
                src={laptopImg}
                alt="Business analysis learning"
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="about-card-grid">
            {analysisApproach.map((item) => (
              <Col md={4} key={item.title} className="about-card-col">
                <div className="about-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="about-split align-items-start">
            <Col md={7} className="about-copy">
              <h2 className="project-heading">
                My <strong className="purple">direction</strong>
              </h2>
              <p>
                I enjoy working with ambiguity, turning discussions into
                structured requirements, and making complexity easier to
                understand for both business and technical stakeholders.
              </p>
              <p>
                The kinds of work I value most are requirement analysis, process
                evaluation, traceability, validation, and helping teams move
                from “what we need” to “what we can build and verify.”
              </p>

              <div className="ba-skillset">
                {[
                  "Requirements Analysis",
                  "Business Requirements",
                  "Functional Requirements",
                  "Business Rules",
                  "Use Cases",
                  "User Stories",
                  "Acceptance Criteria",
                  "Process Analysis",
                  "BPMN",
                  "UML",
                  "Traceability Matrix",
                  "UAT",
                  "Change Request",
                  "Impact Analysis",
                  "API Mapping",
                  "ERD",
                ].map((skill) => (
                  <span key={skill} className="ba-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </Col>

            <Col md={5} className="about-side-panel-col">
              <div className="about-side-panel">
                <p className="side-panel-label">Current focus</p>
                <h3>Business Analysis + System Thinking</h3>
                <ul>
                  {educationHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>

          <div className="about-foundation-block">
            <h2 className="project-heading">
              Technical <strong className="purple">foundation</strong>
            </h2>
            <div className="ba-skillset">
              {technicalFoundation.map((skill) => (
                <span key={skill} className="ba-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default About;
