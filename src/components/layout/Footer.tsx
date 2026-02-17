export default function Footer() {
  return (
    <footer className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-foreground/40">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center font-bold text-white text-[10px]">
          S
        </div>
        <span className="font-semibold text-foreground/60 tracking-tight">Ship It 2026</span>
      </div>
      
      <div className="flex items-center gap-8">
        <a href="#" className="hover:text-primary transition-colors">Twitter (X)</a>
        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
      </div>
      
      <p>© 2026 All Rights Reserved.</p>
    </footer>
  );
}
