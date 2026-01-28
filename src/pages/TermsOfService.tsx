
import React from 'react';
import Navbar from '@/components/Navbar';
import ThreeDBackground from '@/components/ThreeDBackground';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';

const TermsOfService = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <ThreeDBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Terms of Service</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Last updated: May 1, 2025
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 rounded-xl prose prose-invert max-w-4xl mx-auto"
          >
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p>
                Welcome to BrainyGyes Technology Pvt Ltd ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website and services operated by BrainyGyes Technology Pvt Ltd.
              </p>
              <p>
                By accessing or using the service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Use of Our Services</h2>
              <p>
                Our services are designed to be flexible and adaptable to your needs. When using our services, you agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Provide accurate and complete information when required</li>
                <li>Use the services only for lawful purposes and in accordance with these Terms</li>
                <li>Not use the services in any way that could damage, disable, overburden, or impair our servers or networks</li>
                <li>Not attempt to gain unauthorized access to any part of the services, other accounts, or other systems or networks connected to our services</li>
                <li>Not use any automated means or interface not provided by us to access our services or to extract data</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p>
                The service and its original content, features, and functionality are and will remain the exclusive property of BrainyGyes Technology Pvt Ltd and its licensors. The service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of BrainyGyes Technology Pvt Ltd.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">User Content</h2>
              <p>
                When you create, upload, post, send, receive, store, or otherwise make available any content on or through our services, you grant us a worldwide, royalty-free license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display and distribute such content.
              </p>
              <p>
                You are responsible for your use of the services and for any content you provide, including compliance with applicable laws, rules, and regulations.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
              <p>
                Some of our services may be subject to payments now or in the future. If you sign up for any paid services, you agree to our payment terms as established at the time of your purchase.
              </p>
              <p>
                You are responsible for paying all fees associated with your use of our services. For subscription-based services, you will be billed in advance on a recurring and periodic basis.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <p>
                We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p>
                In no event shall BrainyGyes Technology Pvt Ltd, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Your access to or use of or inability to access or use the service</li>
                <li>Any conduct or content of any third party on the service</li>
                <li>Any content obtained from the service</li>
                <li>Unauthorized access, use or alteration of your transmissions or content</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                BrainyGyes Technology Pvt Ltd<br />
                Mu-1 , Greater Noida, IN 201310<br />
                Email: contact@brainygyes.com<br />
                Phone: +91 8581917757
              </p>
            </section>
          </motion.div>
        </div>
      </section>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default TermsOfService;
