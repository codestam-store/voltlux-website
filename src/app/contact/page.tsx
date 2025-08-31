import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Users,
  Building2,
  Globe,
  CheckCircle,
  Star,
  Award,
  Heart,
  Zap,
  Shield,
  Eye,
  Brain,
  Handshake,
  Target,
  Calendar,
  FileText,
  Video,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Codestam Technologies",
  description: "Get in touch with Codestam Technologies. We're here to help you with your digital transformation needs. Contact us for consultations, support, or to start your project.",
  openGraph: {
    title: "Contact Us | Codestam Technologies",
    description: "Get in touch with Codestam Technologies. We're here to help you with your digital transformation needs. Contact us for consultations, support, or to start your project.",
  },
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message and we'll get back to you within 24 hours.",
    contact: "hello@codestam.com",
    action: "Send Email",
    href: "mailto:hello@codestam.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team during business hours.",
    contact: "+1 (555) 123-4567",
    action: "Call Now",
    href: "tel:+15551234567"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant support from our technical team.",
    contact: "Available 24/7",
    action: "Start Chat",
    href: "#chat"
  }
]

const officeLocations = [
  {
    city: "San Francisco",
    country: "United States",
    address: "123 Innovation Drive, Suite 100",
    cityState: "San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
    email: "sf@codestam.com",
    hours: "Mon-Fri 9AM-6PM PST",
    timezone: "PST",
    icon: Building2
  },
  {
    city: "New York",
    country: "United States",
    address: "456 Tech Avenue, Floor 15",
    cityState: "New York, NY 10001",
    phone: "+1 (555) 987-6543",
    email: "nyc@codestam.com",
    hours: "Mon-Fri 9AM-6PM EST",
    timezone: "EST",
    icon: Building2
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "789 Digital Street, Office 200",
    cityState: "London, UK EC1A 1BB",
    phone: "+44 20 7123 4567",
    email: "london@codestam.com",
    hours: "Mon-Fri 9AM-6PM GMT",
    timezone: "GMT",
    icon: Building2
  }
]

const supportOptions = [
  {
    icon: FileText,
    title: "Documentation",
    description: "Comprehensive guides and API documentation for all our solutions.",
    link: "/docs",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides to help you get the most out of our products.",
    link: "/tutorials",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect with other users and get answers from our community.",
    link: "/community",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Calendar,
    title: "Training Sessions",
    description: "Schedule personalized training sessions with our experts.",
    link: "/training",
    color: "from-orange-500 to-red-500"
  }
]

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/codestam", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/codestam", icon: Twitter },
  { name: "GitHub", href: "https://github.com/codestam", icon: Github },
  { name: "Facebook", href: "https://facebook.com/codestam", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com/codestam", icon: Instagram }
]

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on complexity and scope. Simple web applications typically take 4-8 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during the discovery phase."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements. We also provide 24/7 emergency support for critical issues."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We work with modern technologies including React, Next.js, Node.js, Python, Java, AWS, Google Cloud, and more. Our team stays current with the latest trends and best practices in software development."
  },
  {
    question: "How do you ensure project quality and security?",
    answer: "We follow industry best practices including code reviews, automated testing, security audits, and regular client check-ins. All our solutions undergo rigorous quality assurance processes before deployment."
  }
]

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge variant="secondary" className="inline-flex items-center space-x-2 px-3 py-1">
                <MessageSquare className="w-4 h-4" />
                <span>Get in Touch</span>
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance">
                Let&apos;s Start Your
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Digital Journey
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your business with innovative digital solutions? We&apos;re here to help.
                Get in touch with our team to discuss your project requirements and discover how we can
                bring your vision to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="#contact-form">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href="#contact-methods">
                  View Contact Options
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section id="contact-methods" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Contact Options
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the most convenient way to get in touch with our team. We&apos;re here to help
              you with any questions or project requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription className="text-base">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-lg font-semibold text-primary">
                    {method.contact}
                  </div>
                  <Button asChild className="w-full group">
                    <Link href={method.href}>
                      {method.action}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="px-3 py-1">
                  Contact Form
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold">
                  Tell Us About Your Project
                </h2>
                <p className="text-xl text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                  We&apos;re excited to learn about your project and discuss how we can help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Free Consultation</h3>
                    <p className="text-sm text-muted-foreground">No obligation, just expert advice</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">24-Hour Response</h3>
                    <p className="text-sm text-muted-foreground">We&apos;ll get back to you quickly</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Custom Solutions</h3>
                    <p className="text-sm text-muted-foreground">Tailored to your specific needs</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Get Started Today</CardTitle>
                <CardDescription>
                  Provide us with some details about your project and we&apos;ll be in touch soon.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground">
                    <option value="">Select a service</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="mobile-apps">Mobile App Development</option>
                    <option value="web-development">Web Development</option>
                    <option value="cloud-infrastructure">Cloud Infrastructure</option>
                    <option value="cybersecurity">Cybersecurity Solutions</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                    rows={4}
                    required
                  />
                </div>

                <Button className="w-full group" size="lg">
                  <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                  {" "}and{" "}
                  <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Global Presence
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Our Office Locations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We have offices around the world to serve our global client base.
              Visit us or schedule a meeting at any of our locations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <office.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{office.city}</CardTitle>
                      <CardDescription>{office.country}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPinIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">{office.address}</div>
                        <div className="text-muted-foreground">{office.cityState}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">{office.phone}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MailIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">{office.email}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">{office.hours}</div>
                        <div className="text-muted-foreground">{office.timezone}</div>
                      </div>
                    </div>
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <Link href={`mailto:${office.email}`}>
                      Contact This Office
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Support & Resources
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Get the Help You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive support and resources to help you succeed
              with our solutions and maximize your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {option.description}
                  </CardDescription>
                  <Button asChild variant="ghost" className="p-0 h-auto group-hover:translate-x-1 transition-transform">
                    <Link href={option.link}>
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              FAQ
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services, process, and what to expect
              when working with Codestam Technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social & CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Stay Connected
              </h2>
              <p className="text-xl text-muted-foreground">
                Follow us on social media for the latest updates, insights, and industry news.
                Join our community and stay informed about digital transformation trends.
              </p>
            </div>

            <div className="flex items-center justify-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center hover:bg-accent hover:border-primary/20 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="#contact-form">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>Transparent process</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4" />
                <span>Expert team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Handshake className="w-4 h-4" />
                <span>Proven results</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
