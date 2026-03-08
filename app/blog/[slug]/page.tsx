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
  {
    slug: "power-automate-automation-microsoft-365",
    title: "POWER AUTOMATE: THE QUIET ENGINE BEHIND M365 AUTOMATION",
    date: "2026-03-08",
    readTime: "6 MIN READ",
    tags: ["MICROSOFT 365", "POWER AUTOMATE", "AUTOMATION"],
    content: `If you work inside a Microsoft 365 environment and you're still copying data between spreadsheets, chasing people for updates over email, or manually logging entries into SharePoint lists — Power Automate is probably the most underused tool in your organisation.

It sits quietly in the background of M365, but it's one of the most capable automation tools available without writing a single line of code. Here's why it matters and what it actually enables.

WHAT IS POWER AUTOMATE?

Power Automate is Microsoft's workflow automation platform. It connects apps, services, and data sources — both inside and outside Microsoft 365 — and lets you build automated flows that trigger on events, run on a schedule, or respond to user actions. Think of it as the connective tissue between the tools your team already uses every day.

The key pillars are triggers (what starts the flow), actions (what the flow does), and conditions (logic that controls the path). Build those three things together and you can automate almost any repeatable process.

TEAMS AND EMAIL NOTIFICATIONS THAT ACTUALLY MEAN SOMETHING

One of the most immediate wins with Power Automate is notifications. Not the generic "you've been tagged" alerts that pile up and get ignored — but targeted, context-rich messages delivered at exactly the right moment.

You can trigger a Teams notification when a SharePoint list item changes status, when a form is submitted, when a deadline is approaching, or when a record meets a specific condition. The message can include the relevant details pulled directly from the data source — no need to go hunting for context.

The same applies to email. Flows can send formatted email alerts with dynamic content, attachments, and links to the source record. For teams managing audits, incidents, or supplier approvals, this kind of timely, relevant notification replaces a whole layer of manual chasing.

ADAPTIVE CARDS: DATA COLLECTION WITHOUT LEAVING TEAMS

This is where Power Automate starts to feel genuinely powerful. Adaptive Cards are interactive cards that can be sent directly into a Teams chat or channel, and they allow the recipient to input data, make selections, or approve requests — without leaving Teams and without touching the underlying system.

In practice this means you can send someone an approval request that they action with a single click inside Teams, send a structured form as a card so a team member can log information directly from their phone, collect responses from multiple people and automatically consolidate them into a SharePoint list, or trigger the next step in a process the moment someone submits the card.

The data flows automatically into wherever you need it — SharePoint, Dataverse, an Excel file — without anyone having to navigate to a separate system, copy anything manually, or remember where to put it.

SHAREPOINT LISTS AS THE DATA BACKBONE

SharePoint lists are the natural home for structured operational data inside M365, and Power Automate integrates with them seamlessly. Every time a new item is added, a column changes, or a threshold is met, a flow can react — validating the entry, notifying the right person, moving the item through a workflow, or writing a record to a secondary list.

This is particularly useful for processes that were previously managed in Excel files passed around by email. Replacing those with a SharePoint list and a set of flows gives you a live, auditable record with automated actions baked in from the start.

WHERE TO START

If you haven't used Power Automate before, the best approach is to identify one manual, repeatable task that happens regularly and has a clear trigger. Something like "when this form is submitted, notify this person and create a record here." Build that flow, get comfortable with the structure, then expand from there.

The investment required to get going is low. The compounding value — from reduced manual work, faster responses, and better data quality — adds up quickly.

Power Automate won't replace everything, but for the category of repeatable, rule-based tasks that eat up time in every team, it's one of the most practical tools available inside an M365 environment right now.`,
  },
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
