"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, MapPin, Compass, Mountain, Users, BookOpen, Phone } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Destinations", href: "/destinations", icon: MapPin },
  { name: "Adventures", href: "/adventures", icon: Mountain },
  { name: "Experiences", href: "/experiences", icon: Compass },
  { name: "Community", href: "/community", icon: Users },
  { name: "Stories", href: "/stories", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Phone },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Wanderlust</span>
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Compass className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Wanderlust
              </span>
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
                {isActive && (
                  <motion.div
                    className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/book-adventure">
              Book Adventure
            </Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        className={cn(
          "lg:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          height: mobileMenuOpen ? "auto" : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-1 px-6 pb-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
          <div className="pt-4">
            <Button asChild className="w-full">
              <Link href="/book-adventure" onClick={() => setMobileMenuOpen(false)}>
                Book Adventure
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
