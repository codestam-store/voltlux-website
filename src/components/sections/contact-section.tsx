"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  HeadphonesIcon, 
  Users, 
  BookOpen,
  Send,
  Star,
  Heart,
  Sparkles
} from "lucide-react";
import { useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email within 24 hours",
    contact: "support@funlearnacademy.com",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our friendly team",
    contact: "+1 (555) 123-LEARN",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available 9 AM - 6 PM EST",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come see our learning center",
    contact: "123 Education St, Learning City",
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  }
];

const supportTopics = [
  {
    icon: HeadphonesIcon,
    title: "Technical Support",
    description: "Help with login, app issues, or technical problems",
    emoji: "🔧"
  },
  {
    icon: Users,
    title: "Parent Questions",
    description: "Questions about progress tracking, safety, or parental controls",
    emoji: "👨‍👩‍👧‍👦"
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description: "Questions about curriculum, learning paths, or content",
    emoji: "📚"
  },
  {
    icon: Star,
    title: "Partnerships",
    description: "School partnerships, bulk licensing, or business inquiries",
    emoji: "🤝"
  }
];

const faqs = [
  {
    question: "Is FunLearn Academy safe for my child?",
    answer: "Absolutely! We have no ads, no chat features, robust privacy protection, and all content is reviewed by child development experts."
  },
  {
    question: "What ages is FunLearn Academy suitable for?",
    answer: "Our platform is designed for children ages 3-12, with content that adapts to each child&apos;s learning level and pace."
  },
  {
    question: "Can I track my child&apos;s progress?",
    answer: "Yes! Our parent dashboard provides detailed progress reports, skill assessments, and achievement tracking."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 30-day free trial with full access to all features. No credit card required to start."
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 text-8xl"
        >
          📞
        </motion.div>
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 text-6xl"
        >
          💌
        </motion.div>
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/4 text-4xl"
        >
          ✨
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
            📞 Contact Us 📞
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="block text-foreground">We&apos;re Here to</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Help You!
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about FunLearn Academy? Need technical support? Want to learn more about 
            our educational approach? Our friendly team is here to help!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className={`h-full border-3 border-border/50 hover:border-primary/30 transition-all duration-300 cartoon-shadow hover:shadow-2xl ${method.bgColor} text-center`}>
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center cartoon-shadow group-hover:shadow-xl transition-all duration-300 mx-auto`}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {method.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {method.description}
                  </p>
                  <p className="font-semibold text-foreground">
                    {method.contact}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Form and Support Topics */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-3 border-border/50 cartoon-shadow bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                  <Send className="w-8 h-8 text-primary" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you as soon as possible!
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="border-2 border-border/50 focus:border-primary cartoon-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="border-2 border-border/50 focus:border-primary cartoon-border"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What can we help you with?"
                      className="border-2 border-border/50 focus:border-primary cartoon-border"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your question or concern..."
                      rows={5}
                      className="border-2 border-border/50 focus:border-primary cartoon-border resize-none"
                      required
                    />
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 cartoon-shadow"
                    >
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Support Topics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  How Can We Help?
                </span>
              </h2>
              <p className="text-muted-foreground">
                Choose the topic that best matches your question for faster support.
              </p>
            </div>

            <div className="space-y-4">
              {supportTopics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <Card className="border-2 border-border/50 hover:border-primary/30 transition-all duration-300 cartoon-shadow hover:shadow-lg cursor-pointer">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl cartoon-shadow">
                        {topic.emoji}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground">{topic.title}</h3>
                        <p className="text-muted-foreground text-sm">{topic.description}</p>
                      </div>
                      <topic.icon className="w-5 h-5 text-primary" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Office Hours */}
            <Card className="border-3 border-accent/30 cartoon-shadow bg-gradient-to-br from-accent/10 to-primary/10">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Support Hours</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
                <p className="text-sm text-accent font-medium mt-3">
                  🚀 Emergency support available 24/7
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Frequently Asked</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about FunLearn Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-3 border-border/50 hover:border-primary/30 transition-all duration-300 cartoon-shadow hover:shadow-xl">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-foreground flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl cartoon-shadow mx-auto">
                  💝
                </div>
                <h2 className="text-3xl md:text-5xl font-bold">
                  <span className="block text-foreground">Still Have Questions?</span>
                  <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    We&apos;re Here to Help!
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our friendly support team is always ready to assist you. Don&apos;t hesitate to reach out 
                  - we love hearing from our FunLearn Academy families!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="h-16 px-8 text-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 cartoon-shadow text-primary-foreground"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Start Live Chat
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-16 px-8 text-xl border-4 border-accent hover:bg-accent/20 cartoon-border"
                  >
                    <Heart className="w-6 h-6 mr-3" />
                    Call Us Now
                  </Button>
                </motion.div>
              </div>

              <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-6 cartoon-border border-accent/30">
                <p className="text-lg font-bold text-foreground mb-2">
                  🎯 Average Response Time: Under 2 Hours!
                </p>
                <p className="text-muted-foreground">
                  We pride ourselves on quick, helpful responses to all inquiries
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}