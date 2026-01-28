import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id?: string;
  title: string;
  category: string;
  imageUrl: string;
  index?: number;
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: (index: number) => ({
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: index * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const ProjectCard: React.FC<ProjectCardProps> = ({ id = '1', title, category, imageUrl, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleViewCaseStudy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/case-studies/${id}`);
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="relative overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="border-none overflow-hidden h-[300px] group cursor-pointer">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        />
        
        <CardContent className="h-full flex flex-col justify-end p-6 relative z-10">
          <div className="transform transition-all duration-500">
            <motion.p 
              className="text-sm font-medium text-accent mb-1 opacity-90"
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {category}
            </motion.p>
            <motion.h3 
              className="text-xl font-bold text-white mb-3"
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {title}
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-300 text-sm mb-4">
                We delivered an exceptional solution for this client, helping them achieve their business goals.
              </p>
              
              <button 
                className="flex items-center space-x-2 text-accent hover:text-white transition-colors group"
                onClick={handleViewCaseStudy}
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
