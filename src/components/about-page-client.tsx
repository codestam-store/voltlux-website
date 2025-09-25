"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Leaf, Users, Award, Target, Heart, Lightbulb, Globe, CheckCircle, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Every solution we create prioritizes environmental responsibility and resource conservation."
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "We continuously push the boundaries of growing technology to deliver cutting-edge solutions."
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Building stronger communities through accessible, local food production and education."
  },
  {
    icon: Heart,
    title: "Quality Committed",
    description: "We&apos;re dedicated to delivering the highest quality systems and ongoing support."
  }
]

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Founder & CEO",
    bio: "Agricultural engineer with 15+ years in sustainable farming technology. PhD in Plant Sciences from MIT.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    expertise: ["Hydroponic Systems", "Sustainable Agriculture", "Plant Nutrition"]
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Former Tesla engineer specializing in IoT and automation systems for agricultural applications.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    expertise: ["IoT Systems", "Automation", "Smart Sensors"]
  },
  {
    name: "Emily Johnson",
    role: "Head of Design",
    bio: "Industrial designer focused on creating beautiful, functional growing systems for modern living spaces.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    expertise: ["Product Design", "User Experience", "Sustainable Materials"]
  },
  {
    name: "David Park",
    role: "Head of Operations",
    bio: "Operations expert with background in scaling sustainable technology companies globally.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    expertise: ["Operations", "Supply Chain", "Quality Control"]
  }
]

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Started with a vision to make urban farming accessible to everyone."
  },
  {
    year: "2020",
    title: "First Product Launch",
    description: "Launched our flagship HydroTower system for home growers."
  },
  {
    year: "2021",
    title: "Commercial Expansion",
    description: "Expanded into restaurant and commercial growing solutions."
  },
  {
    year: "2022",
    title: "Educational Programs",
    description: "Launched educational initiatives in schools and universities."
  },
  {
    year: "2023",
    title: "Global Reach",
    description: "Expanded operations to serve customers across North America."
  },
  {
    year: "2024",
    title: "Innovation Awards",
    description: "Recognized as a leader in sustainable agriculture technology."
  }
]

const stats = [
  { value: "10,000+", label: "Systems Installed" },
  { value: "500+", label: "Commercial Partners" },
  { value: "50M+", label: "Plants Grown" },
  { value: "95%", label: "Customer Satisfaction" }
]

export function AboutPageClient() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 leaf-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Growing the Future
              </span>
              <br />
              of Urban Agriculture
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re on a mission to revolutionize how people grow food in urban environments, 
              making sustainable agriculture accessible, efficient, and beautiful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At GreenTech Gardens, we believe everyone should have access to fresh, nutritious food 
                regardless of where they live. Our innovative hydroponic systems make it possible to 
                grow premium produce in any space, from tiny apartments to large commercial facilities.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We&apos;re not just selling growing systems – we&apos;re building a sustainable future where 
                local food production reduces environmental impact, strengthens communities, and 
                improves health outcomes for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  className="curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
                >
                  <Link href="/schedule" className="flex items-center gap-2">
                    Join Our Mission
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="curved-organic border-primary/30 hover:bg-primary/5"
                >
                  <Link href="/stories">Read Our Story</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="plant-card overflow-hidden"
            >
              <img
                src="https://maxm-imggenurl.web.val.run/diverse team of people working together in modern vertical farm, collaboration, innovation, sustainable agriculture, bright and inspiring environment"
                alt="Our mission in action"
                className="w-full h-96 object-cover sustainable-filter"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30 organic-texture">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="plant-card h-full">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate experts dedicated to revolutionizing urban agriculture and sustainable living.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="plant-card h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover sustainable-filter group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/30 organic-texture">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small startup to a leader in urban agriculture technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="plant-card h-full">
                  <CardHeader>
                    <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                    <CardTitle className="text-xl">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to sustainable urban agriculture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center plant-card p-8"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 leaf-pattern">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Join the
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Urban Farming Revolution?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s work together to create a more sustainable future through innovative growing solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-8 py-6 eco-shadow curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
              >
                <Link href="/schedule" className="flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 curved-organic border-primary/30 hover:bg-primary/5"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}