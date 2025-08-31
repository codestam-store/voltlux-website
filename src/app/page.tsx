
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
  Trophy
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "QuantumForge - Next-Generation Digital Solutions",
  description: "Revolutionize your digital presence with QuantumForge. We deliver cutting-edge AI solutions, advanced web development, and transformative digital experiences that propel businesses into the future.",
  keywords: ["AI solutions", "web development", "digital transformation", "quantum computing", "machine learning", "cloud architecture", "cybersecurity"],
  openGraph: {
    title: "QuantumForge - Next-Generation Digital Solutions",
    description: "Revolutionize your digital presence with QuantumForge. We deliver cutting-edge AI solutions, advanced web development, and transformative digital experiences that propel businesses into the future.",
    url: "https://quantumforge.com",
    siteName: "QuantumForge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuantumForge - Next-Generation Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumForge - Next-Generation Digital Solutions",
    description: "Revolutionize your digital presence with QuantumForge. We deliver cutting-edge AI solutions, advanced web development, and transformative digital experiences that propel businesses into the future.",
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

const features = [
  {
    icon: Atom,
    title: "Quantum AI & ML",
    description: "Next-generation artificial intelligence powered by quantum algorithms for unprecedented accuracy and speed.",
    color: "from-purple-500 to-pink-500",
    href: "/solutions/quantum-ai"
  },
  {
    icon: Brain,
    title: "Neural Networks",
    description: "Advanced neural network architectures designed for complex problem solving and pattern recognition.",
    color: "from-blue-500 to-cyan-500",
    href: "/solutions/neural-networks"
  },
  {
    icon: Layers,
    title: "Cloud Architecture",
    description: "Scalable cloud infrastructure with microservices architecture for optimal performance and reliability.",
    color: "from-green-500 to-emerald-500",
    href: "/solutions/cloud-architecture"
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Advanced security protocols and threat detection systems to protect your digital assets.",
    color: "from-red-500 to-orange-500",
    href: "/solutions/cybersecurity"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Real-time data processing and predictive analytics for informed decision-making.",
    color: "from-indigo-500 to-purple-500",
    href: "/solutions/data-analytics"
  },
  {
    icon: Target,
    title: "Performance Optimization",
    description: "Speed and efficiency optimization for maximum performance across all platforms.",
    color: "from-yellow-500 to-orange-500",
    href: "/solutions/performance"
  }
];

const stats = [
  { label: "Projects Delivered", value: "500+", icon: Rocket },
  { label: "Happy Clients", value: "200+", icon: Users },
  { label: "Success Rate", value: "99.8%", icon: TrendingUp },
  { label: "Years Experience", value: "8+", icon: Clock }
];

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "CTO, TechCorp",
    content: "QuantumForge transformed our entire digital infrastructure. Their quantum AI solutions increased our processing speed by 300% while reducing costs by 40%.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO, InnovateLab",
    content: "The level of innovation and technical expertise at QuantumForge is unmatched. They delivered our project ahead of schedule with exceptional quality.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Watson",
    role: "VP Engineering, DataFlow",
    content: "Working with QuantumForge was a game-changer. Their neural network solutions revolutionized our data processing capabilities.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const awards = [
  { name: "Best AI Solution Provider 2024", icon: Award, year: "2024" },
  { name: "Innovation Excellence Award", icon: Star, year: "2023" },
  { name: "Top 10 Tech Companies", icon: Trophy, year: "2023" },
  { name: "Quantum Computing Pioneer", icon: Atom, year: "2022" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative px-4 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/30 px-4 py-2">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Quantum Innovation
                  </Badge>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    Next-Generation{" "}
                    <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                      Digital Solutions
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Revolutionize your digital presence with cutting-edge AI solutions, advanced web development, and transformative experiences that propel businesses into the future.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <Rocket className="h-5 w-5 mr-2" />
                      Launch Your Project
                    </Button>
                  </Link>
                  <Link href="/solutions">
                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                      <Play className="h-5 w-5 mr-2" />
                      Watch Demo
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-8 pt-8">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-background" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">500+ satisfied clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">4.9/5 rating</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
                  <img
                    src="https://maxm-imggenurl.web.val.run/quantum computing technology interface with glowing particles and neural networks, futuristic design, high quality, detailed"
                    alt="Quantum computing technology interface with neural networks"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl" />
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

      {/* Features Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/30">
              Our Solutions
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold">
              Quantum-Powered{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our cutting-edge solutions that leverage the latest in quantum computing, AI, and advanced technologies to transform your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Link key={feature.title} href={feature.href}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/30">
                  About QuantumForge
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold">
                  Pioneering the{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Future
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We are at the forefront of digital innovation, combining quantum computing principles with cutting-edge AI to create solutions that were once thought impossible.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Quantum AI</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Advanced quantum algorithms for unprecedented accuracy</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Neural Networks</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Complex pattern recognition and problem solving</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Cloud Architecture</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Scalable microservices infrastructure</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Cybersecurity</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Advanced threat detection and protection</p>
                </div>
              </div>

              <Link href="/about">
                <Button variant="outline" size="lg" className="h-12 px-8 border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
                <img
                  src="https://maxm-imggenurl.web.val.run/team of engineers working on quantum computing technology, modern office, collaborative environment, high quality"
                  alt="Team of engineers working on quantum computing technology"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/30">
              Client Success
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold">
              What Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what industry leaders have to say about their experience with QuantumForge.
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
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/30">
              Recognition
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold">
              Industry{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Awards
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to innovation and excellence has been recognized by leading industry organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award) => {
              const IconComponent = award.icon;
              return (
                <Card key={award.name} className="text-center group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{award.name}</div>
                      <div className="text-sm text-muted-foreground">{award.year}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
                Join hundreds of companies that have already revolutionized their digital presence with QuantumForge.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Rocket className="h-5 w-5 mr-2" />
                  Start Your Project
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                  Explore Solutions
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
