import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <p className="kicker">About me</p>
            <h1>
              I connect <span className="purple">business thinking</span> with
              practical <span className="purple">system outcomes</span>.
            </h1>
            <p className="home-about-body">
              I’m a Management Information Systems student at Ho Chi Minh City
              Open University, with a growing focus on Business Analysis,
              Requirements Analysis, and data-informed decision making.
              <br />
              <br />
              My work centers on understanding user and business needs,
              documenting clear requirements, validating process flows, and
              turning those findings into structured, testable system behavior.
              <br />
              <br />I also enjoy working with SQL, API logic, and system design
              so I can communicate effectively with both business stakeholders
              and technical teams.
            </p>
            <div className="home-focus-list">
              <span>Requirements analysis</span>
              <span>Process thinking</span>
              <span>Traceability</span>
              <span>Validation</span>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
