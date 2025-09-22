"use client"

import { motion } from "framer-motion"
import { Mountain, Compass, MapPin, Users, Star, Clock, DollarSign, ArrowRight, TreePine, Waves, Tent, Camera } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const adventureTypes = [
  {
    id: "mountain-expeditions",
    title: "Mountain Expeditions",
    icon: Mountain,
    description: "Summit peaks and traverse alpine landscapes with expert guides",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    difficulty: "Challenging",
    duration: "7-14 days",
    price: "From $2,800",
    features: ["Expert guides", "Safety equipment", "Accommodation", "Meals included", "Transportation", "Permits"],
    destinations: ["Swiss Alps", "Norwegian Fjords", "Patagonia", "New Zealand"],
    highlights: ["Peak summiting", "Alpine camping", "Technical climbing", "Mountain safety training"]
  },
  {
    id: "wilderness-trekking",
    title: "Wilderness Trekking",
    icon: TreePine,
    description: "Explore remote trails and connect with nature on foot",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
    difficulty: "Moderate",
    duration: "5-12 days",
    price: "From $1,600",
    features: ["Guided tours", "Camping gear", "Local guides", "Cultural insights", "Wildlife spotting", "Navigation training"],
    destinations: ["Patagonia", "Iceland", "Amazon Rainforest", "Scottish Highlands"],
    highlights: ["Remote hiking", "Wildlife encounters", "Survival skills", "Natural navigation"]
  },
  {
    id: "cultural-immersion",
    title: "Cultural Immersion",
    icon: Users,
    description: "Experience local traditions and sustainable community tourism",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    difficulty: "Easy",
    duration: "4-10 days",
    price: "From $1,200",
    features: ["Local hosts", "Traditional meals", "Cultural activities", "Community support", "Language basics", "Handicraft workshops"],
    destinations: ["Morocco", "Thailand", "Peru", "Kenya"],
    highlights: ["Local homestays", "Traditional crafts", "Cultural ceremonies", "Community projects"]
  },
  {
    id: "wildlife-safaris",
    title: "Wildlife Safaris",
    icon: Camera,
    description: "Observe wildlife in their natural habitats with conservation focus",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    difficulty: "Easy",
    duration: "6-12 days",
    price: "From $2,100",
    features: ["Expert guides", "Conservation education", "Photography tips", "Luxury lodges", "Game drives", "Research participation"],
    destinations: ["Kenya", "Tanzania", "Botswana", "Costa Rica"],
    highlights: ["Big Five viewing", "Conservation talks", "Photography workshops", "Research participation"]
  },
  {
    id: "water-adventures",
    title: "Water Adventures",
    icon: Waves,
    description: "Explore marine environments and coastal ecosystems",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    difficulty: "Moderate",
    duration: "5-10 days",
    price: "From $1,800",
    features: ["Marine guides", "Safety equipment", "Snorkeling gear", "Boat transportation", "Marine biology education", "Conservation activities"],
    destinations: ["Galapagos", "Great Barrier Reef", "Maldives", "Costa Rica"],
    highlights: ["Marine life encounters", "Coral reef exploration", "Conservation diving", "Island hopping"]
  },
  {
    id: "eco-retreats",
    title: "Eco Retreats",
    icon: Tent,
    description: "Mindful experiences combining adventure with wellness and sustainability",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    difficulty: "Easy",
    duration: "3-7 days",
    price: "From $900",
    features: ["Wellness activities", "Sustainable accommodation", "Organic meals", "Mindfulness sessions", "Nature walks", "Yoga classes"],
    destinations: ["Bali", "Costa Rica", "Swiss Alps", "New Zealand"],
    highlights: ["Wellness workshops", "Mindful hiking", "Sustainable living", "Nature meditation"]
  }
]

const featuredAdventures = [
  {
    id: "norwegian-fjords-expedition",
    title: "Norwegian Fjords Expedition",
    type: "Mountain Expeditions",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&h=600&fit=crop",
    rating: 4.9,
    duration: "8 days",
    price: "From $2,400",
    difficulty: "Moderate",
    badge: "Popular",
    description: "Sail through pristine fjords and witness the Northern Lights in this unforgettable mountain expedition."
  },
  {
    id: "patagonia-wilderness-trek",
    title: "Patagonia Wilderness Trek",
    type: "Wilderness Trekking",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
    rating: 4.8,
    duration: "12 days",
    price: "From $3,200",
    difficulty: "Challenging",
    badge: "New",
    description: "Trek through untouched landscapes and ancient glaciers in one of the world's most remote wilderness areas."
  },
  {
    id: "moroccan-cultural-journey",
    title: "Moroccan Cultural Journey",
    type: "Cultural Immersion",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    rating: 4.7,
    duration: "7 days",
    price: "From $1,500",
    difficulty: "Easy",
    badge: "Featured",
    description: "Immerse yourself in Moroccan culture through traditional crafts, local cuisine, and community experiences."
  }
]

export default function AdventuresPageClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Choose Your Adventure
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From mountain expeditions to cultural immersion, discover sustainable travel experiences designed to connect you with nature and local communities
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mountain className="h-4 w-4" />
                <span>6 Adventure Types</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4" />
                <span>Global Destinations</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>4.8+ Average Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Adventure Types Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="mountain-expeditions" className="w-full">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Types of Adventures
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our diverse range of eco-tourism experiences, each designed to provide unique connections with nature and local communities
              </p>
            </motion.div>

            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12">
              {adventureTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id} className="flex items-center gap-2">
                  <type.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{type.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {adventureTypes.map((type) => (
              <TabsContent key={type.id} value={type.id} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">{type.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{type.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{type.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Price:</span>
                        <span className="font-medium">{type.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mountain className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Difficulty:</span>
                        <Badge variant="outline" className="text-xs">
                          {type.difficulty}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">What&apos;s Included:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {type.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 space-y-4">
                      <h4 className="font-semibold text-foreground">Popular Destinations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.destinations.map((destination) => (
                          <Badge key={destination} variant="secondary">
                            {destination}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="mt-8">
                      <Link href={`/adventures/${type.id}`}>
                        Explore {type.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="relative">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Adventures */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Featured Adventures
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular and highly-rated adventures that combine exceptional experiences with sustainable practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAdventures.map((adventure, index) => (
              <motion.div
                key={adventure.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg group-hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={adventure.image}
                      alt={adventure.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {adventure.badge}
                    </Badge>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-background/90 text-foreground">
                        {adventure.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{adventure.title}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{adventure.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {adventure.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{adventure.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          <span>{adventure.price}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Difficulty:</span>
                        <Badge variant="outline" className="text-xs">
                          {adventure.difficulty}
                        </Badge>
                      </div>
                      
                      <Button asChild className="w-full" variant="outline">
                        <Link href={`/adventures/${adventure.id}`}>
                          View Details
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

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of travelers who have discovered the transformative power of eco-tourism with NOIR 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/destinations">
                  Browse Destinations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/contact">
                  Get Expert Advice
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
