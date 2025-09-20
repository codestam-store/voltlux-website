import type { Metadata } from "next"
import VehiclesPageClient from "@/components/vehicles-page-client"

export const metadata: Metadata = {
  title: "Premium Electric Vehicles - VoltLux",
  description: "Explore our complete range of premium electric vehicles. From luxury sedans to high-performance sports cars, discover the perfect VoltLux vehicle for your lifestyle.",
  keywords: [
    "electric vehicles",
    "luxury cars",
    "premium EVs",
    "electric sedan",
    "electric SUV",
    "electric sports car",
    "VoltLux vehicles"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/vehicles",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com/vehicles",
    title: "Premium Electric Vehicles - VoltLux",
    description: "Explore our complete range of premium electric vehicles. From luxury sedans to high-performance sports cars, discover the perfect VoltLux vehicle for your lifestyle.",
    siteName: "VoltLux",
    images: [
      {
        url: "/og-vehicles.jpg",
        width: 1200,
        height: 630,
        alt: "VoltLux Premium Electric Vehicles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Electric Vehicles - VoltLux",
    description: "Explore our complete range of premium electric vehicles. From luxury sedans to high-performance sports cars, discover the perfect VoltLux vehicle for your lifestyle.",
    images: ["/og-vehicles.jpg"],
    creator: "@codestam",
  },
}

export default function VehiclesPage() {
  return <VehiclesPageClient />
}