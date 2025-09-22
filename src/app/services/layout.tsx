import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Eternal Vows",
  description: "Comprehensive wedding contract services including template creation, custom contracts, legal consultation, and vendor negotiation support. Protect your special day with professional legal guidance.",
  keywords: ["wedding contract services", "legal consultation", "custom contracts", "vendor agreements", "wedding legal protection", "contract templates"],
  openGraph: {
    title: "Services - Eternal Vows",
    description: "Comprehensive wedding contract services including template creation, custom contracts, legal consultation, and vendor negotiation support. Protect your special day with professional legal guidance.",
    url: "https://codestam.com/services",
    siteName: "Eternal Vows",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eternal Vows Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Eternal Vows",
    description: "Comprehensive wedding contract services including template creation, custom contracts, legal consultation, and vendor negotiation support. Protect your special day with professional legal guidance.",
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}