import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const keyFindings = [
  {
    title: "First 6 Months Vulnerability",
    metric: "32.42% vs 16.84%",
    desc: "Customer churn was heavily concentrated among new users in their first 6 months, nearly double the overall baseline churn rate.",
  },
  {
    title: "Support Incident Impact",
    metric: "31.67% vs 10.93%",
    desc: "Customers who logged support complaints experienced a 31.67% churn rate compared to only 10.93% for non-complaining customers.",
  },
  {
    title: "Early Cancellation Window",
    metric: "First 90 Days",
    desc: "Cancellation risks spiked sharply during the first 90 days of account creation, highlighting a critical onboarding window.",
  },
  {
    title: "Proactive Alert Efficacy",
    metric: "Proactive Retention",
    desc: "Accounts with active usage tracking alerts and early intervention showed significantly higher long-term renewal rates.",
  },
];

const analysisSteps = [
  "Framed business problem around revenue retention and defined customer health KPIs.",
  "Engineered features across customer demographics, contract types, payment methods, and complaint histories using SQL.",
  "Evaluated cohort retention rates to isolate key behavioral drop-off triggers.",
  "Formulated evidence-backed retention strategies for high-risk segments.",
];

const recommendations = [
  "Launch structured onboarding outreach for new users within their first 30 days.",
  "Implement automated alert triggers for accounts logging customer complaints.",
  "Prioritize product resolution for top complaint categories driving churn.",
  "Incorporate customer health scores into account manager retention workflows.",
];

const dashboardHighlights = [
  "Churn Rate Overview & Segment Breakdown",
  "Customer Cohort Health Score Matrix",
  "Renewal & Cancellation Pattern Tracking",
  "Actionable Retention Strategy Tracker",
];

function ChurnDetail() {
  return (
    <main className="selected-work" style={{ paddingTop: "100px" }}>
      <div className="selected-work__shell">
        <nav aria-label="Breadcrumb" style={{ marginBottom: "24px" }}>
          <Link
            to="/projects"
            style={{
              color: "#6b5280",
              fontWeight: "600",
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            ← Back to Work
          </Link>
        </nav>

        <header className="selected-work__header">
          <p className="selected-work__eyebrow">02 / DATA ANALYSIS CASE STUDY</p>
          <h1>E-Commerce Customer Churn Analysis</h1>
          <p className="selected-work__lead">
            Empirical analysis of 5,600+ customer records to identify churn drivers, profile high-risk customer segments, and formulate targeted retention strategies.
          </p>
        </header>

        {/* Snapshot */}
        <section className="lu-case-section" style={{ padding: "32px 0", borderBottom: "1px solid #dcd7ce" }}>
          <p className="lu-eyebrow" style={{ color: "#6b5280", marginBottom: "12px" }}>PROJECT SNAPSHOT</p>
          <div className="lu-meta-grid" style={{ marginTop: "12px" }}>
            <div>
              <span className="lu-meta-label">DATASET</span>
              <strong>5,600+ Customer Records</strong>
            </div>
            <div>
              <span className="lu-meta-label">TYPE</span>
              <strong>Empirical Customer Analytics</strong>
            </div>
            <div>
              <span className="lu-meta-label">TOOLS</span>
              <strong>SQL · Power BI · Excel</strong>
            </div>
            <div>
              <span className="lu-meta-label">FOCUS</span>
              <strong>Cohort Churn &amp; Retention Modeling</strong>
            </div>
          </div>
        </section>

        {/* Business Question */}
        <section style={{ padding: "36px 0", borderBottom: "1px solid #dcd7ce" }}>
          <p className="lu-eyebrow" style={{ color: "#6b5280", marginBottom: "12px" }}>BUSINESS CONTEXT</p>
          <h2 style={{ fontSize: "1.5rem", color: "#111827", marginBottom: "12px" }}>Why Customers Disengage &amp; How to Retain Them</h2>
          <p className="lu-body-copy" style={{ color: "#374151", maxWidth: "760px" }}>
            In e-commerce, customer acquisition costs significantly exceed retention costs. This project evaluated customer disengagement patterns across account tenure, service complaints, contract structures, and payment behaviors to isolate actionable retention opportunities.
          </p>
        </section>

        {/* Analytical Approach */}
        <section style={{ padding: "36px 0", borderBottom: "1px solid #dcd7ce" }}>
          <p className="lu-eyebrow" style={{ color: "#6b5280", marginBottom: "12px" }}>ANALYSIS METHODOLOGY</p>
          <h2 style={{ fontSize: "1.5rem", color: "#111827", marginBottom: "16px" }}>Structured Data Workflow</h2>
          <ol style={{ paddingLeft: "20px", color: "#374151", lineHeight: "1.75" }}>
            {analysisSteps.map((step) => (
              <li key={step} style={{ marginBottom: "10px" }}>{step}</li>
            ))}
          </ol>
        </section>

        {/* Key Findings */}
        <section style={{ padding: "36px 0", borderBottom: "1px solid #dcd7ce" }}>
          <p className="lu-eyebrow" style={{ color: "#6b5280", marginBottom: "12px" }}>KEY FINDINGS</p>
          <h2 style={{ fontSize: "1.5rem", color: "#111827", marginBottom: "20px" }}>Empirical Insights &amp; Churn Drivers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "20px" }}>
            {keyFindings.map((finding) => (
              <article
                key={finding.title}
                style={{
                  padding: "20px",
                  border: "1px solid #dcd7ce",
                  borderRadius: "12px",
                  background: "#f8f7f3",
                }}
              >
                <span style={{ fontSize: "0.78rem", fontWeight: "700", color: "#6b5280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {finding.metric}
                </span>
                <h3 style={{ fontSize: "1.15rem", color: "#111827", margin: "8px 0" }}>{finding.title}</h3>
                <p style={{ fontSize: "0.92rem", color: "#4b5563", margin: 0, lineHeight: "1.6" }}>{finding.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Recommendations */}
        <section style={{ padding: "36px 0", borderBottom: "1px solid #dcd7ce" }}>
          <p className="lu-eyebrow" style={{ color: "#6b5280", marginBottom: "12px" }}>RECOMMENDATIONS</p>
          <h2 style={{ fontSize: "1.5rem", color: "#111827", marginBottom: "16px" }}>Targeted Retention Actions</h2>
          <ul style={{ paddingLeft: "20px", color: "#374151", lineHeight: "1.75" }}>
            {recommendations.map((item) => (
              <li key={item} style={{ marginBottom: "10px" }}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Dashboard Highlights & Source */}
        <section style={{ padding: "36px 0" }}>
          <p className="lu-eyebrow" style={{ color: "#6b5280", marginBottom: "12px" }}>EVIDENCE &amp; DASHBOARD</p>
          <h2 style={{ fontSize: "1.5rem", color: "#111827", marginBottom: "16px" }}>Dashboard Modules &amp; GitHub Source</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
            {dashboardHighlights.map((highlight) => (
              <span
                key={highlight}
                style={{
                  padding: "6px 12px",
                  borderRadius: "20px",
                  background: "#ede9e2",
                  color: "#374151",
                  fontSize: "0.84rem",
                  fontWeight: "600",
                }}
              >
                {highlight}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a
              href="https://github.com/ltuananh1105/Ecommerce-Customer-Churn-Analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="work-item__primary-link"
            >
              View Analysis Source on GitHub <span aria-hidden="true">↗</span>
            </a>
            <Link to="/projects" className="work-item__secondary-link">
              ← Back to Work
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ChurnDetail;
