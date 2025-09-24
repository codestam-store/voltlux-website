"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Users, Leaf } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our growing experts",
    contact: "+1 (555) 123-GROW",
    action: "tel:+15551234769",
    available: "Mon-Fri 8AM-6PM PST"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Get detailed information",
    contact: "hello@greentechgardens.com",
    action: "mailto:hello@greentechgardens.com",
    available: "24/7 Response"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant support online",
    contact: "Chat Now",
    action: "#",
    available: "Mon-Fri 9AM-5PM PST"
  },
  {
    icon: Calendar,
    title: "Schedule Call",
    description: "Book a consultation",
    contact: "Book Meeting",
    action: "/schedule",
    available: "Flexible Scheduling"
  }
]

const offices = [
  {
    city: "San Francisco",
    address: "123 Innovation Drive, Suite 400",
    zipcode: "San Francisco, CA 94105",
    phone: "+1 (555) 123-GROW",
    email: "sf@greentechgardens.com",
    hours: "Mon-Fri: 8AM-6PM PST",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
  },
  {
    city: "Austin",
    address: "456 Green Tech Blvd, Floor 2",
    zipcode: "Austin, TX 78701",
    phone: "+1 (555) 456-GROW",
    email: "austin@greentechgardens.com",
    hours: "Mon-Fri: 9AM-5PM CST",
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=400&h=300&fit=crop"
  },
  {
    city: "New York",
    address: "789 Urban Farm Ave, 15th Floor",
    zipcode: "New York, NY 10001",
    phone: "+1 (555) 789-GROW",
    email: "ny@greentechgardens.com",
    hours: "Mon-Fri: 8AM-6PM EST",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop"
  }
]

const faqs = [
  {
    question: "How quickly can I get started with a growing system?",
    answer: "Most of our home systems can be delivered and set up within 1-2 weeks. Commercial installations typically take 2-4 weeks depending on complexity."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes! We offer comprehensive support including setup assistance, growing guides, troubleshooting, and maintenance services for all our systems."
  },
  {
    question: "What&apos;s included in a consultation?",
    answer: "Our consultations include space assessment, system recommendations, cost estimates, timeline planning, and ongoing support options tailored to your needs."
  },
  {
    question: "Can you help with commercial installations?",
    answer: "Absolutely! We specialize in commercial growing solutions for restaurants, schools, offices, and large-scale operations with custom design and installation."
  }
]

export function ContactPageClient() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 leaf-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get in Touch
              </span>
              <br />
              Let&apos;s Grow Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your urban farming journey? Our team of experts is here to help you 
              find the perfect growing solution for your space and needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multiple Ways to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the communication method that works best for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="plant-card h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{method.description}</p>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="font-semibold text-primary">{method.contact}</div>
                    <div className="text-sm text-muted-foreground">{method.available}</div>
                    <Button 
                      asChild 
                      className="w-full curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
                    >
                      {method.action.startsWith('/') ? (
                        <Link href={method.action}>Contact Now</Link>
                      ) : (
                        <a href={method.action}>Contact Now</a>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30 organic-texture">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Send Us a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Message</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours with 
                personalized recommendations for your growing needs.
              </p>

              <Card className="plant-card">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="curved-organic"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="curved-organic"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="curved-organic"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="curved-organic"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">What are you interested in? *</Label>
                      <Select onValueChange={handleSelectChange} required>
                        <SelectTrigger className="curved-organic">
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home-systems">Home Growing Systems</SelectItem>
                          <SelectItem value="commercial">Commercial Solutions</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                          <SelectItem value="maintenance">Support & Maintenance</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your growing goals, space, and any specific questions you have..."
                        rows={5}
                        required
                        className="curved-organic resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg py-6 eco-shadow curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="plant-card overflow-hidden">
                <img
                  src="https://maxm-imggenurl.web.val.run/modern customer service representative helping client with hydroponic system consultation, friendly professional environment, green technology"
                  alt="Customer consultation"
                  className="w-full h-64 object-cover sustainable-filter"
                  loading="lazy"
                />
              </div>

              <Card className="plant-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Response Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email Inquiries</span>
                    <span className="font-semibold">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone Calls</span>
                    <span className="font-semibold">Immediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Consultations</span>
                    <span className="font-semibold">Same week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Technical Support</span>
                    <span className="font-semibold">Within 4 hours</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="plant-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">Personalized system recommendations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">Detailed cost and timeline estimates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">Growing guides and best practices</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">Ongoing support and maintenance options</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Locations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See our growing systems in action at one of our showroom locations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="plant-card h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={office.image}
                      alt={`${office.city} office`}
                      className="w-full h-48 object-cover sustainable-filter group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">{office.city}</h3>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div>{office.address}</div>
                          <div className="text-muted-foreground">{office.zipcode}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                          {office.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                          {office.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{office.hours}</span>
                      </div>
                    </div>

                    <Button 
                      asChild 
                      className="w-full mt-4 curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
                    >
                      <Link href="/schedule">Schedule Visit</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30 organic-texture">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services and systems.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="plant-card">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Have more questions? We&apos;re here to help!
            </p>
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-8 py-6 eco-shadow curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
            >
              <Link href="/schedule" className="flex items-center gap-2">
                Schedule Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}