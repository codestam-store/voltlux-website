"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Gamepad2, Users, Trophy, Palette, Music } from "lucide-react";

const features = [
  {
    icon: "🎯",
    title: "Interactive Learning",
    description: "Hands-on activities and games that make learning fun and engaging for kids of all ages.",
    color: "from-primary to-primary/70",
    bgEmoji: "🎪"
  },
  {
    icon: "🌟",
    title: "Cartoon Characters",
    description: "Meet our lovable cartoon friends who guide children through their learning adventures.",
    color: "from-secondary to-secondary/70",
    bgEmoji: "🦄"
  },
  {
    icon: "🎮",
    title: "Educational Games",
    description: "Fun games that teach math, science, reading, and critical thinking skills.",
    color: "from-accent to-accent/70",
    bgEmoji: "🎲"
  },
  {
    icon: "🏆",
    title: "Achievement System",
    description: "Earn badges, stars, and rewards as you complete lessons and master new skills.",
    color: "from-primary/80 to-secondary",
    bgEmoji: "🎖️"
  },
  {
    icon: "🎨",
    title: "Creative Activities",
    description: "Art, music, and creative projects that spark imagination and self-expression.",
    color: "from-secondary/80 to-accent",
    bgEmoji: "🖌️"
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Parent Dashboard",
    description: "Track your child&apos;s progress and celebrate their learning milestones together.",
    color: "from-accent/80 to-primary",
    bgEmoji: "📊"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 text-8xl"
        >
          🎪
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 text-6xl"
        >
          🎠
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 text-lg cartoon-shadow">
            ✨ Amazing Features ✨
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="block text-foreground">Why Kids</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Love Learning
            </span>
            <span className="block text-foreground">With Us!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover all the wonderful ways we make learning an exciting adventure 
            filled with joy, discovery, and endless possibilities!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border-3 border-border/50 hover:border-primary/30 transition-all duration-300 cartoon-shadow hover:shadow-2xl bg-gradient-to-br from-card to-card/80 overflow-hidden relative">
                {/* Background emoji */}
                <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {feature.bgEmoji}
                </div>
                
                <CardHeader className="pb-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl cartoon-shadow group-hover:shadow-xl transition-all duration-300`}
                  >
                    {feature.icon}
                  </motion.div>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    className={`h-1 bg-gradient-to-r ${feature.color} rounded-full`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4 cartoon-border border-primary/30">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-bold text-foreground">
              Ready to start the adventure?
            </span>
            <span className="text-2xl">🌟</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}