"use client";

import { motion } from "framer-motion";
import { WeddingNavbar } from "@/components/wedding-navbar";
import { PageHeroSection } from "@/components/sections/page-hero-section";
import { FileText, Users, Scale, Clock, Shield, Heart, CheckCircle, Star, ArrowRight, Sparkles, Phone, Mail, MessageCircle, Award, Zap, Crown, Circle } from "lucide-react";
import Link from "next/link";



const mainServices = [
  {
    id: "templates",
    title: "Contract Templates",
    description: "Professional, legally-reviewed contract templates for all your wedding vendors",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
    features: [
      "50+ Professional Templates",
      "Legally Reviewed & Compliant",
      "Instant Download",
      "Fully Customizable",
      "Multiple File Formats",
      "Regular Updates"
    ],
    benefits: [
      "Save time and money",
      "Ensure legal protection",
      "Professional presentation",
      "Peace of mind"
    ],
    pricing: "Starting at Free",
    image: "https://maxm-imggenurl.web.val.run/professional wedding contract documents on elegant desk, legal papers, pen, wedding rings, soft lighting"
  },
  {
    id: "custom",
    title: "Custom Contract Creation",
    description: "Tailored contracts designed specifically for your unique wedding requirements",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    features: [
      "Personalized Legal Documents",
      "Expert Legal Consultation",
      "Unlimited Revisions",
      "Fast Turnaround",
      "Comprehensive Coverage",
      "Ongoing Support"
    ],
    benefits: [
      "Perfect fit for your needs",
      "Expert legal guidance",
      "Comprehensive protection",
      "Professional support"
    ],
    pricing: "Starting at $299",
    image: "https://maxm-imggenurl.web.val.run/wedding lawyer consulting with bride and groom, custom contract creation, professional office setting"
  },
  {
    id: "consultation",
    title: "Legal Consultation",
    description: "Expert legal advice from experienced wedding contract attorneys",
    icon: Scale,
    color: "from-green-500 to-emerald-500",
    features: [
      "Expert Legal Advice",
      "Contract Review",
      "Risk Assessment",
      "Vendor Negotiation Help",
      "Dispute Resolution",
      "Emergency Support"
    ],
    benefits: [
      "Professional expertise",
      "Risk mitigation",
      "Confident decisions",
      "Legal protection"
    ],
    pricing: "Starting at $150/hour",
    image: "https://maxm-imggenurl.web.val.run/wedding legal consultation, attorney reviewing contracts with couple, professional law office"
  }
];

const additionalServices = [
  {
    title: "Contract Review & Analysis",
    description: "Professional review of existing vendor contracts",
    icon: Shield,
    price: "$75"
  },
  {
    title: "Vendor Negotiation Support",
    description: "Expert assistance with contract negotiations",
    icon: MessageCircle,
    price: "$200"
  },
  {
    title: "Rush Service",
    description: "24-hour contract delivery for urgent needs",
    icon: Zap,
    price: "$99"
  },
  {
    title: "International Wedding Support",
    description: "Specialized contracts for destination weddings",
    icon: Crown,
    price: "$399"
  },
  {
    title: "Dispute Resolution",
    description: "Professional mediation for vendor disputes",
    icon: Scale,
    price: "$300"
  },
  {
    title: "Insurance Coordination",
    description: "Help coordinating wedding insurance with contracts",
    icon: Shield,
    price: "$150"
  }
];

const process = [
  {
    step: 1,
    title: "Consultation",
    description: "We discuss your wedding plans and identify your contract needs",
    icon: Users
  },
  {
    step: 2,
    title: "Customization",
    description: "We create or customize contracts specifically for your requirements",
    icon: FileText
  },
  {
    step: 3,
    title: "Review",
    description: "Legal experts review all contracts for completeness and compliance",
    icon: Scale
  },
  {
    step: 4,
    title: "Delivery",
    description: "You receive your professional contracts ready for vendor signatures",
    icon: CheckCircle
  }
];

