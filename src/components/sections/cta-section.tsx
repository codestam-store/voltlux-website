"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Star, Heart, Sparkles, ArrowRight, Gift } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-accent to-primary rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full blur-lg"
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-1/4 text-6xl opacity-20"
        >
          🎪
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-1/4 text-5xl opacity-25"
        >
          🎠
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-1/3 text-4xl opacity-20"
        >
          🎈
        </motion.div>
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-20 right-1/3 text-7xl opacity-15"
        >
          🌟
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-4 border-primary/30 cartoon-shadow bg-gradient-to-br from-background/95 to-card/95 backdrop-blur-sm overflow-hidden relative">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 text-4xl opacity-30">🎉</div>
            <div className="absolute top-4 right-4 text-4xl opacity-30">🎊</div>
            <div className="absolute bottom-4 left-4 text-4xl opacity-30">🌈</div>
            <div className="absolute bottom-4 right-4 text-4xl opacity-30">⭐</div>

            <CardContent className="p-12 md:p-16 text-center space-y-8 relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 text-xl cartoon-shadow">
                  <Gift className="w-6 h-6 mr-3" />
                  Special Launch Offer!
                  <Sparkles className="w-6 h-6 ml-3" />
                </Badge>
              </motion.div>

              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-foreground">Start Your</span>
                  <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Magical Journey
                  </span>
                  <span className="block text-foreground">Today!</span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Join thousands of happy kids and families who are already having fun while learning! 
                  Your adventure with our cartoon friends is just one click away.
                </p>
              </motion.div>

              {/* Features grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid md:grid-cols-3 gap-6 my-12"
              >
                {[
                  { icon: "🎮", title: "100+ Games", desc: "Educational games for all subjects" },
                  { icon: "🏆", title: "Achievements", desc: "Earn badges and rewards" },
                  { icon: "👨‍👩‍👧‍👦", title: "Family Fun", desc: "Perfect for family learning time" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 cartoon-border border-primary/20"
                  >
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link href="/adventures">
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="h-20 px-12 text-2xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 cartoon-shadow text-primary-foreground group"
                    >
                      <Rocket className="w-8 h-8 mr-4 group-hover:animate-bounce" />
                      Start Free Adventure
                      <ArrowRight className="w-8 h-8 ml-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
                
                <Link href="/parents">
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="h-20 px-12 text-2xl border-4 border-accent hover:bg-accent/20 cartoon-border group"
                    >
                      <Heart className="w-8 h-8 mr-4 group-hover:fill-current group-hover:text-red-500 transition-colors" />
                      Parent Info
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["🐻", "🦄", "🦊", "🐰", "🐸", "🐉"].map((emoji, i) => (
                      <motion.div
                        key={i}
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-2xl cartoon-shadow border-2 border-background"
                      >
                        {emoji}
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-muted-foreground font-medium">
                    Trusted by 10,000+ families
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-foreground text-lg">5.0 Rating</span>
                </div>
              </motion.div>

              {/* Special offer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-6 cartoon-border border-accent/30 mt-8"
              >
                <p className="text-lg font-bold text-foreground mb-2">
                  🎁 Limited Time: Get your first month FREE!
                </p>
                <p className="text-muted-foreground">
                  No credit card required • Cancel anytime • Safe for kids
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="mt-16 text-center relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 py-8 border-t border-border/30">
          <p className="text-muted-foreground mb-4">
            © 2024 FunLearn Academy. Made with ❤️ for kids everywhere.
          </p>
          <p className="text-sm text-muted-foreground">
            Publisher: Codestam Technologies | Visit us at{" "}
            <a 
              href="https://codestam.com" 
              className="text-primary hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              codestam.com
            </a>
          </p>
        </div>
      </motion.footer>
    </section>
  );
}