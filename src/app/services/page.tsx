import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Globe, 
  Smartphone, 
  Users, 
  Zap, 
  Shield, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Code,
  Database,
  Cloud,
  Lock,
  Palette,
  Search,
  MessageSquare,
  Settings,
  TrendingUp,
  Target
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Services",
  description: "Comprehensive digital solutions including web development, mobile apps, consulting, and more.",
  openGraph: {
    title: "Services - NexusFlow",
    description: "Comprehensive digital solutions including web development, mobile apps, consulting, and more.",
  },
}

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    features: [
      "Responsive design for all devices",
      "Modern frameworks (React, Next.js, Vue)",
      "Performance optimization",
      "SEO-friendly architecture",
      "Content management systems",
      "E-commerce solutions"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions (React Native, Flutter)",
      "App store optimization",
      "Push notifications",
      "Offline functionality",
      "Performance monitoring"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    id: "consulting",
    icon: Users,
    title: "Digital Consulting",
    description: "Strategic guidance to help you navigate digital transformation and technology decisions.",
    features: [
      "Technology strategy planning",
      "Digital transformation roadmaps",
      "Architecture reviews",
      "Performance audits",
      "Security assessments",
      "Team training and mentoring"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  }
]

const additionalServices = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services."
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimized database architecture and management."
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Comprehensive security audits and implementation."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that drives engagement."
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Digital marketing strategies to grow your online presence."
  },
  {
    icon: MessageSquare,
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance for your digital products."
  }
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business goals, challenges, and requirements."
  },
  {
    step: "02",
    title: "Planning",
    description: "We create a detailed roadmap and technical architecture for your project."
  },
  {
    step: "03",
    title: "Development",
    description: "Our team builds your solution using modern technologies and best practices."
  },
  {
    step: "04",
    title: "Testing",
    description: "Rigorous testing ensures quality, performance, and security."
  },
  {
    step: "05",
    title: "Deployment",
    description: "We deploy your solution and provide training for your team."
  },
  {
    step: "06",
    title: "Support",
    description: "Ongoing support and maintenance to keep your solution running smoothly."
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Comprehensive{" "}
              <span className="text-primary">Digital Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From web development to mobile apps and strategic consulting, we provide 
              end-to-end digital solutions that drive growth and success for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{service.title}</Badge>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a wide range of specialized services to support your digital needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <Card key={step.step} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Why Choose NexusFlow?
                </h2>
                <p className="text-lg text-muted-foreground">
                  We combine technical expertise with business acumen to deliver solutions 
                  that not only work flawlessly but also drive real business value.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                    <p className="text-muted-foreground">
                      We deliver projects on time and within budget, without compromising quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quality Assured</h3>
                    <p className="text-muted-foreground">
                      Rigorous testing and quality assurance processes ensure reliable solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our experienced team brings diverse skills and deep industry knowledge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Results Focused</h3>
                    <p className="text-muted-foreground">
                      We measure success by the business impact and value we deliver to our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Team collaboration and development"
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90">
              Let&apos;s discuss your requirements and create a custom solution that 
              perfectly fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
