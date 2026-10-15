import Link from "next/link";
import { loadWorkspace } from "@/lib/workspace/data";
export default async function Dashboard() {
  const { projects, tasks, notes } = await loadWorkspace();
  const open = tasks.filter((t) => t.status !== "done");
  return (
    <>
      <p className="eyebrow">THE WORKBENCH / OVERVIEW</p>
      <div className="ws-heading">
        <div>
          <h1>Good things start here.</h1>
          <p>Your projects, your thoughts, your next step.</p>
        </div>
        <Link
          className="work-button blue-button"
          href="/workspace/projects#new-project"
        >
          + New project
        </Link>
      </div>
      <div className="ws-stats">
        {[
          [
            "Active projects",
            projects.filter((p) => p.status === "active").length,
          ],
          ["Tasks to do", open.length],
          ["Notes collected", notes.length],
        ].map(([label, count]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{count}</strong>
          </div>
        ))}
      </div>
      <section className="ws-section">
        <div className="ws-section-title">
          <h2>On the workbench</h2>
          <Link href="/workspace/projects">All projects ↗</Link>
        </div>
        <div className="ws-project-grid">
          {projects.slice(0, 4).map((project) => (
            <Link
              className="ws-project"
              href={`/workspace/projects/${project.id}`}
              key={project.id}
            >
              <span className="ws-tag">{project.status}</span>
              <h3>{project.title}</h3>
              <p>{project.description || "A new idea taking shape."}</p>
              <div className="ws-project-meta">
                <span>
                  {
                    tasks.filter(
                      (t) => t.project_id === project.id && t.status !== "done",
                    ).length
                  }{" "}
                  open tasks
                </span>
                <span>
                  {notes.filter((n) => n.project_id === project.id).length}{" "}
                  notes ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
        {!projects.length ? (
          <div className="ws-empty">
            <span>01 / A FRESH PAGE</span>
            <h3>Make room for your first idea.</h3>
            <p>Create a project, capture a note, and give it a next step.</p>
            <Link
              className="work-button"
              href="/workspace/projects#new-project"
            >
              Create your first project ↗
            </Link>
          </div>
        ) : null}
      </section>
      <section className="ws-section">
        <div className="ws-section-title">
          <h2>Next up</h2>
          <Link href="/workspace/boards">Open task boards ↗</Link>
        </div>
        {open.length ? (
          open.slice(0, 6).map((task) => (
            <Link
              key={task.id}
              className="ws-task-row"
              href={`/workspace/projects/${task.project_id}`}
            >
              <span className="ws-task-dot" />
              <strong>{task.title}</strong>
              <span>
                {projects.find((p) => p.id === task.project_id)?.title}
              </span>
              {task.due_date ? <time>{task.due_date}</time> : null}
              <span>↗</span>
            </Link>
          ))
        ) : (
          <p className="ws-muted">
            Nothing waiting on you. Add a task inside a project when you’re
            ready.
          </p>
        )}
      </section>
    </>
  );
}
