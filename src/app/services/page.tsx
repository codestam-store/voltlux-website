import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Code,
  Smartphone,
  Palette,
  Cloud,
  Settings,
  Users,
  BookOpen,
  Rocket,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  Zap,
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
  UserSearch,
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
  Target as TargetIcon
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "Services - QuantumForge",
  description: "Comprehensive digital services including web development, mobile development, UI/UX design, DevOps, consulting, and training solutions.",
  keywords: ["web development", "mobile development", "UI/UX design", "DevOps", "consulting", "training", "digital services"],
  openGraph: {
    title: "Services - QuantumForge",
    description: "Comprehensive digital services including web development, mobile development, UI/UX design, DevOps, consulting, and training solutions.",
    url: "https://quantumforge.com/services",
    siteName: "QuantumForge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuantumForge Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - QuantumForge",
    description: "Comprehensive digital services including web development, mobile development, UI/UX design, DevOps, consulting, and training solutions.",
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

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies and best practices.",
    color: "from-blue-500 to-cyan-500",
    href: "/services/web-development",
    features: [
      "React & Next.js Applications",
      "Node.js Backend Development",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "API Development & Integration",
      "Performance Optimization"
    ],
    benefits: [
      "Lightning-fast loading times",
      "Mobile-first responsive design",
      "SEO-optimized architecture",
      "Scalable and maintainable code"
    ],
    image: "https://maxm-imggenurl.web.val.run/modern web development workspace with code editor, multiple screens, and development tools, high quality"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    color: "from-green-500 to-emerald-500",
    href: "/services/mobile-development",
    features: [
      "iOS & Android Development",
      "React Native Applications",
      "Flutter Cross-platform",
      "Mobile App Optimization",
      "App Store Deployment",
      "Mobile Testing & QA"
    ],
    benefits: [
      "Native performance",
      "Cross-platform compatibility",
      "App store optimization",
      "Regular updates & maintenance"
    ],
    image: "https://maxm-imggenurl.web.val.run/mobile app development with smartphones and tablets showing different app interfaces, high quality"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that create intuitive and engaging digital experiences.",
    color: "from-purple-500 to-pink-500",
    href: "/services/ui-ux-design",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "User Testing & Iteration",
      "Design Systems",
      "Accessibility Compliance"
    ],
    benefits: [
      "Improved user engagement",
      "Reduced development time",
      "Enhanced brand consistency",
      "Better conversion rates"
    ],
    image: "https://maxm-imggenurl.web.val.run/UI UX design workspace with wireframes, prototypes, and design tools on multiple screens, high quality"
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Scalable cloud infrastructure and DevOps automation for reliable, efficient deployments.",
    color: "from-orange-500 to-red-500",
    href: "/services/devops-cloud",
    features: [
      "AWS, Azure & Google Cloud",
      "Container Orchestration",
      "CI/CD Pipeline Automation",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Security & Compliance"
    ],
    benefits: [
      "99.9% uptime guarantee",
      "Automatic scaling",
      "Reduced deployment time",
      "Cost optimization"
    ],
    image: "https://maxm-imggenurl.web.val.run/cloud infrastructure and DevOps automation with server racks, cloud computing, and deployment pipelines, high quality"
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Strategic technology consulting to help you make informed decisions and achieve your goals.",
    color: "from-indigo-500 to-purple-500",
    href: "/services/consulting",
    features: [
      "Technology Strategy",
      "Architecture Review",
      "Digital Transformation",
      "Security Assessment",
      "Performance Audits",
      "Team Training"
    ],
    benefits: [
      "Expert guidance",
      "Cost-effective solutions",
      "Risk mitigation",
      "Long-term planning"
    ],
    image: "https://maxm-imggenurl.web.val.run/business consulting meeting with professionals discussing technology strategy and digital transformation, high quality"
  },
  {
    icon: BookOpen,
    title: "Training",
    description: "Comprehensive training programs to upskill your team and maximize technology investments.",
    color: "from-yellow-500 to-orange-500",
    href: "/services/training",
    features: [
      "Custom Training Programs",
      "Technology Workshops",
      "Certification Preparation",
      "Hands-on Projects",
      "Ongoing Support",
      "Progress Tracking"
    ],
    benefits: [
      "Improved team skills",
      "Faster project delivery",
      "Reduced dependency",
      "Knowledge retention"
    ],
    image: "https://maxm-imggenurl.web.val.run/technology training session with professionals learning new skills and working on hands-on projects, high quality"
  }
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We begin by understanding your business goals, requirements, and constraints to create a comprehensive project plan.",
    icon: Lightbulb
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Our team designs the solution architecture and creates detailed wireframes and prototypes.",
    icon: Palette
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your solution using best practices and conduct thorough testing to ensure quality.",
    icon: Code
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description: "We deploy your solution to production and provide ongoing support and maintenance.",
    icon: Rocket
  }
];

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CTO, TechStart",
    content: "QuantumForge's web development services exceeded our expectations. They delivered a modern, scalable application that perfectly matches our vision.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    service: "Web Development"
  },
  {
    name: "Maria Garcia",
    role: "Product Manager, InnovateCorp",
    content: "The UI/UX design work from QuantumForge transformed our user experience. Our conversion rates increased by 40% within the first month.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    service: "UI/UX Design"
  },
  {
    name: "David Chen",
    role: "DevOps Lead, CloudTech",
    content: "Their DevOps expertise helped us achieve 99.9% uptime and reduced our deployment time from hours to minutes.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    service: "DevOps & Cloud"
  }
];

const stats = [
  { label: "Projects Completed", value: "500+", icon: Rocket },
  { label: "Happy Clients", value: "200+", icon: Users },
  { label: "Team Members", value: "50+", icon: UsersIcon },
  { label: "Years Experience", value: "8+", icon: Clock }
];

export default function ServicesPage() {
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
                  Our Services
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Comprehensive{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Digital Services
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  From web development to consulting, we provide end-to-end digital services that transform your business and drive measurable results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Rocket className="h-5 w-5 mr-2" />
                    Get Started
                  </Button>
                </Link>
                <Link href="#services">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                    <Play className="h-5 w-5 mr-2" />
                    Explore Services
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

      {/* Services Grid */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of digital services designed to meet your business needs and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-base">
                        {service.description}
                      </CardDescription>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature) => (
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
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link href={service.href}>
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

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => {
              const IconComponent = step.icon;
              return (
                <Card key={step.step} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {step.step}
                      </Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {step.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {step.description}
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
                Testimonials
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our clients have to say about our services and the results we&apos;ve delivered.
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
                    {testimonial.service}
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
                  Get Started
                </span>?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let&apos;s discuss your project requirements and create a customized solution that drives results.
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
                  Get Free Quote
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
