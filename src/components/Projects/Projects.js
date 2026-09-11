import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    id: "learnup",
    number: "01",
    title: "LearnUp",
    subtitle: "Course Lifecycle & Learning Management",
    type: "Business Analysis Case Study",
    focus: "Requirements Analysis · Process Modeling · SQL · REST API",
    highlights: [
      "Analyzed a 3-role system across 9 Use Cases covering course management, enrollment, learning, assessment, and administration.",
      "Formalized 8 Functional Requirements, 6 Non-Functional Requirements, 7 Business Rules, 10 User Stories, and 18 Acceptance Criteria.",
      "Built process workflows, traceability matrix, and validation scenarios to evaluate implemented behavior against business rules.",
    ],
    note: "Academic project · Formalized retrospectively as a BA case study",
    cta: "View Case Study",
    route: "/projects/learnup",
    github: "https://github.com/ltuananh1105/DoAn",
  },
  {
    id: "customer-churn",
    number: "02",
    title: "E-Commerce Customer Churn Analysis",
    subtitle: "Customer Retention & Behavioral Profiling",
    type: "Data Analysis Case Study",
    focus: "SQL · Power BI · Customer Analytics",
    highlights: [
      "Analyzed 5,600+ customer records using SQL data cleaning, feature engineering, and exploratory cohort analysis.",
      "Identified 32.42% churn among customers in their first 6 months compared with the 16.84% overall baseline.",
      "Found customers with complaints had a 31.67% churn rate versus 10.93% for non-complainants, supporting targeted retention recommendations.",
    ],
    note: "Data Analytics project · Empirical dataset & retention modeling",
    cta: "View Analysis",
    route: "/projects/customer-churn",
    github: "https://github.com/ltuananh1105/Ecommerce-Customer-Churn-Analysis",
  },
];

function Projects() {
  return (
    <main className="selected-work">
      <div className="selected-work__shell">
        <header className="selected-work__header">
          <p className="selected-work__eyebrow">WORK</p>
          <h1>Selected Work</h1>
          <p className="selected-work__lead">
            Business analysis and data analytics case studies structured around business goals, requirements, process modeling, and empirical validation.
          </p>
        </header>

        <div className="selected-work__list">
          {projects.map((project) => (
            <article
              className="work-item"
              key={project.id}
              aria-labelledby={`${project.id}-title`}
            >
              <div className="work-item__meta">
                <span className="work-item__number">{project.number}</span>
                <span className="work-item__type">{project.type}</span>
              </div>

              <div className="work-item__header">
                <h2 id={`${project.id}-title`}>{project.title}</h2>
                <p className="work-item__subtitle">{project.subtitle}</p>
                <p className="work-item__focus">{project.focus}</p>
              </div>

              <div className="work-item__body">
                <ul className="work-item__highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <footer className="work-item__footer">
                <div className="work-item__actions">
                  <Link className="work-item__primary-link" to={project.route}>
                    {project.cta} <span aria-hidden="true">→</span>
                  </Link>
                  <a
                    className="work-item__secondary-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub (opens in a new tab)`}
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <span className="work-item__note">{project.note}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
