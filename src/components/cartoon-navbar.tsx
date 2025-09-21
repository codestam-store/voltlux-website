"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Star, Heart, Sparkles } from "lucide-react";
import { ThemeToggleAdvanced } from "./theme-toggle-advanced";

const navItems = [
  { name: "Home", href: "/", icon: "🏠" },
  { name: "Adventures", href: "/adventures", icon: "🗺️" },
  { name: "Characters", href: "/characters", icon: "🦄" },
  { name: "Games", href: "/games", icon: "🎮" },
  { name: "Parents", href: "/parents", icon: "👨‍👩‍👧‍👦" },
  { name: "Contact", href: "/contact", icon: "📞" },
];

export function CartoonNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/95 to-secondary/95 backdrop-blur-md border-b-4 border-accent cartoon-shadow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center cartoon-shadow"
                >
                  <Star className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center"
                >
                  <Sparkles className="w-2 h-2 text-accent-foreground" />
                </motion.div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-primary-foreground">
                  FunLearn
                </h1>
                <p className="text-sm text-primary-foreground/80 -mt-1">Academy</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group relative px-4 py-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-primary-foreground font-medium">
                      {item.name}
                    </span>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggleAdvanced />
            
            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-primary-foreground font-medium">
                        {item.name}
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Heart className="w-4 h-4 text-accent ml-auto" />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-2 right-20 w-6 h-6 text-accent/60"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute top-4 left-1/4 w-4 h-4 text-secondary/60"
      >
        🌟
      </motion.div>
    </motion.nav>
  );
}