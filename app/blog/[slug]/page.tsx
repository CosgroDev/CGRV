import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getPosts, getPost } from "@/lib/posts";

const pixelFont = { fontFamily: '"Press Start 2P", monospace' };

// MDX elements styled to match the blog's pixel aesthetic
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-[#22c55e] text-[12px] mt-8 mb-3 leading-relaxed"
      style={pixelFont}
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-[#f0f0f0] text-[11px] mt-6 mb-2 leading-relaxed"
      style={pixelFont}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-[#f0f0f0] text-[11px] leading-loose mb-4"
      style={pixelFont}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="text-[#f0f0f0] text-[11px] leading-loose mb-4 space-y-2 pl-4"
      style={pixelFont}
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="text-[#f0f0f0] text-[11px] leading-loose mb-4 space-y-2 pl-4 list-decimal"
      style={pixelFont}
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="before:content-['▸'] before:text-[#22c55e] before:mr-2" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-[#22c55e]" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="text-[#f0f0f0] not-italic border-b border-[#22c55e]" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-[#1a1a1a] text-[#22c55e] px-1.5 py-0.5 rounded text-[10px]"
      style={pixelFont}
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-[#1a1a1a] border border-[#333333] rounded p-4 overflow-x-auto mb-4 text-[8px] text-[#22c55e] leading-relaxed"
      style={pixelFont}
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-l-2 border-[#22c55e] pl-4 text-[#888888] text-[9px] leading-loose mb-4 italic"
      style={pixelFont}
      {...props}
    />
  ),
  hr: () => <div className="pixel-divider my-6" />,
};

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
  if (!post) return { title: "Post Not Found | Dale Cosgrove" };
  return {
    title: `${post.title} | Dale Cosgrove`,
    description: post.description,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Dale Cosgrove",
      url: "https://cgrv.co.uk",
    },
    publisher: {
      "@type": "Person",
      name: "Dale Cosgrove",
      url: "https://cgrv.co.uk",
    },
    url: `https://cgrv.co.uk/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
          style={pixelFont}
        >
          {post.title}
        </h1>

        <div
          className="flex flex-wrap items-center gap-4 text-[#888888] text-[7px] mb-4"
          style={pixelFont}
        >
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

      {/* MDX Content */}
      <article>
        <MDXRemote source={post.content} components={mdxComponents} />
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
