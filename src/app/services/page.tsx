import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Camera,
  Heart,
  Users,
  Building2,
  Palette,
  BookOpen,
  Clock,
  Star,
  CheckCircle,
  Eye,
  Award,
  Sparkles,
  Film,
  Image,
  Printer,
  Calendar
} from "lucide-react"

export const metadata: Metadata = {
  title: "Photography Services | Noir Studio - Vintage Film Photography",
  description: "Discover our comprehensive range of vintage film photography services including portraits, weddings, commercial shoots, and fine art prints. Timeless elegance in every frame.",
  publisher: "Codestam Technologies",
  openGraph: {
    title: "Photography Services | Noir Studio - Vintage Film Photography",
    description: "Discover our comprehensive range of vintage film photography services including portraits, weddings, commercial shoots, and fine art prints. Timeless elegance in every frame.",
    url: "https://codestam.com",
  },
}

const services = [
  {
    icon: Users,
    title: "Portrait Sessions",
    description: "Intimate individual and family portraits that capture the essence of your personality",
    features: [
      "Individual portrait sessions",
      "Family photography",
      "Professional headshots",
      "Maternity & newborn",
      "Senior portraits",
      "Pet photography"
    ],
    duration: "2-3 hours",
    deliverables: "20-30 edited images",
    price: "Starting at $350",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&h=400&fit=crop"
  },
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Timeless documentation of your special day with vintage elegance and emotional depth",
    features: [
      "Full day coverage",
      "Engagement sessions",
      "Bridal portraits",
      "Ceremony & reception",
      "Candid moments",
      "Family group photos"
    ],
    duration: "8-12 hours",
    deliverables: "100-200 edited images",
    price: "Starting at $2,500",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop"
  },
  {
    icon: Building2,
    title: "Commercial Photography",
    description: "Professional imagery for businesses, brands, and publications with artistic flair",
    features: [
      "Brand photography",
      "Product shoots",
      "Corporate portraits",
      "Editorial work",
      "Advertising campaigns",
      "Architecture photography"
    ],
    duration: "4-8 hours",
    deliverables: "30-50 edited images",
    price: "Starting at $800",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
  },
  {
    icon: Palette,
    title: "Fine Art Prints",
    description: "Museum-quality prints and custom framing services for your treasured photographs",
    features: [
      "Archival quality prints",
      "Custom framing",
      "Canvas & metal prints",
      "Limited edition series",
      "Gallery exhibitions",
      "Print restoration"
    ],
    duration: "1-2 weeks",
    deliverables: "Custom print sizes",
    price: "Starting at $75",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
  },
  {
    icon: Film,
    title: "Film Development",
    description: "Traditional darkroom processing and restoration services for vintage film",
    features: [
      "35mm & medium format",
      "Black & white processing",
      "Print development",
      "Negative scanning",
      "Photo restoration",
      "Archival storage"
    ],
    duration: "3-5 days",
    deliverables: "Developed film & prints",
    price: "Starting at $25",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=400&fit=crop"
  },
  {
    icon: BookOpen,
    title: "Photography Workshops",
    description: "Learn the art and craft of vintage film photography from experienced professionals",
    features: [
      "Film photography basics",
      "Darkroom techniques",
      "Composition & lighting",
      "Portrait photography",
      "Street photography",
      "One-on-one mentoring"
    ],
    duration: "4-6 hours",
    deliverables: "Hands-on experience",
    price: "Starting at $200",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop"
  }
]

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We begin with a detailed conversation about your vision, style preferences, and specific requirements.",
    icon: Eye
  },
  {
    step: "02",
    title: "Planning & Preparation",
    description: "We plan every detail of your session, from location scouting to equipment preparation and styling guidance.",
    icon: Clock
  },
  {
    step: "03",
    title: "Photography Session",
    description: "The magic happens during our session, where we capture authentic moments with artistic vision and technical precision.",
    icon: Camera
  },
  {
    step: "04",
    title: "Post-Production",
    description: "Each image is carefully processed and edited to achieve the perfect vintage aesthetic while maintaining authenticity.",
    icon: Palette
  },
  {
    step: "05",
    title: "Delivery & Prints",
    description: "Your final images are delivered digitally, with optional fine art prints and custom framing available.",
    icon: Printer
  }
]

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Bride",
    content: "Elena captured our wedding with such artistry and emotion. The vintage style perfectly matched our vision, and every photo tells our story beautifully.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "David Chen",
    role: "Business Owner",
    content: "The commercial photography for our brand exceeded all expectations. The artistic approach elevated our visual identity significantly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Maria Rodriguez",
    role: "Family Portrait Client",
    content: "Our family portraits are absolutely stunning. The vintage aesthetic and attention to detail made this experience truly special.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
        <div 
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&h=1080&fit=crop&crop=center" 
            alt="Photography workshop and learning environment"
            className="w-full h-full object-cover grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div
            className="space-y-8"
          >
            <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm tracking-wider uppercase">
              <Camera className="w-4 h-4 mr-2" />
              Our Services
            </Badge>

            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-tight tracking-tight"
            >
              Capturing Life&apos;s Most
              <span className="block text-primary typewriter-effect">
                Precious Moments
              </span>
            </h1>

            <p 
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              From intimate portraits to grand celebrations, we offer a comprehensive range of photography
              services, all captured with the timeless elegance of vintage film techniques.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button 
                asChild 
                size="lg" 
                className="retro-shadow text-base px-8 py-6 uppercase tracking-wider font-medium"
              >
                <Link href="/schedule" className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Book Your Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-8 py-6 uppercase tracking-wider font-medium vintage-border"
              >
                <Link href="/vehicles" className="flex items-center gap-3">
                  <Camera className="w-5 h-5" />
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div 
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1 vintage-border">
              What We Offer
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              Our Photography Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each service is crafted with meticulous attention to detail and artistic vision,
              ensuring your memories are preserved with timeless elegance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 vintage-border retro-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-background/90 rounded-xl flex items-center justify-center vintage-border">
                      <service.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="vintage-border">
                      {service.price}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-foreground mb-1">Duration</div>
                      <div className="text-muted-foreground">{service.duration}</div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Deliverables</div>
                      <div className="text-muted-foreground">{service.deliverables}</div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium text-foreground mb-3">What&apos;s Included:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-foreground flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full vintage-border">
                    <Link href="/schedule">
                      Book This Service
                      <ArrowRight className="ml-2 w-4 h-4" />
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
            <Badge variant="outline" className="px-3 py-1 vintage-border">
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven process ensures that every project is executed with precision,
              creativity, and attention to your unique vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-card border border-border rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 vintage-border retro-shadow">
                    <step.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1 vintage-border">
              Client Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The trust our clients place in us is the foundation of our success.
              Here&apos;s what they have to say about their experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 vintage-border retro-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover vintage-border"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">&quot;{testimonial.content}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              Ready to Begin Your Story?
            </h2>
            <p className="text-xl text-muted-foreground">
              Every great photograph begins with a vision. Let&apos;s discuss yours and create
              something truly extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="vintage-border">
                <Link href="/schedule">
                  Book Your Session
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="vintage-border">
                <Link href="/contact">
                  Get Custom Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}