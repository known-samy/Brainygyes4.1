
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ThreeDBackground from '@/components/ThreeDBackground';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, HelpCircle } from 'lucide-react';
import FooterSection from '@/components/sections/FooterSection';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, and creative technology solutions. Our team specializes in creating custom digital solutions tailored to each client's specific needs and goals.",
    category: "Services"
  },
  {
    question: "Do you offer design-only services?",
    answer: "Yes, we offer standalone UI/UX design services including user research, wireframing, prototyping, visual design, and usability testing. Our design team can create comprehensive design systems that can be implemented by your development team.",
    category: "Services"
  },
  {
    question: "Can you help with an existing project that needs improvement?",
    answer: "Absolutely. We offer code audits, performance optimization, and redesign services for existing projects. Our team is experienced in working with legacy systems and can help modernize and improve your current digital products.",
    category: "Services"
  },
  {
    question: "How much does a typical project cost?",
    answer: "Project costs vary widely depending on scope, complexity, and specific requirements. We offer flexible pricing options starting from $499 for basic projects. For a detailed estimate tailored to your project, please contact us with your specific requirements.",
    category: "Pricing"
  },
  {
    question: "Do you offer fixed-price packages?",
    answer: "Yes, we offer fixed-price packages for common project types such as landing pages, business websites, and basic mobile apps. These packages provide transparent pricing and defined deliverables to help you budget effectively.",
    category: "Pricing"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including bank transfers, credit cards, and digital payment platforms. We typically work with milestone-based payments to ensure project progress aligns with payments.",
    category: "Pricing"
  },
  {
    question: "What is your development process?",
    answer: "Our development process follows industry best practices: 1) Requirement gathering and analysis, 2) Planning and design, 3) Development, 4) Testing and quality assurance, 5) Deployment, and 6) Maintenance and support. We emphasize communication and collaboration with clients throughout each stage.",
    category: "Process"
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines depend on complexity and scope. A simple website might take 2-4 weeks, while complex web applications or mobile apps typically require 2-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific project requirements.",
    category: "Process"
  },
  {
    question: "How do you handle project changes and revisions?",
    answer: "We understand that requirements can evolve during development. We include a reasonable number of revisions in our project scope and have a clear change request process for additional modifications that may affect timeline or budget.",
    category: "Process"
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer various support and maintenance packages to ensure your digital product continues to perform optimally after launch. Our support options include bug fixes, security updates, performance monitoring, and feature enhancements.",
    category: "Support"
  },
  {
    question: "What's included in your maintenance packages?",
    answer: "Our maintenance packages typically include regular backups, security updates, performance monitoring, content updates, bug fixes, and technical support. We offer different tiers to match your specific needs and budget.",
    category: "Support"
  },
  {
    question: "How quickly do you respond to support requests?",
    answer: "We prioritize support requests based on urgency. Critical issues are addressed within 2-4 hours, while non-urgent requests typically receive a response within 24 hours during business days.",
    category: "Support"
  },
  {
    question: "What technologies do you use for development?",
    answer: "We work with a wide range of modern technologies including React, React Native, Angular, Vue.js, Node.js, TypeScript, Python, and more. Our technology choices are driven by project requirements, performance considerations, and long-term maintainability.",
    category: "Technology"
  },
  {
    question: "Do you work with specific platforms or frameworks?",
    answer: "Yes, we have expertise in various platforms including WordPress, Shopify, Webflow, and custom solutions. We recommend the best platform based on your specific requirements, budget, and long-term goals.",
    category: "Technology"
  },
  {
    question: "How do you ensure code quality and security?",
    answer: "We follow industry best practices including code reviews, automated testing, security audits, and continuous integration. All our code goes through rigorous quality assurance processes before deployment.",
    category: "Technology"
  },
  {
    question: "Do you provide mobile app development?",
    answer: "Yes, we develop native and cross-platform mobile applications for both iOS and Android. We use technologies like React Native and Flutter to create high-performance mobile apps that work seamlessly across platforms.",
    category: "Services"
  },
  {
    question: "Can you integrate third-party services and APIs?",
    answer: "Absolutely. We have extensive experience integrating various third-party services including payment gateways, social media platforms, analytics tools, CRM systems, and custom APIs to enhance your application's functionality.",
    category: "Services"
  },
  {
    question: "Do you offer e-commerce solutions?",
    answer: "Yes, we create custom e-commerce platforms and can also work with established platforms like Shopify, WooCommerce, and Magento. We develop secure, scalable online stores with features like inventory management, payment processing, and order tracking.",
    category: "Services"
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer: "Yes, we implement SEO best practices during development to ensure your website is search-engine friendly. We can also provide recommendations for digital marketing strategies and integrate analytics tools to track performance.",
    category: "Services"
  },
  {
    question: "Is there a minimum project budget?",
    answer: "While we offer packages starting at $499, the ideal project budget depends on your requirements. We're flexible and can work with various budgets, always striving to deliver the best value for your investment.",
    category: "Pricing"
  },
  {
    question: "Do you offer hourly rates or project-based pricing?",
    answer: "We offer both options. Project-based pricing provides fixed costs and clear deliverables, while hourly rates offer flexibility for ongoing work or projects with evolving requirements. We'll help you choose the best pricing model for your needs.",
    category: "Pricing"
  },
  {
    question: "Are there any hidden costs?",
    answer: "No, we believe in transparent pricing. All costs are clearly outlined in our proposal, including development, testing, and deployment. Any potential additional costs, such as third-party services or premium plugins, are discussed upfront.",
    category: "Pricing"
  },
  {
    question: "Do you offer refunds?",
    answer: "We work on a milestone-based payment system and ensure client satisfaction at each stage. While we don't offer refunds for completed work, we're committed to revisions and adjustments until you're satisfied with the deliverables as per our agreement.",
    category: "Pricing"
  },
  {
    question: "Can I see examples of your previous work?",
    answer: "Yes! You can view our portfolio showcasing completed projects across various industries. We're proud of our work and happy to provide case studies and client testimonials upon request.",
    category: "Process"
  },
  {
    question: "Will I own the code and designs after project completion?",
    answer: "Yes, upon final payment, you'll receive full ownership of all code, designs, and assets created for your project. We provide complete source code and documentation for your records and future development.",
    category: "Process"
  },
  {
    question: "How do you handle communication during projects?",
    answer: "We maintain regular communication through your preferred channels (email, Slack, video calls). You'll have a dedicated project manager who provides weekly progress updates, and we schedule regular check-ins to ensure alignment with your vision.",
    category: "Process"
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, we're happy to sign Non-Disclosure Agreements to protect your confidential information and intellectual property. We take data security and privacy very seriously.",
    category: "Process"
  },
  {
    question: "What happens if there's a bug after launch?",
    answer: "All projects include a warranty period (typically 30-90 days) during which we fix any bugs or issues at no additional cost. After the warranty period, bugs can be addressed through our maintenance packages or on an hourly basis.",
    category: "Support"
  },
  {
    question: "Can you help with hosting and domain setup?",
    answer: "Yes, we can assist with selecting appropriate hosting solutions, domain registration, SSL certificates, and complete deployment setup. We can also manage hosting on your behalf through our maintenance packages.",
    category: "Support"
  },
  {
    question: "Do you provide training for content management?",
    answer: "Absolutely. We provide comprehensive training sessions for you and your team on how to manage and update your website or application. We also create documentation and video tutorials for future reference.",
    category: "Support"
  },
  {
    question: "What if I need to scale my application in the future?",
    answer: "We build applications with scalability in mind, using modern architecture and best practices. As your needs grow, we can enhance performance, add new features, and scale infrastructure to handle increased traffic and data.",
    category: "Support"
  },
  {
    question: "Are your solutions mobile-responsive?",
    answer: "Yes, all our web solutions are fully responsive and optimized for mobile devices, tablets, and desktops. We follow mobile-first design principles to ensure excellent user experience across all screen sizes.",
    category: "Technology"
  },
  {
    question: "Do you follow accessibility standards?",
    answer: "Yes, we follow WCAG (Web Content Accessibility Guidelines) to ensure our applications are accessible to users with disabilities. This includes proper semantic HTML, keyboard navigation, screen reader support, and appropriate color contrast.",
    category: "Technology"
  },
  {
    question: "How do you handle data backup and recovery?",
    answer: "We implement automated backup systems and disaster recovery plans for all projects. Your data is regularly backed up to secure locations, and we can quickly restore services in case of any issues.",
    category: "Technology"
  },
  {
    question: "Can you work with our existing development team?",
    answer: "Yes, we're experienced in collaborating with in-house teams and other agencies. We can seamlessly integrate into your existing workflow, follow your coding standards, and work alongside your team to achieve project goals.",
    category: "Technology"
  }
];

