import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight, 
  Building2, 
  Heart, 
  BarChart3, 
  Lightbulb, 
  ShoppingBag,
  Home,
  GraduationCap,
  Truck,
  Plane,
  Car,
  Factory,
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
  Heart as HeartIcon,
  CreditCard,
  Microscope,
  Palette,
  Music,
  Camera,
  Gamepad2
} from "lucide-react"

export const metadata: Metadata = {
  title: "Industries | Codestam Technologies",
  description: "We serve diverse industries with tailored technology solutions. From healthcare to finance, education to manufacturing, we deliver innovative digital solutions that address industry-specific challenges.",
  openGraph: {
    title: "Industries | Codestam Technologies",
    description: "We serve diverse industries with tailored technology solutions. From healthcare to finance, education to manufacturing, we deliver innovative digital solutions that address industry-specific challenges.",
  },
}

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "Digital health solutions that improve patient care and operational efficiency.",
    challenges: [
      "Patient data management",
      "Regulatory compliance",
      "Interoperability",
      "Security & privacy",
      "Telemedicine integration",
      "Workflow optimization"
    ],
    solutions: [
      "Electronic Health Records (EHR)",
      "Telemedicine platforms",
      "Patient portals",
      "Medical billing systems",
      "Healthcare analytics",
      "Compliance management"
    ],
    color: "from-red-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
  },
  {
    icon: CreditCard,
    title: "Financial Services",
    description: "Secure fintech solutions for modern banking and financial institutions.",
    challenges: [
      "Security & fraud prevention",
      "Regulatory compliance",
      "Digital transformation",
      "Customer experience",
      "Data analytics",
      "Legacy system modernization"
    ],
    solutions: [
      "Digital banking platforms",
      "Payment processing systems",
      "Risk management tools",
      "Compliance automation",
      "Customer analytics",
      "Blockchain applications"
    ],
    color: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Innovative edtech solutions that enhance learning and institutional management.",
    challenges: [
      "Digital learning adoption",
      "Student engagement",
      "Administrative efficiency",
      "Data management",
      "Accessibility",
      "Assessment & evaluation"
    ],
    solutions: [
      "Learning Management Systems",
      "Virtual classrooms",
      "Student information systems",
      "Assessment platforms",
      "Educational analytics",
      "Mobile learning apps"
    ],
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1523240797355-351f22a1b9b3?w=600&h=400&fit=crop"
  },
  {
    icon: Building2,
    title: "Manufacturing",
    description: "Industry 4.0 solutions for smart manufacturing and operational excellence.",
    challenges: [
      "Supply chain optimization",
      "Quality control",
      "Predictive maintenance",
      "Inventory management",
      "Worker safety",
      "Sustainability"
    ],
    solutions: [
      "IoT monitoring systems",
      "Predictive analytics",
      "Quality management",
      "Supply chain platforms",
      "Safety monitoring",
      "Sustainability tracking"
    ],
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description: "Digital commerce solutions that drive sales and enhance customer experiences.",
    challenges: [
      "Omnichannel integration",
      "Inventory management",
      "Customer personalization",
      "Payment security",
      "Supply chain visibility",
      "Mobile commerce"
    ],
    solutions: [
      "E-commerce platforms",
      "Point of sale systems",
      "Inventory management",
      "Customer analytics",
      "Mobile apps",
      "AI recommendations"
    ],
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Comprehensive real estate technology for property management and transactions.",
    challenges: [
      "Property management",
      "Lead generation",
      "Document management",
      "Market analysis",
      "Virtual tours",
      "Transaction automation"
    ],
    solutions: [
      "Property management systems",
      "CRM platforms",
      "Virtual tour technology",
      "Market analytics",
      "Document management",
      "Mobile applications"
    ],
    color: "from-yellow-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
  }
]

const additionalIndustries = [
  { name: "Transportation & Logistics", icon: Truck, description: "Fleet management and supply chain optimization" },
  { name: "Travel & Hospitality", icon: Plane, description: "Booking systems and guest experience platforms" },
  { name: "Automotive", icon: Car, description: "Connected car solutions and dealership management" },
  { name: "Energy & Utilities", icon: Zap, description: "Smart grid and energy management systems" },
  { name: "Media & Entertainment", icon: Camera, description: "Content management and streaming platforms" },
  { name: "Gaming", icon: Gamepad2, description: "Game development and platform solutions" },
  { name: "Legal Services", icon: Shield, description: "Case management and legal automation" },
  { name: "Non-Profit", icon: HeartIcon, description: "Donor management and impact tracking" }
]

