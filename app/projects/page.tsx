import { projects } from "@/lib/workshop";
import { ProjectCard } from "@/components/workshop/project-card";
export const metadata = {
  title: "Projects | CGRV",
  description:
    "Quality systems, data, darts and useful experiments by Dale Cosgrove.",
};
export default function ProjectsPage() {
  return (
    <div className="wrap section">
      <div className="page-heading">
        <p className="eyebrow">INDEX / THE WORKBENCH</p>
        <h1>
          Made. Tried.
          <br />
          <span className="outlined">Figured out.</span>
        </h1>
        <p>Projects at the intersection of quality, data and a curious mind.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
