"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users, Building2, Home, Lightbulb, CheckCircle, Clock, DollarSign, Leaf, Zap, Droplets, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const solutions = [
  {
    id: "residential",
    title: "Home Growing Solutions",
    subtitle: "Transform your living space",
    description: "Custom hydroponic systems designed for apartments, homes, and personal spaces. Grow fresh food year-round with minimal effort.",
    icon: Home,
    image: "https://maxm-imggenurl.web.val.run/modern apartment with vertical garden wall, family enjoying fresh vegetables, bright natural lighting, contemporary interior design, sustainable living",
    features: [
      "Space-optimized designs",
      "Easy maintenance systems",
      "Family-friendly operation",
      "Fresh herbs & vegetables",
      "Year-round growing",
      "Energy-efficient LEDs"
    ],
    benefits: [
      "Save $200+ monthly on groceries",
      "Pesticide-free produce",
      "Reduce carbon footprint",
      "Educational for children"
    ],
    pricing: "Starting at $399",
    timeline: "2-3 weeks installation"
  },
  {
    id: "commercial",
    title: "Restaurant & Café Solutions",
    subtitle: "Farm-to-table freshness",
    description: "Professional growing systems for restaurants, cafés, and food service businesses. Ensure consistent supply of premium ingredients.",
    icon: Building2,
    image: "https://maxm-imggenurl.web.val.run/upscale restaurant kitchen with vertical farming system, chef harvesting fresh herbs, professional culinary environment, modern equipment",
    features: [
      "High-yield production",
      "Consistent quality control",
      "Custom crop selection",
      "Professional monitoring",
      "Scalable systems",
      "Food safety compliance"
    ],
    benefits: [
      "Reduce ingredient costs by 40%",
      "Guarantee freshness daily",
      "Unique menu offerings",
      "Marketing advantage"
    ],
    pricing: "Starting at $2,999",
    timeline: "4-6 weeks installation"
  },
  {
    id: "office",
    title: "Corporate Wellness Programs",
    subtitle: "Healthy workplace environments",
    description: "Bring nature indoors with office growing systems that improve air quality, employee wellness, and company sustainability goals.",
    icon: Users,
    image: "https://maxm-imggenurl.web.val.run/modern office space with living green walls, employees working happily, natural plants integrated into workspace, bright and healthy environment",
    features: [
      "Air purification systems",
      "Low-maintenance design",
      "Employee engagement",
      "Wellness integration",
      "Sustainability showcase",
      "Team building activities"
    ],
    benefits: [
      "Improve employee satisfaction",
      "Reduce sick days by 15%",
      "Enhance company image",
      "Meet sustainability goals"
    ],
    pricing: "Starting at $1,499",
    timeline: "3-4 weeks installation"
  },
  {
    id: "education",
    title: "Educational Programs",
    subtitle: "Learning through growing",
    description: "Interactive growing systems for schools, universities, and educational institutions. Hands-on learning about sustainability and nutrition.",
    icon: Lightbulb,
    image: "https://maxm-imggenurl.web.val.run/classroom with students learning about plants, hydroponic system demonstration, teacher explaining sustainable farming, educational environment",
    features: [
      "Curriculum integration",
      "Student-friendly design",
      "Educational materials",
      "Progress tracking",
      "Safety features",
      "Teacher training included"
    ],
    benefits: [
      "Enhance STEM education",
      "Teach sustainability",
      "Improve nutrition awareness",
      "Hands-on learning experience"
    ],
    pricing: "Starting at $899",
    timeline: "2-3 weeks installation"
  }
]

const services = [
  {
    title: "Custom Design & Installation",
    description: "Tailored growing systems designed specifically for your space, needs, and goals.",
    icon: Building2,
    features: ["Site assessment", "Custom design", "Professional installation", "System optimization"]
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing support to ensure your growing system operates at peak performance.",
    icon: Users,
    features: ["Regular maintenance", "24/7 support", "System updates", "Troubleshooting"]
  },
  {
    title: "Training & Education",
    description: "Comprehensive training programs to help you master your growing system.",
    icon: Lightbulb,
    features: ["Hands-on training", "Online resources", "Best practices", "Ongoing education"]
  }
]

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "Free consultation to understand your needs, space, and growing goals."
  },
  {
    step: "02",
    title: "Design",
    description: "Custom system design with 3D visualization and detailed specifications."
  },
  {
    step: "03",
    title: "Installation",
    description: "Professional installation by certified technicians with full testing."
  },
  {
    step: "04",
    title: "Training",
    description: "Comprehensive training on system operation and maintenance."
  },
  {
    step: "05",
    title: "Support",
    description: "Ongoing support and maintenance to ensure optimal performance."
  }
]

export function SolutionsPageClient() {
  const [selectedSolution, setSelectedSolution] = React.useState("residential")

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
                Growing Solutions
              </span>
              <br />
              For Every Need
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From home kitchens to commercial restaurants, we provide custom hydroponic 
              solutions that fit your space, budget, and growing goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="plant-card h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-64 object-cover sustainable-filter group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <solution.icon className="h-8 w-8 mb-2" />
                      <h3 className="text-xl font-bold">{solution.title}</h3>
                      <p className="text-sm opacity-90">{solution.subtitle}</p>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">What&apos;s Included</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Benefits</h4>
                      <div className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <div key={benefit} className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Timeline */}
                    <div className="flex justify-between items-center pt-4 border-t border-border/30">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <span className="font-semibold text-primary">{solution.pricing}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{solution.timeline}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button 
                        asChild 
                        className="flex-1 curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
                      >
                        <Link href={`/schedule?solution=${solution.id}`} className="flex items-center justify-center gap-2">
                          Get Quote
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="curved-organic border-primary/30 hover:bg-primary/5"
                      >
                        <Link href={`/solutions/${solution.id}`}>
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Complete <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span> Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial consultation to ongoing support, we provide everything you need for growing success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="plant-card h-full">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach to get you growing as quickly and efficiently as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="plant-card p-6">
                  <div className="text-4xl font-bold text-primary mb-4">{step.step}</div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 leaf-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: "500+", label: "Happy Customers" },
              { icon: Building2, value: "50+", label: "Commercial Installs" },
              { icon: Leaf, value: "100K+", label: "Plants Grown" },
              { icon: Droplets, value: "90%", label: "Water Savings" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="plant-card p-6"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your Growing Space?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss your project and create a custom solution that fits your needs perfectly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-8 py-6 eco-shadow curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
              >
                <Link href="/schedule" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 curved-organic border-primary/30 hover:bg-primary/5"
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}