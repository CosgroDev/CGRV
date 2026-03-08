import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skills = [
  { label: "FOOD SAFETY & HACCP", value: 95, color: "green" as const },
  { label: "DATA ANALYSIS", value: 78, color: "green" as const },
  { label: "PROJECT MANAGEMENT", value: 85, color: "yellow" as const },
  { label: "PROCESS IMPROVEMENT", value: 88, color: "yellow" as const },
  { label: "SYSTEMS THINKING", value: 80, color: "green" as const },
  { label: "TECH & AUTOMATION", value: 72, color: "yellow" as const },
];

const traits = [
  "DETAIL-ORIENTED",
  "DATA-DRIVEN",
  "COLLABORATIVE",
  "INNOVATIVE",
  "SAFETY-FIRST",
  "TECH-CURIOUS",
];

export function About() {
  return (
    <section id="about" className="py-16 px-4 max-w-5xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <div
          className="text-[#22c55e] text-[8px] mb-3"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          // SECTION_01
        </div>
        <h2
          className="text-[#f0f0f0] text-lg sm:text-xl mb-4"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          ABOUT ME
        </h2>
        <div className="pixel-divider" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bio card */}
        <Card variant="green">
          <CardHeader>
            <CardTitle>[ PLAYER PROFILE ]</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="text-[#f0f0f0] text-[9px] leading-loose space-y-4"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              <p>
                Hi, I&apos;m Dale — a food safety professional
                who loves everything technology. I currently
                work in a Projects &amp; Performance role at
                FBC UK, one of the UK&apos;s largest biscuit
                manufacturers.
              </p>
              <p>
                My role sits at the intersection of food
                safety, data analysis, systems thinking, and
                project management — giving me a unique
                perspective on how technology can make food
                safer and operations smarter.
              </p>
              <p>
                Outside of work, I explore tech, build things,
                and write about what I learn — always looking
                for the next level up.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills card */}
        <div className="space-y-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>[ SKILL TREE ]</CardTitle>
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
        </div>

        {/* Traits */}
        <Card variant="yellow" className="lg:col-span-2">
          <CardHeader>
            <CardTitle>[ CHARACTER TRAITS ]</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {traits.map((trait) => (
                <Badge key={trait} variant="yellow">
                  {trait}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
