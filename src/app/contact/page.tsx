"use client"

import type { Metadata } from "next"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Camera,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Send,
  MessageSquare,
  Calendar,
  Heart,
  Star,
  CheckCircle
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Studio Location",
    details: ["123 Vintage Lane", "Arts District", "New York, NY 10013"],
    action: "Get Directions"
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "Mon-Fri: 9AM-6PM", "Sat: 10AM-4PM"],
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@noirstudio.com", "bookings@noirstudio.com", "info@noirstudio.com"],
    action: "Send Email"
  },
  {
    icon: Clock,
    title: "Studio Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: By Appointment"],
    action: "Book Visit"
  }
]

const socialLinks = [
  { icon: Instagram, name: "Instagram", handle: "@noirstudio", url: "https://instagram.com/noirstudio" },
  { icon: Facebook, name: "Facebook", handle: "Noir Studio", url: "https://facebook.com/noirstudio" },
  { icon: Twitter, name: "Twitter", handle: "@noir_studio", url: "https://twitter.com/noir_studio" }
]

const faqs = [
  {
    question: "What makes your photography style unique?",
    answer: "We specialize in vintage film photography, using traditional techniques and equipment to create timeless, authentic images with rich character and emotional depth."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking 4-6 weeks in advance for portrait sessions and 6-12 months for weddings. However, we&apos;ll do our best to accommodate shorter notice when possible."
  },
  {
    question: "Do you offer digital images?",
    answer: "Yes, all sessions include high-resolution digital images. We also offer fine art prints, albums, and custom framing services for those who want physical keepsakes."
  },
  {
    question: "Can you shoot in color as well?",
    answer: "While we specialize in black and white film photography, we can accommodate color requests. We&apos;ll discuss your preferences during the consultation."
  },
  {
    question: "What should I wear for a portrait session?",
    answer: "We provide detailed styling guides before your session. Generally, solid colors, classic patterns, and timeless pieces work best with our vintage aesthetic."
  },
  {
    question: "Do you travel for destination shoots?",
    answer: "Absolutely! We love destination weddings and location shoots. Travel fees apply, and we&apos;ll provide a detailed quote based on your specific needs."
  }
]

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
        <div 
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center" 
            alt="Fine art photography prints and studio"
            className="w-full h-full object-cover grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm tracking-wider uppercase">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-tight tracking-tight"
              variants={fadeInUp}
            >
              Let&apos;s Create Something
              <span className="block text-primary typewriter-effect">
                Beautiful Together
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Every great photograph begins with a conversation. Whether you&apos;re planning a wedding,
              need professional portraits, or want to learn film photography, we&apos;re here to help.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={fadeInUp}
            >
              <Button 
                asChild 
                size="lg" 
                className="retro-shadow text-base px-8 py-6 uppercase tracking-wider font-medium"
              >
                <Link href="/schedule" className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Book Your Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-8 py-6 uppercase tracking-wider font-medium vintage-border"
              >
                <Link href="/vehicles" className="flex items-center gap-3">
                  <Camera className="w-5 h-5" />
                  View Portfolio
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div 
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1 vintage-border">
              Contact Information
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              Ways to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re always excited to hear about new projects and answer any questions
              you might have about our photography services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 vintage-border retro-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 vintage-border">
                    <info.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                  <Button variant="outline" size="sm" className="mt-4 vintage-border">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="px-3 py-1 vintage-border">
                  Send a Message
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold typewriter-effect">
                  Tell Us About Your Vision
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                  The more details you provide, the better we can tailor our response.
                </p>
              </div>

              <Card className="vintage-border retro-shadow">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" className="vintage-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" className="vintage-border" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="vintage-border" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="vintage-border" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select id="service" className="w-full px-3 py-2 border border-border rounded-md bg-background vintage-border">
                        <option value="">Select a service</option>
                        <option value="portrait">Portrait Session</option>
                        <option value="wedding">Wedding Photography</option>
                        <option value="commercial">Commercial Photography</option>
                        <option value="prints">Fine Art Prints</option>
                        <option value="workshop">Photography Workshop</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" className="vintage-border" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <select id="budget" className="w-full px-3 py-2 border border-border rounded-md bg-background vintage-border">
                        <option value="">Select budget range</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="over-5000">Over $5,000</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your vision, style preferences, and any specific requirements..."
                        rows={5}
                        className="vintage-border"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full vintage-border">
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Studio Info & Map */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="px-3 py-1 vintage-border">
                  Visit Our Studio
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold typewriter-effect">
                  Come See Our Space
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our studio is located in the heart of the Arts District, featuring vintage equipment,
                  a traditional darkroom, and a gallery showcasing our finest work.
                </p>
              </div>

              {/* Studio Image */}
              <Card className="vintage-border retro-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=300&fit=crop"
                    alt="Noir Studio Interior"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="vintage-border">
                      Our Studio
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Studio Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-foreground" />
                      <span className="text-sm text-muted-foreground">Traditional Darkroom</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-foreground" />
                      <span className="text-sm text-muted-foreground">Vintage Equipment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-foreground" />
                      <span className="text-sm text-muted-foreground">Natural Light Studio</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-foreground" />
                      <span className="text-sm text-muted-foreground">Gallery Space</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-foreground" />
                      <span className="text-sm text-muted-foreground">Client Lounge</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-foreground" />
                      <span className="text-sm text-muted-foreground">Free Parking</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="vintage-border retro-shadow">
                <CardContent className="p-6">
                  <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="w-8 h-8 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">123 Vintage Lane, Arts District</p>
                      <Button variant="outline" size="sm" className="vintage-border">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="vintage-border retro-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Our Journey</CardTitle>
                  <CardDescription>
                    Stay connected and see our latest work on social media
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button key={index} variant="outline" size="sm" asChild className="vintage-border">
                        <Link href={social.url} target="_blank" rel="noopener noreferrer">
                          <social.icon className="w-4 h-4 mr-2" />
                          {social.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1 vintage-border">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              Common Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are answers to some of the most common questions we receive.
              Don&apos;t see your question? Feel free to reach out directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="vintage-border retro-shadow">
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
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground">
              We&apos;re excited to learn about your vision and help bring it to life through
              the timeless art of vintage film photography.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="vintage-border">
                <Link href="/schedule">
                  Book Your Session
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="vintage-border">
                <Link href="tel:+15551234567">
                  Call Us Now
                  <Phone className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}