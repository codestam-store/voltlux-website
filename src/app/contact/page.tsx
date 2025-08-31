import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  ArrowRight,
  Users,
  Globe,
  Smartphone,
  Building,
  Star,
  Award,
  Shield,
  Zap,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with our team. We're here to help you transform your business with innovative digital solutions.",
  openGraph: {
    title: "Contact Us - NexusFlow",
    description: "Get in touch with our team. We're here to help you transform your business with innovative digital solutions.",
  },
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message and we'll get back to you within 24 hours.",
    contact: "hello@nexusflow.com",
    action: "Send Email",
    href: "mailto:hello@nexusflow.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team during business hours.",
    contact: "+1 (555) 123-4567",
    action: "Call Now",
    href: "tel:+15551234567"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant help from our support team.",
    contact: "Available 24/7",
    action: "Start Chat",
    href: "#chat"
  }
]

const officeLocations = [
  {
    city: "San Francisco",
    country: "United States",
    address: "123 Innovation Drive, Suite 100",
    zip: "94105",
    phone: "+1 (555) 123-4567",
    email: "sf@nexusflow.com",
    hours: "Mon-Fri: 9AM-6PM PST"
  },
  {
    city: "New York",
    country: "United States", 
    address: "456 Tech Avenue, Floor 15",
    zip: "10001",
    phone: "+1 (555) 987-6543",
    email: "nyc@nexusflow.com",
    hours: "Mon-Fri: 9AM-6PM EST"
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "789 Digital Street, Level 5",
    zip: "EC1A 1BB",
    phone: "+44 20 7123 4567",
    email: "london@nexusflow.com",
    hours: "Mon-Fri: 9AM-6PM GMT"
  }
]

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications and websites"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS and Android development"
  },
  {
    icon: Building,
    title: "Enterprise Solutions",
    description: "Large-scale business applications"
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end business modernization"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "NexusFlow transformed our entire digital infrastructure. Their team is incredibly professional and delivered beyond our expectations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, StartupXYZ",
    content: "Working with NexusFlow was a game-changer for our business. They understood our vision and executed it perfectly.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "VP Engineering, InnovateCo",
    content: "The quality of work and attention to detail from NexusFlow is outstanding. Highly recommended for any digital project.",
    rating: 5
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Let&apos;s Build{" "}
              <span className="text-primary">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our team and let&apos;s 
              discuss how we can help you achieve your digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the best way to reach us. We&apos;re here to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <Card key={method.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription className="text-base">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg font-semibold">{method.contact}</p>
                  <Button asChild className="w-full">
                    <Link href={method.href}>
                      {method.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <select 
                    id="service" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="consulting">Consulting</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project and how we can help..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Headquarters</h3>
                    <p className="text-muted-foreground">
                      123 Innovation Drive, Suite 100<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 4:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      Main: +1 (555) 123-4567<br />
                      Support: +1 (555) 123-4568<br />
                      Sales: +1 (555) 123-4569
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      General: hello@nexusflow.com<br />
                      Support: support@nexusflow.com<br />
                      Sales: sales@nexusflow.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We have offices around the world to serve our global clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeLocations.map((office) => (
              <Card key={office.city} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{office.city}</CardTitle>
                  <CardDescription className="text-base">{office.country}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                    <p className="text-sm text-muted-foreground">{office.zip}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{office.hours}</span>
                    </div>
                  </div>

                  <Button variant="outline" asChild className="w-full">
                    <Link href={`mailto:${office.email}`}>
                      Contact This Office
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Services We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of digital solutions and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground italic">
                    &quot;{testimonial.content}&quot;
                  </blockquote>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
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
                  We combine technical expertise with business acumen to deliver 
                  solutions that drive real results.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Proven Track Record</h3>
                    <p className="text-muted-foreground">
                      Over 500+ successful projects delivered across various industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Security First</h3>
                    <p className="text-muted-foreground">
                      Enterprise-grade security practices and compliance standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Results-Driven</h3>
                    <p className="text-muted-foreground">
                      Focus on measurable outcomes and business value delivery.
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
                      Cutting-edge technologies and modern development practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Team collaboration"
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
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90">
              Let&apos;s discuss your project and see how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#contact-form">
                  Start Your Project
                  <Rocket className="ml-2 h-4 w-4" />
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
