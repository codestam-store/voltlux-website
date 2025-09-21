"use client"

import type { Metadata } from "next"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Camera,
  Heart,
  Award,
  Users,
  Eye,
  Palette,
  Clock,
  Star,
  CheckCircle,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Calendar
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

const values = [
  {
    icon: Heart,
    title: "Authentic Storytelling",
    description: "Every photograph tells a story. We believe in capturing genuine emotions and authentic moments that speak to the soul, creating timeless memories that last generations."
  },
  {
    icon: Eye,
    title: "Artistic Vision",
    description: "Our approach combines technical expertise with artistic vision, drawing inspiration from classic film photography to create images with depth, character, and emotional resonance."
  },
  {
    icon: Award,
    title: "Timeless Quality",
    description: "We are committed to delivering exceptional quality in every frame. Our meticulous attention to detail ensures that each photograph meets the highest standards of artistic excellence."
  },
  {
    icon: Users,
    title: "Personal Connection",
    description: "Building genuine relationships with our clients is at the heart of what we do. We take time to understand your vision and create a comfortable, collaborative environment."
  },
  {
    icon: Palette,
    title: "Classic Aesthetic",
    description: "Specializing in vintage black and white photography, we celebrate the timeless beauty of monochrome imagery and the rich heritage of film photography traditions."
  },
  {
    icon: Clock,
    title: "Patience & Craft",
    description: "Great photography cannot be rushed. We believe in taking the time needed to capture the perfect moment, ensuring every detail contributes to the final artistic vision."
  }
]

const team = [
  {
    name: "Elena Blackwood",
    role: "Founder & Lead Photographer",
    bio: "With over 15 years of experience in film photography, Elena founded Noir Studio to preserve the art of vintage photography in the digital age.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    instagram: "https://instagram.com/elena.blackwood"
  },
  {
    name: "Marcus Sterling",
    role: "Portrait Specialist",
    bio: "Marcus brings a unique perspective to portrait photography, combining classical techniques with contemporary sensibilities to create striking character studies.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    instagram: "https://instagram.com/marcus.sterling"
  },
  {
    name: "Sophia Noir",
    role: "Wedding Photographer",
    bio: "Specializing in intimate wedding photography, Sophia captures the raw emotion and timeless beauty of love stories through her vintage lens.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    instagram: "https://instagram.com/sophia.noir"
  },
  {
    name: "Vincent Grey",
    role: "Commercial Photographer",
    bio: "Vincent&apos;s commercial work bridges the gap between artistic vision and brand storytelling, creating compelling imagery for businesses and publications.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    instagram: "https://instagram.com/vincent.grey"
  }
]

const achievements = [
  { metric: "1000+", label: "Sessions Captured", icon: Camera },
  { metric: "500+", label: "Happy Clients", icon: Heart },
  { metric: "50+", label: "Awards Won", icon: Award },
  { metric: "15+", label: "Years Experience", icon: Clock },
  { metric: "99%", label: "Client Satisfaction", icon: Star },
  { metric: "24/7", label: "Support Available", icon: CheckCircle }
]

const services = [
  { name: "Portrait Sessions", icon: Users, description: "Individual and family portraits with vintage charm" },
  { name: "Wedding Photography", icon: Heart, description: "Timeless wedding documentation in classic style" },
  { name: "Commercial Shoots", icon: Camera, description: "Professional imagery for brands and publications" },
  { name: "Fine Art Prints", icon: Palette, description: "Museum-quality prints and custom framing" },
  { name: "Film Development", icon: Eye, description: "Traditional darkroom processing and restoration" },
  { name: "Photography Workshops", icon: Award, description: "Learn the art of vintage film photography" }
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
        <div 
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://www.razaqvance.com/wp-content/uploads/2014/01/IMG_5632-copy-2.jpg" 
            alt="Classic portrait photography session"
            className="w-full h-full object-cover grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm tracking-wider uppercase">
                <Camera className="w-4 h-4 mr-2" />
                About Our Studio
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-tight tracking-tight"
              variants={fadeInUp}
            >
              Preserving Moments in
              <span className="block text-primary typewriter-effect">
                Timeless Elegance
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Noir Studio is dedicated to the art of vintage film photography, where every frame tells a story
              and every moment is captured with the timeless beauty of classic black and white imagery.
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
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div 
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="px-3 py-1 vintage-border">
                  Our Story
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
                  Where Art Meets Memory
                </h2>
                <p className="text-lg text-muted-foreground">
                  Founded in 2010, Noir Studio emerged from a passion for preserving the authentic beauty
                  of film photography in an increasingly digital world. We believe that true artistry lies
                  in the patience, craft, and soul that goes into every frame.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 vintage-border">
                    <Heart className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Passion for Authenticity</h3>
                    <p className="text-muted-foreground">
                      We believe in capturing genuine emotions and authentic moments that speak to the soul,
                      creating timeless memories that transcend generations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 vintage-border">
                    <Eye className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Artistic Vision</h3>
                    <p className="text-muted-foreground">
                      Our approach combines technical mastery with artistic vision, drawing inspiration from
                      the golden age of photography to create images with depth and character.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 vintage-border">
                    <Award className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Timeless Quality</h3>
                    <p className="text-muted-foreground">
                      Every photograph is crafted with meticulous attention to detail, ensuring that each
                      image meets the highest standards of artistic excellence and technical precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl vintage-border retro-shadow">
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-foreground to-muted-foreground rounded-2xl flex items-center justify-center mx-auto">
                      <Camera className="w-8 h-8 text-background" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Philosophy</h3>
                    <p className="text-muted-foreground">
                      &quot;Photography is not about the camera, it&apos;s about the eye behind it. We see beauty
                      in the shadows, poetry in the light, and stories in every frame.&quot;
                    </p>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">2010</div>
                      <div className="text-sm text-muted-foreground">Studio Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">Film</div>
                      <div className="text-sm text-muted-foreground">Only Medium</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-foreground/20 to-muted-foreground/20 rounded-2xl blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-muted-foreground/20 to-foreground/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1 vintage-border">
              Our Values
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              What Guides Our Craft
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles shape every aspect of our work, from the initial consultation
              to the final print delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 vintage-border retro-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 vintage-border">
                    <value.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1 vintage-border">
              Our Artists
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              Meet the Creative Minds
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of passionate photographers brings decades of combined experience
              in the art of vintage film photography.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 vintage-border retro-shadow">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto vintage-border retro-shadow"
                    />
                    <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-transparent to-foreground/20 mx-auto"></div>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-muted-foreground">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <Button variant="outline" size="sm" asChild className="vintage-border">
                    <Link href={member.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4 mr-2" />
                      Follow
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1 vintage-border">
              Our Impact
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              Years of Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These numbers represent more than statistics—they represent relationships built,
              memories preserved, and artistic visions realized.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 vintage-border retro-shadow">
                  <achievement.icon className="w-8 h-8 text-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{achievement.metric}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1 vintage-border">
              What We Offer
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              Our Photography Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intimate portraits to grand celebrations, we offer a comprehensive range
              of photography services, all captured with vintage film techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 vintage-border retro-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 vintage-border">
                    <service.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="vintage-border">
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              Ready to Create Something Timeless?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let&apos;s discuss your vision and create photographs that will be treasured for generations.
              Every great photograph begins with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="vintage-border">
                <Link href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="vintage-border">
                <Link href="/schedule">
                  Book a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}