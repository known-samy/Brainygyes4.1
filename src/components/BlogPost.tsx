
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export interface BlogPostProps {
  id: string;
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  author?: string;
  category?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  id,
  title,
  date,
  content,
  imageUrl,
  author = "BrainyGyes Team",
  category = "Technology"
}) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/blog');
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <Button 
        variant="outline" 
        onClick={handleBack}
        className="mb-8 flex items-center gap-2 hover:text-black hover:bg-white"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Button>
      
      <Card className="glass-card overflow-hidden">
        <div className="h-[300px] md:h-[400px] w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-accent">{category}</span>
            <span className="text-sm text-gray-400">{date}</span>
          </div>
          <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
          <CardDescription className="text-gray-400">By {author}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="prose prose-invert max-w-none">
            {content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4 text-gray-300">{paragraph}</p>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="border-t border-white/10 mt-8 pt-6 flex justify-between">
          <span className="text-sm text-gray-400">Share this article</span>
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
              <span className="sr-only">Share on Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
              <span className="sr-only">Share on LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogPost;
