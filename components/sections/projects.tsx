import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Food Safety Data Transformation",
    description:
      "Developed tools and dashboards that transform operational data from audits, incidents, and performance indicators into structured datasets for analysis and reporting. Turns day-to-day factory activity into measurable trends that leadership teams can use to identify risks, prioritise improvements, and measure progress. The broader goal is to move quality and food safety from reactive reporting toward proactive risk management.",
    tags: ["Data Analysis", "Dashboards", "Food Safety", "Reporting"],
    status: "Complete",
    statusColor: "green" as const,
    icon: "📊",
    github: null,
    demo: null,
  },
  {
    id: "02",
    title: "121 Darts Challenge App",
    description:
      "Designed and built a desktop application that helps players practice the 121 checkout challenge while tracking performance metrics. The app records checkouts, darts used, success rates, and player statistics. It also suggests optimal checkout routes and visualises targets on a dartboard graphic, with player data stored for analysis to track improvement over time. This project explores the intersection of sports analytics and software development.",
    tags: ["Python", "Desktop App", "Sports Analytics", "Data"],
    status: "Complete",
    statusColor: "green" as const,
    icon: "🎯",
    github: null,
    demo: null,
  },
  {
    id: "03",
    title: "Complaints Insight Engine",
    description:
      "Built a data analysis pipeline using Python to explore complaint trends across multiple manufacturing sites. Rather than simply counting complaints, the system analyses complaint narratives using topic modelling and clustering techniques to identify recurring themes and hidden patterns. The goal is to move beyond surface metrics and uncover deeper insights that can inform product improvement, manufacturing changes, and preventative actions.",
    tags: ["Python", "NLP", "Topic Modelling", "Manufacturing"],
    status: "Complete",
    statusColor: "green" as const,
    icon: "🔍",
    github: null,
    demo: null,
  },
  {
    id: "04",
    title: "Audit and Incident Management",
    description:
      "Created a platform to manage internal audits, incidents, and corrective actions in a single structured environment. Teams can raise issues, assign ownership, track corrective actions, and monitor closure timelines. By linking audits and incidents to root cause analysis and corrective actions, the system improves visibility of recurring issues and helps leadership understand where systemic improvements are required.",
    tags: ["Food Safety", "Systems", "Compliance", "Manufacturing"],
    status: "Complete",
    statusColor: "green" as const,
    icon: "📋",
    github: null,
    demo: null,
  },
  {
    id: "05",
    title: "Supplier Assurance Stage and Gate",
    description:
      "Developed a digital stage-gate system to manage the approval of new raw materials and packaging. The application guides users through structured approval stages, ensuring key technical, quality, and regulatory checks are completed before materials are introduced to production. Each gate captures approvals, documentation, and risk assessments, creating a full audit trail with logic for conditional steps based on material type and applicability.",
    tags: ["Compliance", "Food Safety", "Workflow", "Approvals"],
    status: "Complete",
    statusColor: "green" as const,
    icon: "✅",
    github: null,
    demo: null,
  },
  {
    id: "06",
    title: "This Portfolio",
    description:
      "My personal portfolio site, built with Next.js, TypeScript, and an editorial design. An excuse to learn modern web dev while building something genuinely useful.",
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

    </section>
  );
}
