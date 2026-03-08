import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, MapPin, Briefcase, GraduationCap, Award, Wrench } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV | Dale Cosgrove",
  description: "Curriculum Vitae of Dale Cosgrove — Food Safety Professional & Tech Enthusiast",
};

const experience = [
  {
    role: "PROJECTS & PERFORMANCE SPECIALIST",
    company: "FBC UK",
    period: "CURRENT",
    location: "UK",
    type: "FULL-TIME",
    description:
      "Leading projects across food safety, operational performance, and systems improvement within one of the UK's largest biscuit manufacturers. Responsibilities span data analysis, project management framework design, process optimisation, and ways-of-working initiatives.",
    achievements: [
      "Designed and implemented a structured PM framework for the food manufacturing environment",
      "Led data analysis initiatives to identify and track operational KPIs",
      "Drove digitalisation of key food safety documentation processes",
      "Facilitated cross-functional projects improving audit readiness and compliance",
    ],
  },
  {
    role: "FOOD SAFETY PROFESSIONAL",
    company: "FBC UK",
    period: "PREVIOUS",
    location: "UK",
    type: "FULL-TIME",
    description:
      "Specialist in food safety compliance, HACCP management, and regulatory frameworks within a high-volume manufacturing environment. Responsible for maintaining and improving food safety systems to meet BRC, customer, and legal standards.",
    achievements: [
      "Maintained and improved HACCP plans across multiple production sites",
      "Managed internal and external audit programmes",
      "Delivered food safety training to production and quality teams",
      "Led non-conformance investigations and corrective action programmes",
    ],
  },
];

const education = [
  {
    qualification: "LEVEL 4 FOOD SAFETY MANAGEMENT",
    institution: "CIEH / RSPH",
    year: "UPDATE YEAR",
    type: "PROFESSIONAL CERT",
  },
  {
    qualification: "LEVEL 3 FOOD HYGIENE & SAFETY",
    institution: "CIEH / RSPH",
    year: "UPDATE YEAR",
    type: "PROFESSIONAL CERT",
  },
  {
    qualification: "HACCP PRINCIPLES & PRACTICE",
    institution: "INDUSTRY BODY",
    year: "UPDATE YEAR",
    type: "CERTIFICATION",
  },
];

const technicalSkills = [
  { label: "FOOD SAFETY & HACCP", value: 95, color: "green" as const },
  { label: "DATA ANALYSIS", value: 78, color: "green" as const },
  { label: "PROJECT MANAGEMENT", value: 85, color: "yellow" as const },
  { label: "PROCESS IMPROVEMENT", value: 88, color: "yellow" as const },
  { label: "REGULATORY COMPLIANCE", value: 92, color: "green" as const },
  { label: "SYSTEMS DESIGN", value: 75, color: "yellow" as const },
  { label: "MICROSOFT 365", value: 80, color: "green" as const },
  { label: "TECH & AUTOMATION", value: 72, color: "yellow" as const },
];

const coreCompetencies = [
  "HACCP MANAGEMENT",
  "BRC STANDARDS",
  "AUDIT MANAGEMENT",
  "ROOT CAUSE ANALYSIS",
  "KPI DEVELOPMENT",
  "STAKEHOLDER MANAGEMENT",
  "CHANGE MANAGEMENT",
  "RISK ASSESSMENT",
  "TRAINING & DEVELOPMENT",
  "DATA VISUALISATION",
  "PROCESS MAPPING",
  "CONTINUOUS IMPROVEMENT",
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
              FOOD SAFETY PROFESSIONAL &amp; TECH ENTHUSIAST
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-[#888888] text-[8px]"
                style={{ fontFamily: '"Press Start 2P", monospace' }}>
                <MapPin size={10} />
                <span>UNITED KINGDOM</span>
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
        {/* Profile Summary */}
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
              Results-driven food safety professional with extensive experience in
              HACCP management, regulatory compliance, and food safety systems within
              high-volume manufacturing. Currently operating in a Projects &amp;
              Performance role at FBC UK, combining food safety expertise with data
              analysis, project management, and process improvement. Passionate about
              technology and its potential to modernise food safety practices and
              operational efficiency.
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
                      <Badge variant="green">{job.period}</Badge>
                      <Badge variant="default">{job.type}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#888888] text-[7px]"
                    style={{ fontFamily: '"Press Start 2P", monospace' }}>
                    <MapPin size={9} />
                    <span>{job.location}</span>
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
                  <ul className="space-y-2">
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

        {/* Education & Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={16} className="text-[#22c55e]" />
            <h2
              className="text-[#f0f0f0] text-sm"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              QUALIFICATIONS &amp; CERTIFICATIONS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {education.map((edu, index) => (
              <Card key={index} variant="default">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={14} className="text-[#fbbf24]" />
                    <Badge variant="yellow">{edu.type}</Badge>
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
                    {edu.year}
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
