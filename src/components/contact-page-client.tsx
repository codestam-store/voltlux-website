"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Globe } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactMethods = [
    {
        icon: Mail,
        title: "Email Us",
        description: "Get in touch with our team for any inquiries",
        contact: "hello@wanderlust.com",
        action: "Send Email",
        href: "mailto:hello@wanderlust.com"
    },
    {
        icon: Phone,
        title: "Call Us",
        description: "Speak directly with our travel experts",
        contact: "+1 (555) 123-4567",
        action: "Call Now",
        href: "tel:+15551234567"
    },
    {
        icon: MessageSquare,
        title: "Live Chat",
        description: "Chat with our support team in real-time",
        contact: "Available 24/7",
        action: "Start Chat",
        href: "#"
    }
]

const officeLocations = [
    {
        city: "San Francisco",
        country: "United States",
        address: "123 Adventure Street, San Francisco, CA 94102",
        phone: "+1 (555) 123-4567",
        email: "sf@wanderlust.com",
        hours: "Mon-Fri: 9AM-6PM PST"
    },
    {
        city: "London",
        country: "United Kingdom",
        address: "456 Explorer Lane, London, UK SW1A 1AA",
        phone: "+44 20 7123 4567",
        email: "london@wanderlust.com",
        hours: "Mon-Fri: 9AM-6PM GMT"
    },
    {
        city: "Sydney",
        country: "Australia",
        address: "789 Wanderer Way, Sydney, NSW 2000",
        phone: "+61 2 9123 4567",
        email: "sydney@wanderlust.com",
        hours: "Mon-Fri: 9AM-6PM AEST"
    }
]

const faqs = [
    {
        question: "How do I book an eco-tourism adventure?",
        answer: "You can book directly through our website, call our travel experts, or email us. We'll help you choose the perfect sustainable adventure for your preferences and schedule."
    },
    {
        question: "What makes your tours eco-friendly?",
        answer: "Our tours are designed with sustainability in mind - from carbon-neutral transportation to supporting local communities and conservation efforts. We minimize environmental impact while maximizing positive social impact."
    },
    {
        question: "Do you offer group discounts?",
        answer: "Yes! We offer special rates for groups of 6 or more travelers. Contact us for custom group itineraries and pricing."
    },
    {
        question: "What safety measures do you have in place?",
        answer: "Safety is our top priority. All our guides are certified, we use high-quality equipment, and we have comprehensive emergency protocols in place for every destination."
    }
]

export default function ContactPageClient() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Ready to start your eco-tourism adventure? Our team of travel experts is here to help you plan the perfect sustainable journey
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                <span>Expert Team</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                <span>Global Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>24/7 Available</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            How Can We Help?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Choose your preferred way to connect with our eco-tourism experts
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={method.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                    <CardContent className="p-6">
                                        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                                            <method.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3 text-foreground">{method.title}</h3>
                                        <p className="text-muted-foreground mb-4">{method.description}</p>
                                        <div className="text-lg font-medium text-foreground mb-4">{method.contact}</div>
                                        <Button asChild className="w-full">
                                            <Link href={method.href}>
                                                {method.action}
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Send Us a Message
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Tell us about your dream eco-tourism adventure and we'll help you make it a reality
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-0 shadow-xl">
                            <CardContent className="p-8">
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" placeholder="Enter your first name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" placeholder="Enter your last name" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="Enter your email" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input id="phone" placeholder="Enter your phone number" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="What can we help you with?" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your travel plans, questions, or any specific requirements..."
                                            rows={6}
                                        />
                                    </div>

                                    <Button type="submit" className="w-full" size="lg">
                                        <Send className="mr-2 h-4 w-4" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Office Locations */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Our Global Offices
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Visit us in person or connect with our local teams around the world
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {officeLocations.map((office, index) => (
                            <motion.div
                                key={office.city}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{office.city}</CardTitle>
                                        <CardDescription>{office.country}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-4 w-4 text-primary mt-1" />
                                            <div className="text-sm text-muted-foreground">
                                                {office.address}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-4 w-4 text-primary" />
                                            <div className="text-sm text-muted-foreground">
                                                {office.phone}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="h-4 w-4 text-primary" />
                                            <div className="text-sm text-muted-foreground">
                                                {office.email}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="h-4 w-4 text-primary" />
                                            <div className="text-sm text-muted-foreground">
                                                {office.hours}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Find answers to common questions about our eco-tourism services
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Card className="border-0 shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{faq.answer}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Start Your Adventure?
                        </h2>
                        <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                            Let's work together to create the perfect eco-tourism experience for you
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                                <Link href="/destinations">
                                    Explore Destinations
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                                <Link href="/adventures">
                                    View Adventures
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
