
import React from 'react';
import Navbar from '@/components/Navbar';
import ThreeDBackground from '@/components/ThreeDBackground';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useParams } from 'react-router-dom';
import BlogPostComponent from '@/components/BlogPost';
import { blogPostsContent } from '@/data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = id ? blogPostsContent[id] : null;
  
  if (!post) {
    return (
      <div className="bg-background min-h-screen">
        <Navbar />
        <ThreeDBackground />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-gray-300 mb-6">The post you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
        <WhatsAppButton />
      </div>
    );
  }
  
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <ThreeDBackground />
      <div className="pt-24">
        <BlogPostComponent
          id={post.id}
          title={post.title}
          date={post.date}
          content={post.content}
          imageUrl={post.imageUrl}
          author={post.author}
          category={post.category}
        />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
