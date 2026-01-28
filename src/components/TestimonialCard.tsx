import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  imageUrl: string;
  index?: number;
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 40
  },
  visible: (index: number) => ({
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  content, 
  author, 
  position, 
  imageUrl, 
  index = 0 
}) => {
  return (
    <motion.div 
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={cardVariants}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.1, ease: "easeOut" }
      }}
      className="glass-card p-6 rounded-xl relative cursor-pointer"
    >
      <motion.div 
        className="absolute -top-4 -left-4 text-5xl text-accent opacity-50"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        viewport={{ once: true }}
      >
        "
      </motion.div>
      <p className="text-black-300 italic mb-6">{content}</p>
      <div className="flex items-center gap-4">
        <motion.img 
          src={imageUrl} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-xs text-gray-400">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
