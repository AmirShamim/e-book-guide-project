import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-primary/30">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <Navbar />
      <Hero />
      <Features />
      <Newsletter />
      <Footer />
    </main>
  );
}
