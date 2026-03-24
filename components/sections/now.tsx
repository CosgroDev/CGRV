import { yearsFrom } from "@/lib/dates";

const POWER_PLATFORM_START = new Date(2020, 2, 1); // March 2020

const focuses = [
  {
    id: "01",
    label: "AI-Augmented Learning",
    body: [
      `AI has fundamentally changed how fast I can pick things up. The skill I've built isn't just using AI tools. It's knowing how to work with them effectively: structuring problems clearly, iterating on outputs, and critically evaluating what comes back rather than accepting it at face value. That approach has let me move into Python, web development, and data pipeline work far faster than I could have otherwise.`,
    ],
    tags: ["Prompt Engineering", "Critical Thinking", "Self-Directed Learning", "Python", "Web Dev"],
  },
  {
    id: "02",
    label: "Automated Data Pipelines",
    body: [
      `Building Python-based tools that use API calls to gather data automatically from multiple sources, then scheduling them with CRON jobs to keep everything current without manual intervention. The aim is live, reliable data feeding into dashboards and decision-making rather than periodic manual exports.`,
    ],
    tags: ["Python", "APIs", "CRON Jobs", "Power BI", "Automation"],
  },
  {
    id: "03",
    label: "West Green Darts",
    body: [
      `Built and actively developing a mobile-first web app for managing West Green Darts team. Handles fixtures, live 501 scoring with finish guidance, player profiles, and tracks 18+ performance metrics per player. Currently in active use by the team.`,
    ],
    tags: ["Next.js", "TypeScript", "SQLite", "PWA"],
  },
];

export function Now() {
  const ppYears = yearsFrom(POWER_PLATFORM_START);

  return (
    <section id="now" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="mb-12">
        <p
          className="text-xs font-medium uppercase tracking-widest text-[#888888] mb-3"
          style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
        >
          02 / Now
        </p>
        <h2
          className="text-3xl sm:text-4xl font-black text-[#111111] mb-4"
          style={{ fontFamily: '"Aspekta", "Plus Jakarta Sans", Arial, sans-serif' }}
        >
          What I&apos;m <span className="text-[#1e4d2b]">Working On</span>
        </h2>
        <div className="editorial-divider" />
      </div>

      {/* Power Platform callout strip */}
      <div
        className="border-l-4 border-[#1e4d2b] bg-[#f4f4f4] px-6 py-4 mb-10"
        style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
      >
        <p className="text-sm text-[#111111] leading-relaxed">
          <span className="font-bold">Microsoft Power Platform</span> has been central to my work for{" "}
          <span className="font-bold text-[#1e4d2b]">{ppYears} years</span>, building
          production Power Apps and Power Automate flows actively used across the business every day.
        </p>
      </div>

      {/* Focus items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {focuses.map((item) => (
          <div
            key={item.id}
            className="border border-[#e0e0e0] bg-white p-6 flex flex-col gap-4 rounded-sm"
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-black text-[#e0e0e0] tracking-widest"
                style={{ fontFamily: '"Aspekta", "Plus Jakarta Sans", Arial, sans-serif' }}
              >
                #{item.id}
              </span>
              <span
                className="inline-block w-2 h-2 rounded-full bg-[#1e4d2b]"
              />
            </div>
            <h3
              className="text-lg font-black text-[#111111] leading-tight"
              style={{ fontFamily: '"Aspekta", "Plus Jakarta Sans", Arial, sans-serif' }}
            >
              {item.label}
            </h3>
            <div
              className="text-sm text-[#888888] leading-relaxed space-y-2 flex-1"
              style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
            >
              {item.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#e0e0e0]">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-[#888888] bg-[#f4f4f4] px-2 py-1 rounded-sm"
                  style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
