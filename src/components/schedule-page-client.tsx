"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Users, CheckCircle, Star, Leaf, Video, Phone, MapPin, Gift } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const consultationTypes = [
  {
    icon: Video,
    title: "Virtual Consultation",
    duration: "45 minutes",
    price: "Free",
    description: "Perfect for initial planning and system recommendations",
    features: [
      "Space assessment via video call",
      "Personalized system recommendations",
      "Cost estimates and timeline",
      "Growing guides and resources",
      "Follow-up support included"
    ],
    popular: true
  },
  {
    icon: Phone,
    title: "Phone Consultation",
    duration: "30 minutes",
    price: "Free",
    description: "Quick answers and guidance for your growing questions",
    features: [
      "Expert growing advice",
      "System troubleshooting",
      "Product recommendations",
      "Maintenance guidance",
      "Resource sharing"
    ],
    popular: false
  },
  {
    icon: MapPin,
    title: "In-Person Visit",
    duration: "90 minutes",
    price: "$99",
    description: "Comprehensive on-site assessment and planning",
    features: [
      "Detailed space evaluation",
      "Custom system design",
      "Installation planning",
      "Hands-on demonstration",
      "Complete project roadmap"
    ],
    popular: false,
    note: "Fee credited toward system purchase"
  }
]

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]

const benefits = [
  {
    icon: Star,
    title: "Expert Guidance",
    description: "Get advice from certified growing specialists with years of experience."
  },
  {
    icon: CheckCircle,
    title: "Personalized Solutions",
    description: "Receive recommendations tailored to your specific space and goals."
  },
  {
    icon: Gift,
    title: "Free Resources",
    description: "Access exclusive growing guides, maintenance tips, and ongoing support."
  },
  {
    icon: Leaf,
    title: "Sustainable Focus",
    description: "Learn eco-friendly practices that maximize yield while minimizing impact."
  }
]

export function SchedulePageClient() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    spaceType: "",
    experience: "",
    goals: "",
    budget: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Consultation scheduled:", formData)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 leaf-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Free Consultation
              </span>
              <br />
              Start Growing Today
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Book a personalized consultation with our growing experts. Get tailored recommendations, 
              cost estimates, and everything you need to start your urban farming journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Consultation Type</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the consultation format that works best for your schedule and needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {type.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <Card className={`plant-card h-full ${type.popular ? 'ring-2 ring-primary/20 scale-105' : ''} group-hover:scale-105 transition-all duration-300`}>
                  <CardHeader className="text-center">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                      <type.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {type.duration}
                      </span>
                      <span className="text-2xl font-bold text-primary">{type.price}</span>
                    </div>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {type.note && (
                      <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded-lg">
                        <strong>Note:</strong> {type.note}
                      </div>
                    )}
                    
                    <Button 
                      className={`w-full curved-organic ${
                        type.popular 
                          ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0' 
                          : 'border-primary/30 hover:bg-primary/5'
                      }`}
                      variant={type.popular ? "default" : "outline"}
                    >
                      Select This Option
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-muted/30 organic-texture">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Consultation</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we&apos;ll confirm your appointment within 24 hours.
            </p>
          </motion.div>

          <Card className="plant-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="curved-organic"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="curved-organic"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      required
                      className="curved-organic"
                    />
                  </div>
                </div>

                {/* Consultation Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Consultation Details</h3>
                  <div className="space-y-2">
                    <Label>Consultation Type *</Label>
                    <RadioGroup 
                      value={formData.consultationType} 
                      onValueChange={handleSelectChange("consultationType")}
                      className="grid md:grid-cols-3 gap-4"
                    >
                      {consultationTypes.map((type) => (
                        <div key={type.title} className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-muted/50">
                          <RadioGroupItem value={type.title} id={type.title} />
                          <Label htmlFor={type.title} className="cursor-pointer flex-1">
                            <div className="font-medium">{type.title}</div>
                            <div className="text-sm text-muted-foreground">{type.price} • {type.duration}</div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date *</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        className="curved-organic"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time *</Label>
                      <Select onValueChange={handleSelectChange("preferredTime")} required>
                        <SelectTrigger className="curved-organic">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Project Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="spaceType">Space Type *</Label>
                      <Select onValueChange={handleSelectChange("spaceType")} required>
                        <SelectTrigger className="curved-organic">
                          <SelectValue placeholder="Select space type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">Apartment/Condo</SelectItem>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="office">Office</SelectItem>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="school">School/Institution</SelectItem>
                          <SelectItem value="commercial">Commercial Space</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Growing Experience *</Label>
                      <Select onValueChange={handleSelectChange("experience")} required>
                        <SelectTrigger className="curved-organic">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Complete Beginner</SelectItem>
                          <SelectItem value="some">Some Experience</SelectItem>
                          <SelectItem value="experienced">Experienced Grower</SelectItem>
                          <SelectItem value="expert">Expert/Professional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={handleSelectChange("budget")}>
                      <SelectTrigger className="curved-organic">
                        <SelectValue placeholder="Select budget range (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500">Under $500</SelectItem>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="over-5000">Over $5,000</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goals">Growing Goals *</Label>
                    <Textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      placeholder="What do you want to grow? What are your main goals? (e.g., fresh herbs for cooking, vegetables for family, commercial production, etc.)"
                      rows={3}
                      required
                      className="curved-organic resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific questions, space constraints, or other details you&apos;d like to discuss?"
                      rows={3}
                      className="curved-organic resize-none"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 eco-shadow curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule My Consultation
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We&apos;ll confirm your appointment within 24 hours and send you a calendar invite with all the details.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Book a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Consultation?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get the most out of your urban farming investment with expert guidance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="plant-card h-full">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 leaf-pattern">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your Growing Journey?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of successful urban farmers who started with a free consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-8 py-6 eco-shadow curved-organic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
              >
                <Link href="#booking-form" className="flex items-center gap-2">
                  Book Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 curved-organic border-primary/30 hover:bg-primary/5"
              >
                <Link href="/contact">Have Questions?</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}