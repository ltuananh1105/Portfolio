# LearnUp presentation evidence

The LearnUp page is implemented in `src/components/Projects/LearnUpCaseStudy.js`.
All visual styles are scoped in its adjacent CSS file. No routes or global styles were changed.

## Copied original diagrams

These files were copied byte-for-byte from the read-only DoAn reference repository:

| Portfolio file in `diagrams/` | DoAn source under `ba-docs/09-diagrams/` |
| --- | --- |
| `course-creation-review.svg` | `business-process/course-creation-review.drawio.svg` |
| `student-enrollment.svg` | `activity/student-enrollment.drawio.svg` |
| `learnup-overall-use-case.svg` | `use-case/learnup-overall-use-case.drawio.svg` |
| `learnup-erd.svg` | `erd/learnup-erd.drawio.svg` |

Their labels and relationships have not been edited. The original `.drawio` sources have local changes in DoAn; these copies represent the existing SVG exports, not newly generated exports of those changed sources.

## Assets still needed

- `diagrams/learnup-system-flow.svg`: a verified export of the original overall system-flow diagram. Only a `.drawio` source was found; no replacement diagram was fabricated.
- `screenshots/teacher-course-management.png`
- `screenshots/admin-course-review.png`
- `screenshots/student-learning.png`
- `screenshots/ai-tutor.png`

Use real application captures. The teacher screenshot is also used as the cover visual once configured.
Create the screenshots directory when adding the captures. Import each asset in
`src/components/Projects/learnupEvidence.js` and replace the corresponding `src: null`
with that import. The same viewer then displays the image and enables expansion automatically.

## Links still needed

Set the three `evidenceLinks` values in `learnupEvidence.js` to verified public URLs:
`documentation`, `source`, and `rtm`. No LearnUp-specific URLs were configured in
the existing Portfolio project data. Until supplied, the actions are disabled and
explicitly labeled; they do not navigate to invented destinations.

## Factual boundaries

The supplied redesign brief and inspected DoAn BA/source evidence describe an academic
full-stack system with retrospective BA formalization. PASS labels report documented
local validation, not tests rerun during this presentation redesign. The payment
change is hypothetical. There are no claims of production deployment, client UAT,
external stakeholder interviews or commercial results.

The evidence includes `ba-docs/10-portfolio/case-study.md`, API and data-model mappings,
test scenarios, UAT-style scenarios, and the requirement traceability matrix. Source
inspection confirmed that course submission uses PUT; the presentation shows the
documented endpoint without an incorrect POST label.
