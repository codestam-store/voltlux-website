"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Leaf, Droplets, Zap, Thermometer, Wifi, Smartphone, CheckCircle, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const systems = [
  {
    id: "hydro-tower",
    name: "HydroTower Pro",
    category: "Vertical Hydroponic",
    price: "$1,299",
    rating: 4.9,
    reviews: 127,
    image: "https://maxm-imggenurl.web.val.run/sleek white vertical hydroponic tower with multiple growing levels, LED grow lights, green leafy vegetables, modern minimalist design, clean background",
    features: [
      "20 plant capacity",
      "Automated nutrient delivery",
      "LED grow lights included",
      "App-controlled monitoring",
      "Water level indicators",
      "pH auto-balancing"
    ],
    specs: {
      dimensions: "24\" W x 18\" D x 72\" H",
      capacity: "20 plants",
      powerConsumption: "45W",
      waterCapacity: "15 gallons"
    },
    description: "Our flagship vertical growing system perfect for apartments and small spaces. Grow 20 plants in just 3 square feet of floor space."
  },
  {
    id: "smart-garden",
    name: "SmartGarden Mini",
    category: "Countertop System",
    price: "$399",
    rating: 4.8,
    reviews: 89,
    image: "https://maxm-imggenurl.web.val.run/compact countertop hydroponic garden with herbs growing, modern kitchen setting, LED lights, sleek white design, fresh green plants",
    features: [
      "6 plant capacity",
      "Smart sensors",
      "Automatic watering",
      "Mobile app control",
      "Herb seed pods included",
      "Energy efficient LEDs"
    ],
    specs: {
      dimensions: "16\" W x 12\" D x 18\" H",
      capacity: "6 plants",
      powerConsumption: "15W",
      waterCapacity: "2 gallons"
    },
    description: "Perfect starter system for herbs and small greens. Fits on any countertop and provides fresh ingredients year-round."
  },
  {
    id: "farm-wall",
    name: "FarmWall System",
    category: "Wall-Mounted",
    price: "$2,499",
    rating: 4.9,
    reviews: 156,
    image: "https://maxm-imggenurl.web.val.run/large wall-mounted vertical farming system with multiple rows of green vegetables, modern indoor environment, professional growing setup, abundant harvest",
    features: [
      "50 plant capacity",
      "Modular design",
      "Climate control",
      "Professional monitoring",
      "Automated harvesting alerts",
      "Commercial-grade components"
    ],
    specs: {
      dimensions: "72\" W x 12\" D x 96\" H",
      capacity: "50 plants",
      powerConsumption: "120W",
      waterCapacity: "40 gallons"
    },
    description: "Commercial-grade wall system for serious growers. Perfect for restaurants, offices, or dedicated growing spaces."
  },
  {
    id: "greenhouse-pod",
    name: "GreenPod Deluxe",
    category: "Standalone Unit",
    price: "$4,999",
    rating: 5.0,
    reviews: 43,
    image: "https://maxm-imggenurl.web.val.run/futuristic greenhouse pod with transparent walls, lush green plants inside, LED lighting system, modern sustainable design, outdoor garden setting",
    features: [
      "100 plant capacity",
      "Climate-controlled environment",
      "Solar panel integration",
      "Advanced AI monitoring",
      "Automated pest management",
      "Year-round growing"
    ],
    specs: {
      dimensions: "8' W x 8' D x 8' H",
      capacity: "100 plants",
      powerConsumption: "200W",
      waterCapacity: "80 gallons"
    },
    description: "The ultimate growing environment. Self-contained ecosystem with advanced climate control and AI-powered optimization."
  },
  {
    id: "micro-farm",
    name: "MicroFarm Station",
    category: "Desktop System",
    price: "$199",
    rating: 4.7,
    reviews: 234,
    image: "https://maxm-imggenurl.web.val.run/small desktop hydroponic system with microgreens, office desk setting, compact design, LED grow light, fresh sprouts growing",
    features: [
      "3 plant capacity",
      "USB powered",
      "Silent operation",
      "Microgreen focused",
      "Quick 7-day harvest",
      "Minimal maintenance"
    ],
    specs: {
      dimensions: "8\" W x 6\" D x 12\" H",
      capacity: "3 plants",
      powerConsumption: "8W",
      waterCapacity: "0.5 gallons"
    },
    description: "Perfect for office desks or small spaces. Grow fresh microgreens and sprouts in just one week."
  },
  {
    id: "aqua-garden",
    name: "AquaGarden Pro",
    category: "Aquaponic System",
    price: "$3,299",
    rating: 4.8,
    reviews: 67,
    image: "https://maxm-imggenurl.web.val.run/aquaponic system with fish tank below and plants growing above, sustainable ecosystem, clear water, healthy fish, green vegetables, modern design",
    features: [
      "30 plant capacity",
      "Integrated fish tank",
      "Natural fertilization",
      "Ecosystem balance",
      "Educational value",
      "Sustainable design"
    ],
    specs: {
      dimensions: "48\" W x 24\" D x 60\" H",
      capacity: "30 plants + fish",
      powerConsumption: "75W",
      waterCapacity: "50 gallons"
    },
    description: "Combine fish farming with plant growing in this sustainable aquaponic system. Fish waste naturally fertilizes your plants."
  }
]

