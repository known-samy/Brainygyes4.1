import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, resolvedTheme } = useTheme();

  const getIcon = () => {
    if (theme === 'system') {
      return { key: 'system', Icon: Monitor, label: 'System theme' };
    }
    if (theme === 'dark') {
      return { key: 'dark', Icon: Moon, label: 'Dark mode' };
    }
    return { key: 'light', Icon: Sun, label: 'Light mode' };
  };

  const { key, Icon, label } = getIcon();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-300 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Current: ${label}. Click to change theme.`}
      title={`Current: ${label}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={key}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Icon className="h-4 w-4 text-foreground" />
        </motion.div>
      </AnimatePresence>
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: 1,
          boxShadow: resolvedTheme === 'dark' 
            ? '0 0 20px rgba(101, 116, 255, 0.4)' 
            : '0 0 20px rgba(251, 191, 36, 0.4)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;