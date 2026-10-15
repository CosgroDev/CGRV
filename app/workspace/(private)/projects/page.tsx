import Link from "next/link";
import { loadWorkspace } from "@/lib/workspace/data";
import { ProjectForm } from "@/components/workspace/forms";
export default async function Projects() {
  const { projects, tasks, notes } = await loadWorkspace();
  return (
    <>
      <p className="eyebrow">WORKBENCH / PROJECTS</p>
      <div className="ws-heading">
        <div>
          <h1>Ideas in motion.</h1>
          <p>A home for every project, from first thought to finished thing.</p>
        </div>
      </div>
      <div className="ws-project-grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            className="ws-project"
            href={`/workspace/projects/${project.id}`}
          >
            <span className="ws-tag">{project.status}</span>
            <h2>{project.title}</h2>
            <p>{project.description || "A new idea taking shape."}</p>
            <div className="ws-project-meta">
              <span>
                {tasks.filter((t) => t.project_id === project.id).length} tasks
              </span>
              <span>
                {notes.filter((n) => n.project_id === project.id).length} notes
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
      {!projects.length ? (
        <p className="ws-muted">
          No projects yet. Start with something you want to make happen.
        </p>
      ) : null}
      <section className="ws-section ws-editor" id="new-project">
        <p className="eyebrow">START SOMETHING / 01</p>
        <h2>New project</h2>
        <ProjectForm />
      </section>
    </>
  );
}
