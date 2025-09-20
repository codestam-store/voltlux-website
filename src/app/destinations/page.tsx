import type { Metadata } from "next"
import DestinationsPageClient from "@/components/destinations-page-client"

export const metadata: Metadata = {
  title: "Destinations - VoltLux",
  description: "Explore our handpicked eco-tourism destinations around the world. From pristine wilderness to cultural experiences, discover sustainable travel opportunities.",
  keywords: [
    "eco-tourism destinations",
    "sustainable travel",
    "wilderness expeditions",
    "adventure destinations",
    "nature travel",
    "VoltLux"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/destinations",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com/destinations",
    title: "Destinations - VoltLux",
    description: "Explore our handpicked eco-tourism destinations around the world. From pristine wilderness to cultural experiences, discover sustainable travel opportunities.",
    siteName: "VoltLux",
  },
  twitter: {
    card: "summary_large_image",
    title: "Destinations - VoltLux",
    description: "Explore our handpicked eco-tourism destinations around the world. From pristine wilderness to cultural experiences, discover sustainable travel opportunities.",
    creator: "@codestam",
  },
}

export default function DestinationsPage() {
  return <DestinationsPageClient />
}