const testimonials = [
  {
    name: "Sarah & Michael",
    location: "New York, NY",
    text: "Eternal Vows saved our wedding! When our photographer tried to change terms last minute, our contract protected us completely.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/happy bride and groom testimonial photo, professional wedding photography, smiling couple"
  },
  {
    name: "Jennifer Chen",
    location: "Los Angeles, CA",
    text: "The custom contract service was incredible. They created exactly what we needed for our unique venue requirements.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/elegant bride testimonial photo, professional portrait, wedding dress, happy expression"
  },
  {
    name: "David & Emma",
    location: "Chicago, IL",
    text: "Professional, thorough, and gave us complete peace of mind. Worth every penny for our dream wedding protection.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/wedding couple testimonial, professional engagement photo, happy couple outdoors"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <WeddingNavbar />
      
      {/* Hero Section */}
      <PageHeroSection
        title="Wedding Contract Services"
        subtitle="Comprehensive Legal Protection"
        description="From contract templates to custom agreements, we ensure your wedding is legally protected with professional, comprehensive legal services."
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        icon={Circle}
        ctaText="Explore Services"
        ctaHref="#services"
        gradient="from-blue-900/70 via-indigo-900/60 to-purple-900/70"
      />

      {/* Main Services */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional wedding contract services designed to protect your investment 
              and ensure your perfect day goes smoothly.
            </p>
          </motion.div>

          <div className="space-y-24">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  <div className={`space-y-8 ${isEven ? '' : 'lg:col-start-2'}`}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                            {service.title}
                          </h3>
                          <div className="text-2xl font-bold text-blue-600 mt-2">
                            {service.pricing}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-xl text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-foreground">Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-foreground">Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center space-x-3">
                              <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={service.id === 'templates' ? '/templates' : '/contact'}
                        className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 elegant-shadow flex items-center justify-center space-x-2"
                      >
                        <span>
                          {service.id === 'templates' ? 'Browse Templates' : 'Get Started'}
                        </span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      
                      <Link
                        href="/contact"
                        className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-2xl font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <MessageCircle className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  <div className={`relative ${isEven ? '' : 'lg:col-start-1'}`}>
                    <div className="relative z-10 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 rounded-3xl p-8 wedding-border elegant-shadow">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto rounded-2xl elegant-shadow"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized services to address specific needs and enhance your wedding contract protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-card rounded-3xl elegant-shadow wedding-border hover:shadow-xl transition-all duration-500"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        {service.price}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-card-foreground">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300">
                      Add to Package
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Simple, straightforward steps to get your wedding contracts professionally handled.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {process.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className={`w-full lg:w-1/2 ${
                      index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'
                    }`}>
                      <div className="p-8 bg-card rounded-3xl elegant-shadow wedding-border">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-xl flex items-center justify-center">
                            {step.step}
                          </div>
                          <h3 className="text-2xl font-bold text-card-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden lg:flex relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <div className="hidden lg:block w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real stories from couples who protected their special day with our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 bg-card rounded-3xl elegant-shadow wedding-border hover:shadow-xl transition-all duration-500"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover elegant-shadow"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-bold text-card-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
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
              Ready to Protect Your Wedding?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Don&apos;t leave your special day to chance. Get professional wedding contract 
              protection and enjoy your celebration with complete peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 elegant-shadow flex items-center space-x-3"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
              
              <Link
                href="/templates"
                className="px-10 py-5 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center space-x-3"
              >
                <span>Browse Templates</span>
                <FileText className="w-6 h-6" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-3">
                <Phone className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-bold text-foreground">Call Us</h3>
                <p className="text-primary font-semibold">+1-555-ETERNAL</p>
              </div>
              
              <div className="text-center space-y-3">
                <Mail className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-bold text-foreground">Email Us</h3>
                <p className="text-primary font-semibold">hello@codestam.com</p>
              </div>
              
              <div className="text-center space-y-3">
                <MessageCircle className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-bold text-foreground">Live Chat</h3>
                <p className="text-primary font-semibold">Available 24/7</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}