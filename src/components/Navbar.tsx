import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import ThemeToggle from '@/components/ThemeToggle';

const mainLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
];

const companyLinks = [
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

const resourcesLinks = [
  { name: 'Blog', path: '/blog' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Guides', path: '/guides' },
  { name: 'FAQ', path: '/faq' },
];

const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms of Service', path: '/terms-of-service' },
  { name: 'Cookie Policy', path: '/cookie-policy' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = React.useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-300 ${
        scrolled ? 'glass py-2' : 'glass py-2 sm:py-3'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-bold"
          >
            <Link to="/" className="flex items-center gap-2">
              <span className="text-gradient-primary">BrainyGyes</span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {mainLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-accent/10"
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm text-foreground/80 hover:text-foreground bg-transparent border-0 px-3 py-2 h-auto data-[state=open]:bg-accent/10">
                    More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!left-auto">
                    <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-xl p-4">
                      <div className="flex gap-6">
                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Company</h4>
                          <div className="space-y-1">
                            {companyLinks.map((link) => (
                              <NavigationMenuLink asChild key={link.name}>
                                <Link
                                  to={link.path}
                                  className="block px-2 py-1.5 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded transition-colors whitespace-nowrap"
                                >
                                  {link.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                        
                        <div className="border-l border-border/50 pl-6 space-y-2">
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Resources</h4>
                          <div className="space-y-1">
                            {resourcesLinks.map((link) => (
                              <NavigationMenuLink asChild key={link.name}>
                                <Link
                                  to={link.path}
                                  className="block px-2 py-1.5 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded transition-colors whitespace-nowrap"
                                >
                                  {link.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                        
                        <div className="border-l border-border/50 pl-6 space-y-2">
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Legal</h4>
                          <div className="space-y-1">
                            {legalLinks.map((link) => (
                              <NavigationMenuLink asChild key={link.name}>
                                <Link
                                  to={link.path}
                                  className="block px-2 py-1.5 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded transition-colors whitespace-nowrap"
                                >
                                  {link.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link
                to="/contact"
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Medium Device Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            {mainLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors px-2 py-1.5 rounded-md hover:bg-accent/10"
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <button
              className="text-foreground p-2 rounded-md hover:bg-accent/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground p-1.5 -mr-2 rounded-md hover:bg-accent/10 transition-colors active:scale-95"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
        {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
          <>
            <motion.div
              className="fixed inset-0 z-[90] bg-background/90 backdrop-blur-md lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              style={{ top: `${navHeight || 56}px` }}
              className="fixed right-0 bottom-0 z-[100] w-[280px] sm:w-[320px] bg-background border-l border-border shadow-2xl lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              role="dialog"
              aria-modal="true"
            >
              <div className="p-4 space-y-4 sm:space-y-6">
                <nav className="space-y-1">
                  {mainLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-foreground hover:bg-accent/10 rounded-lg transition-all active:scale-[0.98]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <div>
                    <h4 className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Company</h4>
                    <nav className="space-y-1">
                      {companyLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded-lg transition-all active:scale-[0.98]"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  
                  <div className="pt-2 border-t border-border/30">
                    <h4 className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Resources</h4>
                    <nav className="space-y-1">
                      {resourcesLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded-lg transition-all active:scale-[0.98]"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  
                  <div className="pt-2 border-t border-border/30">
                    <h4 className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Legal</h4>
                    <nav className="space-y-1">
                      {legalLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded-lg transition-all active:scale-[0.98]"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium text-center hover:bg-primary/90 transition-all active:scale-[0.98] shadow-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </>,
          document.body
        )}

    </motion.nav>
  );
};

export default Navbar;
