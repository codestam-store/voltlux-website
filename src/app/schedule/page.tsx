import type { Metadata } from "next"
import SchedulePageClient from "@/components/schedule-page-client"

export const metadata: Metadata = {
  title: "Schedule Test Drive - VoltLux Electric Vehicles",
  description: "Book your personalized VoltLux test drive experience. Choose from our luxury electric sedan, SUV, or sports coupe and schedule your appointment at one of our premium showrooms.",
  keywords: [
    "test drive",
    "schedule appointment",
    "VoltLux test drive",
    "electric vehicle test drive",
    "luxury car test drive",
    "EV experience",
    "book test drive",
    "VoltLux showroom"
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
    title: "Schedule Test Drive - VoltLux Electric Vehicles",
    description: "Book your personalized VoltLux test drive experience. Choose from our luxury electric sedan, SUV, or sports coupe and schedule your appointment at one of our premium showrooms.",
    siteName: "VoltLux",
    images: [
      {
        url: "/og-schedule.jpg",
        width: 1200,
        height: 630,
        alt: "Schedule Your VoltLux Test Drive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule Test Drive - VoltLux Electric Vehicles",
    description: "Book your personalized VoltLux test drive experience. Choose from our luxury electric sedan, SUV, or sports coupe and schedule your appointment at one of our premium showrooms.",
    images: ["/og-schedule.jpg"],
    creator: "@codestam",
  },
}

export default function SchedulePage() {
  return <SchedulePageClient />
}