import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Sparkles,
  Users,
  Building,
  CheckCircle,
  Star,
  Award,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "Contact - QuantumForge",
  description: "Get in touch with QuantumForge. We're here to help you transform your business with cutting-edge quantum computing and AI solutions.",
  keywords: ["contact", "support", "consultation", "inquiry", "get quote", "customer service"],
  openGraph: {
    title: "Contact - QuantumForge",
    description: "Get in touch with QuantumForge. We're here to help you transform your business with cutting-edge quantum computing and AI solutions.",
    url: "https://quantumforge.com/contact",
    siteName: "QuantumForge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuantumForge Contact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - QuantumForge",
    description: "Get in touch with QuantumForge. We're here to help you transform your business with cutting-edge quantum computing and AI solutions.",
    images: ["/og-image.jpg"],
    creator: "@codestamtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed message and we'll get back to you within 24 hours.",
    contact: "hello@quantumforge.com",
    action: "Send Email",
    href: "mailto:hello@quantumforge.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team for immediate assistance and consultation.",
    contact: "+1 (555) 123-4567",
    action: "Call Now",
    href: "tel:+15551234567"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant answers to your questions with our AI-powered chat support.",
    contact: "Available 24/7",
    action: "Start Chat",
    href: "#chat"
  }
];

const offices = [
  {
    city: "San Francisco",
    country: "United States",
    address: "123 Innovation Drive, Suite 100",
    phone: "+1 (555) 123-4567",
    email: "sf@quantumforge.com",
    hours: "Mon-Fri: 9AM-6PM PST",
    image: "https://maxm-imggenurl.web.val.run/modern office building in San Francisco with glass facade, high quality"
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "456 Tech Square, Floor 3",
    phone: "+44 20 1234 5678",
    email: "london@quantumforge.com",
    hours: "Mon-Fri: 9AM-6PM GMT",
    image: "https://maxm-imggenurl.web.val.run/modern office building in London with glass facade, high quality"
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "789 Digital Hub, Level 5",
    phone: "+65 6123 4567",
    email: "sg@quantumforge.com",
    hours: "Mon-Fri: 9AM-6PM SGT",
    image: "https://maxm-imggenurl.web.val.run/modern office building in Singapore with glass facade, high quality"
  }
];

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We work across all industries including healthcare, finance, manufacturing, retail, and technology. Our quantum computing and AI solutions are designed to be adaptable to any business sector."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. Simple implementations can take 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, maintenance, and optimization services to ensure your solutions continue to perform at peak efficiency."
  },
  {
    question: "What makes your quantum AI different?",
    answer: "Our quantum AI combines traditional machine learning with quantum computing principles, enabling faster processing, better accuracy, and the ability to solve previously intractable problems."
  },
  {
    question: "Do you offer training for our team?",
    answer: "Absolutely! We provide comprehensive training programs to help your team understand and effectively use our solutions. This includes workshops, documentation, and ongoing support."
  },
  {
    question: "What security measures do you implement?",
    answer: "We implement enterprise-grade security including end-to-end encryption, secure cloud infrastructure, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA."
  }
];

const stats = [
  { label: "Response Time", value: "< 24h", icon: Clock },
  { label: "Client Satisfaction", value: "99.8%", icon: Star },
  { label: "Projects Delivered", value: "500+", icon: Award },
  { label: "Global Offices", value: "3", icon: Building }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative px-4 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/30 px-4 py-2">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Get in Touch
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Let&apos;s Build the{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Future
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Ready to transform your business with quantum computing and AI? Our team is here to help you every step of the way.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contact-form">
                  <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Send className="h-5 w-5 mr-2" />
                    Start Project
                  </Button>
                </Link>
                <Link href="#offices">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                    <MapPin className="h-5 w-5 mr-2" />
                    Visit Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Multiple Ways to{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the method that works best for you. We&apos;re here to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <Card key={method.title} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {method.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {method.description}
                      </CardDescription>
                    </div>
                    <div className="space-y-3">
                      <div className="text-lg font-semibold text-foreground">{method.contact}</div>
                      <Link href={method.href}>
                        <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                          {method.action}
                          <ArrowUpRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Start Your{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Project
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us about your project and we&apos;ll get back to you with a customized solution.
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" className="h-12" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Enter your phone number" className="h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Enter your company name" className="h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="project">Project Type</Label>
                <select id="project" className="w-full h-12 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                  <option value="">Select a project type</option>
                  <option value="quantum-ai">Quantum AI & ML</option>
                  <option value="web-development">Web Development</option>
                  <option value="cloud-architecture">Cloud Architecture</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <select id="budget" className="w-full h-12 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                  <option value="">Select budget range</option>
                  <option value="under-50k">Under $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-500k">$250,000 - $500,000</option>
                  <option value="over-500k">Over $500,000</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project, goals, and requirements..." 
                  className="min-h-32 resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Global Offices */}
      <section id="offices" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Global Offices
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at any of our locations around the world for in-person consultations and collaboration.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <Card key={office.city} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={`${office.city} office`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {office.city}
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {office.country}
                    </CardDescription>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{office.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{office.hours}</span>
                    </div>
                  </div>

                  <Link href={`mailto:${office.email}`}>
                    <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                      Contact Office
                      <ArrowUpRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {faq.question}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground mt-2 leading-relaxed">
                          {faq.answer}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Transform
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Let&apos;s discuss how quantum computing and AI can revolutionize your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact-form">
                <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Send className="h-5 w-5 mr-2" />
                  Start Project
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                  View Solutions
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
