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
    default: "Codestam Technologies - Innovative Digital Solutions",
    template: "%s | Codestam Technologies"
  },
  description: "Empowering businesses with cutting-edge digital solutions. Codestam Technologies transforms ideas into powerful, scalable applications that drive growth and success.",
  keywords: [
    "digital solutions",
    "web development",
    "mobile apps",
    "consulting",
    "technology",
    "innovation",
    "software development",
    "digital transformation",
    "Codestam Technologies"
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
    title: "Codestam Technologies - Innovative Digital Solutions",
    description: "Empowering businesses with cutting-edge digital solutions. Codestam Technologies transforms ideas into powerful, scalable applications that drive growth and success.",
    siteName: "Codestam Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Codestam Technologies - Innovative Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codestam Technologies - Innovative Digital Solutions",
    description: "Empowering businesses with cutting-edge digital solutions. Codestam Technologies transforms ideas into powerful, scalable applications that drive growth and success.",
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
        <link rel="mask-icon" href="/mask-icon.svg" color="#6366f1" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />
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
