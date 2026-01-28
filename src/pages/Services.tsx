import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Code, Smartphone, Palette, Zap, Database, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Modern Frameworks"],
      link: "/services/web-development"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences and functionality.",
      features: ["iOS & Android", "Cross-platform", "Native Performance", "App Store Optimization"],
      link: "/services/mobile-app-development"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create engaging and intuitive digital experiences.",
      features: ["User Research", "Wireframing", "Visual Design", "Usability Testing"],
      link: "/services/ui-ux-design"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architectures, APIs, and database management for enterprise-grade applications.",
      features: ["API Development", "Database Design", "Cloud Integration", "Scalable Architecture"],
      link: "/services/backend-development"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets with advanced threat detection and prevention systems.",
      features: ["Security Audits", "Penetration Testing", "Data Protection", "Compliance"],
      link: "/services/cybersecurity"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Creative Technology",
      description: "Innovative solutions leveraging cutting-edge technologies like AR, VR, AI, and interactive experiences for unique digital solutions.",
      features: ["AR/VR Solutions", "AI Integration", "Interactive Experiences", "Emerging Technologies"],
      link: "/services/creative-technology"
    }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We start by understanding your business goals, target audience, and technical requirements." },
    { step: "02", title: "Strategy", description: "Develop a comprehensive strategy and roadmap tailored to your specific needs and objectives." },
    { step: "03", title: "Design", description: "Create intuitive and engaging designs that align with your brand and user expectations." },
    { step: "04", title: "Development", description: "Build robust, scalable solutions using the latest technologies and best practices." },
    { step: "05", title: "Testing", description: "Rigorous testing to ensure quality, performance, and security across all platforms." },
    { step: "06", title: "Launch", description: "Deploy your solution with ongoing support and maintenance for optimal performance." }
  ];

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-accent font-medium mb-4 block">DIGITAL SOLUTIONS PROVIDER</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Business Development &amp; Digital Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              As your trusted <strong>Digital Solutions Provider</strong>, we deliver comprehensive 
              <strong> business development services</strong> designed to transform your organization through 
              innovative technology, strategic expertise, and scalable digital solutions.
            </p>
          </motion.header>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >
              <Link to={service.link} className="block h-full">
                <div className="relative h-full p-[1px] rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-transparent group-hover:from-primary/40 group-hover:via-accent/40 transition-all duration-300">
                  <div className="h-full glass-card p-8 rounded-2xl backdrop-blur-xl">
                    
                    <header className="relative mb-8">
                      <div className="relative w-16 h-16 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </header>

                    <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h2>

                    <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    <section>
                      <h3 className="text-xs font-semibold text-accent/80 uppercase tracking-wider mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <div className="mt-6 text-primary font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Our Process</h2>
            <p className="text-black-300">
              A proven methodology that ensures successful project delivery from concept to launch.
            </p>
          </motion.header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="text-4xl font-bold text-accent mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-3 text-black-300">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto glass-card p-12 rounded-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Partner with a Leading Digital Solutions Provider
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Ready to accelerate your business development? Let's discuss how our digital solutions 
              can transform your ideas into scalable, profitable realities.
            </p>
            <Link
              to="/contact" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-medium inline-block"
            >
              Start Your Digital Transformation
            </Link>
          </motion.section>
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </main>
  );
};

export default Services;
