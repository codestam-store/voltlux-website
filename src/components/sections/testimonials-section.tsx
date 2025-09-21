"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emma (Age 7)",
    avatar: "👧",
    quote: "I love learning with Buddy the Bear! Math is so much fun now and I can count to 100!",
    rating: 5,
    subject: "Mathematics",
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20"
  },
  {
    name: "Alex (Age 9)",
    avatar: "👦",
    quote: "Rocket the Fox makes science super cool! I did my first experiment and it was AMAZING!",
    rating: 5,
    subject: "Science",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    name: "Sophia (Age 6)",
    avatar: "👧",
    quote: "Luna the Unicorn helped me write my first story! It&apos;s about a magical rainbow castle!",
    rating: 5,
    subject: "Reading & Writing",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    name: "Mom - Sarah",
    avatar: "👩",
    quote: "My daughter has learned so much! The characters make education engaging and she asks to learn more every day.",
    rating: 5,
    subject: "Parent Review",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    name: "Dad - Michael",
    avatar: "👨",
    quote: "FunLearn Academy has transformed screen time into learning time. My son is excited about education now!",
    rating: 5,
    subject: "Parent Review",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20"
  },
  {
    name: "Teacher - Ms. Johnson",
    avatar: "👩‍🏫",
    quote: "I use FunLearn Academy in my classroom. The kids are more engaged and their test scores have improved significantly!",
    rating: 5,
    subject: "Educator Review",
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-accent/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 text-9xl"
        >
          💝
        </motion.div>
        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, 20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 text-7xl"
        >
          🎈
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 text-6xl"
        >
          ⭐
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
            💕 Happy Learners 💕
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="block text-foreground">What Our</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Friends Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from kids, parents, and teachers who have discovered the joy of learning 
            with our cartoon friends at FunLearn Academy!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className={`h-full border-3 border-border/50 hover:border-primary/30 transition-all duration-300 cartoon-shadow hover:shadow-2xl ${testimonial.bgColor} overflow-hidden relative`}>
                {/* Quote icon background */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-primary" />
                </div>
                
                <CardContent className="p-6 space-y-6 relative z-10">
                  {/* Avatar and rating */}
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-3xl cartoon-shadow group-hover:shadow-xl transition-all duration-300`}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Name and subject */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                      {testimonial.subject}
                    </Badge>
                  </div>

                  {/* Quote */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="relative"
                  >
                    <p className="text-muted-foreground leading-relaxed italic text-lg">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </motion.div>

                  {/* Heart indicator */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center justify-center gap-2 text-red-500"
                  >
                    <Heart className="w-5 h-5 fill-current" />
                    <span className="font-medium text-foreground">Loves Learning!</span>
                    <Heart className="w-5 h-5 fill-current" />
                  </motion.div>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    className={`h-1 bg-gradient-to-r ${testimonial.color} rounded-full`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "10,000+", label: "Happy Kids", emoji: "😊" },
            { number: "5,000+", label: "Proud Parents", emoji: "👨‍👩‍👧‍👦" },
            { number: "500+", label: "Teachers", emoji: "👩‍🏫" },
            { number: "99%", label: "Fun Rating", emoji: "🎉" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-2"
            >
              <div className="text-4xl">{stat.emoji}</div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4 cartoon-border border-primary/30">
            <span className="text-2xl">🌟</span>
            <span className="text-xl font-bold text-foreground">
              Join thousands of happy learners today!
            </span>
            <span className="text-2xl">🌟</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}