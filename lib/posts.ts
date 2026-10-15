// Blog post helpers.
// To add a new post: create a .mdx file in content/posts/ with frontmatter.
// The listing, sitemap, and post pages all update automatically.
//
// Cloudflare Workers have no filesystem and cannot compile MDX at request
// time, so posts are compiled to React components at build time (see
// vite.config.ts) and discovered with import.meta.glob.

import type { ComponentType } from "react";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO 8601: YYYY-MM-DD
  readTime: string;
  tags: string[];
};

export type Post = PostMeta & { Content: ComponentType };

type PostModule = {
  default: ComponentType;
  frontmatter: Omit<PostMeta, "slug">;
};

const modules = import.meta.glob<PostModule>("/content/posts/*.mdx", {
  eager: true,
});

const posts: Post[] = Object.entries(modules)
  .map(([file, mod]) => ({
    slug: file.replace(/^.*\//, "").replace(/\.mdx$/, ""),
    ...mod.frontmatter,
    Content: mod.default,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPosts(): PostMeta[] {
  return posts.map(({ Content: _content, ...meta }) => meta);
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
