import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  FileText, 
  Video, 
  Users, 
  MessageSquare, 
  Download,
  ArrowRight,
  Calendar,
  Clock,
  Star,
  Code,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  BarChart3
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Resources",
  description: "Access our library of resources including documentation, guides, tutorials, and insights to help you succeed.",
  openGraph: {
    title: "Resources - NexusFlow",
    description: "Access our library of resources including documentation, guides, tutorials, and insights to help you succeed.",
  },
}

const resources = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive technical documentation for all our products and services.",
    items: [
      "API Reference",
      "Integration Guides",
      "Best Practices",
      "Troubleshooting"
    ],
    link: "/docs",
    badge: "Updated"
  },
  {
    icon: FileText,
    title: "Whitepapers",
    description: "In-depth research and insights on industry trends and technologies.",
    items: [
      "Digital Transformation Guide",
      "Cloud Migration Strategies",
      "Security Best Practices",
      "Performance Optimization"
    ],
    link: "/whitepapers",
    badge: "New"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides to help you get the most out of our solutions.",
    items: [
      "Getting Started",
      "Advanced Features",
      "Case Studies",
      "Tips & Tricks"
    ],
    link: "/tutorials",
    badge: "Popular"
  },
  {
    icon: Users,
    title: "Webinars",
    description: "Live and recorded webinars on industry topics and product updates.",
    items: [
      "Monthly Tech Talks",
      "Product Demos",
      "Industry Insights",
      "Q&A Sessions"
    ],
    link: "/webinars",
    badge: "Live"
  }
]

const blogPosts = [
  {
    title: "The Future of Digital Transformation in 2024",
    excerpt: "Explore the key trends and technologies that will shape digital transformation strategies in the coming year.",
    category: "Digital Transformation",
    readTime: "5 min read",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    title: "Building Scalable Cloud Architectures",
    excerpt: "Learn the best practices for designing and implementing scalable cloud solutions for modern applications.",
    category: "Cloud Solutions",
    readTime: "8 min read",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    title: "Cybersecurity Trends for 2024",
    excerpt: "Discover the latest cybersecurity threats and the strategies to protect your digital assets.",
    category: "Cybersecurity",
    readTime: "6 min read",
    date: "2024-01-05",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  }
]

const caseStudies = [
  {
    title: "Healthcare Provider Digital Transformation",
    description: "How we helped a major healthcare provider modernize their patient care systems.",
    industry: "Healthcare",
    results: ["40% improvement in patient satisfaction", "30% reduction in administrative costs"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    title: "E-commerce Platform Scaling",
    description: "Supporting a growing e-commerce business with scalable cloud infrastructure.",
    industry: "Retail",
    results: ["300% increase in traffic handling", "99.9% uptime achieved"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    title: "Financial Services Security Enhancement",
    description: "Implementing advanced security measures for a fintech startup.",
    industry: "Finance",
    results: ["Zero security breaches", "Full regulatory compliance"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  }
]

const tools = [
  {
    icon: Code,
    title: "Development Tools",
    description: "Open-source tools and libraries to accelerate your development process."
  },
  {
    icon: Globe,
    title: "Web Resources",
    description: "Curated collection of web development resources and best practices."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Tools and frameworks for building cross-platform mobile applications."
  },
  {
    icon: Cloud,
    title: "Cloud Resources",
    description: "Cloud computing guides and infrastructure templates."
  },
  {
    icon: Shield,
    title: "Security Tools",
    description: "Security assessment tools and compliance checklists."
  },
  {
    icon: BarChart3,
    title: "Analytics Tools",
    description: "Data analytics and business intelligence resources."
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Resources
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Knowledge{" "}
              <span className="text-primary">Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive library of resources, guides, and insights 
              to help you succeed with your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Learning Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our curated collection of resources designed to help you 
              understand and implement digital solutions effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource) => (
              <Card key={resource.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{resource.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription className="text-base">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {resource.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={resource.link}>
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices 
              in digital transformation and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/blog">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we&apos;ve helped organizations across different industries 
              achieve their digital transformation goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{study.industry}</Badge>
                  </div>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <CardDescription className="text-base">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 text-yellow-500" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/case-studies">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Downloads */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tools & Downloads
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our collection of tools, templates, and downloadable resources 
              to accelerate your development process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Card key={tool.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {tool.description}
                  </CardDescription>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/tools">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Join Our Community
                </h2>
                <p className="text-lg text-muted-foreground">
                  Connect with other professionals, share knowledge, and stay updated 
                  with the latest industry trends and best practices.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Developer Community</h3>
                    <p className="text-muted-foreground">
                      Connect with developers, share code, and collaborate on projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Discussion Forums</h3>
                    <p className="text-muted-foreground">
                      Ask questions, share experiences, and learn from industry experts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Events & Meetups</h3>
                    <p className="text-muted-foreground">
                      Attend virtual and in-person events to network and learn.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" asChild>
                <Link href="/community">
                  Join Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Community collaboration"
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
              Need More Resources?
            </h2>
            <p className="text-xl opacity-90">
              Can&apos;t find what you&apos;re looking for? Contact our team and we&apos;ll 
              help you find the right resources for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Help
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
