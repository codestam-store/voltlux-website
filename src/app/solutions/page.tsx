import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  Brain, 
  Code, 
  Rocket, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowUpRight,
  Users,
  TrendingUp,
  Target
} from "lucide-react";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "Digital Solutions",
  description: "Explore our comprehensive digital solutions including AI & Machine Learning, Web Development, Digital Transformation, Cloud Solutions, Cybersecurity, and Performance Optimization.",
  openGraph: {
    title: "Digital Solutions | NexusFlow",
    description: "Transform your business with our cutting-edge digital solutions. From AI to cybersecurity, we have everything you need to succeed.",
  },
};

const solutions = [
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics that transform your business operations.",
    longDescription: "Our AI and Machine Learning solutions leverage cutting-edge algorithms to automate complex processes, predict trends, and provide intelligent insights that drive better decision-making.",
    features: [
      "Predictive Analytics & Forecasting",
      "Natural Language Processing",
      "Computer Vision & Image Recognition",
      "Recommendation Systems",
      "Automated Decision Making",
      "Intelligent Chatbots & Virtual Assistants"
    ],
    benefits: [
      "Increased operational efficiency by 40%",
      "Improved decision accuracy by 60%",
      "Reduced manual workload by 70%",
      "Enhanced customer experience"
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
  },
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies.",
    longDescription: "We create responsive, high-performance web applications using the latest technologies and best practices. From simple websites to complex enterprise applications, we deliver solutions that scale.",
    features: [
      "React & Next.js Applications",
      "Node.js Backend Development",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "API Development & Integration",
      "Performance Optimization"
    ],
    benefits: [
      "Lightning-fast loading times",
      "Mobile-first responsive design",
      "SEO-optimized architecture",
      "Scalable and maintainable code"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    id: "digital-transformation",
    icon: Rocket,
    title: "Digital Transformation",
    description: "End-to-end business digitization and process optimization.",
    longDescription: "Transform your entire business with our comprehensive digital transformation services. We help organizations modernize their operations, improve efficiency, and stay competitive in the digital age.",
    features: [
      "Process Automation & Workflow Optimization",
      "Legacy System Modernization",
      "Change Management & Training",
      "Data Migration & Integration",
      "Digital Strategy Consulting",
      "Technology Stack Assessment"
    ],
    benefits: [
      "Streamlined business processes",
      "Improved employee productivity",
      "Enhanced customer satisfaction",
      "Reduced operational costs"
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
  },
  {
    id: "cloud",
    icon: Globe,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps automation.",
    longDescription: "Build robust, scalable cloud infrastructure that grows with your business. Our cloud solutions provide reliability, security, and cost-effectiveness for modern applications.",
    features: [
      "AWS, Azure & Google Cloud Platform",
      "Container Orchestration (Kubernetes)",
      "CI/CD Pipeline Automation",
      "Serverless Architecture",
      "Cloud Security & Compliance",
      "Cost Optimization & Monitoring"
    ],
    benefits: [
      "99.9% uptime guarantee",
      "Automatic scaling capabilities",
      "Reduced infrastructure costs",
      "Enhanced security and compliance"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems.",
    longDescription: "Protect your digital assets with our comprehensive cybersecurity solutions. We implement multi-layered security measures to safeguard your business from evolving threats.",
    features: [
      "Zero Trust Architecture",
      "Threat Detection & Response",
      "Security Audits & Penetration Testing",
      "Compliance & Governance",
      "Incident Response Planning",
      "Security Awareness Training"
    ],
    benefits: [
      "Comprehensive threat protection",
      "Regulatory compliance",
      "Reduced security risks",
      "Enhanced customer trust"
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed and efficiency optimization for maximum ROI.",
    longDescription: "Optimize your applications and systems for peak performance. Our performance optimization services ensure your digital solutions run at maximum efficiency.",
    features: [
      "Load Testing & Performance Analysis",
      "Database Optimization",
      "Caching Strategies",
      "CDN Implementation",
      "Code Optimization",
      "Monitoring & Analytics"
    ],
    benefits: [
      "Improved user experience",
      "Reduced server costs",
      "Higher conversion rates",
      "Better search engine rankings"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Target className="h-3 w-3 mr-1" />
              Our Solutions
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Comprehensive Digital
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              From AI-powered automation to robust cybersecurity, our comprehensive suite of digital solutions 
              is designed to transform your business and drive measurable results.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>6 Core Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-500" />
                <span>500+ Successful Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-purple-500" />
                <span>95% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={solution.id} className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {solution.title}
                    </Badge>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {solution.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {solution.longDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Business Benefits</h3>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ArrowUpRight className="h-4 w-4 text-primary flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/solutions/${solution.id}`}>
                      <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {/* Image */}
                <div className="flex-1">
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={solution.image}
                      alt={`${solution.title} solution`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how our digital solutions can help you achieve your business goals. 
            Our experts are ready to create a customized plan for your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
