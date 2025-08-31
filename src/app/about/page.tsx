import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowRight,
    Users,
    Target,
    Award,
    Heart,
    Zap,
    Shield,
    Globe,
    CheckCircle,
    Star,
    Lightbulb
} from "lucide-react";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about NexusFlow's mission to transform businesses through innovative digital solutions. Meet our team and discover our values.",
    openGraph: {
        title: "About Us | NexusFlow",
        description: "Discover our story, mission, and the team behind NexusFlow's digital transformation success.",
    },
};

const values = [
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We constantly push boundaries to deliver cutting-edge solutions that drive real business value."
    },
    {
        icon: Shield,
        title: "Excellence",
        description: "We maintain the highest standards of quality in everything we do, from code to customer service."
    },
    {
        icon: Heart,
        title: "Collaboration",
        description: "We believe in the power of teamwork and building strong partnerships with our clients."
    },
    {
        icon: Zap,
        title: "Agility",
        description: "We adapt quickly to changing needs and deliver solutions that evolve with your business."
    },
    {
        icon: Globe,
        title: "Impact",
        description: "We focus on creating meaningful change that positively impacts businesses and communities."
    },
    {
        icon: Target,
        title: "Results",
        description: "We measure success by the tangible results and ROI we deliver to our clients."
    }
];

const team = [
    {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        bio: "Visionary leader with 15+ years in digital transformation and technology strategy.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        linkedin: "#"
    },
    {
        name: "Michael Chen",
        role: "CTO",
        bio: "Technology expert specializing in AI, cloud architecture, and scalable solutions.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        linkedin: "#"
    },
    {
        name: "Emily Watson",
        role: "Head of Strategy",
        bio: "Digital transformation strategist with deep expertise in business process optimization.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        linkedin: "#"
    },
    {
        name: "David Rodriguez",
        role: "Head of Security",
        bio: "Cybersecurity expert with extensive experience in enterprise security and compliance.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        linkedin: "#"
    },
    {
        name: "Lisa Park",
        role: "Head of Design",
        bio: "UX/UI specialist focused on creating intuitive and engaging digital experiences.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
        linkedin: "#"
    },
    {
        name: "Alex Thompson",
        role: "Head of Engineering",
        bio: "Full-stack development expert with passion for scalable and maintainable code.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
        linkedin: "#"
    }
];

const milestones = [
    {
        year: "2020",
        title: "Company Founded",
        description: "NexusFlow was established with a vision to transform businesses through innovative digital solutions."
    },
    {
        year: "2021",
        title: "First 100 Clients",
        description: "Reached our first milestone of serving 100 satisfied clients across various industries."
    },
    {
        year: "2022",
        title: "AI Solutions Launch",
        description: "Introduced our AI and machine learning solutions, expanding our service portfolio."
    },
    {
        year: "2023",
        title: "International Expansion",
        description: "Expanded our operations globally, serving clients in over 20 countries."
    },
    {
        year: "2024",
        title: "Industry Recognition",
        description: "Recognized as a leader in digital transformation with multiple industry awards."
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
                    <div className="text-center">
                        <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                            <Users className="h-3 w-3 mr-1" />
                            About NexusFlow
                        </Badge>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Transforming Businesses
                            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                Through Innovation
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                            We are a team of passionate technologists, strategists, and innovators dedicated to helping
                            businesses thrive in the digital age through cutting-edge solutions and exceptional service.
                        </p>

                        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>50+ Team Members</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="h-4 w-4 text-yellow-500" />
                                <span>500+ Projects Delivered</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="h-4 w-4 text-blue-500" />
                                <span>4+ Years of Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                                Our Mission
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Empowering Digital Transformation
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our mission is to empower businesses with innovative digital solutions that drive growth,
                                efficiency, and competitive advantage. We believe that every organization deserves access
                                to cutting-edge technology that transforms their operations and enhances their customer experience.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Through our expertise in AI, cloud computing, cybersecurity, and digital strategy,
                                we help companies navigate the complexities of digital transformation and emerge stronger,
                                more agile, and future-ready.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop"
                                    alt="NexusFlow team collaboration"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide everything we do and shape our relationships with clients and partners.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-border/50">
                                <CardHeader>
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <value.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Meet Our Leadership
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Experienced professionals passionate about driving digital transformation and delivering exceptional results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                                    <p className="text-primary font-medium mb-3">{member.role}</p>
                                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                                    <Link href={member.linkedin}>
                                        <Button variant="outline" size="sm">
                                            View Profile
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Our Journey
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Key milestones that mark our growth and success in the digital transformation space.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    }`}>
                                    <div className="flex-1 px-8">
                                        <div className={`p-6 bg-card rounded-lg shadow-lg border border-border/50 ${index % 2 === 0 ? 'text-right' : 'text-left'
                                            }`}>
                                            <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                                            <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                                            <p className="text-muted-foreground">{milestone.description}</p>
                                        </div>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                                    </div>

                                    <div className="flex-1 px-8"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "500+", label: "Projects Delivered", icon: CheckCircle },
                            { number: "50+", label: "Team Members", icon: Users },
                            { number: "95%", label: "Client Satisfaction", icon: Star },
                            { number: "20+", label: "Countries Served", icon: Globe }
                        ].map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="h-8 w-8 text-primary" />
                                </div>
                                <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Ready to Work with Us?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Let&apos;s discuss how our team can help transform your business with innovative digital solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/careers">
                            <Button variant="outline" size="lg">
                                Join Our Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
