import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error)
      return NextResponse.redirect(new URL("/workspace", request.url));
  }
  return NextResponse.redirect(
    new URL(
      "/workspace/login?message=This%20confirmation%20link%20has%20expired%20or%20is%20invalid.%20Try%20signing%20in.",
      request.url,
    ),
  );
}
