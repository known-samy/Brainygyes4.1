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

const AccessibleWebApps = () => {
  const post = {
    title: 'Creating Accessible Web Applications',
    date: 'May 13, 2025',
    author: 'Jordan Smith',
    category: 'Accessibility',
    imageUrl: 'https://i.pinimg.com/1200x/ea/84/1f/ea841fbe20e1011970200598323fea01.jpg',
    content: `Web accessibility is a critical aspect of web development that ensures all users, regardless of their abilities or disabilities, can access and interact with your website. Building accessible applications isn't just about compliance—it's about creating inclusive digital experiences.

## Why Accessibility Matters

Over 1 billion people worldwide live with some form of disability. When we build inaccessible websites, we exclude a significant portion of potential users. Beyond the moral imperative, there are practical benefits:

- **Legal Compliance**: Many countries have laws requiring digital accessibility
- **SEO Benefits**: Accessible websites often rank better in search engines
- **Broader Reach**: More users can access your content and services
- **Better UX for Everyone**: Accessibility improvements benefit all users

## Key Principles of Web Accessibility

### 1. Perceivable
Information must be presentable in ways all users can perceive.

- Provide text alternatives for images
- Offer captions and transcripts for multimedia
- Ensure sufficient color contrast
- Don't rely solely on color to convey information

### 2. Operable
Users must be able to operate the interface.

- Make all functionality keyboard accessible
- Provide sufficient time to read content
- Avoid content that causes seizures
- Help users navigate and find content

### 3. Understandable
Information and interface operation must be understandable.

- Make text readable and understandable
- Make content appear and operate predictably
- Help users avoid and correct mistakes

### 4. Robust
Content must be robust enough for various technologies.

- Maximize compatibility with current and future tools
- Use valid HTML and ARIA properly
- Test with different assistive technologies

## Practical Implementation Tips

### Semantic HTML
Use HTML elements for their intended purpose. Use headings for structure, buttons for actions, and links for navigation.

### ARIA Labels
When HTML isn't enough, use ARIA (Accessible Rich Internet Applications) attributes to provide additional context to assistive technologies.

### Focus Management
Ensure focus indicators are visible and focus order is logical. Manage focus appropriately in dynamic content.

### Testing
Regularly test with screen readers, keyboard-only navigation, and automated accessibility tools like axe or Lighthouse.

## Conclusion

Accessibility should be built into your development process from the start, not added as an afterthought. By following WCAG guidelines and testing with real users, you can create web applications that truly work for everyone.`
  };

  return (
    <main className="bg-background min-h-screen">
      <SEOHead
        title={`${post.title} | BrainyGyes Technology Blog`}
        description="Discover best practices for building web applications that are accessible to users with disabilities. Learn about WCAG guidelines and practical implementation tips."
        keywords="web accessibility, WCAG, accessible web apps, screen readers, ARIA, inclusive design, a11y"
        canonicalUrl="https://www.brainygyes.com/blog/accessible-web-apps"
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
                    if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                      return (
                        <ul key={idx} className="list-disc list-inside mb-4 text-muted-foreground space-y-2">
                          {items.map((item, itemIdx) => (
                            <li key={itemIdx}>{item.replace('- ', '')}</li>
                          ))}
                        </ul>
                      );
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
              <Link to="/blog/website-performance" className="glass-card p-4 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">How to Boost Your Website Performance</h3>
                <p className="text-sm text-muted-foreground">Learn key strategies to optimize your website for maximum speed and efficiency.</p>
              </Link>
              <Link to="/blog/css-grid" className="glass-card p-4 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">The Power of CSS Grid</h3>
                <p className="text-sm text-muted-foreground">Unlock the full potential of CSS Grid layout for creating complex, responsive web designs.</p>
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

export default AccessibleWebApps;
