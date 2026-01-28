import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AIWebDevelopment = () => {
  const post = {
    title: 'The Future of AI in Web Development',
    date: 'May 12, 2025',
    author: 'Maya Rodriguez',
    category: 'Technology',
    imageUrl: 'https://i.pinimg.com/736x/e3/92/b4/e392b4c07d14270c0588a7c3423822c6.jpg',
    content: `Artificial Intelligence is rapidly transforming the landscape of web development, introducing new possibilities that were once confined to science fiction. From automated code generation to intelligent user interfaces, AI is reshaping how we build and interact with websites.

## Current AI Applications in Web Development

### AI-Powered Code Assistants
Tools like GitHub Copilot and ChatGPT are revolutionizing how developers write code. These AI assistants can suggest code completions, generate entire functions, and even help debug issues. While they're not replacing developers, they're significantly boosting productivity.

### Automated Testing
AI-driven testing tools can automatically generate test cases, identify potential bugs, and predict which parts of your codebase are most likely to fail. This leads to more robust applications with fewer human hours spent on quality assurance.

### Personalized User Experiences
Machine learning algorithms analyze user behavior to deliver personalized content, recommendations, and interfaces. E-commerce sites, streaming platforms, and news websites all leverage AI to keep users engaged.

## Emerging Trends

### No-Code and Low-Code Platforms
AI is making web development accessible to non-programmers through intuitive drag-and-drop interfaces that generate clean, production-ready code behind the scenes.

### Voice and Conversational Interfaces
As voice assistants become more sophisticated, websites are incorporating conversational AI to handle customer service, navigation, and transactions.

### Predictive Analytics
AI can predict user behavior, server load, and potential security threats, allowing websites to proactively optimize performance and security.

## Challenges and Considerations

### Ethical Concerns
AI systems can perpetuate biases present in their training data. Web developers must be mindful of fairness and transparency when implementing AI features.

### Job Market Evolution
While AI won't replace web developers, it will change the skills that are most valuable. Developers who can effectively collaborate with AI tools will have a significant advantage.

### Data Privacy
AI systems often require large amounts of data to function effectively. Balancing personalization with user privacy remains a critical challenge.

## The Road Ahead

The integration of AI in web development is still in its early stages. As these technologies mature, we can expect even more dramatic changes in how websites are built, maintained, and experienced by users.

Embracing AI doesn't mean abandoning human creativity—it means amplifying it. The most successful web projects of the future will combine the efficiency of AI with the insight and empathy that only humans can provide.`
  };

  return (
    <main className="bg-background min-h-screen">
      <SEOHead
        title={`${post.title} | BrainyGyes Technology Blog`}
        description="Explore how artificial intelligence is changing the landscape of web development and what to expect in the coming years."
        keywords="AI web development, artificial intelligence, machine learning, code assistants, automated testing, future of web development"
        canonicalUrl="https://www.brainygyes.com/blog/ai-web-development"
        author={post.author}
      />
      <Navbar />

      <article className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card overflow-hidden">
              <div className="h-[300px] md:h-[400px] w-full overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardHeader className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {post.category}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  {post.title}
                </h1>
              </CardHeader>

              <CardContent>
                <div className="prose prose-invert max-w-none">
                  {post.content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('## ')) {
                      return <h2 key={idx} className="text-xl font-bold mt-8 mb-4 text-foreground">{paragraph.replace('## ', '')}</h2>;
                    }
                    if (paragraph.startsWith('### ')) {
                      return <h3 key={idx} className="text-lg font-semibold mt-6 mb-3 text-foreground">{paragraph.replace('### ', '')}</h3>;
                    }
                    return <p key={idx} className="mb-4 text-muted-foreground leading-relaxed">{paragraph}</p>;
                  })}
                </div>
              </CardContent>

              <CardFooter className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between gap-4">
                <span className="text-sm text-muted-foreground">Share this article</span>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full w-8 h-8" aria-label="Share on Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-8 h-8" aria-label="Share on LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link to="/blog/react-vs-vue" className="glass-card p-4 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">React vs. Vue: Which One to Choose?</h3>
                <p className="text-sm text-muted-foreground">A comprehensive comparison of two popular JavaScript frameworks.</p>
              </Link>
              <Link to="/blog/mastering-typescript" className="glass-card p-4 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Mastering TypeScript</h3>
                <p className="text-sm text-muted-foreground">Why TypeScript is becoming essential for large-scale web applications.</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <FooterSection />
      <WhatsAppButton />
    </main>
  );
};

export default AIWebDevelopment;
