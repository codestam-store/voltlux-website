import type { Metadata } from "next"
import { ContactPageClient } from "@/components/contact-page-client"

export const metadata: Metadata = {
  title: "Contact Us - GreenTech Gardens | Get Growing Support & Consultation",
  description: "Contact GreenTech Gardens for expert consultation on hydroponic systems, urban farming solutions, and sustainable growing technology. Multiple ways to connect with our team.",
  keywords: "contact, consultation, support, hydroponic systems, urban farming, customer service, growing experts",
  authors: [{ name: "GreenTech Gardens Team" }],
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  openGraph: {
    title: "Contact Us - GreenTech Gardens | Get Growing Support & Consultation",
    description: "Contact GreenTech Gardens for expert consultation on hydroponic systems, urban farming solutions, and sustainable growing technology. Multiple ways to connect with our team.",
    url: "https://codestam.com/contact",
    siteName: "GreenTech Gardens",
    images: [
      {
        url: "https://maxm-imggenurl.web.val.run/modern customer service representative helping client with hydroponic system consultation, friendly professional environment, green technology",
        width: 1200,
        height: 630,
        alt: "GreenTech Gardens customer consultation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - GreenTech Gardens | Get Growing Support & Consultation",
    description: "Contact GreenTech Gardens for expert consultation on hydroponic systems, urban farming solutions, and sustainable growing technology. Multiple ways to connect with our team.",
    images: ["https://maxm-imggenurl.web.val.run/modern customer service representative helping client with hydroponic system consultation, friendly professional environment, green technology"],
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

export default function ContactPage() {
  return <ContactPageClient />
}