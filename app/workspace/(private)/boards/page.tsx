import Link from "next/link";
import { loadWorkspace } from "@/lib/workspace/data";
import { Board } from "@/components/workspace/board";
export default async function Boards({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>;
}) {
  const { project } = await searchParams;
  const { tasks, projects } = await loadWorkspace();
  return (
    <>
      <p className="eyebrow">WORKBENCH / TASK BOARDS</p>
      <div className="ws-heading">
        <div>
          <h1>One step at a time.</h1>
          <p>The same tasks, with the whole picture in view.</p>
        </div>
      </div>
      <form className="ws-filter">
        <label>
          Project
          <select name="project" defaultValue={project ?? ""}>
            <option value="">All projects</option>
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
        </label>
        <button className="work-button">Apply filter</button>
      </form>
      <Board
        tasks={project ? tasks.filter((t) => t.project_id === project) : tasks}
        projects={projects}
      />
      <p className="ws-muted">
        Add new tasks inside a <Link href="/workspace/projects">project</Link>.
        Moving a task here updates its project board too.
      </p>
    </>
  );
}
