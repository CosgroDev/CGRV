import Link from "next/link";
import { loadWorkspace } from "@/lib/workspace/data";
export default async function Notes() {
  const { notes, projects } = await loadWorkspace();
  return (
    <>
      <p className="eyebrow">WORKBENCH / NOTES</p>
      <div className="ws-heading">
        <div>
          <h1>Keep that thought.</h1>
          <p>Every note, connected to the project it belongs to.</p>
        </div>
      </div>
      {notes.length ? (
        <div className="ws-project-grid">
          {notes.map((note) => (
            <Link
              className="ws-note"
              key={note.id}
              href={`/workspace/projects/${note.project_id}#notes`}
            >
              <p className="eyebrow">
                {projects.find((p) => p.id === note.project_id)?.title} ↗
              </p>
              <h2>{note.title}</h2>
              <p className="ws-note-excerpt">
                {note.body.slice(0, 240)}
                {note.body.length > 240 ? "…" : ""}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="ws-empty">
          <h2>A place for the useful bits.</h2>
          <p>Open a project to add your first note.</p>
          <Link className="work-button" href="/workspace/projects">
            Go to projects ↗
          </Link>
        </div>
      )}
    </>
  );
}
