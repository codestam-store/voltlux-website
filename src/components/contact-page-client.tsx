"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react"
import { useState } from "react"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our customer service team",
    contact: "+1 (555) 123-VOLT",
    hours: "Mon-Fri: 8AM-8PM EST",
    color: "text-green-400"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your questions and feedback",
    contact: "support@NOIR .com",
    hours: "24/7 Response",
    color: "text-blue-400"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our specialists in real-time",
    contact: "Available on website",
    hours: "Mon-Sun: 9AM-9PM EST",
    color: "text-purple-400"
  },
  {
    icon: Calendar,
    title: "Schedule Appointment",
    description: "Book a personalized consultation",
    contact: "Online booking",
    hours: "Flexible scheduling",
    color: "text-cyan-400"
  }
]

const offices = [
  {
    city: "New York",
    type: "Headquarters",
    address: "123 Electric Avenue, Manhattan, NY 10001",
    phone: "+1 (555) 123-VOLT",
    email: "ny@NOIR .com",
    hours: "Mon-Fri: 9AM-6PM EST",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center"
  },
  {
    city: "Los Angeles",
    type: "West Coast Hub",
    address: "456 Future Blvd, Beverly Hills, CA 90210",
    phone: "+1 (555) 456-VOLT",
    email: "la@NOIR .com",
    hours: "Mon-Fri: 9AM-6PM PST",
    image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&h=400&fit=crop&crop=center"
  },
  {
    city: "Miami",
    type: "Southeast Office",
    address: "789 Ocean Drive, South Beach, FL 33139",
    phone: "+1 (555) 789-VOLT",
    email: "miami@NOIR .com",
    hours: "Mon-Fri: 9AM-6PM EST",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-6 py-2 text-lg">
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact
              <span className="block text-white">NOIR </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to experience the future of electric mobility? Our team is here to help you 
              discover the perfect NOIR  vehicle for your lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                How Can We Help?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the best way to connect with our team of electric vehicle specialists
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-slate-800/50 border-slate-700 text-center h-full hover:bg-slate-800/70 transition-colors">
                    <CardHeader>
                      <method.icon className={`w-12 h-12 ${method.color} mx-auto mb-4`} />
                      <CardTitle className="text-white">{method.title}</CardTitle>
                      <CardDescription className="text-slate-300">
                        {method.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-cyan-400 font-semibold">{method.contact}</p>
                      <p className="text-slate-400 text-sm">{method.hours}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Send Us a Message
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Inquiry Type *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          <SelectItem value="test-drive">Test Drive</SelectItem>
                          <SelectItem value="purchase">Vehicle Purchase</SelectItem>
                          <SelectItem value="service">Service & Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="media">Media Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Subject *
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                      placeholder="Brief subject of your inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 min-h-32"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center"
                    alt="NOIR  Team"
                    className="relative z-10 w-full h-64 object-cover rounded-2xl shadow-2xl"
                  />
                </div>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      Response Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Email Inquiries:</span>
                      <span className="text-cyan-400">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Phone Support:</span>
                      <span className="text-cyan-400">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Test Drive Booking:</span>
                      <span className="text-cyan-400">Same day</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400">
                      Schedule Test Drive
                    </Button>
                    <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400">
                      Download Brochure
                    </Button>
                    <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400">
                      Find Showroom
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our Locations
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Visit us at one of our premium locations across the United States
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-slate-800/50 border-slate-700 overflow-hidden hover:bg-slate-800/70 transition-colors">
                    <div className="relative">
                      <img
                        src={office.image}
                        alt={`${office.city} Office`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">
                          {office.type}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                        {office.city}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-slate-300">{office.address}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300">{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300">{office.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300">{office.hours}</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                      >
                        Get Directions
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Go Electric?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of satisfied customers who have made the switch to NOIR  electric vehicles.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Schedule Your Test Drive
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}