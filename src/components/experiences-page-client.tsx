"use client"

import { motion } from "framer-motion"
import { Search, Camera, Leaf, Users, Star, Clock, DollarSign, ArrowRight, MapPin, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const experiences = [
    {
        id: "wildlife-photography",
        title: "Wildlife Photography Expedition",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: 4.9,
        description: "Capture stunning wildlife moments in their natural habitat with expert photography guidance.",
        duration: "5 days",
        price: "From $1,800",
        difficulty: "Moderate",
        groupSize: "6-8 people",
        highlights: ["Expert photography guidance", "Wildlife encounters", "Conservation education", "Professional equipment"],
        location: "Kenya, Africa"
    },
    {
        id: "marine-conservation",
        title: "Marine Conservation Project",
        category: "Conservation",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: 4.8,
        description: "Participate in hands-on marine conservation efforts and learn about ocean ecosystems.",
        duration: "7 days",
        price: "From $2,200",
        difficulty: "Easy",
        groupSize: "4-6 people",
        highlights: ["Coral reef restoration", "Marine biology education", "Snorkeling adventures", "Research participation"],
        location: "Great Barrier Reef, Australia"
    },
    {
        id: "indigenous-culture",
        title: "Indigenous Cultural Immersion",
        category: "Cultural",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: 4.7,
        description: "Experience authentic indigenous cultures and learn traditional practices from local communities.",
        duration: "6 days",
        price: "From $1,600",
        difficulty: "Easy",
        groupSize: "8-10 people",
        highlights: ["Traditional ceremonies", "Local crafts", "Cultural storytelling", "Community support"],
        location: "Peru, South America"
    },
    {
        id: "climate-research",
        title: "Climate Research Expedition",
        category: "Science",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: 4.6,
        description: "Contribute to climate research while exploring remote scientific stations and collecting data.",
        duration: "10 days",
        price: "From $3,500",
        difficulty: "Challenging",
        groupSize: "4-6 people",
        highlights: ["Scientific research", "Data collection", "Expert guidance", "Remote locations"],
        location: "Arctic Circle"
    },
    {
        id: "sustainable-farming",
        title: "Sustainable Farming Experience",
        category: "Cultural",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: 4.5,
        description: "Learn sustainable farming practices and organic agriculture from local farmers.",
        duration: "4 days",
        price: "From $1,200",
        difficulty: "Easy",
        groupSize: "6-8 people",
        highlights: ["Organic farming", "Local cuisine", "Rural life", "Environmental education"],
        location: "Tuscany, Italy"
    },
    {
        id: "forest-restoration",
        title: "Forest Restoration Project",
        category: "Conservation",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: 4.7,
        description: "Help restore native forests and learn about reforestation techniques and biodiversity.",
        duration: "5 days",
        price: "From $1,500",
        difficulty: "Moderate",
        groupSize: "8-12 people",
        highlights: ["Tree planting", "Forest ecology", "Biodiversity monitoring", "Conservation education"],
        location: "Costa Rica"
    }
]

const categories = [
    { id: "all", name: "All Experiences", icon: Search },
    { id: "photography", name: "Photography", icon: Camera },
    { id: "conservation", name: "Conservation", icon: Leaf },
    { id: "cultural", name: "Cultural", icon: Users },
    { id: "science", name: "Science", icon: Star }
]

const benefits = [
    {
        icon: Users,
        title: "Small Groups",
        description: "Intimate experiences with limited group sizes for personalized attention and deeper connections."
    },
    {
        icon: Leaf,
        title: "Sustainable Impact",
        description: "Every experience contributes to conservation efforts and supports local communities."
    },
    {
        icon: Star,
        title: "Expert Guidance",
        description: "Learn from professionals and local experts who are passionate about their fields."
    },
    {
        icon: MapPin,
        title: "Unique Access",
        description: "Access to exclusive locations and experiences not available to regular tourists."
    }
]

export default function ExperiencesPageClient() {
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
                            Unique Experiences
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Immerse yourself in transformative experiences that combine adventure with meaningful impact and learning
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Camera className="h-4 w-4" />
                                <span>Photography</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Leaf className="h-4 w-4" />
                                <span>Conservation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                <span>Cultural</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="h-4 w-4" />
                                <span>Science</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Categories */}
            <section className="py-8 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant="outline"
                                className="flex items-center gap-2"
                            >
                                <category.icon className="h-4 w-4" />
                                {category.name}
                            </Button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Experiences Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={experience.id}
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
                                            src={experience.image}
                                            alt={experience.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                                            {experience.category}
                                        </Badge>
                                        <div className="absolute bottom-4 left-4">
                                            <Badge variant="secondary" className="bg-background/90 text-foreground">
                                                {experience.location}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardHeader className="pb-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <CardTitle className="text-xl">{experience.title}</CardTitle>
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                <span className="text-sm font-medium">{experience.rating}</span>
                                            </div>
                                        </div>
                                        <CardDescription className="text-base">
                                            {experience.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <Clock className="h-4 w-4" />
                                                    <span>{experience.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <DollarSign className="h-4 w-4" />
                                                    <span>{experience.price}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between text-sm">
                                                <div className="space-y-1">
                                                    <div className="text-muted-foreground">Difficulty</div>
                                                    <Badge variant="outline" className="text-xs">
                                                        {experience.difficulty}
                                                    </Badge>
                                                </div>
                                                <div className="space-y-1 text-right">
                                                    <div className="text-muted-foreground">Group Size</div>
                                                    <div className="text-sm font-medium">{experience.groupSize}</div>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="text-sm font-medium text-foreground">Highlights:</div>
                                                <div className="grid grid-cols-2 gap-1">
                                                    {experience.highlights.slice(0, 4).map((highlight) => (
                                                        <div key={highlight} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                            {highlight}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <Button asChild className="w-full" variant="outline">
                                                <Link href={`/experiences/${experience.id}`}>
                                                    View Details
                                                    <ArrowRight className="ml-2 h-4 w-4" />
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

            {/* Why Choose Experiences */}
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
                            Why Choose Our Experiences?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Our unique experiences go beyond traditional tourism to provide meaningful, educational, and impactful adventures
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                    <CardContent className="p-6">
                                        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                                            <benefit.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-semibold mb-3 text-foreground">{benefit.title}</h3>
                                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
                            Ready for a Transformative Experience?
                        </h2>
                        <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                            Join us for unique experiences that combine adventure with meaningful impact and lifelong learning
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                                <Link href="/contact">
                                    Book an Experience
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                                <Link href="/destinations">
                                    Explore Destinations
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
