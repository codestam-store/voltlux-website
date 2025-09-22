import type { Metadata } from "next"
import StudioPageClient from "@/components/studio-page-client"

export const metadata: Metadata = {
  title: "Photography Studio - NOIR Studio",
  description: "Professional photography studio specializing in vintage film photography, timeless portraits, and classic black & white aesthetics. Book your session today.",
  keywords: [
    "photography studio",
    "vintage film photography",
    "portrait photography",
    "NOIR studio",
    "black and white photography",
    "film development",
    "professional photography",
    "wedding photography",
    "fashion photography"
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
    title: "Photography Studio - NOIR Studio",
    description: "Professional photography studio specializing in vintage film photography, timeless portraits, and classic black & white aesthetics. Book your session today.",
    siteName: "NOIR Studio",
    images: [
      {
        url: "/og-studio.jpg",
        width: 1200,
        height: 630,
        alt: "NOIR Photography Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Studio - NOIR Studio",
    description: "Professional photography studio specializing in vintage film photography, timeless portraits, and classic black & white aesthetics. Book your session today.",
    images: ["/og-studio.jpg"],
    creator: "@codestam",
  },
}

export default function StudioPage() {
  return <StudioPageClient />
}