import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Target, 
  TrendingUp, 
  Settings, 
  Search, 
  MessageSquare, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Shield,
  BarChart3,
  Zap,
  Lightbulb,
  Database,
  Lock,
  Palette,
  Cloud,
  Smartphone
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Industries",
  description: "Digital solutions tailored for specific industries. From healthcare to finance, we understand your unique challenges.",
  openGraph: {
    title: "Industries - NexusFlow",
    description: "Digital solutions tailored for specific industries. From healthcare to finance, we understand your unique challenges.",
  },
}

const industries = [
  {
    icon: Target,
    title: "Healthcare",
    description: "Digital solutions for healthcare providers, improving patient care and operational efficiency.",
    challenges: [
      "Patient data management",
      "Regulatory compliance",
      "Interoperability",
      "Security and privacy"
    ],
    solutions: [
      "Electronic Health Records (EHR)",
      "Telemedicine platforms",
      "HIPAA-compliant systems",
      "Patient portals"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    icon: TrendingUp,
    title: "Finance",
    description: "Secure, compliant financial technology solutions for banks and fintech companies.",
    challenges: [
      "Regulatory compliance",
      "Security threats",
      "Legacy system integration",
      "Customer experience"
    ],
    solutions: [
      "Digital banking platforms",
      "Payment processing systems",
      "Risk management tools",
      "Compliance automation"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    icon: Settings,
    title: "Manufacturing",
    description: "Industry 4.0 solutions for smart manufacturing and supply chain optimization.",
    challenges: [
      "Supply chain complexity",
      "Quality control",
      "Operational efficiency",
      "Predictive maintenance"
    ],
    solutions: [
      "IoT integration",
      "Predictive analytics",
      "Quality management systems",
      "Supply chain optimization"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    icon: Search,
    title: "Retail",
    description: "E-commerce and retail technology solutions to enhance customer experience.",
    challenges: [
      "Omnichannel integration",
      "Inventory management",
      "Customer personalization",
      "Competition from online"
    ],
    solutions: [
      "E-commerce platforms",
      "Inventory management systems",
      "Customer analytics",
      "Omnichannel solutions"
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    icon: MessageSquare,
    title: "Education",
    description: "EdTech solutions for modern learning environments and educational institutions.",
    challenges: [
      "Remote learning adoption",
      "Student engagement",
      "Administrative efficiency",
      "Technology integration"
    ],
    solutions: [
      "Learning management systems",
      "Virtual classrooms",
      "Student portals",
      "Administrative tools"
    ],
    image: "https://images.unsplash.com/photo-1523240794102-9eb5ccbdd663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    icon: Rocket,
    title: "Technology",
    description: "Innovative solutions for tech companies and startups to scale and grow.",
    challenges: [
      "Rapid scaling",
      "Technical debt",
      "Talent acquisition",
      "Market competition"
    ],
    solutions: [
      "Scalable architectures",
      "DevOps automation",
      "Product development tools",
      "Analytics platforms"
    ],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  }
]

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications tailored to industry-specific requirements."
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions for industry workflows."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure optimized for industry needs."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Industry-specific security solutions and compliance frameworks."
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Business intelligence and analytics for industry insights."
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end digital transformation for industry modernization."
  }
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Industry Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Solutions for{" "}
              <span className="text-primary">Every Industry</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the unique challenges and opportunities each industry presents. 
              Our tailored solutions drive innovation and growth across all sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div key={industry.title} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <industry.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{industry.title}</Badge>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">
                      {industry.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>

                  <div className="grid gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Key Challenges</h3>
                      <div className="grid gap-3">
                        {industry.challenges.map((challenge) => (
                          <div key={challenge} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                            <span className="text-muted-foreground">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-4">Our Solutions</h3>
                      <div className="grid gap-3">
                        {industry.solutions.map((solution) => (
                          <div key={solution} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{solution}</span>
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
                    src={industry.image}
                    alt={industry.title}
                    className="rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Services Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive digital services that can be tailored to meet 
              the specific needs of any industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Why Choose NexusFlow for Your Industry?
                </h2>
                <p className="text-lg text-muted-foreground">
                  We bring deep industry knowledge combined with technical expertise 
                  to deliver solutions that truly understand your business.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Industry Expertise</h3>
                    <p className="text-muted-foreground">
                      Deep understanding of industry-specific challenges, regulations, and best practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Innovation Focus</h3>
                    <p className="text-muted-foreground">
                      Cutting-edge solutions that keep you ahead of industry trends and competition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Compliance Ready</h3>
                    <p className="text-muted-foreground">
                      Solutions built with industry regulations and compliance requirements in mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Scalable Solutions</h3>
                    <p className="text-muted-foreground">
                      Technology that grows with your business and adapts to changing industry needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Industry collaboration and expertise"
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
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl opacity-90">
              Let&apos;s discuss how we can help you navigate industry challenges 
              and leverage technology for competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/solutions">View Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
