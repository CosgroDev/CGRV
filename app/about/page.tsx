import Link from "next/link";
export const metadata = { title: "About Dale | CGRV" };
export default function AboutPage() {
  return (
    <div className="wrap section" id="about">
      <div className="page-heading">
        <p className="eyebrow">THE PERSON BEHIND THE WORKSHOP</p>
        <h1>
          Hi, I’m Dale<span className="orange">.</span>
        </h1>
        <p>
          Food safety and quality professional. Interested in how things work,
          and how to make them work better.
        </p>
      </div>
      <div className="about-grid">
        <div className="about-main prose">
          <h2>Factory processes into useful information.</h2>
          <p>
            My background is in food manufacturing, with experience across
            quality, food safety and supply chain technical work. I’m based in
            Barnsley, South Yorkshire.
          </p>
          <p>
            I work with data, reporting and digital systems to make everyday
            processes clearer. That includes Power Apps, Power Automate,
            SharePoint and Power BI.
          </p>
          <p>
            I like understanding the problem before choosing the tool. Who needs
            the information? What will they do with it? What makes the process
            difficult today?
          </p>
          <h2>There’s always another thing to try.</h2>
          <p>
            Outside work, my interests include darts, cooking, photography, home
            automation and technology. This site is somewhere to bring those
            interests together and share what I’m building and learning.
          </p>
          <div className="hero-actions">
            <Link className="work-button blue-button" href="/cv">
              View my CV ↗
            </Link>
            <a className="text-link" href="mailto:dale@cgrv.co.uk">
              Get in touch →
            </a>
          </div>
        </div>
        <aside className="note-paper">
          <p className="eyebrow">CURRENT INGREDIENTS</p>
          <ul className="focus-list">
            <li>Food safety & quality</li>
            <li>Data & practical systems</li>
            <li>Power Platform</li>
            <li>Darts & experiments</li>
            <li>Good food</li>
          </ul>
          <span className="signature">Keep curious.</span>
        </aside>
      </div>
    </div>
  );
}
