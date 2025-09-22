"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Camera, 
  Film, 
  Aperture, 
  Timer, 
  Award, 
  ArrowRight, 
  Play,
  Star,
  Users,
  Heart,
  ChevronRight,
  Quote,
  Calendar,
  MapPin
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const services = [
  {
    name: "Portrait Sessions",
    type: "Classic & Contemporary",
    duration: "2-3 hours",
    deliverables: "50+ edited photos",
    price: "From $350",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&h=600&fit=crop&crop=center",
    features: ["Film & Digital", "Studio & Location", "Professional Editing"]
  },
  {
    name: "Wedding Photography",
    type: "Vintage Film Style",
    duration: "Full day coverage",
    deliverables: "200+ photos + album",
    price: "From $2,500",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop&crop=center",
    features: ["Engagement Session", "Film Processing", "Custom Album"]
  },
  {
    name: "Commercial Shoots",
    type: "Brand & Product",
    duration: "Half/Full day",
    deliverables: "Custom package",
    price: "From $800",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop&crop=center",
    features: ["Creative Direction", "Multiple Formats", "Usage Rights"]
  }
]

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Bride",
    content: "The vintage aesthetic and attention to detail was absolutely perfect. Every photo tells a story.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=center"
  },
  {
    name: "David Chen",
    role: "Business Owner",
    content: "Professional, creative, and delivered exactly what we envisioned for our brand campaign.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=center"
  },
  {
    name: "Emma Rodriguez",
    role: "Model",
    content: "The film photography approach created such authentic and timeless portraits. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=center"
  }
]

const stats = [
  { number: "500+", label: "Sessions Completed" },
  { number: "50+", label: "Weddings Captured" },
  { number: "10+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" }
]

export default function HomePageClient() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop&crop=center" 
            alt="Vintage photography studio with classic camera equipment"
            className="w-full h-full object-cover grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm tracking-wider uppercase">
                Est. 2014 • Film Photography
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-tight tracking-tight"
              variants={fadeInUp}
            >
              Timeless
              <span className="block text-primary typewriter-effect">Moments</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Capturing life&apos;s most precious moments through the art of vintage film photography. 
              Where every frame tells a story that transcends time.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={fadeInUp}
            >
              <Button 
                asChild 
                size="lg" 
                className="retro-shadow text-base px-8 py-6 uppercase tracking-wider font-medium"
              >
                <Link href="/schedule" className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Book Your Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-8 py-6 uppercase tracking-wider font-medium vintage-border"
              >
                <Link href="/vehicles" className="flex items-center gap-3">
                  <Camera className="w-5 h-5" />
                  View Portfolio
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30 px-4 py-2 uppercase tracking-wider">
                Our Services
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Photography That Speaks
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From intimate portraits to grand celebrations, we specialize in capturing 
                authentic moments with vintage film aesthetics.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={service.name} variants={fadeInUp}>
                <Card className="group overflow-hidden retro-shadow hover:shadow-2xl transition-all duration-500 photo-frame">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Badge className="bg-primary/80 text-primary-foreground">
                        {service.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-foreground typewriter-effect">
                      {service.name}
                    </h3>
                    
                    <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4" />
                        {service.deliverables}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {service.price}
                      </span>
                      <Button 
                        asChild 
                        variant="ghost" 
                        size="sm"
                        className="group/btn"
                      >
                        <Link href="/services" className="flex items-center gap-2">
                          Learn More
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 typewriter-effect">
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-wider opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30 px-4 py-2 uppercase tracking-wider">
                Client Stories
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                What Our Clients Say
              </h2>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} variants={fadeInUp}>
                <Card className="p-6 retro-shadow vintage-border">
                  <CardContent className="p-0">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full grayscale photo-frame"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-semibold text-foreground typewriter-effect">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                      <div className="ml-auto flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30 film-grain">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Create Something
              <span className="block text-primary typewriter-effect">Timeless?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss your vision and create photographs that will be treasured for generations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="retro-shadow text-base px-8 py-6 uppercase tracking-wider font-medium"
              >
                <Link href="/schedule" className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-8 py-6 uppercase tracking-wider font-medium vintage-border"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  Visit Studio
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}