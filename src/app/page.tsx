
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Smartphone, 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  Star,
  Play,
  ChevronRight,
  Building2,
  Database,
  Cloud,
  Lock,
  Target,
  BarChart3,
  Lightbulb,
  Rocket,
  Heart,
  ShoppingBag,
  Home
} from "lucide-react"

export const metadata: Metadata = {
  title: "Codestam Technologies - Innovative Digital Solutions",
  description: "Empowering businesses with cutting-edge digital solutions. Codestam Technologies transforms ideas into powerful, scalable applications that drive growth and success.",
  openGraph: {
    title: "Codestam Technologies - Innovative Digital Solutions",
    description: "Empowering businesses with cutting-edge digital solutions. Codestam Technologies transforms ideas into powerful, scalable applications that drive growth and success.",
  },
}

const features = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built with modern technologies and best practices to meet your unique business requirements.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive, scalable web applications and platforms that drive engagement and business growth.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security measures and protocols to protect your digital assets and maintain compliance.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Zap,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions that optimize performance, reduce costs, and ensure business continuity.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Users,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize your business processes and technology stack.",
    color: "from-yellow-500 to-orange-500"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechFlow Solutions",
    content: "Codestam Technologies transformed our legacy systems into a modern, scalable platform. Their expertise and dedication exceeded our expectations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "CEO, InnovateCorp",
    content: "The team at Codestam delivered our mobile app ahead of schedule with exceptional quality. Their attention to detail is remarkable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, DataSync",
    content: "Working with Codestam has been a game-changer for our business. Their innovative solutions have increased our efficiency by 300%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
]

const stats = [
  { label: "Projects Completed", value: "500+", icon: CheckCircle },
  { label: "Happy Clients", value: "200+", icon: Heart },
  { label: "Team Members", value: "50+", icon: Users },
  { label: "Years Experience", value: "8+", icon: Award }
]

const industries = [
  { name: "Healthcare", icon: Heart, description: "Digital health solutions and patient care platforms" },
  { name: "Finance", icon: BarChart3, description: "Fintech applications and financial management systems" },
  { name: "Education", icon: Lightbulb, description: "E-learning platforms and educational technology" },
  { name: "E-commerce", icon: ShoppingBag, description: "Online retail solutions and marketplace platforms" },
  { name: "Manufacturing", icon: Building2, description: "Industry 4.0 and smart manufacturing solutions" },
  { name: "Real Estate", icon: Home, description: "Property management and real estate technology" }
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="inline-flex items-center space-x-2 px-3 py-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Innovation at its finest</span>
                </Badge>
                
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance">
                  Transforming Ideas Into
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Digital Excellence
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Codestam Technologies empowers businesses with cutting-edge digital solutions. 
                  We transform your vision into powerful, scalable applications that drive growth and success.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about" className="group">
                    <Play className="mr-2 w-4 h-4" />
                    Watch Our Story
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-8">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=40&h=40&fit=crop&crop=face`}
                        alt={`Team member ${i}`}
                        className="w-10 h-10 rounded-full border-2 border-background"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Trusted by 200+ companies</div>
                    <div className="text-muted-foreground">Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-card border border-border rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-muted-foreground">codestam.dev</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                    <div className="h-4 bg-muted rounded w-5/6"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
                    <div className="h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-2xl opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a full spectrum of digital services designed to transform your business 
              and drive sustainable growth in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto group-hover:translate-x-1 transition-transform">
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say 
              about their experience working with Codestam Technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg mb-6">
                    &quot;{testimonial.content}&quot;
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Industries
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Serving Diverse Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions 
              that address unique challenges and drive innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let&apos;s discuss how Codestam Technologies can help you achieve your digital goals 
                and drive sustainable growth for your organization.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Custom solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="w-4 h-4" />
                <span>Fast delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
