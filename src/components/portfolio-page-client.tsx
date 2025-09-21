"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Camera, 
  Filter,
  Heart,
  Eye,
  Calendar,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const categories = [
  { id: "all", name: "All Work", count: 24 },
  { id: "portraits", name: "Portraits", count: 8 },
  { id: "weddings", name: "Weddings", count: 6 },
  { id: "commercial", name: "Commercial", count: 5 },
  { id: "events", name: "Events", count: 5 }
]

const portfolioItems = [
  {
    id: 1,
    title: "Classic Portrait Session",
    category: "portraits",
    year: "2024",
    client: "Sarah M.",
    image: "https://www.razaqvance.com/wp-content/uploads/2014/01/IMG_5632-copy-2.jpg",
    description: "Timeless black & white portrait capturing authentic emotion and character."
  },
  {
    id: 2,
    title: "Vintage Wedding",
    category: "weddings",
    year: "2024",
    client: "Emma & David",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=1000&fit=crop&crop=center",
    description: "A romantic celebration captured with classic film photography techniques."
  },
  {
    id: 3,
    title: "Brand Campaign",
    category: "commercial",
    year: "2024",
    client: "Artisan Co.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=1000&fit=crop&crop=center",
    description: "Commercial photography with vintage aesthetic for luxury brand."
  },
  {
    id: 4,
    title: "Family Heritage",
    category: "portraits",
    year: "2024",
    client: "The Johnson Family",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=1000&fit=crop&crop=center",
    description: "Multi-generational family portrait in classic studio setting."
  },
  {
    id: 5,
    title: "Corporate Headshots",
    category: "commercial",
    year: "2024",
    client: "Tech Startup",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=center",
    description: "Professional headshots with timeless appeal for executive team."
  },
  {
    id: 6,
    title: "Garden Wedding",
    category: "weddings",
    year: "2024",
    client: "Lisa & Michael",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop&crop=center",
    description: "Outdoor ceremony captured with natural light and film grain."
  },
  {
    id: 7,
    title: "Artist Portrait",
    category: "portraits",
    year: "2024",
    client: "Marcus T.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop&crop=center",
    description: "Creative portrait session showcasing artistic personality."
  },
  {
    id: 8,
    title: "Gallery Opening",
    category: "events",
    year: "2024",
    client: "Modern Art Gallery",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop&crop=center",
    description: "Event photography capturing the essence of contemporary art exhibition."
  },
  {
    id: 9,
    title: "Maternity Session",
    category: "portraits",
    year: "2024",
    client: "Anna K.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop&crop=center",
    description: "Intimate maternity portraits with soft, natural lighting."
  },
  {
    id: 10,
    title: "Product Photography",
    category: "commercial",
    year: "2024",
    client: "Luxury Watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=1000&fit=crop&crop=center",
    description: "High-end product photography with vintage styling."
  },
  {
    id: 11,
    title: "Intimate Wedding",
    category: "weddings",
    year: "2024",
    client: "Grace & James",
    image: "https://cdn0.weddingwire.in/article/5577/3_2/960/jpg/77755-benefits-of-planning-an-intimate-wedding-wedding-story-mumbai-lead-image.jpeg",
    description: "Small ceremony with focus on emotional moments and details."
  },
  {
    id: 12,
    title: "Music Event",
    category: "events",
    year: "2024",
    client: "Jazz Festival",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1000&fit=crop&crop=center",
    description: "Live music photography capturing the energy and atmosphere."
  }
]

export default function PortfolioPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredItems = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  const openLightbox = (item: typeof portfolioItems[0]) => {
    setSelectedImage(item)
    setCurrentImageIndex(filteredItems.findIndex(i => i.id === item.id))
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentImageIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentImageIndex + 1) % filteredItems.length
    
    setCurrentImageIndex(newIndex)
    setSelectedImage(filteredItems[newIndex])
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
        <motion.div 
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=1920&h=1080&fit=crop&crop=center" 
            alt="Professional photography studio with vintage cameras"
            className="w-full h-full object-cover grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm tracking-wider uppercase">
                Our Work
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-tight tracking-tight"
              variants={fadeInUp}
            >
              Photography
              <span className="block text-primary typewriter-effect">Portfolio</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              A curated collection of our finest work, showcasing the timeless beauty 
              of vintage film photography and authentic storytelling.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={fadeInUp}
            >
              <Button 
                asChild 
                size="lg" 
                className="retro-shadow text-base px-8 py-6 uppercase tracking-wider font-medium"
              >
                <Link href="/schedule" className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Book Your Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-8 py-6 uppercase tracking-wider font-medium vintage-border"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  <Camera className="w-5 h-5" />
                  Get In Touch
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={fadeInUp}>
                <Button
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`uppercase tracking-wider font-medium ${
                    selectedCategory === category.id 
                      ? "retro-shadow" 
                      : "vintage-border hover:bg-accent/50"
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.name}
                  <Badge 
                    variant="secondary" 
                    className="ml-2 text-xs"
                  >
                    {category.count}
                  </Badge>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            key={selectedCategory} // Re-animate when category changes
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  <Card className="overflow-hidden retro-shadow hover:shadow-2xl transition-all duration-500 photo-frame">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Badge className="self-start mb-2 bg-primary/80 text-primary-foreground text-xs">
                          {categories.find(c => c.id === item.category)?.name}
                        </Badge>
                        <h3 className="font-bold text-lg typewriter-effect mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm opacity-90 mb-2">
                          {item.client} • {item.year}
                        </p>
                        <div className="flex items-center gap-2 text-xs">
                          <Eye className="w-3 h-3" />
                          View Details
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">No Images Found</h3>
              <p className="text-muted-foreground">
                No portfolio items match the selected category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30 film-grain">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Create Your Own
              <span className="block text-primary typewriter-effect">Timeless Story?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let&apos;s collaborate to create photographs that capture your unique story 
              with the same vintage aesthetic and attention to detail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="retro-shadow text-base px-8 py-6 uppercase tracking-wider font-medium"
              >
                <Link href="/schedule" className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Book Your Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-8 py-6 uppercase tracking-wider font-medium vintage-border"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  <Heart className="w-5 h-5" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-background rounded-sm overflow-hidden retro-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
                onClick={closeLightbox}
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[60vh] md:max-h-[90vh] object-cover grayscale"
                  />
                </div>
                <div className="md:w-1/3 p-6 flex flex-col justify-center">
                  <Badge className="self-start mb-4 bg-primary/20 text-primary border-primary/30">
                    {categories.find(c => c.id === selectedImage.category)?.name}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2 typewriter-effect">
                    {selectedImage.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {selectedImage.client} • {selectedImage.year}
                  </p>
                  <p className="text-foreground leading-relaxed mb-6">
                    {selectedImage.description}
                  </p>
                  <Button 
                    asChild 
                    className="retro-shadow uppercase tracking-wider"
                  >
                    <Link href="/schedule">
                      Book Similar Session
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}