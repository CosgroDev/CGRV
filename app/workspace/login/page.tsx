import { authenticate } from "../auth-actions";
import { configured } from "@/lib/supabase/server";
import { Submit } from "@/components/workspace/submit";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Sign in | CGRV Workspace",
  robots: { index: false, follow: false },
};

export default async function Login({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>;
}) {
  const { message } = await searchParams;
  return (
    <div className="wrap ws-login">
      <div>
        <p className="eyebrow">CGRV / PRIVATE WORKSPACE</p>
        <h1>
          Your ideas.
          <br />
          Room to grow.
        </h1>
        <p>
          Projects, notes and tasks. One place to pick up where you left off.
        </p>
        <span className="ws-tag">OWNER ACCESS ONLY</span>
      </div>
      <section className="workspace-panel">
        <div className="panel-title">01 / COME ON IN</div>
        <div className="ws-panel-body">
          <h2>Back to the workbench.</h2>
          <p>Sign in to your personal workspace.</p>
          {message ? (
            <p className="ws-notice" role="status">
              {message}
            </p>
          ) : null}
          {!configured() ? (
            <p role="status">
              The workspace connection needs configuring. Follow
              docs/private-workspace.md to connect Supabase.
            </p>
          ) : (
            <form action={authenticate} className="ws-form">
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                  maxLength={254}
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  maxLength={128}
                />
              </label>
              <Submit>Sign in ↗</Submit>
              <details>
                <summary>First visit? Activate your owner account</summary>
                <p>
                  Use your approved email and a password of at least 12
                  characters. We’ll email you a confirmation link.
                </p>
                <Submit name="intent" value="activate">
                  Activate owner account
                </Submit>
              </details>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
