"use client";
import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";

// One shared refresh mechanism for every module. Refreshes preserve local form state.
export function WorkspaceSync() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  useEffect(() => {
    const refresh = () => {
      if (document.visibilityState === "visible")
        startTransition(() => router.refresh());
    };
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", refresh);
    const timer = window.setInterval(refresh, 30000);
    return () => {
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", refresh);
      window.clearInterval(timer);
    };
  }, [router]);
  return (
    <p className="ws-sync">
      {pending
        ? "Updating workspace…"
        : "Saved views refresh every 30 seconds and when you return."}
    </p>
  );
}
