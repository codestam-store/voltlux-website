
import type { Metadata } from "next"
import HomePageClient from "@/components/home-page-client"

export const metadata: Metadata = {
  title: "Wanderlust - Eco-Tourism &amp; Adventure Travel Experiences",
  description: "Discover transformative eco-tourism adventures that connect you with nature. Wanderlust offers sustainable travel experiences, wilderness expeditions, and mindful exploration across pristine landscapes.",
  keywords: [
    "eco-tourism",
    "adventure travel",
    "sustainable tourism",
    "wilderness expeditions",
    "nature experiences",
    "mindful travel",
    "outdoor adventures",
    "eco-friendly travel",
    "sustainable tourism",
    "Wanderlust"
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
    title: "Wanderlust - Eco-Tourism &amp; Adventure Travel Experiences",
    description: "Discover transformative eco-tourism adventures that connect you with nature. Wanderlust offers sustainable travel experiences, wilderness expeditions, and mindful exploration across pristine landscapes.",
    siteName: "Wanderlust",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wanderlust - Eco-Tourism &amp; Adventure Travel Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanderlust - Eco-Tourism &amp; Adventure Travel Experiences",
    description: "Discover transformative eco-tourism adventures that connect you with nature. Wanderlust offers sustainable travel experiences, wilderness expeditions, and mindful exploration across pristine landscapes.",
    images: ["/og-image.jpg"],
    creator: "@codestam",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
