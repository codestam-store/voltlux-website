import type { Metadata } from "next";
import { CartoonNavbar } from "@/components/cartoon-navbar";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact Us - FunLearn Academy",
  description: "Get in touch with FunLearn Academy! We&apos;re here to help with any questions about our educational platform, technical support, or partnership opportunities.",
  keywords: ["contact", "support", "help", "customer service", "educational platform"],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  openGraph: {
    title: "Contact Us - FunLearn Academy",
    description: "Get in touch with FunLearn Academy! We&apos;re here to help with any questions about our educational platform, technical support, or partnership opportunities.",
    url: "https://codestam.com/contact",
    siteName: "FunLearn Academy",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <CartoonNavbar />
      <div className="pt-20">
        <ContactSection />
      </div>
    </main>
  );
}