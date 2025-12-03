"use client";

import { useState, useRef, MouseEvent } from "react";
import { Globe, Smartphone, Database, Zap } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { motion } from "framer-motion";

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
    // ⭐ NEW WEBSITE PROJECTS
    {
      id: "web-iaepune",
      title: "IAEPune.com",
      category: "websites",
      description: "Study abroad website helping students with admissions and global consultation.",
      image: "/projects/iaepune.png",
      technologies: ["Next.js", "Tailwind", "Forms", "SEO"],
      date: "2024",
      client: "IAEPune",
      results: [
        { metric: "Leads", value: "+300%" },
        { metric: "User Visits", value: "25K+" },
        { metric: "Engagement", value: "+70%" }
      ],
      link: "https://iaepune.com"
    },
    {
      id: "web-htdeveloper",
      title: "HTDeveloper.com",
      category: "websites",
      description: "Construction and real estate company website showcasing projects & services.",
      image: "/projects/htdeveloper.png",
      technologies: ["Next.js", "Animations", "Cloud Hosting"],
      date: "2024",
      client: "HT Developer",
      results: [
        { metric: "Client Reach", value: "+150%" },
        { metric: "Project Inquiries", value: "+90%" },
        { metric: "Load Time", value: "0.6s" }
      ],
      link: "https://htdeveloper.com"
    },
    {
      id: "relax-holidays",
      title: "Relax Holidays",
      category: "websites",
      description: "Relax Holidays website showcasing holiday packages & services.",
      image: "/projects/relaxholiday.png",
      technologies: ["Next.js", "Tailwind", "Forms", "SEO"],
      date: "2024",
      client: "Relax Holidays",
      results: [
        { metric: "Leads", value: "+300%" },
        { metric: "User Visits", value: "25K+" },
        { metric: "Engagement", value: "+70%" }
      ],
      link: "https://relax-world.vercel.app"
    },
    {
      id: "web-umf",
      title: "UMF Donation",
      category: "websites",
      description: "Donation platform for UMF supporting public welfare and charity services.",
      image: "/projects/umf-website.png",
      technologies: ["Next.js", "Stripe", "Dashboard"],
      date: "2024",
      client: "Universal Muslim Foundation",
      results: [
        { metric: "Donations", value: "+500%" },
        { metric: "Users", value: "10K+" },
        { metric: "Speed", value: "0.8s" }
      ],
      link: "https://umf-tau.vercel.app"
    },
    {
      id: "web-waardian",
      title: "Waardian",
      category: "websites",
      description: "Complete society management software with payments, bookings, complaints & staff management.",
      image: "/projects/waardian.png",
      technologies: ["React Native", "Node.js", "MySQL", "Cloud Functions"],
      date: "2024",
      client: "Waardian",
      results: [
        { metric: "Societies Onboarded", value: "50+" },
        { metric: "Transactions", value: "1M+" },
        { metric: "Rating", value: "4.9/5" }
      ],
      link: "https://waardian.com"
    },
    {
      id: "wed-radhasparshfoundation",
      title: "Radhasparsh Foundation",
      category: "websites",
      description: "Radhasparsh Foundation website showcasing holiday packages & services.",
      image: "/projects/radhasparshfoundation.png",
      technologies: ["Next.js", "Tailwind", "Forms", "SEO"],
      date: "2024",
      client: "Radhasparsh Foundation",
      results: [
        { metric: "User Visits", value: "25K+" },
        { metric: "Engagement", value: "+70%" },
        { metric: "Load Time", value: "0.6s" }
      ],
      link: "https://radhasparshfoundation.org"
    },
  ],

  applications: [
    // ⭐ NEW APP PROJECTS
    {
      id: "app-waardian",
      title: "Waardian",
      category: "applications",
      description: "Complete society management software with payments, bookings, complaints & staff management.",
      image: "/projects/waardian.png",
      technologies: ["React Native", "Node.js", "MySQL", "Cloud Functions"],
      date: "2024",
      client: "Waardian",
      results: [
        { metric: "Societies Onboarded", value: "50+" },
        { metric: "Transactions", value: "1M+" },
        { metric: "Rating", value: "4.9/5" }
      ],
      link: "https://waardian.com"
    },
  ],

  crm: [
    // ⭐ NEW CRM PROJECT
    {
      id: "crm-umf",
      title: "UMF Donation CRM",
      category: "crm",
      description: "Complete charity, donation, Zakat, Sadaqah, and finance management CRM.",
      image: "/projects/umf-website.png",
      technologies: ["Next.js", "NestJS", "MySQL", "Stripe"],
      date: "2024",
      client: "UMF Foundation",
      results: [
        { metric: "Donations Managed", value: "₹5 Cr+" },
        { metric: "Donors", value: "15K+" },
        { metric: "Accuracy", value: "99.9%" }
      ],
      link: "https://umf-tau.vercel.app/"
    },
  ]
};

