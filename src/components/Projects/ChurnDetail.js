import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";

const keyFindings = [
  "Customer churn was concentrated among contract users with low engagement",
  "High cancellation risk appeared early in the first 90 days",
  "Top churn drivers included product dissatisfaction and weak onboarding",
  "Retention improvements were strongest when proactive support and usage alerts were in place",
];

const analysisSteps = [
  "Business problem framing and KPI definition",
  "Exploratory data analysis on usage, payment, contract, and support events",
  "Customer segmentation and churn probability analysis",
  "Actionable retention recommendations backed by evidence",
];

const dashboardHighlights = [
  "Churn rate overview by segment",
  "Customer health score by cohort",
  "Renewal / cancellation pattern analysis",
  "Retention recommendation tracker",
];

const recommendations = [
  "Launch onboarding follow-up for new users in the first 30 days",
  "Create proactive retention workflows for high-risk customers",
  "Prioritize feature gaps identified in support incidents",
  "Use customer health scoring to guide account management",
];

function ChurnDetail() {
  return (
    <Container fluid className="project-section case-study-section">
      <Particle />
      <Container>
        <Row className="mb-4">
          <Col>
            <Button as={Link} to="/project" variant="primary" className="mb-3">
              ← Back to Projects
            </Button>
            <h1 className="project-heading">
              Customer Churn <strong className="purple">Analysis</strong>
            </h1>
            <p style={{ color: "white" }}>
              Data Analysis project focused on identifying churn patterns and
              retention opportunities.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6}>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Project Objective</Card.Title>
                <Card.Text>
                  This project aimed to understand why customers disengage,
                  which segments are most at risk, and what interventions could
                  improve retention.
                </Card.Text>
                <ul className="case-study-list">
                  {analysisSteps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Key Findings</Card.Title>
                <ul className="case-study-list">
                  {keyFindings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Dashboard Highlights</Card.Title>
                <div className="case-study-badges">
                  {dashboardHighlights.map((item) => (
                    <span key={item} className="ba-skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Recommendations</Card.Title>
                <ul className="case-study-list">
                  {recommendations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ChurnDetail;
