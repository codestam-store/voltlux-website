"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Leaf, 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Facebook,
  Youtube,
  ArrowUp
} from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-secondary/10 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-2xl font-semibold">EcoThread</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Sustainable fashion that honors the planet. Every piece tells a story of ethical craftsmanship and environmental stewardship.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Shop</h3>
            <ul className="space-y-3">
              {[
                "Women's Collection",
                "Men's Collection",
                "Accessories",
                "Sustainable Living",
                "Gift Cards",
                "Sale Items"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                "Our Story",
                "Sustainability",
                "Impact Report",
                "Careers",
                "Press",
                "Contact Us"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {[
                "Help Center",
                "Size Guide",
                "Shipping Info",
                "Returns & Exchanges",
                "Care Instructions",
                "FAQ"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-8 mb-8"
        >
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for sustainable fashion tips, new collections, and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Made with love for the planet</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="h-4 w-4 text-primary" />
              <span>100% Sustainable Materials</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="rounded-full"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-8 mt-8 text-center text-sm text-muted-foreground"
        >
          <p>
            &copy; 2024 EcoThread. All rights reserved. | 
            Publisher: Codestam Technologies | 
            <a href="https://codestam.com" className="hover:text-primary transition-colors">
              https://codestam.com
            </a>
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
