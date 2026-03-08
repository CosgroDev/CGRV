import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "FOOD SAFETY DASHBOARD",
    description:
      "An internal data dashboard built to visualise food safety KPIs, audit results, and non-conformance trends across production lines. Transforms spreadsheet chaos into actionable insights.",
    tags: ["DATA", "EXCEL", "ANALYSIS", "FOOD SAFETY"],
    status: "COMPLETE",
    statusColor: "green" as const,
    icon: "📊",
    github: null,
    demo: null,
  },
  {
    id: "02",
    title: "PM FRAMEWORK TOOLKIT",
    description:
      "A structured project management framework designed for food manufacturing environments. Includes templates, KPI tracking systems, and stage-gate processes tailored to regulated industries.",
    tags: ["PROJECT MGMT", "PROCESS", "FRAMEWORKS", "DOCS"],
    status: "ONGOING",
    statusColor: "yellow" as const,
    icon: "🗂️",
    github: null,
    demo: null,
  },
  {
    id: "03",
    title: "HACCP DIGITAL SYSTEM",
    description:
      "Digitising and modernising a traditional paper-based HACCP system. Exploring tools to make critical control point monitoring faster, more reliable, and audit-ready from day one.",
    tags: ["HACCP", "DIGITALISATION", "FOOD SAFETY", "SYSTEMS"],
    status: "IN PROGRESS",
    statusColor: "yellow" as const,
    icon: "🔬",
    github: null,
    demo: null,
  },
  {
    id: "04",
    title: "THIS PORTFOLIO",
    description:
      "My personal portfolio site — built with Next.js, TypeScript, and a full retro 8-bit style. An excuse to learn modern web dev while building something genuinely useful.",
    tags: ["NEXT.JS", "TYPESCRIPT", "8BIT", "WEB DEV"],
    status: "COMPLETE",
    statusColor: "green" as const,
    icon: "🕹️",
    github: "https://github.com/CosgroDev/CGRV",
    demo: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <div
          className="text-[#22c55e] text-[8px] mb-3"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          // SECTION_02
        </div>
        <h2
          className="text-[#f0f0f0] text-lg sm:text-xl mb-4"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          PROJECTS
        </h2>
        <div className="pixel-divider" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} variant="default" className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{project.icon}</span>
                <div className="flex items-center gap-2">
                  <span
                    className="text-[#444444] text-[8px]"
                    style={{ fontFamily: '"Press Start 2P", monospace' }}
                  >
                    #{project.id}
                  </span>
                  <Badge variant={project.statusColor}>{project.status}</Badge>
                </div>
              </div>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="mb-4">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {(project.github || project.demo) && (
              <CardFooter>
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm">
                      <Github size={12} className="mr-2" />
                      CODE
                    </Button>
                  </Link>
                )}
                {project.demo && (
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm">
                      <ExternalLink size={12} className="mr-2" />
                      DEMO
                    </Button>
                  </Link>
                )}
              </CardFooter>
            )}
          </Card>
        ))}
      </div>

      <div
        className="mt-8 text-center text-[#888888] text-[8px]"
        style={{ fontFamily: '"Press Start 2P", monospace' }}
      >
        MORE PROJECTS LOADING...
        <span className="text-[#22c55e] animate-pulse ml-1">█</span>
      </div>
    </section>
  );
}
