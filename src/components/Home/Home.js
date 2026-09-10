import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <p className="kicker">Portfolio / Business Analyst</p>
              <h1 className="heading">
                Business Analyst
                <span className="main-name"> Portfolio</span>
              </h1>

              <h1 className="heading-name">Lê Tuấn Anh</h1>

              <div className="type-wrap">
                <Type />
              </div>

              <p className="home-supporting-text">
                I translate business needs into clear requirements, process
                thinking, traceable evidence, and practical system decisions.
              </p>

              <div className="home-cta">
                <Link to="/project" className="primary-cta">
                  View case study
                </Link>
                <Link to="/about" className="secondary-cta">
                  About me
                </Link>
              </div>

              <div className="home-stats">
                <div>
                  <strong>3+</strong>
                  <span>Core BA focus areas</span>
                </div>
                <div>
                  <strong>1</strong>
                  <span>Featured case study</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Evidence-driven thinking</span>
                </div>
              </div>
            </Col>

            <Col md={5} className="home-visual-column">
              <div className="home-visual-card">
                <img
                  src={homeLogo}
                  alt="Portfolio illustration"
                  className="img-fluid"
                />
              </div>
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
