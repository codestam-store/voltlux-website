"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Camera, Image, Users, BookOpen, Phone, Calendar, Award, MapPin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Portfolio", href: "/vehicles", icon: Image },
  { name: "Services", href: "/services", icon: Camera },
  { name: "About", href: "/about", icon: Users },
  { name: "Studio", href: "/showroom", icon: MapPin },
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
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 retro-shadow" 
          : "bg-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/" className="group flex items-center space-x-3">
            <span className="sr-only">Noir Studio</span>
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Vintage camera icon */}
              <div className="h-12 w-12 rounded-sm bg-primary flex items-center justify-center vintage-border">
                <Camera className="h-7 w-7 text-primary-foreground" />
              </div>
              {/* Film strip decoration */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-sm opacity-80"></div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider text-foreground typewriter-effect">
                NOIR
              </span>
              <span className="text-xs tracking-widest text-muted-foreground uppercase">
                Studio
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden lg:flex lg:items-center lg:gap-1"
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
                    "group relative flex items-center gap-2 px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300",
                    "hover:bg-accent/50 rounded-sm",
                    isActive 
                      ? "text-primary bg-accent/30" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span className="uppercase tracking-wider">{item.name}</span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary rounded-full"
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
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ThemeToggle />
          <Button 
            asChild 
            size="sm" 
            className="hidden sm:inline-flex uppercase tracking-wider text-xs font-medium retro-shadow"
            variant="outline"
          >
            <Link href="/schedule" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Book Session
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
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 space-y-2">
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
                        "flex items-center gap-3 rounded-sm px-4 py-3 text-base font-medium tracking-wide transition-all duration-300",
                        isActive 
                          ? "bg-primary/20 text-primary vintage-border" 
                          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="uppercase tracking-wider">{item.name}</span>
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div 
                className="pt-4 border-t border-border/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button 
                  asChild 
                  className="w-full uppercase tracking-wider text-sm font-medium retro-shadow"
                  variant="outline"
                >
                  <Link 
                    href="/schedule" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Session
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