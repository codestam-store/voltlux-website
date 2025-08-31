import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Building2,
  Heart,
  BarChart3,
  Lightbulb,
  GraduationCap,
  Home,
  Car,
  Plane,
  Truck,
  CreditCard,
  Shield,
  Zap,
  Users,
  Globe,
  Database,
  Cloud,
  Lock,
  Target,
  CheckCircle,
  Star,
  Clock,
  MessageSquare,
  FileText,
  Settings,
  Wrench,
  TrendingUp,
  Eye,
  Brain,
  Handshake,
  Rocket,
  Award,
  Heart as HeartIcon
} from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions | Codestam Technologies",
  description: "Industry-specific technology solutions designed to address unique challenges and drive innovation. From e-commerce platforms to enterprise software, we deliver tailored solutions that transform businesses.",
  openGraph: {
    title: "Solutions | Codestam Technologies",
    description: "Industry-specific technology solutions designed to address unique challenges and drive innovation. From e-commerce platforms to enterprise software, we deliver tailored solutions that transform businesses.",
  },
}

const solutions = [
  {
    icon: ShoppingBag,
    title: "E-commerce Platforms",
    description: "Complete e-commerce solutions that drive sales and enhance customer experiences.",
    features: [
      "Multi-channel selling",
      "Inventory management",
      "Payment processing",
      "Customer analytics",
      "Mobile commerce",
      "AI-powered recommendations"
    ],
    color: "from-blue-500 to-cyan-500",
    price: "From $25,000"
  },
  {
    icon: Building2,
    title: "Enterprise Software",
    description: "Scalable enterprise applications that streamline operations and boost productivity.",
    features: [
      "Custom ERP systems",
      "Workflow automation",
      "Data integration",
      "Reporting dashboards",
      "User management",
      "API development"
    ],
    color: "from-purple-500 to-pink-500",
    price: "From $50,000"
  },
  {
    icon: CreditCard,
    title: "Fintech Applications",
    description: "Secure financial technology solutions for modern banking and payment needs.",
    features: [
      "Payment gateways",
      "Digital wallets",
      "Investment platforms",
      "Risk management",
      "Compliance tools",
      "Blockchain integration"
    ],
    color: "from-green-500 to-emerald-500",
    price: "From $35,000"
  },
  {
    icon: Heart,
    title: "Healthcare Systems",
    description: "Digital health solutions that improve patient care and operational efficiency.",
    features: [
      "Patient management",
      "Electronic health records",
      "Telemedicine platforms",
      "Medical billing",
      "Appointment scheduling",
      "Health analytics"
    ],
    color: "from-red-500 to-orange-500",
    price: "From $40,000"
  },
  {
    icon: GraduationCap,
    title: "Educational Technology",
    description: "Innovative learning platforms that enhance education delivery and student engagement.",
    features: [
      "Learning management systems",
      "Virtual classrooms",
      "Student portals",
      "Assessment tools",
      "Content management",
      "Analytics dashboard"
    ],
    color: "from-indigo-500 to-blue-500",
    price: "From $30,000"
  },
  {
    icon: Home,
    title: "Real Estate Technology",
    description: "Comprehensive real estate platforms for property management and transactions.",
    features: [
      "Property listings",
      "Virtual tours",
      "Lead management",
      "Document management",
      "Market analytics",
      "Mobile apps"
    ],
    color: "from-yellow-500 to-orange-500",
    price: "From $20,000"
  }
]

const industries = [
  { name: "Retail & E-commerce", icon: ShoppingBag, description: "Digital transformation for retail businesses" },
  { name: "Financial Services", icon: CreditCard, description: "Fintech solutions for modern banking" },
  { name: "Healthcare", icon: Heart, description: "Digital health and patient care platforms" },
  { name: "Education", icon: GraduationCap, description: "EdTech solutions for learning institutions" },
  { name: "Manufacturing", icon: Building2, description: "Industry 4.0 and smart manufacturing" },
  { name: "Real Estate", icon: Home, description: "Property management and real estate tech" },
  { name: "Transportation", icon: Truck, description: "Logistics and fleet management solutions" },
  { name: "Travel & Hospitality", icon: Plane, description: "Booking and hospitality management" }
]

const technologies = [
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "Java", "Go", "PHP", "Ruby"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"] },
  { category: "Cloud", items: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"] },
  { category: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"] },
  { category: "AI/ML", items: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Scikit-learn"] }
]

const caseStudies = [
  {
    title: "E-commerce Platform Transformation",
    industry: "Retail",
    description: "Helped a major retailer increase online sales by 300% with a modern e-commerce platform.",
    results: ["300% increase in online sales", "50% reduction in cart abandonment", "Improved mobile conversion rates"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
  },
  {
    title: "Healthcare Management System",
    industry: "Healthcare",
    description: "Developed a comprehensive patient management system for a network of clinics.",
    results: ["Streamlined patient workflows", "Reduced appointment no-shows by 40%", "Improved patient satisfaction"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
  },
  {
    title: "Fintech Payment Platform",
    industry: "Financial Services",
    description: "Built a secure payment processing platform for a growing fintech startup.",
    results: ["99.9% uptime achieved", "Processed $10M+ in transactions", "Enhanced security compliance"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
  }
]

const benefits = [
  {
    icon: Target,
    title: "Industry Expertise",
    description: "Deep understanding of industry-specific challenges and regulatory requirements."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Quick implementation with proven frameworks and best practices."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Built-in security measures and compliance with industry standards."
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Solutions that grow with your business and handle increasing demands."
  }
]

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge variant="secondary" className="inline-flex items-center space-x-2 px-3 py-1">
                <Sparkles className="w-4 h-4" />
                <span>Industry Solutions</span>
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance">
                Industry-Specific
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We deliver tailored technology solutions designed to address the unique challenges
                and opportunities of your industry. From e-commerce platforms to enterprise software,
                we help businesses innovate and succeed in the digital age.
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
                <Link href="#solutions">
                  View All Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Our Solutions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Tailored for Your Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand that each industry has unique requirements and challenges.
              Our solutions are designed to address these specific needs and drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                  <div className="text-lg font-semibold text-primary">
                    {solution.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full mt-6 group">
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Industries We Serve
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Across All Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering innovative solutions
              that address unique challenges and drive digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Case Studies Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our industry-specific solutions have transformed businesses
              and delivered measurable results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 left-4">
                    {study.industry}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription className="text-base">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild variant="outline" className="w-full mt-6">
                    <Link href="/contact">
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Technology Stack
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Built with Modern Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to deliver robust,
              scalable, and future-proof solutions for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Why Choose Our Solutions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              The Codestam Advantage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our industry-specific solutions deliver more than just technology -
              they deliver measurable business value and competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
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
                Let&apos;s discuss your industry-specific challenges and discover how our
                tailored solutions can drive innovation and growth for your organization.
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
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>Industry expertise</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4" />
                <span>Custom solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Handshake className="w-4 h-4" />
                <span>Proven results</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
