import type { Metadata } from "next"
import ExperiencesPageClient from "@/components/experiences-page-client"

export const metadata: Metadata = {
  title: "Experiences - Wanderlust",
  description: "Discover unique eco-tourism experiences that go beyond traditional travel. From wildlife conservation to cultural workshops, immerse yourself in transformative journeys.",
  keywords: [
    "eco-tourism experiences",
    "unique travel experiences",
    "sustainable tourism",
    "cultural experiences",
    "wildlife experiences",
    "adventure experiences",
    "Wanderlust"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/experiences",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com/experiences",
    title: "Experiences - Wanderlust",
    description: "Discover unique eco-tourism experiences that go beyond traditional travel. From wildlife conservation to cultural workshops, immerse yourself in transformative journeys.",
    siteName: "Wanderlust",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiences - Wanderlust",
    description: "Discover unique eco-tourism experiences that go beyond traditional travel. From wildlife conservation to cultural workshops, immerse yourself in transformative journeys.",
    creator: "@codestam",
  },
}

export default function ExperiencesPage() {
  return <ExperiencesPageClient />
}
