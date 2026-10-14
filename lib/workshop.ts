export const projects = [
  {
    slug: "quality-data",
    number: "01",
    title: "Making quality data useful.",
    category: "QUALITY / DATA",
    kind: "quality",
    description: "Turning factory records into information people can act on.",
    problem:
      "Audits, complaints and checks tell different parts of the same story. Separate records make that story difficult to follow.",
    approach:
      "Structure the records, agree consistent definitions, then connect reporting to the decisions and actions it needs to support.",
    focus: [
      "Consistent classifications",
      "Clear ownership",
      "Useful performance measures",
    ],
    note: "Illustrative example using fictional data. No employer records are shown.",
  },
  {
    slug: "west-green-darts",
    number: "02",
    title: "A little competition. A lot of data.",
    category: "DARTS / SOFTWARE",
    kind: "darts",
    description:
      "Exploring scoring, fixtures and player performance with West Green Darts.",
    problem:
      "A darts team needs straightforward scoring and fixtures, with statistics that are useful after the match as well as during it.",
    approach:
      "Build around the way people play: readable scores, quick inputs, undo, and a clear view of performance over time.",
    focus: [
      "Mobile-first scoring",
      "Fixtures and seasons",
      "Player performance",
    ],
    note: "Project overview. The dartboard is a visual illustration, not the live scoring application.",
  },
  {
    slug: "supplier-approval",
    number: "03",
    title: "Give every approval a place.",
    category: "SYSTEMS / WORKFLOW",
    kind: "workflow",
    description:
      "Structured stages, clear responsibilities and traceable decisions.",
    problem:
      "Material approvals involve several people and different checks. An email chain makes it difficult to see what is complete and what is still needed.",
    approach:
      "Make the stages explicit, assign responsibilities and record the evidence behind each decision.",
    focus: [
      "Stage and gate logic",
      "Conditional requirements",
      "Approval history",
    ],
    note: "General explanation of the approach, with illustrative stages rather than internal documentation.",
  },
  {
    slug: "everyday-tools",
    number: "04",
    title: "Small tools. Less fiddling.",
    category: "TOOLS / EXPERIMENTS",
    kind: "tools",
    description: "A growing collection of utilities for the repetitive bits.",
    problem:
      "Tidying lists, comparing exports and checking JSON are small tasks that interrupt larger pieces of work.",
    approach:
      "Keep each tool focused. Make the input obvious, show the result and let people copy it without extra steps.",
    focus: [
      "List cleaning and comparison",
      "JSON formatting",
      "Browser-only processing",
    ],
    note: "The list and JSON tools are working utilities. Try them in the toolbox.",
  },
] as const;
export function cleanList(value: string, ignoreCase = false): string[] {
  const seen = new Set<string>();
  return value
    .split(/\r\n|\n|\r/)
    .map((line) => line.trim())
    .filter((line) => {
      const key = ignoreCase ? line.toLowerCase() : line;
      if (!line || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}
export function compareLists(a: string[], b: string[], ignoreCase = false) {
  const key = (v: string) => (ignoreCase ? v.toLowerCase() : v);
  const ak = new Set(a.map(key)),
    bk = new Set(b.map(key));
  return {
    shared: a.filter((v) => bk.has(key(v))),
    onlyA: a.filter((v) => !bk.has(key(v))),
    onlyB: b.filter((v) => !ak.has(key(v))),
  };
}
