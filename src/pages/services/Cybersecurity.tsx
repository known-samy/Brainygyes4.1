import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import { Shield, ArrowLeft, CheckCircle } from 'lucide-react';

const Cybersecurity = () => {
  const features = [
    "Security audits and assessments",
    "Penetration testing",
    "Vulnerability scanning",
    "Data encryption solutions",
    "Identity and access management",
    "GDPR and compliance consulting",
    "Incident response planning",
    "Security awareness training"
  ];

  const technologies = [
    "OWASP", "Burp Suite", "Nessus", "Wireshark", "OAuth 2.0", "JWT", "SSL/TLS", "AWS Security"
  ];

  return (
    <main className="bg-background min-h-screen">
      <SEOHead
        title="Cybersecurity Services | BrainyGyes Technology"
        description="Comprehensive cybersecurity solutions including security audits, penetration testing, data protection, and compliance consulting for businesses."
        keywords="cybersecurity, security audits, penetration testing, data protection, GDPR compliance, vulnerability assessment, information security"
        canonicalUrl="https://www.brainygyes.com/services/cybersecurity"
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
                <Shield className="w-8 h-8" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
                Cybersecurity
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Comprehensive security solutions to protect your digital assets with advanced 
              threat detection, prevention systems, and compliance consulting.
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
              <h3 className="text-xl font-bold mb-6 text-foreground">Technologies & Standards</h3>
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
              Ready to Secure Your Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's assess your security posture and protect your digital assets.
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

export default Cybersecurity;
