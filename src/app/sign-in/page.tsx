"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowRight,
  Github,
  Chrome,
  Shield,
  Zap,
  Users,
  Star,
  Award,
  Globe
} from 'lucide-react'
import Link from 'next/link'

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsLoading(false)
    // Handle successful sign in
  }

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with 2FA and encryption"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for seamless experience"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with real-time updates"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access your projects from anywhere"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "The platform has transformed how our team collaborates on projects.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupXYZ",
      content: "Incredible performance and reliability. Highly recommended!",
      rating: 5
    }
  ]

  const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Projects Completed", value: "10K+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Customer Satisfaction", value: "98%" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)]">
          {/* Sign In Form */}
          <div className="max-w-md mx-auto w-full">
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">NexusFlow</span>
              </Link>
              <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
              <p className="text-muted-foreground">
                Sign in to your account to continue
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Sign in</CardTitle>
                <CardDescription>
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="remember"
                        className="rounded border-gray-300"
                      />
                      <Label htmlFor="remember" className="text-sm">
                        Remember me
                      </Label>
                    </div>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Signing in...
                      </>
                    ) : (
                      <>
                        Sign in
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Chrome className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>

                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/sign-up" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side Content */}
          <div className="space-y-12">
            {/* Features */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Platform Features
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Everything you need to{" "}
                  <span className="text-primary">succeed</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Access powerful tools and features designed to streamline your workflow 
                  and boost productivity.
                </p>
              </div>

              <div className="grid gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">What our users say</h3>
              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.name} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground italic mb-4">
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

            {/* CTA */}
            <div className="bg-primary/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of professionals who trust NexusFlow for their projects.
              </p>
              <Button size="lg" asChild>
                <Link href="/sign-up">
                  Create Free Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
