import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransitionProvider from "./providers/TransitionProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

// Critical path - load immediately
import Index from "./pages/Index";

// Lazy load all other pages for better performance
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));

// Service detail pages - lazy loaded
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const MobileAppDevelopment = lazy(() => import("./pages/services/MobileAppDevelopment"));
const UIUXDesign = lazy(() => import("./pages/services/UIUXDesign"));
const BackendDevelopment = lazy(() => import("./pages/services/BackendDevelopment"));
const Cybersecurity = lazy(() => import("./pages/services/Cybersecurity"));
const CreativeTechnology = lazy(() => import("./pages/services/CreativeTechnology"));

// Resource pages - lazy loaded
const Blog = lazy(() => import("./pages/Blog"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Guides = lazy(() => import("./pages/Guides"));
const Faq = lazy(() => import("./pages/Faq"));

// Blog post pages - lazy loaded
const WebsitePerformance = lazy(() => import("./pages/blog/WebsitePerformance"));
const AIWebDevelopment = lazy(() => import("./pages/blog/AIWebDevelopment"));
const AccessibleWebApps = lazy(() => import("./pages/blog/AccessibleWebApps"));
const CSSGrid = lazy(() => import("./pages/blog/CSSGrid"));
const ReactVsVue = lazy(() => import("./pages/blog/ReactVsVue"));
const MasteringTypeScript = lazy(() => import("./pages/blog/MasteringTypeScript"));

// Detail pages - lazy loaded
const BlogPost = lazy(() => import("./pages/BlogPost"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const GuideDetail = lazy(() => import("./pages/GuideDetail"));

// Legal pages - lazy loaded
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));

// Utility pages - lazy loaded
const Install = lazy(() => import("./pages/Install"));

// Minimal loading fallback for fast perceived performance
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider delayDuration={300}>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <TransitionProvider>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* Main pages */}
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
                <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
                <Route path="/services/backend-development" element={<BackendDevelopment />} />
                <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                <Route path="/services/creative-technology" element={<CreativeTechnology />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                {/* Resource pages */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/website-performance" element={<WebsitePerformance />} />
                <Route path="/blog/ai-web-development" element={<AIWebDevelopment />} />
                <Route path="/blog/accessible-web-apps" element={<AccessibleWebApps />} />
                <Route path="/blog/css-grid" element={<CSSGrid />} />
                <Route path="/blog/react-vs-vue" element={<ReactVsVue />} />
                <Route path="/blog/mastering-typescript" element={<MasteringTypeScript />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
                <Route path="/guides" element={<Guides />} />
                <Route path="/guides/:id" element={<GuideDetail />} />
                <Route path="/faq" element={<Faq />} />
                {/* Legal pages */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                {/* Utility pages */}
                <Route path="/install" element={<Install />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </TransitionProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;