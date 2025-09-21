"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";

const adventures = [
  {
    title: "Number Kingdom Quest",
    emoji: "🏰",
    description: "Join Buddy the Bear on an epic quest through the Number Kingdom! Solve math puzzles, defeat number monsters, and save the kingdom with your math skills!",
    difficulty: "Beginner",
    duration: "20 mins",
    participants: "1-4 players",
    rewards: "Math Master Badge",
    color: "from-amber-400 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20",
    subjects: ["Addition", "Subtraction", "Counting"]
  },
  {
    title: "Enchanted Story Forest",
    emoji: "🌲",
    description: "Explore the magical forest with Luna the Unicorn! Create your own stories, meet fairy tale characters, and unlock the secrets of creative writing!",
    difficulty: "Intermediate",
    duration: "30 mins",
    participants: "1-2 players",
    rewards: "Storyteller Crown",
    color: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    subjects: ["Reading", "Writing", "Creativity"]
  },
  {
    title: "Science Lab Adventure",
    emoji: "🧪",
    description: "Conduct amazing experiments with Rocket the Fox! Mix potions, discover chemical reactions, and become a junior scientist in our virtual lab!",
    difficulty: "Advanced",
    duration: "45 mins",
    participants: "1-3 players",
    rewards: "Young Scientist Medal",
    color: "from-orange-400 to-red-500",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
    subjects: ["Chemistry", "Physics", "Biology"]
  },
  {
    title: "Musical Rainbow Journey",
    emoji: "🌈",
    description: "Travel across the rainbow with Melody the Rabbit! Learn about colors, create beautiful music, and paint masterpieces in this artistic adventure!",
    difficulty: "Beginner",
    duration: "25 mins",
    participants: "1-4 players",
    rewards: "Rainbow Artist Badge",
    color: "from-green-400 to-teal-500",
    bgGradient: "from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20",
    subjects: ["Music", "Art", "Colors"]
  },
  {
    title: "World Explorer Mission",
    emoji: "🗺️",
    description: "Sail the seven seas with Captain Frog! Visit different countries, learn about cultures, and collect treasures from around the world!",
    difficulty: "Intermediate",
    duration: "35 mins",
    participants: "2-4 players",
    rewards: "World Explorer Compass",
    color: "from-blue-400 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    subjects: ["Geography", "Culture", "History"]
  },
  {
    title: "Puzzle Dragon&apos;s Challenge",
    emoji: "🐲",
    description: "Face the ultimate challenge with Sparkle the Dragon! Solve mind-bending puzzles, use logic and strategy to overcome obstacles!",
    difficulty: "Advanced",
    duration: "40 mins",
    participants: "1-2 players",
    rewards: "Dragon Solver Crown",
    color: "from-indigo-400 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20",
    subjects: ["Logic", "Strategy", "Problem Solving"]
  }
];

const difficultyColors = {
  "Beginner": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  "Intermediate": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  "Advanced": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
};

export function AdventuresSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 text-8xl"
        >
          🎢
        </motion.div>
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 text-6xl"
        >
          🎡
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
            🚀 Epic Adventures 🚀
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="block text-foreground">Choose Your</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Learning Adventure
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Embark on exciting educational journeys with our cartoon friends! Each adventure is designed 
            to make learning fun while building important skills and knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure, index) => (
            <motion.div
              key={adventure.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group perspective-1000"
            >
              <Card className={`h-full border-3 border-border/50 hover:border-primary/30 transition-all duration-300 cartoon-shadow hover:shadow-2xl bg-gradient-to-br ${adventure.bgGradient} overflow-hidden relative transform-gpu`}>
                {/* Adventure emoji background */}
                <div className="absolute top-4 right-4 text-7xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {adventure.emoji}
                </div>
                
                <CardHeader className="pb-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${adventure.color} flex items-center justify-center text-4xl cartoon-shadow group-hover:shadow-xl transition-all duration-300 mx-auto`}
                  >
                    {adventure.emoji}
                  </motion.div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {adventure.title}
                    </h3>
                    <Badge className={`${difficultyColors[adventure.difficulty as keyof typeof difficultyColors]} border-0`}>
                      {adventure.difficulty}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {adventure.description}
                  </p>

                  {/* Adventure details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{adventure.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{adventure.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Trophy className="w-4 h-4" />
                      <span>{adventure.rewards}</span>
                    </div>
                  </div>

                  {/* Subjects */}
                  <div className="flex flex-wrap gap-2">
                    {adventure.subjects.map((subject) => (
                      <Badge 
                        key={subject} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>

                  {/* Action button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className={`w-full bg-gradient-to-r ${adventure.color} hover:opacity-90 text-white cartoon-shadow`}
                      size="lg"
                    >
                      Start Adventure
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
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
              Ready for more adventures?
            </h3>
            <p className="text-xl text-muted-foreground">
              Discover dozens more exciting learning adventures waiting for you!
            </p>
            <Link href="/adventures">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="h-16 px-8 text-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 cartoon-shadow text-primary-foreground"
                >
                  <span className="mr-3 text-2xl">🗺️</span>
                  Explore All Adventures
                  <span className="ml-3 text-2xl">🗺️</span>
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}