export default function Hero() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 pt-48 pb-32 flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/5 text-[10px] items-center uppercase tracking-widest font-bold text-foreground/80 mb-8 transition-all hover:border-primary/30 group">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Work in Progress
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Build Real Apps with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI in 2026</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Stop wasting credits and writing broken code. Learn the Architecture-First approach to mobile development using the 2026 AI stack.
        </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#newsletter"
              className="px-8 py-4 rounded-2xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:-translate-y-1"
            >
              Get Exclusive Access
            </a>
            <a 
              href="/reader/00-MASTER-ROADMAP"
              className="px-8 py-4 rounded-2xl glass font-semibold hover:bg-white/5 transition-all"
            >
              View the Roadmap
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-white/5 flex flex-col items-center lg:items-start gap-4">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/30">Primary Ecosystem</p>
            <div className="flex items-center gap-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
               <span className="text-xs font-bold tracking-tighter">REACT NATIVE</span>
               <span className="text-xs font-bold tracking-tighter">EXPO</span>
               <span className="text-xs font-bold tracking-tighter">CLAUDE</span>
               <span className="text-xs font-bold tracking-tighter">SUPABASE</span>
            </div>
          </div>
        </div>

      <div className="flex-1 relative w-full aspect-square max-w-[500px] animate-float">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-50 -z-10" />
        <div className="w-full h-full glass rounded-3xl border-white/10 p-8 flex items-center justify-center shadow-2xl relative overflow-hidden group">
           <div className="relative w-full h-full bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center p-8">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px]" />
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-[40px]" />
             
             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary mb-8 shadow-lg shadow-primary/30" />
             <h2 className="text-2xl font-bold text-center mb-4 tracking-tight">SHIP IT</h2>
             <div className="w-24 h-1 bg-white/10 rounded-full mb-12" />
             <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-2 font-semibold">The Playbook</p>
             <p className="text-xs text-center text-white/60">AI-Powered Mobile App Building</p>
             
             <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-[8px] text-white/20 font-mono uppercase tracking-widest">
               <span>Rev 02.26</span>
               <span>Confidential</span>
             </div>
           </div>
           
           <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
