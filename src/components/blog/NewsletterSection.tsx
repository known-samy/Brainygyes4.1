
import React from 'react';
import { Button } from '@/components/ui/button';

interface NewsletterSectionProps {
  onSubscribe: (e: React.FormEvent) => void;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubscribe }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="glass-card p-8 md:p-12 rounded-xl max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-6">
            Stay updated with the latest insights and news in the tech world.
          </p>
          <form className="flex flex-col md:flex-row gap-4" onSubmit={onSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <Button
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-medium hover-lift hover:shadow-lg"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
