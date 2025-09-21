"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Battery, Gauge, Shield, Cpu, Wifi } from "lucide-react"

const vehicles = [
  {
    id: "luxe-s",
    name: "NOIR  Luxe S",
    category: "Luxury Sedan",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop&crop=center",
    specs: {
      range: 520,
      acceleration: 3.2,
      topSpeed: 250,
      battery: 100,
      charging: 350,
      power: 670
    },
    features: ["Autopilot Pro", "Premium Audio", "Air Suspension", "Glass Roof"]
  },
  {
    id: "terra-x",
    name: "NOIR  Terra X",
    category: "Electric SUV",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&crop=center",
    specs: {
      range: 480,
      acceleration: 4.1,
      topSpeed: 210,
      battery: 95,
      charging: 300,
      power: 580
    },
    features: ["Off-Road Mode", "7-Seat Config", "Towing Package", "360° Camera"]
  },
  {
    id: "volt-r",
    name: "NOIR  Volt R",
    category: "Sports Coupe",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop&crop=center",
    specs: {
      range: 420,
      acceleration: 2.8,
      topSpeed: 280,
      battery: 85,
      charging: 400,
      power: 750
    },
    features: ["Track Mode", "Carbon Fiber", "Sport Suspension", "Racing Seats"]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function SpecificationsPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-6 py-2 text-lg">
              Technical Specifications
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Performance
              <span className="block text-white">Redefined</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Discover the cutting-edge technology and engineering excellence that powers every NOIR  vehicle. 
              From lightning-fast acceleration to industry-leading range, explore the specifications that set us apart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Vehicle Lineup
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Compare detailed specifications across our entire electric vehicle range
              </p>
            </motion.div>

            <Tabs defaultValue="luxe-s" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-slate-800/50 border border-slate-700">
                {vehicles.map((vehicle) => (
                  <TabsTrigger
                    key={vehicle.id}
                    value={vehicle.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                  >
                    {vehicle.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {vehicles.map((vehicle) => (
                <TabsContent key={vehicle.id} value={vehicle.id}>
                  <motion.div
                    variants={itemVariants}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                  >
                    <div className="space-y-8">
                      <div>
                        <Badge className="mb-4 bg-slate-700 text-cyan-400 border-cyan-400/30">
                          {vehicle.category}
                        </Badge>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {vehicle.name}
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <Card className="bg-slate-800/50 border-slate-700">
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-cyan-400">
                              <Zap className="w-5 h-5" />
                              Range
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold text-white mb-2">
                              {vehicle.specs.range} km
                            </div>
                            <Progress value={85} className="h-2" />
                          </CardContent>
                        </Card>

                        <Card className="bg-slate-800/50 border-slate-700">
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-blue-400">
                              <Gauge className="w-5 h-5" />
                              0-100 km/h
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold text-white mb-2">
                              {vehicle.specs.acceleration}s
                            </div>
                            <Progress value={90} className="h-2" />
                          </CardContent>
                        </Card>

                        <Card className="bg-slate-800/50 border-slate-700">
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-purple-400">
                              <Battery className="w-5 h-5" />
                              Battery
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold text-white mb-2">
                              {vehicle.specs.battery} kWh
                            </div>
                            <Progress value={80} className="h-2" />
                          </CardContent>
                        </Card>

                        <Card className="bg-slate-800/50 border-slate-700">
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-green-400">
                              <Zap className="w-5 h-5" />
                              Fast Charging
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold text-white mb-2">
                              {vehicle.specs.charging} kW
                            </div>
                            <Progress value={95} className="h-2" />
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {vehicle.features.map((feature, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="border-cyan-400/30 text-cyan-400"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
                      />
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Advanced Technology
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Every NOIR  vehicle is equipped with cutting-edge technology for safety, performance, and connectivity
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Advanced Safety",
                  description: "AI-powered collision avoidance, automatic emergency braking, and 360-degree monitoring",
                  color: "text-green-400"
                },
                {
                  icon: Cpu,
                  title: "Neural Processing",
                  description: "Custom AI chip delivering real-time processing for autonomous driving capabilities",
                  color: "text-blue-400"
                },
                {
                  icon: Wifi,
                  title: "5G Connectivity",
                  description: "Ultra-fast wireless connectivity for over-the-air updates and cloud services",
                  color: "text-purple-400"
                },
                {
                  icon: Battery,
                  title: "Smart Battery",
                  description: "Intelligent thermal management and predictive charging optimization",
                  color: "text-cyan-400"
                },
                {
                  icon: Gauge,
                  title: "Performance Mode",
                  description: "Adaptive suspension and torque vectoring for optimal handling in any condition",
                  color: "text-orange-400"
                },
                {
                  icon: Zap,
                  title: "Rapid Charging",
                  description: "Industry-leading charging speeds with intelligent power management",
                  color: "text-yellow-400"
                }
              ].map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-slate-800/50 border-slate-700 h-full hover:bg-slate-800/70 transition-colors">
                    <CardHeader>
                      <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Experience the Future
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Ready to experience the ultimate in electric vehicle performance? Schedule your test drive today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Schedule Test Drive
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}