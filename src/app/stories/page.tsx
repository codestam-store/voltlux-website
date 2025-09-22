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
  Clock,
  User,
  MapPin,
  Calendar,
  Eye,
  BookOpen,
  Star,
  Quote,
  Image as ImageIcon,
  Award
} from "lucide-react"

export const metadata: Metadata = {
  title: "Stories | Noir Studio - Vintage Film Photography",
  description: "Discover the stories behind our vintage film photography. Read about memorable sessions, client experiences, and the art of capturing timeless moments in black and white.",
  publisher: "Codestam Technologies",
  openGraph: {
    title: "Stories | Noir Studio - Vintage Film Photography",
    description: "Discover the stories behind our vintage film photography. Read about memorable sessions, client experiences, and the art of capturing timeless moments in black and white.",
    url: "https://codestam.com",
  },
}

const featuredStories = [
  {
    id: 1,
    title: "A Love Story Fifty Years in the Making",
    subtitle: "Golden Anniversary Portrait Session",
    excerpt: "When Margaret and Robert came to us for their 50th anniversary portraits, they brought with them a lifetime of memories and a love that had only grown stronger with time.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop",
    category: "Portrait",
    readTime: "5 min read",
    date: "December 15, 2023",
    author: "Elena Blackwood",
    featured: true
  },
  {
    id: 2,
    title: "The Vintage Wedding of Dreams",
    subtitle: "Sarah & Michael&apos;s Timeless Celebration",
    excerpt: "Set in a 1920s mansion, this wedding was a perfect match for our vintage aesthetic. Every detail, from the bride&apos;s grandmother&apos;s dress to the antique car, told a story.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    category: "Wedding",
    readTime: "8 min read",
    date: "November 28, 2023",
    author: "Sophia Noir",
    featured: true
  },
  {
    id: 3,
    title: "Preserving Family Legacy",
    subtitle: "Four Generations in One Frame",
    excerpt: "The Johnson family wanted to create a portrait that would honor their matriarch&apos;s 90th birthday. The result was a powerful image spanning four generations.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
    category: "Family",
    readTime: "6 min read",
    date: "October 12, 2023",
    author: "Marcus Sterling",
    featured: true
  }
]

const recentStories = [
  {
    id: 4,
    title: "The Art of Film Photography",
    subtitle: "Why We Choose Analog in a Digital World",
    excerpt: "In an age of instant digital photography, we explore why film continues to offer something unique and irreplaceable.",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
    category: "Behind the Scenes",
    readTime: "4 min read",
    date: "January 8, 2024",
    author: "Elena Blackwood"
  },
  {
    id: 5,
    title: "A Day in Our Darkroom",
    subtitle: "The Magic of Traditional Development",
    excerpt: "Step into our darkroom and discover the meditative process of developing film and creating prints by hand.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    category: "Process",
    readTime: "7 min read",
    date: "December 22, 2023",
    author: "Vincent Grey"
  },
  {
    id: 6,
    title: "Teaching the Next Generation",
    subtitle: "Our Photography Workshop Experience",
    excerpt: "Meet the students who are keeping the art of film photography alive and learn about their journey with us.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop",
    category: "Education",
    readTime: "5 min read",
    date: "November 15, 2023",
    author: "Marcus Sterling"
  },
  {
    id: 7,
    title: "The Perfect Light",
    subtitle: "Chasing Golden Hour in the City",
    excerpt: "How we work with natural light to create dramatic, timeless portraits in urban environments.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=300&fit=crop",
    category: "Technique",
    readTime: "6 min read",
    date: "October 30, 2023",
    author: "Sophia Noir"
  },
  {
    id: 8,
    title: "Client Spotlight: The Artist",
    subtitle: "Capturing Creative Souls",
    excerpt: "A portrait session with local artist Maria Rodriguez, exploring how we capture the essence of creative individuals.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop",
    category: "Portrait",
    readTime: "4 min read",
    date: "September 18, 2023",
    author: "Elena Blackwood"
  },
  {
    id: 9,
    title: "Restoration Project",
    subtitle: "Bringing Old Photos Back to Life",
    excerpt: "The story of how we restored a family&apos;s century-old photographs, preserving memories for future generations.",
    image: "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=400&h=300&fit=crop",
    category: "Restoration",
    readTime: "8 min read",
    date: "August 25, 2023",
    author: "Vincent Grey"
  }
]

