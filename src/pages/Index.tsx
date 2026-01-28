import React from 'react';
import Navbar from '@/components/Navbar';
import MouseTracker from '@/components/MouseTracker';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.brainygyes.com/#organization",
        "name": "BrainyGyes Technology",
        "alternateName": "BrainyGyes Digital Solutions Provider",
        "url": "https://www.brainygyes.com",
        "logo": "https://www.brainygyes.com/assets/brainygyes3.png",
        "description": "Leading Business Development & Digital Solutions Provider offering web development, mobile apps, UI/UX design, and digital transformation services.",
        "sameAs": [
          "https://twitter.com/brainygyes",
          "https://linkedin.com/company/brainygyes",
          "https://github.com/brainygyes"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-XXXXXXXXXX",
          "contactType": "Business Development",
          "areaServed": ["IN", "US", "GB", "AE", "CA", "AU"],
          "availableLanguage": ["English", "Hindi"]
        },
        "knowsAbout": [
          "Business Development",
          "Digital Solutions",
          "Web Development",
          "Mobile App Development",
          "UI/UX Design",
          "Digital Transformation",
          "Software Development",
          "IT Consulting"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.brainygyes.com/#website",
        "url": "https://www.brainygyes.com",
        "name": "BrainyGyes - Business Development & Digital Solutions Provider",
        "publisher": { "@id": "https://www.brainygyes.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.brainygyes.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.brainygyes.com/#service",
        "name": "BrainyGyes Technology - Digital Solutions Provider",
        "image": "https://www.brainygyes.com/assets/brainygyes3.png",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Noida",
          "addressRegion": "UP",
          "addressCountry": "IN"
        },
        "serviceType": [
          "Business Development Solutions",
          "Digital Solutions Provider",
          "Web Development",
          "Mobile App Development",
          "UI/UX Design",
          "Software Development",
          "Digital Transformation",
          "IT Consulting",
          "E-commerce Solutions",
          "Cloud Solutions"
        ],
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Solutions Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Development Consulting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Transformation Solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Software Development"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <main className="bg-background min-h-screen">
      <SEOHead
        title="BrainyGyes | Business Development & Digital Solutions Provider"
        description="BrainyGyes Technology is a leading Business Development & Digital Solutions Provider. We deliver web development, mobile apps, UI/UX design, and digital transformation services for startups and enterprises worldwide."
        keywords="business development, digital solutions provider, business development services, digital solutions company, web development agency, mobile app development, UI UX design, software development, digital transformation, IT consulting, technology partner, business growth solutions, digital agency India, custom software development, enterprise solutions, startup development, e-commerce solutions, cloud solutions, SaaS development, digital strategy"
        canonicalUrl="https://www.brainygyes.com/"
        structuredData={structuredData}
      />
      <MouseTracker />
      <Navbar />
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
