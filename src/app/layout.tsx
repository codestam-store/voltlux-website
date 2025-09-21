import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const josefinSans = Josefin_Sans({
  preload: true,
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: {
    default: "FunLearn Academy - Magical Learning Adventures for Kids",
    template: "%s | FunLearn Academy"
  },
  description: "Join our magical learning adventures! FunLearn Academy offers fun, interactive educational experiences for children with cartoon characters, games, and exciting activities that make learning an adventure.",
  keywords: ["kids education", "children learning", "cartoon learning", "educational games", "interactive learning", "fun education", "kids activities"],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestam.com",
    title: "FunLearn Academy - Magical Learning Adventures for Kids",
    description: "Join our magical learning adventures! FunLearn Academy offers fun, interactive educational experiences for children with cartoon characters, games, and exciting activities that make learning an adventure.",
    siteName: "FunLearn Academy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FunLearn Academy - Magical Learning Adventures for Kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FunLearn Academy - Magical Learning Adventures for Kids",
    description: "Join our magical learning adventures! FunLearn Academy offers fun, interactive educational experiences for children with cartoon characters, games, and exciting activities that make learning an adventure.",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#000000" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FunLearn Academy" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${josefinSans.className} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