const categories = ['All Questions', 'Services', 'Pricing', 'Process', 'Support', 'Technology'];

const Faq = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Questions');

  const filteredFAQs = useMemo(() => {
    let filtered = faqs;

    // Filter by category
    if (selectedCategory !== 'All Questions') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const getFAQCountByCategory = (category: string) => {
    if (category === 'All Questions') return faqs.length;
    return faqs.filter(faq => faq.category === category).length;
  };
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Frequently Asked Questions</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and approach.
            </p>
          </motion.div>
          
          {/* Search & Categories */}
          <div className="mb-12">
            <div className="glass-card p-6 rounded-xl">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-primary to-accent text-background shadow-lg transform scale-105' 
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <span>{category}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedCategory === category
                        ? 'bg-background/20 text-background'
                        : 'bg-white/20 text-gray-400'
                    }`}>
                      {getFAQCountByCategory(category)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* FAQs Accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 md:p-8 rounded-xl"
          >
            {filteredFAQs.length > 0 ? (
              <>
                <div className="mb-6 flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-300">
                    Showing {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} 
                    {selectedCategory !== 'All Questions' && ` in ${selectedCategory}`}
                    {searchTerm && ` matching "${searchTerm}"`}
                  </span>
                </div>
                
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {filteredFAQs.map((faq, index) => (
                    <motion.div
                      key={`${selectedCategory}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <AccordionItem 
                        value={`item-${index}`} 
                        className="border border-white/10 rounded-lg px-4 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      >
                        <AccordionTrigger className="text-left font-medium text-lg py-4 hover:no-underline">
                          <div className="flex items-start gap-3 text-left">
                            <span className="text-accent text-sm font-medium px-2 py-1 bg-accent/20 rounded-md mt-0.5">
                              {faq.category}
                            </span>
                            <span className="flex-1">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-2 pb-4 pl-20">
                            <p className="text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </>
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-300 mb-2">No questions found</h3>
                <p className="text-gray-400 mb-6">
                  {searchTerm 
                    ? `No questions match "${searchTerm}" in ${selectedCategory === 'All Questions' ? 'any category' : selectedCategory}`
                    : `No questions available in ${selectedCategory}`
                  }
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All Questions');
                  }}
                  className="px-6 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-colors duration-300"
                >
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>
          
          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Please reach out to our customer support team.
            </p>
            <Link
              to="/contact" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-medium hover-lift hover:shadow-lg inline-block transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Faq;
