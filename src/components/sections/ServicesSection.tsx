import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Web Development Solutions',
      description: 'Custom responsive websites and web applications built with React, Next.js, and modern frameworks. Our digital solutions drive business development and online growth.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      )
    },
    {
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps plus cross-platform React Native solutions. Strategic mobile solutions for business development and customer engagement.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12" y2="18" /><path d="M12 6v0" />
        </svg>
      )
    },
    {
      title: 'UI/UX Design Services',
      description: 'User-centered interface design combining aesthetics with functionality. We create engaging digital experiences that convert visitors into loyal customers.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      )
    },
    {
      title: 'Digital Transformation',
      description: 'Innovative digital solutions leveraging AI, cloud technologies, and automation. We help businesses modernize operations and accelerate growth.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" aria-labelledby="services-heading" className="py-16 sm:py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <motion.header 
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.span 
            variants={headerVariants}
            className="text-accent font-medium mb-2 block text-sm sm:text-base"
          >
            DIGITAL SOLUTIONS PROVIDER
          </motion.span>
          <motion.h2 
            id="services-heading"
            variants={headerVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gradient"
          >
            Business Development &amp; Digital Solutions
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-muted-foreground text-sm sm:text-base"
          >
            Comprehensive business development and digital solutions including custom software, web &amp; mobile applications, UI/UX design, and digital transformation consulting for startups and enterprises.
          </motion.p>
        </motion.header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
        
        {/* Internal linking for SEO */}
        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            As a leading <strong>Digital Solutions Provider</strong>, we offer comprehensive <a href="/services" className="text-primary hover:underline">business development services</a> tailored to your needs. 
            Explore our <a href="/portfolio" className="text-primary hover:underline">portfolio</a> or 
            read our <a href="/case-studies" className="text-primary hover:underline">case studies</a> to see how we've accelerated business growth for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
