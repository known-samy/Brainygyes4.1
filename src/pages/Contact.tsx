import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const Contact = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;