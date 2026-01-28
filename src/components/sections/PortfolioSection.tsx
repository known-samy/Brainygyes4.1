import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
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

const PortfolioSection: React.FC = () => {
  const [viewAll, setViewAll] = useState(false);
  
  const projects: Project[] = [
    {
  id: '1',
  title: 'E-commerce Platform',
  category: 'Web Development',
  imageUrl: 'https://i.pinimg.com/736x/bb/66/24/bb6624ec5adbb59c1381c4265c606071.jpg'
},
{
  id: '2',
  title: 'Healthcare App',
  category: 'Mobile Apps',
  imageUrl: 'https://i.pinimg.com/736x/db/53/3f/db533f09e624cc088b08cce9bb555db5.jpg'
},
{
  id: '3',
  title: 'Interactive Dashboard',
  category: 'UI/UX Design',
  imageUrl: 'https://i.pinimg.com/736x/de/d1/c5/ded1c5f477e887676ae996af2d901b32.jpg'
},
{
  id: '4',
  title: 'AR Product Visualizer',
  category: 'Creative Tech',
  imageUrl: 'https://i.pinimg.com/1200x/e2/34/21/e234217b4478cab352bb5cf1b8a44ced.jpg'
},
{
  id: '5',
  title: 'AI-Powered Analytics',
  category: 'Web Development',
  imageUrl: 'https://i.pinimg.com/1200x/10/66/61/106661f84760f2fe684621f0dfe8bd1d.jpg'
},
{
  id: '6',
  title: 'Blockchain Wallet',
  category: 'FinTech',
  imageUrl: 'https://i.pinimg.com/736x/60/b6/43/60b6432be4130f4e2ad23d92eda11908.jpg'
},
{
  id: '7',
  title: 'Learning Management System',
  category: 'Web Development',
  imageUrl: 'https://i.pinimg.com/736x/c4/cc/2b/c4cc2b8c8c584be07d548c5d3f1eb48b.jpg'
},
{
  id: '8',
  title: 'Social Media Platform',
  category: 'Web Development',
  imageUrl: 'https://i.pinimg.com/1200x/09/32/d2/0932d2c5f748b0df2e2e8fe4d5bffd06.jpg'
},
{
  id: '9',
  title: 'Smart Home IoT App',
  category: 'IoT',
  imageUrl: 'https://i.pinimg.com/736x/7e/f1/42/7ef142344b333b2f0b8c19c2f51c0101.jpg'
},
{
  id: '10',
  title: 'Trading Platform',
  category: 'FinTech',
  imageUrl: 'https://i.pinimg.com/736x/72/c1/83/72c183951ba05b4104a115e609525d33.jpg'
},
{
  id: '11',
  title: 'VR Training Simulator',
  category: 'Creative Tech',
  imageUrl: 'https://i.pinimg.com/736x/d2/56/7e/d2567e7a51b4024e61f1e19d1ceca408.jpg'
},
{
  id: '12',
  title: 'Food Delivery App',
  category: 'Mobile Apps',
  imageUrl: 'https://i.pinimg.com/1200x/45/8e/3e/458e3ebc6481fe156efc433415a4c972.jpg'
}


  ];

  const displayedProjects = viewAll ? projects : projects.slice(0, 8);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-gradient-to-b from-background to-background/95 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.span 
            variants={headerVariants}
            className="text-accent font-medium mb-2 block"
          >
            OUR WORK
          </motion.span>
          <motion.h2 
            variants={headerVariants}
            className="text-3xl md:text-4xl font-bold mb-6 text-gradient"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-black-300"
          >
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={containerVariants}
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              index={index}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline"
            size="lg"
            className="group border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            onClick={() => setViewAll(!viewAll)}
          >
            <span>View {viewAll ? 'Less' : 'All'} Projects</span> 
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
