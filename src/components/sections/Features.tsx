import { Code2, Cpu, Rocket, ShieldCheck, Zap, Globe } from "lucide-react";

const features = [
  {
    title: "Vibe-Coding Ready",
    description: "Learn how to structure projects so AI generators produce working production-ready code every time.",
    icon: Zap,
    color: "text-amber-400",
  },
  {
    title: "2026 Tech Stack",
    description: "Built for React Native 0.77, Expo SDK 52, and the latest LLM capabilities (Claude 3.5, Gemini 2.5).",
    icon: Cpu,
    color: "text-primary",
  },
  {
    title: "Architecture-First",
    description: "Stop building in one file. Master modular development that keeps the AI context window small and accurate.",
    icon: Code2,
    color: "text-secondary",
  },
  {
    title: "Production Guardrails",
    description: "Implement TypeScript strict mode and automated testing to catch hallucinations before they reach users.",
    icon: ShieldCheck,
    color: "text-green-400",
  },
  {
    title: "Zero Native Pain",
    description: "Leverage EAS and Expo Go to build and deploy without ever touching Xcode or Android Studio.",
    icon: Rocket,
    color: "text-rose-400",
  },
  {
    title: "Universal Apps",
    description: "One codebase for iOS, Android, and Web using Expo Router's file-based navigation system.",
    icon: Globe,
    color: "text-sky-400",
  },
];

export default function Features() {
  return (
    <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-32">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">What's Inside the Playbook?</h2>
        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
          The manual for the next generation of mobile developers. No fluff, just actionable strategy and code that works.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group glass p-8 rounded-[2rem] border-white/5 hover:border-primary/20 transition-all hover:-translate-y-2 cursor-default"
          >
            <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 transition-all group-hover:bg-primary/10 group-hover:scale-110`}>
              <feature.icon className={`w-6 h-6 ${feature.color}`} />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-foreground/40 text-sm leading-relaxed leading-relaxed group-hover:text-foreground/60 transition-colors">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
