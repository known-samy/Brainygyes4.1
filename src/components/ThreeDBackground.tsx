import React from 'react';

// Simple gradient background instead of Three.js - theme aware
const ThreeDBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/20 to-background dark:from-primary/30 dark:via-accent/20 dark:to-background" />
  );
};

export default ThreeDBackground;
