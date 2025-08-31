import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Heart,
  CreditCard,
  Factory,
  ShoppingCart,
  Car,
  Zap,
  Building,
  Plane,
  Ship,
  Train,
  Bus,
  Truck,
  Bike,
  Rocket,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  Code,
  Globe,
  Database,
  Server,
  Wifi,
  Eye,
  Fingerprint,
  Key,
  Lock,
  Target,
  Gauge,
  Activity,
  BarChart,
  PieChart,
  LineChart,
  TrendingDown,
  Users,
  Sparkles,
  ArrowUpRight,
  Play,
  Quote,
  Award,
  BarChart3,
  Trophy,
  Lightbulb,
  Monitor,
  Layers,
  Cpu,
  Network,
  Hexagon,
  Atom,
  Brain,
  Database as DatabaseIcon,
  Target as TargetIcon,
  Calendar,
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
  User,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  UserCog,
  UserSearch
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "Industries - QuantumForge",
  description: "Discover how our quantum-powered solutions transform businesses across healthcare, finance, manufacturing, retail, transportation, and energy industries.",
  keywords: ["healthcare", "finance", "manufacturing", "retail", "transportation", "energy", "industry solutions"],
  openGraph: {
    title: "Industries - QuantumForge",
    description: "Discover how our quantum-powered solutions transform businesses across healthcare, finance, manufacturing, retail, transportation, and energy industries.",
    url: "https://quantumforge.com/industries",
    siteName: "QuantumForge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuantumForge Industries",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries - QuantumForge",
    description: "Discover how our quantum-powered solutions transform businesses across healthcare, finance, manufacturing, retail, transportation, and energy industries.",
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

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "AI-powered diagnostics and patient care solutions that revolutionize healthcare delivery.",
    color: "from-red-500 to-pink-500",
    href: "/industries/healthcare",
    features: [
      "AI-Powered Diagnostics",
      "Patient Data Analytics",
      "Telemedicine Platforms",
      "Drug Discovery",
      "Medical Imaging",
      "Healthcare IoT"
    ],
    benefits: [
      "Improved patient outcomes",
      "Reduced diagnostic errors",
      "Enhanced care coordination",
      "Cost optimization"
    ],
    image: "https://maxm-imggenurl.web.val.run/healthcare technology with AI diagnostics, medical imaging, and patient care systems, high quality"
  },
  {
    icon: CreditCard,
    title: "Finance",
    description: "Secure financial technology and risk management solutions for the modern banking sector.",
    color: "from-green-500 to-emerald-500",
    href: "/industries/finance",
    features: [
      "Fraud Detection Systems",
      "Risk Management",
      "Trading Algorithms",
      "Blockchain Solutions",
      "Regulatory Compliance",
      "Digital Banking"
    ],
    benefits: [
      "Enhanced security",
      "Real-time fraud detection",
      "Regulatory compliance",
      "Improved customer experience"
    ],
    image: "https://maxm-imggenurl.web.val.run/financial technology with digital banking, trading algorithms, and security systems, high quality"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Smart manufacturing and IoT integration for Industry 4.0 transformation.",
    color: "from-blue-500 to-cyan-500",
    href: "/industries/manufacturing",
    features: [
      "Predictive Maintenance",
      "Quality Control AI",
      "Supply Chain Optimization",
      "IoT Integration",
      "Automation Systems",
      "Energy Management"
    ],
    benefits: [
      "Reduced downtime",
      "Improved quality",
      "Cost savings",
      "Increased efficiency"
    ],
    image: "https://maxm-imggenurl.web.val.run/smart manufacturing with IoT sensors, automation systems, and Industry 4.0 technology, high quality"
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "E-commerce optimization and customer analytics for the digital retail experience.",
    color: "from-purple-500 to-pink-500",
    href: "/industries/retail",
    features: [
      "Customer Analytics",
      "Inventory Management",
      "Personalized Marketing",
      "Omnichannel Solutions",
      "Supply Chain Optimization",
      "Customer Service AI"
    ],
    benefits: [
      "Increased sales",
      "Better customer experience",
      "Optimized inventory",
      "Data-driven decisions"
    ],
    image: "https://maxm-imggenurl.web.val.run/retail technology with e-commerce platforms, customer analytics, and digital shopping experiences, high quality"
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Logistics optimization and fleet management for efficient transportation networks.",
    color: "from-orange-500 to-red-500",
    href: "/industries/transportation",
    features: [
      "Route Optimization",
      "Fleet Management",
      "Predictive Analytics",
      "Autonomous Systems",
      "Real-time Tracking",
      "Energy Efficiency"
    ],
    benefits: [
      "Reduced fuel costs",
      "Improved delivery times",
      "Enhanced safety",
      "Better resource utilization"
    ],
    image: "https://maxm-imggenurl.web.val.run/transportation technology with logistics optimization, fleet management, and autonomous systems, high quality"
  },
  {
    icon: Zap,
    title: "Energy",
    description: "Smart grid and renewable energy solutions for sustainable power management.",
    color: "from-yellow-500 to-orange-500",
    href: "/industries/energy",
    features: [
      "Smart Grid Management",
      "Renewable Energy Integration",
      "Energy Storage Solutions",
      "Predictive Maintenance",
      "Demand Response",
      "Carbon Footprint Tracking"
    ],
    benefits: [
      "Reduced energy costs",
      "Improved sustainability",
      "Enhanced reliability",
      "Better grid management"
    ],
    image: "https://maxm-imggenurl.web.val.run/energy technology with smart grid systems, renewable energy integration, and sustainable power management, high quality"
  }
];

