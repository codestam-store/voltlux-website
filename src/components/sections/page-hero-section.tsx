"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PageHeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  icon: LucideIcon;
  ctaText?: string;
  ctaHref?: string;
  gradient?: string;
}

export function PageHeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  icon: Icon,
  ctaText,
  ctaHref,
  gradient = "from-purple-900/90 via-pink-900/85 to-rose-900/90"
}: PageHeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      
      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full"
      />
      
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-10 w-24 h-24 border border-white/10 rounded-full"
      />
      
      {/* Floating Hearts */}
      <motion.div
        animate={{ 
          y: [-10, -20, -10],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 right-1/4 text-white/20 text-2xl"
      >
        ♥
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [-15, -25, -15],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 left-1/4 text-white/20 text-xl"
      >
        ♥
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Icon className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-4 font-medium"
        >
          {subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {ctaText && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href={ctaHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              {ctaText}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        )}
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}