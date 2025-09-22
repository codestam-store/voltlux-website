import type { Metadata } from "next"
import PortfolioPageClient from "@/components/portfolio-page-client"

export const metadata: Metadata = {
  title: "Portfolio | Noir Studio - Vintage Film Photography",
  description: "Explore our portfolio of vintage film photography including portraits, weddings, commercial work, and fine art. Timeless black and white photography that captures the essence of every moment.",
  publisher: "Codestam Technologies",
  openGraph: {
    title: "Portfolio | Noir Studio - Vintage Film Photography",
    description: "Explore our portfolio of vintage film photography including portraits, weddings, commercial work, and fine art. Timeless black and white photography that captures the essence of every moment.",
    url: "https://codestam.com",
  },
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}