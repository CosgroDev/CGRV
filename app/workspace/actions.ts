"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { requireOwner } from "@/lib/workspace/auth";
import { taskStatuses } from "@/lib/workspace/types";

export type ActionState = { error?: string; success?: string };
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function text(form: FormData, key: string, max: number, required = false) {
  const value = String(form.get(key) ?? "").trim();
  if ((required && !value) || value.length > max)
    throw new Error(
      `Check ${key.replaceAll("_", " ")} (maximum ${max} characters).`,
    );
  return value;
}
function id(form: FormData, key: string) {
  const value = text(form, key, 36, true);
  if (!uuid.test(value)) throw new Error("Choose a valid project or record.");
  return value;
}

export async function mutate(
  _previous: ActionState,
  form: FormData,
): Promise<ActionState> {
  const { supabase, user } = await requireOwner();
  try {
    const kind = text(form, "kind", 20, true);
    const table =
      kind === "project"
        ? "workspace_projects"
        : kind === "note"
          ? "workspace_notes"
          : kind === "task"
            ? "workspace_tasks"
            : null;
    if (!table) throw new Error("Unknown workspace record.");
    const operation = text(form, "operation", 10, true);
    if (!["create", "update", "delete"].includes(operation))
      throw new Error("Unknown action.");
    let result;
    if (operation === "delete") {
      if (form.get("confirmed") !== "yes")
        throw new Error("Confirm deletion first.");
      result = await supabase
        .from(table)
        .delete()
        .eq("id", id(form, "id"))
        .eq("owner_id", user.id)
        .select("id");
    } else {
      let values: Record<string, string | null>;
      if (kind === "task" && form.get("status_only") === "yes") {
        const status = text(form, "status", 10, true);
        if (!taskStatuses.includes(status as (typeof taskStatuses)[number]))
          throw new Error("Choose a valid task status.");
        values = { status };
      } else {
        values = { title: text(form, "title", 160, true) };
        if (kind !== "project") values.project_id = id(form, "project_id");
        if (kind === "note") values.body = text(form, "body", 50000);
        else values.description = text(form, "description", 10000);
        if (kind === "project") {
          const status = text(form, "status", 10) || "active";
          if (!["active", "paused", "complete"].includes(status))
            throw new Error("Choose a valid project status.");
          values.status = status;
        }
        if (kind === "task") {
          const status = text(form, "status", 10) || "todo";
          if (!taskStatuses.includes(status as (typeof taskStatuses)[number]))
            throw new Error("Choose a valid task status.");
          values.status = status;
          const due = text(form, "due_date", 10);
          if (
            due &&
            (!/^\d{4}-\d{2}-\d{2}$/.test(due) ||
              Number.isNaN(Date.parse(due)) ||
              new Date(due).toISOString().slice(0, 10) !== due)
          )
            throw new Error("Choose a valid due date.");
          values.due_date = due || null;
        }
      }
      if (operation === "create")
        result = await supabase
          .from(table)
          .insert({ ...values, owner_id: user.id })
          .select("id");
      else
        result = await supabase
          .from(table)
          .update(values)
          .eq("id", id(form, "id"))
          .eq("owner_id", user.id)
          .select("id");
    }
    if (result.error)
      return {
        error: "Your change could not be saved. Please refresh and try again.",
      };
    if (!result.data?.length)
      return {
        error: "This record no longer exists or you don’t have access.",
      };
    revalidatePath("/workspace", "layout");
    if (kind === "project" && operation === "delete")
      redirect("/workspace/projects");
    return { success: operation === "delete" ? "Deleted." : "Saved." };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return {
      error:
        error instanceof Error
          ? error.message
          : "Please check your details and try again.",
    };
  }
}
