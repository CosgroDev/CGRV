import Link from "next/link";
import { notFound } from "next/navigation";
import { loadWorkspace } from "@/lib/workspace/data";
import {
  ProjectForm,
  NoteForm,
  TaskForm,
  DeleteForm,
} from "@/components/workspace/forms";
import { Board } from "@/components/workspace/board";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await loadWorkspace();
  const project = data.projects.find((p) => p.id === id);
  if (!project) notFound();
  const notes = data.notes.filter((n) => n.project_id === id);
  const tasks = data.tasks.filter((t) => t.project_id === id);
  return (
    <>
      <Link className="eyebrow" href="/workspace/projects">
        ← ALL PROJECTS
      </Link>
      <div className="ws-heading">
        <div>
          <span className="ws-tag">{project.status}</span>
          <h1>{project.title}</h1>
          <p className="ws-preserve">{project.description}</p>
        </div>
      </div>
      <div className="ws-project-toolbar">
        <a href="#tasks">Task board / {tasks.length}</a>
        <a href="#notes">Notes / {notes.length}</a>
        <a href="#settings">Project settings</a>
      </div>
      <section className="ws-section" id="tasks">
        <div className="ws-section-title">
          <h2>The next steps</h2>
          <a href="#new-task">+ Add a task</a>
        </div>
        <Board tasks={tasks} />
        <details className="ws-editor" id="new-task">
          <summary>Add a task</summary>
          <TaskForm projectId={id} />
        </details>
      </section>
      <section className="ws-section" id="notes">
        <div className="ws-section-title">
          <h2>Thoughts & notes</h2>
          <a href="#new-note">+ Add a note</a>
        </div>
        {notes.length ? (
          <div className="ws-project-grid">
            {notes.map((note) => (
              <article className="ws-note" key={note.id}>
                <p className="eyebrow">
                  {new Date(note.updated_at).toLocaleDateString("en-GB", {
                    timeZone: "Europe/London",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <h3>{note.title}</h3>
                <p className="ws-preserve">{note.body}</p>
                <details>
                  <summary>Edit note</summary>
                  <NoteForm projectId={id} note={note} />
                  <DeleteForm kind="note" id={note.id} />
                </details>
              </article>
            ))}
          </div>
        ) : (
          <p className="ws-muted">
            Capture the ideas and decisions behind this project.
          </p>
        )}
        <details id="new-note" className="ws-editor">
          <summary>Add a note</summary>
          <NoteForm projectId={id} />
        </details>
      </section>
      <details className="ws-editor" id="settings">
        <summary>Project settings</summary>
        <ProjectForm project={project} />
        <DeleteForm kind="project" id={id} />
      </details>
    </>
  );
}
