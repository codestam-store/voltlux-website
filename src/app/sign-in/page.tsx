import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowRight,
  Mail,
  Lock,
  Eye,
  Sparkles,
  ArrowUpRight,
  CheckCircle,
  Star,
  Award,
  Rocket,
  Users,
  Clock
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "Sign In - QuantumForge",
  description: "Access your QuantumForge account to manage your projects, view analytics, and collaborate with our team.",
  keywords: ["sign in", "login", "account", "dashboard", "portal", "authentication"],
  openGraph: {
    title: "Sign In - QuantumForge",
    description: "Access your QuantumForge account to manage your projects, view analytics, and collaborate with our team.",
    url: "https://quantumforge.com/sign-in",
    siteName: "QuantumForge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuantumForge Sign In",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign In - QuantumForge",
    description: "Access your QuantumForge account to manage your projects, view analytics, and collaborate with our team.",
    images: ["/og-image.jpg"],
    creator: "@codestamtech",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const features = [
  {
    icon: Rocket,
    title: "Project Management",
    description: "Access and manage all your quantum computing and AI projects from one centralized dashboard."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Collaborate seamlessly with our team and your internal stakeholders on project development."
  },
  {
    icon: Award,
    title: "Analytics & Reports",
    description: "View detailed analytics, performance metrics, and comprehensive project reports."
  },
  {
    icon: Star,
    title: "Support Portal",
    description: "Get instant access to our support resources, documentation, and expert assistance."
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "CTO, TechCorp",
    content: "The QuantumForge portal has revolutionized how we manage our AI projects. The analytics and collaboration features are exceptional.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Innovation, DataFlow",
    content: "Having direct access to our project dashboard and the ability to collaborate with the QuantumForge team has accelerated our development timeline significantly.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Watson",
    role: "VP Engineering, QuantumTech",
    content: "The portal provides incredible transparency into our project progress and makes communication with the team seamless and efficient.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

const stats = [
  { label: "Active Users", value: "10,000+", icon: Users },
  { label: "Projects Managed", value: "2,500+", icon: Rocket },
  { label: "Uptime", value: "99.9%", icon: Star },
  { label: "Response Time", value: "< 100ms", icon: Clock }
];

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative px-4 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/30 px-4 py-2">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Client Portal
                  </Badge>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    Welcome{" "}
                    <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                      Back
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Access your QuantumForge dashboard to manage projects, view analytics, and collaborate with our team.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#signin-form">
                    <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <Lock className="h-5 w-5 mr-2" />
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                      <Users className="h-5 w-5 mr-2" />
                      Get Access
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
                  <img
                    src="https://maxm-imggenurl.web.val.run/modern dashboard interface with analytics charts and project management tools, high quality"
                    alt="QuantumForge dashboard interface"
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

      {/* Sign In Form */}
      <section id="signin-form" className="py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Sign In to Your{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Account
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Access your projects, analytics, and collaboration tools.
                </p>
              </div>

              <Card className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="h-12 pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="Enter your password" 
                        className="h-12 pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="remember"
                        className="rounded border-border focus:ring-primary/20"
                      />
                      <Label htmlFor="remember" className="text-sm">Remember me</Label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Lock className="h-5 w-5 mr-2" />
                    Sign In
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Don&apos;t have an account?{" "}
                      <Link href="/contact" className="text-primary hover:underline font-medium">
                        Contact us to get access
                      </Link>
                    </p>
                  </div>
                </form>
              </Card>
            </div>

            {/* Features */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Portal{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Features
                  </span>
                </h3>
                <p className="text-muted-foreground">
                  Discover what you can accomplish with your QuantumForge account.
                </p>
              </div>

              <div className="space-y-6">
                {features.map((feature) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={feature.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Need Help?</h4>
                  <p className="text-sm text-muted-foreground">
                    Our support team is available 24/7 to help you with any questions or issues.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                      Contact Support
                      <ArrowUpRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              What Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our clients about their experience with the QuantumForge portal.
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
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-primary font-semibold">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </CardDescription>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Enterprise{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Security
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Your data and projects are protected with enterprise-grade security measures and compliance standards.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">End-to-End Encryption</span>
                  </div>
                  <p className="text-sm text-muted-foreground">All data is encrypted in transit and at rest</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">SOC 2 Compliant</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Certified security and availability controls</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Multi-Factor Auth</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Enhanced account protection</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Regular Audits</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Continuous security monitoring</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
                <img
                  src="https://maxm-imggenurl.web.val.run/cybersecurity and data protection visualization with shields and locks, high quality"
                  alt="Enterprise security and data protection"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl" />
            </div>
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
                  Get Started?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Contact us to get access to your QuantumForge portal and start managing your projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Users className="h-5 w-5 mr-2" />
                  Get Portal Access
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                  View Solutions
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
