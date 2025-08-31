import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  BookOpen,
  FileText,
  Video,
  Download,
  ExternalLink,
  Calendar,
  Clock,
  Users,
  Star,
  TrendingUp,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Target,
  CheckCircle,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Play,
  Bookmark,
  Share2,
  Eye,
  Download as DownloadIcon,
  FileCode,
  Book,
  GraduationCap,
  Award,
  Heart,
  Rocket,
  Brain,
  Handshake,
  Settings,
  Wrench,
  Palette,
  Smartphone,
  Monitor,
  Server,
  Lock,
  Key,
  Search,
  Filter,
  Tag,
  Clock as ClockIcon,
  User,
  ThumbsUp,
  MessageCircle,
  Share,
  BookOpen as BookOpenIcon,
  FileText as FileTextIcon,
  Video as VideoIcon,
  Download as DownloadIcon2,
  ExternalLink as ExternalLinkIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon2,
  Users as UsersIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Lightbulb as LightbulbIcon,
  Code as CodeIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Target as TargetIcon,
  CheckCircle as CheckCircleIcon,
  MessageSquare as MessageSquareIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Globe as GlobeIcon,
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Twitter as TwitterIcon,
  Youtube as YoutubeIcon,
  Play as PlayIcon,
  Bookmark as BookmarkIcon,
  Share2 as Share2Icon,
  Eye as EyeIcon,
  Download as DownloadIcon3,
  FileCode as FileCodeIcon,
  Book as BookIcon,
  GraduationCap as GraduationCapIcon,
  Award as AwardIcon,
  Heart as HeartIcon,
  Rocket as RocketIcon,
  Brain as BrainIcon,
  Handshake as HandshakeIcon,
  Settings as SettingsIcon,
  Wrench as WrenchIcon,
  Palette as PaletteIcon,
  Smartphone as SmartphoneIcon,
  Monitor as MonitorIcon,
  Server as ServerIcon,
  Lock as LockIcon,
  Key as KeyIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Tag as TagIcon,
  Clock as ClockIcon3,
  User as UserIcon,
  ThumbsUp as ThumbsUpIcon,
  MessageCircle as MessageCircleIcon,
  Share as ShareIcon
} from "lucide-react"

export const metadata: Metadata = {
  title: "Resources | Codestam Technologies",
  description: "Access our comprehensive library of resources, tools, and knowledge. From technical documentation to industry insights, we provide valuable resources to help you succeed.",
  openGraph: {
    title: "Resources | Codestam Technologies",
    description: "Access our comprehensive library of resources, tools, and knowledge. From technical documentation to industry insights, we provide valuable resources to help you succeed.",
  },
}

const resources = [
  {
    category: "Documentation",
    items: [
      {
        title: "API Documentation",
        description: "Comprehensive API reference and integration guides",
        icon: FileCode,
        type: "Documentation",
        tags: ["API", "Integration", "Reference"],
        link: "#",
        downloads: "2.5k"
      },
      {
        title: "Developer Guides",
        description: "Step-by-step guides for developers and technical teams",
        icon: Code,
        type: "Guide",
        tags: ["Development", "Tutorial", "Best Practices"],
        link: "#",
        downloads: "1.8k"
      },
      {
        title: "Architecture Patterns",
        description: "Scalable architecture patterns and design principles",
        icon: Database,
        type: "Reference",
        tags: ["Architecture", "Design", "Scalability"],
        link: "#",
        downloads: "3.2k"
      }
    ]
  },
  {
    category: "Tutorials",
    items: [
      {
        title: "Getting Started",
        description: "Quick start guide for new users and developers",
        icon: Rocket,
        type: "Tutorial",
        tags: ["Beginner", "Setup", "Quick Start"],
        link: "#",
        downloads: "5.1k"
      },
      {
        title: "Advanced Features",
        description: "Deep dive into advanced functionality and customization",
        icon: Brain,
        type: "Tutorial",
        tags: ["Advanced", "Customization", "Features"],
        link: "#",
        downloads: "2.3k"
      },
      {
        title: "Integration Examples",
        description: "Real-world integration examples and use cases",
        icon: Handshake,
        type: "Example",
        tags: ["Integration", "Examples", "Use Cases"],
        link: "#",
        downloads: "1.9k"
      }
    ]
  },
  {
    category: "Tools",
    items: [
      {
        title: "SDK Downloads",
        description: "Software development kits for various platforms",
        icon: Download,
        type: "Tool",
        tags: ["SDK", "Development", "Platforms"],
        link: "#",
        downloads: "8.7k"
      },
      {
        title: "Code Generators",
        description: "Automated code generation tools and templates",
        icon: Settings,
        type: "Tool",
        tags: ["Code Generation", "Templates", "Automation"],
        link: "#",
        downloads: "4.2k"
      },
      {
        title: "Testing Utilities",
        description: "Testing frameworks and utilities for quality assurance",
        icon: Wrench,
        type: "Tool",
        tags: ["Testing", "QA", "Frameworks"],
        link: "#",
        downloads: "3.8k"
      }
    ]
  }
]

