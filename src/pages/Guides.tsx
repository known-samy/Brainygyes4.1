
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ThreeDBackground from '@/components/ThreeDBackground';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FooterSection from '@/components/sections/FooterSection';

const guides = [
  {
    id: '1',
    title: 'Getting Started with React',
    category: 'Development',
    level: 'Beginner',
    image: 'https://i.pinimg.com/736x/d8/ad/7b/d8ad7b33a101eaf3da7576a11b4cbc41.jpg',
    excerpt: 'Learn the fundamentals of React and start building your first components.'
  },
  {
    id: '2',
    title: 'Advanced UI/UX Design Principles',
    category: 'Design',
    level: 'Intermediate',
    image: 'https://i.pinimg.com/736x/60/ab/f9/60abf9f0c6d7c5904f929f2d636d09c9.jpg',
    excerpt: 'Dive deeper into user experience design with advanced principles and case studies.'
  },
  {
    id: '3',
    title: 'Building Responsive Web Applications',
    category: 'Development',
    level: 'Intermediate',
    image: 'https://i.pinimg.com/736x/d2/19/2b/d2192b7ef27e226ec745e8469a5adabc.jpg',
    excerpt: 'Master the techniques of creating responsive and mobile-first web applications.'
  },
  {
    id: '4',
    title: 'Introduction to Three.js',
    category: 'Creative Tech',
    level: 'Advanced',
    image: 'https://i.pinimg.com/1200x/7f/cb/ee/7fcbeefd40c976a04a6ed160c91e14a0.jpg',
    excerpt: 'Get started with Three.js and create stunning 3D web experiences.'
  },
  {
    id: '5',
    title: 'Performance Optimization for Web Apps',
    category: 'Development',
    level: 'Advanced',
    image: 'https://i.pinimg.com/736x/92/40/8e/92408e6e22f4d02cf2344287814ee257.jpg',
    excerpt: 'Learn strategies to optimize your web application for maximum performance.'
  },
  {
    id: '6',
    title: 'Color Theory for Digital Designers',
    category: 'Design',
    level: 'Beginner',
    image: 'https://i.pinimg.com/1200x/37/61/e1/3761e1a03a54f4b88c180c49e874e6b8.jpg',
    excerpt: 'Understanding color theory and its application in digital design.'
  }
];

const categories = ['All', 'Development', 'Design', 'Creative Tech'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const Guides = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All");
  
  const handleReadGuide = (id: string) => {
    navigate(`/guides/${id}`);
  };
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    toast({
      title: `Category: ${category}`,
      description: `Filtered to show ${category === 'All' ? 'all categories' : category + ' guides'}`,
    });
  };
  
  const handleLevelChange = (level: string) => {
    setActiveLevel(level);
    toast({
      title: `Level: ${level}`,
      description: `Filtered to show ${level === 'All' ? 'all levels' : level + ' guides'}`,
    });
  };
  
  // Filter guides based on search, category, and level
  const filteredGuides = guides.filter(guide => {
    const matchesSearch = searchQuery === "" || 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || guide.category === activeCategory;
    const matchesLevel = activeLevel === "All" || guide.level === activeLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <ThreeDBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Guides & Resources</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive tutorials, guides, and resources to help you level up your skills.
            </p>
          </motion.div>
          
          {/* Search & Filter */}
          <div className="mb-12">
            <div className="glass-card p-6 rounded-xl">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-3 py-1 text-sm rounded-full ${
                          category === activeCategory 
                            ? 'bg-accent text-white' 
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Level</label>
                  <div className="flex flex-wrap gap-2">
                    {levels.map((level, index) => (
                      <button
                        key={index}
                        onClick={() => handleLevelChange(level)}
                        className={`px-3 py-1 text-sm rounded-full ${
                          level === activeLevel 
                            ? 'bg-accent text-white' 
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Guides Grid */}
          {filteredGuides.length === 0 ? (
            <div className="glass-card p-8 text-center rounded-xl">
              <h3 className="text-xl font-medium mb-2">No guides found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide, index) => (
                <motion.article 
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative">
                    <img 
                      src={guide.image} 
                      alt={guide.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-accent/90 text-white px-3 py-1 rounded-full text-xs">
                        {guide.category}
                      </span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                        {guide.level}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {guide.excerpt}
                    </p>
                    <Button 
                      variant="link" 
                      className="text-accent p-0 h-auto hover:text-accent/80" 
                      onClick={() => handleReadGuide(guide.id)}
                    >
                      Read Guide →
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Guides;
