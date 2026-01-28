
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  author: string;
  category: string;
}

// Sample blog post content
export const blogPostsContent: Record<string, BlogPost> = {
  '1': {
    title: 'How to Boost Your Website Performance',
    date: 'May 11, 2025',
    content: `Website performance is a critical aspect of user experience...`,
    imageUrl: 'https://i.pinimg.com/736x/8d/bd/47/8dbd47858808097649c39085b0c6857b.jpg',
    author: 'Alex Johnson',
    category: 'Performance',
    id: '1'
  },
  '2': {
    title: 'The Future of AI in Web Development',
    date: 'May 12, 2025',
    content: `Artificial Intelligence is rapidly transforming the landscape of web development...`,
    imageUrl: 'https://i.pinimg.com/736x/e3/92/b4/e392b4c07d14270c0588a7c3423822c6.jpg',
    author: 'Maya Rodriguez',
    category: 'Technology',
    id: '2'
  },
  '3': {
    title: 'Creating Accessible Web Applications',
    date: 'May 13, 2025',
    content: `Web accessibility is a critical aspect of web development...`,
    imageUrl: 'https://i.pinimg.com/1200x/ea/84/1f/ea841fbe20e1011970200598323fea01.jpg',
    author: 'Jordan Smith',
    category: 'Accessibility',
    id: '3'
  },
  '4': {
    title: 'The Power of CSS Grid',
    date: 'May 14, 2025',
    content: `CSS Grid Layout represents one of the most powerful layout systems...`,
    imageUrl: 'https://i.pinimg.com/736x/c9/77/5e/c9775e28d1f8a3c6b0aa32eef2f7b018.jpg',
    author: 'Chris Lee',
    category: 'CSS',
    id: '4'
  },
  '5': {
    title: 'React vs. Vue: Which One to Choose?',
    date: 'May 15, 2025',
    content: `Choosing the right JavaScript framework for your project is a critical decision...`,
    imageUrl: 'https://i.pinimg.com/736x/30/63/ec/3063ec1e99791c2de1e7dd417b541282.jpg',
    author: 'Sarah Parker',
    category: 'Frameworks',
    id: '5'
  },
  '6': {
    title: 'Mastering TypeScript for Modern Web Development',
    date: 'May 16, 2025',
    content: `TypeScript has rapidly gained adoption in the web development community...`,
    imageUrl: 'https://i.pinimg.com/736x/52/5a/c5/525ac57fc91dbe431dd36a2c2a5cc930.jpg',
    author: 'David Chen',
    category: 'TypeScript',
    id: '6'
  }
};
