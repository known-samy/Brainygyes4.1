
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface NoPostsFoundProps {
  searchQuery: string;
  selectedCategory: string;
  onClearSearch?: () => void;
  onViewAllCategories: () => void;
}

const NoPostsFound: React.FC<NoPostsFoundProps> = ({
  searchQuery,
  selectedCategory,
  onClearSearch,
  onViewAllCategories
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-12"
    >
      <h3 className="text-xl font-semibold mb-2">No posts found</h3>
      <p className="text-gray-400">
        {searchQuery ? 
          `No results for "${searchQuery}"` + (selectedCategory !== "all" ? ` in ${selectedCategory}` : "") : 
          `There are no posts in the ${selectedCategory} category.`
        }
      </p>
      <div className="flex justify-center gap-4 mt-4">
        {searchQuery && onClearSearch && (
          <Button 
            variant="link" 
            className="text-accent" 
            onClick={onClearSearch}
          >
            Clear search
          </Button>
        )}
        {selectedCategory !== "all" && (
          <Button 
            variant="link" 
            className="text-accent" 
            onClick={onViewAllCategories}
          >
            View all categories
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default NoPostsFound;
