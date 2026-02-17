"use client";

import { useState } from "react";
import { Mail, Shield } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section id="newsletter" className="relative z-10 max-w-7xl mx-auto px-6 py-40 border-t border-white/5 min-h-[600px] flex items-center justify-center">
      <div className="glass w-full max-w-4xl rounded-[3rem] border-white/10 p-12 md:p-24 relative overflow-hidden text-center shadow-2xl">
        {/* Background Glows */}
        <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-50%] right-[-50%] w-full h-full bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/5 text-[10px] font-bold uppercase tracking-widest text-primary mb-10">
            <Mail className="w-3 h-3" />
            Stay Ahead of the Curve
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Access the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Insider Network</span></h2>
          <p className="text-foreground/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            The Playbook is evolving every day. Join 1,200+ developers receiving weekly strategy snippets, tool updates, and priority access to the 2026 release.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4 max-w-lg mx-auto mb-10">
            <div className="relative w-full flex-1 group">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 px-6 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all text-sm group-hover:bg-white/[0.08]"
              />
            </div>
            <button 
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`w-full md:w-auto px-10 h-16 rounded-2xl font-bold text-sm transition-all hover:scale-105 active:scale-95 disabled:hover:scale-100 flex items-center justify-center gap-2 min-w-[140px]
                ${status === "success" 
                  ? "bg-green-500 text-white" 
                  : "bg-white text-black hover:bg-white/90 shadow-xl shadow-white/5"}`}
            >
              {status === "loading" ? "Joining..." : status === "success" ? "You're in!" : "Join Now"}
            </button>
          </form>
          
          <div className="flex items-center justify-center gap-6 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
            <div className="flex items-center gap-2">
               <Shield className="w-3 h-3" />
               No Ransomware
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <span>Updates Weekly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
