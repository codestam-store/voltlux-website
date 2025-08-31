"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Menu,
    X,
    Search,
    Sparkles,
    ChevronDown,
    Palette,
    Zap,
    Globe,
    Code,
    Rocket,
    Brain,
    Shield,
    Layers,
    Hexagon,
    Atom,
    Cpu,
    Database,
    Network,
    Lock,
    Target,
    ArrowRight,
  
    Zap as Lightning
} from "lucide-react";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggleAdvanced } from "@/components/theme-toggle-advanced";

const navigation = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
];

const solutions = [
    { name: 'Quantum AI & ML', href: '/solutions/quantum-ai', icon: Atom, description: 'Next-generation artificial intelligence powered by quantum algorithms', color: 'from-purple-500 to-pink-500' },
    { name: 'Neural Networks', href: '/solutions/neural-networks', icon: Brain, description: 'Advanced neural network architectures for complex problem solving', color: 'from-blue-500 to-cyan-500' },
    { name: 'Cloud Architecture', href: '/solutions/cloud-architecture', icon: Layers, description: 'Scalable cloud infrastructure with microservices architecture', color: 'from-green-500 to-emerald-500' },
    { name: 'Cybersecurity', href: '/solutions/cybersecurity', icon: Lock, description: 'Advanced security protocols and threat detection systems', color: 'from-red-500 to-orange-500' },
    { name: 'Data Analytics', href: '/solutions/data-analytics', icon: Database, description: 'Real-time data processing and predictive analytics', color: 'from-indigo-500 to-purple-500' },
    { name: 'Performance Optimization', href: '/solutions/performance', icon: Target, description: 'Speed and efficiency optimization for maximum performance', color: 'from-yellow-500 to-orange-500' }
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log('Searching for:', searchQuery);
            setSearchQuery('');
        }
    };

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled
                ? 'bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-2xl'
                : 'bg-transparent'
            }`}>
            <nav className="px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Link href="/" className="flex items-center gap-4 group" title="QuantumForge - Next-Generation Digital Solutions">
                        <div className="relative w-12 h-12 flex-shrink-0">
                            <svg
                                viewBox="0 0 48 48"
                                className="w-12 h-12 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                                fill="currentColor"
                                aria-labelledby="quantumforge-logo-title"
                            >
                                <title id="quantumforge-logo-title">QuantumForge Logo</title>
                                <defs>
                                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.7 }} />
                                    </linearGradient>
                                </defs>
                                <path d="M24 4L8 16v16l16 12 16-12V16L24 4zm0 6L36 18v12L24 36l-12-6V18l12-8z" fill="url(#logoGradient)" />
                                <circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.3" />
                                <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.6" />
                                <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.9" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-2xl bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                                QuantumForge
                            </span>
                            <span className="text-xs text-muted-foreground -mt-1 tracking-wider uppercase">Quantum Innovation</span>
                        </div>
                    </Link>
                    <Badge variant="secondary" className="hidden sm:flex bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/30 px-3 py-1">
                        <Lightning className="h-3 w-3 mr-1" aria-hidden="true" />
                        Quantum-Powered
                    </Badge>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-2">
                    {navigation.map((item, index) => (
                        <div key={item.name} className="relative">
                            {item.name === 'Solutions' ? (
                                <div
                                    onMouseEnter={() => setSolutionsDropdownOpen(true)}
                                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                                >
                                    <Button
                                        variant="ghost"
                                        className="gap-2 h-12 px-6 text-sm font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                        title="Explore our quantum solutions"
                                    >
                                        {item.name}
                                        <ChevronDown className="h-4 w-4 transition-transform duration-300" aria-hidden="true" />
                                    </Button>
                                    <AnimatePresence>
                                        {solutionsDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="absolute top-full left-0 mt-3 w-[500px] bg-card/95 border border-border/50 rounded-2xl shadow-2xl p-6 backdrop-blur-xl"
                                            >
                                                <div className="grid grid-cols-2 gap-4">
                                                    {solutions.map((solution) => {
                                                        const IconComponent = solution.icon;
                                                        return (
                                                            <Link
                                                                key={solution.name}
                                                                href={solution.href}
                                                                className="group relative p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-border/50"
                                                                title={`Learn about ${solution.name}`}
                                                            >
                                                                <div className="flex items-start gap-3">
                                                                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                                        <IconComponent className="h-5 w-5 text-white" aria-hidden="true" />
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{solution.name}</p>
                                                                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{solution.description}</p>
                                                                    </div>
                                                                </div>
                                                                <ArrowRight className="absolute top-4 right-4 h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                                <div className="mt-6 pt-6 border-t border-border/50">
                                                    <Link
                                                        href="/solutions"
                                                        className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 border border-primary/20"
                                                        title="View all quantum solutions"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <Hexagon className="h-5 w-5 text-primary" aria-hidden="true" />
                                                            <span className="font-semibold text-sm text-primary">Explore All Solutions</span>
                                                        </div>
                                                        <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link href={item.href}>
                                    <Button
                                        variant="ghost"
                                        className="h-12 px-6 text-sm font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                        title={`Go to ${item.name}`}
                                    >
                                        {item.name}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex items-center gap-4">
                    <form onSubmit={handleSearch} className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <Input
                            type="text"
                            placeholder="Search quantum solutions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 w-72 h-12 bg-background/50 backdrop-blur-sm border-border/50 rounded-xl focus:border-primary/50 focus:ring-primary/20"
                            aria-label="Search quantum solutions"
                        />
                    </form>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <ThemeToggleAdvanced />

                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/sign-in">
                            <Button variant="ghost" size="sm" className="h-10 px-4 rounded-xl" title="Sign in to your account">
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                size="sm"
                                className="h-10 px-6 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                                title="Get started with QuantumForge"
                            >
                                <Rocket className="h-4 w-4 mr-2" aria-hidden="true" />
                                Launch Project
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="lg:hidden h-12 w-12 rounded-xl"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        title="Toggle mobile menu"
                        aria-label="Open or close mobile navigation menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="lg:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl"
                    >
                        <div className="px-4 py-8 space-y-6">
                            {/* Mobile Search */}
                            <form onSubmit={handleSearch} className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                                <Input
                                    type="text"
                                    placeholder="Search quantum solutions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-12 h-12 bg-background/50 rounded-xl"
                                    aria-label="Search quantum solutions"
                                />
                            </form>

                            {/* Mobile Navigation */}
                            <div className="space-y-3">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        {item.name === 'Solutions' ? (
                                            <div>
                                                <Button
                                                    variant="ghost"
                                                    className="w-full justify-between h-12 rounded-xl"
                                                    onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                                                    title="Browse quantum solutions"
                                                >
                                                    {item.name}
                                                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                                                </Button>
                                                <AnimatePresence>
                                                    {solutionsDropdownOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="ml-4 mt-3 space-y-3"
                                                        >
                                                            {solutions.map((solution) => {
                                                                const IconComponent = solution.icon;
                                                                return (
                                                                    <Link
                                                                        key={solution.name}
                                                                        href={solution.href}
                                                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-border/50"
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                        title={`Learn about ${solution.name}`}
                                                                    >
                                                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                                                                            <IconComponent className="h-5 w-5 text-white" aria-hidden="true" />
                                                                        </div>
                                                                        <div className="flex-1">
                                                                            <p className="font-semibold text-sm">{solution.name}</p>
                                                                            <p className="text-xs text-muted-foreground mt-1">{solution.description}</p>
                                                                        </div>
                                                                    </Link>
                                                                );
                                                            })}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link href={item.href}>
                                                <Button
                                                    variant="ghost"
                                                    className="w-full justify-start h-12 rounded-xl"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    title={`Go to ${item.name}`}
                                                >
                                                    {item.name}
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Auth */}
                            <div className="pt-6 border-t border-border/30 space-y-3">
                                <Link href="/sign-in">
                                    <Button variant="ghost" className="w-full h-12 rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                                        Sign In
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button
                                        className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                                        onClick={() => setMobileMenuOpen(false)}
                                        title="Get started with QuantumForge"
                                    >
                                        <Rocket className="h-4 w-4 mr-2" aria-hidden="true" />
                                        Launch Project
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
