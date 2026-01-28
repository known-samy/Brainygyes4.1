import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedText from '@/components/AnimatedText';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <header
  ref={containerRef}
  id="home"
  role="banner"
  aria-label="Brainygyes hero section"
  className="
    relative
    min-h-[100svh]
    sm:min-h-screen
    flex
    items-center
    justify-center
    overflow-hidden
    px-safe
  "
>
  {/* Decorative background */}
  <motion.div
    aria-hidden="true"
    style={{ y: smoothY, scale: smoothScale }}
    className="absolute inset-0"
  />

  <motion.main
    style={{ opacity: smoothOpacity }}
    className="
      container
      mx-auto
      px-4
      sm:px-6
      md:px-12
      z-10
      text-center
    "
  >
    <article className="mx-auto max-w-4xl lg:max-w-5xl">
      {/* Brand */}
      <img
        src="assets/brainygyes3.png"
        alt="Brainygyes digital product studio logo"
        width="112"
        height="112"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="
          mx-auto
          mb-4
          w-16
          h-16
          sm:w-20
          sm:h-20
          md:w-28
          md:h-28
          lg:w-36
          lg:h-36
          object-contain
        "
      />

      <p className="inline-block mb-5 sm:mb-6 px-3 py-1 text-[11px] sm:text-xs rounded-full glass text-accent">
        Your Imagination, Our Knowledge
      </p>

      {/* Primary heading */}
      <h1
        className="
          font-bold
          tracking-tight
          mb-4
          sm:mb-6
          text-[clamp(1.6rem,5vw,4.5rem)]
          leading-tight
        "
      >
        Business <span className="text-accent">Development</span> &{" "}
        <span className="text-accent">Digital Solutions</span> Provider
      </h1>

      {/* High-density descriptive copy */}
      <p
        className="
          text-muted-foreground
          leading-relaxed
          mb-5
          sm:mb-6
          mx-auto
          max-w-[65ch]
          text-[clamp(0.9rem,2.5vw,1.25rem)]
        "
      >
        BrainyGyes Technology is your trusted <strong>Business Development</strong> partner and{" "}
        <strong>Digital Solutions Provider</strong>. We specialize in
        <strong> web development</strong>, <strong>mobile app development</strong>,{" "}
        <strong>UI/UX design</strong>, and comprehensive{" "}
        <strong>digital transformation solutions</strong> to accelerate your business growth worldwide.
      </p>

      {/* CTAs */}
      <nav
        aria-label="Primary actions"
        className="
          flex
          flex-col
          sm:flex-row
          gap-3
          sm:gap-4
          justify-center
          items-stretch
          sm:items-center
        "
      >
        <Link
          to="/contact"
          aria-label="Get free business development consultation from BrainyGyes"
          className="
            px-6
            sm:px-8
            py-3
            rounded-lg
            bg-gradient-to-r
            from-primary
            to-accent
            text-background
            font-medium
            text-sm
            sm:text-base
            min-h-[44px]
            flex
            items-center
            justify-center
            hover:opacity-90
            transition-opacity
          "
        >
          Start Your Digital Journey
        </Link>

        <Link
          to="/services"
          aria-label="Explore our digital solutions and business development services"
          className="
            px-6
            sm:px-8
            py-3
            rounded-lg
            bg-secondary
            text-sm
            sm:text-base
            min-h-[44px]
            flex
            items-center
            justify-center
            hover:bg-secondary/80
            transition-colors
          "
        >
          Our Digital Solutions
        </Link>
      </nav>

      {/* Trust signals */}
      <div
        className="
          mt-7
          sm:mt-10
          flex
          flex-wrap
          justify-center
          gap-x-4
          gap-y-2
          text-[11px]
          sm:text-sm
          text-muted-foreground
        "
      >
        <span>✓ 150+ Business Solutions Delivered</span>
        <span>✓ 8+ Years in Digital Solutions</span>
        <span>✓ Trusted by Global Enterprises</span>
      </div>
    </article>
  </motion.main>
</header>

  );
};

export default HeroSection;
