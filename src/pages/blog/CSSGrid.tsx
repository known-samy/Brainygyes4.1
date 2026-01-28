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

const CSSGrid = () => {
  const post = {
    title: 'The Power of CSS Grid',
    date: 'May 14, 2025',
    author: 'Chris Lee',
    category: 'CSS',
    imageUrl: 'https://i.pinimg.com/736x/c9/77/5e/c9775e28d1f8a3c6b0aa32eef2f7b018.jpg',
    content: `CSS Grid Layout represents one of the most powerful layout systems available in CSS. It's a two-dimensional system, meaning it can handle both columns and rows, unlike Flexbox which is largely a one-dimensional system.

## Why CSS Grid is Revolutionary

Before CSS Grid, creating complex layouts required hacks, floats, positioning, and external frameworks. CSS Grid provides a native, powerful solution for creating sophisticated layouts with clean, maintainable code.

## Core Concepts

### Grid Container and Grid Items
The grid container is the parent element that holds all grid items. By setting \`display: grid\` on a container, its direct children become grid items.

### Grid Lines
Grid lines are the dividing lines that make up the structure of the grid. They can be referenced by number or name when positioning items.

### Grid Tracks
Grid tracks are the spaces between adjacent grid lines—essentially your rows and columns.

### Grid Cells and Grid Areas
A grid cell is the intersection of a row and a column. Grid areas are rectangular spaces that can span multiple cells.

## Essential Grid Properties

### For the Container
- \`grid-template-columns\`: Defines column sizes
- \`grid-template-rows\`: Defines row sizes
- \`gap\`: Sets spacing between grid items
- \`grid-template-areas\`: Names areas of the grid
- \`justify-items\` / \`align-items\`: Aligns items within their cells

### For Grid Items
- \`grid-column\`: Specifies where an item starts and ends horizontally
- \`grid-row\`: Specifies where an item starts and ends vertically
- \`grid-area\`: Assigns an item to a named area
- \`justify-self\` / \`align-self\`: Aligns a single item

## Practical Examples

### Responsive Grid Without Media Queries
Using \`auto-fit\` and \`minmax()\`, you can create responsive grids that automatically adjust:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

### Holy Grail Layout
CSS Grid makes the classic "holy grail" layout trivial:

\`\`\`css
.container {
  display: grid;
  grid-template: 
    "header header header" auto
    "nav main aside" 1fr
    "footer footer footer" auto
    / 200px 1fr 200px;
}
\`\`\`

## When to Use Grid vs. Flexbox

- Use **Grid** for two-dimensional layouts (rows AND columns)
- Use **Flexbox** for one-dimensional layouts (rows OR columns)
- They work great together—use Grid for the overall page layout and Flexbox for component-level layouts

## Browser Support

CSS Grid is now supported in all modern browsers, including mobile browsers. For legacy browser support, consider using CSS Grid with feature queries.

## Conclusion

CSS Grid has transformed how we approach web layouts. Its power and flexibility make previously complex layouts simple and maintainable. Combined with Flexbox, you have all the tools needed to create any layout you can imagine.`
  };

  return (
    <main className="bg-background min-h-screen">
      <SEOHead
        title={`${post.title} | BrainyGyes Technology Blog`}
        description="Unlock the full potential of CSS Grid layout for creating complex, responsive web designs. Learn grid properties, practical examples, and when to use Grid vs Flexbox."
        keywords="CSS Grid, CSS layout, responsive design, grid template, web design, CSS Flexbox, frontend development"
        canonicalUrl="https://www.brainygyes.com/blog/css-grid"
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
                    if (paragraph.startsWith('```')) {
                      return (
                        <pre key={idx} className="bg-muted p-4 rounded-lg overflow-x-auto my-4">
                          <code className="text-sm text-foreground">{paragraph.replace(/```\w*\n?/g, '')}</code>
                        </pre>
                      );
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
              <Link to="/blog/accessible-web-apps" className="glass-card p-4 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Creating Accessible Web Applications</h3>
                <p className="text-sm text-muted-foreground">Discover best practices for building web applications that are accessible to all users.</p>
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

export default CSSGrid;
