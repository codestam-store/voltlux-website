"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    children: [
      { name: "Web Development", href: "/services#web" },
      { name: "Mobile Apps", href: "/services#mobile" },
      { name: "Consulting", href: "/services#consulting" },
    ]
  },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Logo size="md" />
          <span className="hidden font-bold sm:inline-block">
            NexusFlow
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`flex items-center space-x-1 ${
                        isActive(item.href) ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href}>{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <Logo size="sm" />
                  <span>NexusFlow</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="space-y-2">
                        <h3 className="font-medium text-foreground">{item.name}</h3>
                        <div className="ml-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block text-sm text-muted-foreground hover:text-primary"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block text-lg font-medium transition-colors hover:text-primary ${
                          isActive(item.href) ? "text-primary" : "text-foreground"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <ThemeToggle />
                    <Button asChild className="w-full">
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
