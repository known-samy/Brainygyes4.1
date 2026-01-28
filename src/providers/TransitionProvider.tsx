
import React, { useState, useEffect, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '@/components/Preloader';

interface TransitionContextType {
  isLoading: boolean;
}

const TransitionContext = createContext<TransitionContextType>({ isLoading: false });

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // Handle transitions when route changes
  useEffect(() => {
    const handleRouteChange = async () => {
      setIsLoading(true);
      
      // Simulate loading time - adjust timing as needed
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Scroll to top on route change
      window.scrollTo(0, 0);
      
      setIsLoading(false);
    };

    handleRouteChange();
  }, [location.pathname]);

  return (
    <TransitionContext.Provider value={{ isLoading }}>
      <Preloader loading={isLoading} />
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
