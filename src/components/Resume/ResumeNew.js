import React from "react";
import resumeUrl from "../../Assets/LeTuanAnh_CV_BusinessAnalyst_Intern.pdf";
export default function ResumeNew() {
 return <main className="editorial-page resume-composition"><div className="editorial-shell editorial-narrow"><header className="editorial-intro"><p className="editorial-eyebrow">Resume</p><h1>Business Analyst Resume</h1><p>Management Information Systems student focused on requirements, process analysis, system validation, and technical collaboration.</p></header><div className="editorial-actions"><a className="editorial-button" href={resumeUrl} target="_blank" rel="noopener noreferrer">View Resume ↗</a><a href={resumeUrl} download="LeTuanAnh_CV_BusinessAnalyst_Intern.pdf">Download PDF ↓</a></div><dl className="resume-facts"><div><dt>Focus</dt><dd>Business Analysis</dd></div><div><dt>Education</dt><dd>Management Information Systems</dd></div><div><dt>Location</dt><dd>Ho Chi Minh City</dd></div></dl></div></main>;
}
