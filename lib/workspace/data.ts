import "server-only";
import { requireOwner } from "./auth";
import type { Project, Note, Task } from "./types";

export async function loadWorkspace() {
  const { supabase } = await requireOwner();
  const [projects, notes, tasks] = await Promise.all([
    supabase
      .from("workspace_projects")
      .select("*")
      .order("updated_at", { ascending: false }),
    supabase
      .from("workspace_notes")
      .select("*")
      .order("updated_at", { ascending: false }),
    supabase
      .from("workspace_tasks")
      .select("*")
      .order("created_at", { ascending: true }),
  ]);
  if (projects.error || notes.error || tasks.error)
    throw new Error("Your workspace could not be loaded. Please try again.");
  return {
    projects: projects.data as Project[],
    notes: notes.data as Note[],
    tasks: tasks.data as Task[],
  };
}
