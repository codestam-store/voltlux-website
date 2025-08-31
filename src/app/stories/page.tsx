import type { Metadata } from "next"
import StoriesPageClient from "@/components/stories-page-client"

export const metadata: Metadata = {
  title: "Stories - Wanderlust",
  description: "Read inspiring travel stories, expert insights, and discover the transformative power of eco-tourism through the eyes of our community.",
  keywords: [
    "travel stories",
    "eco-tourism stories",
    "travel blog",
    "sustainable travel stories",
    "adventure stories",
    "travel inspiration",
    "Wanderlust"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/stories",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com/stories",
    title: "Stories - Wanderlust",
    description: "Read inspiring travel stories, expert insights, and discover the transformative power of eco-tourism through the eyes of our community.",
    siteName: "Wanderlust",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories - Wanderlust",
    description: "Read inspiring travel stories, expert insights, and discover the transformative power of eco-tourism through the eyes of our community.",
    creator: "@codestam",
  },
}

export default function StoriesPage() {
  return <StoriesPageClient />
}
