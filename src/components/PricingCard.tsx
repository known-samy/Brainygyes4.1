
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  features: PricingFeature[];
  isPopular?: boolean;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  features, 
  isPopular = false,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={`glass-card rounded-xl p-6 hover-lift hover-glow relative overflow-hidden ${
        isPopular ? 'border-accent' : ''
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-accent text-xs font-semibold text-black px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-black-400 text-sm">/month</span>}
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className={`mt-0.5 ${feature.included ? 'text-accent' : 'text-gray-500'}`}>
              {feature.included ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              )}
            </span>
            <span className={feature.included ? 'text-black-200' : 'text-gray-500'}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      
      <Link
        to="/contact"
        className={`block w-full py-2 rounded-lg text-sm font-medium text-center transition-colors ${
          isPopular 
            ? 'bg-accent text-background hover:bg-accent/90' 
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  );
};

export default PricingCard;
