import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Eternal Vows",
  description: "Transparent pricing for professional wedding contract services. Choose from Essential, Premium, or Luxury packages to protect your special day with comprehensive legal coverage.",
  keywords: ["wedding contract pricing", "legal services cost", "wedding protection plans", "contract packages", "affordable wedding contracts"],
  openGraph: {
    title: "Pricing - Eternal Vows",
    description: "Transparent pricing for professional wedding contract services. Choose from Essential, Premium, or Luxury packages to protect your special day with comprehensive legal coverage.",
    url: "https://codestam.com/pricing",
    siteName: "Eternal Vows",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eternal Vows Pricing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Eternal Vows",
    description: "Transparent pricing for professional wedding contract services. Choose from Essential, Premium, or Luxury packages to protect your special day with comprehensive legal coverage.",
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

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}