const categories = [
  { name: "All Stories", count: 12, active: true },
  { name: "Portrait", count: 4, active: false },
  { name: "Wedding", count: 3, active: false },
  { name: "Behind the Scenes", count: 2, active: false },
  { name: "Process", count: 2, active: false },
  { name: "Education", count: 1, active: false }
]

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Bride",
    content: "Elena didn&apos;t just photograph our wedding; she captured the soul of our celebration. Every image tells our story with such artistry and emotion.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Robert Johnson",
    role: "Family Portrait Client",
    content: "The four-generation portrait session was magical. Marcus made everyone feel comfortable, and the final image is now our family&apos;s most treasured possession.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Maria Rodriguez",
    role: "Artist & Portrait Client",
    content: "As an artist myself, I appreciate the incredible attention to detail and artistic vision that Noir Studio brings to every session.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
]

export default function StoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
        <div 
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop&crop=center" 
            alt="Wedding photography scene"
            className="w-full h-full object-cover grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm tracking-wider uppercase">
              <BookOpen className="w-4 h-4 mr-2" />
              Our Stories
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-tight tracking-tight">
              Stories Behind
              <span className="block text-primary typewriter-effect">
                Every Frame
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover the stories, experiences, and moments that inspire our work. From memorable
              sessions to behind-the-scenes insights, explore the world of vintage film photography.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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

      {/* Featured Stories */}
      <section id="featured-stories" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1 vintage-border">
              Featured Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              Stories That Inspire Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These are the stories that remind us why we fell in love with photography—
              the human connections, the emotions, and the timeless moments we&apos;re privileged to capture.
            </p>
          </div>

          <div className="space-y-12">
            {featuredStories.map((story, index) => (
              <Card key={story.id} className={`group hover:shadow-lg transition-all duration-300 vintage-border retro-shadow ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="vintage-border">
                        {story.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{story.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{story.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{story.author}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl lg:text-3xl font-bold">{story.title}</h3>
                        <p className="text-lg text-muted-foreground font-medium">{story.subtitle}</p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{story.excerpt}</p>

                      <Button variant="outline" className="w-fit vintage-border">
                        Read Full Story
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className="vintage-border"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Stories Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1 vintage-border">
              Recent Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              Latest from Our Journal
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay up to date with our latest projects, insights, and behind-the-scenes
              glimpses into the world of vintage film photography.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentStories.map((story) => (
              <Card key={story.id} className="group hover:shadow-lg transition-all duration-300 vintage-border retro-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="vintage-border text-xs">
                      {story.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{story.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{story.title}</CardTitle>
                  <CardDescription className="font-medium">{story.subtitle}</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{story.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{story.author}</span>
                    </div>
                    <Button variant="outline" size="sm" className="vintage-border">
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="vintage-border">
              Load More Stories
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1 vintage-border">
              Client Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The most meaningful stories come from our clients—the people who trust us
              to capture their most important moments.
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
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Quote className="w-8 h-8 text-muted-foreground" />
                    <p className="text-muted-foreground italic leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center vintage-border retro-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 vintage-border">
                <BookOpen className="w-8 h-8 text-foreground" />
              </div>
              <CardTitle className="text-2xl lg:text-3xl typewriter-effect">
                Stay Connected
              </CardTitle>
              <CardDescription className="text-lg">
                Subscribe to our newsletter and be the first to read our latest stories,
                see new work, and get photography tips.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-border rounded-md bg-background vintage-border"
                />
                <Button className="vintage-border">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold typewriter-effect">
              Ready to Create Your Story?
            </h2>
            <p className="text-xl text-muted-foreground">
              Every photograph has a story to tell. Let&apos;s work together to create
              images that will become part of your family&apos;s legacy.
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
                  Tell Us Your Vision
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}