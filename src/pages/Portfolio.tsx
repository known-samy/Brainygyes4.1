import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Creative Tech'];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.",
      image: "https://i.pinimg.com/1200x/76/30/85/7630856095ac7979117823645648bcb5.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#"    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "Mobile Apps",
      description: "A comprehensive healthcare app connecting patients with doctors, featuring appointment booking and telemedicine capabilities.",
      image: "https://i.pinimg.com/736x/db/53/3f/db533f09e624cc088b08cce9bb555db5.jpg",
      technologies: ["React Native", "Firebase", "WebRTC", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "UI/UX Design",
      description: "An intuitive financial dashboard design with complex data visualization and user-friendly interface for investment tracking.",
      image: "https://i.pinimg.com/1200x/bd/e7/29/bde729a97a7cb7e532ad4124d40a0bef.jpg",
      technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "AR Product Visualizer",
      category: "Creative Tech",
      description: "An augmented reality application that allows customers to visualize furniture in their homes before purchasing.",
      image: "https://i.pinimg.com/1200x/e2/34/21/e234217b4478cab352bb5cf1b8a44ced.jpg",
      technologies: ["Unity", "ARCore", "ARKit", "C#"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Social Media Analytics",
      category: "Web Development",
      description: "A comprehensive social media analytics platform with real-time data processing and advanced reporting features.",
      image: "https://i.pinimg.com/1200x/09/32/d2/0932d2c5f748b0df2e2e8fe4d5bffd06.jpg",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "Mobile Apps",
      description: "A comprehensive fitness app with workout tracking, nutrition monitoring, and social features for motivation.",
      image: "https://i.pinimg.com/1200x/4b/67/0c/4b670c98fe6fd403d33bba89c923e601.jpg",
      technologies: ["Flutter", "Firebase", "ML Kit", "Google Fit"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              Our Portfolio
            </h1>
            <p className="text-xl text-black-300 mb-8 leading-relaxed">
              Explore our showcase of successful projects that demonstrate our expertise 
              across various technologies and industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-accent text-background font-semibold'
                    : 'glass-card text-gray-300 hover:text-black hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden hover-lift hover-glow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-accent font-medium">{project.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/5 text-xs text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
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
              Have a Project in Mind?
            </h2>
            <p className="text-black-300 mb-8 text-lg">
              Let's collaborate to bring your vision to life with innovative solutions and exceptional execution.
            </p>
            <Link
              to="/contact" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-medium hover-lift hover:shadow-lg inline-block transition-all duration-300"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;
