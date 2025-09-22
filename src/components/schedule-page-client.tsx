"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Phone,
  User,
  Camera,
  CheckCircle,
  ArrowRight,
  Film,
  Aperture,
  Timer
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const services = [
  {
    id: "portrait",
    name: "Portrait Session",
    type: "Individual & Family",
    duration: "2-3 hours",
    deliverables: "50+ edited photos",
    price: "From $350",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: "wedding",
    name: "Wedding Photography",
    type: "Full Day Coverage",
    duration: "8-10 hours",
    deliverables: "200+ photos + album",
    price: "From $2,500",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: "commercial",
    name: "Commercial Shoot",
    type: "Brand & Product",
    duration: "Half/Full day",
    deliverables: "Custom package",
    price: "From $800",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop&crop=center"
  }
]

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]

const locations = [
  {
    name: "Noir Studio Downtown",
    address: "123 Main Street, Downtown District",
    phone: "(555) 123-4567"
  },
  {
    name: "Outdoor Location Shoot",
    address: "Various scenic locations in the city",
    phone: "(555) 123-4567"
  },
  {
    name: "Client Location",
    address: "Your preferred location",
    phone: "(555) 123-4567"
  }
]

export default function SchedulePageClient() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Photography session scheduled:", {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      location: selectedLocation,
      ...formData
    })
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 film-grain">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto px-6"
        >
          <div className="w-24 h-24 bg-primary rounded-sm flex items-center justify-center mx-auto mb-8 retro-shadow">
            <CheckCircle className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 typewriter-effect">
            Session Booked!
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for booking your photography session with Noir Studio. We&apos;ll send you a confirmation email shortly with all the details.
          </p>
          <div className="bg-muted/50 rounded-sm p-6 mb-8 vintage-border">
            <h3 className="font-semibold text-lg mb-4 typewriter-effect">Your Session Details:</h3>
            <div className="space-y-2 text-left">
              <p><strong>Service:</strong> {services.find(s => s.id === selectedService)?.name}</p>
              <p><strong>Date:</strong> {selectedDate ? format(selectedDate, "PPP") : ""}</p>
              <p><strong>Time:</strong> {selectedTime}</p>
              <p><strong>Location:</strong> {locations.find(l => l.name === selectedLocation)?.name}</p>
            </div>
          </div>
          <Button 
            onClick={() => setIsSubmitted(false)}
            size="lg"
            className="retro-shadow uppercase tracking-wider"
          >
            Book Another Session
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden film-grain">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554151228-14d9def656e4?w=1920&h=1080&fit=crop&crop=center')] bg-cover bg-center opacity-20 grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2 uppercase tracking-wider">
              Professional Photography
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
              Book Your
              <span className="block text-primary typewriter-effect">Photography Session</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Schedule your personalized photography experience. From intimate portraits to grand celebrations, 
              we capture your moments with timeless vintage aesthetics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Service Selection */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="retro-shadow vintage-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 typewriter-effect">
                    <Camera className="w-6 h-6 text-primary" />
                    Choose Your Service
                  </CardTitle>
                  <CardDescription>
                    Select the photography service you&apos;d like to book
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service) => (
                      <motion.div
                        key={service.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          "relative rounded-sm overflow-hidden cursor-pointer border-2 transition-all photo-frame",
                          selectedService === service.id
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-border hover:border-primary/50"
                        )}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <div className="aspect-video bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: `url(${service.image})` }}>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="font-bold text-lg typewriter-effect">{service.name}</h3>
                            <p className="text-sm opacity-90">{service.type}</p>
                          </div>
                          {selectedService === service.id && (
                            <div className="absolute top-4 right-4">
                              <CheckCircle className="w-6 h-6 text-primary bg-white rounded-full" />
                            </div>
                          )}
                        </div>
                        <div className="p-4 bg-card">
                          <div className="flex justify-between items-center text-sm mb-2">
                            <span className="flex items-center gap-1">
                              <Timer className="w-4 h-4" />
                              {service.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Film className="w-4 h-4" />
                              {service.deliverables}
                            </span>
                          </div>
                          <p className="font-semibold text-primary typewriter-effect">{service.price}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Date & Time Selection */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="retro-shadow vintage-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 typewriter-effect">
                    <CalendarIcon className="w-6 h-6 text-primary" />
                    Select Date & Time
                  </CardTitle>
                  <CardDescription>
                    Choose your preferred session date and time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Label className="text-base font-medium mb-4 block uppercase tracking-wider">Select Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal h-12 vintage-border",
                              !selectedDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <Label className="text-base font-medium mb-4 block uppercase tracking-wider">Select Time</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="h-12 vintage-border">
                          <SelectValue placeholder="Choose time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {time}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Location Selection */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="retro-shadow vintage-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 typewriter-effect">
                    <MapPin className="w-6 h-6 text-primary" />
                    Choose Location
                  </CardTitle>
                  <CardDescription>
                    Select where you&apos;d like your session to take place
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {locations.map((location) => (
                      <motion.div
                        key={location.name}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={cn(
                          "p-4 rounded-sm border-2 cursor-pointer transition-all vintage-border",
                          selectedLocation === location.name
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50 hover:bg-accent/50"
                        )}
                        onClick={() => setSelectedLocation(location.name)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground typewriter-effect mb-1">
                              {location.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {location.address}
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              {location.phone}
                            </p>
                          </div>
                          {selectedLocation === location.name && (
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Personal Information */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="retro-shadow vintage-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 typewriter-effect">
                    <User className="w-6 h-6 text-primary" />
                    Your Information
                  </CardTitle>
                  <CardDescription>
                    Tell us about yourself and your photography needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-base font-medium mb-2 block uppercase tracking-wider">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="h-12 vintage-border"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName" className="text-base font-medium mb-2 block uppercase tracking-wider">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="h-12 vintage-border"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-base font-medium mb-2 block uppercase tracking-wider">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-12 vintage-border"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium mb-2 block uppercase tracking-wider">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-12 vintage-border"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Label htmlFor="message" className="text-base font-medium mb-2 block uppercase tracking-wider">
                      Tell Us About Your Vision
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Describe your photography needs, style preferences, or any special requests..."
                      className="min-h-[120px] vintage-border"
                      rows={5}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center"
            >
              <Button 
                type="submit" 
                size="lg" 
                className="retro-shadow text-base px-12 py-6 uppercase tracking-wider font-medium"
                disabled={!selectedService || !selectedDate || !selectedTime || !selectedLocation || !formData.firstName || !formData.lastName || !formData.email || !formData.phone}
              >
                <Aperture className="w-5 h-5 mr-3" />
                Book Photography Session
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </motion.div>
          </form>
        </div>
      </section>
    </div>
  )
}