"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, FileText, CheckCircle, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Legally Protected",
    description: "All contracts are reviewed by qualified legal professionals to ensure compliance and protection.",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-600"
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Get your wedding contracts ready in 24-48 hours with our streamlined process.",
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-600"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our team of wedding and legal experts are here to guide you every step of the way.",
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-600"
  },
  {
    icon: FileText,
    title: "Comprehensive Templates",
    description: "Choose from over 50 professionally crafted templates for every wedding need.",
    color: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-600"
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee with unlimited revisions until you&apos;re completely happy.",
    color: "from-pink-500/20 to-pink-600/20",
    iconColor: "text-pink-600"
  },
  {
    icon: Sparkles,
    title: "Personalized Touch",
    description: "Every contract is customized to reflect your unique wedding style and requirements.",
    color: "from-indigo-500/20 to-indigo-600/20",
    iconColor: "text-indigo-600"
  }
];

export function WeddingFeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6"
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Why Choose Eternal Vows?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We combine legal expertise with wedding industry knowledge to deliver 
            contracts that protect your interests and ensure your special day goes smoothly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 bg-card rounded-3xl elegant-shadow wedding-border hover:shadow-xl transition-all duration-500"
              >
                {/* Background gradient on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl transition-opacity duration-500`}
                />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-6 group-hover:shadow-lg transition-shadow duration-300"
                  >
                    <IconComponent className={`w-8 h-8 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed group-hover:text-card-foreground transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-accent/30 rounded-full"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            How It Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Template", description: "Browse our collection of professional templates" },
              { step: "2", title: "Customize", description: "Personalize the contract to your specific needs" },
              { step: "3", title: "Review", description: "Our experts review and refine your contract" },
              { step: "4", title: "Deliver", description: "Receive your finalized contract within 48 hours" }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Connecting line */}
                {index < 3 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 z-0"
                  />
                )}
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4 mx-auto elegant-shadow"
                >
                  {step.step}
                </motion.div>
                
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}