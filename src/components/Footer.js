import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

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
              <a href="mailto:ltuananh1105@gmail.com" className="icon-colour" aria-label="Email LE TUAN ANH at ltuananh1105@gmail.com">
                <AiOutlineMail aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://github.com/ltuananh1105" className="icon-colour" target="_blank" rel="noopener noreferrer" aria-label="LE TUAN ANH on GitHub">
                <FaGithub aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:0889724016"
                className="icon-colour"
                aria-label="Call LE TUAN ANH at 0889 724 016"
              >
                <AiOutlinePhone />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
