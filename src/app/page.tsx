
import { getBuildConfig } from '@/lib/build-config'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  Smartphone,
  Code,
  BarChart3,
  Lightbulb,
  Rocket
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const config = getBuildConfig()

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that keeps your users engaged and satisfied."
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "Enterprise-grade security built into every layer of our solutions."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy anywhere with our cloud-native architecture and CDN."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Responsive design that works perfectly on all devices."
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable, scalable codebase that grows with your business."
    },
    {
      icon: BarChart3,
      title: "Analytics Ready",
      description: "Built-in analytics and insights to track your success."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "NexusFlow transformed our digital presence completely. The results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupXYZ",
      content: "The team at NexusFlow delivered exactly what we needed, on time and on budget.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "Our conversion rates increased by 300% after implementing NexusFlow's solutions.",
      rating: 5
    }
  ]

  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Team Members", value: "50+" },
    { label: "Years Experience", value: "10+" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  {config.category} • {config.style} • {config.theme}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Transform Your Digital Presence with{" "}
                  <span className="text-primary">Innovative Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  We empower businesses with cutting-edge digital solutions that drive growth, 
                  enhance user experiences, and deliver measurable results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Money Back Guarantee</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Modern office workspace with technology"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose NexusFlow?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver 
              solutions that exceed expectations and drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
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
              Let&apos;s discuss how we can help you achieve your digital goals and 
              take your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your Project
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

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients 
              have to say about working with NexusFlow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <Lightbulb className="h-16 w-16 text-primary mx-auto" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to take the next step? Contact us today and let&apos;s discuss 
              how we can help you achieve your goals.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get In Touch
                <Rocket className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
