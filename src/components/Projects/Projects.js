import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import learnupPlaceholder from "../../Assets/Projects/learnup-placeholder.svg";
import churnPlaceholder from "../../Assets/Projects/churn-analytics.svg";
import belandPlaceholder from "../../Assets/Projects/beland-placeholder.svg";
import universityPlaceholder from "../../Assets/Projects/university-website.svg";
import milkTeaPlaceholder from "../../Assets/Projects/milk-tea-management.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          A portfolio of academic and applied projects focused on business
          analysis, system design, data analysis and software development.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learnupPlaceholder}
              isBlog={false}
              title="LearnUp"
              description="Academic full-stack English learning platform covering course publishing, enrollment, assessment, progress tracking and AI-assisted learning."
              tags={[
                "Business Analysis",
                "System Analysis",
                "Requirements Analysis",
                "React",
                "Spring Boot",
                "SQL Server",
                "Gemini API",
              ]}
              caseStudyLink="/projects/learnup"
              featured={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churnPlaceholder}
              isBlog={false}
              title="E-Commerce Customer Churn Analysis"
              description="Analyzed 5,630 e-commerce customers using SQL to identify high-risk churn segments and translate behavioral patterns into retention priorities."
              tags={[
                "SQL",
                "Customer Segmentation",
                "Churn Analysis",
                "Business Insight",
                "Power BI",
              ]}
              caseStudyLink="/projects/customer-churn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={belandPlaceholder}
              isBlog={false}
              title="BeLand"
              description="Rental management system study focused on room information, contract flows, payment workflows and UI design for a student project."
              tags={[
                "System Analysis",
                "Requirements",
                "ERD",
                "Use Case",
                "Figma",
                "HTML/CSS",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={universityPlaceholder}
              isBlog={false}
              title="University Website"
              description="Responsive university website implemented from Figma as a team web design project with structured content and mobile-friendly layouts."
              tags={[
                "Figma",
                "HTML",
                "Tailwind CSS",
                "JavaScript",
                "Responsive Design",
                "Git",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={milkTeaPlaceholder}
              isBlog={false}
              title="Milk Tea Management System"
              description="Desktop management application built with C# WinForms and SQL Server using a layered architecture for basic business operations."
              tags={["C#", "WinForms", "SQL Server", "Database Design"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
