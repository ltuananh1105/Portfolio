import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    id: "learnup",
    number: "01",
    title: "LearnUp",
    type: "Business Analysis Case Study",
    focus: "Requirements Analysis · Process Modeling · Draw.io · SQL · REST API",
    description: "Academic English-learning platform analyzed as a structured Business Analysis case study.",
    highlights: [
      "Analyzed a 3-role system across 9 Use Cases covering course management, enrollment, learning, assessment, and administration.",
      "Structured 8 Functional Requirements, 6 Non-Functional Requirements, 7 Business Rules, 10 User Stories, and 18 Acceptance Criteria.",
      "Built process and system models, requirement traceability, and validation scenarios to compare implemented behavior against documented rules and acceptance expectations.",
    ],
    note: "Academic project · Formalized retrospectively as a BA case study",
    cta: "View Case Study",
    route: "/projects/learnup",
    github: "https://github.com/ltuananh1105/DoAn",
  },
  {
    id: "customer-churn",
    number: "02",
    title: "E-Commerce Customer Churn & Retention Analysis",
    type: "Data Analysis Case Study",
    focus: "SQL · Power BI · Customer Analytics",
    highlights: [
      "Analyzed 5,600+ customer records using SQL cleaning, feature engineering, and exploratory analysis.",
      "Identified 32.42% churn among customers in their first 6 months compared with the 16.84% overall baseline.",
      "Found customers with complaints had a 31.67% churn rate versus 10.93% for customers without complaints, supporting targeted retention recommendations.",
    ],
    cta: "View Analysis",
    route: "/projects/customer-churn",
    github: "https://github.com/ltuananh1105/Ecommerce-Customer-Churn-Analysis",
  },
];

function Projects() {
  return (
    <main className="selected-work">
      <div className="selected-work__shell">
        <header className="selected-work__intro">
          <p className="selected-work__eyebrow">Work</p>
          <h1>Selected Work</h1>
          <p className="selected-work__summary">
            Business analysis and data analysis projects focused on requirements,
            systems, processes, and evidence-based decision making.
          </p>
        </header>
        <div className="selected-work__projects">
          {projects.map((project) => (
            <article className="work-entry" key={project.id} aria-labelledby={`${project.id}-title`}>
              <div className="work-entry__identity">
                <p className="work-entry__number">Project {project.number}</p>
                <h2 id={`${project.id}-title`}>{project.title}</h2>
                <p className="work-entry__type">{project.type}</p>
                <p className="work-entry__focus">{project.focus}</p>
              </div>
              <div className="work-entry__content">
                {project.description && <p className="work-entry__description">{project.description}</p>}
                <ul className="work-entry__highlights">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                {project.note && <p className="work-entry__note">{project.note}</p>}
                <div className="work-entry__actions">
                  <Link className="work-entry__primary" to={project.route}>
                    {project.cta} <span aria-hidden="true">→</span>
                  </Link>
                  <a className="work-entry__github" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub (opens in a new tab)`}>
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
