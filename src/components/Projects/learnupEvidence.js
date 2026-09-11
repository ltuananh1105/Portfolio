import courseReview from "../../Assets/learnup/diagrams/course-creation-review.svg";
import enrollment from "../../Assets/learnup/diagrams/student-enrollment.svg";
import useCase from "../../Assets/learnup/diagrams/learnup-overall-use-case.svg";
import erd from "../../Assets/learnup/diagrams/learnup-erd.svg";

// Import verified replacement assets here; null renders an explicit placeholder.
export const evidenceLinks = {
  documentation: "https://github.com/ltuananh1105/DoAn/tree/main/ba-docs",
  source: "https://github.com/ltuananh1105/DoAn",
  rtm: "https://github.com/ltuananh1105/DoAn/blob/main/ba-docs/07-testing-validation/requirement-traceability-matrix.md",
  apiMapping: "https://github.com/ltuananh1105/DoAn/blob/main/ba-docs/06-system-analysis/api-mapping.md",
  securityConfig: "https://github.com/ltuananh1105/DoAn/blob/main/backend/src/main/java/com/learnup/backend/security/SecurityConfig.java",
  courseController: "https://github.com/ltuananh1105/DoAn/blob/main/backend/src/main/java/com/learnup/backend/CourseController.java",
  enrollmentEntity: "https://github.com/ltuananh1105/DoAn/blob/main/backend/src/main/java/com/learnup/backend/entity/Enrollment.java",
  aiController: "https://github.com/ltuananh1105/DoAn/blob/main/backend/src/main/java/com/learnup/backend/AiController.java"
};
export const diagrams = {
  courseReview: { src: courseReview, title: "Course Creation & Review", type: "Process diagram" },
  enrollment: { src: enrollment, title: "Student Enrollment", type: "Activity Diagram" },
  useCase: { src: useCase, title: "LearnUp Overall Use Case", type: "Use Case Diagram" },
  erd: { src: erd, title: "LearnUp ERD", type: "Entity Relationship Diagram" },
  systemFlow: { src: null, title: "LearnUp Overall System Flow", type: "System Flow Diagram" },
};
export const screenshots = [
  { src: null, title: "Teacher Course Management", id: "FR-04 / FR-05", file: "teacher-course-management.png", caption: "Create course content and submit it for administrative review." },
  { src: null, title: "Admin Course Review", id: "FR-06", file: "admin-course-review.png", caption: "Review submitted courses, then approve or reject with a reason." },
  { src: null, title: "Student Learning / Progress", id: "FR-03", file: "student-learning.png", caption: "Access learning content and track lesson completion." },
  { src: null, title: "AI Tutor", id: "FR-08", file: "ai-tutor.png", caption: "Receive AI-assisted learning support through Gemini integration." },
];

