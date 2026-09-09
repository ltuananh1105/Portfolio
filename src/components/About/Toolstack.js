import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import ssms from "../../Assets/TechIcons/SSMS.svg";
import postman from "../../Assets/TechIcons/Postman.svg";
import figma from "../../Assets/TechIcons/Figma.svg";
import drawio from "../../Assets/TechIcons/Drawio.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={vsCode}
          alt="Visual Studio Code"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img
          src={ssms}
          alt="SQL Server Management Studio"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">SSMS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={figma} alt="Figma" className="tech-icon-images" />
        <div className="tech-icons-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={drawio} alt="Draw.io" className="tech-icon-images" />
        <div className="tech-icons-text">Draw.io</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
