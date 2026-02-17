import { getChapters } from "@/lib/docs";
import Link from "next/link";
import { BookOpen, ChevronRight, Lock } from "lucide-react";

export default function ReaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const chapters = getChapters();

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <aside className="w-80 border-r border-white/5 bg-[#0a0a0a] hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-[10px]">
              S
            </div>
            <span className="font-bold tracking-tight text-sm text-foreground/80">Ship It Playbook</span>
          </Link>
          <div className="flex items-center justify-between text-[10px] items-center uppercase tracking-widest text-foreground/40 font-bold mb-4">
            Navigation
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">Web Edition</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
          {chapters.map((chapter) => (
            <Link
              key={chapter.slug}
              href={`/reader/${chapter.slug}`}
              className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-foreground/20 group-hover:text-primary/40 transition-colors">
                  {chapter.order.toString().padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                  {chapter.title}
                </span>
              </div>
              <ChevronRight className="w-3 h-3 text-foreground/10 group-hover:text-foreground/30 transition-colors" />
            </Link>
          ))}
          
          {/* Locked Content Mock */}
          <div className="pt-8 px-4 pb-4">
             <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-4">Advanced Modules</div>
             <div className="space-y-1 opacity-50">
                <div className="flex items-center justify-between px-4 py-3 rounded-xl cursor-not-allowed">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-foreground/20 font-mono">09</span>
                    <span className="text-sm font-medium text-foreground/40">In-App Purchases</span>
                  </div>
                  <Lock className="w-3 h-3 text-foreground/20" />
                </div>
                <div className="flex items-center justify-between px-4 py-3 rounded-xl cursor-not-allowed">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-foreground/20 font-mono">10</span>
                    <span className="text-sm font-medium text-foreground/40">AI Agent Workflows</span>
                  </div>
                  <Lock className="w-3 h-3 text-foreground/20" />
                </div>
             </div>
          </div>
        </nav>

        <div className="p-4 mt-auto">
          <div className="glass p-4 rounded-2xl border-primary/20 bg-primary/5">
            <p className="text-xs font-bold text-primary mb-1">PRO ACCESS ACTIVE</p>
            <p className="text-[10px] text-foreground/40 leading-relaxed mb-3">You have lifetime access to the 2026 edition.</p>
            <button className="w-full py-2 bg-white text-black text-[10px] font-bold rounded-lg hover:scale-[1.02] transition-transform">
              Join Discord Community
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative overflow-y-auto h-screen custom-scrollbar">
        {children}
      </main>
    </div>
  );
}
