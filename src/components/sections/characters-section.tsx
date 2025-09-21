"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import Link from "next/link";

const characters = [
  {
    name: "Buddy the Bear",
    emoji: "🐻",
    subject: "Mathematics",
    personality: "Friendly & Patient",
    description: "Buddy loves numbers and helps kids discover the magic of math through fun counting games and puzzles!",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    quote: "Let&apos;s count our way to success!"
  },
  {
    name: "Luna the Unicorn",
    emoji: "🦄",
    subject: "Reading & Writing",
    personality: "Magical & Creative",
    description: "Luna sparks imagination with enchanting stories and helps children fall in love with reading and writing!",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    quote: "Every story is a magical adventure!"
  },
  {
    name: "Rocket the Fox",
    emoji: "🦊",
    subject: "Science",
    personality: "Curious & Smart",
    description: "Rocket explores the wonders of science and conducts exciting experiments that make learning amazing!",
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    quote: "Science is everywhere - let&apos;s discover it!"
  },
  {
    name: "Melody the Rabbit",
    emoji: "🐰",
    subject: "Music & Arts",
    personality: "Artistic & Joyful",
    description: "Melody brings creativity to life through music, art, and dance, inspiring kids to express themselves!",
    color: "from-green-400 to-teal-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    quote: "Let&apos;s create something beautiful together!"
  },
  {
    name: "Captain Frog",
    emoji: "🐸",
    subject: "Geography",
    personality: "Adventurous & Wise",
    description: "Captain Frog takes kids on exciting journeys around the world to explore different cultures and places!",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    quote: "Adventure awaits around every corner!"
  },
  {
    name: "Sparkle the Dragon",
    emoji: "🐉",
    subject: "Problem Solving",
    personality: "Brave & Clever",
    description: "Sparkle teaches kids to think critically and solve problems with confidence and creativity!",
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    quote: "Every problem has a solution waiting to be found!"
  }
];

export function CharactersSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-secondary/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 360, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-20 text-9xl"
        >
          🎭
        </motion.div>
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -360, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-20 text-7xl"
        >
          🎪
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
            🌟 Meet Our Friends 🌟
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="block text-foreground">Our Amazing</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Character Friends
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each of our lovable characters has their own special talents and subjects they love to teach. 
            They&apos;re here to make learning fun and help you discover new things every day!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <motion.div
              key={character.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className={`h-full border-3 border-border/50 hover:border-primary/30 transition-all duration-300 cartoon-shadow hover:shadow-2xl ${character.bgColor} overflow-hidden relative`}>
                {/* Character emoji background */}
                <div className="absolute top-4 right-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {character.emoji}
                </div>
                
                <CardContent className="p-6 space-y-6 relative z-10">
                  {/* Character avatar */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex justify-center"
                  >
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${character.color} flex items-center justify-center text-5xl cartoon-shadow group-hover:shadow-xl transition-all duration-300`}>
                      {character.emoji}
                    </div>
                  </motion.div>

                  {/* Character info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {character.name}
                    </h3>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                        {character.subject}
                      </Badge>
                      <p className="text-sm text-muted-foreground font-medium">
                        {character.personality}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {character.description}
                  </p>

                  {/* Quote */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-4 border-2 border-primary/20"
                  >
                    <p className="text-center italic text-foreground font-medium">
                      &quot;{character.quote}&quot;
                    </p>
                  </motion.div>

                  {/* Favorite indicator */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center gap-2 text-accent"
                  >
                    <Heart className="w-5 h-5 fill-current" />
                    <span className="font-medium">Kids&apos; Favorite!</span>
                    <Star className="w-5 h-5 fill-current" />
                  </motion.div>
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
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Ready to meet your new learning buddies?
            </h3>
            <Link href="/characters">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="h-16 px-8 text-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 cartoon-shadow text-primary-foreground"
                >
                  <span className="mr-3 text-2xl">🎉</span>
                  Meet All Characters
                  <span className="ml-3 text-2xl">🎉</span>
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}