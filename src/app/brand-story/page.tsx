import type { Metadata } from "next"
import BrandStoryPageClient from "@/components/brand-story-page-client"

export const metadata: Metadata = {
  title: "Brand Story - VoltLux",
  description: "Discover the VoltLux story - our mission to revolutionize electric mobility through innovation, sustainability, and luxury. Learn about our journey, values, and vision for the future.",
  keywords: [
    "VoltLux brand story",
    "electric vehicle company",
    "sustainable mobility",
    "luxury EV brand",
    "innovation story",
    "electric vehicle mission",
    "automotive sustainability"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/brand-story",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com/brand-story",
    title: "Brand Story - VoltLux",
    description: "Discover the VoltLux story - our mission to revolutionize electric mobility through innovation, sustainability, and luxury. Learn about our journey, values, and vision for the future.",
    siteName: "VoltLux",
    images: [
      {
        url: "/og-brand-story.jpg",
        width: 1200,
        height: 630,
        alt: "VoltLux Brand Story",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Story - VoltLux",
    description: "Discover the VoltLux story - our mission to revolutionize electric mobility through innovation, sustainability, and luxury. Learn about our journey, values, and vision for the future.",
    images: ["/og-brand-story.jpg"],
    creator: "@codestam",
  },
}

export default function BrandStoryPage() {
  return <BrandStoryPageClient />
}