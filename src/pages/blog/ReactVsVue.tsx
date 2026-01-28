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

const ReactVsVue = () => {
  const post = {
    title: 'React vs. Vue: Which One to Choose?',
    date: 'May 15, 2025',
    author: 'Sarah Parker',
    category: 'Frameworks',
    imageUrl: 'https://i.pinimg.com/736x/30/63/ec/3063ec1e99791c2de1e7dd417b541282.jpg',
    content: `Choosing the right JavaScript framework for your project is a critical decision that can impact development speed, maintainability, and team productivity. React and Vue are two of the most popular choices, each with its own strengths and philosophies.

## Overview

### React
Created by Facebook in 2013, React is a JavaScript library for building user interfaces. It focuses on the view layer and gives developers the freedom to choose their own tools for routing, state management, and other concerns.

### Vue
Vue was created by Evan You in 2014 as a progressive framework that can be adopted incrementally. It provides an official ecosystem of tools and is known for its gentle learning curve.

## Key Differences

### Learning Curve
**Vue** has a gentler learning curve, especially for developers coming from HTML/CSS backgrounds. Its template syntax is closer to traditional HTML.

**React** requires understanding JSX and thinking in terms of components from the start. It may take longer to become productive but offers more flexibility.

### Architecture
**Vue** provides more out-of-the-box structure with official solutions for routing (Vue Router) and state management (Pinia/Vuex).

**React** is unopinionated and lets you choose your own architecture. This provides flexibility but requires more decision-making.

### Performance
Both frameworks offer excellent performance. Vue 3's Composition API and React's hooks provide similar patterns for optimizing reactivity and component logic.

### Community and Ecosystem
**React** has a larger community and more third-party packages. It's backed by Facebook and used by many large companies.

**Vue** has a passionate community and excellent documentation. It's popular in Asia and growing rapidly worldwide.

## When to Choose React

- Large, complex applications with custom requirements
- Teams with experienced JavaScript developers
- Projects requiring extensive third-party integrations
- When hiring is a priority (larger talent pool)
- Cross-platform development with React Native

## When to Choose Vue

- Projects that need quick setup and development
- Teams with developers from diverse backgrounds
- When clear conventions and structure are preferred
- Smaller to medium-sized applications
- Progressive enhancement of existing applications

## Code Comparison

### React Component
\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

### Vue Component
\`\`\`vue
<template>
  <button @click="count++">Count: {{ count }}</button>
</template>
<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>
\`\`\`

## Conclusion

Both React and Vue are excellent choices for modern web development. The best choice depends on your team's experience, project requirements, and personal preferences. Consider building a small prototype with each to see which feels more natural for your workflow.

Remember: the best framework is the one that helps your team build and maintain great applications efficiently.`
  };

  return (
    <main className="bg-background min-h-screen">
      <SEOHead
        title={`${post.title} | BrainyGyes Technology Blog`}
        description="A comprehensive comparison of React and Vue - two popular JavaScript frameworks. Learn about their differences, strengths, and when to choose each one."
        keywords="React vs Vue, JavaScript frameworks, React, Vue.js, frontend development, web frameworks comparison"
        canonicalUrl="https://www.brainygyes.com/blog/react-vs-vue"
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
              <Link to="/blog/mastering-typescript" className="glass-card p-4 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Mastering TypeScript</h3>
                <p className="text-sm text-muted-foreground">Why TypeScript is becoming essential for large-scale web applications.</p>
              </Link>
              <Link to="/blog/ai-web-development" className="glass-card p-4 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">The Future of AI in Web Development</h3>
                <p className="text-sm text-muted-foreground">Explore how artificial intelligence is changing the landscape of web development.</p>
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

export default ReactVsVue;
