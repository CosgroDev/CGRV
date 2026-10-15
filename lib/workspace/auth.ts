import "server-only";
import { redirect } from "next/navigation";
import { configured, createClient } from "@/lib/supabase/server";

export async function requireOwner() {
  if (!configured()) redirect("/workspace/login");
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) redirect("/workspace/login");
  const { data: owner, error: ownerError } = await supabase
    .from("workspace_owners")
    .select("email")
    .eq("email", user.email ?? "")
    .maybeSingle();
  if (ownerError || !owner || !user.email_confirmed_at)
    redirect(
      "/workspace/login?message=Access%20is%20restricted%20to%20the%20workspace%20owner.",
    );
  return { supabase, user };
}
