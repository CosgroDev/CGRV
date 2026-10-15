import Link from "next/link";
import { ActionForm } from "./action-form";
import { TaskForm, DeleteForm } from "./forms";
import { Submit } from "./submit";
import {
  taskStatuses,
  statusLabels,
  type Task,
  type Project,
} from "@/lib/workspace/types";

export function Board({
  tasks,
  projects,
}: {
  tasks: Task[];
  projects?: Project[];
}) {
  return (
    <div className="ws-board">
      {taskStatuses.map((status) => (
        <section
          className={`ws-column ws-column-${status}`}
          key={status}
          aria-label={statusLabels[status]}
        >
          <h3>
            <span>{statusLabels[status]}</span>
            <span>{tasks.filter((t) => t.status === status).length}</span>
          </h3>
          {tasks
            .filter((t) => t.status === status)
            .map((task) => (
              <article key={task.id} className="ws-task-card">
                {projects ? (
                  <Link
                    className="eyebrow"
                    href={`/workspace/projects/${task.project_id}`}
                  >
                    {projects.find((p) => p.id === task.project_id)?.title}
                  </Link>
                ) : null}
                <h4>{task.title}</h4>
                {task.description ? <p>{task.description}</p> : null}
                {task.due_date ? (
                  <p className="ws-due">
                    Due <time dateTime={task.due_date}>{task.due_date}</time>
                  </p>
                ) : null}
                <ActionForm className="ws-move-form">
                  <input type="hidden" name="kind" value="task" />
                  <input type="hidden" name="operation" value="update" />
                  <input type="hidden" name="id" value={task.id} />
                  <input type="hidden" name="status_only" value="yes" />
                  <label>
                    <span className="sr-only">Status for {task.title}</span>
                    <select name="status" defaultValue={task.status}>
                      {taskStatuses.map((s) => (
                        <option key={s} value={s}>
                          {statusLabels[s]}
                        </option>
                      ))}
                    </select>
                  </label>
                  <Submit>Move</Submit>
                </ActionForm>
                <details>
                  <summary>Edit task</summary>
                  <TaskForm projectId={task.project_id} task={task} />
                  <DeleteForm kind="task" id={task.id} />
                </details>
              </article>
            ))}
          {!tasks.some((t) => t.status === status) ? (
            <p className="ws-column-empty">A little room for what’s next.</p>
          ) : null}
        </section>
      ))}
    </div>
  );
}
