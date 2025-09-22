import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Eternal Vows",
  description: "Learn about Eternal Vows&apos; mission to provide professional wedding contract services with expert legal guidance and personalized support for your special day.",
  keywords: ["about us", "wedding contracts", "legal services", "mission", "team", "values", "company"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  publisher: "Codestam Technologies",
  openGraph: {
    title: "About - Eternal Vows",
    description: "Learn about Eternal Vows&apos; mission to provide professional wedding contract services with expert legal guidance and personalized support for your special day.",
    url: "https://codestam.com/about",
    siteName: "Eternal Vows",
    images: [
      {
        url: "https://maxm-imggenurl.web.val.run/professional wedding contract team meeting in elegant office with documents and flowers",
        width: 1200,
        height: 630,
        alt: "Eternal Vows professional team"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Eternal Vows",
    description: "Learn about Eternal Vows&apos; mission to provide professional wedding contract services with expert legal guidance and personalized support for your special day.",
    images: ["https://maxm-imggenurl.web.val.run/professional wedding contract team meeting in elegant office with documents and flowers"],
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}