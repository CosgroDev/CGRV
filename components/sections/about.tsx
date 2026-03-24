import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { yearsFrom } from "@/lib/dates";

const POWER_PLATFORM_START = new Date(2020, 2, 1); // March 2020

const skills = [
  "Food Safety & HACCP",
  "Data Analysis",
  "Project Management",
  "Process Improvement",
  "Regulatory Compliance",
  "Risk Assessment",
  "Systems Thinking",
  "Tech & Automation",
  "Supply Chain Technical",
  "Power Apps & Power Automate",
  "Power BI",
  "Continuous Improvement",
];

const traits = [
  "Detail-Oriented",
  "Data-Driven",
  "Collaborative",
  "Innovative",
  "Safety-First",
  "Tech-Curious",
];

export function About() {
  const ppYears = yearsFrom(POWER_PLATFORM_START);
  return (
    <section id="about" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="mb-12">
        <p
          className="text-xs font-medium uppercase tracking-widest text-[#888888] mb-3"
          style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
        >
          01 / About
        </p>
        <h2
          className="text-3xl sm:text-4xl font-black text-[#111111] mb-4"
          style={{ fontFamily: '"Aspekta", "Plus Jakarta Sans", Arial, sans-serif' }}
        >
          About <span className="text-[#1e4d2b]">Me</span>
        </h2>
        <div className="editorial-divider" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bio */}
        <Card variant="green">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="text-sm text-[#111111] leading-relaxed space-y-4"
              style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
            >
              <p>
                Food safety professional who builds things with tech. Currently in a Projects &amp; Performance
                role at FBC UK, one of the UK&apos;s largest biscuit manufacturers.
              </p>
              <p>
                My work sits at the intersection of food safety, data analysis, systems thinking,
                and project management. I use that vantage point to make operations smarter and food safer.
              </p>
              <p>
                I&apos;ve spent {ppYears} years building with the{" "}
                <span className="font-semibold">Microsoft Power Platform</span> — production
                Power Apps and Power Automate flows used across the business every day.
              </p>
              <p>
                Outside work: I explore tech, build things, and write about what I learn.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card variant="default">
          <CardHeader>
            <CardTitle>Skills &amp; Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="green">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traits */}
        <Card variant="default" className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Character</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {traits.map((trait) => (
                <Badge key={trait} variant="default">{trait}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
