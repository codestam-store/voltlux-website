import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Shield, 
  BarChart3, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Lightbulb,
  Database,
  Lock,
  Search,
  Palette,
  MessageSquare,
  Settings,
  TrendingUp,
  Rocket
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Solutions",
  description: "Comprehensive digital solutions tailored to your business needs. From web development to cloud infrastructure.",
  openGraph: {
    title: "Solutions - NexusFlow",
    description: "Comprehensive digital solutions tailored to your business needs. From web development to cloud infrastructure.",
  },
}

const solutions = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies.",
    features: [
      "Responsive design for all devices",
      "Progressive Web Apps (PWA)",
      "E-commerce platforms",
      "Content management systems",
      "API development and integration",
      "Performance optimization"
    ],
    benefits: [
      "Improved user experience",
      "Increased conversion rates",
      "Better search engine rankings",
      "Scalable architecture"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: [
      "iOS and Android development",
      "React Native applications",
      "Flutter cross-platform apps",
      "App store optimization",
      "Push notifications",
      "Offline functionality"
    ],
    benefits: [
      "Reach mobile users effectively",
      "Enhanced user engagement",
      "Increased customer retention",
      "Better brand presence"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    features: [
      "AWS, Azure, and Google Cloud",
      "Container orchestration",
      "Serverless architecture",
      "Auto-scaling solutions",
      "Disaster recovery",
      "Cost optimization"
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Better performance"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    features: [
      "Security audits and assessments",
      "Penetration testing",
      "Vulnerability management",
      "Compliance frameworks",
      "Incident response",
      "Security training"
    ],
    benefits: [
      "Protection against threats",
      "Regulatory compliance",
      "Customer trust",
      "Risk mitigation"
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics solutions.",
    features: [
      "Business intelligence dashboards",
      "Predictive analytics",
      "Real-time data processing",
      "Data visualization",
      "Machine learning models",
      "Performance tracking"
    ],
    benefits: [
      "Data-driven decisions",
      "Improved efficiency",
      "Competitive advantage",
      "Better customer insights"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    icon: Users,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize your business operations.",
    features: [
      "Process automation",
      "Legacy system migration",
      "Digital strategy consulting",
      "Change management",
      "Technology assessment",
      "Implementation support"
    ],
    benefits: [
      "Operational efficiency",
      "Cost reduction",
      "Improved customer experience",
      "Future-ready business"
    ],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  }
]

const industries = [
  {
    icon: Target,
    title: "Healthcare",
    description: "Digital solutions for healthcare providers, improving patient care and operational efficiency."
  },
  {
    icon: TrendingUp,
    title: "Finance",
    description: "Secure, compliant financial technology solutions for banks and fintech companies."
  },
  {
    icon: Settings,
    title: "Manufacturing",
    description: "Industry 4.0 solutions for smart manufacturing and supply chain optimization."
  },
  {
    icon: Search,
    title: "Retail",
    description: "E-commerce and retail technology solutions to enhance customer experience."
  },
  {
    icon: MessageSquare,
    title: "Education",
    description: "EdTech solutions for modern learning environments and educational institutions."
  },
  {
    icon: Rocket,
    title: "Technology",
    description: "Innovative solutions for tech companies and startups to scale and grow."
  }
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Tailored{" "}
              <span className="text-primary">Digital Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver comprehensive digital solutions that address your specific business 
              challenges and drive measurable results across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={solution.title} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <solution.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{solution.title}</Badge>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">
                      {solution.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>

                  <div className="grid gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                      <div className="grid gap-3">
                        {solution.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-4">Benefits</h3>
                      <div className="grid gap-3">
                        {solution.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-3">
                            <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We have deep expertise across multiple industries and understand the unique 
              challenges and opportunities each sector presents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Card key={industry.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Our Solution Development Process
                </h2>
                <p className="text-lg text-muted-foreground">
                  We follow a proven methodology to ensure successful solution delivery 
                  and exceptional results for your business.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Discovery & Analysis</h3>
                    <p className="text-muted-foreground">
                      We start by understanding your business goals, challenges, and requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Solution Design</h3>
                    <p className="text-muted-foreground">
                      We create a detailed technical architecture and solution design.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Development & Testing</h3>
                    <p className="text-muted-foreground">
                      Our team builds and thoroughly tests your solution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Deployment & Support</h3>
                    <p className="text-muted-foreground">
                      We deploy your solution and provide ongoing support and maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Team collaboration and solution development"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90">
              Let&apos;s discuss your specific needs and create a custom solution 
              that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
