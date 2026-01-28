
import React from 'react';
import { motion } from 'framer-motion';

const BlogHero: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Blog</h1>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Insights, updates, and stories from our team of experts.
      </p>
    </motion.div>
  );
};

export default BlogHero;
