"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Mountain, Compass, Users, Star, Leaf, Globe } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredDestinations = [
  {
    name: "Norwegian Fjords",
    description: "Sail through pristine fjords and witness the Northern Lights",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&h=600&fit=crop",
    rating: 4.9,
    duration: "8 days",
    price: "From $2,400",
    badge: "Popular"
  },
  {
    name: "Patagonian Wilderness",
    description: "Trek through untouched landscapes and ancient glaciers",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
    rating: 4.8,
    duration: "12 days",
    price: "From $3,200",
    badge: "New"
  },
  {
    name: "Swiss Alpine Trails",
    description: "Hike through flower-filled meadows and snow-capped peaks",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    rating: 4.7,
    duration: "6 days",
    price: "From $1,800",
    badge: "Featured"
  }
]

const adventureTypes = [
  {
    icon: Mountain,
    title: "Mountain Expeditions",
    description: "Summit peaks and traverse alpine landscapes with expert guides",
    features: ["Expert guides", "Safety equipment", "Accommodation", "Meals included"]
  },
  {
    icon: Compass,
    title: "Wilderness Trekking",
    description: "Explore remote trails and connect with nature on foot",
    features: ["Guided tours", "Camping gear", "Local guides", "Cultural insights"]
  },
  {
    icon: MapPin,
    title: "Cultural Immersion",
    description: "Experience local traditions and sustainable community tourism",
    features: ["Local hosts", "Traditional meals", "Cultural activities", "Community support"]
  }
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Adventure Photographer",
    content: "Wanderlust transformed my perspective on travel. The Norwegian fjords expedition was not just a trip—it was a life-changing experience that deepened my connection with nature.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "Environmental Scientist",
    content: "As someone who studies ecosystems, I was impressed by Wanderlust&apos;s commitment to sustainability. The Patagonia trek was both educational and breathtaking.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emma Thompson",
    role: "Yoga Instructor",
    content: "The mindfulness retreat in the Swiss Alps was exactly what I needed. Perfect balance of adventure and tranquility, with incredible attention to eco-friendly practices.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
]

export default function HomePageClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
            alt="Mountain landscape at sunset"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover Your
            <span className="block text-primary-foreground">Wild Adventure</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Embark on transformative eco-tourism journeys that connect you with pristine landscapes and sustainable adventures
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/destinations">
                Explore Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
              <Link href="/stories">
                Read Stories
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our handpicked destinations that offer the perfect blend of adventure, sustainability, and natural beauty
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {destination.badge}
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{destination.name}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{destination.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {destination.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {destination.duration} • {destination.price}
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Types of Adventures
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our diverse range of eco-tourism experiences designed to connect you with nature and local communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {adventureTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <type.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-3">{type.title}</CardTitle>
                    <CardDescription className="text-base">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full mt-6" variant="outline">
                      <Link href="/adventures">
                        Explore {type.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from adventurers who have experienced the transformative power of eco-tourism with Wanderlust
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg mb-6 text-muted-foreground italic">
                      &quot;{testimonial.content}&quot;
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Commitment Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Committed to Sustainable Tourism
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We believe in preserving the natural beauty of our destinations for future generations through responsible travel practices.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Carbon Neutral Operations</h3>
                    <p className="text-muted-foreground">All our trips are carbon-neutral, with investments in renewable energy projects.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Community Partnership</h3>
                    <p className="text-muted-foreground">We work directly with local communities to ensure tourism benefits everyone.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Wildlife Protection</h3>
                    <p className="text-muted-foreground">Our tours respect wildlife habitats and support conservation efforts.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
                alt="Sustainable forest landscape"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of travelers who have discovered the transformative power of eco-tourism with Wanderlust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/destinations">
                  Start Planning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
