import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const josefinSans = Josefin_Sans({ 
  subsets: ["latin"],
  variable: "--font-josefin-sans"
});

export const metadata: Metadata = {
  title: "Eternal Vows - Premium Wedding Contract Services",
  description: "Professional wedding contract templates, legal consultation, and vendor management tools. Secure your perfect day with expert legal guidance and personalized support.",
  keywords: ["wedding contracts", "legal templates", "wedding planning", "vendor agreements", "legal consultation", "wedding services"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  publisher: "Codestam Technologies",
  openGraph: {
    title: "Eternal Vows - Premium Wedding Contract Services",
    description: "Professional wedding contract templates, legal consultation, and vendor management tools. Secure your perfect day with expert legal guidance and personalized support.",
    url: "https://codestam.com",
    siteName: "Eternal Vows",
    images: [
      {
        url: "https://maxm-imggenurl.web.val.run/elegant wedding contract documents with gold rings and flowers professional photography",
        width: 1200,
        height: 630,
        alt: "Eternal Vows Wedding Contract Services"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eternal Vows - Premium Wedding Contract Services",
    description: "Professional wedding contract templates, legal consultation, and vendor management tools. Secure your perfect day with expert legal guidance and personalized support.",
    images: ["https://maxm-imggenurl.web.val.run/elegant wedding contract documents with gold rings and flowers professional photography"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefinSans.className} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}