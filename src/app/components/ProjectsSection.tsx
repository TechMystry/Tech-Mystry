"use client";

import { useState, useRef, MouseEvent } from 'react';
import { Globe, Smartphone, Database, Calendar, Tag, Zap } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  date: string;
  client: string;
  results: {
    metric: string;
    value: string;
  }[];
  link?: string;
}

const projects: Record<string, Project[]> = {
  websites: [
    {
      id: 'web-1',
      title: 'Nexus Commerce',
      category: 'E-Commerce Platform',
      description: 'A cutting-edge e-commerce platform featuring real-time inventory management, seamless checkout experience, and personalized product recommendations powered by AI.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NDYxNDU0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      date: 'November 2024',
      client: 'Retail Solutions Inc.',
      results: [
        { metric: 'Conversion Rate', value: '+45%' },
        { metric: 'Page Load Time', value: '0.8s' },
        { metric: 'Monthly Revenue', value: '+120%' }
      ]
    },
    {
      id: 'web-2',
      title: 'Lumina Portfolio',
      category: 'Creative Portfolio',
      description: 'An immersive portfolio website for a creative agency, featuring stunning animations, parallax effects, and a dynamic project showcase that captivates visitors.',
      image: 'https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NDYyMDM3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Sanity CMS'],
      date: 'October 2024',
      client: 'Creative Minds Agency',
      results: [
        { metric: 'Engagement Rate', value: '+200%' },
        { metric: 'Bounce Rate', value: '-35%' },
        { metric: 'New Clients', value: '+85%' }
      ]
    },
    {
      id: 'web-3',
      title: 'Vertex SaaS',
      category: 'SaaS Platform',
      description: 'A comprehensive SaaS platform with multi-tenant architecture, advanced analytics dashboard, and seamless third-party integrations for enterprise clients.',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY0NjA4Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'AWS'],
      date: 'September 2024',
      client: 'Enterprise Solutions Ltd.',
      results: [
        { metric: 'Active Users', value: '50K+' },
        { metric: 'Uptime', value: '99.9%' },
        { metric: 'User Satisfaction', value: '4.8/5' }
      ]
    }
  ],
  applications: [
    {
      id: 'app-1',
      title: 'FitPulse Pro',
      category: 'Health & Fitness',
      description: 'A comprehensive fitness tracking application with AI-powered workout plans, nutrition tracking, and real-time progress monitoring for health enthusiasts.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0Njc2NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'Redux'],
      date: 'December 2024',
      client: 'HealthTech Innovations',
      results: [
        { metric: 'Downloads', value: '100K+' },
        { metric: 'App Rating', value: '4.7/5' },
        { metric: 'Daily Active Users', value: '25K+' }
      ]
    },
    {
      id: 'app-2',
      title: 'TaskFlow Mobile',
      category: 'Productivity',
      description: 'An intuitive task management app with team collaboration features, smart reminders, and seamless synchronization across all devices.',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ2Nzg3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Flutter', 'GraphQL', 'PostgreSQL', 'WebSocket'],
      date: 'October 2024',
      client: 'Productivity Labs',
      results: [
        { metric: 'User Retention', value: '78%' },
        { metric: 'Tasks Completed', value: '2M+' },
        { metric: 'Premium Users', value: '15K+' }
      ]
    },
    {
      id: 'app-3',
      title: 'PaySwift',
      category: 'FinTech',
      description: 'A secure digital wallet and payment solution with instant transfers, bill payments, and cryptocurrency integration for modern financial needs.',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY0NjA4Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Swift', 'Kotlin', 'Blockchain', 'Microservices'],
      date: 'August 2024',
      client: 'FinServe Digital',
      results: [
        { metric: 'Transactions', value: '$10M+' },
        { metric: 'Security Score', value: 'A+' },
        { metric: 'Processing Time', value: '<2s' }
      ]
    }
  ],
  crm: [
    {
      id: 'crm-1',
      title: 'SalesPro 360',
      category: 'Sales CRM',
      description: 'A powerful CRM solution with advanced lead scoring, automated workflows, and comprehensive analytics to boost sales team productivity and close rates.',
      image: 'https://images.unsplash.com/photo-1580983559367-0dc2f8934365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm0lMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NjQ2ODY1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Angular', 'Python', 'Redis', 'Elasticsearch'],
      date: 'November 2024',
      client: 'Global Sales Corp.',
      results: [
        { metric: 'Sales Increase', value: '+65%' },
        { metric: 'Lead Conversion', value: '+48%' },
        { metric: 'Time Saved', value: '20hrs/week' }
      ]
    },
    {
      id: 'crm-2',
      title: 'ClientHub',
      category: 'Customer Management',
      description: 'An all-in-one customer relationship platform featuring 360-degree customer views, automated communication, and predictive analytics for better engagement.',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ2Nzg3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React', 'Django', 'MySQL', 'Docker'],
      date: 'September 2024',
      client: 'Customer First Inc.',
      results: [
        { metric: 'Customer Retention', value: '+55%' },
        { metric: 'Response Time', value: '-70%' },
        { metric: 'Satisfaction Score', value: '92%' }
      ]
    },
    {
      id: 'crm-3',
      title: 'ServiceDesk Pro',
      category: 'Support CRM',
      description: 'A comprehensive support ticketing system with AI-powered ticket routing, knowledge base integration, and multi-channel support capabilities.',
      image: 'https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NDYyMDM3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Next.js', 'NestJS', 'RabbitMQ', 'OpenAI'],
      date: 'July 2024',
      client: 'TechSupport Solutions',
      results: [
        { metric: 'Ticket Resolution', value: '+80%' },
        { metric: 'First Response', value: '<5min' },
        { metric: 'Agent Productivity', value: '+45%' }
      ]
    }
  ]
};

