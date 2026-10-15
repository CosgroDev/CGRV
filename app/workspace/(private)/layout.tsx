import Link from "next/link";
import { requireOwner } from "@/lib/workspace/auth";
import { signOut } from "../auth-actions";
import { WorkspaceSync } from "@/components/workspace/sync";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Workspace | CGRV",
  robots: { index: false, follow: false },
};
export default async function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireOwner();
  return (
    <div className="wrap ws-shell">
      <aside className="ws-sidebar">
        <p className="eyebrow">YOUR PERSONAL SPACE</p>
        <Link href="/workspace" className="ws-brand">
          Workbench<span>↗</span>
        </Link>
        <p>
          A little structure.
          <br />
          More room to make.
        </p>
        <nav aria-label="Workspace">
          <Link href="/workspace">01 / Overview</Link>
          <Link href="/workspace/projects">02 / Projects</Link>
          <Link href="/workspace/notes">03 / Notes</Link>
          <Link href="/workspace/boards">04 / Task boards</Link>
        </nav>
        <div className="ws-sidebar-foot">
          <span className="ws-tag">PRIVATE / OWNER ONLY</span>
          <form action={signOut}>
            <button className="text-link">Sign out ↗</button>
          </form>
        </div>
      </aside>
      <div className="ws-main">
        {children}
        <WorkspaceSync />
      </div>
    </div>
  );
}
