"use client";

import { motion } from "framer-motion";
import { WeddingNavbar } from "@/components/wedding-navbar";
import { ArrowRight, CheckCircle, Star, Heart, FileText, Shield, Users, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const features = [
  {
    icon: FileText,
    title: "Contract Templates",
    description: "Professional, legally-vetted templates for every wedding vendor and service.",
    image: "https://maxm-imggenurl.web.val.run/elegant wedding contract documents on marble desk with gold pen and flowers"
  },
  {
    icon: Shield,
    title: "Legal Protection",
    description: "Comprehensive legal coverage with expert guidance and consultation.",
    image: "https://maxm-imggenurl.web.val.run/professional legal consultation for wedding contracts in elegant office"
  },
  {
    icon: Users,
    title: "Vendor Management",
    description: "Streamline all your vendor relationships with organized contract management.",
    image: "https://maxm-imggenurl.web.val.run/wedding vendor meeting with contracts and planning documents"
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description: "Tailored contract solutions for unique wedding requirements and special circumstances.",
    image: "https://maxm-imggenurl.web.val.run/custom wedding contract creation with personalized details and signatures"
  }
];

const testimonials = [
  {
    name: "Sarah & Michael",
    text: "Eternal Vows made our contract process so smooth. We felt completely protected and confident with every vendor agreement.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/happy bride and groom couple portrait professional wedding photo"
  },
  {
    name: "Jennifer L.",
    text: "The legal expertise and personalized service exceeded our expectations. Best investment we made for our wedding planning.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/professional bride portrait elegant wedding dress"
  },
  {
    name: "David & Emma",
    text: "Professional templates saved us thousands in legal fees. The customer support was exceptional throughout the process.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/elegant groom and bride couple professional wedding portrait"
  }
];

const pricingPlans = [
  {
    name: "Essential",
    price: "$49",
    period: "one-time",
    description: "Perfect for couples with basic contract needs",
    features: [
      "5 Professional Templates",
      "Basic Legal Guidance",
      "Email Support",
      "Contract Customization",
      "Digital Delivery"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "$149",
    period: "one-time",
    description: "Most popular choice for comprehensive protection",
    features: [
      "15 Professional Templates",
      "Expert Legal Consultation",
      "Priority Support",
      "Custom Contract Creation",
      "Vendor Communication Tools",
      "Legal Review Service"
    ],
    popular: true
  },
  {
    name: "Luxury",
    price: "$299",
    period: "one-time",
    description: "Complete wedding contract solution",
    features: [
      "Unlimited Templates",
      "Dedicated Legal Advisor",
      "24/7 Support",
      "Full Custom Contracts",
      "Vendor Negotiation Support",
      "Legal Representation",
      "Contract Management System"
    ],
    popular: false
  }
];

export default function HomePage() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-background">
      <WeddingNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://content.jdmagicbox.com/comp/asansol/p5/9999px341.x341.180629131646.n7p5/catalogue/maa-ambey-wedding-photography-bazar-asansol-photographers-3plyy03ce6.jpg)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-pink-900/60 to-rose-900/70" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Wedding{" "}
                <span className="block text-white">contracts</span>
                <span className="block text-3xl lg:text-4xl font-normal text-white/90">
                  as secure as the love you&apos;ve found.
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Professional and protected with none of the legal complexity, Eternal Vows&apos; tools help you secure your perfect day and focus on what matters most.
              </motion.p>
              
              <motion.form 
                onSubmit={handleEmailSubmit}
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  Try for free
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.form>
              
              <motion.div 
                className="flex items-center gap-6 text-sm text-white/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span>Trusted by</span>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://maxm-imggenurl.web.val.run/brides magazine logo elegant typography" 
                    alt="Brides Magazine" 
                    className="h-6 opacity-60"
                  />
                  <img 
                    src="https://maxm-imggenurl.web.val.run/the knot wedding magazine logo" 
                    alt="The Knot" 
                    className="h-6 opacity-60"
                  />
                  <img 
                    src="https://maxm-imggenurl.web.val.run/martha stewart weddings logo elegant" 
                    alt="Martha Stewart Weddings" 
                    className="h-6 opacity-60"
                  />
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <img
                src="https://maxm-imggenurl.web.val.run/elegant wedding contract documents displayed on laptop and mobile device professional setup"
                alt="Wedding contract tools on devices"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-rose-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Planning a wedding is complex.{" "}
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">Eternal Vows makes contracts simple.</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <Link href={`#${feature.title.toLowerCase().replace(/\\s+/g, '-')}`}>
                    <div className="bg-card rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-48 object-cover rounded-xl mb-6"
                      />
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contract Templates Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Build premium wedding contracts the way you want, no legal experience necessary.
              </h2>
              
              <div className="space-y-4 mb-8">
                {[
                  "Flexible templates with legal guidance to help you along the way.",
                  "Make changes and update your contracts as many times as you like.",
                  "Custom legal consultation included.",
                  "Privacy and control over your contracts and vendor data.",
                  "Personalized legal support."
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <Link
                href="/templates"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
              >
                Learn more about Eternal Vows contract templates
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 mt-8">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-3 rounded-full border border-border bg-background"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  Try for free
                </button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://maxm-imggenurl.web.val.run/wedding contract template editor interface on computer screen professional design"
                alt="Contract template editor"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/30 via-pink-50/20 to-rose-50/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The best option for couples looking for lots of protection and no stress.
          </motion.h2>
          
          <motion.div 
            className="bg-card rounded-2xl p-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-6">Comparisons</th>
                    <th className="text-center py-4 px-6 text-purple-600 font-bold">Eternal Vows</th>
                    <th className="text-center py-4 px-6 text-muted-foreground">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Fully customizable contracts",
                    "Legal consultation included",
                    "Easy to use templates",
                    "White-glove customer experience",
                    "Secure & privacy-focused",
                    "Vendor management tools"
                  ].map((feature, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-6 text-left">{feature}</td>
                      <td className="py-4 px-6 text-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-muted-foreground">—</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-muted-foreground">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Curated</span>
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full">Custom</span>
            <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full">Secure</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Reliable</span>
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full">Premium</span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our couples love us, and the feeling is mutual.
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Those &quot;free&quot; legal sites come with a catch.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;ve built everything you need with none of what you don&apos;t, because we put you and your wedding first. No hidden fees, no overwhelming options, no missing legal support.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-card rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-full font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}>
                  {plan.name === 'Essential' ? 'Get Started' : 
                   plan.name === 'Premium' ? 'Start Premium' : 'Go Luxury'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Build your wedding contracts, templates, and legal protection for free.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              No credit card required, no short-term free trials, no commitment. Only pay when you&apos;re ready to finalize your contracts.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-full border border-border bg-background"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Try for free
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            You have questions, we have answers.
          </motion.h2>
          
          <div className="space-y-8">
            {[
              {
                question: "How much do wedding contract services cost?",
                answer: "Eternal Vows is completely free to start exploring our contract templates and services. You can review all features without a credit card or commitment. Our Essential plan starts at $49, Premium at $149, and Luxury at $299 - all one-time payments with no hidden fees."
              },
              {
                question: "Are your contract templates legally binding?",
                answer: "Yes, all our contract templates are created and reviewed by licensed attorneys specializing in wedding and event law. They're designed to be legally enforceable and provide comprehensive protection for your wedding arrangements."
              },
              {
                question: "Can I customize the contract templates?",
                answer: "Absolutely! Our templates are fully customizable to match your specific wedding needs. You can modify terms, add clauses, adjust payment schedules, and include special requirements while maintaining legal validity."
              },
              {
                question: "Do you provide legal consultation?",
                answer: "Yes, our Premium and Luxury plans include direct access to legal experts who can review your contracts, provide guidance on terms, and help with vendor negotiations. Our team has extensive experience in wedding and event law."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text">Eternal Vows</h3>
                  <p className="text-xs text-muted-foreground">Contract Services</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Professional wedding contract services with expert legal guidance for your perfect day.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/templates" className="hover:text-primary">Contract Templates</Link></li>
                <li><Link href="/services" className="hover:text-primary">Legal Consultation</Link></li>
                <li><Link href="/services" className="hover:text-primary">Custom Contracts</Link></li>
                <li><Link href="/services" className="hover:text-primary">Vendor Management</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Eternal Vows by Codestam Technologies. All rights reserved.</p>
            <p className="mt-2">Publisher: <Link href="https://codestam.com" className="text-primary hover:underline">Codestam.com</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}