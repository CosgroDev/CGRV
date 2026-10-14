import type { Metadata } from "next";
import { PrintCVButton } from "@/components/print-cv-button";
export const metadata: Metadata = {
  title: "CV | Dale Cosgrove",
  description:
    "Food safety, quality, supply chain and digital systems experience.",
};
const experience = [
  {
    role: "Quality Performance & Projects Manager",
    company: "Fox's Burton's Companies (FBC UK)",
    period: "Sep 2025 – Present",
    location: "Batley, England, UK",
    type: "Full-time",
    description:
      "Leading quality performance and project delivery across FBC UK, one of the UK's largest biscuit manufacturers. Responsible for driving operational improvement through structured project management, data-led performance tracking, and cross-functional collaboration.",
    achievements: [
      "Driving quality KPI performance through Microsoft Power BI dashboards and data visualisation",
      "Managing cross-functional improvement projects spanning quality, safety, and operational efficiency",
      "Developing project management frameworks suited to the food manufacturing environment",
      "Facilitating audit readiness, compliance initiatives, and ways-of-working improvements",
    ],
    tags: ["Project Management", "Power BI"],
  },
  {
    role: "Supply Chain Technical Lead",
    company: "Fox's Burton's Companies (FBC UK)",
    period: "Apr 2021 – Sep 2025",
    location: "Batley, England, UK",
    type: "Full-time",
    description:
      "Technical lead for supply chain operations, bridging food safety, quality systems, and digital tooling. Championed low-code development solutions and SharePoint-based systems to modernise supplier and ingredient management processes.",
    achievements: [
      "Built and deployed low-code tools via Microsoft Power Apps to streamline supply chain workflows",
      "Managed SharePoint Online environments for supplier documentation and technical data",
      "Led supplier assurance and raw material technical compliance programmes",
      "Drove digitalisation of supply chain quality documentation, reducing manual workload",
    ],
    tags: ["SharePoint Online", "Low-Code Development", "Supply Chain"],
  },
  {
    role: "Quality Assurance Manager",
    company: "Fox's Biscuits",
    period: "Aug 2020 – Apr 2021",
    location: "Batley, England, UK",
    type: "Full-time",
    description:
      "Managed the quality assurance function at site level, overseeing food safety systems, audit programmes, and compliance against BRC and customer standards within a high-volume biscuit manufacturing environment.",
    achievements: [
      "Maintained and improved HACCP plans and food safety management systems",
      "Managed internal and third-party audit schedules and outcomes",
      "Led non-conformance investigations and drove corrective action programmes",
      "Delivered quality and food safety training to production and technical teams",
    ],
    tags: ["Quality Assurance", "Risk Assessment"],
  },
  {
    role: "Raw Materials Manager",
    company: "Fox's Biscuits",
    period: "Mar 2020 – Apr 2021",
    location: "Batley, England, UK",
    type: "Full-time",
    description:
      "Responsible for the technical management of raw materials across site, ensuring ingredient compliance, allergen controls, and supplier assurance in line with BRC and customer requirements.",
    achievements: [
      "Managed raw material specifications, approvals, and supplier technical documentation",
      "Maintained allergen controls and ingredient risk assessments",
      "Coordinated with procurement and production to resolve raw material quality issues",
    ],
    tags: ["Allergens", "Risk Assessment"],
  },
  {
    role: "Technical Assistant",
    company: "Yorkshire Premier Meat",
    period: "Mar 2015 – Mar 2020",
    location: "South Kirkby, West Yorkshire, UK",
    type: "Full-time",
    description:
      "Provided technical support across food safety, quality control, and compliance functions within a meat processing operation. Developed expertise in HACCP, food microbiology, and regulatory compliance.",
    achievements: [
      "Supported HACCP development and review processes across the site",
      "Conducted microbiological and environmental monitoring programmes",
      "Assisted with BRC and customer audits, delivering positive outcomes",
      "Risk assessed processes and raw materials to maintain food safety standards",
    ],
    tags: ["Food Microbiology", "HACCP", "Risk Assessment"],
  },
  {
    role: "Quality Control",
    company: "Yorkshire Premier Meat",
    period: "Jul 2013 – Mar 2015",
    location: "South Kirkby, West Yorkshire, UK",
    type: "Full-time",
    description:
      "Carried out quality control checks across production to ensure product met specification, legal, and customer requirements within a meat processing environment.",
    achievements: [
      "Performed product checks, weight monitoring, and label verification",
      "Identified and escalated non-conforming product in line with site procedures",
      "Supported food safety and hygiene standards on the production floor",
    ],
    tags: ["Quality Control", "Food Safety"],
  },
  {
    role: "Despatch Operative",
    company: "Yorkshire Premier Meat",
    period: "May 2011 – Jul 2013",
    location: "South Kirkby, West Yorkshire, UK",
    type: "Full-time",
    description:
      "Managed outbound logistics and despatch operations within a chilled food manufacturing environment.",
    achievements: [
      "Coordinated order picking, loading, and despatch of chilled products",
      "Maintained cold chain integrity and traceability documentation",
    ],
    tags: ["Logistics", "Food Manufacturing"],
  },
  {
    role: "Drivers Mate",
    company: "DHL",
    period: "Jun 2009 – Sep 2009",
    location: "Normanton, West Yorkshire, UK",
    type: "Temporary",
    description:
      "Supported delivery operations as drivers mate for a national logistics provider.",
    achievements: [
      "Assisted with delivery of parcels and goods across regional routes",
      "Maintained accurate delivery documentation and customer receipts",
    ],
    tags: ["Logistics"],
  },
];

