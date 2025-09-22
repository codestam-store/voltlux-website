import type { Metadata } from "next"
import SchedulePageClient from "@/components/schedule-page-client"

export const metadata: Metadata = {
  title: "Book Photography Session - Noir Studio",
  description: "Schedule your personalized photography session with Noir Studio. Choose from portrait sessions, wedding photography, or commercial shoots with our vintage film aesthetic.",
  keywords: [
    "book photography session",
    "schedule photo shoot",
    "portrait session booking",
    "wedding photography booking",
    "film photography session",
    "vintage photography",
    "photography appointment",
    "noir studio booking"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/schedule",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com/schedule",
    title: "Book Photography Session - Noir Studio",
    description: "Schedule your personalized photography session with Noir Studio. Choose from portrait sessions, wedding photography, or commercial shoots with our vintage film aesthetic.",
    siteName: "Noir Studio",
    images: [
      {
        url: "/og-schedule.jpg",
        width: 1200,
        height: 630,
        alt: "Book Your Photography Session at Noir Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Photography Session - Noir Studio",
    description: "Schedule your personalized photography session with Noir Studio. Choose from portrait sessions, wedding photography, or commercial shoots with our vintage film aesthetic.",
    images: ["/og-schedule.jpg"],
    creator: "@codestam",
  },
}

export default function SchedulePage() {
  return <SchedulePageClient />
}