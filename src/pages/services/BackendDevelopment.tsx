import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import { Database, ArrowLeft, CheckCircle } from 'lucide-react';

const BackendDevelopment = () => {
  const features = [
    "RESTful API development",
    "GraphQL API implementation",
    "Database design and optimization",
    "Cloud infrastructure (AWS, GCP, Azure)",
    "Microservices architecture",
    "Real-time data processing",
    "Third-party integrations",
    "Performance monitoring and scaling"
  ];

  const technologies = [
    "Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS"
  ];

  return (
    <main className="bg-background min-h-screen">
      <SEOHead
        title="Backend Development Services | BrainyGyes Technology"
        description="Robust backend development with scalable APIs, database design, and cloud infrastructure. Node.js, Python, PostgreSQL, and microservices architecture."
        keywords="backend development, API development, database design, Node.js, Python, cloud infrastructure, microservices, scalable architecture"
        canonicalUrl="https://www.brainygyes.com/services/backend-development"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <Link to="/services" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Database className="w-8 h-8" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
                Backend Development
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Robust server-side solutions with scalable architectures, APIs, and database 
              management for enterprise-grade applications that grow with your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">What We Offer</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">Technologies We Use</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto glass-card p-8 sm:p-12 rounded-2xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient">
              Ready to Build a Scalable Backend?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's architect a robust backend solution for your application.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium inline-block"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </main>
  );
};

export default BackendDevelopment;
