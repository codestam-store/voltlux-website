"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Eye, Palette, Settings, Calendar, MapPin } from "lucide-react"
import { useState } from "react"

const vehicles = [
  {
    id: 1,
    name: "NOIR  Luxe S",
    category: "Luxury Sedan",
    price: "From $89,900",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop&crop=center",
    colors: ["Midnight Black", "Pearl White", "Electric Blue", "Cosmic Silver"],
    features: ["Autopilot Pro", "Premium Audio", "Air Suspension", "Glass Roof"],
    description: "The pinnacle of luxury electric sedans, combining performance with sophistication."
  },
  {
    id: 2,
    name: "NOIR  Terra X",
    category: "Electric SUV",
    price: "From $94,900",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=800&fit=crop&crop=center",
    colors: ["Forest Green", "Arctic White", "Storm Gray", "Copper Bronze"],
    features: ["Off-Road Mode", "7-Seat Config", "Towing Package", "360° Camera"],
    description: "Adventure-ready electric SUV with uncompromising luxury and capability."
  },
  {
    id: 3,
    name: "NOIR  Volt R",
    category: "Sports Coupe",
    price: "From $119,900",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&h=800&fit=crop&crop=center",
    colors: ["Racing Red", "Carbon Black", "Electric Yellow", "Titanium Gray"],
    features: ["Track Mode", "Carbon Fiber", "Sport Suspension", "Racing Seats"],
    description: "Pure electric performance engineered for the track and refined for the street."
  }
]

const showroomLocations = [
  {
    city: "New York",
    address: "123 Electric Avenue, Manhattan, NY 10001",
    hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center"
  },
  {
    city: "Los Angeles",
    address: "456 Future Blvd, Beverly Hills, CA 90210",
    hours: "Mon-Sat: 10AM-9PM, Sun: 12PM-7PM",
    image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&h=400&fit=crop&crop=center"
  },
  {
    city: "Miami",
    address: "789 Ocean Drive, South Beach, FL 33139",
    hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center"
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

export default function ShowroomPageClient() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0])

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
              Virtual Showroom
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
              <span className="block text-white">NOIR </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Immerse yourself in the future of electric mobility. Explore our vehicles in stunning detail, 
              customize your perfect configuration, and schedule your test drive experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Vehicle Showcase */}
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
                Interactive Experience
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Explore every detail of our vehicles with 360° views and interactive features
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {vehicles.map((vehicle) => (
                <motion.div key={vehicle.id} variants={itemVariants}>
                  <Card 
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedVehicle.id === vehicle.id 
                        ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400' 
                        : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800/70'
                    }`}
                    onClick={() => setSelectedVehicle(vehicle)}
                  >
                    <CardHeader>
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <Badge className="w-fit bg-slate-700 text-cyan-400 border-cyan-400/30">
                        {vehicle.category}
                      </Badge>
                      <CardTitle className="text-white">{vehicle.name}</CardTitle>
                      <CardDescription className="text-slate-300">
                        {vehicle.price}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Selected Vehicle Details */}
            <motion.div
              key={selectedVehicle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">
                      {selectedVehicle.category}
                    </Badge>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {selectedVehicle.name}
                    </h3>
                    <p className="text-2xl text-cyan-400 font-semibold mb-4">
                      {selectedVehicle.price}
                    </p>
                    <p className="text-slate-300 text-lg">
                      {selectedVehicle.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Palette className="w-5 h-5 text-cyan-400" />
                      Available Colors
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedVehicle.colors.map((color, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 cursor-pointer"
                        >
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-cyan-400" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedVehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-slate-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25">
                      <Eye className="w-4 h-4 mr-2" />
                      360° View
                    </Button>
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400">
                      <Play className="w-4 h-4 mr-2" />
                      Virtual Tour
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                  <img
                    src={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-black/50 text-white border-0">
                      Interactive
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Showroom Locations */}
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
                Visit Our Showrooms
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Experience NOIR  vehicles in person at our premium showroom locations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {showroomLocations.map((location, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-slate-800/50 border-slate-700 overflow-hidden hover:bg-slate-800/70 transition-colors">
                    <div className="relative">
                      <img
                        src={location.image}
                        alt={`${location.city} Showroom`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">
                          {location.city}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                        {location.city} Showroom
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-300">{location.address}</p>
                      <p className="text-slate-400 text-sm">{location.hours}</p>
                      <Button 
                        variant="outline" 
                        className="w-full border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Visit
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Virtual Experience Features */}
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
                Virtual Experience Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Cutting-edge technology brings our showroom to you
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Eye,
                  title: "360° Views",
                  description: "Explore every angle with immersive 360-degree photography"
                },
                {
                  icon: Palette,
                  title: "Color Configurator",
                  description: "Visualize your vehicle in all available colors and finishes"
                },
                {
                  icon: Settings,
                  title: "Feature Explorer",
                  description: "Interactive hotspots reveal detailed feature information"
                },
                {
                  icon: Play,
                  title: "Virtual Test Drive",
                  description: "Experience driving dynamics through immersive simulation"
                }
              ].map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-slate-800/50 border-slate-700 text-center h-full hover:bg-slate-800/70 transition-colors">
                    <CardHeader>
                      <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
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
              Ready to Experience NOIR ?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Schedule your personalized showroom experience or test drive today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Schedule Test Drive
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Find Showroom
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}