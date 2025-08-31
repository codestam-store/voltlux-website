import type { Metadata } from "next"
import AdventuresPageClient from "@/components/adventures-page-client"

export const metadata: Metadata = {
  title: "Adventures - Wanderlust",
  description: "Choose from our diverse range of eco-tourism adventures. From mountain expeditions to cultural immersion, discover sustainable travel experiences designed to connect you with nature.",
  keywords: [
    "eco-tourism adventures",
    "mountain expeditions",
    "wilderness trekking",
    "cultural immersion",
    "sustainable travel",
    "adventure tourism",
    "Wanderlust"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/adventures",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com/adventures",
    title: "Adventures - Wanderlust",
    description: "Choose from our diverse range of eco-tourism adventures. From mountain expeditions to cultural immersion, discover sustainable travel experiences designed to connect you with nature.",
    siteName: "Wanderlust",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adventures - Wanderlust",
    description: "Choose from our diverse range of eco-tourism adventures. From mountain expeditions to cultural immersion, discover sustainable travel experiences designed to connect you with nature.",
    creator: "@codestam",
  },
}

export default function AdventuresPage() {
  return <AdventuresPageClient />
}
