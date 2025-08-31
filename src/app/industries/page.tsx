import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowRight,
    Building2,
    ShoppingCart,
    Heart,
    GraduationCap,
    Car,
    Plane,
    CheckCircle,
    Users,
    TrendingUp,
    Target,
    Briefcase
} from "lucide-react";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
    title: "Industries",
    description: "Discover how NexusFlow serves various industries with tailored digital solutions. From healthcare to finance, we have expertise across sectors.",
    openGraph: {
        title: "Industries | NexusFlow",
        description: "Industry-specific digital solutions that drive transformation and growth across all sectors.",
    },
};

const industries = [
    {
        icon: Building2,
        title: "Financial Services",
        description: "Secure, compliant, and innovative solutions for banks, insurance, and fintech companies.",
        challenges: [
            "Regulatory Compliance",
            "Data Security",
            "Legacy System Integration",
            "Customer Experience"
        ],
        solutions: [
            "Secure Digital Banking Platforms",
            "AI-Powered Risk Assessment",
            "Blockchain Integration",
            "Compliance Automation"
        ],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: ShoppingCart,
        title: "E-commerce & Retail",
        description: "Digital transformation solutions that enhance customer experience and drive sales growth.",
        challenges: [
            "Omnichannel Integration",
            "Inventory Management",
            "Customer Personalization",
            "Mobile Commerce"
        ],
        solutions: [
            "Multi-Channel E-commerce Platforms",
            "AI-Powered Recommendations",
            "Inventory Optimization",
            "Mobile-First Shopping Experiences"
        ],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        color: "from-green-500 to-green-600"
    },
    {
        icon: Heart,
        title: "Healthcare",
        description: "Digital health solutions that improve patient care and operational efficiency.",
        challenges: [
            "Patient Data Security",
            "Interoperability",
            "Telemedicine Integration",
            "Regulatory Compliance"
        ],
        solutions: [
            "Electronic Health Records (EHR)",
            "Telemedicine Platforms",
            "Patient Portal Systems",
            "Healthcare Analytics"
        ],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        color: "from-red-500 to-red-600"
    },
    {
        icon: GraduationCap,
        title: "Education",
        description: "Innovative learning platforms and educational technology solutions.",
        challenges: [
            "Remote Learning Infrastructure",
            "Student Engagement",
            "Content Management",
            "Assessment Automation"
        ],
        solutions: [
            "Learning Management Systems (LMS)",
            "Virtual Classrooms",
            "Student Analytics",
            "Content Creation Tools"
        ],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        color: "from-purple-500 to-purple-600"
    },
    {
        icon: Car,
        title: "Manufacturing",
        description: "Smart manufacturing solutions that optimize production and supply chain operations.",
        challenges: [
            "Supply Chain Visibility",
            "Quality Control",
            "Predictive Maintenance",
            "Inventory Optimization"
        ],
        solutions: [
            "IoT-Enabled Manufacturing",
            "Predictive Analytics",
            "Quality Management Systems",
            "Supply Chain Optimization"
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        color: "from-orange-500 to-orange-600"
    },
    {
        icon: Plane,
        title: "Transportation & Logistics",
        description: "Digital solutions that streamline logistics and enhance transportation efficiency.",
        challenges: [
            "Route Optimization",
            "Real-time Tracking",
            "Fleet Management",
            "Customer Visibility"
        ],
        solutions: [
            "Fleet Management Systems",
            "Route Optimization Algorithms",
            "Real-time Tracking Platforms",
            "Logistics Analytics"
        ],
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop",
        color: "from-indigo-500 to-indigo-600"
    },
    {
        icon: Briefcase,
        title: "Professional Services",
        description: "Digital tools that enhance productivity and client management for service businesses.",
        challenges: [
            "Client Relationship Management",
            "Project Management",
            "Time Tracking",
            "Resource Allocation"
        ],
        solutions: [
            "Client Portal Systems",
            "Project Management Tools",
            "Time & Billing Software",
            "Resource Planning Platforms"
        ],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        color: "from-teal-500 to-teal-600"
    },
    {
        icon: Users,
        title: "Technology",
        description: "Cutting-edge solutions for tech companies and software development teams.",
        challenges: [
            "Scalability",
            "Performance Optimization",
            "Security",
            "DevOps Automation"
        ],
        solutions: [
            "Cloud-Native Applications",
            "DevOps Automation",
            "Security & Compliance",
            "Performance Monitoring"
        ],
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        color: "from-cyan-500 to-cyan-600"
    }
];

export default function IndustriesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
                    <div className="text-center">
                        <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                            <Target className="h-3 w-3 mr-1" />
                            Industry Solutions
                        </Badge>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Industry-Specific
                            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                Digital Solutions
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                            We understand the unique challenges and opportunities in your industry.
                            Our tailored solutions are designed to address sector-specific needs and drive measurable results.
                        </p>

                        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>8+ Industries Served</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-blue-500" />
                                <span>Industry Experts</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-purple-500" />
                                <span>Proven Results</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((industry, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center shadow-lg`}>
                                            <industry.icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                                        <p className="text-white/90 text-sm">{industry.description}</p>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                Key Challenges
                                            </h4>
                                            <ul className="space-y-2">
                                                {industry.challenges.map((challenge, challengeIndex) => (
                                                    <li key={challengeIndex} className="text-sm text-muted-foreground">
                                                        • {challenge}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                Our Solutions
                                            </h4>
                                            <ul className="space-y-2">
                                                {industry.solutions.map((solution, solutionIndex) => (
                                                    <li key={solutionIndex} className="text-sm text-muted-foreground">
                                                        • {solution}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-border/50">
                                        <Link href={`/industries/${industry.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                            <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                                                Learn More About {industry.title}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Success Stories
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            See how we&apos;ve helped companies across different industries achieve their digital transformation goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                industry: "Financial Services",
                                company: "FinTech Solutions Inc.",
                                result: "40% increase in operational efficiency",
                                description: "Implemented AI-powered risk assessment and automated compliance processes."
                            },
                            {
                                industry: "Healthcare",
                                company: "MedCare Systems",
                                result: "60% reduction in patient wait times",
                                description: "Developed integrated patient portal and telemedicine platform."
                            },
                            {
                                industry: "Manufacturing",
                                company: "SmartFactory Corp.",
                                result: "35% improvement in production output",
                                description: "Deployed IoT-enabled manufacturing and predictive maintenance systems."
                            }
                        ].map((story, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <Badge variant="secondary" className="w-fit mx-auto bg-primary/10 text-primary">
                                        {story.industry}
                                    </Badge>
                                    <CardTitle className="text-xl">{story.company}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-primary mb-2">{story.result}</div>
                                    <p className="text-muted-foreground">{story.description}</p>
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
                        Ready to Transform Your Industry?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Let&apos;s discuss how our industry-specific solutions can help you overcome
                        challenges and achieve your business objectives.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                                Start Your Transformation
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg">
                                Schedule Industry Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
