import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, MapPin, Briefcase, GraduationCap, Award, Wrench } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV | Dale Cosgrove",
  description: "Curriculum Vitae of Dale Cosgrove — Quality, Food Safety & Supply Chain Professional",
};

const experience = [
  {
    role: "QUALITY PERFORMANCE & PROJECTS MANAGER",
    company: "FOX'S BURTON'S COMPANIES (FBC UK)",
    period: "SEP 2025 – PRESENT",
    duration: "7 MOS",
    location: "BATLEY, ENGLAND, UK",
    type: "FULL-TIME",
    description:
      "Leading quality performance and project delivery across FBC UK, one of the UK's largest biscuit manufacturers. Responsible for driving operational improvement through structured project management, data-led performance tracking, and cross-functional collaboration.",
    achievements: [
      "Driving quality KPI performance through Microsoft Power BI dashboards and data visualisation",
      "Managing cross-functional improvement projects spanning quality, safety, and operational efficiency",
      "Developing project management frameworks suited to the food manufacturing environment",
      "Facilitating audit readiness, compliance initiatives, and ways-of-working improvements",
    ],
    tags: ["PROJECT MANAGEMENT", "POWER BI"],
  },
  {
    role: "SUPPLY CHAIN TECHNICAL LEAD",
    company: "FOX'S BURTON'S COMPANIES (FBC UK)",
    period: "APR 2021 – SEP 2025",
    duration: "4 YRS 6 MOS",
    location: "BATLEY, ENGLAND, UK",
    type: "FULL-TIME",
    description:
      "Technical lead for supply chain operations, bridging food safety, quality systems, and digital tooling. Championed low-code development solutions and SharePoint-based systems to modernise supplier and ingredient management processes.",
    achievements: [
      "Built and deployed low-code tools via Microsoft Power Apps to streamline supply chain workflows",
      "Managed SharePoint Online environments for supplier documentation and technical data",
      "Led supplier assurance and raw material technical compliance programmes",
      "Drove digitalisation of supply chain quality documentation, reducing manual workload",
    ],
    tags: ["SHAREPOINT ONLINE", "LOW-CODE DEVELOPMENT", "SUPPLY CHAIN"],
  },
  {
    role: "QUALITY ASSURANCE MANAGER",
    company: "FOX'S BISCUITS",
    period: "AUG 2020 – APR 2021",
    duration: "9 MOS",
    location: "BATLEY, ENGLAND, UK",
    type: "FULL-TIME",
    description:
      "Managed the quality assurance function at site level, overseeing food safety systems, audit programmes, and compliance against BRC and customer standards within a high-volume biscuit manufacturing environment.",
    achievements: [
      "Maintained and improved HACCP plans and food safety management systems",
      "Managed internal and third-party audit schedules and outcomes",
      "Led non-conformance investigations and drove corrective action programmes",
      "Delivered quality and food safety training to production and technical teams",
    ],
    tags: ["QUALITY ASSURANCE", "RISK ASSESSMENT"],
  },
  {
    role: "RAW MATERIALS MANAGER",
    company: "FOX'S BISCUITS",
    period: "MAR 2020 – APR 2021",
    duration: "1 YR 2 MOS",
    location: "BATLEY, ENGLAND, UK",
    type: "FULL-TIME",
    description:
      "Responsible for the technical management of raw materials across site, ensuring ingredient compliance, allergen controls, and supplier assurance in line with BRC and customer requirements.",
    achievements: [
      "Managed raw material specifications, approvals, and supplier technical documentation",
      "Maintained allergen controls and ingredient risk assessments",
      "Coordinated with procurement and production to resolve raw material quality issues",
    ],
    tags: ["ALLERGENS", "RISK ASSESSMENT"],
  },
  {
    role: "TECHNICAL ASSISTANT",
    company: "YORKSHIRE PREMIER MEAT",
    period: "MAR 2015 – MAR 2020",
    duration: "5 YRS 1 MO",
    location: "SOUTH KIRKBY, WEST YORKSHIRE, UK",
    type: "FULL-TIME",
    description:
      "Provided technical support across food safety, quality control, and compliance functions within a meat processing operation. Developed expertise in HACCP, food microbiology, and regulatory compliance.",
    achievements: [
      "Supported HACCP development and review processes across the site",
      "Conducted microbiological and environmental monitoring programmes",
      "Assisted with BRC and customer audits, delivering positive outcomes",
      "Risk assessed processes and raw materials to maintain food safety standards",
    ],
    tags: ["FOOD MICROBIOLOGY", "HACCP", "RISK ASSESSMENT"],
  },
  {
    role: "QUALITY CONTROL",
    company: "YORKSHIRE PREMIER MEAT",
    period: "JUL 2013 – MAR 2015",
    duration: "1 YR 9 MOS",
    location: "SOUTH KIRKBY, WEST YORKSHIRE, UK",
    type: "FULL-TIME",
    description:
      "Carried out quality control checks across production to ensure product met specification, legal, and customer requirements within a meat processing environment.",
    achievements: [
      "Performed product checks, weight monitoring, and label verification",
      "Identified and escalated non-conforming product in line with site procedures",
      "Supported food safety and hygiene standards on the production floor",
    ],
    tags: ["QUALITY CONTROL", "FOOD SAFETY"],
  },
  {
    role: "DESPATCH OPERATIVE",
    company: "YORKSHIRE PREMIER MEAT",
    period: "MAY 2011 – JUL 2013",
    duration: "2 YRS 3 MOS",
    location: "SOUTH KIRKBY, WEST YORKSHIRE, UK",
    type: "FULL-TIME",
    description: "Managed outbound logistics and despatch operations within a chilled food manufacturing environment.",
    achievements: [
      "Coordinated order picking, loading, and despatch of chilled products",
      "Maintained cold chain integrity and traceability documentation",
    ],
    tags: ["LOGISTICS", "FOOD MANUFACTURING"],
  },
  {
    role: "DRIVERS MATE",
    company: "DHL",
    period: "JUN 2009 – SEP 2009",
    duration: "4 MOS",
    location: "NORMANTON, WEST YORKSHIRE, UK",
    type: "TEMPORARY",
    description: "Supported delivery operations as drivers mate for a national logistics provider.",
    achievements: [
      "Assisted with delivery of parcels and goods across regional routes",
      "Maintained accurate delivery documentation and customer receipts",
    ],
    tags: ["LOGISTICS"],
  },
];

