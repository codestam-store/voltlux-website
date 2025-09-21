import type { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const josefinSans = Josefin_Sans({
  preload: true,
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Noir Studio - Vintage Film Photography &amp; Timeless Portraits",
    template: "%s | Noir Studio"
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#00D4FF" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00D4FF" />
        <meta name="msapplication-TileColor" content="#00D4FF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${josefinSans.className} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
