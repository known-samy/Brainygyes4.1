import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <span className="text-accent font-medium mb-2 block text-sm sm:text-base">ABOUT US</span>
            <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
              Transforming Ideas Into Digital Reality
            </h2>
            <p className="text-black-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              At BrainyGyes Technology, we're passionate about creating digital solutions that make a difference. 
              Our team of experts combines creativity, technical expertise, and strategic thinking to deliver 
              exceptional results for our clients.
            </p>
            <p className="text-black-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              Founded in 2018, we've grown into a dynamic team of developers, designers, and creative technologists 
              dedicated to pushing the boundaries of what's possible in the digital realm.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <article className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">75+</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Completed Projects</p>
              </article>
              <article className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">54+</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Happy Clients</p>
              </article>
              <article className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">12+</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Team Members</p>
              </article>
              <article className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">5+</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Years Experience</p>
              </article>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="BrainyGyes Technology team collaborating on digital projects"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 "></div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 right-2 sm:-right-6 glass p-4 sm:p-6 rounded-xl max-w-[280px] sm:max-w-xs">
              <p className="text-xs sm:text-sm italic text-black-300">
                "Our mission is to transform ideas into exceptional digital experiences that drive business growth."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
