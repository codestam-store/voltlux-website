import type { Metadata } from "next";
import { CartoonNavbar } from "@/components/cartoon-navbar";
import { ParentsSection } from "@/components/sections/parents-section";

export const metadata: Metadata = {
  title: "For Parents - FunLearn Academy",
  description: "Learn how FunLearn Academy helps your child succeed! Track progress, understand our educational approach, and discover how we make learning fun and effective.",
  keywords: ["parent information", "child progress", "educational platform", "learning tracking", "parent dashboard"],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  openGraph: {
    title: "For Parents - FunLearn Academy",
    description: "Learn how FunLearn Academy helps your child succeed! Track progress, understand our educational approach, and discover how we make learning fun and effective.",
    url: "https://codestam.com/parents",
    siteName: "FunLearn Academy",
    type: "website",
  },
};

export default function ParentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <CartoonNavbar />
      <div className="pt-20">
        <ParentsSection />
      </div>
    </main>
  );
}