const categories = [
  { id: "websites", name: "Websites", icon: Globe },
  { id: "applications", name: "Applications", icon: Smartphone },
  { id: "crm", name: "CRM", icon: Database }
];

// ---
// --- REST OF YOUR COMPONENT (UNCHANGED)
// ---

export function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("websites");
  const [animationKey, setAnimationKey] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<{
    [key: string]: { x: number; y: number };
  }>({});
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const currentProjects = projects[activeCategory] || [];

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement>,
    projectId: string
  ) => {
    const card = cardRefs.current[projectId];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition((prev) => ({
      ...prev,
      [projectId]: { x, y }
    }));
  };

  const handleMouseLeave = (projectId: string) => {
    setMousePosition((prev) => ({
      ...prev,
      [projectId]: { x: 0, y: 0 }
    }));
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setAnimationKey((prev) => prev + 1);
    setMousePosition({});
  };

  return (
    <div className="min-h-screen bg-white py-12 sm:py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block relative">
            <h1 className="text-black mb-2 inline-block text-3xl sm:text-4xl md:text-5xl">Our Portfolio</h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black to-transparent"></div>
          </div>
          <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base">
            Transforming ideas into exceptional digital experiences
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`
                  group relative flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full transition-all duration-500 overflow-hidden text-sm sm:text-base
                  ${activeCategory === category.id
                    ? "bg-black text-white scale-105 shadow-xl"
                    : "bg-white text-black border-2 border-gray-200 hover:border-black hover:shadow-lg"
                  }
                `}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-gray-800 to-black transition-transform duration-500 ${activeCategory === category.id ? "scale-100" : "scale-0"
                    }`}
                  style={{ transformOrigin: "center" }}
                />

                <CategoryIcon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="relative z-10 font-medium">{category.name}</span>

                {activeCategory === category.id && (
                  <Zap className="w-4 h-4 relative z-10 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {currentProjects.map((project, index) => {
            const pos = mousePosition[project.id] || { x: 0, y: 0 };
            const isHovered = pos.x !== 0 || pos.y !== 0;

            return (
              <div
                key={`${project.id}-${animationKey}`}
                className="flex flex-col items-center"
              >
                <a
                  href={project.link ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <motion.div
                    ref={(el) => {
                      cardRefs.current[project.id] = el;
                    }}
                    onMouseMove={(e) => handleMouseMove(e, project.id)}
                    onMouseLeave={() => handleMouseLeave(project.id)}
                    className="group relative bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:border-black hover:shadow-2xl cursor-pointer"
                    style={{
                      minHeight: "380px",
                      height: "auto",
                      perspective: "1000px"
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.9,
                      delay: index * 0.14,
                      ease: [0.22, 0.8, 0.2, 1]
                    }}
                  >
                    <div
                      className="h-full relative"
                      style={{
                        transform: isHovered
                          ? `rotateX(${(pos.y - 210) / 40}deg) rotateY(${(pos.x - 150) / 40
                          }deg)`
                          : "rotateX(0deg) rotateY(0deg)",
                        transformStyle: "preserve-3d",
                        transition: "transform 0.3s ease-out"
                      }}
                    >
                      {/* Image */}
                      <div className="relative h-48 sm:h-56 overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 md:p-6 flex flex-col">
                        <div>
                          <h3 className="text-black mb-2 sm:mb-3 text-lg sm:text-xl">{project.title}</h3>
                          <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies
                              .slice(0, 3)
                              .map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 sm:px-3 py-1 bg-gray-100 text-black rounded-full text-xs sm:text-sm border border-gray-300 transition-all duration-300 hover:bg-black hover:text-white"
                                >
                                  {tech}
                                </span>
                              ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 sm:px-3 py-1 bg-gray-900 text-white rounded-full text-xs sm:text-sm">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Results */}
                        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                          {project.results.map((result, idx) => (
                            <div
                              key={idx}
                              className="text-center bg-gray-50 rounded-lg p-1.5 sm:p-2 border border-gray-200"
                            >
                              <div className="text-black text-sm sm:text-base font-semibold">
                                {result.value}
                              </div>
                              <div className="text-gray-500 text-[10px] sm:text-xs">
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
                          clipPath:
                            "polygon(100% 0, 100% 100%, 0 100%)",
                          transform: isHovered
                            ? "scale(1.3)"
                            : "scale(1)",
                          transformOrigin: "bottom right"
                        }}
                      />

                      {/* Top Corner Line */}
                      <div
                        className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gray-300 transition-all duration-300 group-hover:border-black"
                        style={{
                          transform: isHovered
                            ? "scale(1.2)"
                            : "scale(1)",
                          transformOrigin: "top left"
                        }}
                      />
                    </div>
                  </motion.div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes flipUpFromBottom {
          from { opacity: 0; transform: translateY(100%) rotateX(-90deg); }
          to { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
      `}</style>
    </div>
  );
}
