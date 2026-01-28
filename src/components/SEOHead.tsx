import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
  noIndex?: boolean;
  structuredData?: object;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'BrainyGyes Technology | Web Development & Digital Solutions Agency',
  description = 'BrainyGyes Technology is a leading web development agency specializing in custom websites, mobile apps, UI/UX design, and digital transformation solutions for startups and enterprises.',
  keywords = 'web development, web development agency, digital agency, UI UX design, mobile app development, software development, React development, custom software, Noida, India',
  canonicalUrl,
  ogImage = 'https://www.brainygyes.com/og-image.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData,
  author = 'BrainyGyes Technology',
  publishedTime,
  modifiedTime,
}) => {
  useEffect(() => {
    // Update document title (keep under 60 chars for SEO)
    const optimizedTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
    document.title = optimizedTitle;

    // Helper to update or create meta tag
    const updateMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags (keep description under 160 chars)
    const optimizedDesc = description.length > 160 ? description.substring(0, 157) + '...' : description;
    updateMeta('description', optimizedDesc);
    updateMeta('keywords', keywords);
    updateMeta('author', author);
    
    // Robots
    if (noIndex) {
      updateMeta('robots', 'noindex, nofollow');
    } else {
      updateMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Open Graph
    updateMeta('og:title', optimizedTitle, true);
    updateMeta('og:description', optimizedDesc, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:image:width', '1200', true);
    updateMeta('og:image:height', '630', true);
    updateMeta('og:site_name', 'BrainyGyes Technology', true);
    updateMeta('og:locale', 'en_US', true);
    
    // Twitter
    updateMeta('twitter:card', twitterCard);
    updateMeta('twitter:title', optimizedTitle);
    updateMeta('twitter:description', optimizedDesc);
    updateMeta('twitter:image', ogImage);
    updateMeta('twitter:site', '@brainygyes');
    updateMeta('twitter:creator', '@brainygyes');

    // Article specific meta
    if (ogType === 'article') {
      if (publishedTime) {
        updateMeta('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        updateMeta('article:modified_time', modifiedTime, true);
      }
      updateMeta('article:author', author, true);
    }

    // Canonical URL
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalUrl);
      updateMeta('og:url', canonicalUrl, true);
      updateMeta('twitter:url', canonicalUrl);
    }

    // Structured Data
    if (structuredData) {
      const existingScript = document.querySelector('script[data-seo-structured]');
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-structured', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCard, noIndex, structuredData, author, publishedTime, modifiedTime]);

  return null;
};

export default SEOHead;
