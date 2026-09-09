import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        GitHub <strong className="purple">Profile</strong>
      </h1>
      <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        I use GitHub to store and share coursework, system analysis artifacts,
        and technical experiments related to my Business Analyst and MIS
        learning path.
      </p>
    </Row>
  );
}

export default Github;
