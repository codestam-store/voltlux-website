import type { Metadata } from "next"
import SpecificationsPageClient from "@/components/specifications-page-client"

export const metadata: Metadata = {
  title: "Vehicle Specifications - NOIR ",
  description: "Detailed technical specifications for all NOIR  electric vehicles. Compare performance, range, charging capabilities, and features across our entire lineup.",
  keywords: [
    "electric vehicle specs",
    "EV specifications",
    "vehicle performance",
    "battery capacity",
    "charging speed",
    "range comparison",
    "NOIR  specs"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/specifications",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com/specifications",
    title: "Vehicle Specifications - NOIR ",
    description: "Detailed technical specifications for all NOIR  electric vehicles. Compare performance, range, charging capabilities, and features across our entire lineup.",
    siteName: "NOIR ",
    images: [
      {
        url: "/og-specifications.jpg",
        width: 1200,
        height: 630,
        alt: "NOIR  Vehicle Specifications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Specifications - NOIR ",
    description: "Detailed technical specifications for all NOIR  electric vehicles. Compare performance, range, charging capabilities, and features across our entire lineup.",
    images: ["/og-specifications.jpg"],
    creator: "@codestam",
  },
}

export default function SpecificationsPage() {
  return <SpecificationsPageClient />
}