const categories = ["All Systems", "Vertical Hydroponic", "Countertop System", "Wall-Mounted", "Standalone Unit", "Desktop System", "Aquaponic System"]

export function SystemsPageClient() {
  const [selectedCategory, setSelectedCategory] = React.useState("All Systems")
  const [filteredSystems, setFilteredSystems] = React.useState(systems)

  React.useEffect(() => {
    if (selectedCategory === "All Systems") {
      setFilteredSystems(systems)
    } else {
      setFilteredSystems(systems.filter(system => system.category === selectedCategory))
    }
  }, [selectedCategory])

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
                Growing Systems
              </span>
              <br />
              For Every Space
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From compact desktop units to commercial-grade installations, 
              find the perfect hydroponic system for your urban farming needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background/50 backdrop-blur-sm sticky top-20 z-40 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`curved-organic transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground border-0"
                    : "hover:bg-primary/5 border-primary/30"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredSystems.map((system, index) => (
              <motion.div
                key={system.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="plant-card h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={system.image}
                      alt={system.name}
                      className="w-full h-64 object-cover sustainable-filter group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                      {system.category}
                    </Badge>
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="text-xs font-medium">{system.rating}</span>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{system.name}</CardTitle>
                        <p className="text-muted-foreground text-sm mb-3">
                          {system.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{system.price}</div>
                        <div className="text-xs text-muted-foreground">
                          {system.reviews} reviews
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {system.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                        {system.features.length > 4 && (
                          <div className="text-sm text-primary font-medium">
                            +{system.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quick Specs */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Specifications</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Capacity:</span>
                          <div className="font-medium">{system.specs.capacity}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Power:</span>
                          <div className="font-medium">{system.specs.powerConsumption}</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button 
                        asChild 
                        className="flex-1 curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
                      >
                        <Link href={`/schedule?system=${system.id}`} className="flex items-center justify-center gap-2">
                          Order Now
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="curved-organic border-primary/30 hover:bg-primary/5"
                      >
                        <Link href={`/systems/${system.id}`}>
                          Details
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

      {/* Features Comparison */}
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
              Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GreenTech</span> Systems?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every system includes our signature features for optimal growing success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Droplets,
                title: "Smart Watering",
                description: "Automated nutrient delivery with precise pH balancing for optimal plant health."
              },
              {
                icon: Zap,
                title: "Energy Efficient",
                description: "LED grow lights and smart sensors minimize power consumption while maximizing growth."
              },
              {
                icon: Smartphone,
                title: "App Control",
                description: "Monitor and control your garden remotely with our intuitive mobile app."
              },
              {
                icon: Thermometer,
                title: "Climate Control",
                description: "Maintain perfect growing conditions with automated temperature and humidity control."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="plant-card p-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
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
              Need Help Choosing the
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Perfect System?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experts will help you find the ideal growing system for your space, 
              budget, and growing goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-8 py-6 eco-shadow curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
              >
                <Link href="/schedule" className="flex items-center gap-2">
                  Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 curved-organic border-primary/30 hover:bg-primary/5"
              >
                <Link href="/contact">Contact Expert</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}