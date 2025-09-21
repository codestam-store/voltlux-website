import type { Metadata } from "next";
import { CartoonNavbar } from "@/components/cartoon-navbar";
import { CharactersSection } from "@/components/sections/characters-section";

export const metadata: Metadata = {
  title: "Meet Our Characters - FunLearn Academy",
  description: "Meet our lovable cartoon characters! Buddy the Bear, Luna the Unicorn, Rocket the Fox, and more friends who make learning fun and engaging for kids.",
  keywords: ["cartoon characters", "learning buddies", "educational mascots", "kids friends", "learning companions"],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  openGraph: {
    title: "Meet Our Characters - FunLearn Academy",
    description: "Meet our lovable cartoon characters! Buddy the Bear, Luna the Unicorn, Rocket the Fox, and more friends who make learning fun and engaging for kids.",
    url: "https://codestam.com/characters",
    siteName: "FunLearn Academy",
    type: "website",
  },
};

export default function CharactersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <CartoonNavbar />
      <div className="pt-20">
        <CharactersSection />
      </div>
    </main>
  );
}