
import type { Metadata } from "next"
import HomePageClient from "@/components/home-page-client"

export const metadata: Metadata = {
  title: "VoltLux - Premium Electric Vehicles &amp; Future Mobility",
  description: "Experience the future of luxury mobility with VoltLux premium electric vehicles. Cutting-edge technology, unparalleled performance, and sustainable innovation in every drive.",
  keywords: [
    "premium electric vehicles",
    "luxury electric cars",
    "future mobility",
    "electric vehicle technology",
    "sustainable luxury",
    "high-performance EVs",
    "electric vehicle innovation",
    "luxury automotive",
    "electric vehicle showroom",
    "VoltLux"
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
    title: "VoltLux - Premium Electric Vehicles &amp; Future Mobility",
    description: "Experience the future of luxury mobility with VoltLux premium electric vehicles. Cutting-edge technology, unparalleled performance, and sustainable innovation in every drive.",
    siteName: "VoltLux",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VoltLux - Premium Electric Vehicles &amp; Future Mobility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoltLux - Premium Electric Vehicles &amp; Future Mobility",
    description: "Experience the future of luxury mobility with VoltLux premium electric vehicles. Cutting-edge technology, unparalleled performance, and sustainable innovation in every drive.",
    images: ["/og-image.jpg"],
    creator: "@codestam",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