const categories = [
  { id: 'websites', name: 'Websites', icon: Globe },
  { id: 'applications', name: 'Applications', icon: Smartphone },
  { id: 'crm', name: 'CRM', icon: Database }
];

export function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('websites');
  const [animationKey, setAnimationKey] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<{ [key: string]: { x: number; y: number } }>({});
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const currentProjects = projects[activeCategory] || [];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, projectId: string) => {
    const card = cardRefs.current[projectId];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition(prev => ({
      ...prev,
      [projectId]: { x, y }
    }));
  };

  const handleMouseLeave = (projectId: string) => {
    setMousePosition(prev => ({
      ...prev,
      [projectId]: { x: 0, y: 0 }
    }));
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setAnimationKey(prev => prev + 1);
    setMousePosition({});
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 relative overflow-hidden">

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h1 className="text-black mb-2 inline-block">Our Portfolio</h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black to-transparent"></div>
          </div>
          <p className="text-gray-600 mt-6">Transforming ideas into exceptional digital experiences</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-16">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`
                  group relative flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-500 overflow-hidden
                  ${activeCategory === category.id
                    ? 'bg-black text-white scale-105 shadow-xl'
                    : 'bg-white text-black border-2 border-gray-200 hover:border-black hover:shadow-lg'
                  }
                `}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-gray-800 to-black transition-transform duration-500 ${activeCategory === category.id ? 'scale-100' : 'scale-0'
                  }`} style={{ transformOrigin: 'center' }} />

                <CategoryIcon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{category.name}</span>

                {activeCategory === category.id && (
                  <Zap className="w-4 h-4 relative z-10 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => {
            const pos = mousePosition[project.id] || { x: 0, y: 0 };
            const isHovered = pos.x !== 0 || pos.y !== 0;

            return (
              <div
                key={`${project.id}-${animationKey}`}
                ref={(el) => (cardRefs.current[project.id] = el)}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:border-black hover:shadow-2xl cursor-pointer"
                style={{
                  height: '420px',
                  animation: `flipUpFromBottom 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s both`,
                  perspective: '1000px'
                }}
              >
                <div
                  className="h-full relative"
                  style={{
                    transform: isHovered
                      ? `rotateX(${(pos.y - 210) / 40}deg) rotateY(${(pos.x - 150) / 40}deg)`
                      : 'rotateX(0deg) rotateY(0deg)',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s ease-out'
                  }}
                >

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-2 rounded-full">
                      <Tag className="w-3 h-3 inline mr-2" />
                      {project.category}
                    </div>

                    {/* Date */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.date}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-black mb-3">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm border border-gray-300 transition-all duration-300 hover:bg-black hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-900 text-white rounded-full text-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="text-center bg-gray-50 rounded-lg p-2 border border-gray-200">
                          <div className="text-black">{result.value}</div>
                          <div className="text-gray-500 text-xs">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div
                    className="absolute bottom-0 right-0 w-20 h-20 bg-black transition-all duration-500 opacity-10 group-hover:opacity-100"
                    style={{
                      clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                      transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                      transformOrigin: 'bottom right'
                    }}
                  />

                  {/* Top Corner Line */}
                  <div
                    className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gray-300 transition-all duration-300 group-hover:border-black"
                    style={{
                      transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                      transformOrigin: 'top left'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes flipUpFromBottom {
          from {
            opacity: 0;
            transform: translateY(100%) rotateX(-90deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
      `}</style>
    </div>
  );
}