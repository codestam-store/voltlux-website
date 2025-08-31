
import { Metadata } from "next"
import { HomePageClient } from "@/components/home-page-client"

export const metadata: Metadata = {
  title: "EcoThread - Sustainable Fashion &amp; Conscious Living",
  description: "Discover sustainable fashion that honors the planet. EcoThread offers ethically crafted clothing, eco-friendly accessories, and conscious living essentials for a mindful lifestyle.",
  keywords: [
    "sustainable fashion",
    "eco-friendly clothing",
    "ethical fashion",
    "conscious living",
    "organic textiles",
    "slow fashion",
    "environmentally friendly",
    "fair trade",
    "zero waste",
    "EcoThread"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  openGraph: {
    title: "EcoThread - Sustainable Fashion &amp; Conscious Living",
    description: "Discover sustainable fashion that honors the planet. EcoThread offers ethically crafted clothing, eco-friendly accessories, and conscious living essentials for a mindful lifestyle.",
    url: "https://codestam.com",
    siteName: "EcoThread",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoThread - Sustainable Fashion &amp; Conscious Living",
    description: "Discover sustainable fashion that honors the planet. EcoThread offers ethically crafted clothing, eco-friendly accessories, and conscious living essentials for a mindful lifestyle.",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
