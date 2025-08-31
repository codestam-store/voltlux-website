"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Code2, 
  Smartphone, 
  Globe, 
  Users, 
  Building2,
  FileText,
  MessageSquare
} from "lucide-react"

const navigation = [
  {
    name: "Services",
    href: "/services",
    icon: Code2,
    description: "Our comprehensive digital solutions"
  },
  {
    name: "Solutions",
    href: "/solutions", 
    icon: Sparkles,
    description: "Industry-specific technology solutions"
  },
  {
    name: "Industries",
    href: "/industries",
    icon: Building2,
    description: "Sectors we specialize in"
  },
  {
    name: "Resources",
    href: "/resources",
    icon: FileText,
    description: "Insights, guides, and thought leadership"
  },
  {
    name: "About",
    href: "/about",
    icon: Users,
    description: "Learn about our team and mission"
  },
  {
    name: "Contact",
    href: "/contact",
    icon: MessageSquare,
    description: "Get in touch with our experts"
  }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg" 
        : "bg-background/80 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <svg className="w-6 h-6 text-primary-foreground" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Codestam
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200 group-hover:bg-accent/30"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
                
                {/* Hover Card */}
                <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-card border border-border rounded-xl shadow-xl p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.name}</h3>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <Link
                        href={item.href}
                        className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="hidden sm:flex items-center space-x-1 px-2 py-1 text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live</span>
            </Badge>
            
            <ThemeToggle />
            
            <Button asChild size="sm" className="hidden sm:flex">
              <Link href="/contact">
                Get Started
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-foreground" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-lg font-bold">Codestam</span>
                    </Link>
                  </div>
                  
                  <nav className="flex-1 space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{item.name}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </nav>
                  
                  <div className="pt-6 border-t border-border">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        Start Your Project
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
