import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

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
              My BA resume PDF is not included in this repository yet. Add the
              final resume file to <strong>src/Assets/</strong> and update this
              page to point to it.
            </p>
            <div className="resume-placeholder-actions">
              <Button variant="primary" disabled>
                <AiOutlineDownload />
                &nbsp;View Resume
              </Button>
              <Button variant="primary" disabled style={{ marginLeft: "10px" }}>
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
