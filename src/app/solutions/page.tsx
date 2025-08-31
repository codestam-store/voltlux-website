import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Atom,
  Brain,
  Cpu,
  Database,
  Globe,
  Layers,
  Lock,
  Rocket,
  Star,
  Target,
  Zap,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Code,
  Network,
  Hexagon,
  Sparkles,
  ArrowUpRight,
  Play,
  Quote,
  Award,
  Clock,
  BarChart3,
  Trophy,
  Lightbulb,
  Settings,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Wifi,
  Eye,
  Fingerprint,
  Key,
  Lock as LockIcon,
  Shield as ShieldIcon,
  Zap as Lightning,
  Target as TargetIcon,
  Gauge,
  Activity,
  BarChart,
  PieChart,
  LineChart,
  TrendingDown,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Building,
  Factory,
  ShoppingCart,
  CreditCard,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Truck,
  Bike,
  Heart,
  Activity as ActivityIcon,
  Calendar,
  Clock as ClockIcon,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Video,
  Camera,
  Mic,
  Headphones,
  Speaker,
  Volume2,
  VolumeX,
  Volume1,
  Volume,
  Bell,
  BellOff,
  BellRing,
  Settings as SettingsIcon,
  User,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  Users as UsersIcon2,
  UserCog,
  UserSearch,
  UserCheck as UserCheckIcon,
  UserX as UserXIcon,
  UserPlus as UserPlusIcon,
  UserMinus as UserMinusIcon,
  UserCog as UserCogIcon,
  UserSearch as UserSearchIcon
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "Solutions - QuantumForge",
  description: "Discover our cutting-edge quantum computing, AI, and digital transformation solutions that revolutionize businesses and drive innovation.",
  keywords: ["quantum AI", "neural networks", "cloud architecture", "cybersecurity", "data analytics", "performance optimization"],
  openGraph: {
    title: "Solutions - QuantumForge",
    description: "Discover our cutting-edge quantum computing, AI, and digital transformation solutions that revolutionize businesses and drive innovation.",
    url: "https://quantumforge.com/solutions",
    siteName: "QuantumForge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuantumForge Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions - QuantumForge",
    description: "Discover our cutting-edge quantum computing, AI, and digital transformation solutions that revolutionize businesses and drive innovation.",
    images: ["/og-image.jpg"],
    creator: "@codestamtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const solutions = [
  {
    icon: Atom,
    title: "Quantum AI & ML",
    description: "Next-generation artificial intelligence powered by quantum algorithms for unprecedented accuracy and speed.",
    color: "from-purple-500 to-pink-500",
    href: "/solutions/quantum-ai",
    features: [
      "Quantum Neural Networks",
      "Quantum Machine Learning",
      "Quantum Optimization",
      "Quantum Cryptography",
      "Quantum Simulation",
      "Quantum Error Correction"
    ],
    benefits: [
      "300% faster processing speed",
      "Unprecedented accuracy in predictions",
      "Real-time quantum computations",
      "Advanced pattern recognition"
    ]
  },
  {
    icon: Brain,
    title: "Neural Networks",
    description: "Advanced neural network architectures designed for complex problem solving and pattern recognition.",
    color: "from-blue-500 to-cyan-500",
    href: "/solutions/neural-networks",
    features: [
      "Deep Learning Models",
      "Convolutional Neural Networks",
      "Recurrent Neural Networks",
      "Transformer Architectures",
      "Transfer Learning",
      "AutoML Solutions"
    ],
    benefits: [
      "Complex pattern recognition",
      "Automated decision making",
      "Predictive analytics",
      "Natural language processing"
    ]
  },
  {
    icon: Layers,
    title: "Cloud Architecture",
    description: "Scalable cloud infrastructure with microservices architecture for optimal performance and reliability.",
    color: "from-green-500 to-emerald-500",
    href: "/solutions/cloud-architecture",
    features: [
      "Microservices Architecture",
      "Container Orchestration",
      "Serverless Computing",
      "Auto-scaling",
      "Load Balancing",
      "Multi-cloud Strategy"
    ],
    benefits: [
      "99.9% uptime guarantee",
      "Automatic scaling",
      "Global deployment",
      "Cost optimization"
    ]
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Advanced security protocols and threat detection systems to protect your digital assets.",
    color: "from-red-500 to-orange-500",
    href: "/solutions/cybersecurity",
    features: [
      "Zero Trust Architecture",
      "Advanced Threat Detection",
      "Penetration Testing",
      "Security Auditing",
      "Incident Response",
      "Compliance Management"
    ],
    benefits: [
      "Real-time threat detection",
      "Advanced encryption",
      "Compliance automation",
      "24/7 security monitoring"
    ]
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Real-time data processing and predictive analytics for informed decision-making.",
    color: "from-indigo-500 to-purple-500",
    href: "/solutions/data-analytics",
    features: [
      "Real-time Analytics",
      "Predictive Modeling",
      "Data Visualization",
      "Business Intelligence",
      "Data Warehousing",
      "ETL Processes"
    ],
    benefits: [
      "Real-time insights",
      "Predictive capabilities",
      "Interactive dashboards",
      "Data-driven decisions"
    ]
  },
  {
    icon: Target,
    title: "Performance Optimization",
    description: "Speed and efficiency optimization for maximum performance across all platforms.",
    color: "from-yellow-500 to-orange-500",
    href: "/solutions/performance",
    features: [
      "Application Optimization",
      "Database Tuning",
      "Caching Strategies",
      "CDN Implementation",
      "Load Testing",
      "Performance Monitoring"
    ],
    benefits: [
      "50% faster load times",
      "Improved user experience",
      "Reduced infrastructure costs",
      "Scalable performance"
    ]
  }
];

