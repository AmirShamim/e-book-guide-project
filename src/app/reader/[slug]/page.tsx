import { getChapterContent, getChapters } from "@/lib/docs";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { BookOpen, Clock, Share2, Printer } from "lucide-react";

export default async function ChapterPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const content = getChapterContent(slug);

  if (!content) {
    notFound();
  }

  // Extract title from content if possible
  const titleMatch = content.match(/^# (.*)/);
  const displayTitle = titleMatch ? titleMatch[1] : slug.replace(/-/g, " ");

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Header */}
      <header className="mb-16 border-b border-white/5 pb-16">
        <div className="flex items-center gap-2 text-primary font-mono text-xs mb-6 uppercase tracking-widest">
          <BookOpen className="w-4 h-4" />
          Module {slug.split("-")[0]}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
          {displayTitle}
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-foreground/40 text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              <span>12 min read</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <span>Updated Feb 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-white/5 transition-colors text-foreground/40 hover:text-foreground">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/5 transition-colors text-foreground/40 hover:text-foreground">
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Content Rendering */}
      <article className="prose prose-invert prose-p:text-foreground/70 prose-p:leading-relaxed prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-code:text-primary-foreground prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded-md prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/5 prose-pre:rounded-2xl prose-strong:text-foreground max-w-none">
        <ReactMarkdown
          components={{
            h1: () => null, // Hidden as we show it in header
            blockquote: ({ children }) => (
              <blockquote className="border-l-2 border-primary/30 bg-primary/5 px-6 py-1 italic text-foreground/80 rounded-r-2xl">
                {children}
              </blockquote>
            ),
            pre: ({ children }) => (
              <div className="relative group my-8">
                <div className="absolute top-4 right-4 text-[10px] text-foreground/20 font-mono uppercase">Code Block</div>
                <pre>{children}</pre>
              </div>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>

      {/* Navigation Footer */}
      <footer className="mt-32 pt-16 border-t border-white/5 flex items-center justify-between text-sm">
        <div className="flex flex-col gap-1">
          <span className="text-foreground/30 text-[10px] uppercase font-bold">Project File</span>
          <span className="text-foreground/60 font-mono">{slug}.md</span>
        </div>
        <button className="px-6 py-3 rounded-xl glass border-primary/20 text-primary font-bold hover:bg-primary/5 transition-all">
          Mark as Completed
        </button>
      </footer>
    </div>
  );
}

// Generate static params for performance
export async function generateStaticParams() {
  const chapters = getChapters();
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}
