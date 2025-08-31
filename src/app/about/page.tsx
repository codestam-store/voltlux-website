import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight, 
  Users, 
  Target, 
  Award, 
  Heart, 
  Zap, 
  Shield, 
  Globe,
  Lightbulb,
  Code2,
  TrendingUp,
  Star,
  CheckCircle,
  Building2,
  Rocket,
  Eye,
  Handshake,
  Brain,
  Palette,
  Cpu,
  Database,
  Cloud,
  Lock,
  BarChart3,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Codestam Technologies",
  description: "Learn about Codestam Technologies - our mission, values, team, and commitment to delivering innovative digital solutions that transform businesses.",
  openGraph: {
    title: "About Us | Codestam Technologies",
    description: "Learn about Codestam Technologies - our mission, values, team, and commitment to delivering innovative digital solutions that transform businesses.",
  },
}

const values = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "We approach every project with unwavering dedication to quality and excellence, ensuring that our solutions exceed expectations and deliver exceptional value to our clients."
  },
  {
    icon: Target,
    title: "Client-Centric Focus",
    description: "Your success is our success. We prioritize understanding your unique needs and goals, crafting tailored solutions that drive real business outcomes and measurable results."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay at the forefront of technology trends and best practices, continuously exploring new approaches and methodologies to deliver cutting-edge solutions."
  },
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Building lasting relationships through transparency, integrity, and consistent delivery. We are committed to being a reliable partner in your digital transformation journey."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "With a diverse team and international experience, we bring global insights and best practices to every project, ensuring solutions that work across cultures and markets."
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "We believe in the power of collaboration, working closely with our clients, partners, and team members to create solutions that are greater than the sum of their parts."
  }
]

const team = [
  {
    name: "Alexandra Chen",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 15+ years of experience in technology and business strategy. Passionate about driving digital transformation and fostering innovation.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/alexandra-chen"
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    bio: "Technology expert with deep expertise in cloud architecture, AI/ML, and scalable systems. Leads our technical strategy and innovation initiatives.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/marcus-rodriguez"
  },
  {
    name: "Sarah Kim",
    role: "Head of Design",
    bio: "Award-winning designer focused on creating exceptional user experiences. Combines creativity with strategic thinking to deliver beautiful, functional solutions.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/sarah-kim"
  },
  {
    name: "David Thompson",
    role: "Head of Engineering",
    bio: "Senior engineer with expertise in full-stack development and system architecture. Ensures our solutions are robust, scalable, and maintainable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/david-thompson"
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    bio: "Product strategist with a track record of launching successful digital products. Focuses on user needs and business outcomes to drive product excellence.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/emily-watson"
  },
  {
    name: "James Wilson",
    role: "Head of Business Development",
    bio: "Strategic business development leader with extensive experience in technology partnerships and client relationship management.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/james-wilson"
  }
]

const achievements = [
  { metric: "500+", label: "Projects Delivered", icon: CheckCircle },
  { metric: "200+", label: "Happy Clients", icon: Heart },
  { metric: "50+", label: "Team Members", icon: Users },
  { metric: "8+", label: "Years Experience", icon: Award },
  { metric: "99.9%", label: "Client Satisfaction", icon: Star },
  { metric: "24/7", label: "Support Available", icon: MessageSquare }
]

const technologies = [
  { name: "Frontend", icon: Palette, items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"] },
  { name: "Backend", icon: Cpu, items: ["Node.js", "Python", "Java", "Go", "PHP", "Ruby"] },
  { name: "Database", icon: Database, items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "DynamoDB"] },
  { name: "Cloud", icon: Cloud, items: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"] },
  { name: "Security", icon: Lock, items: ["OAuth 2.0", "JWT", "SSL/TLS", "Penetration Testing", "Compliance", "Encryption"] },
  { name: "Analytics", icon: BarChart3, items: ["Google Analytics", "Mixpanel", "Amplitude", "Segment", "Data Studio", "Custom Dashboards"] }
]

export default function AboutPage() {
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
                <Users className="w-4 h-4" />
                <span>About Our Company</span>
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance">
                Building the Future of
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Digital Innovation
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Codestam Technologies is a forward-thinking digital solutions company dedicated to transforming 
                businesses through innovative technology. We combine technical expertise with strategic thinking 
                to deliver solutions that drive growth and success.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link href="#team">
                  Meet Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="px-3 py-1">
                  Our Mission
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold">
                  Empowering Businesses Through Technology
                </h2>
                <p className="text-lg text-muted-foreground">
                  We believe that technology should be an enabler, not a barrier. Our mission is to democratize 
                  access to cutting-edge digital solutions, helping businesses of all sizes thrive in the digital age.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strategic Focus</h3>
                    <p className="text-muted-foreground">
                      We focus on understanding your business objectives and translating them into effective 
                      digital strategies that drive measurable results.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation Driven</h3>
                    <p className="text-muted-foreground">
                      We stay ahead of technology trends and continuously explore new approaches to deliver 
                      innovative solutions that give you a competitive edge.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Partnership Approach</h3>
                    <p className="text-muted-foreground">
                      We view every client relationship as a long-term partnership, working collaboratively 
                      to achieve shared success and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the leading force in digital transformation, creating a world where every business 
                      has access to the technology they need to succeed and thrive in the digital economy.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">2025</div>
                      <div className="text-sm text-muted-foreground">Global Expansion</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">1000+</div>
                      <div className="text-sm text-muted-foreground">Projects Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-2xl opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Our Values
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values shape everything we do, from how we approach projects to how we build relationships 
              with our clients and team members.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Our Team
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Meet the Experts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of experienced professionals brings together expertise in technology, design, 
              strategy, and business to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-lg group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  <Link
                    href={member.linkedin}
                    className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-3 py-1">
              Our Achievements
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Numbers That Speak
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our track record of success is reflected in the numbers. Here&apos;s what we&apos;ve accomplished 
              together with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground">{achievement.metric}</div>
                  <div className="text-muted-foreground">{achievement.label}</div>
                </div>
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
              We work with the latest technologies and tools to deliver robust, scalable, and future-proof solutions 
              that meet the evolving needs of modern businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <tech.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tech.name}</CardTitle>
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

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let&apos;s discuss how our team can help you achieve your digital goals and transform your business 
                with innovative technology solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>Transparent process</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4" />
                <span>Expert team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4" />
                <span>Proven results</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
