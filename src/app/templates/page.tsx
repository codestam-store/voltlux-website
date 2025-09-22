"use client";

import { motion } from "framer-motion";
import { WeddingNavbar } from "@/components/wedding-navbar";
import { PageHeroSection } from "@/components/sections/page-hero-section";
import { FileText, Download, Star, Clock, Shield, CheckCircle, Heart, Users, Camera, Music, Utensils, Car, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const templateCategories = [
  {
    id: "photography",
    title: "Photography & Videography",
    icon: Camera,
    description: "Comprehensive contracts for wedding photographers and videographers",
    templates: [
      {
        name: "Wedding Photography Contract",
        description: "Complete agreement covering shoots, deliverables, and usage rights",
        price: "Free",
        downloads: "2,847",
        rating: 4.9,
        features: ["Copyright protection", "Payment terms", "Cancellation policy", "Delivery timeline"]
      },
      {
        name: "Videography Service Agreement",
        description: "Professional contract for wedding videography services",
        price: "$19",
        downloads: "1,923",
        rating: 4.8,
        features: ["Raw footage rights", "Editing specifications", "Multiple deliverables", "Equipment coverage"]
      },
      {
        name: "Photo & Video Package Deal",
        description: "Combined contract for photography and videography services",
        price: "$29",
        downloads: "1,456",
        rating: 4.9,
        features: ["Dual service coverage", "Coordinated timeline", "Package pricing", "Shared responsibilities"]
      }
    ]
  },
  {
    id: "venue",
    title: "Venue & Location",
    icon: Heart,
    description: "Secure your perfect wedding venue with proper legal protection",
    templates: [
      {
        name: "Wedding Venue Rental Agreement",
        description: "Comprehensive venue contract covering all aspects of your celebration",
        price: "Free",
        downloads: "3,421",
        rating: 4.9,
        features: ["Space allocation", "Setup/cleanup terms", "Damage policy", "Weather contingency"]
      },
      {
        name: "Outdoor Wedding Venue Contract",
        description: "Specialized agreement for outdoor wedding locations",
        price: "$24",
        downloads: "987",
        rating: 4.7,
        features: ["Weather backup plan", "Permit requirements", "Vendor access", "Noise restrictions"]
      },
      {
        name: "Destination Wedding Venue Agreement",
        description: "International venue contract with travel considerations",
        price: "$39",
        downloads: "654",
        rating: 4.8,
        features: ["International law compliance", "Currency considerations", "Travel logistics", "Local regulations"]
      }
    ]
  },
  {
    id: "catering",
    title: "Catering & Food Service",
    icon: Utensils,
    description: "Ensure your wedding feast is perfectly planned and executed",
    templates: [
      {
        name: "Wedding Catering Contract",
        description: "Complete catering agreement with menu and service details",
        price: "Free",
        downloads: "2,156",
        rating: 4.8,
        features: ["Menu specifications", "Guest count flexibility", "Service staff", "Equipment rental"]
      },
      {
        name: "Bar Service Agreement",
        description: "Specialized contract for wedding bar and beverage service",
        price: "$22",
        downloads: "1,334",
        rating: 4.7,
        features: ["Alcohol licensing", "Bartender services", "Glassware provision", "Liability coverage"]
      },
      {
        name: "Wedding Cake Contract",
        description: "Detailed agreement for wedding cake design and delivery",
        price: "$15",
        downloads: "1,789",
        rating: 4.9,
        features: ["Design specifications", "Tasting sessions", "Delivery setup", "Dietary accommodations"]
      }
    ]
  },
  {
    id: "entertainment",
    title: "Entertainment & Music",
    icon: Music,
    description: "Keep your celebration lively with proper entertainment contracts",
    templates: [
      {
        name: "Wedding DJ Service Contract",
        description: "Comprehensive DJ agreement covering music and equipment",
        price: "Free",
        downloads: "1,876",
        rating: 4.8,
        features: ["Music selection", "Equipment provision", "Timeline coordination", "Backup systems"]
      },
      {
        name: "Live Band Performance Agreement",
        description: "Professional contract for wedding band performances",
        price: "$27",
        downloads: "743",
        rating: 4.9,
        features: ["Performance duration", "Song requests", "Sound equipment", "Break schedules"]
      },
      {
        name: "Wedding Entertainment Package",
        description: "Multi-service entertainment contract for comprehensive coverage",
        price: "$35",
        downloads: "892",
        rating: 4.8,
        features: ["Multiple performers", "Coordinated timeline", "Equipment sharing", "Backup entertainment"]
      }
    ]
  },
  {
    id: "transportation",
    title: "Transportation",
    icon: Car,
    description: "Arrive in style with secure transportation agreements",
    templates: [
      {
        name: "Wedding Transportation Contract",
        description: "Reliable transport agreement for your wedding day",
        price: "$18",
        downloads: "1,234",
        rating: 4.7,
        features: ["Vehicle specifications", "Route planning", "Wait time coverage", "Backup vehicle"]
      },
      {
        name: "Limousine Service Agreement",
        description: "Luxury transportation contract with premium service terms",
        price: "$25",
        downloads: "876",
        rating: 4.8,
        features: ["Luxury amenities", "Chauffeur services", "Red carpet service", "Photography stops"]
      }
    ]
  },
  {
    id: "planning",
    title: "Wedding Planning",
    icon: Users,
    description: "Professional planning services with clear expectations",
    templates: [
      {
        name: "Wedding Planner Service Agreement",
        description: "Comprehensive planning contract covering all coordination aspects",
        price: "$32",
        downloads: "1,567",
        rating: 4.9,
        features: ["Full planning services", "Vendor coordination", "Timeline management", "Day-of coordination"]
      },
      {
        name: "Day-of Coordination Contract",
        description: "Focused agreement for wedding day coordination services",
        price: "$20",
        downloads: "2,103",
        rating: 4.8,
        features: ["Timeline execution", "Vendor management", "Emergency handling", "Setup coordination"]
      }
    ]
  }
];

const features = [
  {
    icon: Shield,
    title: "Legally Reviewed",
    description: "All templates reviewed by experienced wedding contract attorneys"
  },
  {
    icon: Download,
    title: "Instant Download",
    description: "Get your contracts immediately after purchase in multiple formats"
  },
  {
    icon: FileText,
    title: "Fully Customizable",
    description: "Easy-to-edit templates that adapt to your specific needs"
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Skip the legal research and get professional contracts instantly"
  }
];

export default function ContractTemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <WeddingNavbar />
      
      {/* Hero Section */}
      <PageHeroSection
        title="Wedding Contract Templates"
        subtitle="Professional Legal Protection"
        description="Professional, legally-reviewed contract templates for every aspect of your wedding. Protect your investment and ensure your perfect day goes smoothly."
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        icon={FileText}
        ctaText="Browse Templates"
        ctaHref="#templates"
        gradient="from-emerald-900/70 via-teal-900/60 to-cyan-900/70"
      />

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-cyan-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Contract Template Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive collection of professionally crafted wedding contract templates.
            </p>
          </motion.div>

          <div className="space-y-16">
            {templateCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.templates.map((template, templateIndex) => (
                      <motion.div
                        key={template.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: templateIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="p-6 bg-card rounded-3xl elegant-shadow wedding-border hover:shadow-xl transition-all duration-500"
                      >
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="space-y-2">
                              <h4 className="text-xl font-bold text-card-foreground">
                                {template.name}
                              </h4>
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < Math.floor(template.rating)
                                          ? "text-yellow-400 fill-current"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  {template.rating} ({template.downloads} downloads)
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-emerald-600">
                                {template.price}
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">
                            {template.description}
                          </p>

                          <div className="space-y-2">
                            <h5 className="font-semibold text-card-foreground">Key Features:</h5>
                            <ul className="space-y-1">
                              {template.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                  <span className="text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex space-x-3 pt-4">
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                              <Download className="w-4 h-4" />
                              <span>Download</span>
                            </button>
                            <button className="px-4 py-3 border-2 border-emerald-600 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300">
                              Preview
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Need a Custom Contract?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Can&apos;t find the perfect template? Our legal experts can create a custom contract 
              tailored specifically to your unique wedding requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 elegant-shadow flex items-center space-x-3"
              >
                <span>Request Custom Contract</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
              
              <Link
                href="/services"
                className="px-10 py-5 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center space-x-3"
              >
                <span>View All Services</span>
                <Heart className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}