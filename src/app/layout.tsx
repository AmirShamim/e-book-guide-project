import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Ship It: The AI-Powered Mobile App Builder's Playbook",
  description: "Learn how to build real mobile apps with AI in 2026. Without wasting credits or writing bad code.",
  keywords: ["AI mobile app development", "React Native", "Expo", "Claude", "GPT", "Gemini", "Cursor", "AI coding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
