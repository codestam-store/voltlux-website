"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Shield, Clock, Users, Heart, Star, CheckCircle, TrendingUp, Award, BookOpen } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor your child&apos;s learning journey with detailed progress reports, skill assessments, and achievement milestones.",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "100% safe, ad-free platform designed specifically for children with robust privacy protection and parental controls.",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    icon: Clock,
    title: "Screen Time Control",
    description: "Set healthy learning limits with built-in screen time management and break reminders to ensure balanced learning.",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    icon: Users,
    title: "Family Learning",
    description: "Engage in your child&apos;s education with family challenges, shared achievements, and collaborative learning activities.",
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  },
  {
    icon: TrendingUp,
    title: "Adaptive Learning",
    description: "Our AI adapts to your child&apos;s learning pace and style, ensuring they&apos;re always challenged but never overwhelmed.",
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-50 dark:bg-purple-950/20"
  },
  {
    icon: Award,
    title: "Curriculum Aligned",
    description: "All content is aligned with educational standards and developed by certified teachers and child development experts.",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-orange-950/20"
  }
];

const benefits = [
  "Improved academic performance in core subjects",
  "Enhanced problem-solving and critical thinking skills",
  "Increased confidence and love for learning",
  "Better focus and attention span",
  "Development of digital literacy skills",
  "Preparation for future academic success"
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mother of 2",
    quote: "My kids have learned more in 3 months with FunLearn Academy than they did all last year! They actually ask to do their &apos;homework&apos; now.",
    avatar: "👩",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Father of 1",
    quote: "The progress tracking is amazing. I can see exactly what my daughter is learning and where she needs extra help. It&apos;s like having a personal tutor!",
    avatar: "👨",
    rating: 5
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Pediatrician & Mom",
    quote: "As a healthcare professional and parent, I appreciate the screen time controls and educational value. It&apos;s the only educational app I trust completely.",
    avatar: "👩‍⚕️",
    rating: 5
  }
];

export function ParentsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 text-8xl"
        >
          👨‍👩‍👧‍👦
        </motion.div>
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 text-6xl"
        >
          📊
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 text-lg cartoon-shadow">
            👨‍👩‍👧‍👦 For Parents 👨‍👩‍👧‍👦
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="block text-foreground">Help Your Child</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Love Learning
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FunLearn Academy provides a safe, engaging, and educational environment where your child 
            can develop essential skills while having fun with our lovable cartoon characters.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
              <Card className={`h-full border-3 border-border/50 hover:border-primary/30 transition-all duration-300 cartoon-shadow hover:shadow-2xl ${feature.bgColor} overflow-hidden relative`}>
                <CardHeader className="pb-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center cartoon-shadow group-hover:shadow-xl transition-all duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-muted/30 to-secondary/10 rounded-3xl p-8 md:p-12 mb-16 cartoon-shadow"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Proven Benefits
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Research shows that children using FunLearn Academy experience:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-background/50 rounded-2xl p-4 cartoon-border border-primary/20"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Parent Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">What Parents</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Are Saying
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-3 border-border/50 hover:border-primary/30 transition-all duration-300 cartoon-shadow hover:shadow-2xl bg-gradient-to-br from-card to-card/80">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl cartoon-shadow">
                        {testimonial.avatar}
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground">{testimonial.name}</h3>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Safety & Privacy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-3xl p-8 md:p-12 mb-16 cartoon-shadow border-3 border-green-200 dark:border-green-800"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-4xl cartoon-shadow mx-auto mb-4">
              🛡️
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Your Child&apos;s</span>
              <span className="block text-green-600 dark:text-green-400">Safety First</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We take your child&apos;s safety and privacy seriously. FunLearn Academy is designed 
              with the highest safety standards and parental controls.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔒", title: "Privacy Protected", desc: "No personal data collection" },
              { icon: "🚫", title: "Ad-Free", desc: "100% advertisement free" },
              { icon: "👥", title: "No Chat", desc: "No communication with strangers" },
              { icon: "⏰", title: "Time Limits", desc: "Built-in screen time controls" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-background/50 rounded-2xl p-6 cartoon-border border-green-300 dark:border-green-700"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="border-4 border-primary/30 cartoon-shadow bg-gradient-to-br from-background/95 to-card/95 backdrop-blur-sm overflow-hidden relative">
            <CardContent className="p-12 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                  <span className="block text-foreground">Ready to Give Your Child</span>
                  <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    The Best Start?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Join thousands of parents who trust FunLearn Academy to provide their children 
                  with a fun, safe, and effective learning experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/adventures">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg" 
                      className="h-16 px-8 text-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 cartoon-shadow text-primary-foreground"
                    >
                      <BookOpen className="w-6 h-6 mr-3" />
                      Start Free Trial
                    </Button>
                  </motion.div>
                </Link>
                
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="h-16 px-8 text-xl border-4 border-accent hover:bg-accent/20 cartoon-border"
                    >
                      <Heart className="w-6 h-6 mr-3" />
                      Contact Us
                    </Button>
                  </motion.div>
                </Link>
              </div>

              <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-6 cartoon-border border-accent/30">
                <p className="text-lg font-bold text-foreground mb-2">
                  🎁 Special Offer: First Month FREE!
                </p>
                <p className="text-muted-foreground">
                  No credit card required • Cancel anytime • 30-day money-back guarantee
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}