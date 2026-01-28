import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: (index: number) => ({
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index = 0 }) => {
  return (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="glass-card p-6 rounded-xl hover-glow group cursor-pointer"
      itemScope
      itemType="https://schema.org/Service"
    >
      <motion.div 
        className="mb-4 text-accent text-4xl"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300" itemProp="name">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm" itemProp="description">
        {description}
      </p>
      <meta itemProp="provider" content="BrainyGyes Technology - Digital Solutions Provider" />
    </motion.article>
  );
};

export default ServiceCard;
