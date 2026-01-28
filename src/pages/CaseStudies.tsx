
import React from 'react';
import Navbar from '@/components/Navbar';
import ThreeDBackground from '@/components/ThreeDBackground';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FooterSection from '@/components/sections/FooterSection';

const caseStudies = [
  {
    id: '1',
    title: 'E-commerce Platform',
    client: 'Fashion Retailer',
    image: 'https://i.pinimg.com/736x/bb/66/24/bb6624ec5adbb59c1381c4265c606071.jpg',
    challenge: 'Improving conversion rates and user experience on a legacy platform.',
    solution: 'Complete UX/UI redesign with modern technologies and streamlined checkout process.',
    results: '45% increase in conversion rate, 30% reduction in cart abandonment.'
  },
  {
    id: '2',
    title: 'Healthcare App',
    client: 'Medical Services Provider',
    image: "https://i.pinimg.com/736x/db/53/3f/db533f09e624cc088b08cce9bb555db5.jpg",
    challenge: 'Creating a secure, HIPAA-compliant mobile app for patient management.',
    solution: 'Developed a secure React Native application with encrypted data storage and secure authentication.',
    results: 'Reduced administrative time by 60% and improved patient satisfaction scores by 35%.'
  },
  {
    id: '3',
    title: 'Interactive Dashboard',
    client: 'Investment Firm',
    image: 'https://i.pinimg.com/736x/de/d1/c5/ded1c5f477e887676ae996af2d901b32.jpg',
    challenge: 'Building a real-time dashboard to visualize complex financial data.',
    solution: 'Custom data visualization solution with real-time updates and interactive charts.',
    results: 'Decreased decision-making time by 70% and improved data accuracy by 25%.'
  },
  {
    id: '4',
    title: 'AR Product Visualizer',
    client: 'Furniture Retailer',
    image: 'https://i.pinimg.com/1200x/e2/34/21/e234217b4478cab352bb5cf1b8a44ced.jpg',
    challenge: 'Reducing product returns and improving customer confidence in online furniture purchases.',
    solution: 'Developed an AR application that lets customers visualize furniture in their actual space.',
    results: '50% reduction in returns, 35% increase in conversion rate, and 90% customer satisfaction.'
  },
  {
    id: '5',
    title: 'AI-Powered Analytics',
    client: 'Enterprise SaaS Company',
    image: 'https://i.pinimg.com/1200x/10/66/61/106661f84760f2fe684621f0dfe8bd1d.jpg',
    challenge: 'Providing actionable insights from massive datasets for enterprise clients.',
    solution: 'Built an AI-driven analytics platform with predictive modeling and automated insights.',
    results: '80% faster insight generation, 95% accuracy in predictions, and 60% cost reduction.'
  },
  {
    id: '6',
    title: 'Blockchain Wallet',
    client: 'FinTech Startup',
    image: 'https://i.pinimg.com/736x/60/b6/43/60b6432be4130f4e2ad23d92eda11908.jpg',
    challenge: 'Creating a secure, user-friendly wallet for multiple cryptocurrencies and DeFi protocols.',
    solution: 'Developed a non-custodial wallet with advanced security features and seamless DeFi integration.',
    results: '500K+ downloads, $2B+ in transaction volume, and 99.9% uptime security record.'
  },
  {
    id: '7',
    title: 'Learning Management System',
    client: 'Educational Institution',
    image: 'https://i.pinimg.com/736x/c4/cc/2b/c4cc2b8c8c584be07d548c5d3f1eb48b.jpg',
    challenge: 'Modernizing online education with interactive features and improved student engagement.',
    solution: 'Built a comprehensive LMS with AI-driven personalization and collaborative learning tools.',
    results: '85% increase in student engagement, 40% improvement in completion rates, and 95% user satisfaction.'
  },
  {
    id: '8',
    title: 'Social Media Platform',
    client: 'Tech Startup',
    image: 'https://i.pinimg.com/1200x/09/32/d2/0932d2c5f748b0df2e2e8fe4d5bffd06.jpg',
    challenge: 'Building a niche social platform focused on professional networking and knowledge sharing.',
    solution: 'Created a specialized social network with AI-powered content curation and professional tools.',
    results: '2M+ active users, 90% retention rate, and $10M Series A funding secured.'
  },
  {
    id: '9',
    title: 'Smart Home IoT App',
    client: 'IoT Device Manufacturer',
    image: 'https://i.pinimg.com/736x/7e/f1/42/7ef142344b333b2f0b8c19c2f51c0101.jpg',
    challenge: 'Unifying control of diverse IoT devices into a single, intuitive smart home ecosystem.',
    solution: 'Developed a comprehensive IoT platform with AI automation and cross-device compatibility.',
    results: '99.5% device connectivity, 75% reduction in setup time, and 4.9/5 user rating.'
  },
  {
    id: '10',
    title: 'Trading Platform',
    client: 'Investment Brokerage',
    image: 'https://i.pinimg.com/736x/72/c1/83/72c183951ba05b4104a115e609525d33.jpg',
    challenge: 'Creating a professional-grade trading platform with institutional-level features for retail investors.',
    solution: 'Built a comprehensive trading platform with advanced analytics, algorithmic trading, and risk management.',
    results: '$5B+ in trading volume, 50ms average latency, and 300% increase in active traders.'
  },
  {
    id: '11',
    title: 'VR Training Simulator',
    client: 'Manufacturing Corporation',
    image: 'https://i.pinimg.com/736x/d2/56/7e/d2567e7a51b4024e61f1e19d1ceca408.jpg',
    challenge: 'Reducing training costs and improving safety in hazardous manufacturing environments.',
    solution: 'Created immersive VR training simulations with haptic feedback and real-time performance analytics.',
    results: '90% reduction in training costs, 95% improvement in safety scores, and 70% faster skill acquisition.'
  },
  {
    id: '12',
    title: 'Food Delivery App',
    client: 'Restaurant Technology Startup',
    image: 'https://i.pinimg.com/1200x/45/8e/3e/458e3ebc6481fe156efc433415a4c972.jpg',
    challenge: 'Creating a sustainable food delivery ecosystem that benefits restaurants, drivers, and customers equally.',
    solution: 'Developed an AI-optimized delivery platform with fair pricing, route optimization, and restaurant tools.',
    results: '1M+ orders monthly, 95% restaurant retention, and 25% higher driver earnings than competitors.'
  }
];

const CaseStudies = () => {
  const navigate = useNavigate();

  const handleViewCaseStudy = (id: string) => {
    navigate(`/case-studies/${id}`);
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
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Case Studies</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our client success stories and learn how we've helped businesses solve complex challenges.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 bg-accent/90 text-white px-3 py-1 rounded-full text-sm">
                      {study.client}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h2>
                  
                  <div className="space-y-4">
                    <div className="glass-card p-4 rounded-lg">
                      <h3 className="font-semibold text-accent mb-2">The Challenge</h3>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div className="glass-card p-4 rounded-lg">
                      <h3 className="font-semibold text-accent mb-2">Our Solution</h3>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    
                    <div className="glass-card p-4 rounded-lg">
                      <h3 className="font-semibold text-accent mb-2">The Results</h3>
                      <p className="text-gray-300">{study.results}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-medium hover-lift hover:shadow-lg"
                      onClick={() => handleViewCaseStudy(study.id)}
                    >
                      Full Case Study
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default CaseStudies;
