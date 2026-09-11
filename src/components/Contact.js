import React from "react";
import { FiArrowUpRight, FiArrowRight, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import "./Contact.css";

const methods = [
  { label: "Email", value: "ltuananh1105@gmail.com", href: "mailto:ltuananh1105@gmail.com", Icon: FiMail },
  { label: "Phone", value: "0889 724 016", href: "tel:0889724016", Icon: FiPhone },
  { label: "GitHub", value: "github.com/ltuananh1105", href: "https://github.com/ltuananh1105", Icon: FaGithub, external: true },
];

export default function Contact() {
  return (
    <main className="editorial-page contact-page">
      <div className="editorial-shell contact-shell">
        <header className="contact-heading">
          <span className="contact-heading-icon" aria-hidden="true"><FiMail /></span>
          <p className="editorial-eyebrow">Contact</p>
          <h1>Let’s <span>connect.</span></h1>
          <p className="contact-intro">I’m currently looking for internship opportunities in Business Analysis and closely related software roles.</p>
          <p className="contact-location"><FiMapPin aria-hidden="true" /> Ho Chi Minh City, Vietnam</p>
          <div className="editorial-actions">
            <a className="editorial-button" href="mailto:ltuananh1105@gmail.com"><FiMail aria-hidden="true" /> Email Me <FiArrowRight aria-hidden="true" /></a>
          </div>
        </header>
        <section className="contact-methods" aria-label="Contact details">
          {methods.map(({ label, value, href, Icon, external }) => (
            <a className="contact-method" key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
              <span className="contact-method-icon"><Icon aria-hidden="true" /></span>
              <span className="contact-method-copy"><span className="contact-method-label">{label}</span><span className="contact-method-value">{value}</span></span>
              <FiArrowUpRight className="contact-method-arrow" aria-hidden="true" />
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
