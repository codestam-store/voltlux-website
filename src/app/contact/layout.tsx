import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Eternal Vows",
  description: "Get in touch with Eternal Vows for professional wedding contract services. Our expert team is ready to help protect your special day with comprehensive legal support.",
  keywords: ["contact", "wedding contracts", "legal consultation", "support", "customer service", "wedding legal help"],
  openGraph: {
    title: "Contact - Eternal Vows",
    description: "Get in touch with Eternal Vows for professional wedding contract services. Our expert team is ready to help protect your special day with comprehensive legal support.",
    url: "https://codestam.com/contact",
    siteName: "Eternal Vows",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eternal Vows Contact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Eternal Vows",
    description: "Get in touch with Eternal Vows for professional wedding contract services. Our expert team is ready to help protect your special day with comprehensive legal support.",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}