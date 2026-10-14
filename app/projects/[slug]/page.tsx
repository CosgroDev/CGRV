import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/workshop";
import { ProjectArt } from "@/components/workshop/project-art";
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: `${project?.title ?? "Project not found"} | CGRV`,
    description: project?.description,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <article className="wrap section">
      <Link className="text-link" href="/projects">
        ← Back to the workbench
      </Link>
      <div className="page-heading">
        <p className="eyebrow">
          PROJECT {project.number} / {project.category}
        </p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <div className="case-grid">
        <div className="case-art">
          <ProjectArt kind={project.kind} />
          <p className="caption">{project.note}</p>
        </div>
        <div className="case-copy">
          <section>
            <p className="eyebrow">01 / THE PROBLEM</p>
            <h2>What needed thinking through?</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <p className="eyebrow">02 / THE APPROACH</p>
            <h2>Start with how people work.</h2>
            <p>{project.approach}</p>
          </section>
          <section>
            <p className="eyebrow">03 / THE FOCUS</p>
            <ul className="focus-list">
              {project.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          {project.kind === "tools" ? (
            <Link className="work-button blue-button" href="/toolbox">
              Try the tools ↗
            </Link>
          ) : (
            <a className="work-button" href="mailto:dale@cgrv.co.uk">
              Ask me about this project ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
