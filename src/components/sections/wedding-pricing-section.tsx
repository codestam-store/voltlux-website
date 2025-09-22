"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight, Crown } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Essential",
    price: "$49",
    period: "per contract",
    description: "Perfect for couples who need basic contract templates",
    features: [
      "5 professional templates",
      "Basic customization",
      "Email support",
      "PDF delivery",
      "30-day guarantee"
    ],
    popular: false,
    cta: "Get Started",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Premium",
    price: "$149",
    period: "per contract",
    description: "Most popular choice for comprehensive wedding contracts",
    features: [
      "20+ premium templates",
      "Full customization",
      "Priority support",
      "Multiple formats",
      "Legal review included",
      "Unlimited revisions",
      "60-day guarantee"
    ],
    popular: true,
    cta: "Most Popular",
    color: "from-primary to-accent"
  },
  {
    name: "Luxury",
    price: "$299",
    period: "per contract",
    description: "Complete wedding contract solution with personal consultation",
    features: [
      "All premium features",
      "Personal legal consultation",
      "Custom contract drafting",
      "Phone & video support",
      "Rush delivery (24hrs)",
      "Lifetime updates",
      "90-day guarantee",
      "Dedicated account manager"
    ],
    popular: false,
    cta: "Go Luxury",
    color: "from-purple-500 to-purple-600"
  }
];

export function WeddingPricingSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6"
          >
            <Crown className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Choose the plan that best fits 
            your wedding contract needs and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative p-8 bg-card rounded-3xl elegant-shadow wedding-border hover:shadow-2xl transition-all duration-500 ${
                plan.popular ? 'ring-2 ring-primary/30 scale-105 lg:scale-110' : ''
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-bold flex items-center space-x-1"
                >
                  <Star className="w-4 h-4" />
                  <span>Most Popular</span>
                </motion.div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold text-primary"
                  >
                    {plan.price}
                  </motion.span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-card-foreground text-sm">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <Link
                  href="/contact"
                  className={`block w-full px-6 py-4 rounded-2xl font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>

              {/* Decorative gradient overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-3xl transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card rounded-2xl p-8 elegant-shadow wedding-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Planning a large wedding with multiple vendors? Need contracts for a destination wedding? 
              We offer custom packages tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Contact for Custom Quote
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-full border border-green-500/20">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <span className="text-green-700 dark:text-green-400 font-semibold">
              100% Money-Back Guarantee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}