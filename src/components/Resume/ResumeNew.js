import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

const resumeUrl = "https://drive.google.com/file/d/1jix8lDG4xTVP9HmcZIZRuW42iJ_d0p5D/view?usp=sharing";
const resumeDownloadUrl = "https://drive.google.com/uc?export=download&id=1jix8lDG4xTVP9HmcZIZRuW42iJ_d0p5D";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={8} className="resume-placeholder-card">
            <h1 className="project-heading">
              <strong className="purple">Resume</strong>
            </h1>
            <p>
              Explore my background, skills, and academic projects in my
              Business Analyst resume.
            </p>
            <div className="resume-placeholder-actions">
              <Button variant="primary" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <AiOutlineDownload />
                &nbsp;View Resume
              </Button>
              <Button variant="primary" href={resumeDownloadUrl} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px" }}>
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
