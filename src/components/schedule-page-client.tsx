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
  Car,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Battery
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}



const vehicles = [
  {
    id: "apex",
    name: "VoltLux Apex",
    type: "Luxury Sedan",
    range: "520 miles",
    acceleration: "0-60 in 2.8s",
    price: "From $89,900",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: "titan",
    name: "VoltLux Titan",
    type: "Electric SUV",
    range: "480 miles",
    acceleration: "0-60 in 3.2s",
    price: "From $95,900",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: "velocity",
    name: "VoltLux Velocity",
    type: "Sports Coupe",
    range: "450 miles",
    acceleration: "0-60 in 2.1s",
    price: "From $125,900",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&h=400&fit=crop&crop=center"
  }
]

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]

const locations = [
  {
    name: "VoltLux Beverly Hills Showroom",
    address: "9876 Rodeo Drive, Beverly Hills, CA 90210",
    phone: "(310) 555-0123"
  },
  {
    name: "VoltLux Manhattan Experience Center",
    address: "123 Fifth Avenue, New York, NY 10001",
    phone: "(212) 555-0456"
  },
  {
    name: "VoltLux Miami Design District",
    address: "456 NE 40th Street, Miami, FL 33137",
    phone: "(305) 555-0789"
  }
]

export default function SchedulePageClient() {
  const [selectedVehicle, setSelectedVehicle] = useState("")
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
    console.log("Test drive scheduled:", {
      vehicle: selectedVehicle,
      date: selectedDate,
      time: selectedTime,
      location: selectedLocation,
      ...formData
    })
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto px-6"
        >
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Test Drive Scheduled!
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for scheduling your VoltLux test drive. We&apos;ll send you a confirmation email shortly with all the details.
          </p>
          <div className="bg-muted/50 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Your Appointment Details:</h3>
            <div className="space-y-2 text-left">
              <p><strong>Vehicle:</strong> {vehicles.find(v => v.id === selectedVehicle)?.name}</p>
              <p><strong>Date:</strong> {selectedDate ? format(selectedDate, "PPP") : ""}</p>
              <p><strong>Time:</strong> {selectedTime}</p>
              <p><strong>Location:</strong> {locations.find(l => l.name === selectedLocation)?.name}</p>
            </div>
          </div>
          <Button 
            onClick={() => setIsSubmitted(false)}
            size="lg"
            className="professional-shadow"
          >
            Schedule Another Test Drive
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&h=1080&fit=crop&crop=center')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-primary text-primary-foreground px-4 py-2">
              Experience Electric Luxury
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
              Schedule Your
              <span className="block text-primary">Test Drive</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Experience the future of driving. Book your personalized test drive and discover why VoltLux is redefining electric luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Vehicle Selection */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="professional-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Car className="w-6 h-6 text-primary" />
                    Choose Your Vehicle
                  </CardTitle>
                  <CardDescription>
                    Select the VoltLux model you&apos;d like to experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {vehicles.map((vehicle) => (
                      <motion.div
                        key={vehicle.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          "relative rounded-2xl overflow-hidden cursor-pointer border-2 transition-all",
                          selectedVehicle === vehicle.id
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-border hover:border-primary/50"
                        )}
                        onClick={() => setSelectedVehicle(vehicle.id)}
                      >
                        <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${vehicle.image})` }}>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="font-bold text-lg">{vehicle.name}</h3>
                            <p className="text-sm opacity-90">{vehicle.type}</p>
                          </div>
                          {selectedVehicle === vehicle.id && (
                            <div className="absolute top-4 right-4">
                              <CheckCircle className="w-6 h-6 text-primary bg-white rounded-full" />
                            </div>
                          )}
                        </div>
                        <div className="p-4 bg-card">
                          <div className="flex justify-between items-center text-sm">
                            <span className="flex items-center gap-1">
                              <Battery className="w-4 h-4" />
                              {vehicle.range}
                            </span>
                            <span className="flex items-center gap-1">
                              <Zap className="w-4 h-4" />
                              {vehicle.acceleration}
                            </span>
                          </div>
                          <p className="font-semibold text-primary mt-2">{vehicle.price}</p>
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
              <Card className="professional-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CalendarIcon className="w-6 h-6 text-primary" />
                    Select Date & Time
                  </CardTitle>
                  <CardDescription>
                    Choose your preferred appointment date and time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Label className="text-base font-medium mb-4 block">Select Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal h-12",
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
                      <Label className="text-base font-medium mb-4 block">Select Time</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="h-12">
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
              <Card className="professional-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    Choose Location
                  </CardTitle>
                  <CardDescription>
                    Select your preferred VoltLux showroom
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {locations.map((location) => (
                      <motion.div
                        key={location.name}
                        whileHover={{ scale: 1.01 }}
                        className={cn(
                          "p-4 rounded-xl border-2 cursor-pointer transition-all",
                          selectedLocation === location.name
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                        onClick={() => setSelectedLocation(location.name)}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{location.name}</h3>
                            <p className="text-muted-foreground flex items-center gap-2 mt-1">
                              <MapPin className="w-4 h-4" />
                              {location.address}
                            </p>
                            <p className="text-muted-foreground flex items-center gap-2 mt-1">
                              <Phone className="w-4 h-4" />
                              {location.phone}
                            </p>
                          </div>
                          {selectedLocation === location.name && (
                            <CheckCircle className="w-6 h-6 text-primary" />
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
              <Card className="professional-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <User className="w-6 h-6 text-primary" />
                    Your Information
                  </CardTitle>
                  <CardDescription>
                    Please provide your contact details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-base font-medium">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="mt-2 h-12"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName" className="text-base font-medium">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="mt-2 h-12"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-base font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2 h-12"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-2 h-12"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <Label htmlFor="message" className="text-base font-medium">Additional Message (Optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="mt-2 min-h-[100px]"
                        placeholder="Any specific questions or requirements for your test drive?"
                      />
                    </div>
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
                className="px-12 py-4 text-lg professional-shadow hover:scale-105 transition-transform"
                disabled={!selectedVehicle || !selectedDate || !selectedTime || !selectedLocation || !formData.firstName || !formData.lastName || !formData.email || !formData.phone}
              >
                Schedule Test Drive
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Secure & Private
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  No Commitment
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Instant Confirmation
                </div>
              </div>
            </motion.div>
          </form>
        </div>
      </section>
    </div>
  )
}