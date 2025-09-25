import type { Metadata } from "next"
import { SystemsPageClient } from "@/components/systems-page-client"

export const metadata: Metadata = {
  title: "Growing Systems | GreenTech Gardens - Vertical Farming Solutions",
  description: "Explore our range of hydroponic and vertical farming systems. From compact desktop units to commercial installations, find the perfect growing solution for your urban farm.",
  publisher: "Codestam Technologies",
  openGraph: {
    title: "Growing Systems | GreenTech Gardens - Vertical Farming Solutions",
    description: "Explore our range of hydroponic and vertical farming systems. From compact desktop units to commercial installations, find the perfect growing solution for your urban farm.",
    url: "https://codestam.com",
  },
}

export default function SystemsPage() {
  return <SystemsPageClient />
}