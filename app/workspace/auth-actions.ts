"use server";
import { redirect } from "next/navigation";
import { createClient, configured } from "@/lib/supabase/server";

export async function authenticate(form: FormData) {
  if (!configured())
    redirect(
      "/workspace/login?message=Workspace%20connection%20is%20not%20configured.",
    );
  const email = String(form.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(form.get("password") ?? "");
  const supabase = await createClient();
  if (form.get("intent") === "activate") {
    if (
      !process.env.WORKSPACE_OWNER_EMAIL ||
      email !== process.env.WORKSPACE_OWNER_EMAIL.toLowerCase() ||
      password.length < 12 ||
      password.length > 128
    ) {
      redirect(
        "/workspace/login?message=Use%20your%20approved%20owner%20email%20and%20a%20password%20of%2012%E2%80%93128%20characters.",
      );
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.SITE_URL ?? "http://localhost:3000"}/auth/callback`,
      },
    });
    if (error)
      redirect(
        "/workspace/login?message=Account%20activation%20could%20not%20be%20started.%20Try%20signing%20in%20if%20you%20already%20have%20an%20account.",
      );
    redirect(
      "/workspace/login?message=Check%20your%20email%20to%20confirm%20your%20account%2C%20then%20sign%20in.",
    );
  }
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error)
    redirect(
      "/workspace/login?message=Unable%20to%20sign%20in.%20Check%20your%20details%20and%20confirm%20your%20email.",
    );
  redirect("/workspace");
}

export async function signOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut({ scope: "local" });
  if (error) throw new Error("Sign out failed. Please try again.");
  redirect("/workspace/login");
}
