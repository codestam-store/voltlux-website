"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Users, Clock, Trophy, Star } from "lucide-react";

const games = [
  {
    title: "Number Bubble Pop",
    emoji: "🫧",
    description: "Pop bubbles with the right numbers! Practice addition, subtraction, and number recognition in this colorful bubble-popping adventure.",
    difficulty: "Easy",
    duration: "5-10 mins",
    players: "1 player",
    subject: "Math",
    skills: ["Addition", "Subtraction", "Number Recognition"],
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    character: "🐻 Buddy"
  },
  {
    title: "Word Wizard Castle",
    emoji: "🏰",
    description: "Help Luna build magical words to unlock castle doors! Spell words, learn vocabulary, and create enchanting stories.",
    difficulty: "Medium",
    duration: "10-15 mins",
    players: "1-2 players",
    subject: "Reading",
    skills: ["Spelling", "Vocabulary", "Reading"],
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    character: "🦄 Luna"
  },
  {
    title: "Science Lab Mixer",
    emoji: "🧪",
    description: "Mix colorful potions and discover amazing reactions! Learn about colors, states of matter, and basic chemistry.",
    difficulty: "Medium",
    duration: "15-20 mins",
    players: "1 player",
    subject: "Science",
    skills: ["Chemistry", "Colors", "Experiments"],
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    character: "🦊 Rocket"
  },
  {
    title: "Musical Memory Match",
    emoji: "🎵",
    description: "Match musical notes and create beautiful melodies! Develop memory skills while learning about rhythm and music.",
    difficulty: "Easy",
    duration: "8-12 mins",
    players: "1-4 players",
    subject: "Music",
    skills: ["Memory", "Rhythm", "Music Theory"],
    color: "from-green-400 to-teal-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    character: "🐰 Melody"
  },
  {
    title: "World Explorer Quiz",
    emoji: "🌍",
    description: "Travel around the world and answer geography questions! Learn about countries, capitals, and amazing landmarks.",
    difficulty: "Hard",
    duration: "20-25 mins",
    players: "1-3 players",
    subject: "Geography",
    skills: ["Geography", "Culture", "World Knowledge"],
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50 dark:bg-indigo-950/20",
    character: "🐸 Captain"
  },
  {
    title: "Logic Puzzle Dragon",
    emoji: "🧩",
    description: "Solve challenging puzzles to help Sparkle the Dragon! Develop critical thinking and problem-solving skills.",
    difficulty: "Hard",
    duration: "15-30 mins",
    players: "1-2 players",
    subject: "Logic",
    skills: ["Logic", "Problem Solving", "Critical Thinking"],
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-50 dark:bg-purple-950/20",
    character: "🐉 Sparkle"
  },
  {
    title: "Shape Safari Adventure",
    emoji: "🦁",
    description: "Go on a safari to find different shapes in nature! Learn geometry while exploring the wild with animal friends.",
    difficulty: "Easy",
    duration: "10-15 mins",
    players: "1-2 players",
    subject: "Math",
    skills: ["Shapes", "Geometry", "Pattern Recognition"],
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-orange-950/20",
    character: "🦁 Leo"
  },
  {
    title: "Rhyme Time Theater",
    emoji: "🎭",
    description: "Put on a show with rhyming words! Create poems, learn about rhymes, and perform on the magical theater stage.",
    difficulty: "Medium",
    duration: "12-18 mins",
    players: "1-3 players",
    subject: "Language",
    skills: ["Rhyming", "Poetry", "Language Arts"],
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-rose-950/20",
    character: "🎭 Rhyma"
  },
  {
    title: "Time Travel Clock",
    emoji: "⏰",
    description: "Travel through time while learning to tell time! Practice reading clocks, understanding schedules, and time concepts.",
    difficulty: "Medium",
    duration: "10-15 mins",
    players: "1 player",
    subject: "Math",
    skills: ["Time", "Clocks", "Scheduling"],
    color: "from-teal-400 to-cyan-500",
    bgColor: "bg-teal-50 dark:bg-cyan-950/20",
    character: "⏰ Timey"
  }
];

const difficultyColors = {
  "Easy": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  "Medium": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  "Hard": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
};

export function GamesSection() {
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
          🎮
        </motion.div>
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 text-6xl"
        >
          🕹️
        </motion.div>
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 text-7xl"
        >
          🎯
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
            🎮 Fun Games 🎮
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="block text-foreground">Educational</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Games & Activities
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Play, learn, and have fun with our collection of educational games! Each game is designed 
            to teach important skills while keeping kids engaged and entertained.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {["All Games", "Math", "Reading", "Science", "Music", "Geography", "Logic"].map((filter) => (
            <Button
              key={filter}
              variant="outline"
              className="cartoon-border border-primary/30 hover:bg-primary/10"
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className={`h-full border-3 border-border/50 hover:border-primary/30 transition-all duration-300 cartoon-shadow hover:shadow-2xl ${game.bgColor} overflow-hidden relative`}>
                {/* Game emoji background */}
                <div className="absolute top-4 right-4 text-7xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {game.emoji}
                </div>
                
                <CardHeader className="pb-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center text-4xl cartoon-shadow group-hover:shadow-xl transition-all duration-300 mx-auto`}
                  >
                    {game.emoji}
                  </motion.div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {game.title}
                    </h3>
                    <div className="flex justify-center gap-2">
                      <Badge className={`${difficultyColors[game.difficulty as keyof typeof difficultyColors]} border-0`}>
                        {game.difficulty}
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                        {game.subject}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {game.description}
                  </p>

                  {/* Game details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{game.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{game.players}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Trophy className="w-4 h-4" />
                      <span>With {game.character}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {game.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Play button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className={`w-full bg-gradient-to-r ${game.color} hover:opacity-90 text-white cartoon-shadow group`}
                      size="lg"
                    >
                      <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Play Now
                    </Button>
                  </motion.div>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">4.9/5</span>
                  </div>
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
              More games added every week!
            </h3>
            <p className="text-xl text-muted-foreground">
              Join our community and get access to new games as soon as they&apos;re released.
            </p>
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4 cartoon-border border-primary/30">
              <span className="text-2xl">🎉</span>
              <span className="text-xl font-bold text-foreground">
                50+ games and counting!
              </span>
              <span className="text-2xl">🎉</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}