const certifications = [
  {
    qualification: "Food Safety Level 4",
    institution: "Highfield",
    year: "Jul 2021",
    type: "Distinction",
    color: "green" as const,
  },
  {
    qualification: "BRCGS Lead Auditor",
    institution: "BRCGS",
    year: "Feb 2021",
    type: "Certification",
    color: "yellow" as const,
  },
  {
    qualification: "HACCP Level 4",
    institution: "Highfield",
    year: "Nov 2020",
    type: "Certification",
    color: "yellow" as const,
  },
];

const formalEducation = [
  {
    qualification: "Commercial Business & Photography",
    institution: "Wakefield College (Leeds Met Campus)",
    period: "2009 – 2011",
  },
  {
    qualification:
      "BTEC National Diploma: Art & Design, Photography, Graphics & Fine Art",
    institution: "Barnsley College",
    period: "2007 – 2009",
  },
];

const skillGroups = [
  {
    category: "Industry Knowledge",
    skills: [
      "Food Manufacturing",
      "Food Safety Management",
      "HACCP",
      "Food Microbiology",
      "Allergen Controls",
      "Food Science",
      "Food Technology",
      "Meat Processing",
      "Dairy Products",
    ],
  },
  {
    category: "Quality & Compliance",
    skills: [
      "BRCGS Standards",
      "Lead Auditing",
      "Quality Assurance",
      "Quality Control",
      "Regulatory Compliance",
      "Risk Assessment",
      "Root Cause Analysis",
      "Supplier Assurance",
    ],
  },
  {
    category: "Leadership & Management",
    skills: [
      "Project Management",
      "Process Improvement",
      "Continuous Improvement",
      "Stakeholder Management",
      "KPI Development",
      "Training & Development",
      "Change Management",
    ],
  },
  {
    category: "Technology & Data",
    skills: [
      "Microsoft Power BI",
      "SharePoint Online",
      "Microsoft Power Apps",
      "Low-Code Development",
      "Data Analysis",
      "Data Visualisation",
      "Microsoft Teams",
      "Python",
    ],
  },
  {
    category: "Supply Chain",
    skills: [
      "Supply Chain Technical",
      "Raw Materials Management",
      "Supplier Management",
      "Traceability",
    ],
  },
];

export default function CVPage() {
  return (
    <div className="wrap section">
      <div className="page-heading">
        <p className="eyebrow">BACKGROUND / EXPERIENCE</p>
        <h1>
          Dale Cosgrove<span className="orange">.</span>
        </h1>
        <p>
          Food safety, quality, supply chain and practical digital improvement.
        </p>
        <div className="hero-actions">
          <PrintCVButton />
          <a className="text-link" href="mailto:dale@cgrv.co.uk">
            dale@cgrv.co.uk
          </a>
        </div>
      </div>
      <div className="cv-section">
        <h2>Experience.</h2>
        {experience.map((job) => (
          <section
            className="cv-entry card-print-safe"
            key={job.role + job.period}
          >
            <div>
              <p className="eyebrow">{job.period}</p>
              <h3>{job.role}</h3>
              <p>{job.company}</p>
              <p className="caption">{job.location}</p>
            </div>
            <div>
              <p>{job.description}</p>
              <ul>
                {job.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
      <section className="cv-section">
        <h2>Skills.</h2>
        <div className="cv-grid">
          {skillGroups.map((group) => (
            <div className="cv-skill card-print-safe" key={group.category}>
              <h3>{group.category}</h3>
              <p>{group.skills.join(" / ")}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="cv-section">
        <h2>Certifications.</h2>
        <div className="cv-grid">
          {certifications.map((cert) => (
            <div className="cv-skill card-print-safe" key={cert.qualification}>
              <h3>{cert.qualification}</h3>
              <p>
                {cert.institution} / {cert.year}
              </p>
              <p className="eyebrow">{cert.type}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="cv-section">
        <h2>Education.</h2>
        {formalEducation.map((edu) => (
          <div className="cv-skill card-print-safe" key={edu.qualification}>
            <h3>{edu.qualification}</h3>
            <p>
              {edu.institution} / {edu.period}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
