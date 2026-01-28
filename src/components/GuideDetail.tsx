
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface GuideDetailProps {
  id?: string;
}

const GuideDetail: React.FC<GuideDetailProps> = ({ id: propId }) => {
  const params = useParams();
  const navigate = useNavigate();
  const id = propId || params.id;
  
  // Sample guides data - in real app, this would come from a database/API
  const guides = [
    {
      id: '1',
      title: 'Getting Started with React',
      category: 'Development',
      level: 'Beginner',
      image: 'https://i.pinimg.com/736x/d8/ad/7b/d8ad7b33a101eaf3da7576a11b4cbc41.jpg',
      excerpt: 'Learn the fundamentals of React and start building your first components.',
      content: `# Getting Started with React

## Introduction

React is a JavaScript library for building user interfaces. It was developed by Facebook and has since become one of the most popular frontend libraries in web development.

## Prerequisites

Before you begin working with React, make sure you have:
- Basic understanding of HTML, CSS, and JavaScript
- Node.js and npm installed on your computer
- A code editor like Visual Studio Code

## Setting Up Your First React Project

The easiest way to create a new React application is by using Create React App:

\`\`\`bash
npx create-react-app my-first-app
cd my-first-app
npm start
\`\`\`

This will set up a new React project with all the necessary configurations and dependencies.

## Understanding Components

Components are the building blocks of React applications. A component is a reusable piece of code that returns a React element describing how a section of the UI should appear.

### Functional Components

Here's a simple functional component:

\`\`\`jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
\`\`\`

### Class Components

And here's the equivalent class component:

\`\`\`jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
\`\`\`

## State and Props

React components can maintain internal state and accept properties (props).

### Props

Props are read-only and are passed from parent components to child components:

\`\`\`jsx
function Welcome() {
  return <Greeting name="John" />;
}
\`\`\`

### State

State allows components to create and manage their own data:

\`\`\`jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Handling Events

React events are named using camelCase and pass event handlers as functions:

\`\`\`jsx
function Button() {
  function handleClick() {
    alert('Button was clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
\`\`\`

## Conclusion

This guide covered the basics of React, including components, props, state, and event handling. With these fundamentals, you're ready to start building simple React applications!

## Next Steps

- Learn about React Router for navigation
- Explore state management with Context API or Redux
- Practice building more complex components
`
    },
    {
      id: '2',
      title: 'Advanced UI/UX Design Principles',
      category: 'Design',
      level: 'Intermediate',
      image: 'https://i.pinimg.com/736x/60/ab/f9/60abf9f0c6d7c5904f929f2d636d09c9.jpg',
      excerpt: 'Dive deeper into user experience design with advanced principles and case studies.',
      content: `# Advanced UI/UX Design Principles

## Introduction to Advanced UI/UX

User experience (UX) and user interface (UI) design are crucial aspects of creating successful digital products. This guide explores advanced principles that can elevate your design work from good to exceptional.

## Cognitive Load Theory in UI Design

Cognitive load refers to the mental effort required to use your product. Advanced UI design aims to minimize unnecessary cognitive load.

### Techniques for Reducing Cognitive Load:

1. **Progressive Disclosure**: Reveal information only when needed
2. **Chunking**: Group related information together
3. **Recognition over Recall**: Use familiar patterns and icons
4. **Clear Visual Hierarchy**: Guide users on what to focus on first

## Microinteractions and Animation

Microinteractions are small, functional animations that:
- Provide feedback on user actions
- Enhance the feeling of direct manipulation
- Add personality to your interface
- Guide attention and indicate relationships

### Best Practices:

- Keep animations under 400ms for optimal perception
- Ensure animations have purpose beyond decoration
- Maintain consistency in animation style across your product

## Data-Informed Design Decisions

Advanced designers go beyond intuition by:

- Conducting usability testing with heat maps and session recordings
- Analyzing user journeys and funnel metrics
- A/B testing design variations
- Creating user personas based on quantitative and qualitative data

## Designing for Accessibility

Advanced UI/UX considers diverse user needs:

- Color contrast ratios of at least 4.5:1 for normal text
- Keyboard navigability for all interactive elements
- Screen reader compatibility with proper ARIA attributes
- Support for various input methods (touch, pointer, keyboard)

## Persuasive Design Patterns

Ethical application of psychology in design:

- **Reciprocity**: Offer something valuable before asking for commitment
- **Scarcity**: Highlight limited availability without creating false urgency
- **Social Proof**: Show testimonials and usage statistics
- **Authority**: Demonstrate expertise and credibility

## Design Systems for Scale

As products grow, design systems help maintain consistency:

- Component libraries with documented usage guidelines
- Shared design tokens for colors, spacing, typography
- Pattern libraries for common interaction flows
- Cross-functional governance processes

## Case Study: Redesigning a Banking App

### Problem:
A banking app had high abandonment rates during account opening.

### Process:
1. User journey mapping revealed confusion points
2. Card sorting helped reorganize information architecture
3. Prototypes tested progressive disclosure techniques
4. A/B testing compared different form approaches

### Outcome:
- 32% increase in completion rate
- 28% reduction in support calls
- 4.5/5 average user satisfaction

## Conclusion

Advanced UI/UX design requires balancing aesthetic appeal with usability, accessibility, and business goals. By applying these principles thoughtfully and testing with real users, you can create experiences that delight and retain users while meeting business objectives.

## Further Reading

- "Don't Make Me Think" by Steve Krug
- "The Design of Everyday Things" by Don Norman
- "Hooked" by Nir Eyal
`
    },
    {
      id: '3',
      title: 'Building Responsive Web Applications',
      category: 'Development',
      level: 'Intermediate',
      image: 'https://i.pinimg.com/736x/d2/19/2b/d2192b7ef27e226ec745e8469a5adabc.jpg',
      excerpt: 'Master the techniques of creating responsive and mobile-first web applications.',
      content: `# Building Responsive Web Applications

## Introduction

Responsive web design ensures that applications look and function well on all devices, from mobile phones to desktop computers. This guide covers advanced techniques for creating truly responsive experiences.

## Mobile-First Approach

Starting with mobile designs forces you to prioritize content and functionality:

### Benefits:
- Focuses on core content and features
- Improves performance by starting lean
- Simplifies the progressive enhancement process

### Implementation:
1. Design for the smallest screen first
2. Add complexity as screen space allows
3. Use mobile-first media queries:

\`\`\`css
/* Base styles for mobile */
.element {
  width: 100%;
}

/* Tablet styles */
@media (min-width: 768px) {
  .element {
    width: 50%;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .element {
    width: 33.33%;
  }
}
\`\`\`

## Fluid Layouts vs. Breakpoints

### Fluid Layouts:
Use relative units (%, em, rem, vh, vw) to create layouts that naturally adapt:

\`\`\`css
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.text {
  font-size: calc(1rem + 0.5vw); /* Fluid typography */
}
\`\`\`

### Strategic Breakpoints:
Rather than targeting specific devices, set breakpoints where the design naturally breaks:

1. Create a fluid layout
2. Resize the browser to find where components break
3. Add breakpoints at those positions

## CSS Grid and Flexbox for Responsive Layouts

### CSS Grid:
Perfect for two-dimensional layouts:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

### Flexbox:
Great for one-dimensional arrangements:

\`\`\`css
.navigation {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .navigation {
    flex-direction: column;
  }
}
\`\`\`

## Responsive Images

### Basic Implementation:
\`\`\`html
<img 
  src="small.jpg"
  srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Responsive image"
>
\`\`\`

### Art Direction:
When images need to be cropped differently for different screens:

\`\`\`html
<picture>
  <source media="(max-width: 600px)" srcset="mobile.jpg">
  <source media="(max-width: 1200px)" srcset="tablet.jpg">
  <img src="desktop.jpg" alt="Art directed image">
</picture>
\`\`\`

## Advanced Responsive Techniques

### Container Queries:
Style elements based on their container size, not just viewport:

\`\`\`css
@container (min-width: 400px) {
  .card-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
\`\`\`

### Responsive Typography:
Using clamp() for fluid type that stays within bounds:

\`\`\`css
h1 {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
}
\`\`\`

## Performance Considerations

Responsive doesn't mean loading all assets for all devices:

- Use \`<link rel="preload">\` for critical assets
- Implement lazy loading for off-screen content
- Consider component-level code splitting
- Optimize and serve appropriately sized images

## Testing Responsive Designs

Thorough testing includes:

1. Device testing on actual hardware
2. Browser developer tools with device emulation
3. Automated testing for viewports using tools like Cypress
4. Accessibility testing at all breakpoints

## Case Study: E-commerce Product Page

### Challenge:
Creating a product page that works seamlessly from mobile to desktop.

### Solution:
- Product images: Grid layout on desktop, carousel on mobile
- Product information: Side-by-side on desktop, stacked on mobile
- Related products: 4 per row on desktop, 2 on tablet, 1 on mobile
- Reviews: Tabbed interface on mobile, expanded view on desktop

## Conclusion

Building truly responsive websites requires more than just flexible layouts. It involves thoughtful design decisions, strategic use of modern CSS, performance optimization, and thorough testing across devices.

## Resources

- MDN Web Docs: CSS Grid and Flexbox
- "Responsive Web Design" by Ethan Marcotte
- "Every Layout" by Heydon Pickering and Andy Bell
`
    },
    {
      id: '4',
      title: 'Introduction to Three.js',
      category: 'Creative Tech',
      level: 'Advanced',
      image: 'https://i.pinimg.com/1200x/7f/cb/ee/7fcbeefd40c976a04a6ed160c91e14a0.jpg',
      excerpt: 'Get started with Three.js and create stunning 3D web experiences.',
      content: `# Introduction to Three.js

## What is Three.js?

Three.js is a powerful JavaScript library that makes creating 3D graphics in the browser accessible and efficient. It abstracts the complexity of WebGL while still providing extensive control over your 3D scenes.

## Prerequisites

Before diving into Three.js, you should have:
- Strong understanding of JavaScript and ES6+
- Familiarity with HTML5 Canvas
- Basic understanding of 3D concepts (meshes, materials, lighting)
- Knowledge of linear algebra is helpful but not required

## Setting Up Your First Scene

Every Three.js application requires three main components: a scene, a camera, and a renderer.

\`\`\`javascript
import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
camera.position.z = 5;

// Create the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
\`\`\`

## Creating Your First 3D Object

Let's create a simple cube:

\`\`\`javascript
// Create geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Create mesh (geometry + material)
const cube = new THREE.Mesh(geometry, material);

// Add to scene
scene.add(cube);
\`\`\`

## The Animation Loop

To animate your scene, use requestAnimationFrame:

\`\`\`javascript
function animate() {
  requestAnimationFrame(animate);
  
  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  // Render the scene
  renderer.render(scene, camera);
}

animate();
\`\`\`

## Understanding Materials and Lighting

### Basic Materials

Three.js offers various materials with different lighting behaviors:

\`\`\`javascript
// MeshBasicMaterial - Unaffected by lights
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// MeshLambertMaterial - Non-shiny, diffuse reflection
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

// MeshPhongMaterial - Shiny with specular highlights
const phongMaterial = new THREE.MeshPhongMaterial({ 
  color: 0x0000ff,
  shininess: 100 
});

// MeshStandardMaterial - Physically based rendering
const standardMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.5,
  roughness: 0.5
});
\`\`\`

### Adding Lights

Most materials require lighting to be visible:

\`\`\`javascript
// Ambient light - illuminates all objects equally
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

// Directional light - parallel rays like sunlight
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Point light - emits light in all directions
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(0, 3, 0);
scene.add(pointLight);
\`\`\`

## Loading 3D Models

Three.js supports various 3D model formats:

\`\`\`javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();

loader.load(
  'path/to/model.gltf',
  (gltf) => {
    // Model loaded successfully
    scene.add(gltf.scene);
  },
  (progress) => {
    // Loading progress
    console.log((progress.loaded / progress.total * 100) + '% loaded');
  },
  (error) => {
    console.error('Error loading model:', error);
  }
);
\`\`\`

## Camera Controls

Enhance user interaction with orbit controls:

\`\`\`javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth camera movement
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation

// Update controls in animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
\`\`\`

## Performance Optimization

### Best Practices:

1. **Reuse geometries and materials** when possible
2. **Use instanced meshes** for many identical objects
3. **Implement frustum culling** to avoid rendering off-screen objects
4. **Optimize textures** - use power-of-two dimensions
5. **Use level of detail (LOD)** for complex scenes

\`\`\`javascript
// Instanced mesh for performance
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const instancedMesh = new THREE.InstancedMesh(geometry, material, 1000);

// Set positions for each instance
const matrix = new THREE.Matrix4();
for (let i = 0; i < 1000; i++) {
  matrix.setPosition(
    Math.random() * 100 - 50,
    Math.random() * 100 - 50,
    Math.random() * 100 - 50
  );
  instancedMesh.setMatrixAt(i, matrix);
}

scene.add(instancedMesh);
\`\`\`

## Post-Processing Effects

Add visual effects with post-processing:

\`\`\`javascript
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5, // Bloom strength
  0.4, // Radius
  0.85 // Threshold
);
composer.addPass(bloomPass);

// Render with composer instead of renderer
function animate() {
  requestAnimationFrame(animate);
  composer.render();
}
\`\`\`

## Responsive Design

Make your Three.js scene responsive:

\`\`\`javascript
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);
\`\`\`

## Project Idea: Interactive 3D Product Showcase

Create an interactive product viewer:
- Load a 3D product model
- Implement orbit controls for 360° viewing
- Add hotspots with product information
- Include material variants (colors, finishes)
- Implement AR viewing capabilities

## Conclusion

Three.js opens up endless possibilities for creating immersive web experiences. Start with simple scenes, experiment with different materials and lighting, and gradually incorporate more advanced features as you become comfortable with the fundamentals.

## Resources

- Three.js Documentation: threejs.org/docs
- Three.js Journey Course by Bruno Simon
- Three.js Examples: threejs.org/examples
- Discover Three.js book
`
    },
    {
      id: '5',
      title: 'Performance Optimization for Web Apps',
      category: 'Development',
      level: 'Advanced',
      image: 'https://i.pinimg.com/736x/92/40/8e/92408e6e22f4d02cf2344287814ee257.jpg',
      excerpt: 'Learn strategies to optimize your web application for maximum performance.',
      content: `# Performance Optimization for Web Apps

## Introduction

Web performance directly impacts user experience, conversion rates, and SEO rankings. This comprehensive guide covers advanced optimization techniques to make your applications lightning-fast.

## Understanding Performance Metrics

### Core Web Vitals

Google's Core Web Vitals measure user experience:

- **Largest Contentful Paint (LCP)**: Loading performance (should be < 2.5s)
- **First Input Delay (FID)**: Interactivity (should be < 100ms)
- **Cumulative Layout Shift (CLS)**: Visual stability (should be < 0.1)

### Additional Important Metrics

- **Time to First Byte (TTFB)**: Server response time
- **First Contentful Paint (FCP)**: When first content appears
- **Time to Interactive (TTI)**: When page becomes fully interactive

## Critical Rendering Path Optimization

### Minimize Critical Resources

Reduce the number of resources blocking initial render:

\`\`\`html
<!-- Defer non-critical JavaScript -->
<script src="analytics.js" defer></script>

<!-- Async for independent scripts -->
<script src="tracking.js" async></script>

<!-- Preload critical resources -->
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="hero-image.jpg" as="image">

<!-- Preconnect to third-party domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://analytics.example.com">
\`\`\`

### CSS Optimization

\`\`\`html
<!-- Inline critical CSS -->
<style>
  /* Critical above-the-fold styles */
  .hero { /* ... */ }
</style>

<!-- Load non-critical CSS asynchronously -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>
\`\`\`

## JavaScript Performance

### Code Splitting

Break your bundle into smaller chunks:

\`\`\`javascript
// React lazy loading
import React, { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

### Tree Shaking

Remove unused code from your bundle:

\`\`\`javascript
// Instead of importing entire library
// import _ from 'lodash';

// Import only what you need
import debounce from 'lodash/debounce';
\`\`\`

### Debouncing and Throttling

Optimize frequent event handlers:

\`\`\`javascript
// Debounce - Execute after user stops typing
const debouncedSearch = debounce((query) => {
  performSearch(query);
}, 300);

// Throttle - Execute at most once per interval
const throttledScroll = throttle(() => {
  handleScroll();
}, 100);

input.addEventListener('input', (e) => debouncedSearch(e.target.value));
window.addEventListener('scroll', throttledScroll);
\`\`\`

### Web Workers

Offload heavy computations to background threads:

\`\`\`javascript
// main.js
const worker = new Worker('worker.js');

worker.postMessage({ data: largeDataset });

worker.onmessage = (e) => {
  console.log('Result from worker:', e.data);
};

// worker.js
self.onmessage = (e) => {
  const result = performHeavyCalculation(e.data);
  self.postMessage(result);
};
\`\`\`

## Image Optimization

### Modern Image Formats

\`\`\`html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Fallback" loading="lazy">
</picture>
\`\`\`

### Responsive Images

\`\`\`html
<img
  srcset="
    small.jpg 400w,
    medium.jpg 800w,
    large.jpg 1200w
  "
  sizes="
    (max-width: 400px) 100vw,
    (max-width: 800px) 50vw,
    33vw
  "
  src="medium.jpg"
  alt="Responsive image"
  loading="lazy"
  decoding="async"
>
\`\`\`

### Lazy Loading

\`\`\`javascript
// Intersection Observer for lazy loading
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      imageObserver.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
\`\`\`

## Caching Strategies

### HTTP Caching

\`\`\`javascript
// Service Worker caching strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found
      if (response) {
        return response;
      }
      
      // Otherwise fetch from network
      return fetch(event.request).then((response) => {
        // Cache new responses
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open('v1').then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      });
    })
  );
});
\`\`\`

### Application-Level Caching

\`\`\`javascript
// Memoization for expensive computations
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const expensiveCalculation = memoize((n) => {
  // Complex computation
  return result;
});
\`\`\`

## Database and API Optimization

### Query Optimization

- Use proper indexing
- Implement pagination
- Select only needed fields
- Use database caching (Redis)

\`\`\`javascript
// GraphQL - Request only what you need
query {
  user(id: "123") {
    name
    email
    // Don't fetch unnecessary fields
  }
}
\`\`\`

### Request Batching

\`\`\`javascript
// Batch multiple API calls
const DataLoader = require('dataloader');

const userLoader = new DataLoader(async (userIds) => {
  const users = await fetchUsersByIds(userIds);
  return userIds.map(id => users.find(user => user.id === id));
});

// Usage
const [user1, user2, user3] = await Promise.all([
  userLoader.load('1'),
  userLoader.load('2'),
  userLoader.load('3')
]);
\`\`\`

## React-Specific Optimizations

### Memoization

\`\`\`javascript
import React, { memo, useMemo, useCallback } from 'react';

// Memoize component to prevent unnecessary re-renders
const ExpensiveComponent = memo(({ data }) => {
  return <div>{/* Render data */}</div>;
});

// Memoize computed values
const Component = ({ items }) => {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.value - b.value);
  }, [items]);
  
  const handleClick = useCallback(() => {
    // Handle click
  }, []); // Dependencies
  
  return <div>{/* Render */}</div>;
};
\`\`\`

### Virtual Scrolling

For long lists, render only visible items:

\`\`\`javascript
import { FixedSizeList } from 'react-window';

const VirtualList = ({ items }) => (
  <FixedSizeList
    height={600}
    itemCount={items.length}
    itemSize={50}
    width="100%"
  >
    {({ index, style }) => (
      <div style={style}>{items[index]}</div>
    )}
  </FixedSizeList>
);
\`\`\`

## Monitoring and Analysis

### Performance Monitoring Tools

- Chrome DevTools Performance tab
- Lighthouse audits
- WebPageTest for detailed analysis
- Real User Monitoring (RUM) with tools like Google Analytics

### Performance Budget

Set and enforce performance budgets:

\`\`\`json
{
  "budget": [
    {
      "resourceSizes": [
        { "resourceType": "script", "budget": 300 },
        { "resourceType": "image", "budget": 500 },
        { "resourceType": "stylesheet", "budget": 100 }
      ]
    }
  ]
}
\`\`\`

## Case Study: E-commerce Optimization

### Initial State:
- LCP: 4.2s
- FID: 180ms
- Total bundle: 850KB

### Optimizations Applied:
1. Code splitting reduced initial bundle to 250KB
2. Image optimization with WebP saved 60% bandwidth
3. Lazy loading reduced initial load by 40%
4. Service worker caching improved repeat visits
5. Database query optimization reduced API response times

### Results:
- LCP: 1.8s (57% improvement)
- FID: 45ms (75% improvement)
- Conversion rate increased 23%
- Bounce rate decreased 18%

## Conclusion

Performance optimization is an ongoing process. Regularly audit your application, set performance budgets, and prioritize optimizations based on user impact. Remember: every millisecond counts.

## Resources

- Web.dev - Performance guides
- MDN Web Performance
- "High Performance Browser Networking" by Ilya Grigorik
- Chrome DevTools documentation
`
    },
    {
      id: '6',
      title: 'Color Theory for Digital Designers',
      category: 'Design',
      level: 'Beginner',
      image: 'https://i.pinimg.com/1200x/37/61/e1/3761e1a03a54f4b88c180c49e874e6b8.jpg',
      excerpt: 'Understanding color theory and its application in digital design.',
      content: `# Color Theory for Digital Designers

## Introduction

Color is one of the most powerful tools in a designer's toolkit. Understanding color theory helps you create harmonious, accessible, and emotionally resonant designs that effectively communicate your message.

## The Color Wheel

The color wheel is the foundation of color theory, organizing colors in a circular format to show relationships between primary, secondary, and tertiary colors.

### Primary Colors (RGB)
In digital design, we use the RGB color model:
- **Red**
- **Green**
- **Blue**

### Secondary Colors
Created by mixing primary colors:
- Red + Green = **Yellow**
- Green + Blue = **Cyan**
- Blue + Red = **Magenta**

### Tertiary Colors
Created by mixing a primary with an adjacent secondary color, resulting in 6 additional colors.

## Color Properties

### Hue
The pure color itself - what we typically call "color" (red, blue, green, etc.)

### Saturation
The intensity or purity of a color. High saturation means vivid colors; low saturation appears more gray.

### Brightness (Value)
How light or dark a color is. Adding white creates a tint, adding black creates a shade.

### Lightness
In the HSL color model, lightness ranges from black (0%) through the pure color (50%) to white (100%).

## Color Harmonies

### Monochromatic
Using variations of a single hue by adjusting saturation and lightness.

**Use cases:** Clean, cohesive designs, minimalist interfaces

\`\`\`css
/* Monochromatic blue palette */
--color-primary: hsl(220, 80%, 50%);
--color-light: hsl(220, 80%, 70%);
--color-lighter: hsl(220, 80%, 90%);
--color-dark: hsl(220, 80%, 30%);
\`\`\`

### Analogous
Colors that sit next to each other on the color wheel (within 30-60 degrees).

**Use cases:** Nature-inspired designs, creating visual flow

\`\`\`css
/* Analogous: Blue to Green */
--color-primary: hsl(220, 70%, 50%);   /* Blue */
--color-secondary: hsl(190, 70%, 50%); /* Cyan */
--color-tertiary: hsl(160, 70%, 50%);  /* Teal */
\`\`\`

### Complementary
Colors opposite each other on the color wheel (180 degrees apart).

**Use cases:** Creating contrast, drawing attention, CTAs

\`\`\`css
/* Complementary: Blue and Orange */
--color-primary: hsl(220, 80%, 50%);   /* Blue */
--color-accent: hsl(40, 80%, 50%);     /* Orange */
\`\`\`

### Triadic
Three colors evenly spaced around the color wheel (120 degrees apart).

**Use cases:** Vibrant, playful designs, creating visual interest

\`\`\`css
/* Triadic: Red, Yellow, Blue */
--color-primary: hsl(0, 80%, 50%);     /* Red */
--color-secondary: hsl(120, 80%, 50%); /* Green */
--color-tertiary: hsl(240, 80%, 50%);  /* Blue */
\`\`\`

### Split-Complementary
A base color plus two colors adjacent to its complement.

**Use cases:** High contrast with more nuance than complementary

\`\`\`css
/* Split-complementary based on blue */
--color-primary: hsl(220, 70%, 50%);   /* Blue */
--color-accent-1: hsl(30, 70%, 50%);   /* Orange-yellow */
--color-accent-2: hsl(50, 70%, 50%);   /* Yellow-orange */
\`\`\`

## Color Psychology

Different colors evoke different emotions and associations:

### Red
- **Emotions:** Energy, passion, urgency, danger
- **Use cases:** Sale banners, error messages, food industry

### Blue
- **Emotions:** Trust, calm, professionalism, stability
- **Use cases:** Corporate sites, healthcare, finance, social media

### Green
- **Emotions:** Growth, nature, health, success
- **Use cases:** Environmental brands, health products, finance (positive)

### Yellow
- **Emotions:** Optimism, warmth, caution, creativity
- **Use cases:** Children's products, attention-grabbing elements

### Purple
- **Emotions:** Luxury, creativity, spirituality, mystery
- **Use cases:** Beauty products, creative services, premium brands

### Orange
- **Emotions:** Enthusiasm, confidence, friendliness, affordability
- **Use cases:** CTAs, entertainment, food industry

### Black & White
- **Black:** Sophistication, elegance, power, modernity
- **White:** Purity, simplicity, cleanliness, minimalism

## Color in Digital Design

### Creating a Color Palette

A typical digital color palette includes:

\`\`\`css
:root {
  /* Primary brand color */
  --color-primary: hsl(220, 80%, 50%);
  --color-primary-dark: hsl(220, 80%, 40%);
  --color-primary-light: hsl(220, 80%, 60%);
  
  /* Secondary/accent color */
  --color-secondary: hsl(40, 80%, 50%);
  
  /* Neutral colors */
  --color-gray-50: hsl(220, 10%, 95%);
  --color-gray-100: hsl(220, 10%, 90%);
  --color-gray-200: hsl(220, 10%, 80%);
  --color-gray-500: hsl(220, 10%, 50%);
  --color-gray-900: hsl(220, 10%, 10%);
  
  /* Semantic colors */
  --color-success: hsl(120, 60%, 50%);
  --color-warning: hsl(40, 90%, 50%);
  --color-error: hsl(0, 80%, 50%);
  --color-info: hsl(200, 80%, 50%);
}
\`\`\`

### The 60-30-10 Rule

A classic design principle for color distribution:
- **60%**: Dominant color (usually neutral)
- **30%**: Secondary color (supports dominant)
- **10%**: Accent color (creates visual interest)

## Accessibility and Color

### WCAG Contrast Requirements

Ensure sufficient contrast between text and background:

- **Normal text**: Minimum contrast ratio of 4.5:1
- **Large text** (18pt+): Minimum contrast ratio of 3:1
- **UI components**: Minimum contrast ratio of 3:1

\`\`\`javascript
// Calculate contrast ratio
function getContrastRatio(color1, color2) {
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
\`\`\`

### Color Blindness Considerations

Approximately 8% of men and 0.5% of women have some form of color vision deficiency:

- **Don't rely on color alone** to convey information
- Use patterns, icons, or text labels in addition to color
- Test designs with color blindness simulators
- Avoid problematic combinations (red/green for deuteranopia)

## Tools for Working with Color

### Digital Color Pickers
- Adobe Color
- Coolors.co
- Paletton

### Accessibility Testing
- WebAIM Contrast Checker
- Stark (Figma plugin)
- Chrome DevTools color picker

### Color Inspiration
- Dribbble color search
- Material Design color system
- Brand color palettes

## Practical Exercise: Building a Color Palette

1. **Choose your primary color** based on brand personality
2. **Select your accent color** using a harmony rule
3. **Create shades and tints** of your primary (5-7 variations)
4. **Define neutral colors** for backgrounds and text
5. **Add semantic colors** for UI states
6. **Test for accessibility** using contrast checkers
7. **Document your palette** with use cases for each color

## Common Mistakes to Avoid

1. **Using too many colors** - Stick to 3-5 main colors
2. **Poor contrast** - Always check readability
3. **Ignoring context** - Colors appear different on various backgrounds
4. **Forgetting color blindness** - Test with simulators
5. **Following trends blindly** - Choose colors that fit your brand

## Case Study: Redesigning a Financial App

### Challenge:
Create a trustworthy yet modern color palette for a fintech startup.

### Solution:
- **Primary:** Deep blue (trust, stability)
- **Accent:** Teal (modern, growth)
- **Success:** Green (positive transactions)
- **Warning:** Amber (caution, not alarm)
- **Neutrals:** Cool grays (professional)

### Results:
- Increased user trust scores by 34%
- Improved accessibility compliance
- More cohesive brand identity

## Conclusion

Color theory provides a framework for making intentional design choices. While rules and harmonies are valuable guides, don't be afraid to experiment and trust your eye. The best color palettes balance theory with creativity and are always tested with real users.

## Further Resources

- "Interaction of Color" by Josef Albers
- Color accessibility guidelines (WCAG)
- Refactoring UI color palettes guide
- Material Design color system documentation
`
    }
  ];

  const guide = guides.find(g => g.id === id);
  
  if (!guide) {
    return <div className="container mx-auto px-6 py-20">Guide not found</div>;
  }
  
  const handleBack = () => {
    navigate('/guides');
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <Button 
        variant="outline" 
        onClick={handleBack}
        className="mb-8 flex items-center gap-2 hover:bg-white"
      >
        <ArrowLeft size={16} />
        Back to Guides
      </Button>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative rounded-xl overflow-hidden mb-10 h-[300px]">
          <img 
            src={guide.image} 
            alt={guide.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex gap-2 mb-4">
              <span className="bg-accent/90 text-white px-3 py-1 rounded-full text-xs">
                {guide.category}
              </span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                {guide.level}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{guide.title}</h1>
          </div>
        </div>
        
        <Card className="glass-card overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">{guide.title}</CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="prose prose-invert max-w-none">
              {guide.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={idx} className="text-3xl font-bold mt-8 mb-6">{paragraph.substring(2)}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{paragraph.substring(3)}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={idx} className="text-xl font-bold mt-6 mb-3">{paragraph.substring(4)}</h3>;
                } else if (paragraph.startsWith('```')) {
                  const code = paragraph.split('\n').slice(1, -1).join('\n');
                  return (
                    <div key={idx} className="bg-black/30 p-4 rounded-lg my-4 overflow-x-auto">
                      <pre><code>{code}</code></pre>
                    </div>
                  );
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={idx} className="list-disc pl-6 mb-4">
                      {paragraph.split('\n').map((item, itemIdx) => (
                        <li key={itemIdx} className="text-gray-300 mb-1">{item.substring(2)}</li>
                      ))}
                    </ul>
                  );
                } else if (paragraph.includes('\n1. ')) {
                  return (
                    <ol key={idx} className="list-decimal pl-6 mb-4">
                      {paragraph.split('\n').map((item, itemIdx) => {
                        if (item.match(/^\d+\. /)) {
                          return <li key={itemIdx} className="text-gray-300 mb-1">{item.replace(/^\d+\. /, '')}</li>;
                        }
                        return <li key={itemIdx} className="text-gray-300 mb-1">{item}</li>;
                      })}
                    </ol>
                  );
                } else {
                  return <p key={idx} className="mb-4 text-gray-300">{paragraph}</p>;
                }
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default GuideDetail;
