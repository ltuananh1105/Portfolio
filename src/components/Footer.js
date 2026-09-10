import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md="4" className="footer-copywright">
          <h3>Lê Tuấn Anh © {year}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Business Analyst | MIS Student</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="tel:0889724016"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlinePhone />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/ltuananh1111"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ltuananh1105/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
