import type { Metadata } from "next"
import { SchedulePageClient } from "@/components/schedule-page-client"

export const metadata: Metadata = {
  title: "Schedule Free Consultation - GreenTech Gardens | Expert Growing Advice",
  description: "Book a free consultation with GreenTech Gardens' growing experts. Get personalized recommendations for hydroponic systems, urban farming solutions, and sustainable growing technology.",
  keywords: "free consultation, schedule appointment, growing experts, hydroponic consultation, urban farming advice, system recommendations",
  authors: [{ name: "GreenTech Gardens Team" }],
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  openGraph: {
    title: "Schedule Free Consultation - GreenTech Gardens | Expert Growing Advice",
    description: "Book a free consultation with GreenTech Gardens' growing experts. Get personalized recommendations for hydroponic systems, urban farming solutions, and sustainable growing technology.",
    url: "https://codestam.com/schedule",
    siteName: "GreenTech Gardens",
    images: [
      {
        url: "https://maxm-imggenurl.web.val.run/professional consultation meeting about hydroponic systems, expert advisor helping client plan urban farming setup, modern office environment",
        width: 1200,
        height: 630,
        alt: "GreenTech Gardens consultation session",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule Free Consultation - GreenTech Gardens | Expert Growing Advice",
    description: "Book a free consultation with GreenTech Gardens' growing experts. Get personalized recommendations for hydroponic systems, urban farming solutions, and sustainable growing technology.",
    images: ["https://maxm-imggenurl.web.val.run/professional consultation meeting about hydroponic systems, expert advisor helping client plan urban farming setup, modern office environment"],
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

export default function SchedulePage() {
  return <SchedulePageClient />
}