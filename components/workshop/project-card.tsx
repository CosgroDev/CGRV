import Link from "next/link";
import { projects } from "@/lib/workshop";
import { ProjectArt } from "./project-art";
export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <ProjectArt kind={project.kind} />
      <div className="project-card-copy">
        <p className="eyebrow">
          {project.number} / {project.category}
        </p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="text-link">
          Open project <span aria-hidden="true">↗</span>
        </span>
      </div>
    </Link>
  );
}
