"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Leaf, Award, Users, Globe, Zap } from "lucide-react"

const milestones = [
  {
    year: "2018",
    title: "The Vision",
    description: "VoltLux was founded with a simple yet ambitious vision: to create the world&apos;s most luxurious and sustainable electric vehicles.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center"
  },
  {
    year: "2019",
    title: "First Prototype",
    description: "Our first prototype showcased revolutionary battery technology and autonomous driving capabilities that would define our future.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center"
  },
  {
    year: "2020",
    title: "Series A Funding",
    description: "Secured $500M in Series A funding, enabling us to build our state-of-the-art manufacturing facility and expand our team.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center"
  },
  {
    year: "2021",
    title: "Manufacturing Launch",
    description: "Opened our carbon-neutral manufacturing facility, setting new standards for sustainable automotive production.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center"
  },
  {
    year: "2022",
    title: "First Delivery",
    description: "Delivered our first VoltLux Luxe S to customers, marking the beginning of a new era in electric luxury mobility.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop&crop=center"
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded to international markets with showrooms in major cities worldwide and a growing network of charging stations.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center"
  }
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push the boundaries of what&apos;s possible in electric vehicle technology, constantly innovating to create the future of mobility.",
    color: "text-yellow-400"
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Every decision we make considers environmental impact, from carbon-neutral manufacturing to renewable energy integration.",
    color: "text-green-400"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in design, engineering, and customer experience, never compromising on quality.",
    color: "text-blue-400"
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in building a community of forward-thinking individuals who share our vision for a sustainable future.",
    color: "text-purple-400"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our mission extends beyond vehicles - we&apos;re working to create a global ecosystem of sustainable transportation.",
    color: "text-cyan-400"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "We prove that sustainability doesn&apos;t mean compromise, delivering unmatched performance in every vehicle we create.",
    color: "text-orange-400"
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

export default function BrandStoryPageClient() {
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
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pioneering
              <span className="block text-white">The Future</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From a bold vision to revolutionary reality, discover how VoltLux is transforming 
              the automotive industry through innovation, sustainability, and uncompromising luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Our Mission
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  To accelerate the world&apos;s transition to sustainable transportation by creating 
                  the most advanced, luxurious, and environmentally responsible electric vehicles ever built.
                </p>
                <p className="text-lg text-slate-400">
                  We believe that the future of mobility should not require compromise between 
                  performance, luxury, and environmental responsibility. Every VoltLux vehicle 
                  represents our commitment to proving that sustainable can be spectacular.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
                  alt="VoltLux Mission"
                  className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
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
                Our Journey
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From inception to global impact, explore the key milestones that have shaped VoltLux
              </p>
            </motion.div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:w-1/2 space-y-4">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 text-lg px-4 py-2">
                      {milestone.year}
                    </Badge>
                    <h3 className="text-3xl font-bold text-white">
                      {milestone.title}
                    </h3>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="relative z-10 w-full h-64 object-cover rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
                Our Values
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                The principles that guide every decision we make and every vehicle we create
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-slate-800/50 border-slate-700 h-full hover:bg-slate-800/70 transition-colors">
                    <CardHeader>
                      <value.icon className={`w-12 h-12 ${value.color} mb-4`} />
                      <CardTitle className="text-white">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
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
                Leadership Team
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Visionary leaders driving the future of electric mobility
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alexandra Chen",
                  role: "Chief Executive Officer",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
                  bio: "Former Tesla executive with 15 years in automotive innovation"
                },
                {
                  name: "Marcus Rodriguez",
                  role: "Chief Technology Officer",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
                  bio: "AI and autonomous systems expert, former Google engineer"
                },
                {
                  name: "Sarah Kim",
                  role: "Chief Design Officer",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
                  bio: "Award-winning designer from BMW&apos;s luxury division"
                }
              ].map((leader, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-slate-800/50 border-slate-700 text-center hover:bg-slate-800/70 transition-colors">
                    <CardHeader>
                      <div className="relative mx-auto mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-lg" />
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="relative z-10 w-24 h-24 object-cover rounded-full mx-auto"
                        />
                      </div>
                      <CardTitle className="text-white">{leader.name}</CardTitle>
                      <CardDescription className="text-cyan-400 font-semibold">
                        {leader.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{leader.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center"
                  alt="Future Vision"
                  className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  The Road Ahead
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Our vision extends far beyond creating exceptional vehicles. We&apos;re building 
                  a comprehensive ecosystem of sustainable transportation solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                    <p className="text-slate-300">
                      Autonomous driving technology that redefines safety and convenience
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                    <p className="text-slate-300">
                      Global charging network powered entirely by renewable energy
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                    <p className="text-slate-300">
                      Revolutionary battery technology with 1000+ mile range
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                    <p className="text-slate-300">
                      Carbon-negative manufacturing processes by 2030
                    </p>
                  </div>
                </div>
              </div>
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
              Join Our Journey
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Be part of the electric revolution. Experience the future of luxury mobility with VoltLux.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Explore Our Vehicles
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}