
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Code,
  Rocket,
  Globe,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Star,
  Play
} from "lucide-react";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Brain className="h-3 w-3 mr-1" />
              AI-Powered Digital Solutions
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Next-Gen Technology
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              NexusFlow delivers cutting-edge digital solutions that drive innovation,
              efficiency, and growth. From AI-powered automation to scalable cloud infrastructure,
              we help businesses thrive in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="border-border/50">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Trusted by 500+ companies</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.9/5 customer rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-blue-500" />
                <span>Industry leader since 2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end digital solutions
              that transform businesses and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "AI & Machine Learning",
                description: "Intelligent automation, predictive analytics, and cognitive computing solutions.",
                features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"]
              },
              {
                icon: Code,
                title: "Web Development",
                description: "Modern, scalable web applications built with cutting-edge technologies.",
                features: ["React/Next.js", "Node.js Backend", "Progressive Web Apps"]
              },
              {
                icon: Rocket,
                title: "Digital Transformation",
                description: "End-to-end business digitization and process optimization.",
                features: ["Process Automation", "Legacy Modernization", "Change Management"]
              },
              {
                icon: Globe,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and DevOps automation.",
                features: ["AWS/Azure/GCP", "Container Orchestration", "CI/CD Pipelines"]
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Advanced security protocols and threat protection systems.",
                features: ["Zero Trust Architecture", "Threat Detection", "Compliance"]
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Speed and efficiency optimization for maximum ROI.",
                features: ["Load Testing", "Database Optimization", "Caching Strategies"]
              }
            ].map((solution, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/solutions/${solution.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="ghost" className="mt-4 w-full group-hover:bg-primary/10">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Happy Clients", icon: Users },
              { number: "95%", label: "Success Rate", icon: TrendingUp },
              { number: "24/7", label: "Support", icon: Shield },
              { number: "50+", label: "Team Experts", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of companies that have already accelerated their digital transformation
            with NexusFlow. Let&apos;s build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
