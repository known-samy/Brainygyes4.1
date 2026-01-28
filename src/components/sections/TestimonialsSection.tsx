import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';

interface Testimonial {
  content: string;
  author: string;
  position: string;
  imageUrl: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: "BrainyGyes delivered an exceptional product that exceeded our expectations. Their team was professional, communicative, and technically skilled.",
      author: "Akash Kumar",
      position: "Founder of Knight Kitchen",
      imageUrl: "/assets/Knight-Kitchen.png"
    },
    {
      content: "BrainyGyes transformed our construction business online. The website they built is clean, professional, and brings in real leads. Their team is reliable, tech-savvy, and truly understands business needs. Highly recommended!",
      author: "Manoj Dwivedi",
      position: "Director of Maa Bhawani Traders",
      imageUrl: "/assets/Maa-bhawani.png"
    },
    {
      content: "Brainygyes delivered a stunning, user-friendly website with the best UI. The experience was seamless and exceeded our expectations. Highly recommended!",
      author: "Ravindra Verma",
      position: "Founder of RKV Groups",
      imageUrl: "/assets/rkv.png"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 overflow-hidden">
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
            TESTIMONIALS
          </motion.span>
          <motion.h2 
            variants={headerVariants}
            className="text-3xl md:text-4xl font-bold mb-6 text-gradient"
          >
            What Clients Say
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-black-300"
          >
            Don't take our word for it. Hear what our clients have to say about working with us.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
              imageUrl={testimonial.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
