
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CaseStudyDetailProps {
  id?: string;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ id: propId }) => {
  const params = useParams();
  const navigate = useNavigate();
  const id = propId || params.id;
  
  // Sample case study data - in real app, this would come from a database/API
  const caseStudies = [
    {
      id: '1',
      title: 'E-commerce Platform',
      client: 'Fashion Retailer',
      image: 'https://i.pinimg.com/736x/bb/66/24/bb6624ec5adbb59c1381c4265c606071.jpg',
      challenge: 'Improving conversion rates and user experience on a legacy platform.',
      solution: 'Complete UX/UI redesign with modern technologies and streamlined checkout process.',
      results: '45% increase in conversion rate, 30% reduction in cart abandonment.',
      fullDescription: `Our client, a growing fashion retailer, had been operating their e-commerce platform for over 5 years. Despite having quality products and competitive pricing, they were experiencing high cart abandonment rates and low conversion rates.

The client's existing platform was built on outdated technology, had a cumbersome checkout process, and wasn't optimized for mobile devices, which accounted for over 60% of their traffic.

Our team conducted extensive user research, including interviews, usability testing, and analytics review. We identified key pain points in the user journey and developed a comprehensive redesign strategy.

We rebuilt the platform using React for the frontend and implemented a headless commerce solution that allowed for greater flexibility and performance. The new design featured:

- Streamlined product browsing with advanced filtering
- Simplified checkout reduced from 5 steps to 2 steps
- Personalized product recommendations based on browsing history
- Mobile-first responsive design with touch-optimized interactions
- Improved product visualization with 360° views and zoom capabilities

After launching the redesigned platform, the client saw immediate improvements:
- 45% increase in conversion rate
- 30% reduction in cart abandonment
- 25% increase in average order value
- 60% faster page load times
- 4.8/5 customer satisfaction rating

The project was completed within 4 months, on time and on budget, resulting in an ROI of 280% within the first year.`,
      testimonial: "The team transformed our online store into a conversion machine. Their attention to detail and focus on user experience resulted in immediate improvements to our bottom line.",
      testimonialAuthor: "Sarah Johnson, E-commerce Director"
    },
    {
      id: '2',
      title: 'Healthcare App',
      client: 'Medical Services Provider',
      image: 'https://i.pinimg.com/736x/bb/66/24/bb6624ec5adbb59c1381c4265c606071.jpg',
      challenge: 'Creating a secure, HIPAA-compliant mobile app for patient management.',
      solution: 'Developed a secure React Native application with encrypted data storage and secure authentication.',
      results: 'Reduced administrative time by 60% and improved patient satisfaction scores by 35%.',
      fullDescription: `Our client, a regional healthcare provider with multiple locations, needed a mobile solution to streamline patient management and improve the overall patient experience while maintaining strict HIPAA compliance.

Their existing system relied heavily on paper forms and manual processes, resulting in administrative inefficiencies and patient frustration with long wait times and repetitive information requests.

Our team worked closely with healthcare professionals, compliance experts, and patients to understand the needs and requirements of all stakeholders. We identified key opportunity areas for digital transformation while ensuring data security and privacy.

We developed a comprehensive mobile solution using React Native, which included:

- Secure patient portal with biometric authentication
- Encrypted medical records access and storage
- Digital intake forms with smart validation
- Appointment scheduling and reminders
- Secure messaging between patients and providers
- Prescription renewal requests
- Integration with existing EMR/EHR systems
- Telehealth consultation capabilities

The application was developed with multiple layers of security, including end-to-end encryption, secure authentication, and automatic session timeouts. All features were designed to be HIPAA-compliant.

Following implementation:
- Administrative time decreased by 60%
- Patient satisfaction scores improved by 35%
- No-show appointments reduced by 40%
- Average patient intake time decreased from 20 minutes to 5 minutes
- Paper usage reduced by 90%

The application received an Innovation in Healthcare Technology award and has been adopted by additional healthcare providers in the region.`,
      testimonial: "This application has revolutionized how we interact with patients. The security features give us confidence while the intuitive design makes it accessible for patients of all ages.",
      testimonialAuthor: "Dr. Michael Chen, Chief Medical Information Officer"
    },
    {
      id: '3',
      title: 'Interactive Dashboard',
      client: 'Investment Firm',
      image: 'https://i.pinimg.com/736x/92/40/8e/92408e6e22f4d02cf2344287814ee257.jpg',
      challenge: 'Building a real-time dashboard to visualize complex financial data.',
      solution: 'Custom data visualization solution with real-time updates and interactive charts.',
      results: 'Decreased decision-making time by 70% and improved data accuracy by 25%.',
      fullDescription: `Our client, a mid-sized investment firm managing over $2 billion in assets, needed a sophisticated dashboard to monitor market movements, portfolio performance, and risk metrics in real-time.

Their analysts were spending excessive time gathering data from multiple sources and manually creating reports, which delayed decision-making and introduced potential for human error. Additionally, client presentations were static and lacked the interactive elements necessary to effectively communicate complex financial concepts.

After an in-depth discovery phase, our team designed and implemented a comprehensive financial dashboard solution that addressed these challenges:

- Real-time data integration from multiple financial data providers
- Custom visualization components for complex financial metrics
- Interactive scenario modeling and stress testing
- Machine learning-powered anomaly detection
- Customizable layouts for different user roles
- Presentation mode for client meetings
- Automated reporting with export capabilities
- Mobile companion app for on-the-go monitoring

We built the solution using a React frontend with D3.js for custom visualizations, a Node.js backend for data processing, and WebSockets for real-time updates. The system was designed to handle millions of data points with sub-second response times.

The impact on the client's operations was substantial:
- 70% reduction in time spent on decision-making processes
- 25% improvement in data accuracy
- 40% increase in client engagement during presentations
- 50% reduction in report generation time
- Ability to respond to market changes 15x faster than before

The dashboard has become a competitive advantage for the firm, helping them attract new clients and retain existing ones through superior insight delivery and transparency.`,
      testimonial: "The dashboard your team created has become indispensable to our operations. We can now spot opportunities and risks faster than ever, giving us a real edge in the market.",
      testimonialAuthor: "Robert Williams, Chief Investment Officer"
    },
    {
      id: '4',
      title: 'AR Product Visualizer',
      client: 'Furniture Retailer',
      image: 'https://i.pinimg.com/1200x/e2/34/21/e234217b4478cab352bb5cf1b8a44ced.jpg',
      challenge: 'Reducing product returns and improving customer confidence in online furniture purchases.',
      solution: 'Developed an AR application that lets customers visualize furniture in their actual space.',
      results: '50% reduction in returns, 35% increase in conversion rate, and 90% customer satisfaction.',
      fullDescription: `Our client, a premium furniture retailer, faced a common challenge in the furniture industry: high return rates due to customers' inability to accurately visualize products in their homes before purchase.

The company was experiencing a 25% return rate, primarily due to size, color, and style mismatches. This not only impacted profitability but also created a poor customer experience and environmental concerns.

Our team developed a cutting-edge augmented reality solution that transformed the online furniture shopping experience:

- Advanced 3D product modeling with photorealistic textures
- Room scanning technology for accurate spatial measurements  
- Real-time lighting adaptation to match customer environments
- Social sharing features for collaborative decision making
- Integration with existing e-commerce platform
- Cross-platform compatibility (iOS, Android, Web)
- AI-powered recommendations based on room analysis

The AR visualizer was built using ARKit/ARCore for mobile devices and WebXR for browser-based experiences. We created a comprehensive 3D asset pipeline to convert the client's entire product catalog into AR-ready models.

Key technical innovations included:
- Custom algorithms for realistic shadow casting and lighting
- Machine learning models for automatic room layout optimization
- Advanced occlusion handling for seamless object placement
- Real-time texture mapping based on ambient lighting

The results exceeded all expectations:
- 50% reduction in product returns
- 35% increase in conversion rate
- 90% customer satisfaction score for AR feature
- 40% increase in average order value
- Featured as "App of the Week" on major app stores

The AR visualizer has become a key differentiator for the client, attracting new customers and setting a new standard in the furniture retail industry.`,
      testimonial: "The AR solution has completely transformed our business. Customers now buy with confidence, and our return rates have plummeted. It's truly revolutionary technology.",
      testimonialAuthor: "Jennifer Davis, Chief Digital Officer"
    },
    {
      id: '5',
      title: 'AI-Powered Analytics',
      client: 'Enterprise SaaS Company',
      image: 'https://i.pinimg.com/736x/92/40/8e/92408e6e22f4d02cf2344287814ee257.jpg',
      challenge: 'Providing actionable insights from massive datasets for enterprise clients.',
      solution: 'Built an AI-driven analytics platform with predictive modeling and automated insights.',
      results: '80% faster insight generation, 95% accuracy in predictions, and 60% cost reduction.',
      fullDescription: `Our client, a leading SaaS provider serving Fortune 500 companies, needed to evolve their basic reporting tools into an intelligent analytics platform capable of processing terabytes of data and delivering predictive insights.

Their existing solution required manual data analysis, took days to generate reports, and provided only historical insights rather than actionable predictions for future business decisions.

We developed a comprehensive AI-powered analytics platform that revolutionized how their enterprise clients interact with data:

- Machine learning models for predictive analytics and trend forecasting
- Natural language processing for automated insight generation
- Real-time data streaming and processing architecture
- Interactive dashboards with drill-down capabilities
- Automated anomaly detection and alerting
- Custom model training for specific industry verticals
- API-first architecture for seamless integrations

The platform was built using a modern data stack including:
- Apache Kafka for real-time data streaming
- TensorFlow and PyTorch for machine learning models
- React and D3.js for interactive visualizations
- Kubernetes for scalable deployment
- Apache Spark for distributed data processing

Advanced features included:
- Automated feature engineering and model selection
- Explainable AI for transparent decision making
- Multi-tenant architecture with role-based access control
- Real-time collaboration tools for data teams

The impact on the client's business was transformational:
- 80% faster insight generation (from days to hours)
- 95% accuracy in business outcome predictions
- 60% reduction in analytics infrastructure costs
- 300% increase in platform adoption among enterprise clients
- $50M increase in annual recurring revenue

The platform has become the client's primary value proposition, enabling them to compete with industry giants and establish themselves as an innovation leader in the analytics space.`,
      testimonial: "This AI platform has become the cornerstone of our value proposition. Our clients can now make data-driven decisions in real-time, and we've seen unprecedented growth as a result.",
      testimonialAuthor: "Dr. Amanda Rodriguez, Chief Data Officer"
    },
    {
      id: '6',
      title: 'Blockchain Wallet',
      client: 'FinTech Startup',
      image: 'https://i.pinimg.com/736x/92/40/8e/92408e6e22f4d02cf2344287814ee257.jpg',
      challenge: 'Creating a secure, user-friendly wallet for multiple cryptocurrencies and DeFi protocols.',
      solution: 'Developed a non-custodial wallet with advanced security features and seamless DeFi integration.',
      results: '500K+ downloads, $2B+ in transaction volume, and 99.9% uptime security record.',
      fullDescription: `Our client, an emerging FinTech startup, wanted to create a next-generation cryptocurrency wallet that would bridge the gap between security and usability in the rapidly evolving DeFi ecosystem.

The challenge was significant: existing wallets were either too complex for mainstream users or lacked the advanced features required by DeFi power users. Security breaches and poor user experiences had created significant barriers to crypto adoption.

We designed and developed a comprehensive blockchain wallet solution that set new standards for the industry:

- Multi-chain support for 15+ blockchain networks
- Hardware wallet integration for maximum security
- Built-in DeFi protocols for lending, staking, and swapping
- Social recovery system for key management
- Cross-chain bridge functionality
- NFT gallery and marketplace integration
- Advanced portfolio tracking and analytics

The wallet was built using cutting-edge Web3 technologies:
- React Native for cross-platform mobile development
- Web3.js and Ethers.js for blockchain interactions
- Secure enclave integration for private key storage
- Multi-party computation (MPC) for enhanced security
- Zero-knowledge proofs for privacy protection

Key security innovations included:
- Biometric authentication with secure enclave storage
- Time-locked transactions for large transfers
- Multi-signature support for shared accounts
- Phishing protection with domain verification
- Decentralized backup and recovery system

The wallet launched to exceptional market reception:
- 500,000+ downloads in the first 6 months
- $2 billion+ in cumulative transaction volume
- 99.9% uptime with zero security incidents
- 4.8/5 average rating across app stores
- Featured by major crypto publications and influencers

The success of the wallet helped our client secure $25M in Series A funding and establish partnerships with major DeFi protocols, positioning them as a leader in the next generation of digital finance.`,
      testimonial: "Working with this team was incredible. They delivered a wallet that perfectly balances security with usability, and the results speak for themselves. We couldn't be happier with the outcome.",
      testimonialAuthor: "Marcus Chen, Founder & CEO"
    },
    {
      id: '7',
      title: 'Learning Management System',
      client: 'Educational Institution',
      image: 'https://i.pinimg.com/736x/c4/cc/2b/c4cc2b8c8c584be07d548c5d3f1eb48b.jpg',
      challenge: 'Modernizing online education with interactive features and improved student engagement.',
      solution: 'Built a comprehensive LMS with AI-driven personalization and collaborative learning tools.',
      results: '85% increase in student engagement, 40% improvement in completion rates, and 95% user satisfaction.',
      fullDescription: `Our client, a prestigious educational institution with over 50,000 students, needed to modernize their aging learning management system to meet the demands of contemporary digital education.

The existing platform was outdated, difficult to navigate, and lacked the interactive features necessary to engage today's digital-native students. Faculty were struggling with limited customization options, and students were experiencing high dropout rates in online courses.

We developed a next-generation learning management system that transformed the educational experience:

- AI-powered personalized learning paths and content recommendations
- Interactive video lectures with real-time quizzes and annotations
- Collaborative tools for group projects and peer learning
- Advanced analytics for tracking student progress and engagement
- Mobile-first design for learning on any device
- Integrated plagiarism detection and academic integrity tools
- Virtual classroom environments with breakout rooms
- Gamification elements to boost motivation and engagement

The platform was built using modern educational technology standards:
- React and TypeScript for the frontend interface
- Node.js and Express for the backend API
- MongoDB for flexible content management
- WebRTC for real-time video communication
- Machine learning algorithms for personalization
- SCORM and xAPI compliance for content interoperability

Innovative features included:
- Adaptive learning algorithms that adjust difficulty based on performance
- Peer review systems with automated matching
- Virtual reality integration for immersive learning experiences
- Blockchain-based credential verification
- Advanced accessibility features for inclusive education

The transformation results were remarkable:
- 85% increase in student engagement metrics
- 40% improvement in course completion rates
- 95% user satisfaction score from both students and faculty
- 50% reduction in administrative workload
- 30% decrease in student support tickets

The new LMS has become a model for other institutions, with the client now offering it as a white-label solution to other educational organizations, creating a new revenue stream worth millions annually.`,
      testimonial: "This LMS has revolutionized how we deliver education. Student engagement has skyrocketed, and faculty love the intuitive tools. It's exactly what modern education needed.",
      testimonialAuthor: "Dr. Patricia Williams, Vice Provost for Digital Learning"
    },
    {
      id: '8',
      title: 'Social Media Platform',
      client: 'Tech Startup',
      image: 'https://i.pinimg.com/1200x/09/32/d2/0932d2c5f748b0df2e2e8fe4d5bffd06.jpg',
      challenge: 'Building a niche social platform focused on professional networking and knowledge sharing.',
      solution: 'Created a specialized social network with AI-powered content curation and professional tools.',
      results: '2M+ active users, 90% retention rate, and $10M Series A funding secured.',
      fullDescription: `Our client, an ambitious tech startup, envisioned a social media platform that would fill the gap between casual social networking and professional development, specifically targeting knowledge workers and industry experts.

The challenge was entering the highly competitive social media market dominated by established giants, while creating a unique value proposition that would attract and retain users in a crowded landscape.

We developed a sophisticated social networking platform with unique features tailored for professional growth and knowledge sharing:

- AI-powered content curation based on expertise and interests
- Professional skill verification and endorsement system
- Industry-specific discussion groups and communities
- Mentorship matching algorithm connecting seniors with juniors
- Live streaming for webinars and expert talks
- Collaborative workspace integration for project teams
- Advanced privacy controls for sensitive professional discussions
- Revenue sharing model for content creators and educators

The platform was built using a scalable, modern technology stack:
- React and Redux for dynamic user interfaces
- Node.js with GraphQL for efficient API management
- PostgreSQL for relational data and Redis for caching
- AWS infrastructure with auto-scaling capabilities
- Elasticsearch for powerful content search
- WebRTC for real-time video communication
- Machine learning pipelines for recommendation engines

Key differentiating features included:
- Expertise scoring algorithm based on content quality and engagement
- Industry trend analysis and insight generation
- Professional development tracking and goal setting
- Anonymous feedback system for honest professional discussions
- Integration with popular productivity and collaboration tools

The platform exceeded all growth expectations:
- 2 million active users within 18 months of launch
- 90% monthly retention rate (industry-leading)
- 45 minutes average daily engagement time
- $10 million Series A funding secured based on platform success
- Partnerships with 500+ companies for recruitment and training

The success of the platform validated the market need for professional-focused social networking and positioned our client as a major player in the future of work and professional development.`,
      testimonial: "The team created something truly special. Our platform has become the go-to place for professional knowledge sharing, and the growth has been phenomenal. We couldn't have done it without their expertise.",
      testimonialAuthor: "Alex Thompson, Co-founder & CTO"
    },
    {
      id: '9',
      title: 'Smart Home IoT App',
      client: 'IoT Device Manufacturer',
      image: 'https://i.pinimg.com/736x/7e/f1/42/7ef142344b333b2f0b8c19c2f51c0101.jpg',
      challenge: 'Unifying control of diverse IoT devices into a single, intuitive smart home ecosystem.',
      solution: 'Developed a comprehensive IoT platform with AI automation and cross-device compatibility.',
      results: '99.5% device connectivity, 75% reduction in setup time, and 4.9/5 user rating.',
      fullDescription: `Our client, a leading IoT device manufacturer, faced the challenge of fragmenting smart home ecosystems where different devices couldn't communicate effectively, leading to poor user experiences and increased support costs.

The market was saturated with incompatible smart home solutions, forcing consumers to use multiple apps and preventing the creation of truly intelligent, automated home environments.

We created a unified smart home platform that set new standards for IoT device integration and automation:

- Universal device compatibility across 200+ smart home brands
- AI-powered automation engine that learns user preferences
- Voice control integration with multiple assistants
- Advanced scheduling and scene management
- Energy monitoring and optimization recommendations
- Security monitoring with facial recognition and anomaly detection
- Family sharing with granular permission controls
- Remote access with enterprise-grade security

The platform was developed using cutting-edge IoT technologies:
- React Native for cross-platform mobile development
- MQTT and CoAP protocols for efficient device communication
- Edge computing for local processing and reduced latency
- Kubernetes for scalable cloud infrastructure
- TensorFlow Lite for on-device AI processing
- End-to-end encryption for all device communications

Advanced automation features included:
- Machine learning algorithms for predictive behavior modeling
- Natural language processing for intuitive voice commands
- Computer vision for occupancy detection and security
- Weather API integration for proactive climate control
- Geofencing for location-based automation

The platform delivered exceptional results:
- 99.5% device connectivity reliability
- 75% reduction in device setup and configuration time
- 4.9/5 average user rating across app stores
- 60% increase in customer satisfaction scores
- 40% reduction in customer support inquiries

The success of the platform led to licensing deals with major appliance manufacturers and established our client as a leader in the smart home industry, resulting in a successful IPO valued at $2.5 billion.`,
      testimonial: "This platform has transformed our business from a device manufacturer to a smart home ecosystem leader. The AI automation capabilities are truly revolutionary.",
      testimonialAuthor: "David Kim, Chief Product Officer"
    },
    {
      id: '10',
      title: 'Trading Platform',
      client: 'Investment Brokerage',
      image: 'https://i.pinimg.com/736x/72/c1/83/72c183951ba05b4104a115e609525d33.jpg',
      challenge: 'Creating a professional-grade trading platform with institutional-level features for retail investors.',
      solution: 'Built a comprehensive trading platform with advanced analytics, algorithmic trading, and risk management.',
      results: '$5B+ in trading volume, 50ms average latency, and 300% increase in active traders.',
      fullDescription: `Our client, a growing investment brokerage, wanted to democratize access to institutional-grade trading tools by creating a platform that combined professional features with retail accessibility.

The existing trading platforms in the market were either too complex for retail investors or too simplistic for serious traders, creating a significant gap in the market for a solution that could serve both segments effectively.

We developed a sophisticated trading platform that redefined retail investment capabilities:

- Real-time market data with millisecond precision
- Advanced charting with 100+ technical indicators
- Algorithmic trading with visual strategy builder
- Portfolio risk analysis and optimization tools
- Social trading features for strategy sharing
- Paper trading environment for strategy testing
- Multi-asset support (stocks, options, crypto, forex)
- Advanced order types and execution algorithms

The platform was built using high-performance financial technology:
- React with WebSockets for real-time data streaming
- C++ engines for ultra-low latency order execution
- Redis for millisecond-level data caching
- PostgreSQL with time-series extensions for historical data
- Kubernetes for elastic scaling during market volatility
- Advanced security with multi-factor authentication

Cutting-edge features included:
- AI-powered market sentiment analysis
- Options flow analysis and unusual activity detection
- Automated risk management with position sizing
- Advanced backtesting with historical market data
- Custom indicator development environment
- API access for third-party integrations

The platform achieved remarkable performance metrics:
- $5 billion+ in monthly trading volume
- 50ms average order execution latency
- 300% increase in active traders within first year
- 99.99% uptime during market hours
- Zero security incidents with SOC 2 compliance

The success of the platform attracted high-net-worth individuals and institutional clients, leading to a 500% increase in assets under management and positioning our client as a major player in the competitive brokerage industry.`,
      testimonial: "This trading platform has exceeded every expectation. Our traders now have access to tools that were previously only available to Wall Street professionals, and our business has grown exponentially.",
      testimonialAuthor: "Michael Foster, Chief Technology Officer"
    },
    {
      id: '11',
      title: 'VR Training Simulator',
      client: 'Manufacturing Corporation',
      image: 'https://i.pinimg.com/736x/d2/56/7e/d2567e7a51b4024e61f1e19d1ceca408.jpg',
      challenge: 'Reducing training costs and improving safety in hazardous manufacturing environments.',
      solution: 'Created immersive VR training simulations with haptic feedback and real-time performance analytics.',
      results: '90% reduction in training costs, 95% improvement in safety scores, and 70% faster skill acquisition.',
      fullDescription: `Our client, a global manufacturing corporation with operations in hazardous environments, faced escalating training costs and safety concerns when preparing workers for complex industrial operations.

Traditional training methods required expensive physical setups, posed safety risks during learning, and couldn't effectively simulate rare but critical emergency scenarios that workers needed to be prepared for.

We developed a comprehensive VR training ecosystem that revolutionized industrial education:

- Photorealistic industrial environment simulations
- Haptic feedback integration for tactile learning
- Multi-user collaborative training scenarios
- Real-time performance tracking and analytics
- Adaptive difficulty based on learner progress
- Emergency scenario simulation with stress testing
- Equipment maintenance procedure training
- Safety protocol certification with VR assessment

The VR platform was built using advanced immersive technologies:
- Unity 3D engine for high-fidelity environment creation
- Oculus and HTC Vive compatibility for widespread adoption
- Custom haptic integration for industrial tool simulation
- Cloud-based progress tracking and analytics
- Machine learning for personalized learning paths
- Multi-language support for global deployment

Innovative training modules included:
- High-voltage electrical work simulation
- Chemical handling and emergency response procedures
- Heavy machinery operation with realistic physics
- Quality control inspection with defect detection
- Team coordination in emergency evacuations
- Maintenance procedures for complex industrial equipment

The transformation results were extraordinary:
- 90% reduction in traditional training costs
- 95% improvement in safety assessment scores
- 70% faster skill acquisition compared to traditional methods
- 85% reduction in workplace accidents among VR-trained workers
- 98% trainee satisfaction rate with immersive learning

The VR training system has been adopted across 50+ manufacturing facilities globally and has become a benchmark for industrial training innovation, leading to licensing opportunities worth millions in additional revenue.`,
      testimonial: "The VR training system has completely transformed how we prepare our workforce. Safety incidents have plummeted, and workers are more confident and skilled than ever before.",
      testimonialAuthor: "Lisa Rodriguez, Director of Training & Safety"
    },
    {
      id: '12',
      title: 'Food Delivery App',
      client: 'Restaurant Technology Startup',
      image: 'https://i.pinimg.com/1200x/45/8e/3e/458e3ebc6481fe156efc433415a4c972.jpg',
      challenge: 'Creating a sustainable food delivery ecosystem that benefits restaurants, drivers, and customers equally.',
      solution: 'Developed an AI-optimized delivery platform with fair pricing, route optimization, and restaurant tools.',
      results: '1M+ orders monthly, 95% restaurant retention, and 25% higher driver earnings than competitors.',
      fullDescription: `Our client, a restaurant technology startup, recognized that existing food delivery platforms were extracting unsustainable fees from restaurants while providing suboptimal experiences for both drivers and customers.

The challenge was creating a three-sided marketplace that could compete with established giants while maintaining fair economics for all participants and building sustainable unit economics from day one.

We developed a revolutionary food delivery platform that redefined industry standards:

- AI-powered route optimization reducing delivery times by 40%
- Dynamic pricing model that balances supply and demand fairly
- Restaurant management tools with inventory and analytics integration
- Driver earnings optimization with surge pricing and efficient batching
- Customer personalization with dietary preferences and ordering patterns
- Sustainable packaging tracking and carbon footprint reduction
- Local restaurant discovery with community-focused features
- Multi-modal delivery options including bikes, scooters, and cars

The platform was engineered using cutting-edge logistics technology:
- React Native for unified mobile experience across user types
- GraphQL for efficient data management across complex relationships
- Real-time tracking with WebSockets and GPS integration
- Machine learning for demand forecasting and inventory optimization
- Microservices architecture for independent scaling of components
- Advanced mapping with custom routing algorithms

Revolutionary features included:
- Predictive ordering suggesting meals before customers decide
- Group ordering coordination for office and family orders
- Restaurant video streaming for transparency and engagement
- Blockchain-based loyalty programs with token rewards
- AR menu visualization for enhanced customer experience
- Voice ordering integration with smart home devices

The platform achieved exceptional market traction:
- 1 million+ orders processed monthly within 18 months
- 95% restaurant retention rate (industry average: 60%)
- 25% higher average driver earnings compared to competitors
- 4.8/5 customer satisfaction rating
- Expansion to 25 cities with $100M annual gross merchandise value

The success attracted strategic partnerships with major restaurant chains and led to a $50M Series B funding round, positioning our client as a major disruptor in the food delivery industry.`,
      testimonial: "This platform has given us back control of our customer relationships while actually improving our delivery operations. The fair fee structure means we can finally make money on delivery orders.",
      testimonialAuthor: "Chef Mario Benedetti, Restaurant Group Owner"
    }
  ];

  const caseStudy = caseStudies.find(study => study.id === id);
  
  if (!caseStudy) {
    return <div className="container mx-auto px-6 py-20">Case study not found</div>;
  }
  
  const handleBack = () => {
    navigate('/case-studies');
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <Button 
        variant="outline" 
        onClick={handleBack}
        className="mb-8 flex items-center gap-2 hover:bg-white"
      >
        <ArrowLeft size={16} />
        Back to Case Studies
      </Button>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative rounded-xl overflow-hidden mb-10 h-[400px]">
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <span className="bg-accent/90 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">
              {caseStudy.client}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{caseStudy.title}</h1>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="glass-card p-6">
            <h2 className="font-semibold text-accent mb-3 text-xl">The Challenge</h2>
            <p className="text-gray-300">{caseStudy.challenge}</p>
          </Card>
          
          <Card className="glass-card p-6">
            <h2 className="font-semibold text-accent mb-3 text-xl">Our Solution</h2>
            <p className="text-gray-300">{caseStudy.solution}</p>
          </Card>
          
          <Card className="glass-card p-6">
            <h2 className="font-semibold text-accent mb-3 text-xl">The Results</h2>
            <p className="text-gray-300">{caseStudy.results}</p>
          </Card>
        </div>
        
        <Card className="glass-card p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Case Study Overview</h2>
          <CardContent className="p-0">
            <div className="prose prose-invert max-w-none">
              {caseStudy.fullDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-gray-300">{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card p-8 bg-gradient-to-r from-primary/20 to-accent/20">
          <blockquote className="text-xl italic text-gray-200 mb-4">
            "{caseStudy.testimonial}"
          </blockquote>
          <cite className="text-accent block text-right">- {caseStudy.testimonialAuthor}</cite>
        </Card>
      </motion.div>
    </div>
  );
};

export default CaseStudyDetail;
