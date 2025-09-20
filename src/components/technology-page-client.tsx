"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Battery, 
  Zap, 
  Brain, 
  Shield, 
  Cpu, 
  Wifi, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Gauge,
  Eye,
  Smartphone
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

const technologies = [
  {
    icon: Battery,
    title: "Next-Gen Battery Technology",
    subtitle: "Revolutionary Energy Storage",
    description: "Our proprietary lithium-silicon battery cells deliver 40% more energy density than traditional lithium-ion batteries, enabling longer range and faster charging.",
    features: [
      "Silicon nanowire anodes for 40% more capacity",
      "Solid-state electrolyte for enhanced safety",
      "Thermal management system prevents overheating",
      "10-year, 500,000-mile battery warranty"
    ],
    specs: {
      "Energy Density": "350 Wh/kg",
      "Charging Speed": "10-80% in 18 minutes",
      "Cycle Life": "3,000+ cycles",
      "Operating Range": "-40°C to 60°C"
    },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
  },
  {
    icon: Zap,
    title: "Ultra-Fast Charging System",
    subtitle: "Redefining Charging Speed",
    description: "Our 350kW charging technology can add 200 miles of range in just 10 minutes, making long-distance travel as convenient as traditional vehicles.",
    features: [
      "350kW peak charging power",
      "Adaptive charging curve optimization",
      "Plug & Charge authentication",
      "Compatible with all major charging networks"
    ],
    specs: {
      "Peak Power": "350 kW",
      "10-80% Charge": "18 minutes",
      "Range Added": "20 miles/minute",
      "Efficiency": "95% DC-DC conversion"
    },
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=600&fit=crop&crop=center"
  },
  {
    icon: Brain,
    title: "Autonomous Driving AI",
    subtitle: "Level 4 Self-Driving Capability",
    description: "Our neural network processes over 1TB of sensor data per hour, enabling full self-driving capability in most conditions with human-level decision making.",
    features: [
      "12 cameras with 360° vision",
      "LiDAR and radar sensor fusion",
      "Real-time neural network processing",
      "Over-the-air capability updates"
    ],
    specs: {
      "Processing Power": "144 TOPS",
      "Sensor Range": "250 meters",
      "Update Frequency": "120 Hz",
      "Safety Level": "10x safer than human drivers"
    },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
  },
  {
    icon: Shield,
    title: "Advanced Safety Systems",
    subtitle: "Predictive Protection Technology",
    description: "Our AI-powered safety systems can predict and prevent accidents before they happen, providing unparalleled protection for passengers and pedestrians.",
    features: [
      "Predictive collision avoidance",
      "Emergency automatic braking",
      "Blind spot monitoring with intervention",
      "Pedestrian and cyclist detection"
    ],
    specs: {
      "Reaction Time": "0.1 seconds",
      "Detection Range": "200 meters",
      "Safety Rating": "5-star NHTSA",
      "Accident Reduction": "90% fewer accidents"
    },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
  }
]

const innovations = [
  {
    title: "Quantum Computing Integration",
    description: "First automotive application of quantum processors for route optimization",
    progress: 85,
    status: "In Development"
  },
  {
    title: "Wireless Power Transfer",
    description: "Inductive charging while driving on equipped highways",
    progress: 60,
    status: "Testing Phase"
  },
  {
    title: "Neural Interface Control",
    description: "Direct brain-computer interface for vehicle control",
    progress: 30,
    status: "Research Phase"
  },
  {
    title: "Holographic Displays",
    description: "3D holographic instrument cluster and entertainment system",
    progress: 75,
    status: "Beta Testing"
  }
]

const stats = [
  { icon: TrendingUp, value: "40%", label: "More Efficient", description: "Than traditional EVs" },
  { icon: Gauge, value: "2.1s", label: "0-60 MPH", description: "Fastest acceleration" },
  { icon: Eye, value: "360°", label: "Vision System", description: "Complete awareness" },
  { icon: Smartphone, value: "5G", label: "Connectivity", description: "Ultra-low latency" }
]

export default function TechnologyPageClient() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 px-4 py-2">
              Innovation & Technology
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 neon-text">
              Cutting-Edge Technology
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover the revolutionary technologies that power VoltLux vehicles, from advanced AI systems to breakthrough battery innovations.
            </p>

            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-4 text-lg neon-glow"
            >
              <Link href="/vehicles">
                Experience the Technology <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
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
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300 neon-glow">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 neon-text">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
              Core Technologies
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Revolutionary Innovations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each VoltLux vehicle incorporates breakthrough technologies that redefine what&apos;s possible in electric mobility.
            </p>
          </motion.div>

          <div className="space-y-24">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white neon-glow">
                      <tech.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                        {tech.subtitle}
                      </Badge>
                      <h3 className="text-3xl font-bold text-foreground">
                        {tech.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {tech.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {tech.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Technical Specs</h4>
                      <div className="space-y-2">
                        {Object.entries(tech.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{key}:</span>
                            <span className="font-semibold text-foreground">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative group">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Innovations */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Future Innovations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              What&apos;s Coming Next
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the groundbreaking technologies we&apos;re developing for the next generation of VoltLux vehicles.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {innovations.map((innovation, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white/10 border-white/20 text-white glass-effect">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{innovation.title}</CardTitle>
                      <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                        {innovation.status}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {innovation.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Development Progress</span>
                        <span>{innovation.progress}%</span>
                      </div>
                      <Progress 
                        value={innovation.progress} 
                        className="h-2 bg-white/20"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
              Experience the Technology
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See these innovations in action with a personalized demonstration at our technology center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link href="/schedule">
                  Schedule Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                <Link href="/specifications">
                  Technical Specs
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}