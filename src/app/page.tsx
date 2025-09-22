
import type { Metadata } from "next"
import HomePageClient from "@/components/home-page-client"

export const metadata: Metadata = {
  title: "Noir Studio - Vintage Film Photography &amp; Timeless Portraits",
  description: "Capture timeless moments with Noir Studio&apos;s vintage film photography. Specializing in black &amp; white portraits, wedding photography, and classic film development with retro aesthetic.",
  keywords: [
    "vintage film photography",
    "black and white photography",
    "film photography studio",
    "retro photography",
    "vintage portraits",
    "wedding photography",
    "film development",
    "analog photography",
    "classic photography",
    "noir photography"
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
    title: "Noir Studio - Vintage Film Photography &amp; Timeless Portraits",
    description: "Capture timeless moments with Noir Studio&apos;s vintage film photography. Specializing in black &amp; white portraits, wedding photography, and classic film development with retro aesthetic.",
    siteName: "Noir Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Noir Studio - Vintage Film Photography &amp; Timeless Portraits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noir Studio - Vintage Film Photography &amp; Timeless Portraits",
    description: "Capture timeless moments with Noir Studio&apos;s vintage film photography. Specializing in black &amp; white portraits, wedding photography, and classic film development with retro aesthetic.",
    images: ["/og-image.jpg"],
    creator: "@codestam",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
