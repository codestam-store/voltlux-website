import type { Metadata } from "next"
import ShowroomPageClient from "@/components/showroom-page-client"

export const metadata: Metadata = {
  title: "Virtual Showroom - VoltLux",
  description: "Explore VoltLux electric vehicles in our immersive virtual showroom. Experience 360° views, interactive features, and detailed walkthroughs of our luxury EV lineup.",
  keywords: [
    "virtual showroom",
    "electric vehicle showroom",
    "VoltLux showroom",
    "EV experience center",
    "interactive car viewing",
    "luxury electric vehicles",
    "virtual test drive"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/showroom",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com/showroom",
    title: "Virtual Showroom - VoltLux",
    description: "Explore VoltLux electric vehicles in our immersive virtual showroom. Experience 360° views, interactive features, and detailed walkthroughs of our luxury EV lineup.",
    siteName: "VoltLux",
    images: [
      {
        url: "/og-showroom.jpg",
        width: 1200,
        height: 630,
        alt: "VoltLux Virtual Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Showroom - VoltLux",
    description: "Explore VoltLux electric vehicles in our immersive virtual showroom. Experience 360° views, interactive features, and detailed walkthroughs of our luxury EV lineup.",
    images: ["/og-showroom.jpg"],
    creator: "@codestam",
  },
}

export default function ShowroomPage() {
  return <ShowroomPageClient />
}