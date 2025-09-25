
import type { Metadata } from "next"
import { HomePageClient } from "@/components/home-page-client"

export const metadata: Metadata = {
  title: "GreenTech Gardens - Sustainable Urban Farming &amp; Vertical Growing Solutions",
  description: "Transform your urban space with GreenTech Gardens&apos; innovative vertical farming solutions. Sustainable hydroponic systems, smart growing technology, and eco-friendly urban agriculture for modern living.",
  keywords: [
    "vertical farming",
    "urban gardening",
    "hydroponic systems",
    "sustainable agriculture",
    "smart growing technology",
    "eco-friendly farming",
    "indoor gardening",
    "green technology",
    "urban farming solutions",
    "sustainable living"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com",
    title: "GreenTech Gardens - Sustainable Urban Farming &amp; Vertical Growing Solutions",
    description: "Transform your urban space with GreenTech Gardens&apos; innovative vertical farming solutions. Sustainable hydroponic systems, smart growing technology, and eco-friendly urban agriculture for modern living.",
    siteName: "GreenTech Gardens",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GreenTech Gardens - Sustainable Urban Farming &amp; Vertical Growing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenTech Gardens - Sustainable Urban Farming &amp; Vertical Growing Solutions",
    description: "Transform your urban space with GreenTech Gardens&apos; innovative vertical farming solutions. Sustainable hydroponic systems, smart growing technology, and eco-friendly urban agriculture for modern living.",
    images: ["/og-image.jpg"],
    creator: "@codestam",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
