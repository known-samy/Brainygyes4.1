
import React from 'react';
import Navbar from '@/components/Navbar';
import ThreeDBackground from '@/components/ThreeDBackground';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';

const CookiePolicy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Cookie Policy</h1>
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
              <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
              <p>
                Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third party to recognize you and make your next visit easier and the service more useful to you.
              </p>
              <p>
                Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
              <p>
                When you use and access our service, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Essential Cookies:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent security threats. They do not collect or store any personal information.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit, etc. These data help us understand and analyze how well the website performs and where it needs improvement.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> These are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos or sharing content on the website on social media platforms.
                </li>
                <li>
                  <strong>Preferences Cookies:</strong> These cookies help us store your settings and browsing preferences like language preferences so that you have a better and efficient experience on future visits to the website.
                </li>
                <li>
                  <strong>Advertising Cookies:</strong> These cookies are used to customize your ad experience on our website. They help us show you relevant ads based on your browsing habits.
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.
              </p>
              <p>
                Third-party cookies used on our website include:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Google Analytics (for analytics and performance)</li>
                <li>Google Ads (for advertising)</li>
                <li>Facebook Pixel (for marketing)</li>
                <li>Hotjar (for behavior analysis)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">What Are Your Choices Regarding Cookies</h2>
              <p>
                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
              </p>
              <p>
                Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
              </p>
              <p>You can learn more about cookies and the following third-party websites:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/" className="text-accent hover:underline">http://www.networkadvertising.org/</a></li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us:
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

export default CookiePolicy;
