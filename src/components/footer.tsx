"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Compass, MapPin, Phone, Mail, Instagram, Twitter, Facebook, Youtube, Leaf, Globe, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

const footerLinks = {
  destinations: [
    { name: "Norwegian Fjords", href: "/destinations/norwegian-fjords" },
    { name: "Patagonian Wilderness", href: "/destinations/patagonia" },
    { name: "Swiss Alpine Trails", href: "/destinations/swiss-alps" },
    { name: "Icelandic Highlands", href: "/destinations/iceland" },
    { name: "New Zealand Trails", href: "/destinations/new-zealand" },
  ],
  adventures: [
    { name: "Mountain Expeditions", href: "/adventures/mountain-expeditions" },
    { name: "Wilderness Trekking", href: "/adventures/wilderness-trekking" },
    { name: "Cultural Immersion", href: "/adventures/cultural-immersion" },
    { name: "Wildlife Safaris", href: "/adventures/wildlife-safaris" },
    { name: "Water Adventures", href: "/adventures/water-adventures" },
  ],
  company: [
    { name: "About Wanderlust", href: "/about" },
    { name: "Our Mission", href: "/mission" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Careers", href: "/careers" },
    { name: "Press Kit", href: "/press" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Travel Insurance", href: "/insurance" },
    { name: "Safety Guidelines", href: "/safety" },
    { name: "Emergency Contact", href: "/emergency" },
    { name: "FAQ", href: "/faq" },
  ],
}

const socialLinks = [
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "YouTube", href: "#", icon: Youtube },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Compass className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Wanderlust
              </span>
            </motion.div>

            <motion.p
              className="text-muted-foreground mb-6 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Discover transformative eco-tourism adventures that connect you with pristine landscapes and sustainable experiences around the world.
            </motion.p>

            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="h-4 w-4 text-primary" />
                <span>Carbon Neutral</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-4 w-4 text-primary" />
                <span>Eco-Certified</span>
              </div>
            </motion.div>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-10 w-10 p-0 hover:bg-primary/10"
                >
                  <Link href={social.href} aria-label={social.name}>
                    <social.icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </motion.div>
          </div>

          {/* Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Destinations
            </h3>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Adventures */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-4 w-4 text-primary" />
              Adventures
            </h3>
            <ul className="space-y-3">
              {footerLinks.adventures.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-border/40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Stay Updated on New Adventures
              </h3>
              <p className="text-muted-foreground">
                Get exclusive access to new destinations, special offers, and travel inspiration delivered to your inbox.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <Button className="px-8 py-3">
                Subscribe
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              &copy; 2024 Wanderlust. All rights reserved. A Codestam Technologies company.
            </motion.div>

            <motion.div
              className="flex items-center gap-6 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
