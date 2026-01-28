
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface BlogSearchProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BlogSearch: React.FC<BlogSearchProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="relative flex-grow">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <Input 
        type="text" 
        placeholder="Search articles..." 
        value={searchQuery}
        onChange={onSearchChange}
        className="pl-10 bg-white/5 border-white/10 text-white"
      />
    </div>
  );
};

export default BlogSearch;
