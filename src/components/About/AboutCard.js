import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Lê Tuấn Anh</span> from Vietnam.
            <br />
            I'm currently studying{" "}
            <span className="purple">
              Management Information Systems
            </span> at{" "}
            <span className="purple">Ho Chi Minh City Open University</span>.
            <br />
            My main career direction is{" "}
            <span className="purple">Business Analysis</span>.
            <br />
            <br />
            I am particularly interested in understanding how business
            requirements are translated into workflows, system functions, APIs,
            databases and working software.
            <br />
            <br />
            Outside of academic work, I also enjoy exploring data analysis and
            software development.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Business Context Analysis
            </li>
            <li className="about-activity">
              <ImPointRight /> Requirement Modelling and Validation
            </li>
            <li className="about-activity">
              <ImPointRight /> Data and System Analysis
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