const technologies = [
  { category: "AI & Machine Learning", items: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Engines"] },
  { category: "Cloud & Infrastructure", items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"] },
  { category: "Security & Compliance", items: ["Encryption", "Access Control", "Audit Logging", "GDPR Compliance", "HIPAA Compliance"] },
  { category: "Data & Analytics", items: ["Big Data Processing", "Real-time Analytics", "Business Intelligence", "Data Warehousing"] },
  { category: "Mobile & IoT", items: ["Mobile Apps", "IoT Sensors", "Wearable Technology", "Connected Devices"] },
  { category: "Integration & APIs", items: ["REST APIs", "GraphQL", "Microservices", "Third-party Integrations"] }
]

const caseStudies = [
  {
    industry: "Healthcare",
    title: "Hospital Management System",
    description: "Developed a comprehensive hospital management system for a network of 50+ clinics.",
    results: ["40% reduction in appointment no-shows", "Streamlined patient workflows", "Improved compliance reporting"],
    metrics: ["50+ clinics", "100,000+ patients", "99.9% uptime"]
  },
  {
    industry: "Financial Services",
    title: "Digital Banking Platform",
    description: "Built a modern digital banking platform for a regional bank.",
    results: ["300% increase in mobile transactions", "Enhanced security compliance", "Improved customer satisfaction"],
    metrics: ["100,000+ users", "$2B+ transactions", "24/7 availability"]
  },
  {
    industry: "Manufacturing",
    title: "Smart Factory Solution",
    description: "Implemented IoT-based monitoring for a manufacturing facility.",
    results: ["25% reduction in downtime", "Improved quality control", "Real-time monitoring"],
    metrics: ["1000+ sensors", "24/7 monitoring", "95% efficiency gain"]
  }
]

const benefits = [
  {
    icon: Target,
    title: "Industry Expertise",
    description: "Deep understanding of industry-specific challenges, regulations, and best practices."
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Quick deployment with proven frameworks and industry-specific templates."
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Built-in compliance features for industry-specific regulations and standards."
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Architecture designed to grow with your business and handle increasing demands."
  }
]

export default function IndustriesPage() {
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
                <Building2 className="w-4 h-4" />
                <span>Industry Solutions</span>
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance">
                Serving Diverse
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Industries
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We understand the unique challenges and opportunities of different industries. 
                Our tailored technology solutions are designed to address industry-specific needs 
                and drive digital transformation across sectors.
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
                <Link href="#industries">
                  Explore Industries
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industries" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Our Focus
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Industry Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver specialized solutions for industries with unique requirements, 
              regulatory needs, and operational challenges.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-6 p-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center`}>
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{industry.title}</CardTitle>
                      </div>
                    </div>
                    
                    <CardDescription className="text-base">
                      {industry.description}
                    </CardDescription>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Challenges:</h4>
                        <ul className="space-y-1">
                          {industry.challenges.slice(0, 3).map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Our Solutions:</h4>
                        <ul className="space-y-1">
                          {industry.solutions.slice(0, 3).map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Star className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button asChild className="w-full group">
                      <Link href="/contact">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              More Industries
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Expanding Our Reach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We continue to expand our expertise into new industries, 
              delivering innovative solutions for emerging sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalIndustries.map((industry, index) => (
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
              Industry Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our industry-specific solutions have transformed businesses 
              and delivered measurable results across different sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{study.industry}</Badge>
                    <div className="text-sm text-muted-foreground">Case Study</div>
                  </div>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription className="text-base">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Metrics:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-sm text-muted-foreground">
                          • {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full">
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
              Industry-Ready Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge technologies that are specifically designed 
              to address industry challenges and requirements.
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
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Industry-Specific Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our deep industry knowledge and specialized expertise deliver 
              solutions that truly understand your business needs.
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
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let&apos;s discuss your industry-specific challenges and discover how our 
                tailored solutions can drive innovation and competitive advantage.
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
                <Link href="/solutions">
                  View Our Solutions
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
