
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    imageUrl: string;
    category: string;
  };
  index: number;
  onReadMore: (id: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index, onReadMore }) => {
  return (
    <motion.article 
      key={post.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-4 rounded-lg overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-accent">{post.category}</span>
        <span className="text-sm text-gray-400">{post.date}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">
        {post.title}
      </h3>
      <p className="text-gray-300 text-sm mb-4">
        {post.excerpt}
      </p>
      <Button 
        variant="link" 
        className="text-accent p-0 h-auto hover:text-accent/80" 
        onClick={() => onReadMore(post.id)}
      >
        Read More →
      </Button>
    </motion.article>
  );
};

export default BlogCard;
