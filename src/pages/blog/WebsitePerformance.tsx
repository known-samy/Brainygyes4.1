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

const WebsitePerformance = () => {
  const post = {
    title: 'How to Boost Your Website Performance',
    date: 'May 11, 2025',
    author: 'Alex Johnson',
    category: 'Performance',
    imageUrl: 'https://i.pinimg.com/736x/8d/bd/47/8dbd47858808097649c39085b0c6857b.jpg',
    content: `Website performance is a critical aspect of user experience that can make or break your online presence. In today's fast-paced digital world, users expect websites to load quickly and respond instantly to their interactions.

Studies show that a one-second delay in page load time can result in a 7% reduction in conversions. This means that optimizing your website's performance isn't just about user experience—it's directly tied to your bottom line.

## Key Strategies for Performance Optimization

### 1. Optimize Images
Images often account for the largest portion of a webpage's size. Use modern formats like WebP, implement lazy loading, and serve appropriately sized images for different devices.

### 2. Minimize HTTP Requests
Reduce the number of elements on your page, combine CSS and JavaScript files, and use CSS sprites for icons. Each HTTP request adds latency to your page load time.

### 3. Enable Browser Caching
Configure your server to set appropriate cache headers. This allows returning visitors to load your site faster by storing static assets locally.

### 4. Use a Content Delivery Network (CDN)
CDNs distribute your content across multiple geographic locations, reducing the physical distance between your server and your users.

### 5. Optimize Your Code
Minify CSS, JavaScript, and HTML. Remove unused code and consider using tree shaking to eliminate dead code from your bundles.

### 6. Implement Critical CSS
Inline the CSS required for above-the-fold content directly in the HTML head. This allows the browser to render the visible portion of the page faster.

## Measuring Performance

Use tools like Google PageSpeed Insights, Lighthouse, and WebPageTest to measure and monitor your website's performance. These tools provide actionable recommendations for improvement.

Remember, performance optimization is an ongoing process. Regularly audit your website and implement improvements to ensure the best possible user experience.`
  };

  return (
    <main className="bg-background min-h-screen">
      <SEOHead
        title={`${post.title} | BrainyGyes Technology Blog`}
        description="Learn key strategies to optimize your website for maximum speed and efficiency, improving user experience and conversions."
        keywords="website performance, page speed optimization, web optimization, loading time, Core Web Vitals, SEO performance"
        canonicalUrl="https://www.brainygyes.com/blog/website-performance"
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
              <Link to="/blog/css-grid" className="glass-card p-4 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">The Power of CSS Grid</h3>
                <p className="text-sm text-muted-foreground">Unlock the full potential of CSS Grid layout for creating complex, responsive web designs.</p>
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

export default WebsitePerformance;
