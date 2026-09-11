import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Contact from "../Contact";
import Home2 from "./Home2";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">

        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <p className="kicker">Business Analysis / Information Systems</p>
              <h1 className="heading">
                Business analysis
                <span className="main-name"> meets system thinking.</span>
              </h1>

              <h1 className="heading-name">Lê Tuấn Anh</h1>

              <div className="type-wrap">
                <span>Business Analysis · MIS Student</span>
              </div>

              <p className="home-supporting-text">
                I turn business and system needs into structured processes,
                requirements, and practical system solutions.
              </p>

              <div className="home-cta">
                <Link to="/projects" className="primary-cta">
                  Explore Selected Work →
                </Link>
                <Link to="/about" className="secondary-cta">
                  About me
                </Link>
              </div>

              <div className="home-meta">
                <span>Management Information Systems</span>
                <span>Ho Chi Minh City Open University</span>
                <span>2023 — 2027</span>
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

      <Contact />
    </section>
  );
}

export default Home;
