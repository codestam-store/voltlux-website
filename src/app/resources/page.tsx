import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    ArrowRight,
    BookOpen,
    Download,
    Search,
    Calendar,
    User,
    Clock,
    Play,
    ExternalLink
} from "lucide-react";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
    title: "Resources",
    description: "Access our comprehensive library of digital transformation resources including whitepapers, case studies, webinars, and industry insights.",
    openGraph: {
        title: "Resources | NexusFlow",
        description: "Expert insights, case studies, and educational content to help you navigate digital transformation.",
    },
};

const blogPosts = [
    {
        title: "The Future of AI in Digital Transformation",
        excerpt: "Discover how artificial intelligence is reshaping business processes and creating new opportunities for growth.",
        author: "Sarah Johnson",
        date: "March 15, 2024",
        readTime: "5 min read",
        category: "AI & Machine Learning",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        featured: true
    },
    {
        title: "Building Scalable Cloud Infrastructure",
        excerpt: "Learn the best practices for designing and implementing cloud-native applications that scale with your business.",
        author: "Michael Chen",
        date: "March 12, 2024",
        readTime: "7 min read",
        category: "Cloud Solutions",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
        featured: false
    },
    {
        title: "Cybersecurity Trends for 2024",
        excerpt: "Stay ahead of emerging threats with our comprehensive guide to cybersecurity best practices and trends.",
        author: "David Rodriguez",
        date: "March 10, 2024",
        readTime: "6 min read",
        category: "Cybersecurity",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
        featured: false
    },
    {
        title: "Digital Transformation Success Stories",
        excerpt: "Real-world examples of companies that successfully transformed their operations and achieved remarkable results.",
        author: "Emily Watson",
        date: "March 8, 2024",
        readTime: "8 min read",
        category: "Digital Transformation",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
        featured: false
    },
    {
        title: "Performance Optimization Strategies",
        excerpt: "Proven techniques for optimizing your applications and systems for maximum performance and user experience.",
        author: "Alex Thompson",
        date: "March 5, 2024",
        readTime: "4 min read",
        category: "Performance",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        featured: false
    },
    {
        title: "Web Development Best Practices",
        excerpt: "Modern web development techniques and tools that help you build better, faster, and more maintainable applications.",
        author: "Lisa Park",
        date: "March 3, 2024",
        readTime: "9 min read",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        featured: false
    }
];

