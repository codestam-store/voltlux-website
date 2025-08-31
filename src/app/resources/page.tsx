import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Video,
  Users,
  MessageSquare,
  Download,
  ExternalLink,
  Calendar,
  Clock,
  Star,
  CheckCircle,
  Rocket,
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
  MapPin,
  Phone,
  Mail,
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
  title: "Resources - QuantumForge",
  description: "Access our comprehensive library of documentation, case studies, white papers, webinars, and support resources to help you succeed with QuantumForge solutions.",
  keywords: ["documentation", "case studies", "white papers", "webinars", "support", "resources", "API reference"],
  openGraph: {
    title: "Resources - QuantumForge",
    description: "Access our comprehensive library of documentation, case studies, white papers, webinars, and support resources to help you succeed with QuantumForge solutions.",
    url: "https://quantumforge.com/resources",
    siteName: "QuantumForge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuantumForge Resources",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources - QuantumForge",
    description: "Access our comprehensive library of documentation, case studies, white papers, webinars, and support resources to help you succeed with QuantumForge solutions.",
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

const resources = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides and tutorials for all our solutions and services.",
    color: "from-blue-500 to-cyan-500",
    href: "/resources/documentation",
    items: [
      "Getting Started Guides",
      "API Documentation",
      "Integration Tutorials",
      "Best Practices",
      "Troubleshooting",
      "Code Examples"
    ]
  },
  {
    icon: FileText,
    title: "Case Studies",
    description: "Real-world examples of how our solutions have transformed businesses.",
    color: "from-green-500 to-emerald-500",
    href: "/resources/case-studies",
    items: [
      "Healthcare Transformations",
      "Financial Services Success",
      "Manufacturing Optimization",
      "Retail Innovation",
      "Transportation Solutions",
      "Energy Management"
    ]
  },
  {
    icon: FileText,
    title: "White Papers",
    description: "In-depth research and insights on emerging technologies and industry trends.",
    color: "from-purple-500 to-pink-500",
    href: "/resources/white-papers",
    items: [
      "Quantum Computing Impact",
      "AI in Healthcare",
      "Cybersecurity Trends",
      "Cloud Architecture",
      "Data Analytics",
      "Digital Transformation"
    ]
  },
  {
    icon: Video,
    title: "Webinars",
    description: "Educational sessions and expert insights on technology and business transformation.",
    color: "from-orange-500 to-red-500",
    href: "/resources/webinars",
    items: [
      "Technology Deep Dives",
      "Industry Insights",
      "Product Demos",
      "Expert Interviews",
      "Q&A Sessions",
      "Training Workshops"
    ]
  },
  {
    icon: Users,
    title: "Support",
    description: "Get help when you need it with our comprehensive support resources.",
    color: "from-indigo-500 to-purple-500",
    href: "/support",
    items: [
      "Knowledge Base",
      "Community Forum",
      "Technical Support",
      "Training Resources",
      "FAQ",
      "Contact Support"
    ]
  },
  {
    icon: MessageSquare,
    title: "API Reference",
    description: "Complete API documentation and integration guides for developers.",
    color: "from-yellow-500 to-orange-500",
    href: "/resources/api",
    items: [
      "REST API Docs",
      "SDK Downloads",
      "Code Examples",
      "Authentication",
      "Rate Limits",
      "Error Handling"
    ]
  }
];

const featuredContent = [
  {
    title: "Quantum AI: The Future of Machine Learning",
    type: "White Paper",
    description: "Explore how quantum computing is revolutionizing artificial intelligence and what it means for your business.",
    image: "https://maxm-imggenurl.web.val.run/quantum AI machine learning technology with neural networks and quantum computing, high quality",
    date: "2024-01-15",
    readTime: "15 min read",
    href: "/resources/white-papers/quantum-ai-future"
  },
  {
    title: "Healthcare Digital Transformation: A Complete Guide",
    type: "Case Study",
    description: "Learn how leading healthcare organizations are leveraging digital solutions to improve patient care and operational efficiency.",
    image: "https://maxm-imggenurl.web.val.run/healthcare digital transformation with medical technology and patient care systems, high quality",
    date: "2024-01-10",
    readTime: "12 min read",
    href: "/resources/case-studies/healthcare-transformation"
  },
  {
    title: "Building Scalable Cloud Architecture",
    type: "Webinar",
    description: "Join our experts as they discuss best practices for designing and implementing scalable cloud solutions.",
    image: "https://maxm-imggenurl.web.val.run/cloud architecture design with scalable infrastructure and microservices, high quality",
    date: "2024-01-08",
    duration: "45 min",
    href: "/resources/webinars/scalable-cloud-architecture"
  }
];

const upcomingEvents = [
  {
    title: "AI in Financial Services Summit",
    date: "2024-02-15",
    time: "10:00 AM EST",
    type: "Virtual Event",
    description: "Join industry leaders to discuss the future of AI in financial services and banking."
  },
  {
    title: "Quantum Computing Workshop",
    date: "2024-02-22",
    time: "2:00 PM EST",
    type: "Workshop",
    description: "Hands-on workshop on quantum computing fundamentals and practical applications."
  },
  {
    title: "Cybersecurity Best Practices",
    date: "2024-03-01",
    time: "11:00 AM EST",
    type: "Webinar",
    description: "Learn about the latest cybersecurity threats and how to protect your organization."
  }
];

const stats = [
  { label: "Documentation Pages", value: "500+", icon: BookOpen },
  { label: "Case Studies", value: "50+", icon: FileText },
  { label: "Webinars", value: "100+", icon: Video },
  { label: "Support Tickets Resolved", value: "1000+", icon: Users }
];

export default function ResourcesPage() {
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
                  Knowledge Hub
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Resources &{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Knowledge
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Access our comprehensive library of documentation, case studies, white papers, webinars, and support resources to help you succeed with QuantumForge solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#resources">
                  <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Rocket className="h-5 w-5 mr-2" />
                    Explore Resources
                  </Button>
                </Link>
                <Link href="/support">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                    <Users className="h-5 w-5 mr-2" />
                    Get Support
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

      {/* Resources Grid */}
      <section id="resources" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Resource{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Library
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to learn, implement, and succeed with our quantum-powered solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.title} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${resource.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-base">
                        {resource.description}
                      </CardDescription>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What&apos;s Included</h4>
                      <ul className="space-y-2">
                        {resource.items.slice(0, 4).map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={resource.href}>
                      <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
                        Explore {resource.title}
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

      {/* Featured Content */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Content
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our latest insights, research, and success stories from across the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content) => (
              <Card key={content.title} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {content.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {content.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {content.description}
                    </CardDescription>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{content.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{content.readTime || content.duration}</span>
                    </div>
                  </div>

                  <Link href={content.href}>
                    <Button variant="outline" className="w-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Upcoming{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Events
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our upcoming webinars, workshops, and events to learn from industry experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.title} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {event.type}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {event.description}
                    </CardDescription>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
                    Register Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
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
                Need{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Help
                </span>?
              </h2>
              <p className="text-xl text-muted-foreground">
                Can&apos;t find what you&apos;re looking for? Our support team is here to help you succeed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support">
                <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Users className="h-5 w-5 mr-2" />
                  Get Support
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                  Contact Us
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
