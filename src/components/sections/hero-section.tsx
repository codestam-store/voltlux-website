"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Rocket, Play, Star } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-16 h-16 text-6xl opacity-20"
        >
          🌈
        </motion.div>
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-12 h-12 text-4xl opacity-30"
        >
          ⭐
        </motion.div>
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-1/4 w-10 h-10 text-3xl opacity-25"
        >
          🎈
        </motion.div>
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 80, 0],
            rotate: [0, 90, 180]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-1/3 w-14 h-14 text-5xl opacity-20"
        >
          🦋
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 text-lg cartoon-shadow">
                <Sparkles className="w-5 h-5 mr-2" />
                Welcome to FunLearn Academy!
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="block text-foreground">Magical</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Learning
              </span>
              <span className="block text-foreground">Adventures!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              Join our friendly cartoon characters on exciting educational journeys! 
              Learn math, science, reading, and more through fun games and interactive adventures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/adventures">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="h-16 px-8 text-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 cartoon-shadow text-primary-foreground"
                  >
                    <Rocket className="w-6 h-6 mr-3" />
                    Start Adventure
                  </Button>
                </motion.div>
              </Link>
              <Link href="/games">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-16 px-8 text-xl border-3 border-accent hover:bg-accent/20 cartoon-border"
                  >
                    <Play className="w-6 h-6 mr-3" />
                    Play Games
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["🐻", "🦊", "🐰", "🐸"].map((emoji, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-2xl cartoon-shadow border-2 border-background"
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </div>
                <span className="text-muted-foreground font-medium">Meet our friends!</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent fill-current" />
                <span className="font-bold text-foreground">100% Fun Guaranteed!</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl p-8 cartoon-shadow">
                <img
                  src="https://maxm-imggenurl.web.val.run/cartoon children learning with friendly animal characters, colorful educational scene, playful and bright, high quality"
                  alt="Cartoon children learning with friendly animal characters in a colorful educational scene"
                  className="w-full h-auto rounded-2xl"
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-3xl cartoon-shadow"
            >
              🎨
            </motion.div>
            
            <motion.div
              animate={{ 
                rotate: -360,
                y: [0, -10, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-2xl cartoon-shadow"
            >
              📚
            </motion.div>

            <motion.div
              animate={{ 
                x: [0, 10, 0],
                y: [0, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-xl cartoon-shadow"
            >
              ✨
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}