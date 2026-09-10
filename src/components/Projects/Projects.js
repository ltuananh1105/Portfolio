import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import learnupPlaceholder from "../../Assets/Projects/learnup-placeholder.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-shell">
        <div className="project-intro">
          <p className="kicker">Featured work</p>
          <h1 className="project-heading">
            Case study <strong className="purple">LearnUp</strong>
          </h1>
          <p className="project-summary">
            This portfolio currently highlights one primary academic case study
            focused on business analysis, system reasoning, traceability, and
            validation.
          </p>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={learnupPlaceholder}
              isBlog={false}
              title="LearnUp"
              description="Academic full-stack English learning platform covering course publishing, enrollment, assessment, progress tracking, and AI-assisted learning."
              tags={[
                "Business Analysis",
                "System Analysis",
                "Requirements Analysis",
                "React",
                "Spring Boot",
                "SQL Server",
                "Gemini API",
              ]}
              caseStudyLink="/projects/learnup"
              featured={true}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
