import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

// -----------------------------------------------------------------------
// Add posts here as you write them
// Each post needs: slug, title, date, readTime, tags, content (JSX string)
// -----------------------------------------------------------------------
type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string; // Plain text / markdown — upgrade to MDX when needed
};

const posts: Post[] = [
  // Example:
  // {
  //   slug: "why-food-safety-needs-tech",
  //   title: "WHY FOOD SAFETY NEEDS BETTER TECH",
  //   date: "2025-01-01",
  //   readTime: "5 MIN READ",
  //   tags: ["FOOD SAFETY", "TECH", "DIGITALISATION"],
  //   content: `Your full post content goes here...`,
  // },
];

function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found | Dale Cosgrove" };
  return {
    title: `${post.title} | Dale Cosgrove`,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Back */}
      <Link href="/blog" className="inline-block mb-8">
        <Button variant="ghost" size="sm">
          <ArrowLeft size={10} className="mr-2" />
          BACK TO BLOG
        </Button>
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="green">
              {tag}
            </Badge>
          ))}
        </div>

        <h1
          className="text-[#f0f0f0] text-base sm:text-lg mb-6 leading-relaxed"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-[#888888] text-[7px] mb-4"
          style={{ fontFamily: '"Press Start 2P", monospace' }}>
          <div className="flex items-center gap-2">
            <Calendar size={10} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={10} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="pixel-divider" />
      </div>

      {/* Content */}
      <article
        className="text-[#f0f0f0] text-[9px] leading-loose space-y-4"
        style={{ fontFamily: '"Press Start 2P", monospace' }}
      >
        {post.content.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t-2 border-[#333333]">
        <Link href="/blog">
          <Button variant="ghost" size="sm">
            <ArrowLeft size={10} className="mr-2" />
            ALL POSTS
          </Button>
        </Link>
      </div>
    </div>
  );
}
