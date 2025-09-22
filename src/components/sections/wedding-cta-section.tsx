"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function WeddingCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-64 h-64 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-80 h-80 border border-accent/10 rounded-full"
        />
        <motion.div
          animate={{ y: [-30, 30, -30], x: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/20 rounded-full"
        />
        <motion.div
          animate={{ y: [30, -30, 30], x: [20, -20, 20] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-accent/30 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-8 elegant-shadow"
          >
            <Heart className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Ready to Protect Your
            <br />
            <span className="text-primary">Perfect Day?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Join thousands of couples who trust Eternal Vows for their wedding contracts. 
            Get started today and ensure your special day is legally protected and stress-free.
          </p>
        </motion.div>

        {/* Main CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/templates"
              className="group px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 elegant-shadow flex items-center space-x-3"
            >
              <span>Browse Templates</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="px-10 py-5 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center space-x-3"
            >
              <span>Get Custom Quote</span>
              <Sparkles className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Contact options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-card rounded-3xl elegant-shadow wedding-border hover:shadow-xl transition-all duration-500"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">
                  Speak with an Expert
                </h3>
                <p className="text-muted-foreground">
                  Get personalized advice
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Schedule a free 15-minute consultation to discuss your wedding contract needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors font-semibold"
            >
              <span>Schedule Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-card rounded-3xl elegant-shadow wedding-border hover:shadow-xl transition-all duration-500"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">
                  Email Support
                </h3>
                <p className="text-muted-foreground">
                  Quick response guaranteed
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Send us your questions and we&apos;ll respond within 2 hours during business hours.
            </p>
            <Link
              href="mailto:hello@eternalvows.com"
              className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors font-semibold"
            >
              <span>Send Email</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-8">
            Trusted by over 5,000 couples and 500+ wedding professionals
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {[
              "⭐ 4.9/5 Rating",
              "🏆 Award Winning",
              "🔒 Secure & Private",
              "⚡ Fast Delivery",
              "💯 Satisfaction Guaranteed"
            ].map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-sm font-medium text-muted-foreground"
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating hearts */}
      <motion.div
        animate={{ y: [-20, -40, -20], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 text-primary/20 text-2xl"
      >
        💕
      </motion.div>
      <motion.div
        animate={{ y: [-30, -50, -30], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 right-10 text-accent/20 text-3xl"
      >
        💖
      </motion.div>
    </section>
  );
}