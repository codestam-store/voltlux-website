"use client";

import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Michael Johnson",
    role: "Bride & Groom",
    content: "Eternal Vows made our wedding planning so much easier. Their contract templates were comprehensive and saved us thousands in legal fees. The personalized service was exceptional!",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/happy couple at wedding ceremony, bride in white dress, groom in black suit, professional photography, natural lighting, joyful expressions"
  },
  {
    name: "Jennifer Martinez",
    role: "Wedding Photographer",
    content: "As a wedding vendor, I rely on Eternal Vows for all my client contracts. Their templates are legally sound and protect both parties. Highly recommended for any wedding professional!",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/professional female photographer with camera, wedding venue background, confident smile, business attire, natural lighting"
  },
  {
    name: "David & Emma Chen",
    role: "Couple",
    content: "The custom contract service exceeded our expectations. The team understood our unique requirements and delivered a perfect agreement. Worth every penny for the peace of mind!",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/asian couple signing wedding documents, elegant setting, formal attire, professional photography, warm lighting"
  },
  {
    name: "Rose Garden Venue",
    role: "Wedding Venue",
    content: "We&apos;ve been using Eternal Vows contracts for over two years. Their venue agreements are thorough and have prevented numerous disputes. Professional service all around.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/elegant wedding venue manager, professional woman in business attire, beautiful garden venue background, confident pose"
  }
];

export function WeddingTestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6"
          >
            <Heart className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of happy couples and wedding professionals who trust 
            Eternal Vows for their contract needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative p-8 bg-card rounded-3xl elegant-shadow wedding-border hover:shadow-xl transition-all duration-500"
            >
              {/* Quote icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center"
              >
                <Quote className="w-4 h-4 text-primary-foreground" />
              </motion.div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <motion.div
                    key={starIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.2 + starIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-5 h-5 text-accent fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-card-foreground leading-relaxed mb-6 text-lg"
              >
                &quot;{testimonial.content}&quot;
              </motion.p>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover elegant-shadow"
                    loading="lazy"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index }}
                    className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center"
                  >
                    <Heart className="w-2 h-2 text-accent-foreground" />
                  </motion.div>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "5,000+", label: "Happy Couples" },
              { number: "500+", label: "Wedding Vendors" },
              { number: "99.9%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}