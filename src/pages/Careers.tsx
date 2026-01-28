import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MapPin, Clock, Users, Heart, Zap, Award } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs for you and your family."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and unlimited PTO to maintain work-life balance."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Growth & Learning",
      description: "Professional development budget, conference attendance, and continuous learning opportunities."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition",
      description: "Performance bonuses, equity options, and recognition programs that celebrate your achievements."
    }
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      description: "Join our engineering team to build scalable web applications using modern technologies like React, Node.js, and cloud platforms.",
      requirements: ["5+ years of full-stack development", "Experience with React and Node.js", "Strong problem-solving skills", "Experience with cloud platforms"]
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Create beautiful and intuitive user experiences for our clients' digital products, from concept to final implementation.",
      requirements: ["3+ years of UI/UX design experience", "Proficiency in Figma and Adobe Creative Suite", "Strong portfolio showcasing web and mobile designs", "User research experience"]
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Remote / Austin",
      type: "Full-time",
      description: "Develop native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      requirements: ["4+ years of mobile development", "Experience with React Native or Flutter", "Published apps in App Store/Play Store", "Understanding of mobile UI/UX principles"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Seattle",
      type: "Full-time",
      description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes to ensure reliable and scalable systems.",
      requirements: ["3+ years of DevOps experience", "Experience with AWS/Azure/GCP", "Docker and Kubernetes knowledge", "Infrastructure as Code experience"]
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote / Chicago",
      type: "Full-time",
      description: "Drive growth through digital marketing campaigns, content creation, and performance optimization across multiple channels.",
      requirements: ["2+ years of digital marketing", "Experience with Google Ads and social media", "Content creation skills", "Analytics and data-driven approach"]
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote / Boston",
      type: "Full-time",
      description: "Lead cross-functional teams to deliver successful projects on time and within budget while maintaining high quality standards.",
      requirements: ["3+ years of project management", "Agile/Scrum certification preferred", "Strong communication skills", "Experience with project management tools"]
    }
  ];

  const values = [
    "Innovation-driven culture",
    "Collaborative team environment",
    "Continuous learning mindset",
    "Work-life balance priority",
    "Diverse and inclusive workplace",
    "Customer-centric approach"
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Join Our Team
            </h1>
            <p className="text-xl text-black-300 mb-8 leading-relaxed">
              Be part of a dynamic team that's passionate about creating innovative digital solutions 
              and making a real impact in the technology industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Why BrainyGyes?</h2>
            <p className="text-black-300">
              We believe that great work comes from great people in a great environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl text-center hover-lift"
              >
                <div className="text-accent mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 ">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Company Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8 ">Our Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-lg text-center"
                >
                  <p className="text-gray-300 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Open Positions</h2>
            <p className="text-black-300">
              Find your next opportunity and help us build the future of digital innovation.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-xl hover-lift"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold">{position.title}</h3>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                        {position.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                    </div>
                    
                    <p className="text-black-300 mb-4">{position.description}</p>
                    
                    <div>
                      <h4 className=" font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-gray-400 text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:ml-8">
                    <Link
              to="/contact?type=resume"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-glow"
            >
              Apply Now
                    </Link>
                      
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto glass-card p-12 rounded-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Don't See Your Role?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              We're always looking for talented individuals who share our passion for innovation. 
              Send us your resume and let's explore opportunities together.
            </p>
            <Link
              to="/contact?type=resume"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-glow"
            >
              Send Your Resume
            </Link>
          </motion.div>
        </div>
      </section>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Careers;
