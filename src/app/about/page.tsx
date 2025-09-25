import type { Metadata } from "next"
import { AboutPageClient } from "@/components/about-page-client"

export const metadata: Metadata = {
  title: "About Us - GreenTech Gardens | Sustainable Urban Farming Solutions",
  description: "Learn about GreenTech Gardens' mission to revolutionize urban agriculture through innovative hydroponic systems. Meet our team and discover our journey in sustainable farming technology.",
  keywords: "about us, urban farming, sustainable agriculture, hydroponic systems, green technology, team, mission, values",
  authors: [{ name: "GreenTech Gardens Team" }],
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  openGraph: {
    title: "About Us - GreenTech Gardens | Sustainable Urban Farming Solutions",
    description: "Learn about GreenTech Gardens' mission to revolutionize urban agriculture through innovative hydroponic systems. Meet our team and discover our journey in sustainable farming technology.",
    url: "https://codestam.com/about",
    siteName: "GreenTech Gardens",
    images: [
      {
        url: "https://maxm-imggenurl.web.val.run/diverse team of people working together in modern vertical farm, collaboration, innovation, sustainable agriculture, bright and inspiring environment",
        width: 1200,
        height: 630,
        alt: "GreenTech Gardens team working together in sustainable farming",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - GreenTech Gardens | Sustainable Urban Farming Solutions",
    description: "Learn about GreenTech Gardens' mission to revolutionize urban agriculture through innovative hydroponic systems. Meet our team and discover our journey in sustainable farming technology.",
    images: ["https://maxm-imggenurl.web.val.run/diverse team of people working together in modern vertical farm, collaboration, innovation, sustainable agriculture, bright and inspiring environment"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}