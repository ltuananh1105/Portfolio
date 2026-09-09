import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> TUẤN ANH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              <p className="home-supporting-text">
                I turn business needs into structured requirements, workflows
                and technology solutions.
              </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Let's Connect</h1>
            <p>
              Open to{" "}
              <span className="purple">Business Analyst internship</span>{" "}
              opportunities in Ho Chi Minh City, Vietnam.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="tel:0889724016"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlinePhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ltuananh1111"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ltuananh1105/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
