import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

import resumeUrl from "../../Assets/LeTuanAnh_CV_BusinessAnalyst_Intern.pdf";

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
              <Button variant="primary" href={resumeUrl} download="LeTuanAnh_CV_BusinessAnalyst_Intern.pdf" style={{ marginLeft: "10px" }}>
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
