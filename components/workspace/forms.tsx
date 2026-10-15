import { ActionForm } from "./action-form";
import { Submit } from "./submit";
import { AutoTextarea } from "./auto-textarea";
import type { Note, Project, Task } from "@/lib/workspace/types";
import { statusLabels, taskStatuses } from "@/lib/workspace/types";

function Fields({ kind, id }: { kind: string; id?: string }) {
  return (
    <>
      <input type="hidden" name="kind" value={kind} />
      <input type="hidden" name="operation" value={id ? "update" : "create"} />
      {id ? <input type="hidden" name="id" value={id} /> : null}
    </>
  );
}
export function ProjectForm({ project }: { project?: Project }) {
  return (
    <ActionForm>
      <Fields kind="project" id={project?.id} />
      <label>
        Project name
        <input
          name="title"
          required
          maxLength={160}
          defaultValue={project?.title}
          placeholder="What are you working on?"
        />
      </label>
      <label>
        Description
        <AutoTextarea
          name="description"
          maxLength={10000}
          rows={3}
          defaultValue={project?.description}
          placeholder="An idea, an outcome, a little context…"
        />
      </label>
      <label>
        Status
        <select name="status" defaultValue={project?.status ?? "active"}>
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="complete">Complete</option>
        </select>
      </label>
      <Submit>{project ? "Save project" : "Create project ↗"}</Submit>
    </ActionForm>
  );
}
export function NoteForm({
  projectId,
  note,
}: {
  projectId: string;
  note?: Note;
}) {
  return (
    <ActionForm>
      <Fields kind="note" id={note?.id} />
      <input type="hidden" name="project_id" value={projectId} />
      <label>
        Note title
        <input
          name="title"
          required
          maxLength={160}
          defaultValue={note?.title}
          placeholder="Give your thought a title"
        />
      </label>
      <label>
        Note
        <AutoTextarea
          name="body"
          rows={6}
          maxLength={50000}
          defaultValue={note?.body}
          placeholder="Capture an idea, a decision or something to come back to…"
        />
      </label>
      <Submit>{note ? "Save note" : "Add note ↗"}</Submit>
    </ActionForm>
  );
}
export function TaskForm({
  projectId,
  task,
}: {
  projectId: string;
  task?: Task;
}) {
  return (
    <ActionForm>
      <Fields kind="task" id={task?.id} />
      <input type="hidden" name="project_id" value={projectId} />
      <label>
        Task title
        <input
          name="title"
          required
          maxLength={160}
          defaultValue={task?.title}
          placeholder="The next small step"
        />
      </label>
      <label>
        Details
        <AutoTextarea
          name="description"
          rows={2}
          maxLength={10000}
          defaultValue={task?.description}
        />
      </label>
      <div className="ws-input-pair">
        <label>
          Status
          <select name="status" defaultValue={task?.status ?? "todo"}>
            {taskStatuses.map((s) => (
              <option key={s} value={s}>
                {statusLabels[s]}
              </option>
            ))}
          </select>
        </label>
        <label>
          Due date
          <input
            type="date"
            name="due_date"
            defaultValue={task?.due_date ?? ""}
          />
        </label>
      </div>
      <Submit>{task ? "Save task" : "Add task ↗"}</Submit>
    </ActionForm>
  );
}
export function DeleteForm({ kind, id }: { kind: string; id: string }) {
  return (
    <ActionForm
      className="ws-delete"
      confirm={
        kind === "project"
          ? "Delete this project and all its notes and tasks? This cannot be undone."
          : `Delete this ${kind}? This cannot be undone.`
      }
    >
      <input type="hidden" name="kind" value={kind} />
      <input type="hidden" name="operation" value="delete" />
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="confirmed" value="yes" />
      <button className="text-link" type="submit">
        Delete {kind}
      </button>
    </ActionForm>
  );
}
