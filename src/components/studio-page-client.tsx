"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, MapPin, Clock, Users, Award, Star, Calendar, Phone, Mail, Instagram, Play, Eye, Palette, Settings, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const studioSpaces = [
  {
    id: 1,
    name: "Classic Portrait Studio",
    category: "Portrait Photography",
    size: "800 sq ft",
    image: "https://www.razaqvance.com/wp-content/uploads/2014/01/IMG_5632-copy-2.jpg",
    features: ["Professional Lighting", "Vintage Backdrops", "Props Collection", "Makeup Station"],
    description: "Timeless portrait photography with classic film aesthetics and vintage charm.",
    equipment: ["Hasselblad Medium Format", "Leica Film Cameras", "Professional Strobes", "Vintage Lenses"]
  },
  {
    id: 2,
    name: "Fashion & Editorial Studio",
    category: "Fashion Photography",
    size: "1200 sq ft",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&crop=center",
    features: ["Cyclorama Wall", "High-End Lighting", "Wardrobe Area", "Hair & Makeup"],
    description: "Professional fashion photography studio with editorial-grade equipment and styling.",
    equipment: ["Phase One Digital Back", "Profoto Lighting", "Broncolor Strobes", "Fashion Accessories"]
  },
  {
    id: 3,
    name: "Film Development Lab",
    category: "Film Processing",
    size: "400 sq ft",
    image: "https://www.filmmaker.tools/wp-content/uploads/sites/16/film-production-stages-930x620.jpg",
    features: ["Darkroom Equipment", "Chemical Processing", "Enlargers", "Print Finishing"],
    description: "Traditional film development and printing lab for authentic analog photography.",
    equipment: ["Jobo Processors", "Durst Enlargers", "Chemical Baths", "Print Dryers"]
  }
]

const studioServices = [
  {
    title: "Portrait Sessions",
    description: "Classic black & white and vintage color portraits",
    price: "From $350",
    duration: "2 hours",
    icon: Users,
    features: ["Professional styling", "Multiple outfit changes", "Retouched images", "Print options"]
  },
  {
    title: "Wedding Photography",
    description: "Timeless wedding documentation with film aesthetics",
    price: "From $2,500",
    duration: "Full day",
    icon: Camera,
    features: ["Engagement session", "Wedding day coverage", "Film + digital", "Custom album"]
  },
  {
    title: "Fashion Shoots",
    description: "Editorial and commercial fashion photography",
    price: "From $1,200",
    duration: "4 hours",
    icon: Star,
    features: ["Creative direction", "Professional team", "Location options", "High-res delivery"]
  },
  {
    title: "Film Development",
    description: "Professional film processing and printing",
    price: "From $25",
    duration: "Same day",
    icon: Settings,
    features: ["35mm & medium format", "Push/pull processing", "Contact sheets", "Fine art prints"]
  }
]

const studioTeam = [
  {
    name: "Marcus Noir",
    role: "Lead Photographer & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "20+ years of experience in film photography and vintage aesthetics",
    specialties: ["Portrait Photography", "Film Development", "Vintage Techniques"]
  },
  {
    name: "Elena Vintage",
    role: "Fashion & Editorial Photographer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    bio: "Award-winning fashion photographer specializing in editorial work",
    specialties: ["Fashion Photography", "Editorial Shoots", "Creative Direction"]
  },
  {
    name: "James Classic",
    role: "Wedding & Event Photographer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Capturing timeless moments with authentic film photography",
    specialties: ["Wedding Photography", "Event Coverage", "Documentary Style"]
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

export default function StudioPageClient() {
  const [selectedStudio, setSelectedStudio] = useState(studioSpaces[0])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
        <motion.div 
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&crop=center" 
            alt="Professional commercial photography studio"
            className="w-full h-full object-cover grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm tracking-wider uppercase">
              Photography Studio
            </Badge>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-tight tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              NOIR
              <span className="block text-primary typewriter-effect">Studio</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Where timeless photography meets vintage aesthetics. Experience the art of film photography 
              in our professional studio spaces designed for creating lasting memories.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
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

      {/* Studio Spaces */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Studio Spaces
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional photography studios equipped with vintage and modern equipment
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {studioSpaces.map((studio) => (
                <motion.div key={studio.id} variants={itemVariants}>
                  <Card 
                    className={`cursor-pointer transition-all duration-300 vintage-border ${
                      selectedStudio.id === studio.id 
                        ? 'bg-accent border-primary shadow-lg' 
                        : 'hover:bg-accent/50'
                    }`}
                    onClick={() => setSelectedStudio(studio)}
                  >
                    <CardHeader>
                      <img
                        src={studio.image}
                        alt={studio.name}
                        className="w-full h-48 object-cover rounded-lg mb-4 vintage-filter"
                      />
                      <Badge className="w-fit bg-primary/10 text-primary border-primary/20">
                        {studio.category}
                      </Badge>
                      <CardTitle className="text-foreground">{studio.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {studio.size}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Selected Studio Details */}
            <motion.div
              key={selectedStudio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-muted/30 rounded-2xl p-8 border border-border vintage-border"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <Badge className="mb-4 bg-primary text-primary-foreground border-0">
                      {selectedStudio.category}
                    </Badge>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {selectedStudio.name}
                    </h3>
                    <p className="text-2xl text-primary font-semibold mb-4">
                      {selectedStudio.size}
                    </p>
                    <p className="text-muted-foreground text-lg">
                      {selectedStudio.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-primary" />
                      Studio Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedStudio.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Camera className="w-5 h-5 text-primary" />
                      Equipment Available
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedStudio.equipment.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 retro-shadow">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Studio
                    </Button>
                    <Button variant="outline" className="retro-shadow">
                      <Play className="w-4 h-4 mr-2" />
                      Virtual Tour
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl" />
                  <img
                    src={selectedStudio.image}
                    alt={selectedStudio.name}
                    className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl vintage-filter"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-background/80 text-foreground border-0">
                      Professional
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Photography Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional photography services with vintage film aesthetics
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {studioServices.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full vintage-border hover:bg-accent/50 transition-colors">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-foreground">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{service.price}</p>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button className="w-full retro-shadow" variant="outline">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Passionate photographers dedicated to capturing timeless moments
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {studioTeam.map((member, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center vintage-border hover:bg-accent/50 transition-colors">
                    <CardHeader>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 mx-auto rounded-full object-cover mb-4 vintage-filter"
                      />
                      <CardTitle className="text-foreground">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground text-sm">Specialties:</h4>
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs mr-1">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Visit Our Studio
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Located in the heart of the creative district
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants}>
                <Card className="vintage-border">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Studio Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Address</h4>
                      <p className="text-muted-foreground">
                        123 Vintage Avenue<br />
                        Creative District<br />
                        New York, NY 10001
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        Studio Hours
                      </h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 10:00 AM - 6:00 PM</p>
                        <p>Sunday: By appointment only</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Button className="w-full retro-shadow">
                        <Phone className="w-4 h-4 mr-2" />
                        Call: (555) 123-4567
                      </Button>
                      <Button variant="outline" className="w-full retro-shadow">
                        <Mail className="w-4 h-4 mr-2" />
                        Email: hello@noirstudio.com
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="relative h-96 rounded-2xl overflow-hidden vintage-border">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center"
                    alt="Studio Exterior"
                    className="w-full h-full object-cover vintage-filter"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      NOIR Studio Building
                    </h3>
                    <p className="text-muted-foreground">
                      A historic building transformed into a modern photography studio
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}