const solutions = [
  {
    title: "Quantum AI & ML",
    description: "Next-generation artificial intelligence powered by quantum algorithms",
    icon: Atom,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Neural Networks",
    description: "Advanced neural network architectures for complex problem solving",
    icon: Brain,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Cloud Architecture",
    description: "Scalable cloud infrastructure with microservices architecture",
    icon: Layers,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Cybersecurity",
    description: "Advanced security protocols and threat detection systems",
    icon: Lock,
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Data Analytics",
    description: "Real-time data processing and predictive analytics",
    icon: Database,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Performance Optimization",
    description: "Speed and efficiency optimization for maximum performance",
    icon: Target,
    color: "from-yellow-500 to-orange-500"
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "CTO, HealthTech Solutions",
    content: "QuantumForge's AI-powered diagnostic solutions have revolutionized our patient care. We've seen a 40% improvement in diagnostic accuracy.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    industry: "Healthcare"
  },
  {
    name: "Michael Chen",
    role: "VP Technology, FinCorp",
    content: "Their fraud detection systems have saved us millions while improving our security posture. Exceptional technology and support.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    industry: "Finance"
  },
  {
    name: "Lisa Rodriguez",
    role: "Operations Director, SmartManufacturing",
    content: "The IoT integration and predictive maintenance solutions have transformed our manufacturing efficiency. Outstanding results.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    industry: "Manufacturing"
  }
];

const stats = [
  { label: "Industries Served", value: "6+", icon: Building },
  { label: "Projects Delivered", value: "500+", icon: Rocket },
  { label: "Success Rate", value: "99.8%", icon: TrendingUp },
  { label: "Years Experience", value: "8+", icon: Clock }
];

export default function IndustriesPage() {
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
                  Industry Solutions
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Industry-Specific{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Discover how our quantum-powered solutions transform businesses across diverse industries, from healthcare to energy, delivering measurable results and driving innovation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Rocket className="h-5 w-5 mr-2" />
                    Get Started
                  </Button>
                </Link>
                <Link href="#industries">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                    <Play className="h-5 w-5 mr-2" />
                    Explore Industries
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industries" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Industry{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our quantum-powered solutions are tailored to meet the unique challenges and opportunities across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <Card key={industry.title} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {industry.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-base">
                        {industry.description}
                      </CardDescription>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Solutions</h4>
                        <ul className="space-y-2">
                          {industry.features.slice(0, 4).map((feature) => (
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
                          {industry.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link href={industry.href}>
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

      {/* Solutions Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Universal{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core solutions can be adapted and customized for any industry, providing flexibility and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <Card key={solution.title} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex justify-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {solution.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {solution.description}
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
              Industry{" "}
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
                    {testimonial.industry}
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
                Your Industry?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let&apos;s discuss how our industry-specific solutions can revolutionize your business and drive unprecedented growth.
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
