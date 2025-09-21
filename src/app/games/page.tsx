import type { Metadata } from "next";
import { CartoonNavbar } from "@/components/cartoon-navbar";
import { GamesSection } from "@/components/sections/games-section";

export const metadata: Metadata = {
  title: "Educational Games - FunLearn Academy",
  description: "Play fun educational games that teach math, science, reading, and more! Interactive games designed to make learning enjoyable for children of all ages.",
  keywords: ["educational games", "learning games", "kids games", "interactive learning", "fun education"],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  openGraph: {
    title: "Educational Games - FunLearn Academy",
    description: "Play fun educational games that teach math, science, reading, and more! Interactive games designed to make learning enjoyable for children of all ages.",
    url: "https://codestam.com/games",
    siteName: "FunLearn Academy",
    type: "website",
  },
};

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <CartoonNavbar />
      <div className="pt-20">
        <GamesSection />
      </div>
    </main>
  );
}