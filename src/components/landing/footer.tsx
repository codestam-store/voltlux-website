"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
  Shield,
  Zap,
  Globe,
  Code,
  Rocket,
  Star,
  Award,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "Quantum AI & ML", href: "/solutions/quantum-ai" },
    { name: "Neural Networks", href: "/solutions/neural-networks" },
    { name: "Cloud Architecture", href: "/solutions/cloud-architecture" },
    { name: "Cybersecurity", href: "/solutions/cybersecurity" },
    { name: "Data Analytics", href: "/solutions/data-analytics" },
    { name: "Performance Optimization", href: "/solutions/performance" }
  ],
  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Development", href: "/services/mobile-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "DevOps & Cloud", href: "/services/devops-cloud" },
    { name: "Consulting", href: "/services/consulting" },
    { name: "Training", href: "/services/training" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about/team" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ],
  resources: [
    { name: "Documentation", href: "/resources/documentation" },
    { name: "API Reference", href: "/resources/api" },
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "White Papers", href: "/resources/white-papers" },
    { name: "Webinars", href: "/resources/webinars" },
    { name: "Support", href: "/support" }
  ]
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com/quantumforge", icon: Github },
  { name: "Twitter", href: "https://twitter.com/quantumforge", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/quantumforge", icon: Linkedin },
  { name: "Email", href: "mailto:hello@quantumforge.com", icon: Mail }
];

const stats = [
  { label: "Projects Delivered", value: "500+", icon: Rocket },
  { label: "Happy Clients", value: "200+", icon: Users },
  { label: "Success Rate", value: "99.8%", icon: TrendingUp },
  { label: "Years Experience", value: "8+", icon: Clock }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <svg
                    viewBox="0 0 40 40"
                    className="w-10 h-10 text-primary transition-transform group-hover:scale-110 group-hover:rotate-12"
                    fill="currentColor"
                    aria-labelledby="quantumforge-footer-logo"
                  >
                    <title id="quantumforge-footer-logo">QuantumForge Logo</title>
                    <defs>
                      <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.7 }} />
                      </linearGradient>
                    </defs>
                    <path d="M20 4L8 16v16l12 10 12-10V16L20 4zm0 6L32 18v12L20 36l-12-6V18l12-8z" fill="url(#footerLogoGradient)" />
                    <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.3" />
                    <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.6" />
                    <circle cx="20" cy="20" r="1.5" fill="currentColor" opacity="0.9" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    QuantumForge
                  </span>
                  <span className="text-xs text-muted-foreground tracking-wider uppercase">Quantum Innovation</span>
                </div>
              </Link>
              
              <p className="text-muted-foreground leading-relaxed">
                Revolutionizing digital experiences with cutting-edge quantum computing, AI solutions, and advanced web development that propel businesses into the future.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="text-center space-y-1">
                    <div className="flex justify-center">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <IconComponent className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="text-lg font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                    title={social.name}
                  >
                    <IconComponent className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-border/50" />

      {/* Bottom Footer */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <span>&copy; 2024 QuantumForge. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="h-10 w-10 rounded-lg hover:bg-primary/10"
              title="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-6 pt-6 border-t border-border/30">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Legal Notice:</strong> Trying to use this website&apos;s design, code, or assets without permission will lead to serious legal issues. All content, design, and code are protected by copyright and intellectual property laws.
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="text-foreground">Disclaimer:</span> Images and visual assets used on this website are sourced from Unsplash and other third-party providers. These assets are not owned by Codestam Technologies and are used under appropriate licensing agreements.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span>Developed by</span>
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
        </div>
      </div>
    </footer>
  );
}
