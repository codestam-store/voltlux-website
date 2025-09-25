import type { Metadata } from "next"
import { SolutionsPageClient } from "@/components/solutions-page-client"

export const metadata: Metadata = {
  title: "Growing Solutions | GreenTech Gardens - Custom Hydroponic Systems",
  description: "Discover our comprehensive growing solutions for homes, restaurants, offices, and educational institutions. Custom hydroponic systems designed for your specific needs and space.",
  publisher: "Codestam Technologies",
  openGraph: {
    title: "Growing Solutions | GreenTech Gardens - Custom Hydroponic Systems",
    description: "Discover our comprehensive growing solutions for homes, restaurants, offices, and educational institutions. Custom hydroponic systems designed for your specific needs and space.",
    url: "https://codestam.com",
  },
}

export default function SolutionsPage() {
  return <SolutionsPageClient />
}