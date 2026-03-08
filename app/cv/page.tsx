import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, MapPin, Briefcase, GraduationCap, Award, Wrench } from "lucide-react";
import Link from "next/link";
import { durationFromPeriod } from "@/lib/dates";

export const metadata: Metadata = {
  title: "CV | Dale Cosgrove",
  description: "Curriculum Vitae of Dale Cosgrove — Quality, Food Safety & Supply Chain Professional",
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
    description: "Managed outbound logistics and despatch operations within a chilled food manufacturing environment.",
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
    description: "Supported delivery operations as drivers mate for a national logistics provider.",
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
    qualification: "BTEC National Diploma — Art & Design, Photography, Graphics & Fine Art",
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
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* CV Header */}
      <div className="mb-10">
        <p
          className="text-xs font-medium uppercase tracking-widest text-[#7A7870] mb-4"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          Curriculum Vitae
        </p>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
          <div>
            <h1
              className="text-3xl sm:text-4xl font-black text-[#1C1C1A] mb-1 leading-tight"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              Dale <span className="text-[#22c55e]">Cosgrove</span>
            </h1>
            <p
              className="text-base font-semibold text-[#7A7870] mb-4"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              Quality, Food Safety &amp; Supply Chain Professional
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-[#7A7870]"
                style={{ fontFamily: '"DM Sans", sans-serif' }}>
                <MapPin size={13} />
                <span>Barnsley, South Yorkshire, UK</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#7A7870]"
                style={{ fontFamily: '"DM Sans", sans-serif' }}>
                <Briefcase size={13} />
                <span>FBC UK</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <Link href="mailto:dale@cgrv.co.uk">
              <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                <Mail size={12} className="mr-2" />
                Email
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/dale-cosgrove-738a18a4" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="w-full sm:w-auto">
                <Linkedin size={12} className="mr-2" />
                LinkedIn
              </Button>
            </Link>
            <Button variant="primary" size="sm" className="w-full sm:w-auto" disabled>
              <Download size={12} className="mr-2" />
              PDF (Soon)
            </Button>
          </div>
        </div>
        <div className="editorial-divider" />
      </div>

      <div className="space-y-10">
        {/* Profile Summary */}
        <Card variant="green">
          <CardHeader>
            <CardTitle>Profile Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="text-sm text-[#1C1C1A] leading-relaxed space-y-4"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              <p>
                Technical Lead working in food manufacturing with a focus on quality, food
                safety, and improving how systems operate in real production environments.
                Specialising in HACCP, risk assessment, and food safety frameworks such as
                BRCGS and retailer standards, with hands-on experience implementing practical
                controls across manufacturing operations.
              </p>
              <p>
                My approach is centred on making systems work better — simplifying, structuring,
                and making processes easier for teams to use while still meeting modern food
                safety and quality standards. A key part of my work is turning day-to-day
                factory activity into structured, trendable data that actually tells a story:
                from digitising audits and building operational tools to analysing root causes
                and performance trends.
              </p>
              <p>
                I enjoy working at the intersection of operations, quality, and data. The goal
                is always the same: practical systems that support teams on the floor, improve
                decision-making, and strengthen food safety without adding unnecessary complexity.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase size={18} className="text-[#22c55e]" />
            <h2
              className="text-xl font-black text-[#1C1C1A]"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              Experience
            </h2>
          </div>
          <div className="space-y-5">
            {experience.map((job, index) => (
              <Card key={index} variant="default">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <CardTitle>{job.role}</CardTitle>
                      <p
                        className="text-sm font-semibold text-[#F59E0B] mt-0.5"
                        style={{ fontFamily: '"DM Sans", sans-serif' }}
                      >
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 shrink-0">
                      <Badge variant="green">{durationFromPeriod(job.period)}</Badge>
                      <Badge variant="default">{job.type}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-[#7A7870]"
                      style={{ fontFamily: '"DM Sans", sans-serif' }}>
                      <MapPin size={11} />
                      <span>{job.location}</span>
                    </div>
                    <span
                      className="text-xs text-[#7A7870]"
                      style={{ fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {job.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-sm text-[#1C1C1A] leading-relaxed mb-4"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {job.description}
                  </p>
                  <p
                    className="text-xs font-bold text-[#22c55e] uppercase tracking-wide mb-2"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Key achievements:
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#7A7870] leading-relaxed"
                        style={{ fontFamily: '"DM Sans", sans-serif' }}
                      >
                        <span className="text-[#22c55e] shrink-0 mt-0.5">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  {job.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="default">
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
            <Wrench size={18} className="text-[#22c55e]" />
            <h2
              className="text-xl font-black text-[#1C1C1A]"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              Skills
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group) => (
              <Card key={group.category} variant="default">
                <CardHeader>
                  <CardTitle>{group.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="green">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award size={18} className="text-[#22c55e]" />
            <h2
              className="text-xl font-black text-[#1C1C1A]"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} variant="default">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={14} className="text-[#F59E0B]" />
                    <Badge variant={cert.color}>{cert.type}</Badge>
                  </div>
                  <CardTitle>{cert.qualification}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-sm text-[#7A7870]"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {cert.institution}
                  </p>
                  <p
                    className="text-sm font-semibold text-[#F59E0B] mt-1"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
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
            <GraduationCap size={18} className="text-[#22c55e]" />
            <h2
              className="text-xl font-black text-[#1C1C1A]"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              Education
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {formalEducation.map((edu, index) => (
              <Card key={index} variant="default">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={14} className="text-[#7A7870]" />
                    <Badge variant="default">Further Education</Badge>
                  </div>
                  <CardTitle>{edu.qualification}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-sm text-[#7A7870]"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    className="text-sm font-semibold text-[#F59E0B] mt-1"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
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
          <CardContent className="py-8">
            <p
              className="text-lg font-bold text-[#1C1C1A] mb-6"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              Interested in working together?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="mailto:dale@cgrv.co.uk">
                <Button variant="primary" size="md">
                  <Mail size={14} className="mr-2" />
                  Get in Touch
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/dale-cosgrove-738a18a4" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="md">
                  <Linkedin size={14} className="mr-2" />
                  Connect
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
