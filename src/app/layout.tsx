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
    default: "Wanderlust - Eco-Tourism &amp; Adventure Travel Experiences",
    template: "%s | Wanderlust"
  },
  description: "Discover transformative eco-tourism adventures that connect you with nature. Wanderlust offers sustainable travel experiences, wilderness expeditions, and mindful exploration across pristine landscapes.",
  keywords: [
    "eco-tourism",
    "adventure travel",
    "sustainable tourism",
    "wilderness expeditions",
    "nature experiences",
    "mindful travel",
    "outdoor adventures",
    "eco-friendly travel",
    "sustainable tourism",
    "Wanderlust"
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
    title: "Wanderlust - Eco-Tourism &amp; Adventure Travel Experiences",
    description: "Discover transformative eco-tourism adventures that connect you with nature. Wanderlust offers sustainable travel experiences, wilderness expeditions, and mindful exploration across pristine landscapes.",
    siteName: "Wanderlust",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wanderlust - Eco-Tourism &amp; Adventure Travel Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanderlust - Eco-Tourism &amp; Adventure Travel Experiences",
    description: "Discover transformative eco-tourism adventures that connect you with nature. Wanderlust offers sustainable travel experiences, wilderness expeditions, and mindful exploration across pristine landscapes.",
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
        <link rel="mask-icon" href="/mask-icon.svg" color="#8B5A3C" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8B5A3C" />
        <meta name="msapplication-TileColor" content="#8B5A3C" />
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