const caseStudies = [
    {
        title: "FinTech Solutions: 40% Efficiency Increase",
        company: "FinTech Solutions Inc.",
        industry: "Financial Services",
        results: ["40% increase in operational efficiency", "60% reduction in processing time", "Improved compliance accuracy"],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
    },
    {
        title: "MedCare Systems: Digital Health Transformation",
        company: "MedCare Systems",
        industry: "Healthcare",
        results: ["60% reduction in patient wait times", "Enhanced patient satisfaction", "Streamlined administrative processes"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop"
    },
    {
        title: "SmartFactory: IoT Manufacturing Success",
        company: "SmartFactory Corp.",
        industry: "Manufacturing",
        results: ["35% improvement in production output", "Reduced downtime by 50%", "Enhanced quality control"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
    }
];

const webinars = [
    {
        title: "Digital Transformation Roadmap",
        date: "March 25, 2024",
        time: "2:00 PM EST",
        duration: "60 minutes",
        speaker: "Dr. Sarah Johnson",
        description: "Learn how to create and execute a successful digital transformation strategy.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
    },
    {
        title: "AI Implementation Best Practices",
        date: "April 2, 2024",
        time: "1:00 PM EST",
        duration: "45 minutes",
        speaker: "Michael Chen",
        description: "Practical guide to implementing AI solutions in your organization.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    {
        title: "Cloud Migration Strategies",
        date: "April 10, 2024",
        time: "3:00 PM EST",
        duration: "75 minutes",
        speaker: "David Rodriguez",
        description: "Step-by-step approach to migrating your infrastructure to the cloud.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
    }
];

const whitepapers = [
    {
        title: "The State of Digital Transformation 2024",
        description: "Comprehensive analysis of digital transformation trends and best practices.",
        downloadCount: "2,500+",
        pages: "45",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
    },
    {
        title: "AI in Enterprise: Implementation Guide",
        description: "Practical guide for implementing AI solutions in enterprise environments.",
        downloadCount: "1,800+",
        pages: "32",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    {
        title: "Cybersecurity Framework for Modern Businesses",
        description: "Comprehensive cybersecurity framework for protecting digital assets.",
        downloadCount: "3,200+",
        pages: "28",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
    }
];

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
                    <div className="text-center">
                        <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                            <BookOpen className="h-3 w-3 mr-1" />
                            Knowledge Hub
                        </Badge>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Digital Transformation
                            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                Resources
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                            Access our comprehensive library of insights, case studies, and educational content
                            to help you navigate your digital transformation journey.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-md mx-auto relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search resources..."
                                className="pl-10 bg-background/50 backdrop-blur-sm border-border/50"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Blog Post */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Latest Insights
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Stay updated with the latest trends and insights in digital transformation.
                        </p>
                    </div>

                    {/* Featured Post */}
                    <div className="mb-16">
                        {blogPosts.filter(post => post.featured).map((post, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    <div className="relative h-64 lg:h-full">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>
                                    <div className="p-8 flex flex-col justify-center">
                                        <Badge variant="secondary" className="w-fit mb-4 bg-primary/10 text-primary">
                                            {post.category}
                                        </Badge>
                                        <h3 className="text-2xl font-bold text-foreground mb-4">{post.title}</h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                            <div className="flex items-center gap-2">
                                                <User className="h-4 w-4" />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                        <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                                                Read Full Article
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.filter(post => !post.featured).map((post, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    <Badge variant="secondary" className="absolute top-4 left-4 bg-primary/10 text-primary">
                                        {post.category}
                                    </Badge>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                        <span>{post.author}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                        <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                                            Read More
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Success Stories
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Real-world examples of how our solutions have transformed businesses across industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <Badge variant="secondary" className="absolute top-4 left-4 bg-white/20 text-white backdrop-blur-sm">
                                        {study.industry}
                                    </Badge>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-2">{study.title}</h3>
                                    <p className="text-muted-foreground mb-4">{study.company}</p>
                                    <ul className="space-y-2 mb-6">
                                        {study.results.map((result, resultIndex) => (
                                            <li key={resultIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                                {result}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                        <Button variant="outline" className="w-full">
                                            Read Case Study
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Webinars */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Upcoming Webinars
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Join our expert-led webinars to learn about the latest trends and best practices.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {webinars.map((webinar, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={webinar.image}
                                        alt={webinar.title}

                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <Play className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <Badge variant="secondary" className="absolute top-4 right-4 bg-primary text-primary-foreground">
                                        Live
                                    </Badge>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-3">{webinar.title}</h3>
                                    <p className="text-muted-foreground mb-4">{webinar.description}</p>
                                    <div className="space-y-2 text-sm text-muted-foreground mb-6">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4" />
                                            <span>{webinar.date} at {webinar.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            <span>{webinar.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User className="h-4 w-4" />
                                            <span>{webinar.speaker}</span>
                                        </div>
                                    </div>
                                    <Link href="/webinars">
                                        <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                                            Register Now
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Whitepapers */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Whitepapers & Reports
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            In-depth research and analysis on digital transformation trends and strategies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whitepapers.map((paper, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={paper.image}
                                        alt={paper.title}

                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <Badge variant="secondary" className="absolute top-4 left-4 bg-white/20 text-white backdrop-blur-sm">
                                        {paper.pages} pages
                                    </Badge>
                                    <Badge variant="secondary" className="absolute top-4 right-4 bg-primary text-primary-foreground">
                                        {paper.downloadCount} downloads
                                    </Badge>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-3">{paper.title}</h3>
                                    <p className="text-muted-foreground mb-6">{paper.description}</p>
                                    <Link href="/whitepapers">
                                        <Button variant="outline" className="w-full">
                                            <Download className="mr-2 h-4 w-4" />
                                            Download Whitepaper
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Stay Updated with Our Insights
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Subscribe to our newsletter to receive the latest insights, case studies, and industry updates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-background/50 backdrop-blur-sm border-border/50"
                        />
                        <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                            Subscribe
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
