import type { Metadata } from "next"
import CommunityPageClient from "@/components/community-page-client"

export const metadata: Metadata = {
  title: "Community - NOIR ",
  description: "Connect with fellow eco-tourists, share your travel stories, and join our global community of conscious travelers.",
  keywords: [
    "eco-tourism community",
    "travel community",
    "sustainable travel",
    "traveler stories",
    "eco-tourist network",
    "travel community",
    "NOIR "
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/community",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com/community",
    title: "Community - NOIR ",
    description: "Connect with fellow eco-tourists, share your travel stories, and join our global community of conscious travelers.",
    siteName: "NOIR ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community - NOIR ",
    description: "Connect with fellow eco-tourists, share your travel stories, and join our global community of conscious travelers.",
    creator: "@codestam",
  },
}

export default function CommunityPage() {
  return <CommunityPageClient />
}
