import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    ArrowRight,
    Mail,
    Phone,
    MapPin,
    Clock,
    MessageSquare,
    Send,
    CheckCircle,
    Users,
    Shield
} from "lucide-react";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with NexusFlow for your digital transformation needs. We're here to help you succeed.",
    openGraph: {
        title: "Contact Us | NexusFlow",
        description: "Ready to transform your business? Contact our team of experts today.",
    },
};

const contactMethods = [
    {
        icon: Mail,
        title: "Email Us",
        description: "Send us a message and we'll get back to you within 24 hours.",
        contact: "hello@nexusflow.com",
        action: "mailto:hello@nexusflow.com",
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: Phone,
        title: "Call Us",
        description: "Speak directly with our team during business hours.",
        contact: "+1 (555) 123-4567",
        action: "tel:+1-555-123-4567",
        color: "from-green-500 to-green-600"
    },
    {
        icon: MessageSquare,
        title: "Live Chat",
        description: "Chat with our support team for immediate assistance.",
        contact: "Available 24/7",
        action: "#",
        color: "from-purple-500 to-purple-600"
    }
];

const offices = [
    {
        city: "San Francisco",
        country: "United States",
        address: "123 Innovation Drive, Tech City, CA 94105",
        phone: "+1 (555) 123-4567",
        email: "sf@nexusflow.com",
        hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=400&fit=crop"
    },
    {
        city: "London",
        country: "United Kingdom",
        address: "456 Digital Lane, Tech District, EC2A 4BX",
        phone: "+44 20 1234 5678",
        email: "london@nexusflow.com",
        hours: "Mon-Fri: 9:00 AM - 6:00 PM GMT",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop"
    },
    {
        city: "Singapore",
        country: "Singapore",
        address: "789 Tech Boulevard, Marina Bay, 018956",
        phone: "+65 6123 4567",
        email: "sg@nexusflow.com",
        hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=400&fit=crop"
    }
];

const faqs = [
    {
        question: "What services does NexusFlow offer?",
        answer: "We offer comprehensive digital transformation services including AI & Machine Learning, Web Development, Digital Transformation, Cloud Solutions, Cybersecurity, and Performance Optimization."
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary depending on complexity and scope. Small projects typically take 4-8 weeks, while larger enterprise solutions can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
        question: "Do you work with startups and small businesses?",
        answer: "Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. We tailor our solutions to meet your specific needs and budget requirements."
    },
    {
        question: "What is your pricing structure?",
        answer: "Our pricing is project-based and depends on the scope, complexity, and requirements. We offer transparent pricing with no hidden fees and can work within your budget constraints."
    }
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
                    <div className="text-center">
                        <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            Get In Touch
                        </Badge>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Let&apos;s Start Your
                            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                Digital Journey
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                            Ready to transform your business? Our team of experts is here to help you navigate
                            your digital transformation journey and achieve remarkable results.
                        </p>

                        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>24/7 Support Available</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-blue-500" />
                                <span>Expert Team</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="h-4 w-4 text-purple-500" />
                                <span>Secure & Confidential</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            How Can We Help?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Choose your preferred way to get in touch with our team of digital transformation experts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-border/50">
                                <CardHeader>
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-4`}>
                                        <method.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">{method.title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {method.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold text-foreground mb-4">{method.contact}</p>
                                    <Link href={method.action}>
                                        <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                                            {method.title === "Live Chat" ? "Start Chat" : "Contact Now"}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-foreground mb-4">
                                    Send Us a Message
                                </h2>
                                <p className="text-muted-foreground">
                                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name *</Label>
                                        <Input id="firstName" placeholder="Enter your first name" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name *</Label>
                                        <Input id="lastName" placeholder="Enter your last name" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address *</Label>
                                    <Input id="email" type="email" placeholder="Enter your email address" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input id="company" placeholder="Enter your company name" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="service">Service of Interest</Label>
                                    <select
                                        id="service"
                                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="ai-ml">AI & Machine Learning</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="digital-transformation">Digital Transformation</option>
                                        <option value="cloud">Cloud Solutions</option>
                                        <option value="cybersecurity">Cybersecurity</option>
                                        <option value="performance">Performance Optimization</option>
                                        <option value="consulting">Digital Consulting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your project or how we can help you..."
                                        rows={6}
                                        required
                                    />
                                </div>

                                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                                    <Send className="mr-2 h-4 w-4" />
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-6">
                                    Get in Touch
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Email</h4>
                                            <p className="text-muted-foreground">hello@nexusflow.com</p>
                                            <p className="text-sm text-muted-foreground">We&apos;ll respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Phone</h4>
                                            <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                            <p className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM PST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Headquarters</h4>
                                            <p className="text-muted-foreground">
                                                123 Innovation Drive<br />
                                                Tech City, CA 94105<br />
                                                United States
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-card rounded-lg border border-border/50">
                                <h4 className="font-semibold text-foreground mb-4">Why Choose NexusFlow?</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>Expert team with 15+ years experience</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>500+ successful projects delivered</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>95% client satisfaction rate</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>24/7 support and maintenance</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Offices */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Global Offices
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We have offices around the world to serve our global client base.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {offices.map((office, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={office.image}
                                        alt={`${office.city} office`}
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white mb-1">{office.city}</h3>
                                        <p className="text-white/90 text-sm">{office.country}</p>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                                            <p className="text-sm text-muted-foreground">{office.address}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-4 w-4 text-muted-foreground" />
                                            <p className="text-sm text-muted-foreground">{office.phone}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="h-4 w-4 text-muted-foreground" />
                                            <p className="text-sm text-muted-foreground">{office.email}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="h-4 w-4 text-muted-foreground" />
                                            <p className="text-sm text-muted-foreground">{office.hours}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Find answers to common questions about our services and process.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <Card key={index} className="border-border/50">
                                <CardHeader>
                                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Don&apos;t wait to transform your business. Contact us today and let&apos;s discuss
                        how we can help you achieve your digital transformation goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#contact-form">
                            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                                Start Your Project
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/solutions">
                            <Button variant="outline" size="lg">
                                Explore Solutions
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
