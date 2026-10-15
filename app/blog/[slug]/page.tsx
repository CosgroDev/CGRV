import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";
export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: `${post?.title ?? "Note not found"} | CGRV`,
    description: post?.description,
  };
}
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { Content } = post;
  return (
    <article className="wrap section">
      <Link className="text-link" href="/blog">
        ← All field notes
      </Link>
      <div className="page-heading">
        <p className="eyebrow">
          {post.date} / {post.readTime}
        </p>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>
      <div className="prose article-copy">
        <Content />
      </div>
    </article>
  );
}
