import type { Metadata } from "next"
import TechnologyPageClient from "@/components/technology-page-client"

export const metadata: Metadata = {
  title: "Advanced Electric Vehicle Technology - VoltLux",
  description: "Discover the cutting-edge technology powering VoltLux electric vehicles. From advanced battery systems to autonomous driving capabilities, explore our innovations.",
  keywords: [
    "electric vehicle technology",
    "EV battery technology",
    "autonomous driving",
    "electric motor technology",
    "fast charging",
    "vehicle AI",
    "VoltLux innovation"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/technology",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com/technology",
    title: "Advanced Electric Vehicle Technology - VoltLux",
    description: "Discover the cutting-edge technology powering VoltLux electric vehicles. From advanced battery systems to autonomous driving capabilities, explore our innovations.",
    siteName: "VoltLux",
    images: [
      {
        url: "/og-technology.jpg",
        width: 1200,
        height: 630,
        alt: "VoltLux Electric Vehicle Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Electric Vehicle Technology - VoltLux",
    description: "Discover the cutting-edge technology powering VoltLux electric vehicles. From advanced battery systems to autonomous driving capabilities, explore our innovations.",
    images: ["/og-technology.jpg"],
    creator: "@codestam",
  },
}

export default function TechnologyPage() {
  return <TechnologyPageClient />
}