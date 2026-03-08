import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skills = [
  { label: "Food Safety & HACCP", value: 95, color: "green" as const },
  { label: "Data Analysis", value: 78, color: "green" as const },
  { label: "Project Management", value: 85, color: "yellow" as const },
  { label: "Process Improvement", value: 88, color: "yellow" as const },
  { label: "Systems Thinking", value: 80, color: "green" as const },
  { label: "Tech & Automation", value: 72, color: "yellow" as const },
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
  return (
    <section id="about" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="mb-12">
        <p
          className="text-xs font-medium uppercase tracking-widest text-[#7A7870] mb-3"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          01 — About
        </p>
        <h2
          className="text-3xl sm:text-4xl font-black text-[#1C1C1A] mb-4"
          style={{ fontFamily: '"Syne", sans-serif' }}
        >
          About <span className="text-[#22c55e]">Me</span>
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
              className="text-sm text-[#1C1C1A] leading-relaxed space-y-4"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              <p>
                Hi, I&apos;m Dale — a food safety professional who loves everything
                technology. I currently work in a Projects &amp; Performance role at FBC UK,
                one of the UK&apos;s largest biscuit manufacturers.
              </p>
              <p>
                My role sits at the intersection of food safety, data analysis, systems
                thinking, and project management — giving me a unique perspective on how
                technology can make food safer and operations smarter.
              </p>
              <p>
                Outside of work, I explore tech, build things, and write about what I learn —
                always looking for the next step forward.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card variant="default">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skills.map((skill) => (
                <Progress
                  key={skill.label}
                  label={skill.label}
                  value={skill.value}
                  color={skill.color}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traits */}
        <Card variant="yellow" className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Character</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {traits.map((trait) => (
                <Badge key={trait} variant="yellow">{trait}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
