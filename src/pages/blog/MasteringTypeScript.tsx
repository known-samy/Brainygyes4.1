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

const MasteringTypeScript = () => {
  const post = {
    title: 'Mastering TypeScript for Modern Web Development',
    date: 'May 16, 2025',
    author: 'David Chen',
    category: 'TypeScript',
    imageUrl: 'https://i.pinimg.com/736x/52/5a/c5/525ac57fc91dbe431dd36a2c2a5cc930.jpg',
    content: `TypeScript has rapidly gained adoption in the web development community, and for good reason. As a typed superset of JavaScript, it adds optional static typing and class-based object-oriented programming to the language, making it easier to build and maintain large-scale applications.

## Why TypeScript?

### Catch Errors Early
TypeScript's type system catches errors at compile time rather than runtime. This means fewer bugs make it to production, and debugging is often simpler because many issues are caught before the code even runs.

### Better Developer Experience
With TypeScript, your IDE can provide intelligent code completion, refactoring tools, and inline documentation. This leads to faster development and fewer mistakes.

### Self-Documenting Code
Types serve as inline documentation. When you see a function signature, you immediately understand what it expects and what it returns without needing to read external documentation.

### Easier Refactoring
When you refactor code, TypeScript helps ensure you update all the necessary places. Change a type, and the compiler will show you everywhere that's affected.

## Core TypeScript Concepts

### Basic Types
TypeScript supports all JavaScript primitives plus additional types like \`any\`, \`unknown\`, \`never\`, and \`void\`.

\`\`\`typescript
let name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;
let items: string[] = ["a", "b", "c"];
\`\`\`

### Interfaces and Types
Define the shape of objects and create reusable type definitions.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email?: string; // optional property
}

type Status = "pending" | "approved" | "rejected";
\`\`\`

### Generics
Create reusable components that work with multiple types.

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("hello");
\`\`\`

### Union and Intersection Types
Combine types in flexible ways.

\`\`\`typescript
type StringOrNumber = string | number;
type Person = { name: string } & { age: number };
\`\`\`

## Best Practices

### Enable Strict Mode
Always enable strict mode in your tsconfig.json. It enables all strict type-checking options and catches more potential issues.

### Use Type Inference
Let TypeScript infer types when possible. You don't need to annotate every variable.

### Avoid \`any\`
Using \`any\` defeats the purpose of TypeScript. If you need flexibility, use \`unknown\` or generics instead.

### Define Return Types
While TypeScript can infer return types, explicitly defining them makes your code more readable and catches errors early.

## TypeScript with React

TypeScript and React work beautifully together. Here's a typed React component:

\`\`\`typescript
interface Props {
  title: string;
  count?: number;
  onClick: (id: string) => void;
}

const MyComponent: React.FC<Props> = ({ title, count = 0, onClick }) => {
  return (
    <button onClick={() => onClick("123")}>
      {title}: {count}
    </button>
  );
};
\`\`\`

## Conclusion

TypeScript is no longer just a nice-to-have—it's becoming essential for professional web development. The initial learning curve pays off quickly in terms of fewer bugs, better tooling, and more maintainable code. Start small, enable strict mode, and gradually increase your TypeScript proficiency.`
  };

  return (
    <main className="bg-background min-h-screen">
      <SEOHead
        title={`${post.title} | BrainyGyes Technology Blog`}
        description="Why TypeScript is becoming essential for large-scale web applications and how to leverage its features for better code quality and developer experience."
        keywords="TypeScript, JavaScript, static typing, web development, React TypeScript, type safety, TypeScript tutorial"
        canonicalUrl="https://www.brainygyes.com/blog/mastering-typescript"
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
              <Link to="/blog/website-performance" className="glass-card p-4 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">How to Boost Your Website Performance</h3>
                <p className="text-sm text-muted-foreground">Learn key strategies to optimize your website for maximum speed and efficiency.</p>
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

export default MasteringTypeScript;
