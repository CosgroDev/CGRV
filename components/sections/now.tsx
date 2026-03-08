import { yearsFrom } from "@/lib/dates";

const POWER_PLATFORM_START = new Date(2020, 2, 1); // March 2020

const focuses = [
  {
    id: "01",
    label: "AI-Augmented Learning",
    accent: "#22c55e",
    body: [
      `AI has fundamentally changed how fast I can pick things up. The skill I've built isn't just using AI tools. It's knowing how to work with them effectively: structuring problems clearly, iterating on outputs, and critically evaluating what comes back rather than accepting it at face value. That approach has let me move into Python, web development, and data pipeline work far faster than I could have otherwise. AI acts as a tutor, a sounding board, and a collaborator. Learning to use it well is its own transferable skill.`,
    ],
    tags: ["Prompt Engineering", "Critical Thinking", "Self-Directed Learning", "Python", "Web Dev"],
  },
  {
    id: "02",
    label: "Automated Data Pipelines",
    accent: "#2E3A8C",
    body: [
      `Building Python-based tools that use API calls to gather data automatically from multiple sources, then scheduling them with CRON jobs to keep everything current without manual intervention. The aim is live, reliable data feeding into dashboards and decision-making rather than periodic manual exports.`,
    ],
    tags: ["Python", "APIs", "CRON Jobs", "Power BI", "Automation"],
  },
  {
    id: "03",
    label: "This Portfolio",
    accent: "#F59E0B",
    body: [
      `Learning modern web development by building this site from scratch. Next.js, TypeScript, and a design system built to be genuinely useful, not just a template.`,
    ],
    tags: ["Next.js", "TypeScript", "Web Dev"],
  },
];

export function Now() {
  const ppYears = yearsFrom(POWER_PLATFORM_START);

  return (
    <section id="now" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="mb-12">
        <p
          className="text-xs font-medium uppercase tracking-widest text-[#7A7870] mb-3"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          02 / Now
        </p>
        <h2
          className="text-3xl sm:text-4xl font-black text-[#1C1C1A] mb-4"
          style={{ fontFamily: '"Syne", sans-serif' }}
        >
          What I&apos;m <span className="text-[#2E3A8C]">Working On</span>
        </h2>
        <div className="editorial-divider" />
      </div>

      {/* Power Platform callout strip */}
      <div
        className="border-l-4 border-[#22c55e] bg-[#F5F4F0] px-6 py-4 mb-10"
        style={{ fontFamily: '"DM Sans", sans-serif' }}
      >
        <p className="text-sm text-[#1C1C1A] leading-relaxed">
          <span className="font-bold">Microsoft Power Platform</span> has been central to my work for{" "}
          <span className="font-bold text-[#22c55e]">{ppYears} years</span>, building
          production Power Apps and Power Automate flows that are actively used
          across the business every day.
        </p>
      </div>

      {/* Focus items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {focuses.map((item) => (
          <div
            key={item.id}
            className="border-2 border-[#E8E5DE] bg-white p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-black text-[#D5D1C9] tracking-widest"
                style={{ fontFamily: '"Syne", sans-serif' }}
              >
                #{item.id}
              </span>
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: item.accent }}
              />
            </div>
            <h3
              className="text-lg font-black text-[#1C1C1A] leading-tight"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              {item.label}
            </h3>
            <div
              className="text-sm text-[#7A7870] leading-relaxed space-y-2 flex-1"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              {item.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E8E5DE]">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-[#7A7870] bg-[#F5F4F0] px-2 py-1"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
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
