import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUpRight,
  Heart,
  Shield,
  Zap,
  Users,
  Globe,
  Code2,
  Sparkles
} from "lucide-react"

const footerLinks = {
  services: [
    { name: "Custom Software Development", href: "/services#custom" },
    { name: "Mobile App Development", href: "/services#mobile" },
    { name: "Web Development", href: "/services#web" },
    { name: "Cloud Solutions", href: "/services#cloud" },
    { name: "Cybersecurity", href: "/services#security" },
    { name: "Digital Transformation", href: "/services#transformation" }
  ],
  solutions: [
    { name: "E-commerce Platforms", href: "/solutions#ecommerce" },
    { name: "Enterprise Software", href: "/solutions#enterprise" },
    { name: "Fintech Applications", href: "/solutions#fintech" },
    { name: "Healthcare Systems", href: "/solutions#healthcare" },
    { name: "Educational Technology", href: "/solutions#education" },
    { name: "IoT Solutions", href: "/solutions#iot" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
    { name: "Partners", href: "/partners" }
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "White Papers", href: "/white-papers" },
    { name: "Webinars", href: "/webinars" },
    { name: "Support", href: "/support" }
  ]
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com/codestam", icon: Github },
  { name: "Twitter", href: "https://twitter.com/codestam", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/codestam", icon: Linkedin },
  { name: "Email", href: "mailto:hello@codestam.com", icon: Mail }
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-primary-foreground" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold">Codestam</div>
                  <div className="text-xs text-muted-foreground font-medium tracking-wide">TECHNOLOGIES</div>
                </div>
              </div>
              
              <p className="text-muted-foreground max-w-sm">
                Empowering businesses with cutting-edge digital solutions. We transform ideas into powerful, 
                scalable applications that drive growth and success.
              </p>
              
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-accent hover:border-primary/20 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Solutions</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Contact & Newsletter */}
        <div className="py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">hello@codestam.com</div>
                    <div className="text-sm text-muted-foreground">General inquiries</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">+1 (555) 123-4567</div>
                    <div className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">San Francisco, CA</div>
                    <div className="text-sm text-muted-foreground">United States</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Stay Updated</h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest insights, updates, and industry trends.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
              <div>&copy; 2024 Codestam Technologies. All rights reserved.</div>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-xs">
                <Shield className="w-3 h-3 mr-1" />
                SOC 2 Compliant
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Zap className="w-3 h-3 mr-1" />
                99.9% Uptime
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Users className="w-3 h-3 mr-1" />
                ISO 27001
              </Badge>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-6 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
            <div className="text-sm text-destructive/90 font-medium mb-2">
              ⚠️ Important Legal Notice
            </div>
            <p className="text-sm text-muted-foreground">
              Trying to use this website&apos;s design, code, or assets without permission will lead to serious legal issues. 
              All content, design, and code are protected by copyright and intellectual property laws.
            </p>
          </div>

          {/* Developer Attribution */}
          <div className="mt-4 text-center">
            <div className="text-xs text-muted-foreground flex items-center justify-center space-x-1">
              <span>Developed with</span>
              <Heart className="w-3 h-3 text-red-500" />
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
        </div>
      </div>
    </footer>
  )
}
