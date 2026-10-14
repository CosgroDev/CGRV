import Link from "next/link";
import { projects } from "@/lib/workshop";
import { getPosts } from "@/lib/posts";
import { ProjectCard } from "@/components/workshop/project-card";
export default function HomePage() {
  const latest = getPosts().slice(0, 2);
  return (
    <>
      <section className="hero wrap">
        <div className="hero-heading">
          <p className="eyebrow">DALE COSGROVE / BARNSLEY, UK</p>
          <h1>
            Curious mind.
            <br />
            <span className="outlined">Practical</span>
            <br />
            things<span className="orange">.</span>
          </h1>
          <div className="hero-actions">
            <Link className="work-button blue-button" href="/projects">
              Explore my projects ↗
            </Link>
            <Link className="text-link" href="/about">
              Meet Dale →
            </Link>
          </div>
        </div>
        <div className="hero-aside">
          <div className="stamp">
            ALWAYS
            <br />
            TINKERING
          </div>
          <div className="note-paper">
            <span className="eyebrow">A NOTE FROM ME</span>
            <p>
              I work in food safety and quality. I like making sense of messy
              data, building useful systems, and seeing what happens when I try
              something new.
            </p>
            <p>
              Sometimes that means a better workflow. Sometimes it means darts.
            </p>
            <span className="signature">Dale.</span>
          </div>
          <div className="interest-strip">
            <span>FOOD SAFETY</span>
            <span>DATA & SYSTEMS</span>
            <span>DARTS & TECH</span>
          </div>
        </div>
      </section>
      <div className="ticker">
        <span>MAKE IT USEFUL.</span>
        <span aria-hidden="true">✳</span>
        <span>KEEP ASKING QUESTIONS.</span>
        <span aria-hidden="true">✳</span>
        <span>BUILD. TEST. LEARN.</span>
      </div>
      <section className="wrap section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / THE WORKBENCH</p>
            <h2>Things I’ve worked on.</h2>
          </div>
          <Link className="text-link" href="/projects">
            All projects ↗
          </Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="toolbox-band">
        <div className="wrap toolbox-intro">
          <div>
            <p className="eyebrow">02 / OPEN THE TOOLBOX</p>
            <h2>For the fiddly bits.</h2>
            <p>Small tools for everyday tasks. Built to be used.</p>
          </div>
          <div className="tool-shortcuts">
            <Link href="/toolbox#lists">
              <span>01 / DATA</span>
              <strong>Clean & compare lists ↗</strong>
            </Link>
            <Link href="/toolbox#json">
              <span>02 / CODE</span>
              <strong>Format & check JSON ↗</strong>
            </Link>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / FIELD NOTES</p>
            <h2>Learning out loud.</h2>
          </div>
          <Link className="text-link" href="/blog">
            All notes ↗
          </Link>
        </div>
        {latest.length ? (
          latest.map((post) => (
            <Link
              className="note-row"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <span className="eyebrow">{post.date}</span>
              <h3>{post.title}</h3>
              <span aria-hidden="true">↗</span>
            </Link>
          ))
        ) : (
          <div className="empty-note">
            <p>
              Space for practical guides, experiments and things I’ve figured
              out along the way.
            </p>
            <span className="eyebrow">FIRST NOTES STILL ON THE WORKBENCH</span>
          </div>
        )}
      </section>
      <section className="wrap contact-box" id="contact">
        <div>
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <h2>Let’s talk it through.</h2>
          <p>
            A quality problem, a project idea, or something interesting you’re
            building.
          </p>
        </div>
        <a className="work-button" href="mailto:dale@cgrv.co.uk">
          Say hello ↗
        </a>
      </section>
    </>
  );
}
