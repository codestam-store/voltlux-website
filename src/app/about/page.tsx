"use client";

import { motion } from "framer-motion";
import { WeddingNavbar } from "@/components/wedding-navbar";
import { PageHeroSection } from "@/components/sections/page-hero-section";
import { Heart, Users, Scale, Award, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Passion for Perfection",
    description: "We understand that your wedding day is one of the most important days of your life, and we&apos;re passionate about protecting it.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Scale,
    title: "Legal Excellence",
    description: "Our team of legal experts ensures every contract meets the highest standards of legal protection and compliance.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Users,
    title: "Personal Service",
    description: "We believe in building relationships with our clients, providing personalized attention and support throughout the process.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "With thousands of successful contracts and satisfied clients, we have the experience you can trust.",
    color: "from-purple-500 to-violet-500"
  }
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    description: "Former wedding planner turned legal expert with 12+ years of experience in wedding contract law.",
    image: "https://maxm-imggenurl.web.val.run/professional woman lawyer in elegant business attire, confident smile, law office background, natural lighting",
    expertise: ["Contract Law", "Wedding Industry", "Business Strategy"]
  },
  {
    name: "David Chen",
    role: "Chief Legal Officer",
    description: "Experienced attorney specializing in contract law and dispute resolution with a focus on wedding services.",
    image: "https://maxm-imggenurl.web.val.run/professional male attorney in business suit, law books background, confident pose, professional photography",
    expertise: ["Contract Law", "Dispute Resolution", "Legal Compliance"]
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Client Services",
    description: "Wedding industry veteran with extensive experience in vendor relations and contract negotiations.",
    image: "https://maxm-imggenurl.web.val.run/professional woman in business attire, wedding venue background, warm smile, natural lighting",
    expertise: ["Client Relations", "Wedding Planning", "Vendor Management"]
  },
  {
    name: "Michael Thompson",
    role: "Senior Contract Specialist",
    description: "Legal professional with expertise in customizing contracts for unique wedding requirements and special circumstances.",
    image: "https://maxm-imggenurl.web.val.run/professional man in business casual attire, office setting, documents on desk, professional lighting",
    expertise: ["Contract Customization", "Legal Research", "Risk Assessment"]
  }
];

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Eternal Vows was established to bridge the gap between wedding planning and legal protection."
  },
  {
    year: "2019",
    title: "First 1,000 Contracts",
    description: "Successfully delivered our first thousand wedding contracts, establishing our reputation for quality."
  },
  {
    year: "2021",
    title: "Legal Team Expansion",
    description: "Expanded our legal team to include specialists in various areas of wedding and event law."
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Named &apos;Best Wedding Legal Service&apos; by Wedding Industry Awards for two consecutive years."
  },
  {
    year: "2023",
    title: "Digital Platform Launch",
    description: "Launched our comprehensive digital platform for streamlined contract creation and management."
  },
  {
    year: "2024",
    title: "5,000+ Happy Couples",
    description: "Reached the milestone of serving over 5,000 couples and 500+ wedding professionals."
  }
];

const stats = [
  { label: "Happy Couples", value: "5,000+", icon: Heart },
  { label: "Contracts Delivered", value: "8,500+", icon: CheckCircle },
  { label: "Wedding Professionals", value: "500+", icon: Users },
  { label: "Years of Excellence", value: "6+", icon: Award }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <WeddingNavbar />
      
      {/* Hero Section */}
      <PageHeroSection
        title="About Eternal Vows"
        subtitle="Protecting Your Perfect Day"
        description="We are passionate about protecting your perfect day through professional wedding contract services, expert legal guidance, and personalized support."
        backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        icon={Users}
        ctaText="Our Story"
        ctaHref="#mission"
        gradient="from-purple-900/70 via-pink-900/60 to-rose-900/70"
      />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-rose-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-3"
                >
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                  <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="text-purple-600 font-semibold">Our Mission</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold">
                  Protecting Your{" "}
                  <span className="gradient-text">
                    Perfect Day
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our mission is to provide couples and wedding professionals with comprehensive, 
                  legally sound contracts that protect their interests and ensure their special day 
                  goes smoothly without legal worries.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a world where every couple can celebrate their love with complete 
                  peace of mind, knowing their wedding is protected by professional, comprehensive 
                  legal agreements.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Legal Protection", desc: "Comprehensive coverage" },
                  { title: "Expert Guidance", desc: "Professional support" },
                  { title: "Personal Touch", desc: "Customized solutions" },
                  { title: "Peace of Mind", desc: "Worry-free celebrations" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-purple-500/10 to-rose-500/10 rounded-3xl p-8 wedding-border elegant-shadow">
                <img
                  src="https://maxm-imggenurl.web.val.run/elegant wedding contract signing ceremony, bride and groom with legal documents, professional photography, warm lighting"
                  alt="Wedding contract signing ceremony"
                  className="w-full h-auto rounded-2xl elegant-shadow"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These values guide everything we do and shape how we serve our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-card rounded-3xl elegant-shadow wedding-border hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-card-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our team combines legal expertise with deep wedding industry knowledge 
              to provide you with unparalleled service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-card rounded-3xl elegant-shadow wedding-border hover:shadow-xl transition-all duration-500"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover elegant-shadow"
                    loading="lazy"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                  >
                    <Heart className="w-3 h-3 text-primary-foreground" />
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From a small startup to a trusted leader in wedding contract services.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-rose-600 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="p-6 bg-card rounded-2xl elegant-shadow wedding-border">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-br from-purple-600 to-rose-600 rounded-full flex-shrink-0"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Protect Your Perfect Day?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Join thousands of couples who trust Eternal Vows for their wedding contract needs. 
              Let&apos;s work together to ensure your special day is legally protected.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/templates"
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-rose-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 elegant-shadow flex items-center space-x-3"
              >
                <span>Browse Templates</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
              
              <Link
                href="/contact"
                className="px-10 py-5 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center space-x-3"
              >
                <span>Contact Us</span>
                <Heart className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}