const certifications = [
  {
    qualification: "FOOD SAFETY LEVEL 4",
    institution: "HIGHFIELD",
    year: "JUL 2021",
    type: "DISTINCTION",
    color: "green" as const,
  },
  {
    qualification: "BRCGS LEAD AUDITOR",
    institution: "BRCGS",
    year: "FEB 2021",
    type: "CERTIFICATION",
    color: "yellow" as const,
  },
  {
    qualification: "HACCP LEVEL 4",
    institution: "HIGHFIELD",
    year: "NOV 2020",
    type: "CERTIFICATION",
    color: "yellow" as const,
  },
];

const formalEducation = [
  {
    qualification: "COMMERCIAL BUSINESS & PHOTOGRAPHY",
    institution: "WAKEFIELD COLLEGE (LEEDS MET CAMPUS)",
    period: "2009 – 2011",
  },
  {
    qualification: "BTEC NATIONAL DIPLOMA — ART & DESIGN, PHOTOGRAPHY, GRAPHICS & FINE ART",
    institution: "BARNSLEY COLLEGE",
    period: "2007 – 2009",
  },
];

const technicalSkills = [
  { label: "FOOD SAFETY & HACCP", value: 95, color: "green" as const },
  { label: "REGULATORY COMPLIANCE", value: 92, color: "green" as const },
  { label: "PROJECT MANAGEMENT", value: 85, color: "yellow" as const },
  { label: "PROCESS IMPROVEMENT", value: 88, color: "yellow" as const },
  { label: "DATA ANALYSIS / POWER BI", value: 80, color: "green" as const },
  { label: "SHAREPOINT / POWER APPS", value: 82, color: "yellow" as const },
  { label: "SUPPLY CHAIN TECHNICAL", value: 85, color: "green" as const },
  { label: "RISK ASSESSMENT", value: 90, color: "green" as const },
];

