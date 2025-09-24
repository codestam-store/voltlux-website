"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Leaf, Droplets, Zap, Users, TrendingUp, CheckCircle, Play, Star, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Plants Grown", value: "50K+", icon: Leaf },
  { label: "Water Saved", value: "90%", icon: Droplets },
  { label: "Energy Efficient", value: "75%", icon: Zap },
  { label: "Happy Growers", value: "2K+", icon: Users },
]

const features = [
  {
    title: "Smart Hydroponic Systems",
    description: "AI-powered nutrient delivery and automated pH balancing for optimal plant growth in any space.",
    image: "https://maxm-imggenurl.web.val.run/modern hydroponic vertical farming system with LED grow lights, green leafy vegetables growing in white towers, clean minimalist indoor environment, natural lighting",
    benefits: ["Automated nutrient delivery", "pH monitoring", "Growth optimization", "Space efficient"]
  },
  {
    title: "Vertical Growing Solutions",
    description: "Maximize your growing space with our innovative vertical farming towers designed for urban environments.",
    image: "https://maxm-imggenurl.web.val.run/vertical farming tower in modern apartment, multiple levels of green vegetables, sleek white design, natural sunlight streaming through windows",
    benefits: ["10x more plants per sq ft", "Modular design", "Easy maintenance", "Aesthetic appeal"]
  },
  {
    title: "IoT Monitoring & Control",
    description: "Monitor and control your garden remotely with our smart sensors and mobile app integration.",
    image: "https://maxm-imggenurl.web.val.run/smartphone app interface showing plant monitoring dashboard, green UI elements, growth charts, sensor data, modern tech aesthetic",
    benefits: ["Real-time monitoring", "Mobile app control", "Growth analytics", "Alert notifications"]
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Urban Gardener",
    content: "GreenTech Gardens transformed my small apartment into a thriving urban farm. I&apos;m growing fresh herbs and vegetables year-round!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "Restaurant Owner",
    content: "The vertical farming system provides fresh ingredients daily for our restaurant. The quality and consistency are outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Johnson",
    role: "Sustainability Advocate",
    content: "Finally, a solution that makes sustainable living accessible. The water savings alone make this worth every penny.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
]

export function HomePageClient() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden leaf-pattern">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <img
            src="https://maxm-imggenurl.web.val.run/modern vertical farming facility with lush green plants growing in hydroponic towers, LED grow lights, clean white architecture, sustainable technology, bright and airy atmosphere"
            alt="Modern vertical farming facility"
            className="w-full h-full object-cover sustainable-filter"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium"
            >
              <Leaf className="h-4 w-4" />
              Sustainable Urban Farming Revolution
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Grow Fresh Food
              </span>
              <br />
              <span className="text-foreground">Anywhere, Anytime</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your urban space with our innovative vertical farming solutions. 
              Sustainable, smart, and designed for modern living.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-8 py-6 eco-shadow curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
              >
                <Link href="/schedule" className="flex items-center gap-2">
                  Start Growing Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 curved-organic border-primary/30 hover:bg-primary/5"
              >
                <Link href="/vehicles" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="plant-card p-4 text-center"
              >
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30 organic-texture">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Revolutionary Growing
              </span>
              <br />
              Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our cutting-edge systems combine hydroponics, IoT, and sustainable design 
              to create the perfect growing environment for your urban farm.
            </p>
          </motion.div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="plant-card overflow-hidden"
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-80 object-cover sustainable-filter"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: benefitIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button 
                    asChild 
                    className="curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
                  >
                    <Link href="/services" className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Growers</span> Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of urban farmers who have transformed their spaces with GreenTech Gardens.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="plant-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {testimonial.content}
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 leaf-pattern">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Start Your
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Urban Farm Journey?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the sustainable farming revolution. Get started with our expert consultation 
              and custom system design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-8 py-6 eco-shadow curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
              >
                <Link href="/schedule" className="flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 curved-organic border-primary/30 hover:bg-primary/5"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}