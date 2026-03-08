import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Food Safety Dashboard",
    description:
      "An internal data dashboard built to visualise food safety KPIs, audit results, and non-conformance trends across production lines. Transforms spreadsheet chaos into actionable insights.",
    tags: ["Data", "Excel", "Analysis", "Food Safety"],
    status: "Complete",
    statusColor: "green" as const,
    icon: "📊",
    github: null,
    demo: null,
  },
  {
    id: "02",
    title: "PM Framework Toolkit",
    description:
      "A structured project management framework designed for food manufacturing environments. Includes templates, KPI tracking systems, and stage-gate processes tailored to regulated industries.",
    tags: ["Project Mgmt", "Process", "Frameworks", "Docs"],
    status: "Ongoing",
    statusColor: "yellow" as const,
    icon: "🗂️",
    github: null,
    demo: null,
  },
  {
    id: "03",
    title: "HACCP Digital System",
    description:
      "Digitising and modernising a traditional paper-based HACCP system. Exploring tools to make critical control point monitoring faster, more reliable, and audit-ready from day one.",
    tags: ["HACCP", "Digitalisation", "Food Safety", "Systems"],
    status: "In Progress",
    statusColor: "yellow" as const,
    icon: "🔬",
    github: null,
    demo: null,
  },
  {
    id: "04",
    title: "This Portfolio",
    description:
      "My personal portfolio site — built with Next.js, TypeScript, and an editorial design. An excuse to learn modern web dev while building something genuinely useful.",
    tags: ["Next.js", "TypeScript", "Editorial", "Web Dev"],
    status: "Complete",
    statusColor: "green" as const,
    icon: "✦",
    github: "https://github.com/CosgroDev/CGRV",
    demo: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="mb-12">
        <p
          className="text-xs font-medium uppercase tracking-widest text-[#7A7870] mb-3"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          02 — Projects
        </p>
        <h2
          className="text-3xl sm:text-4xl font-black text-[#1C1C1A] mb-4"
          style={{ fontFamily: '"Syne", sans-serif' }}
        >
          My <span className="text-[#E63946]">Projects</span>
        </h2>
        <div className="editorial-divider" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} variant="default" className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{project.icon}</span>
                <div className="flex items-center gap-2">
                  <span
                    className="text-sm font-black text-[#D5D1C9]"
                    style={{ fontFamily: '"Syne", sans-serif' }}
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
                  <Badge key={tag} variant="default">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            {(project.github || project.demo) && (
              <CardFooter>
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm">
                      <Github size={12} className="mr-2" />
                      Code
                    </Button>
                  </Link>
                )}
                {project.demo && (
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm">
                      <ExternalLink size={12} className="mr-2" />
                      Demo
                    </Button>
                  </Link>
                )}
              </CardFooter>
            )}
          </Card>
        ))}
      </div>

      <div
        className="mt-8 text-center text-sm text-[#7A7870] font-medium"
        style={{ fontFamily: '"DM Sans", sans-serif' }}
      >
        More projects coming soon —
      </div>
    </section>
  );
}
