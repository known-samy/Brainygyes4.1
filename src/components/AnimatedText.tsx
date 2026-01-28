
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeIn';
  delay?: number;
  once?: boolean;
  amount?: number;
}

const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  animation = 'fadeInUp',
  delay = 0.1,
  once = true,
  amount = 0.3
}) => {
  const selectedAnimation = animations[animation];

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.05, delayChildren: delay }
        }
      }}
    >
      {text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1.5"
          variants={selectedAnimation}
          transition={{ duration: 0.5 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
