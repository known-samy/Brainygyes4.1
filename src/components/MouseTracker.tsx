
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <motion.div 
      className="pointer-events-none fixed inset-0 z-30"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute h-[150px] w-[150px] rounded-full bg-primary opacity-15 blur-3xl"
        animate={{ 
          x: mousePosition.x - 75, 
          y: mousePosition.y - 75,
        }}
        transition={{ 
          type: "spring", 
          mass: 0.1, 
          stiffness: 50, 
          damping: 15 
        }}
      />
      <motion.div
        className="absolute h-[100px] w-[100px] rounded-full bg-accent opacity-20 blur-2xl"
        animate={{ 
          x: mousePosition.x - 50, 
          y: mousePosition.y - 50,
        }}
        transition={{ 
          type: "spring", 
          mass: 0.2, 
          stiffness: 100, 
          damping: 20,
          delay: 0.05
        }}
      />
    </motion.div>
  );
};

export default MouseTracker;
