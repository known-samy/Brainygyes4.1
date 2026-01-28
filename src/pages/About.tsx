import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Users, Award, Target, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To transform ideas into exceptional digital experiences that drive business growth and innovation."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Team",
      description: "A diverse group of passionate developers, designers, and strategists working together to deliver excellence."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Our Excellence",
      description: "Committed to delivering high-quality solutions that exceed expectations and drive meaningful results."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Our Innovation",
      description: "Leveraging cutting-edge technologies and creative approaches to solve complex challenges."
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "80+", label: "Happy Clients" },
    { number: "25+", label: "Team Members" },
    { number: "8+", label: "Years Experience" }
  ];

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-accent font-medium mb-4 block">YOUR TRUSTED DIGITAL SOLUTIONS PROVIDER</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              About BrainyGyes Technology
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a passionate team of <strong>business development</strong> experts and <strong>digital solutions providers</strong> 
              dedicated to transforming ideas into exceptional digital experiences that drive sustainable business growth.
            </p>
          </motion.header>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <header>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Our Story
              </h2>
            </header>

            <p className="text-muted-foreground mb-6">
              Founded in 2016, BrainyGyes Technology began as a dedicated team of passionate developers 
              and <strong>business development</strong> strategists who believed in the power of technology to transform businesses. 
              What started as a vision to bridge the gap between innovative ideas and digital reality has grown into 
              a leading <strong>digital solutions provider</strong>.
            </p>

            <p className="text-muted-foreground mb-6">
              Over the years, we've partnered with businesses of all sizes, from startups to 
              enterprises, helping them navigate the digital landscape through our comprehensive 
              <strong> business development services</strong> and cutting-edge <strong>digital solutions</strong>.
            </p>

            <p className="text-muted-foreground">
              Today, as a trusted <strong>digital solutions provider</strong>, we continue to push boundaries, embrace emerging technologies, 
              and deliver exceptional results that accelerate business growth and digital transformation for our clients worldwide.
            </p>
          </motion.article>

          <motion.figure
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Our team at work"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.figure>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Our Values
            </h2>
            <p className="text-black-300">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </motion.header>

          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl text-center hover-lift"
              >
                <div className="text-accent mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-black-400 text-sm">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </section>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <dt className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </dt>
                <dd className="text-black-400 text-sm">
                  {stat.label}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </main>
  );
};

export default About;
