"use client"

import { motion } from "framer-motion"
import { Search, MapPin, Star, Clock, DollarSign, ArrowRight, Filter, Globe } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const destinations = [
    {
        id: "norwegian-fjords",
        name: "Norwegian Fjords",
        country: "Norway",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&h=600&fit=crop",
        rating: 4.9,
        description: "Sail through pristine fjords and witness the Northern Lights in this breathtaking Nordic landscape.",
        duration: "8 days",
        price: "From $2,400",
        difficulty: "Moderate",
        bestTime: "May-Sep",
        category: "Mountains",
        region: "Europe"
    },
    {
        id: "patagonia-wilderness",
        name: "Patagonian Wilderness",
        country: "Chile & Argentina",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
        rating: 4.8,
        description: "Trek through untouched landscapes and ancient glaciers in one of the world's most remote wilderness areas.",
        duration: "12 days",
        price: "From $3,200",
        difficulty: "Challenging",
        bestTime: "Nov-Mar",
        category: "Wilderness",
        region: "South America"
    },
    {
        id: "swiss-alps",
        name: "Swiss Alpine Trails",
        country: "Switzerland",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: 4.7,
        description: "Hike through flower-filled meadows and snow-capped peaks in the heart of the European Alps.",
        duration: "6 days",
        price: "From $1,800",
        difficulty: "Moderate",
        bestTime: "Jun-Sep",
        category: "Mountains",
        region: "Europe"
    },
    {
        id: "iceland-northern-lights",
        name: "Iceland Northern Lights",
        country: "Iceland",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: 4.6,
        description: "Experience the magical aurora borealis and explore Iceland's dramatic volcanic landscapes.",
        duration: "7 days",
        price: "From $2,100",
        difficulty: "Easy",
        bestTime: "Sep-Mar",
        category: "Wilderness",
        region: "Europe"
    },
    {
        id: "amazon-rainforest",
        name: "Amazon Rainforest",
        country: "Brazil",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: 4.5,
        description: "Immerse yourself in the world's largest rainforest and discover incredible biodiversity.",
        duration: "10 days",
        price: "From $2,800",
        difficulty: "Moderate",
        bestTime: "Jun-Nov",
        category: "Wilderness",
        region: "South America"
    },
    {
        id: "new-zealand-adventure",
        name: "New Zealand Adventure",
        country: "New Zealand",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: 4.8,
        description: "Explore the diverse landscapes of Middle Earth, from fjords to mountains to pristine beaches.",
        duration: "14 days",
        price: "From $3,500",
        difficulty: "Moderate",
        bestTime: "Oct-Apr",
        category: "Mountains",
        region: "Oceania"
    }
]

export default function DestinationsPageClient() {
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
                            Explore Our Destinations
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Discover handpicked eco-tourism destinations that offer the perfect blend of adventure, sustainability, and natural beauty
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                <span>6 Continents</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="h-4 w-4" />
                                <span>4.7+ Average Rating</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>20+ Destinations</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="py-8 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row gap-4 items-center"
                    >
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search destinations..."
                                className="pl-10"
                            />
                        </div>

                        <Select>
                            <SelectTrigger className="w-full md:w-48">
                                <Filter className="mr-2 h-4 w-4" />
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                <SelectItem value="mountains">Mountains</SelectItem>
                                <SelectItem value="wilderness">Wilderness</SelectItem>
                                <SelectItem value="coastal">Coastal</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-full md:w-48">
                                <Globe className="mr-2 h-4 w-4" />
                                <SelectValue placeholder="Region" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Regions</SelectItem>
                                <SelectItem value="europe">Europe</SelectItem>
                                <SelectItem value="south-america">South America</SelectItem>
                                <SelectItem value="oceania">Oceania</SelectItem>
                                <SelectItem value="africa">Africa</SelectItem>
                                <SelectItem value="asia">Asia</SelectItem>
                                <SelectItem value="north-america">North America</SelectItem>
                            </SelectContent>
                        </Select>
                    </motion.div>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((destination, index) => (
                            <motion.div
                                key={destination.id}
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
                                            src={destination.image}
                                            alt={destination.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <Badge variant="secondary" className="bg-background/90 text-foreground">
                                                {destination.category}
                                            </Badge>
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            <Badge className="bg-primary text-primary-foreground">
                                                {destination.region}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardHeader className="pb-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <CardTitle className="text-xl">{destination.name}</CardTitle>
                                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                    <MapPin className="h-3 w-3" />
                                                    <span>{destination.country}</span>
                                                </div>
                                            </div>
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
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <Clock className="h-4 w-4" />
                                                    <span>{destination.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <DollarSign className="h-4 w-4" />
                                                    <span>{destination.price}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <div className="text-sm text-muted-foreground">Difficulty</div>
                                                    <Badge variant="outline" className="text-xs">
                                                        {destination.difficulty}
                                                    </Badge>
                                                </div>
                                                <div className="space-y-1 text-right">
                                                    <div className="text-sm text-muted-foreground">Best Time</div>
                                                    <div className="text-sm font-medium">{destination.bestTime}</div>
                                                </div>
                                            </div>

                                            <Button asChild className="w-full" variant="outline">
                                                <Link href={`/destinations/${destination.id}`}>
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
                            Need Help Choosing?
                        </h2>
                        <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                            Our eco-tourism experts are here to help you find the perfect destination for your next sustainable adventure
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                                <Link href="/contact">
                                    Get Expert Advice
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                                <Link href="/adventures">
                                    Browse All Adventures
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
