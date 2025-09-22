"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Circle, FileText, Users, DollarSign, Mail } from "lucide-react";
import { ThemeToggleAdvanced } from "./theme-toggle-advanced";

const navItems = [
  { name: "Home", href: "/", icon: Heart },
  { name: "About", href: "/about", icon: Users },
  { name: "Services", href: "/services", icon: Circle },
  { name: "Contract Templates", href: "/templates", icon: FileText },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function WeddingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border elegant-shadow"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center elegant-shadow"
                >
                  <Circle className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground gradient-text">
                  Eternal Vows
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">Contract Services</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="group relative px-4 py-2 rounded-lg hover:bg-muted/50 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ y: -1 }}
                      className="flex items-center space-x-2"
                    >
                      <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/templates"
                className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium hover:shadow-lg transition-all duration-300 elegant-shadow"
              >
                Get Started
              </Link>
            </motion.div>
            <ThemeToggleAdvanced />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
            <ThemeToggleAdvanced />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="w-5 h-5 text-foreground" />
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
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="py-6 space-y-3">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-muted/50 transition-all duration-300"
                      >
                        <IconComponent className="w-5 h-5 text-primary" />
                        <span className="text-foreground font-medium">
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 px-4"
                >
                  <Link
                    href="/templates"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium text-center elegant-shadow"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle decorative elements */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-3 right-32 w-2 h-2 bg-accent rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        className="absolute top-6 left-1/3 w-1.5 h-1.5 bg-primary rounded-full hidden lg:block"
      />
    </motion.nav>
  );
}