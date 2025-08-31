import type { Metadata } from "next"
import ContactPageClient from "@/components/contact-page-client"

export const metadata: Metadata = {
  title: "Contact Us - Wanderlust",
  description: "Get in touch with our eco-tourism experts. We're here to help you plan your next sustainable adventure and answer any questions about our services.",
  keywords: [
    "contact Wanderlust",
    "eco-tourism contact",
    "travel planning",
    "sustainable travel support",
    "adventure booking",
    "travel consultation",
    "Wanderlust"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com/contact",
    title: "Contact Us - Wanderlust",
    description: "Get in touch with our eco-tourism experts. We're here to help you plan your next sustainable adventure and answer any questions about our services.",
    siteName: "Wanderlust",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Wanderlust",
    description: "Get in touch with our eco-tourism experts. We're here to help you plan your next sustainable adventure and answer any questions about our services.",
    creator: "@codestam",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
