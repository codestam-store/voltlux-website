import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Target, 
  Globe, 
  Lightbulb, 
  Heart,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "About Us",
  description: "Learn about NexusFlow's mission, values, and the team behind our innovative digital solutions.",
  openGraph: {
    title: "About NexusFlow - Our Story & Mission",
    description: "Learn about NexusFlow's mission, values, and the team behind our innovative digital solutions.",
  },
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions that set new industry standards."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for technology drives us to create exceptional experiences that exceed expectations."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain the highest standards in every project, ensuring quality and reliability."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and close partnerships with our clients."
  }
]

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    bio: "Visionary leader with 15+ years in digital transformation."
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    bio: "Technical expert specializing in scalable architecture."
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    bio: "Creative director focused on user-centered design."
  },
  {
    name: "Emily Watson",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    bio: "Engineering leader with expertise in modern technologies."
  }
]

const milestones = [
  { year: "2014", title: "Company Founded", description: "Started with a vision to transform digital experiences." },
  { year: "2016", title: "First Major Client", description: "Secured our first enterprise-level project." },
  { year: "2018", title: "Team Expansion", description: "Grew to 25 team members across multiple disciplines." },
  { year: "2020", title: "Global Recognition", description: "Named one of the top 100 tech companies." },
  { year: "2022", title: "Innovation Award", description: "Received industry recognition for breakthrough solutions." },
  { year: "2024", title: "Future Forward", description: "Continuing to push boundaries in digital innovation." }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Story
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Building the Future of{" "}
              <span className="text-primary">Digital Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At NexusFlow, we believe that technology should empower businesses to achieve their full potential. 
              Our mission is to create innovative digital solutions that drive growth, enhance user experiences, 
              and deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Our Mission & Vision
                </h2>
                <p className="text-lg text-muted-foreground">
                  We&apos;re on a mission to democratize digital innovation, making cutting-edge technology 
                  accessible to businesses of all sizes. Our vision is a world where every organization 
                  can leverage technology to achieve extraordinary results.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To empower businesses with innovative digital solutions that drive growth and success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the leading force in digital transformation, creating solutions that shape the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Team collaboration meeting"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape the way we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate individuals who drive our mission and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    loading="lazy"
                  />
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones that have shaped our company and driven our growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Work With Us?
            </h2>
            <p className="text-xl opacity-90">
              Let&apos;s discuss how we can help you achieve your digital goals and 
              transform your business with innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get In Touch
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
