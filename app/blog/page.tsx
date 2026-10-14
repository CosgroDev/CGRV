import Link from "next/link";
import { getPosts } from "@/lib/posts";
export const metadata = {
  title: "Field notes | CGRV",
  description:
    "Notes on quality, data, technology and experiments by Dale Cosgrove.",
};
export default function NotesPage() {
  const posts = getPosts();
  return (
    <div className="wrap section">
      <div className="page-heading">
        <p className="eyebrow">NOTES / WORKING THINGS OUT</p>
        <h1>
          Learning
          <br />
          <span className="outlined">out loud.</span>
        </h1>
        <p>Practical guides, experiments and things worth writing down.</p>
      </div>
      {posts.length ? (
        posts.map((post) => (
          <Link
            className="note-row"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <div>
              <p className="eyebrow">
                {post.date} / {post.readTime}
              </p>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
            <span aria-hidden="true">↗</span>
          </Link>
        ))
      ) : (
        <div className="empty-note">
          <h2>First notes still on the workbench.</h2>
          <p>This is where new articles and experiments will appear.</p>
          <Link className="text-link" href="/projects">
            Explore the projects →
          </Link>
        </div>
      )}
    </div>
  );
}
