import type { Metadata } from "next";
import { CartoonNavbar } from "@/components/cartoon-navbar";
import { AdventuresSection } from "@/components/sections/adventures-section";

export const metadata: Metadata = {
  title: "Learning Adventures - FunLearn Academy",
  description: "Embark on exciting educational adventures with our cartoon friends! Explore math kingdoms, science labs, story forests, and more interactive learning experiences.",
  keywords: ["learning adventures", "educational games", "kids activities", "interactive learning", "cartoon education"],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  openGraph: {
    title: "Learning Adventures - FunLearn Academy",
    description: "Embark on exciting educational adventures with our cartoon friends! Explore math kingdoms, science labs, story forests, and more interactive learning experiences.",
    url: "https://codestam.com/adventures",
    siteName: "FunLearn Academy",
    type: "website",
  },
};

export default function AdventuresPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <CartoonNavbar />
      <div className="pt-20">
        <AdventuresSection />
      </div>
    </main>
  );
}