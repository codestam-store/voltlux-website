"use client"

import { motion } from "framer-motion"
import { Users, Globe, BookOpen, Heart, Star, Calendar, ArrowRight, MessageCircle, Share2 } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const communityStats = [
    {
        icon: Users,
        value: "15,000+",
        label: "Active Members",
        description: "Global community of eco-travelers"
    },
    {
        icon: Globe,
        value: "45+",
        label: "Countries Visited",
        description: "Across all continents"
    },
    {
        icon: BookOpen,
        value: "2,500+",
        label: "Stories Shared",
        description: "Personal travel experiences"
    },
    {
        icon: Heart,
        value: "150+",
        label: "Conservation Projects",
        description: "Community-supported initiatives"
    }
]

const featuredStories = [
    {
        id: "norway-northern-lights",
        title: "Chasing the Northern Lights in Norway",
        author: "Sarah Chen",
        authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        excerpt: "My journey to witness the aurora borealis in the Norwegian fjords was nothing short of magical. The combination of sustainable travel practices and local community engagement made this experience truly transformative...",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&h=600&fit=crop",
        category: "Adventure",
        readTime: "5 min read",
        publishDate: "2 days ago",
        likes: 234,
        comments: 45,
        shares: 12
    },
    {
        id: "patagonia-wilderness",
        title: "Surviving the Patagonian Wilderness",
        author: "Marcus Rodriguez",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        excerpt: "Two weeks in the remote wilderness of Patagonia taught me more about myself and our planet than I ever imagined. The raw beauty of untouched landscapes and the importance of conservation became crystal clear...",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
        category: "Wilderness",
        readTime: "8 min read",
        publishDate: "1 week ago",
        likes: 189,
        comments: 32,
        shares: 8
    },
    {
        id: "swiss-alps-culture",
        title: "Cultural Immersion in the Swiss Alps",
        author: "Emma Thompson",
        authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        excerpt: "Living with local families in the Swiss Alps gave me a deep appreciation for sustainable mountain living. The traditional practices and community bonds I witnessed were truly inspiring...",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        category: "Cultural",
        readTime: "6 min read",
        publishDate: "3 days ago",
        likes: 156,
        comments: 28,
        shares: 15
    }
]

const upcomingEvents = [
    {
        id: "virtual-meetup-1",
        title: "Virtual Meetup: Sustainable Travel Tips",
        type: "Virtual Meetup",
        date: "Dec 15, 2024",
        time: "7:00 PM EST",
        attendees: 45,
        description: "Join fellow eco-travelers for tips on reducing your carbon footprint while traveling.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    },
    {
        id: "photography-workshop",
        title: "Nature Photography Workshop",
        type: "Workshop",
        date: "Dec 20, 2024",
        time: "2:00 PM EST",
        attendees: 28,
        description: "Learn to capture the beauty of nature while respecting wildlife and habitats.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    },
    {
        id: "story-contest",
        title: "Travel Story Contest",
        type: "Contest",
        date: "Jan 5, 2025",
        time: "Ongoing",
        attendees: 120,
        description: "Share your most inspiring eco-tourism story and win amazing prizes.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    }
]

export default function CommunityPageClient() {
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
                            Join Our Community
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Connect with fellow eco-travelers, share experiences, and be part of a global movement for sustainable tourism
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                <span>15,000+ Members</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                <span>45+ Countries</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                <span>2,500+ Stories</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Community Stats */}
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
                            Our Community Impact
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            See how our global community is making a difference in sustainable tourism and conservation
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {communityStats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                                            <stat.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                                        <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                                        <div className="text-sm text-muted-foreground">{stat.description}</div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Stories */}
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
                            Featured Stories
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Inspiring travel stories from our community members around the world
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
                                            {story.category}
                                        </Badge>
                                    </div>

                                    <CardHeader className="pb-4">
                                        <div className="flex items-start gap-3 mb-3">
                                            <img
                                                src={story.authorImage}
                                                alt={story.author}
                                                className="w-10 h-10 rounded-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="flex-1">
                                                <div className="font-semibold text-foreground">{story.author}</div>
                                                <div className="text-sm text-muted-foreground">{story.publishDate}</div>
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
                                                <span>{story.readTime}</span>
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <Heart className="h-4 w-4" />
                                                        <span>{story.likes}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MessageCircle className="h-4 w-4" />
                                                        <span>{story.comments}</span>
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

            {/* Upcoming Events */}
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
                            Upcoming Events
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Join our virtual and in-person events to connect with the community
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {upcomingEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                    <div className="relative h-40 overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                                            {event.type}
                                        </Badge>
                                    </div>

                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-xl mb-3">{event.title}</CardTitle>
                                        <CardDescription className="text-base">
                                            {event.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{event.date}</span>
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {event.attendees} attending
                                                </div>
                                            </div>

                                            <Button asChild className="w-full" variant="outline">
                                                <Link href={`/events/${event.id}`}>
                                                    Join Event
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

            {/* Join Community CTA */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Join Our Community?
                        </h2>
                        <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                            Connect with fellow eco-travelers, share your stories, and be part of a global movement for sustainable tourism
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                                <Link href="/stories">
                                    Share Your Story
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                                <Link href="/contact">
                                    Get Involved
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