const industries = [
  { name: "Healthcare", icon: Heart, description: "AI-powered diagnostics and patient care solutions" },
  { name: "Finance", icon: CreditCard, description: "Secure financial technology and risk management" },
  { name: "Manufacturing", icon: Factory, description: "Smart manufacturing and IoT integration" },
  { name: "Retail", icon: ShoppingCart, description: "E-commerce optimization and customer analytics" },
  { name: "Transportation", icon: Car, description: "Logistics optimization and fleet management" },
  { name: "Energy", icon: Zap, description: "Smart grid and renewable energy solutions" }
];

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "CTO, TechCorp",
    content: "QuantumForge's quantum AI solutions transformed our entire digital infrastructure. We saw a 300% increase in processing speed while reducing costs by 40%.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    solution: "Quantum AI & ML"
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO, InnovateLab",
    content: "The neural network solutions from QuantumForge revolutionized our data processing capabilities. The level of innovation is unmatched.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    solution: "Neural Networks"
  },
  {
    name: "Emily Watson",
    role: "VP Engineering, DataFlow",
    content: "Their cloud architecture expertise helped us achieve 99.9% uptime and seamless scalability. Exceptional technical expertise.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    solution: "Cloud Architecture"
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative px-4 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/30 px-4 py-2">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Our Solutions
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Quantum-Powered{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Discover our cutting-edge solutions that leverage the latest in quantum computing, AI, and advanced technologies to transform your business and drive innovation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Rocket className="h-5 w-5 mr-2" />
                    Get Started
                  </Button>
                </Link>
                <Link href="#solutions">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                    <Play className="h-5 w-5 mr-2" />
                    Explore Solutions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From quantum computing to traditional web development, we provide end-to-end solutions that drive measurable results and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <Card key={solution.title} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {solution.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-base">
                        {solution.description}
                      </CardDescription>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {solution.features.slice(0, 4).map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link href={solution.href}>
                      <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Solutions for{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our quantum-powered solutions are designed to meet the unique challenges and opportunities across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <Card key={industry.name} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {industry.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {industry.description}
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Client{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our solutions have transformed businesses across different industries and use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-primary/30" />
                  <p className="text-muted-foreground leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {testimonial.solution}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Transform
                </span>{" "}
                Your Business?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let&apos;s discuss how our quantum-powered solutions can revolutionize your digital presence and drive unprecedented growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Rocket className="h-5 w-5 mr-2" />
                  Start Your Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
