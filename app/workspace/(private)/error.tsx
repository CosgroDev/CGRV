"use client";
export default function WorkspaceError({ reset }: { reset: () => void }) {
  return (
    <div className="ws-empty" role="alert">
      <h2>We couldn’t load your workspace.</h2>
      <p>
        Your changes may not have saved. Please try again before continuing.
      </p>
      <button className="work-button" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
