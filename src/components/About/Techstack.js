import React from "react";
import { Col, Row } from "react-bootstrap";
import SQL from "../../Assets/TechIcons/SQL.svg";
import PowerBI from "../../Assets/TechIcons/PowerBI.svg";
import Excel from "../../Assets/TechIcons/Excel.svg";
import Figma from "../../Assets/TechIcons/Figma.svg";
import Drawio from "../../Assets/TechIcons/Drawio.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import SpringBoot from "../../Assets/TechIcons/SpringBoot.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import CSharp from "../../Assets/TechIcons/CSharp.svg";
import HTML from "../../Assets/TechIcons/HTML.svg";
import CSS from "../../Assets/TechIcons/CSS.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PowerBI} alt="Power BI" />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Excel} alt="Excel" />
        <div className="tech-icons-text">Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Figma} alt="Figma" />
        <div className="tech-icons-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Drawio} alt="Draw.io" />
        <div className="tech-icons-text">Draw.io</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SpringBoot} alt="Spring Boot" />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSharp} alt="C#" />
        <div className="tech-icons-text">C#</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="HTML" />
        <div className="tech-icons-text">HTML/CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="CSS" />
        <div className="tech-icons-text">CSS</div>
      </Col>
    </Row>
  );
}

export default Techstack;
