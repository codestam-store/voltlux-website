import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight, 
  Code2, 
  Smartphone, 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  Database,
  Cloud,
  Lock,
  BarChart3,
  Palette,
  Cpu,
  Rocket,
  Target,
  CheckCircle,
  Star,
  Clock,
  MessageSquare,
  FileText,
  Settings,
  Wrench,
  TrendingUp,
  Lightbulb,
  Building2,
  Heart,
  Award,
  Eye,
  Brain,
  Handshake
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Codestam Technologies",
  description: "Comprehensive digital solutions including custom software development, mobile apps, web development, cloud infrastructure, cybersecurity, and digital transformation services.",
  openGraph: {
    title: "Services | Codestam Technologies",
    description: "Comprehensive digital solutions including custom software development, mobile apps, web development, cloud infrastructure, cybersecurity, and digital transformation services.",
  },
}

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored software solutions built from the ground up to meet your specific business requirements and objectives.",
    features: [
      "Enterprise applications",
      "Business process automation",
      "Legacy system modernization",
      "API development & integration",
      "Microservices architecture",
      "Scalable backend systems"
    ],
    color: "from-blue-500 to-cyan-500",
    price: "From $15,000"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: [
      "iOS & Android development",
      "React Native & Flutter",
      "Progressive Web Apps",
      "App store optimization",
      "Push notifications",
      "Offline functionality"
    ],
    color: "from-purple-500 to-pink-500",
    price: "From $12,000"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive, scalable web applications and platforms that drive engagement and business growth.",
    features: [
      "E-commerce platforms",
      "Content management systems",
      "Progressive web apps",
      "Single page applications",
      "Multi-tenant platforms",
      "Real-time applications"
    ],
    color: "from-green-500 to-emerald-500",
    price: "From $10,000"
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security measures and protocols to protect your digital assets and maintain compliance.",
    features: [
      "Security audits & assessments",
      "Penetration testing",
      "Compliance frameworks",
      "Data encryption",
      "Access control systems",
      "Security monitoring"
    ],
    color: "from-red-500 to-orange-500",
    price: "From $8,000"
  },
  {
    icon: Zap,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions that optimize performance, reduce costs, and ensure business continuity.",
    features: [
      "AWS, Azure, Google Cloud",
      "Container orchestration",
      "Serverless architecture",
      "Auto-scaling solutions",
      "Disaster recovery",
      "Cost optimization"
    ],
    color: "from-indigo-500 to-blue-500",
    price: "From $5,000"
  },
  {
    icon: Users,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize your business processes and technology stack.",
    features: [
      "Process optimization",
      "Technology assessment",
      "Change management",
      "Training & support",
      "Performance monitoring",
      "Continuous improvement"
    ],
    color: "from-yellow-500 to-orange-500",
    price: "From $25,000"
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, challenges, and requirements to create a comprehensive project plan.",
    icon: Target
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Our team designs the solution architecture and creates detailed technical specifications and wireframes.",
    icon: Palette
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your solution using agile methodologies with continuous testing and quality assurance.",
    icon: Code2
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description: "We deploy your solution to production with comprehensive monitoring and support systems in place.",
    icon: Rocket
  },
  {
    step: "05",
    title: "Support & Maintenance",
    description: "We provide ongoing support, maintenance, and updates to ensure your solution continues to perform optimally.",
    icon: Wrench
  }
]

const technologies = [
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "Java", "Go", "PHP", "Ruby"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"] },
  { category: "Cloud", items: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"] },
  { category: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"] },
  { category: "DevOps", items: ["CI/CD", "Terraform", "Ansible", "Jenkins", "GitLab"] }
]

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "CTO, TechFlow Solutions",
    content: "Codestam Technologies delivered our custom software solution ahead of schedule with exceptional quality. Their expertise in modern technologies and attention to detail exceeded our expectations.",
    rating: 5,
    service: "Custom Software Development"
  },
  {
    name: "Robert Chen",
    role: "CEO, InnovateCorp",
    content: "The mobile app developed by Codestam has transformed our customer engagement. The user experience is intuitive and the performance is outstanding across all devices.",
    rating: 5,
    service: "Mobile App Development"
  },
  {
    name: "Amanda Wilson",
    role: "IT Director, DataSync",
    content: "Our digital transformation project with Codestam has increased our operational efficiency by 300%. Their strategic approach and technical expertise are unmatched.",
    rating: 5,
    service: "Digital Transformation"
  }
]

export default function ServicesPage() {
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
                <Code2 className="w-4 h-4" />
                <span>Our Services</span>
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance">
                Comprehensive Digital
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We offer a full spectrum of digital services designed to transform your business and drive 
                sustainable growth. From custom software development to digital transformation, we have the 
                expertise to bring your vision to life.
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
                <Link href="#services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              What We Offer
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide end-to-end digital solutions that help businesses innovate, scale, and succeed 
              in the digital economy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                  <div className="text-lg font-semibold text-primary">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
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

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven development process ensures transparency, quality, and successful project delivery 
              from concept to completion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="relative mx-auto">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform translate-x-4 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Technologies
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Our Tech Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with the latest technologies and tools to deliver robust, scalable, and future-proof solutions.
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

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Client Success
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about 
              their experience working with us.
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
                  
                  <div className="space-y-2">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              The Codestam Advantage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with strategic thinking to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparent Process</h3>
                <p className="text-muted-foreground">
                  Clear communication and regular updates throughout the project lifecycle.
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">
                  Experienced professionals with deep expertise in modern technologies.
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-muted-foreground">
                  Track record of delivering successful projects that drive business growth.
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Long-term Partnership</h3>
                <p className="text-muted-foreground">
                  We build lasting relationships and provide ongoing support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let&apos;s discuss your project requirements and how we can help you achieve your digital goals 
                with our comprehensive services.
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
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Expert team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Proven results</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
