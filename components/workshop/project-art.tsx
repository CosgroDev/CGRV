export function ProjectArt({ kind }: { kind: string }) {
  if (kind === "darts")
    return (
      <div className="project-art darts-art" aria-hidden="true">
        <div className="dartboard">
          <span>20</span>
          <div className="bull" />
        </div>
        <div className="art-sticker">GAME ON.</div>
      </div>
    );
  if (kind === "workflow")
    return (
      <div className="project-art workflow-art" aria-hidden="true">
        <span className="art-caption">APPROVAL ROUTE / EXAMPLE</span>
        <div className="workflow-step">
          01 / REQUEST <span>✓</span>
        </div>
        <div className="workflow-step">
          02 / REVIEW <span>✓</span>
        </div>
        <div className="workflow-step current">
          03 / APPROVAL <span>→</span>
        </div>
      </div>
    );
  if (kind === "tools")
    return (
      <div className="project-art tools-art" aria-hidden="true">
        <span className="art-caption">A FEW USEFUL THINGS</span>
        <strong>{"{ }"}</strong>
        <div className="art-sticker">LESS COPY. MORE PASTE.</div>
      </div>
    );
  return (
    <div className="project-art quality-art" aria-hidden="true">
      <span className="art-caption">QUALITY CHECKS / EXAMPLE DATA</span>
      <div className="art-metric">
        94<span>%</span>
        <small>Checks completed</small>
      </div>
      <div className="bars">
        {[35, 60, 43, 75, 65, 88, 94].map((height, i) => (
          <i key={i} style={{ height: `${height}%` }} />
        ))}
      </div>
      <span className="art-footnote">MON → SUN</span>
    </div>
  );
}
