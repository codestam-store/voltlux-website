"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Github,
    ArrowUp,
    Heart
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8">
                                <svg
                                    viewBox="0 0 32 32"
                                    className="w-8 h-8 text-primary"
                                    fill="currentColor"
                                    aria-labelledby="nexusflow-logo-footer"
                                >
                                    <title id="nexusflow-logo-footer">NexusFlow Logo</title>
                                    <path d="M16 2L6 9v13l10 7 10-7V9L16 2zm0 3.5L24 11v10L16 25l-8-4V11l8-5.5z" />
                                    <circle cx="16" cy="16" r="5" fill="currentColor" opacity="0.8" />
                                </svg>
                            </div>
                            <div>
                                <span className="font-bold text-lg bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                    NexusFlow
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Transforming businesses through innovative digital solutions.
                            We help companies thrive in the digital age with cutting-edge technology.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://linkedin.com/company/nexusflow" aria-label="LinkedIn">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Linkedin className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="https://twitter.com/nexusflow" aria-label="Twitter">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Twitter className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="https://github.com/nexusflow" aria-label="GitHub">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Github className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Solutions</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/solutions/ai-ml" className="text-muted-foreground hover:text-foreground transition-colors">
                                    AI & Machine Learning
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/web-development" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/digital-transformation" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Digital Transformation
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/cloud" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Cloud Solutions
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/cybersecurity" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Cybersecurity
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/press" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Press
                                </Link>
                            </li>
                            <li>
                                <Link href="/partners" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Partners
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Contact</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <Mail className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-muted-foreground">Email</p>
                                    <Link href="mailto:hello@nexusflow.com" className="text-foreground hover:text-primary transition-colors">
                                        hello@nexusflow.com
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-muted-foreground">Phone</p>
                                    <Link href="tel:+1-555-123-4567" className="text-foreground hover:text-primary transition-colors">
                                        +1 (555) 123-4567
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-muted-foreground">Address</p>
                                    <p className="text-foreground">
                                        123 Innovation Drive<br />
                                        Tech City, TC 12345
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-border/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
                            <p>&copy; {currentYear} NexusFlow. All rights reserved.</p>
                            <div className="flex items-center gap-4">
                                <Link href="/privacy" className="hover:text-foreground transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="hover:text-foreground transition-colors">
                                    Terms of Service
                                </Link>
                                <Link href="/cookies" className="hover:text-foreground transition-colors">
                                    Cookie Policy
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Developed with</span>
                            <Heart className="h-4 w-4 text-red-500" />
                            <span>by</span>
                            <Link
                                href="https://codestam.com"
                                className="text-primary hover:text-primary/80 transition-colors font-medium"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Codestam Technologies
                            </Link>
                        </div>
                    </div>

                    {/* Legal Disclaimer */}
                    <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground text-center leading-relaxed">
                            <strong>Legal Notice:</strong> Trying to use this website&apos;s design, code, or assets without permission will lead to serious legal issues.
                            All content, design, and code are protected by copyright and intellectual property laws.
                        </p>
                    </div>

                    {/* Back to Top */}
                    <div className="mt-6 flex justify-center">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-muted-foreground hover:text-foreground"
                            aria-label="Back to top"
                        >
                            <ArrowUp className="h-4 w-4 mr-2" />
                            Back to Top
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
