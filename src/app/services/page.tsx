import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowRight,
    Settings,
    Users,
    Monitor,
    Database,
    Shield,
    Zap,
    CheckCircle,
    Clock,
    Award,
    Headphones,
    FileText
} from "lucide-react";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
    title: "Services",
    description: "Discover our comprehensive range of digital services including consulting, development, support, and maintenance. Expert solutions for every business need.",
    openGraph: {
        title: "Services | NexusFlow",
        description: "From consulting to ongoing support, our services cover every aspect of your digital transformation journey.",
    },
};

const services = [
    {
        icon: Settings,
        title: "Digital Consulting",
        description: "Strategic guidance for your digital transformation journey.",
        features: [
            "Technology Strategy Development",
            "Digital Maturity Assessment",
            "ROI Analysis & Planning",
            "Change Management Consulting",
            "Vendor Selection & Evaluation",
            "Digital Roadmap Creation"
        ],
        duration: "2-4 weeks",
        deliverables: ["Strategic Report", "Implementation Plan", "Technology Recommendations"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
        icon: Users,
        title: "Custom Development",
        description: "Tailored software solutions built to your exact specifications.",
        features: [
            "Full-Stack Development",
            "Mobile App Development",
            "API Development",
            "Third-Party Integrations",
            "Database Design",
            "UI/UX Implementation"
        ],
        duration: "8-16 weeks",
        deliverables: ["Source Code", "Documentation", "Deployment Guide", "Training Materials"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
    },
    {
        icon: Monitor,
        title: "System Integration",
        description: "Seamlessly connect your existing systems and applications.",
        features: [
            "API Integration Services",
            "Data Migration",
            "Legacy System Integration",
            "Cloud Migration",
            "Real-time Data Sync",
            "Workflow Automation"
        ],
        duration: "4-12 weeks",
        deliverables: ["Integration Documentation", "Testing Reports", "User Guides"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
        icon: Database,
        title: "Data Analytics",
        description: "Transform your data into actionable business insights.",
        features: [
            "Data Warehouse Design",
            "Business Intelligence Dashboards",
            "Predictive Analytics",
            "Data Visualization",
            "Performance Metrics",
            "Custom Reporting"
        ],
        duration: "6-10 weeks",
        deliverables: ["Analytics Dashboard", "Data Models", "Reporting Framework"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
        icon: Shield,
        title: "Security Services",
        description: "Comprehensive security solutions to protect your digital assets.",
        features: [
            "Security Audits",
            "Penetration Testing",
            "Compliance Assessment",
            "Security Training",
            "Incident Response Planning",
            "Security Monitoring"
        ],
        duration: "2-6 weeks",
        deliverables: ["Security Report", "Compliance Documentation", "Security Policies"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description: "Optimize your systems for maximum speed and efficiency.",
        features: [
            "Performance Analysis",
            "Load Testing",
            "Database Optimization",
            "Caching Implementation",
            "CDN Setup",
            "Monitoring Setup"
        ],
        duration: "3-8 weeks",
        deliverables: ["Performance Report", "Optimization Guide", "Monitoring Tools"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    }
];

const supportPlans = [
    {
        name: "Basic Support",
        price: "$500",
        period: "/month",
        features: [
            "Email Support",
            "Bug Fixes",
            "Security Updates",
            "Monthly Reports",
            "8/5 Support Hours"
        ],
        recommended: false
    },
    {
        name: "Professional Support",
        price: "$1,200",
        period: "/month",
        features: [
            "Priority Email & Phone Support",
            "Bug Fixes & Feature Updates",
            "Security Updates",
            "Performance Monitoring",
            "Weekly Reports",
            "24/7 Emergency Support"
        ],
        recommended: true
    },
    {
        name: "Enterprise Support",
        price: "Custom",
        period: "",
        features: [
            "Dedicated Support Team",
            "Custom Development",
            "SLA Guarantees",
            "On-site Support",
            "Training & Workshops",
            "Strategic Consulting"
        ],
        recommended: false
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
                    <div className="text-center">
                        <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                            <Settings className="h-3 w-3 mr-1" />
                            Our Services
                        </Badge>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Professional Digital
                            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                Services
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                            From initial consultation to ongoing support, our comprehensive services
                            cover every aspect of your digital transformation journey.
                        </p>

                        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>6 Core Services</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-blue-500" />
                                <span>Flexible Timelines</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="h-4 w-4 text-purple-500" />
                                <span>Quality Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Our Service Offerings
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive digital services designed to meet your business needs
                            and drive measurable results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <service.icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
                                        <ul className="space-y-1">
                                            {service.features.slice(0, 4).map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Clock className="h-4 w-4" />
                                            <span>{service.duration}</span>
                                        </div>
                                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                                            {service.deliverables.length} Deliverables
                                        </Badge>
                                    </div>

                                    <Link href="/contact">
                                        <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                                            Get Started
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Plans */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Ongoing Support Plans
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Choose the support plan that best fits your business needs and budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {supportPlans.map((plan, index) => (
                            <Card key={index} className={`relative ${plan.recommended ? 'ring-2 ring-primary shadow-xl' : ''}`}>
                                {plan.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-primary text-primary-foreground">
                                            Recommended
                                        </Badge>
                                    </div>
                                )}

                                <CardHeader className="text-center">
                                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                                        <span className="text-muted-foreground">{plan.period}</span>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center gap-3 text-sm">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href="/contact">
                                        <Button
                                            className={`w-full ${plan.recommended
                                                ? 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70'
                                                : 'bg-secondary hover:bg-secondary/80'
                                                }`}
                                        >
                                            {plan.recommended ? 'Get Started' : 'Choose Plan'}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Our Process
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A proven methodology that ensures successful project delivery and maximum value.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Discovery",
                                description: "We analyze your requirements and create a detailed project plan.",
                                icon: FileText
                            },
                            {
                                step: "02",
                                title: "Design",
                                description: "Our team designs the solution architecture and user experience.",
                                icon: Settings
                            },
                            {
                                step: "03",
                                title: "Development",
                                description: "We build your solution using best practices and modern technologies.",
                                icon: Users
                            },
                            {
                                step: "04",
                                title: "Deploy & Support",
                                description: "We deploy your solution and provide ongoing support and maintenance.",
                                icon: Headphones
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center space-y-4">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <process.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                                        {process.step}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-foreground">{process.title}</h3>
                                <p className="text-muted-foreground">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Let&apos;s discuss your project requirements and find the perfect service
                        to help you achieve your business goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                                Start Your Project
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg">
                                Schedule Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
