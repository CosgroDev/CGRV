// Blog post helpers.
// To add a new post: create a .mdx file in content/posts/ with frontmatter.
// The listing, sitemap, and post pages all update automatically.

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO 8601: YYYY-MM-DD
  readTime: string;
  tags: string[];
};

export type Post = PostMeta & { content: string };

export function getPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(path.join(postsDir, file), "utf8"));
      return { slug, ...(data as Omit<PostMeta, "slug">) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | undefined {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  return { slug, ...(data as Omit<PostMeta, "slug">), content };
}
