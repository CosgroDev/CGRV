import Link from "next/link";
export const metadata = {
  title: "Workspace | CGRV",
  robots: { index: false, follow: false },
};
export default function WorkspacePage() {
  return (
    <div className="wrap section">
      <div className="page-heading">
        <p className="eyebrow">NEXT ON THE WORKBENCH / PRIVATE WORKSPACE</p>
        <h1>
          A place for
          <br />
          <span className="outlined">the unfinished.</span>
        </h1>
        <p>Ideas, project notes and useful things to come back to.</p>
      </div>
      <div className="workspace-panel">
        <div className="panel-title">WORKSPACE / CONNECTION REQUIRED</div>
        <div className="workspace-body">
          <span className="stamp small-stamp">
            UNDER
            <br />
            CONSTRUCTION
          </span>
          <h2>The private workspace isn’t connected yet.</h2>
          <p>
            Sign-in and saved notes will be added once the database is
            connected. There’s no private data stored here, and this page isn’t
            a login or a secure storage area.
          </p>
          <div className="workspace-modules">
            <span>01 / PROJECT NOTES</span>
            <span>02 / SAVED RESOURCES</span>
            <span>03 / PERSONAL TOOLS</span>
          </div>
          <Link className="work-button blue-button" href="/toolbox">
            Use the public toolbox ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
