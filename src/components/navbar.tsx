"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Leaf, Sprout, Users, BookOpen, Phone, Calendar, Award, Building2, Lightbulb, Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Systems", href: "/vehicles", icon: Settings },
  { name: "Solutions", href: "/services", icon: Lightbulb },
  { name: "About", href: "/about", icon: Users },
  { name: "Facility", href: "/showroom", icon: Building2 },
  { name: "Stories", href: "/stories", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Phone },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/30 eco-shadow" 
          : "bg-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/" className="group flex items-center space-x-4">
            <span className="sr-only">GreenTech Gardens</span>
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Eco-tech leaf icon */}
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center growth-border overflow-hidden">
                <Leaf className="h-8 w-8 text-primary-foreground" />
              </div>
              {/* Growth indicator */}
              <motion.div 
                className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sprout className="h-2 w-2 text-accent-foreground" />
              </motion.div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wide text-foreground tech-font bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GreenTech
              </span>
              <span className="text-sm tracking-wider text-muted-foreground font-medium">
                Gardens
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden lg:flex lg:items-center lg:gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {navigation.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group relative flex items-center gap-3 px-5 py-3 text-sm font-medium transition-all duration-300 curved-organic",
                    "hover:bg-accent/20 hover:scale-105",
                    isActive 
                      ? "text-primary bg-gradient-to-r from-primary/10 to-accent/10 plant-card" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="h-4 w-4" />
                  </motion.div>
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      style={{ x: "-50%" }}
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Right side actions */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ThemeToggle />
          <Button 
            asChild 
            size="sm" 
            className="hidden sm:inline-flex font-medium eco-shadow curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
          >
            <Link href="/schedule" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Get Started
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
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </motion.div>
          </Button>
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border/30 organic-texture"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 space-y-3">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-4 px-5 py-4 text-base font-medium transition-all duration-300 curved-organic",
                        isActive 
                          ? "bg-gradient-to-r from-primary/15 to-accent/10 text-primary plant-card" 
                          : "text-muted-foreground hover:bg-accent/10 hover:text-foreground hover:scale-105"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <item.icon className="h-5 w-5" />
                      </motion.div>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div 
                className="pt-6 border-t border-border/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button 
                  asChild 
                  className="w-full font-medium eco-shadow curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
                >
                  <Link 
                    href="/schedule" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}