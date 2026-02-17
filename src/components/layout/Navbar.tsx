"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-3" : "py-6"}`}>
      <div className={`absolute inset-0 transition-all duration-500 ${isScrolled ? "glass opacity-100 border-b border-white/5 shadow-2xl shadow-black/50" : "opacity-0"}`} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
            S
          </div>
          <span className="text-xl font-bold tracking-tight">Ship It</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="text-foreground/60 hover:text-primary transition-colors">The Playbook</Link>
          <Link href="#newsletter" className="text-foreground/60 hover:text-primary transition-colors">Exclusive Content</Link>
        </div>
        <div className="flex items-center gap-4">
           <div className="hidden sm:block px-4 py-2 rounded-full glass text-[10px] items-center uppercase tracking-widest font-bold text-primary border-primary/20 border">
            Coming Soon 2026
          </div>
          <Link 
            href="#newsletter"
            className="px-5 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-white/90 transition-all hover:scale-105"
          >
            Join
          </Link>
        </div>
      </div>
    </nav>
  );
}
