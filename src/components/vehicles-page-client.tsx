"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Battery, 
  Gauge, 
  Zap, 
  Shield, 
  ArrowRight,
  Star,
  ChevronRight,
  Car,
  Truck,
  Plane
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const vehicles = {
  sedans: [
    {
      name: "NOIR  Apex",
      subtitle: "Flagship Luxury Sedan",
      range: "520 miles",
      acceleration: "0-60 in 2.8s",
      topSpeed: "155 mph",
      price: "From $89,900",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop&crop=center",
      features: ["Autonomous Driving Level 4", "Premium Leather Interior", "22kW Fast Charging", "Panoramic Glass Roof"],
      specs: {
        battery: "100 kWh",
        power: "503 hp",
        torque: "487 lb-ft",
        drivetrain: "Dual Motor AWD"
      }
    },
    {
      name: "NOIR  Elite",
      subtitle: "Executive Sedan",
      range: "480 miles",
      acceleration: "0-60 in 3.4s",
      topSpeed: "145 mph",
      price: "From $69,900",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&crop=center",
      features: ["Advanced Driver Assistance", "Heated & Cooled Seats", "18kW Fast Charging", "Premium Sound System"],
      specs: {
        battery: "85 kWh",
        power: "402 hp",
        torque: "413 lb-ft",
        drivetrain: "Dual Motor AWD"
      }
    }
  ],
  suvs: [
    {
      name: "NOIR  Titan",
      subtitle: "Luxury Electric SUV",
      range: "480 miles",
      acceleration: "0-60 in 3.2s",
      topSpeed: "150 mph",
      price: "From $95,900",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&crop=center",
      features: ["7-Seater Configuration", "Off-Road Capability", "Air Suspension", "Towing Capacity 7,500 lbs"],
      specs: {
        battery: "110 kWh",
        power: "603 hp",
        torque: "713 lb-ft",
        drivetrain: "Tri-Motor AWD"
      }
    },
    {
      name: "NOIR  Explorer",
      subtitle: "Adventure SUV",
      range: "450 miles",
      acceleration: "0-60 in 3.8s",
      topSpeed: "140 mph",
      price: "From $78,900",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&crop=center",
      features: ["All-Terrain Tires", "Skid Plates", "Hill Descent Control", "Waterproof Interior"],
      specs: {
        battery: "95 kWh",
        power: "453 hp",
        torque: "531 lb-ft",
        drivetrain: "Dual Motor AWD"
      }
    }
  ],
  sports: [
    {
      name: "NOIR  Velocity",
      subtitle: "High-Performance Coupe",
      range: "450 miles",
      acceleration: "0-60 in 2.1s",
      topSpeed: "200 mph",
      price: "From $125,900",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop&crop=center",
      features: ["Track Mode", "Carbon Fiber Body", "Racing Suspension", "Brembo Brakes"],
      specs: {
        battery: "95 kWh",
        power: "750 hp",
        torque: "723 lb-ft",
        drivetrain: "Tri-Motor AWD"
      }
    },
    {
      name: "NOIR  Thunder",
      subtitle: "Electric Supercar",
      range: "380 miles",
      acceleration: "0-60 in 1.8s",
      topSpeed: "220 mph",
      price: "From $189,900",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop&crop=center",
      features: ["Ludicrous Mode", "Active Aerodynamics", "Ceramic Brakes", "Launch Control"],
      specs: {
        battery: "100 kWh",
        power: "1,020 hp",
        torque: "1,050 lb-ft",
        drivetrain: "Quad Motor AWD"
      }
    }
  ]
}

const categories = [
  { id: "sedans", label: "Luxury Sedans", icon: Car, count: vehicles.sedans.length },
  { id: "suvs", label: "Electric SUVs", icon: Truck, count: vehicles.suvs.length },
  { id: "sports", label: "Sports Cars", icon: Plane, count: vehicles.sports.length }
]

export default function VehiclesPageClient() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&crop=center')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 px-4 py-2">
              Our Vehicle Lineup
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 neon-text">
              Premium Electric Vehicles
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our complete range of luxury electric vehicles, each engineered to deliver unparalleled performance, comfort, and sustainability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-4 text-lg neon-glow"
              >
                <Link href="/schedule">
                  Schedule Test Drive <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg glass-effect"
              >
                <Link href="/showroom">
                  Visit Showroom
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="sedans" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-3 glass-effect">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(vehicles).map(([categoryId, categoryVehicles]) => (
              <TabsContent key={categoryId} value={categoryId}>
                <motion.div
                  className="grid md:grid-cols-2 gap-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {categoryVehicles.map((vehicle, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 glass-effect">
                        <div className="relative overflow-hidden">
                          <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 mb-2">
                              {vehicle.subtitle}
                            </Badge>
                          </div>

                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {vehicle.name}
                            </h3>
                            <div className="flex items-center gap-4 text-white/90 text-sm">
                              <span className="flex items-center gap-1">
                                <Battery className="h-4 w-4" />
                                {vehicle.range}
                              </span>
                              <span className="flex items-center gap-1">
                                <Gauge className="h-4 w-4" />
                                {vehicle.acceleration}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <CardContent className="p-6">
                          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Battery:</span>
                                <span className="font-semibold">{vehicle.specs.battery}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Power:</span>
                                <span className="font-semibold">{vehicle.specs.power}</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Torque:</span>
                                <span className="font-semibold">{vehicle.specs.torque}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Drivetrain:</span>
                                <span className="font-semibold text-xs">{vehicle.specs.drivetrain}</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2 mb-6">
                            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                              Key Features
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {vehicle.features.map((feature, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-2xl font-bold text-primary">
                                {vehicle.price}
                              </span>
                              <div className="text-xs text-muted-foreground">
                                Top Speed: {vehicle.topSpeed}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="group-hover:border-primary group-hover:text-primary transition-colors"
                              >
                                Configure
                              </Button>
                              <Button 
                                size="sm"
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
                              >
                                Test Drive <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect NOIR 
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the future of mobility with a personalized test drive at our showroom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link href="/schedule">
                  Schedule Test Drive <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                <Link href="/specifications">
                  View All Specs
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}