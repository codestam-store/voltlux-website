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
    Shield
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
    { name: 'AI & Machine Learning', href: '/solutions/ai-ml', icon: Brain, description: 'Intelligent automation and predictive analytics' },
    { name: 'Web Development', href: '/solutions/web-development', icon: Code, description: 'Modern, scalable web applications' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Rocket, description: 'End-to-end business digitization' },
    { name: 'Cloud Solutions', href: '/solutions/cloud', icon: Globe, description: 'Scalable cloud infrastructure' },
    { name: 'Cybersecurity', href: '/solutions/cybersecurity', icon: Shield, description: 'Advanced security protocols' },
    { name: 'Performance Optimization', href: '/solutions/performance', icon: Zap, description: 'Speed and efficiency optimization' }
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
            // Handle search functionality
            console.log('Searching for:', searchQuery);
            setSearchQuery('');
        }
    };

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm'
                : 'bg-transparent'
            }`}>
            <nav className="px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="flex items-center gap-3 group" title="NexusFlow - Modern Digital Solutions">
                        <div className="relative w-10 h-10 flex-shrink-0">
                            <svg
                                viewBox="0 0 40 40"
                                className="w-10 h-10 text-primary transition-transform group-hover:scale-110"
                                fill="currentColor"
                                aria-labelledby="nexusflow-logo-title"
                            >
                                <title id="nexusflow-logo-title">NexusFlow Logo</title>
                                <path d="M20 2L8 12v16l12 10 12-10V12L20 2zm0 4.5L28 14v12L20 32l-8-6V14l8-7.5z" />
                                <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.8" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                NexusFlow
                            </span>
                            <span className="text-xs text-muted-foreground -mt-1">Digital Innovation</span>
                        </div>
                    </Link>
                    <Badge variant="secondary" className="hidden sm:flex bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-primary/20">
                        <Sparkles className="h-3 w-3 mr-1" aria-hidden="true" />
                        AI-Powered
                    </Badge>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                    {navigation.map((item) => (
                        <div key={item.name} className="relative">
                            {item.name === 'Solutions' ? (
                                <div
                                    onMouseEnter={() => setSolutionsDropdownOpen(true)}
                                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                                >
                                    <Button
                                        variant="ghost"
                                        className="gap-1 h-10 px-4 text-sm font-medium"
                                        title="Explore our digital solutions"
                                    >
                                        {item.name}
                                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                                    </Button>
                                    <AnimatePresence>
                                        {solutionsDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-96 bg-card border rounded-xl shadow-xl p-4 backdrop-blur-sm"
                                            >
                                                <div className="grid grid-cols-1 gap-2">
                                                    {solutions.map((solution) => {
                                                        const IconComponent = solution.icon;
                                                        return (
                                                            <Link
                                                                key={solution.name}
                                                                href={solution.href}
                                                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-200 group"
                                                                title={`Learn about ${solution.name}`}
                                                            >
                                                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                                    <IconComponent className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                </div>
                                                                <div>
                                                                    <p className="font-medium text-sm text-foreground">{solution.name}</p>
                                                                    <p className="text-xs text-muted-foreground mt-1">{solution.description}</p>
                                                                </div>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                                <div className="mt-4 pt-4 border-t">
                                                    <Link
                                                        href="/solutions"
                                                        className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                                                        title="View all solutions"
                                                    >
                                                        <Palette className="h-4 w-4 text-primary" aria-hidden="true" />
                                                        <span className="font-medium text-sm text-primary">View All Solutions</span>
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
                                        className="h-10 px-4 text-sm font-medium"
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
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <Input
                            type="text"
                            placeholder="Search solutions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 w-64 bg-background/50 backdrop-blur-sm border-border/50"
                            aria-label="Search digital solutions"
                        />
                    </form>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    <ThemeToggleAdvanced />

                    <div className="hidden md:flex items-center gap-2">
                        <Link href="/sign-in">
                            <Button variant="ghost" size="sm" title="Sign in to your account">
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                                title="Get started with NexusFlow"
                            >
                                <Rocket className="h-4 w-4 mr-2" aria-hidden="true" />
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        title="Toggle mobile menu"
                        aria-label="Open or close mobile navigation menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" aria-hidden="true" />
                        ) : (
                            <Menu className="h-5 w-5" aria-hidden="true" />
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
                        transition={{ duration: 0.3 }}
                        className="lg:hidden border-t bg-background/95 backdrop-blur-md"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {/* Mobile Search */}
                            <form onSubmit={handleSearch} className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                                <Input
                                    type="text"
                                    placeholder="Search solutions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 bg-background/50"
                                    aria-label="Search digital solutions"
                                />
                            </form>

                            {/* Mobile Navigation */}
                            <div className="space-y-2">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        {item.name === 'Solutions' ? (
                                            <div>
                                                <Button
                                                    variant="ghost"
                                                    className="w-full justify-between"
                                                    onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                                                    title="Browse digital solutions"
                                                >
                                                    {item.name}
                                                    <ChevronDown className={`h-4 w-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                                                </Button>
                                                <AnimatePresence>
                                                    {solutionsDropdownOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="ml-4 mt-2 space-y-2"
                                                        >
                                                            {solutions.map((solution) => {
                                                                const IconComponent = solution.icon;
                                                                return (
                                                                    <Link
                                                                        key={solution.name}
                                                                        href={solution.href}
                                                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                        title={`Learn about ${solution.name}`}
                                                                    >
                                                                        <IconComponent className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                        <span className="text-sm">{solution.name}</span>
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
                                                    className="w-full justify-start"
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
                            <div className="pt-4 border-t space-y-2">
                                <Link href="/sign-in">
                                    <Button variant="ghost" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                                        Sign In
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button
                                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                                        onClick={() => setMobileMenuOpen(false)}
                                        title="Get started with NexusFlow"
                                    >
                                        <Rocket className="h-4 w-4 mr-2" aria-hidden="true" />
                                        Get Started
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
