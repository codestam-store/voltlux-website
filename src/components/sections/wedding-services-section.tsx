"use client";

import { motion } from "framer-motion";
import { FileText, Users, Scale, Heart, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: FileText,
    title: "Contract Templates",
    description: "Professional wedding contract templates for vendors, venues, and couples",
    features: ["Vendor agreements", "Venue contracts", "Photography releases", "Catering terms"],
    price: "From $49",
    popular: false
  },
  {
    icon: Users,
    title: "Custom Contracts",
    description: "Personalized wedding contracts tailored to your specific needs and requirements",
    features: ["Bespoke drafting", "Legal review", "Unlimited revisions", "Expert consultation"],
    price: "From $199",
    popular: true
  },
  {
    icon: Scale,
    title: "Legal Consultation",
    description: "Expert legal advice and guidance for all your wedding contract needs",
    features: ["Contract review", "Legal advice", "Risk assessment", "Compliance check"],
    price: "From $99",
    popular: false
  }
];

export function WeddingServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6"
          >
            <Heart className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Wedding Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From simple templates to comprehensive legal consultation, we provide everything 
            you need for your wedding contracts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative p-8 bg-card rounded-3xl elegant-shadow wedding-border hover:shadow-xl transition-all duration-500 ${
                  service.popular ? 'ring-2 ring-primary/20 scale-105' : ''
                }`}
              >
                {service.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-semibold"
                  >
                    Most Popular
                  </motion.div>
                )}

                <div className="text-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4"
                  >
                    <IconComponent className="w-8 h-8 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        service.popular
                          ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg'
                          : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                      }`}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Need something custom? We&apos;re here to help with any wedding contract needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors font-semibold"
          >
            <span>Contact us for custom solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}