
import React from 'react';
import BlogSearch from './BlogSearch';
import CategoryFilter from './CategoryFilter';

interface SearchAndFilterProps {
  categories: string[];
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (value: string) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ 
  categories,
  searchQuery,
  onSearchChange,
  onCategoryChange,
}) => {
  return (
    <div className="glass-card p-4 rounded-xl mb-8">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <BlogSearch searchQuery={searchQuery} onSearchChange={onSearchChange} />
        <CategoryFilter 
          categories={categories} 
          onCategoryChange={onCategoryChange} 
        />
      </div>
    </div>
  );
};

export default SearchAndFilter;
