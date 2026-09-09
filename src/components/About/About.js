import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                KNOW WHO <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Business Analysis</strong> Skillset
          </h1>

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

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </>
  );
}

export default About;