const blogPosts = [
  {
    title: "The Future of Cloud Computing in 2024",
    excerpt: "Explore the latest trends and innovations shaping the cloud computing landscape and what it means for businesses.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop",
    tags: ["Cloud Computing", "Technology", "Innovation"]
  },
  {
    title: "Building Scalable Microservices Architecture",
    excerpt: "Learn the best practices for designing and implementing scalable microservices that can handle growing demands.",
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop",
    tags: ["Microservices", "Architecture", "Scalability"]
  },
  {
    title: "AI and Machine Learning in Modern Applications",
    excerpt: "Discover how AI and ML are transforming application development and user experiences.",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
    tags: ["AI", "Machine Learning", "Applications"]
  }
]

const webinars = [
  {
    title: "Digital Transformation Strategies",
    description: "Learn proven strategies for successful digital transformation initiatives",
    date: "2024-02-15",
    time: "2:00 PM EST",
    duration: "60 min",
    speaker: "Dr. Robert Kim",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=300&fit=crop",
    attendees: "1,247"
  },
  {
    title: "Cybersecurity Best Practices",
    description: "Essential cybersecurity practices for modern businesses",
    date: "2024-02-20",
    time: "3:30 PM EST",
    duration: "45 min",
    speaker: "Lisa Thompson",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop",
    attendees: "892"
  },
  {
    title: "Cloud Migration Success Stories",
    description: "Real-world cloud migration experiences and lessons learned",
    date: "2024-02-25",
    time: "1:00 PM EST",
    duration: "75 min",
    speaker: "David Park",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop",
    attendees: "1,156"
  }
]

const tools = [
  {
    name: "Code Quality Analyzer",
    description: "Automated code quality analysis and improvement suggestions",
    icon: Code,
    category: "Development",
    status: "Free",
    downloads: "15.2k"
  },
  {
    name: "API Testing Suite",
    description: "Comprehensive API testing and validation tools",
    icon: Wrench,
    category: "Testing",
    status: "Free",
    downloads: "8.9k"
  },
  {
    name: "Performance Monitor",
    description: "Real-time application performance monitoring and alerts",
    icon: TrendingUp,
    category: "Monitoring",
    status: "Free",
    downloads: "12.7k"
  },
  {
    name: "Security Scanner",
    description: "Automated security vulnerability scanning and reporting",
    icon: Shield,
    category: "Security",
    status: "Free",
    downloads: "6.3k"
  }
]

const community = [
  {
    platform: "GitHub",
    description: "Open source projects and code examples",
    icon: Github,
    members: "5.2k",
    link: "#"
  },
  {
    platform: "Discord",
    description: "Real-time community discussions and support",
    icon: MessageSquare,
    members: "3.8k",
    link: "#"
  },
  {
    platform: "Stack Overflow",
    description: "Technical Q&A and problem-solving community",
    icon: Search,
    members: "2.1k",
    link: "#"
  },
  {
    platform: "LinkedIn",
    description: "Professional networking and industry insights",
    icon: Linkedin,
    members: "8.9k",
    link: "#"
  }
]

export default function ResourcesPage() {
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
                <BookOpen className="w-4 h-4" />
                <span>Knowledge Hub</span>
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance">
                Resources &
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Tools
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access our comprehensive library of resources, tools, and knowledge.
                From technical documentation to industry insights, we provide valuable
                resources to help you succeed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="#resources">
                  Explore Resources
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href="#community">
                  Join Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section id="resources" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Resource Library
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Comprehensive Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale your applications.
              From documentation to tools, we&apos;ve got you covered.
            </p>
          </div>

          <div className="space-y-16">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">{category.category}</h3>
                  <Separator className="w-24 mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {item.downloads} downloads
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Button asChild className="w-full group">
                          <Link href={item.link}>
                            <Download className="mr-2 w-4 h-4" />
                            Download
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Latest Insights
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Industry Blog
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices
              from our team of experts and industry leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>By {post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <Link href="#">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="#">
                View All Posts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Live Events
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our live webinars to learn from industry experts and
              stay ahead of the latest technology trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="destructive" className="flex items-center space-x-1">
                      <Play className="w-3 h-3" />
                      <span>Live</span>
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{webinar.title}</CardTitle>
                  <CardDescription className="text-base">
                    {webinar.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.time} • {webinar.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{webinar.attendees} registered</span>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Speaker: <span className="font-medium text-foreground">{webinar.speaker}</span>
                  </div>

                  <Button asChild className="w-full group">
                    <Link href="#">
                      Register Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Free Tools
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Developer Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful tools to streamline your development workflow and
              improve code quality and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <tool.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {tool.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{tool.category}</span>
                    <span>{tool.downloads} downloads</span>
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <Link href="#">
                      <Download className="mr-2 w-4 h-4" />
                      Download
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Join Us
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with developers, share knowledge, and stay updated
              with the latest trends in our vibrant community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {community.map((platform, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <platform.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{platform.platform}</CardTitle>
                  <CardDescription className="text-base">
                    {platform.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{platform.members} members</span>
                  </div>

                  <Button asChild className="w-full group">
                    <Link href={platform.link}>
                      Join Community
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
                Need More Resources?
              </h2>
              <p className="text-xl text-muted-foreground">
                Can&apos;t find what you&apos;re looking for? Our team is here to help.
                Contact us for custom solutions, technical support, or to request new resources.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Contact Support
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  View Services
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Comprehensive docs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Active community</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Free tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
