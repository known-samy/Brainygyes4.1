
import React from 'react';
import { Filter } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

interface CategoryFilterProps {
  categories: string[];
  onCategoryChange: (value: string) => void;
  defaultValue?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  onCategoryChange, 
  defaultValue = "all" 
}) => {
  return (
    <div className="flex items-center gap-2">
      <Filter size={18} className="text-accent hidden md:block" />
      <Select onValueChange={onCategoryChange} defaultValue={defaultValue}>
        <SelectTrigger className="w-[180px] bg-transparent border-white/10">
          <SelectValue placeholder="Filter by Category" />
        </SelectTrigger>
        <SelectContent className="bg-background/80 backdrop-blur-sm border-white/10">
          {categories.map((category) => (
            <SelectItem key={category} value={category} className="capitalize">
              {category === "all" ? "All Categories" : category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
