import type { Metadata } from "next"
import ContactPageClient from "@/components/contact-page-client"

export const metadata: Metadata = {
  title: "Contact Us - VoltLux",
  description: "Get in touch with VoltLux. Contact our team for inquiries about our electric vehicles, schedule test drives, find showroom locations, or get customer support.",
  keywords: [
    "VoltLux contact",
    "electric vehicle support",
    "test drive booking",
    "showroom locations",
    "customer service",
    "EV inquiries",
    "VoltLux support"
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
    title: "Contact Us - VoltLux",
    description: "Get in touch with VoltLux. Contact our team for inquiries about our electric vehicles, schedule test drives, find showroom locations, or get customer support.",
    siteName: "VoltLux",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact VoltLux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - VoltLux",
    description: "Get in touch with VoltLux. Contact our team for inquiries about our electric vehicles, schedule test drives, find showroom locations, or get customer support.",
    images: ["/og-contact.jpg"],
    creator: "@codestam",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}