"use client"

import { motion } from "framer-motion"
import { Search, BookOpen, Heart, MessageCircle, Share2, Clock, Calendar, ArrowRight, Users, Star } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const featuredStories = [
    {
        id: "norway-northern-lights",
        title: "Chasing the Northern Lights in Norway",
        author: {
            name: "Sarah Chen",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            location: "San Francisco, CA"
        },
        excerpt: "My journey to witness the aurora borealis in the Norwegian fjords was nothing short of magical. The combination of sustainable travel practices and local community engagement made this experience truly transformative...",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&h=600&fit=crop",
        category: "Adventure",
        readTime: "8 min read",
        publishDate: "Dec 10, 2024",
        likes: 234,
        comments: 45,
        shares: 12,
        featured: true
    },
    {
        id: "patagonia-wilderness",
        title: "Surviving the Patagonian Wilderness",
        author: {
            name: "Marcus Rodriguez",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            location: "Barcelona, Spain"
        },
        excerpt: "Two weeks in the remote wilderness of Patagonia taught me more about myself and our planet than I ever imagined. The raw beauty of untouched landscapes and the importance of conservation became crystal clear...",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
        category: "Wilderness",
        readTime: "12 min read",
        publishDate: "Dec 8, 2024",
        likes: 189,
        comments: 32,
        shares: 8,
        featured: true
    },
    {
        id: "swiss-alps-culture",
        title: "Cultural Immersion in the Swiss Alps",
        author: {
            name: "Emma Thompson",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            location: "London, UK"
        },
        excerpt: "Living with local families in the Swiss Alps gave me a deep appreciation for sustainable mountain living. The traditional practices and community bonds I witnessed were truly inspiring...",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        category: "Cultural",
        readTime: "10 min read",
        publishDate: "Dec 5, 2024",
        likes: 156,
        comments: 28,
        shares: 15,
        featured: true
    }
]

const recentStories = [
    {
        id: "amazon-conservation",
        title: "Conservation Work in the Amazon",
        author: {
            name: "David Kim",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            location: "Seattle, WA"
        },
        excerpt: "Working alongside local conservationists in the Amazon rainforest opened my eyes to the critical importance of protecting our planet's biodiversity...",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        category: "Conservation",
        readTime: "6 min read",
        publishDate: "Dec 12, 2024",
        likes: 98,
        comments: 15,
        shares: 5
    },
    {
        id: "iceland-sustainability",
        title: "Sustainable Living in Iceland",
        author: {
            name: "Lisa Wang",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            location: "Toronto, Canada"
        },
        excerpt: "Iceland's commitment to renewable energy and sustainable practices serves as a model for the world. My time there taught me valuable lessons about environmental responsibility...",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        category: "Sustainability",
        readTime: "7 min read",
        publishDate: "Dec 11, 2024",
        likes: 87,
        comments: 12,
        shares: 3
    },
    {
        id: "new-zealand-adventure",
        title: "Adventure Photography in New Zealand",
        author: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            location: "Melbourne, Australia"
        },
        excerpt: "Capturing the stunning landscapes of New Zealand while learning about Maori culture and environmental conservation was a photographer's dream come true...",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        category: "Photography",
        readTime: "9 min read",
        publishDate: "Dec 9, 2024",
        likes: 134,
        comments: 23,
        shares: 7
    }
]

const categories = [
    { id: "all", name: "All Stories" },
    { id: "adventure", name: "Adventure" },
    { id: "wilderness", name: "Wilderness" },
    { id: "cultural", name: "Cultural" },
    { id: "conservation", name: "Conservation" },
    { id: "sustainability", name: "Sustainability" },
    { id: "photography", name: "Photography" }
]

export default function StoriesPageClient() {
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
                            Travel Stories &amp; Insights
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Discover inspiring stories from our community of eco-travelers and gain insights into sustainable tourism practices
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                <span>500+ Stories</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                <span>Global Community</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="h-4 w-4" />
                                <span>Expert Insights</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Search and Filters */}
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
                                placeholder="Search stories..."
                                className="pl-10"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <Button
                                    key={category.id}
                                    variant="outline"
                                    size="sm"
                                >
                                    {category.name}
                                </Button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Stories */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Featured Stories
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Our most popular and impactful stories from the VoltLux community
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredStories.map((story, index) => (
                            <motion.div
                                key={story.id}
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
                                            src={story.image}
                                            alt={story.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                                            Featured
                                        </Badge>
                                        <div className="absolute bottom-4 left-4">
                                            <Badge variant="secondary" className="bg-background/90 text-foreground">
                                                {story.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardHeader className="pb-4">
                                        <div className="flex items-start gap-3 mb-3">
                                            <img
                                                src={story.author.avatar}
                                                alt={story.author.name}
                                                className="w-10 h-10 rounded-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="flex-1">
                                                <div className="font-semibold text-foreground">{story.author.name}</div>
                                                <div className="text-sm text-muted-foreground">{story.author.location}</div>
                                            </div>
                                        </div>
                                        <CardTitle className="text-xl mb-3">{story.title}</CardTitle>
                                        <CardDescription className="text-base">
                                            {story.excerpt}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        <span>{story.readTime}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>{story.publishDate}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <Heart className="h-4 w-4" />
                                                        <span>{story.likes}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MessageCircle className="h-4 w-4" />
                                                        <span>{story.comments}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Share2 className="h-4 w-4" />
                                                        <span>{story.shares}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <Button asChild className="w-full" variant="outline">
                                                <Link href={`/stories/${story.id}`}>
                                                    Read Full Story
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

            {/* Recent Stories */}
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
                            Recent Stories
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Latest stories from our community of eco-travelers and sustainability advocates
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentStories.map((story, index) => (
                            <motion.div
                                key={story.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                    <div className="relative h-40 overflow-hidden">
                                        <img
                                            src={story.image}
                                            alt={story.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                                            {story.category}
                                        </Badge>
                                    </div>

                                    <CardHeader className="pb-4">
                                        <div className="flex items-start gap-3 mb-3">
                                            <img
                                                src={story.author.avatar}
                                                alt={story.author.name}
                                                className="w-8 h-8 rounded-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm text-foreground">{story.author.name}</div>
                                                <div className="text-xs text-muted-foreground">{story.author.location}</div>
                                            </div>
                                        </div>
                                        <CardTitle className="text-lg mb-2">{story.title}</CardTitle>
                                        <CardDescription className="text-sm">
                                            {story.excerpt}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-3 w-3" />
                                                    <span>{story.readTime}</span>
                                                </div>
                                                <span>{story.publishDate}</span>
                                            </div>

                                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center gap-1">
                                                        <Heart className="h-3 w-3" />
                                                        <span>{story.likes}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MessageCircle className="h-3 w-3" />
                                                        <span>{story.comments}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <Button asChild className="w-full" variant="outline" size="sm">
                                                <Link href={`/stories/${story.id}`}>
                                                    Read More
                                                    <ArrowRight className="ml-2 h-3 w-3" />
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

            {/* Share Your Story CTA */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Share Your Story
                        </h2>
                        <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                            Have an inspiring eco-tourism story to share? Join our community of storytellers and inspire others to travel sustainably
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                                <Link href="/community">
                                    Submit Your Story
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                                <Link href="/community">
                                    Join Community
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
