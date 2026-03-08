import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Dale Cosgrove",
  description: "Thoughts on food safety, technology, data, and everything in between.",
};

export default function BlogPage() {
  const posts = getPosts();
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <div
          className="text-[#22c55e] text-[8px] mb-3"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          // BLOG.log
        </div>
        <h1
          className="text-[#f0f0f0] text-xl sm:text-2xl mb-4"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          BLOG
        </h1>
        <p
          className="text-[#888888] text-[9px] leading-loose max-w-xl"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          Thoughts on food safety, technology, data, and the intersection of all three.
        </p>
        <div className="pixel-divider" />
      </div>

      {posts.length === 0 ? (
        /* Empty state */
        <Card variant="default" className="text-center py-12">
          <CardContent>
            <div className="text-6xl mb-6">📝</div>
            <p
              className="text-[#22c55e] text-sm mb-4"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              LOADING POSTS...
            </p>
            <p
              className="text-[#888888] text-[8px] leading-loose mb-8 max-w-sm mx-auto"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              Content is being written. Check back soon for articles on food safety,
              technology, data analysis, and more.
            </p>
            <div
              className="flex items-center justify-center gap-1 text-[#444444] text-[8px]"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              <span>POSTS QUEUED</span>
              <span className="text-[#22c55e] animate-pulse ml-1">█</span>
            </div>
          </CardContent>
        </Card>
      ) : (
        /* Post list */
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.slug} variant="default">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[#888888] text-[7px]"
                    style={{ fontFamily: '"Press Start 2P", monospace' }}
                  >
                    {post.date}
                  </span>
                  <Badge variant="default">{post.readTime}</Badge>
                </div>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{post.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="green">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" size="sm">
                    READ MORE
                    <ArrowRight size={10} className="ml-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
