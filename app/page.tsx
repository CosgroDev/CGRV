import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Now } from "@/components/sections/now";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { FadeIn } from "@/components/ui/fade-in";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn delay={0.05}>
        <Now />
      </FadeIn>
      <FadeIn delay={0.05}>
        <Projects />
      </FadeIn>
      <FadeIn delay={0.05}>
        <Contact />
      </FadeIn>
    </>
  );
}