const coreCompetencies = [
  "HACCP MANAGEMENT",
  "BRCGS STANDARDS",
  "LEAD AUDITING",
  "FOOD MICROBIOLOGY",
  "ALLERGEN CONTROLS",
  "ROOT CAUSE ANALYSIS",
  "KPI DEVELOPMENT",
  "STAKEHOLDER MANAGEMENT",
  "RISK ASSESSMENT",
  "DATA VISUALISATION",
  "LOW-CODE DEVELOPMENT",
  "CONTINUOUS IMPROVEMENT",
  "SUPPLIER ASSURANCE",
  "FOOD SCIENCE",
  "MEAT PROCESSING",
  "TRAINING & DEVELOPMENT",
];

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* CV Header */}
      <div className="mb-10">
        <div
          className="text-[#22c55e] text-[8px] mb-3"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          // CURRICULUM_VITAE.exe
        </div>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
          <div>
            <h1
              className="text-[#f0f0f0] text-xl sm:text-2xl mb-2"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              DALE <span className="text-[#22c55e]">COSGROVE</span>
            </h1>
            <p
              className="text-[#fbbf24] text-[9px] mb-4"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              QUALITY, FOOD SAFETY &amp; SUPPLY CHAIN PROFESSIONAL
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-[#888888] text-[8px]"
                style={{ fontFamily: '"Press Start 2P", monospace' }}>
                <MapPin size={10} />
                <span>BATLEY, ENGLAND, UK</span>
              </div>
              <div className="flex items-center gap-2 text-[#888888] text-[8px]"
                style={{ fontFamily: '"Press Start 2P", monospace' }}>
                <Briefcase size={10} />
                <span>FBC UK</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <Link href="mailto:dale@cgrv.co.uk">
              <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                <Mail size={10} className="mr-2" />
                EMAIL
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/dale-cosgrove-738a18a4" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="w-full sm:w-auto">
                <Linkedin size={10} className="mr-2" />
                LINKEDIN
              </Button>
            </Link>
            <Button variant="primary" size="sm" className="w-full sm:w-auto" disabled>
              <Download size={10} className="mr-2" />
              PDF (SOON)
            </Button>
          </div>
        </div>
        <div className="pixel-divider" />
      </div>

      <div className="space-y-8">
        {/* Profile Summary — placeholder until bio is received */}
        <Card variant="green">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>▶</span> PROFILE SUMMARY
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p
              className="text-[#f0f0f0] text-[9px] leading-loose"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              Technical Lead working in food manufacturing with a focus on quality, food
              safety, and improving how systems operate in real production environments.
              Specialising in HACCP, risk assessment, and food safety frameworks such as
              BRCGS and retailer standards, with hands-on experience implementing practical
              controls across manufacturing operations.
            </p>
            <p
              className="text-[#f0f0f0] text-[9px] leading-loose mt-4"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              My approach is centred on making systems work better — simplifying, structuring,
              and making processes easier for teams to use while still meeting modern food
              safety and quality standards. A key part of my work is turning day-to-day
              factory activity into structured, trendable data that actually tells a story:
              from digitising audits and building operational tools to analysing root causes
              and performance trends.
            </p>
            <p
              className="text-[#f0f0f0] text-[9px] leading-loose mt-4"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              I enjoy working at the intersection of operations, quality, and data. The goal
              is always the same: practical systems that support teams on the floor, improve
              decision-making, and strengthen food safety without adding unnecessary complexity.
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase size={16} className="text-[#22c55e]" />
            <h2
              className="text-[#f0f0f0] text-sm"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              EXPERIENCE
            </h2>
          </div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} variant="default">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <CardTitle>{job.role}</CardTitle>
                      <p
                        className="text-[#fbbf24] text-[8px] mt-1"
                        style={{ fontFamily: '"Press Start 2P", monospace' }}
                      >
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 shrink-0">
                      <Badge variant="green">{job.duration}</Badge>
                      <Badge variant="default">{job.type}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-[#888888] text-[7px]"
                      style={{ fontFamily: '"Press Start 2P", monospace' }}>
                      <MapPin size={9} />
                      <span>{job.location}</span>
                    </div>
                    <span
                      className="text-[#555555] text-[7px]"
                      style={{ fontFamily: '"Press Start 2P", monospace' }}
                    >
                      {job.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-[#f0f0f0] text-[9px] leading-loose mb-4"
                    style={{ fontFamily: '"Press Start 2P", monospace' }}
                  >
                    {job.description}
                  </p>
                  <div
                    className="text-[#22c55e] text-[8px] mb-3"
                    style={{ fontFamily: '"Press Start 2P", monospace' }}
                  >
                    KEY ACHIEVEMENTS:
                  </div>
                  <ul className="space-y-2 mb-4">
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[#888888] text-[8px] leading-loose"
                        style={{ fontFamily: '"Press Start 2P", monospace' }}
                      >
                        <span className="text-[#22c55e] shrink-0 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  {job.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="default" className="text-[6px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Wrench size={16} className="text-[#22c55e]" />
            <h2
              className="text-[#f0f0f0] text-sm"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              SKILLS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="default">
              <CardHeader>
                <CardTitle>[ SKILL LEVELS ]</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {technicalSkills.map((skill) => (
                    <Progress
                      key={skill.label}
                      label={skill.label}
                      value={skill.value}
                      color={skill.color}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card variant="yellow">
              <CardHeader>
                <CardTitle>[ CORE COMPETENCIES ]</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {coreCompetencies.map((comp) => (
                    <Badge key={comp} variant="yellow">
                      {comp}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award size={16} className="text-[#22c55e]" />
            <h2
              className="text-[#f0f0f0] text-sm"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              CERTIFICATIONS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} variant="default">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={14} className="text-[#fbbf24]" />
                    <Badge variant={cert.color}>{cert.type}</Badge>
                  </div>
                  <CardTitle className="text-[8px]">{cert.qualification}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-[#888888] text-[7px] leading-loose"
                    style={{ fontFamily: '"Press Start 2P", monospace' }}
                  >
                    {cert.institution}
                  </p>
                  <p
                    className="text-[#fbbf24] text-[7px] mt-1"
                    style={{ fontFamily: '"Press Start 2P", monospace' }}
                  >
                    {cert.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={16} className="text-[#22c55e]" />
            <h2
              className="text-[#f0f0f0] text-sm"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              EDUCATION
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {formalEducation.map((edu, index) => (
              <Card key={index} variant="default">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={14} className="text-[#888888]" />
                    <Badge variant="default">FURTHER EDUCATION</Badge>
                  </div>
                  <CardTitle className="text-[8px]">{edu.qualification}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-[#888888] text-[7px] leading-loose"
                    style={{ fontFamily: '"Press Start 2P", monospace' }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    className="text-[#fbbf24] text-[7px] mt-1"
                    style={{ fontFamily: '"Press Start 2P", monospace' }}
                  >
                    {edu.period}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <Card variant="green" className="text-center">
          <CardContent className="py-6">
            <p
              className="text-[#f0f0f0] text-[9px] leading-loose mb-6"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              INTERESTED IN WORKING TOGETHER?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="mailto:dale@cgrv.co.uk">
                <Button variant="primary" size="md">
                  <Mail size={12} className="mr-2" />
                  GET IN TOUCH
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/dale-cosgrove-738a18a4" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="md">
                  <Linkedin size={12} className="mr-2" />
                  CONNECT
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
