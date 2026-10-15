export const taskStatuses = ["todo", "doing", "done"] as const;
export type TaskStatus = (typeof taskStatuses)[number];
export const statusLabels: Record<TaskStatus, string> = {
  todo: "To do",
  doing: "In progress",
  done: "Done",
};
export type Project = {
  id: string;
  title: string;
  description: string;
  status: "active" | "paused" | "complete";
  created_at: string;
  updated_at: string;
};
export type Note = {
  id: string;
  project_id: string;
  title: string;
  body: string;
  updated_at: string;
};
export type Task = {
  id: string;
  project_id: string;
  title: string;
  description: string;
  status: TaskStatus;
  due_date: string | null;
  updated_at: string;
};
