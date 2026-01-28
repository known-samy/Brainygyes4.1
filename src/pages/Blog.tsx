import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import ThreeDBackground from '@/components/ThreeDBackground';
import BlogHero from '@/components/blog/BlogHero';
import SearchAndFilter from '@/components/blog/SearchAndFilter';
import BlogCard from '@/components/blog/BlogCard';
import NoPostsFound from '@/components/blog/NoPostsFound';
import NewsletterSection from '@/components/blog/NewsletterSection';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';

// Blog post data with slug-based links
const blogPosts = [
  {
    id: 'website-performance',
    title: 'How to Boost Your Website Performance',
    date: 'May 11, 2025',
    excerpt: 'Learn the key strategies to optimize your website for maximum speed and efficiency, improving user experience.',
    imageUrl: 'https://i.pinimg.com/736x/8d/bd/47/8dbd47858808097649c39085b0c6857b.jpg',
    category: 'Performance',
    link: '/blog/website-performance'
  },
  {
    id: 'ai-web-development',
    title: 'The Future of AI in Web Development',
    date: 'May 12, 2025',
    excerpt: 'Explore how artificial intelligence is changing the landscape of web development and what to expect in the coming years.',
    imageUrl: 'https://i.pinimg.com/736x/e3/92/b4/e392b4c07d14270c0588a7c3423822c6.jpg',
    category: 'Technology',
    link: '/blog/ai-web-development'
  },
  {
    id: 'accessible-web-apps',
    title: 'Creating Accessible Web Applications',
    date: 'May 13, 2025',
    excerpt: 'Discover best practices for building web applications that are accessible to users with disabilities.',
    imageUrl: 'https://i.pinimg.com/1200x/ea/84/1f/ea841fbe20e1011970200598323fea01.jpg',
    category: 'Accessibility',
    link: '/blog/accessible-web-apps'
  },
  {
    id: 'css-grid',
    title: 'The Power of CSS Grid',
    date: 'May 14, 2025',
    excerpt: 'Unlock the full potential of CSS Grid layout for creating complex, responsive web designs.',
    imageUrl: 'https://i.pinimg.com/736x/c9/77/5e/c9775e28d1f8a3c6b0aa32eef2f7b018.jpg',
    category: 'CSS',
    link: '/blog/css-grid'
  },
  {
    id: 'react-vs-vue',
    title: 'React vs. Vue: Which One to Choose?',
    date: 'May 15, 2025',
    excerpt: 'A comprehensive comparison of two popular JavaScript frameworks to help you make the right choice for your project.',
    imageUrl: 'https://i.pinimg.com/736x/30/63/ec/3063ec1e99791c2de1e7dd417b541282.jpg',
    category: 'Frameworks',
    link: '/blog/react-vs-vue'
  },
  {
    id: 'mastering-typescript',
    title: 'Mastering TypeScript for Modern Web Development',
    date: 'May 16, 2025',
    excerpt: 'Why TypeScript is becoming essential for large-scale web applications and how to leverage its features.',
    imageUrl: 'https://i.pinimg.com/736x/52/5a/c5/525ac57fc91dbe431dd36a2c2a5cc930.jpg',
    category: 'TypeScript',
    link: '/blog/mastering-typescript'
  },
];

const Blog = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Extract unique categories for the filter dropdown
  const categories = ["all", ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on selected category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  const handleReadMore = (id: string) => {
    const post = blogPosts.find(p => p.id === id);
    if (post?.link) {
      navigate(post.link);
    } else {
      navigate(`/blog/${id}`);
    }
  };
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscription Successful",
      description: "Thank you for subscribing to our newsletter!",
      duration: 3000,
    });
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <ThreeDBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 z-10">
          <BlogHero />
          
          {/* Search and Filter */}
          <SearchAndFilter
            categories={categories}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            onCategoryChange={handleCategoryChange}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog posts */}
            {filteredPosts.map((post, index) => (
              <BlogCard 
                key={post.id}
                post={post}
                index={index}
                onReadMore={handleReadMore}
              />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <NoPostsFound 
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              onClearSearch={handleClearSearch}
              onViewAllCategories={() => setSelectedCategory("all")}
            />
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSection onSubscribe={handleSubscribe} />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
