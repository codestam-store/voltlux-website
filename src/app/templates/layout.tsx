import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contract Templates - Eternal Vows",
  description: "Professional wedding contract templates for all your vendors. Legally reviewed, customizable, and instantly downloadable. Protect your special day with comprehensive agreements.",
  keywords: ["wedding contracts", "contract templates", "vendor agreements", "wedding legal documents", "photography contracts", "catering contracts", "venue contracts"],
  openGraph: {
    title: "Contract Templates - Eternal Vows",
    description: "Professional wedding contract templates for all your vendors. Legally reviewed, customizable, and instantly downloadable. Protect your special day with comprehensive agreements.",
    url: "https://codestam.com/templates",
    siteName: "Eternal Vows",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eternal Vows Contract Templates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contract Templates - Eternal Vows",
    description: "Professional wedding contract templates for all your vendors. Legally reviewed, customizable, and instantly downloadable. Protect your special day with comprehensive agreements.",
    images: ["/og-image.jpg"],
    creator: "@codestamtech",
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
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}