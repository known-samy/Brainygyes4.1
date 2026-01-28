
import React from 'react';
import PricingCard from '@/components/PricingCard';

interface Feature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  title: string;
  price: string;
  features: Feature[];
  isPopular?: boolean;
}

const PricingSection: React.FC = () => {
  // Pricing data
  const pricingPlans: PricingPlan[] = [
    {
      title: "Basic",
      price: "₹5,999",
      features: [
        { name: "Web Development", included: true },
        { name: "Basic UI/UX Design", included: true },
        { name: "1 Month Support", included: true },
        { name: "Mobile App Development", included: false },
        { name: "SEO Optimization", included: false },
        { name: "Custom Integrations", included: false }
      ]
    },
    {
      title: "Premium",
      price: "₹19,999",
      features: [
        { name: "Web Development", included: true },
        { name: "Advanced UI/UX Design", included: true },
        { name: "3 Months Support", included: true },
        { name: "Mobile App Development", included: true },
        { name: "SEO Optimization", included: true },
        { name: "Custom Integrations", included: false }
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        { name: "Web Development", included: true },
        { name: "Advanced UI/UX Design", included: true },
        { name: "12 Months Support", included: true },
        { name: "Mobile App Development", included: true },
        { name: "SEO Optimization", included: true },
        { name: "Custom Integrations", included: true }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium mb-2 block">PRICING</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Choose Your Plan
          </h2>
          <p className="text-black-300">
            Flexible pricing options to meet your specific needs and requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
