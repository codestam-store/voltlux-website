"use client";

import { motion } from "framer-motion";
import { WeddingNavbar } from "@/components/wedding-navbar";
import { PageHeroSection } from "@/components/sections/page-hero-section";
import { Phone, Mail, MessageCircle, MapPin, Clock, Heart, Send, User, FileText, Calendar, ArrowRight, Sparkles, Shield, Award, Users } from "lucide-react";
import Link from "next/link";



const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our wedding contract experts",
    contact: "+1-555-ETERNAL",
    availability: "Mon-Fri 9AM-6PM EST",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed responses to your questions",
    contact: "hello@codestam.com",
    availability: "24/7 Response within 2 hours",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant help when you need it most",
    contact: "Available on website",
    availability: "24/7 Instant Response",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Calendar,
    title: "Schedule Consultation",
    description: "Book a personalized consultation session",
    contact: "Book online or call",
    availability: "Flexible scheduling available",
    color: "from-amber-500 to-orange-500"
  }
];

const officeInfo = [
  {
    icon: MapPin,
    title: "Main Office",
    details: [
      "123 Wedding Way, Suite 456",
      "New York, NY 10001",
      "United States"
    ]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 9:00 AM - 6:00 PM EST",
      "Saturday: 10:00 AM - 4:00 PM EST",
      "Sunday: Emergency support only"
    ]
  },
  {
    icon: Shield,
    title: "Emergency Support",
    details: [
      "24/7 Emergency hotline available",
      "For urgent wedding day issues",
      "Premium & Luxury clients only"
    ]
  }
];

const faqs = [
  {
    question: "How quickly can you create a custom contract?",
    answer: "Standard custom contracts take 3-5 business days. We offer rush service for 24-hour delivery at an additional cost."
  },
  {
    question: "Do you offer consultations before purchasing?",
    answer: "Yes! We offer free 15-minute consultations to discuss your needs and recommend the best service package."
  },
  {
    question: "What if I need help on my wedding day?",
    answer: "Our Premium and Luxury clients have access to emergency support. We&apos;re here to help resolve any contract-related issues."
  },
  {
    question: "Can you review contracts I already have?",
    answer: "Absolutely! We offer contract review services to identify potential issues and suggest improvements."
  }
];

const reasons = [
  {
    icon: Award,
    title: "Expert Team",
    description: "Experienced wedding contract attorneys and legal professionals"
  },
  {
    icon: Shield,
    title: "Proven Protection",
    description: "Over 5,000 couples protected with our comprehensive contracts"
  },
  {
    icon: Users,
    title: "Personal Service",
    description: "Dedicated support throughout your wedding planning journey"
  },
  {
    icon: Heart,
    title: "Passion for Weddings",
    description: "We understand the importance of your special day"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <WeddingNavbar />
      
      {/* Hero Section */}
      <PageHeroSection
        title="Let's Protect Your Perfect Day"
        subtitle="Expert Wedding Contract Support"
        description="Ready to secure your wedding with professional contract services? Our expert team is here to help you every step of the way."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        icon={Mail}
        ctaText="Get Started"
        ctaHref="#contact"
        gradient="from-indigo-900/70 via-purple-900/60 to-pink-900/70"
      />

      {/* Contact Methods */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the contact method that works best for you. We&apos;re here to help 
              with all your wedding contract needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-card rounded-3xl elegant-shadow wedding-border hover:shadow-xl transition-all duration-500"
                >
                  <div className="text-center space-y-6">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-card-foreground">
                        {method.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {method.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-lg font-semibold text-primary">
                        {method.contact}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {method.availability}
                      </div>
                    </div>
                    
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 text-indigo-600 rounded-xl font-semibold hover:from-indigo-600 hover:to-pink-600 hover:text-white transition-all duration-300">
                      Contact Now
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fill out the form below and we&apos;ll get back to you within 2 hours. 
                  For urgent matters, please call our hotline.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Wedding Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="date"
                      className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Service Needed
                  </label>
                  <select className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300">
                    <option value="">Select a service</option>
                    <option value="templates">Contract Templates</option>
                    <option value="custom">Custom Contract Creation</option>
                    <option value="consultation">Legal Consultation</option>
                    <option value="review">Contract Review</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Message *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-4 w-5 h-5 text-muted-foreground" />
                    <textarea
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your wedding contract needs..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 elegant-shadow flex items-center justify-center space-x-3"
                >
                  <Send className="w-6 h-6" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Office Info & Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Information */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                  Office Information
                </h2>
                
                <div className="space-y-6">
                  {officeInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={info.title} className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-foreground">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Why Choose Eternal Vows?
                </h3>
                
                <div className="space-y-4">
                  {reasons.map((reason, index) => {
                    const IconComponent = reason.icon;
                    return (
                      <motion.div
                        key={reason.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4 p-4 bg-card rounded-2xl wedding-border"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-card-foreground">
                            {reason.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {reason.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div className="p-6 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 rounded-3xl wedding-border">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/templates"
                    className="flex items-center justify-between p-3 bg-card rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <span className="font-semibold text-card-foreground">Browse Templates</span>
                    <ArrowRight className="w-5 h-5 text-indigo-600" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="flex items-center justify-between p-3 bg-card rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <span className="font-semibold text-card-foreground">View Pricing</span>
                    <ArrowRight className="w-5 h-5 text-indigo-600" />
                  </Link>
                  <Link
                    href="/services"
                    className="flex items-center justify-between p-3 bg-card rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <span className="font-semibold text-card-foreground">Our Services</span>
                    <ArrowRight className="w-5 h-5 text-indigo-600" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Quick answers to common questions about our services and process.
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
                className="p-6 bg-card rounded-2xl elegant-shadow wedding-border"
              >
                <h3 className="text-lg font-bold text-card-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Don&apos;t wait until the last minute. Protect your wedding day now with 
              professional contract services from Eternal Vows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 elegant-shadow flex items-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>Call +1-555-ETERNAL</span>
              </button>
              
              <Link
                href="/templates"
                className="px-10 py-5 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center space-x-3"
              >
                <FileText className="w-6 h-6" />
                <span>Browse Templates</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}