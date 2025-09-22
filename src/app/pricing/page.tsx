"use client";

import { motion } from "framer-motion";
import { WeddingNavbar } from "@/components/wedding-navbar";
import { PageHeroSection } from "@/components/sections/page-hero-section";
import { Check, X, Star, Crown, Heart, Shield, Zap, Users, Phone, Mail, MessageCircle, ArrowRight, Sparkles, DollarSign } from "lucide-react";
import Link from "next/link";



const pricingPlans = [
  {
    name: "Essential",
    price: 49,
    originalPrice: 79,
    description: "Perfect for couples planning intimate weddings with basic vendor needs",
    icon: Heart,
    color: "from-blue-500 to-cyan-500",
    popular: false,
    features: [
      "5 Contract Templates",
      "Basic Customization",
      "Email Support",
      "Standard Legal Review",
      "PDF Downloads",
      "30-Day Money Back Guarantee",
      "Wedding Planning Checklist",
      "Vendor Contact Templates"
    ],
    notIncluded: [
      "Custom Contract Creation",
      "Phone Support",
      "Legal Consultation",
      "Priority Support",
      "Advanced Customization",
      "Contract Negotiation Help"
    ]
  },
  {
    name: "Premium",
    price: 149,
    originalPrice: 199,
    description: "Comprehensive protection for traditional weddings with multiple vendors",
    icon: Star,
    color: "from-purple-500 to-pink-500",
    popular: true,
    features: [
      "15 Contract Templates",
      "Advanced Customization",
      "Priority Email & Phone Support",
      "Comprehensive Legal Review",
      "Multiple Format Downloads",
      "60-Day Money Back Guarantee",
      "Wedding Planning Toolkit",
      "Vendor Negotiation Guide",
      "Contract Amendment Templates",
      "Emergency Contact Support",
      "Legal Consultation (30 min)",
      "Risk Assessment Report"
    ],
    notIncluded: [
      "Unlimited Custom Contracts",
      "24/7 Support",
      "On-site Legal Assistance",
      "Dedicated Account Manager"
    ]
  },
  {
    name: "Luxury",
    price: 299,
    originalPrice: 399,
    description: "Premium service for luxury weddings requiring extensive legal protection",
    icon: Crown,
    color: "from-amber-500 to-orange-500",
    popular: false,
    features: [
      "Unlimited Contract Templates",
      "Full Custom Contract Creation",
      "24/7 Priority Support",
      "Expert Legal Review & Consultation",
      "All Format Downloads",
      "90-Day Money Back Guarantee",
      "Complete Wedding Legal Toolkit",
      "Personal Contract Specialist",
      "Unlimited Contract Revisions",
      "Emergency Legal Hotline",
      "Legal Consultation (Unlimited)",
      "On-site Contract Review",
      "Vendor Dispute Resolution",
      "Insurance Coordination",
      "International Wedding Support",
      "Dedicated Account Manager"
    ],
    notIncluded: []
  }
];

const addOns = [
  {
    name: "Rush Service",
    price: 99,
    description: "Get your contracts within 24 hours",
    icon: Zap
  },
  {
    name: "Legal Consultation",
    price: 150,
    description: "1-hour consultation with wedding law expert",
    icon: Users
  },
  {
    name: "Contract Review",
    price: 75,
    description: "Professional review of existing contracts",
    icon: Shield
  },
  {
    name: "Vendor Negotiation",
    price: 200,
    description: "Expert assistance with vendor contract negotiations",
    icon: MessageCircle
  }
];

const faqs = [
  {
    question: "What&apos;s included in the contract templates?",
    answer: "Each template includes comprehensive terms covering payment schedules, cancellation policies, liability protection, service specifications, and dispute resolution procedures. All templates are legally reviewed and state-compliant."
  },
  {
    question: "Can I customize the contracts for my specific needs?",
    answer: "Absolutely! All our templates are fully customizable. Premium and Luxury plans include advanced customization options and professional assistance with modifications."
  },
  {
    question: "Do you offer refunds if I&apos;m not satisfied?",
    answer: "Yes, we offer money-back guarantees ranging from 30 to 90 days depending on your plan. We&apos;re confident you&apos;ll love our service, but we want you to feel completely secure in your purchase."
  },
  {
    question: "Are the contracts legally binding in all states?",
    answer: "Our contracts are designed to comply with wedding and contract law across all 50 states. For destination or international weddings, our Luxury plan includes specialized support for local legal requirements."
  },
  {
    question: "How quickly can I get my contracts?",
    answer: "Template downloads are instant upon purchase. Custom contracts typically take 3-5 business days, or 24 hours with our Rush Service add-on."
  },
  {
    question: "What if I need help with contract negotiations?",
    answer: "Our Premium and Luxury plans include negotiation guidance. We also offer dedicated vendor negotiation services as an add-on for additional support."
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <WeddingNavbar />
      
      {/* Hero Section */}
      <PageHeroSection
        title="Simple, Transparent Pricing"
        subtitle="Choose Your Perfect Plan"
        description="Choose the perfect plan to protect your wedding day. All plans include our satisfaction guarantee and professional legal support."
        backgroundImage="https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        icon={DollarSign}
        ctaText="View Plans"
        ctaHref="#pricing"
        gradient="from-amber-900/70 via-orange-900/60 to-red-900/70"
      />

      {/* Pricing Plans */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className={`relative p-8 bg-card rounded-3xl elegant-shadow wedding-border hover:shadow-2xl transition-all duration-500 ${
                    plan.popular ? 'ring-2 ring-amber-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center space-y-6">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-4xl font-bold text-card-foreground">
                          ${plan.price}
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          ${plan.originalPrice}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        One-time payment
                      </div>
                    </div>

                    <button className={`w-full px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-600 to-red-600 text-white hover:shadow-xl elegant-shadow'
                        : 'border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white'
                    }`}>
                      Get Started
                    </button>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h4 className="font-bold text-card-foreground">What&apos;s included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <div className="pt-4 border-t border-border">
                        <h5 className="font-semibold text-muted-foreground mb-3">Not included:</h5>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Optional Add-Ons
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enhance your package with additional services tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-card rounded-2xl elegant-shadow wedding-border hover:shadow-xl transition-all duration-500"
                >
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-amber-500/20 to-red-500/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground">
                      {addon.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {addon.description}
                    </p>
                    <div className="text-2xl font-bold text-amber-600">
                      ${addon.price}
                    </div>
                    <button className="w-full px-4 py-2 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300">
                      Add to Plan
                    </button>
                  </div>
                </motion.div>
              );
            })}
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
              Get answers to common questions about our pricing and services.
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

      {/* Contact Section */}
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Our wedding contract experts are here to help you choose the perfect plan 
              and answer any questions about protecting your special day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 elegant-shadow flex items-center space-x-3"
              >
                <Mail className="w-6 h-6" />
                <span>Contact Us</span>
              </Link>
              
              <Link
                href="tel:+1-555-ETERNAL"
                className="px-10 py-5 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>Call Now</span>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-3">
                <Phone className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-bold text-foreground">Phone Support</h3>
                <p className="text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                <p className="text-primary font-semibold">+1-555-ETERNAL</p>
              </div>
              
              <div className="text-center space-y-3">
                <Mail className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-bold text-foreground">Email Support</h3>
                <p className="text-muted-foreground">24/7 Response</p>
                <p className="text-primary font-semibold">hello@codestam.com</p>
              </div>
              
              <div className="text-center space-y-3">
                <MessageCircle className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-bold text-foreground">Live Chat</h3>
                <p className="text-muted-foreground">Instant Help</p>
                <p className="text-primary font-semibold">Available 24/7</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}