import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Heart,
  Shield,
  Zap,
  Rocket,
  Star,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "About - QuantumForge",
  description: "Learn about QuantumForge's mission to revolutionize digital experiences with cutting-edge quantum computing, AI solutions, and advanced web development.",
  keywords: ["about us", "mission", "vision", "team", "values", "company", "leadership"],
  openGraph: {
    title: "About - QuantumForge",
    description: "Learn about QuantumForge's mission to revolutionize digital experiences with cutting-edge quantum computing, AI solutions, and advanced web development.",
    url: "https://quantumforge.com/about",
    siteName: "QuantumForge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuantumForge About",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - QuantumForge",
    description: "Learn about QuantumForge's mission to revolutionize digital experiences with cutting-edge quantum computing, AI solutions, and advanced web development.",
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

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible, exploring cutting-edge technologies to solve complex problems.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Heart,
    title: "Excellence",
    description: "We strive for excellence in everything we do, delivering exceptional quality and outstanding results for our clients.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with honesty, transparency, and ethical practices, building trust with our clients and partners.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and collaboration, both within our organization and with our clients.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    title: "Results",
    description: "We focus on delivering measurable, impactful results that drive real business value and transformation.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Agility",
    description: "We adapt quickly to changing needs and technologies, ensuring we stay ahead of the curve and deliver optimal solutions.",
    color: "from-indigo-500 to-purple-500"
  }
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    description: "Former quantum computing researcher with 15+ years of experience in AI and technology leadership.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/sarah-chen"
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    description: "Expert in cloud architecture and distributed systems with a passion for scalable solutions.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/marcus-rodriguez"
  },
  {
    name: "Emily Watson",
    role: "Chief Innovation Officer",
    description: "Pioneer in quantum AI applications with extensive experience in research and development.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/emily-watson"
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    description: "Seasoned engineering leader with expertise in building high-performance teams and systems.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/david-kim"
  },
  {
    name: "Lisa Park",
    role: "VP of Product",
    description: "Product strategist with deep understanding of user needs and market dynamics.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/lisa-park"
  },
  {
    name: "Alex Thompson",
    role: "VP of Sales",
    description: "Sales leader with proven track record of building relationships and driving growth.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/alex-thompson"
  }
];

const milestones = [
  {
    year: "2016",
    title: "Company Founded",
    description: "QuantumForge was established with a vision to revolutionize digital experiences through quantum computing and AI."
  },
  {
    year: "2018",
    title: "First Quantum AI Solution",
    description: "Successfully developed and deployed our first quantum-powered AI solution for a major healthcare provider."
  },
  {
    year: "2020",
    title: "Series A Funding",
    description: "Secured $10M in Series A funding to expand our team and accelerate product development."
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Opened offices in Europe and Asia to serve our growing international client base."
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Named one of the top 10 AI companies and received multiple industry awards for innovation."
  },
  {
    year: "2024",
    title: "Quantum Breakthrough",
    description: "Achieved a major breakthrough in quantum neural networks, setting new industry standards."
  }
];

const stats = [
  { label: "Team Members", value: "50+", icon: Users },
  { label: "Projects Delivered", value: "500+", icon: Rocket },
  { label: "Client Satisfaction", value: "99.8%", icon: Star },
  { label: "Years Experience", value: "8+", icon: Clock }
];

export default function AboutPage() {
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
                  About QuantumForge
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Pioneering the{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Future
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  We are at the forefront of digital innovation, combining quantum computing principles with cutting-edge AI to create solutions that were once thought impossible.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#mission">
                  <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Rocket className="h-5 w-5 mr-2" />
                    Learn More
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                    <Users className="h-5 w-5 mr-2" />
                    Join Our Team
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

      {/* Mission & Vision */}
      <section id="mission" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/30">
                  Our Mission
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold">
                  Revolutionizing{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Digital Experiences
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our mission is to harness the power of quantum computing and artificial intelligence to create transformative digital solutions that solve the world&apos;s most complex problems.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a future where quantum computing and AI work seamlessly together to unlock unprecedented possibilities, enabling businesses and individuals to achieve what was once impossible.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Innovation</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Pushing technological boundaries</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Excellence</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Delivering exceptional quality</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Impact</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Creating real business value</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Future</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Building tomorrow&apos;s solutions</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
                <img
                  src="https://maxm-imggenurl.web.val.run/quantum computing research laboratory with scientists working on advanced technology, high quality"
                  alt="Quantum computing research laboratory"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The core principles that guide everything we do and shape our culture of innovation and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex justify-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {value.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {value.description}
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Leadership
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in quantum computing, AI, and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {member.role}
                    </CardDescription>
                    <CardDescription className="text-muted-foreground mt-2">
                      {member.description}
                    </CardDescription>
                  </div>
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                      <ArrowUpRight className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 to-primary/10"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {milestone.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                          {milestone.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
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
                Join Our{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Be part of a team that&apos;s shaping the future of technology and transforming the digital landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Users className="h-5 w-5 mr-2" />
                  View Careers
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                  Get in Touch
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
