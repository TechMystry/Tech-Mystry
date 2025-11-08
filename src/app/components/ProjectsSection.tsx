"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"web" | "app" | "fullstack">("web");

  // ✅ Project Data
  const webProjects = useMemo(
    () => [
      {
        title: "IAEPune.com",
        description:
          "Study Abroad platform helping students explore global education opportunities with ease and personalized guidance.",
        url: "https://iaepune.com",
        tech: ["Next.js", "Tailwind"],
        stats: { users: "5K+", countries: "25+", uptime: "99%" },
      },
      {
        title: "HTDeveloper.com",
        description:
          "Professional construction & infrastructure solutions built for seamless project management and client experience.",
        url: "https://htdeveloper.com",
        tech: ["React", "Tailwind"],
        stats: { projects: "200+", clients: "50+", uptime: "99%" },
      },
      {
        title: "RelaxWorld.in",
        description:
          "Tours and travel platform providing personalized and premium travel experiences with real-time booking.",
        url: "https://relax-world.vercel.app/",
        tech: ["Next.js", "Firebase"],
        stats: { bookings: "10K+", destinations: "100+", uptime: "99%" },
      },
    ],
    []
  );

  const appProjects = useMemo(
    () => [
      { title: "Mobile Apps", description: "Coming Soon...", tech: [], stats: {} },
      { title: "iOS & Android", description: "Coming Soon...", tech: [], stats: {} },
      { title: "Native & Hybrid", description: "Coming Soon...", tech: [], stats: {} },
    ],
    []
  );

  const fullStackProjects = useMemo(
    () => [
      { title: "Full Stack Solutions", description: "Coming Soon...", tech: [], stats: {} },
      { title: "Backend + Frontend", description: "Coming Soon...", tech: [], stats: {} },
      { title: "Scalable Systems", description: "Coming Soon...", tech: [], stats: {} },
    ],
    []
  );

  const projectsMap = { web: webProjects, app: appProjects, fullstack: fullStackProjects };

  // ✅ Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // ✅ Reusable Card
  const ProjectCard = React.memo(({ project }: { project: any }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <div className="relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-400 p-5 flex flex-col justify-between h-full">
        {/* Thumbnail / Preview */}
        {project.url ? (
          <div className="relative h-48 md:h-56 overflow-hidden rounded-2xl border border-gray-200 mb-4">
            <iframe
              src={project.url}
              className="absolute inset-0 w-full h-full border-0 pointer-events-none"
              loading="lazy"
              title={project.title}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              scrolling="no"
              style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            />
          </div>
        ) : (
          <div className="h-48 md:h-56 flex items-center justify-center bg-gray-100 rounded-2xl mb-4">
            <p className="text-gray-600 font-semibold">Coming Soon</p>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mt-1">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          {project.tech?.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Stats */}
          {Object.keys(project.stats).length > 0 && (
            <div className="grid grid-cols-3 gap-2 border-t border-gray-300 pt-3 text-center">
              {Object.entries(project.stats).map(([key, value]: [string, any], i: number) => (
                <div key={i}>
                  <div className="text-sm font-bold text-gray-900">{value}</div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-wide">{key}</div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 font-semibold text-sm pt-3 group-hover:gap-3 transition-all"
            >
              Explore Project <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <p className="text-xs text-gray-500 italic pt-2">Stay tuned for updates!</p>
          )}
        </div>
      </div>
    </motion.div>
  ));

  return (
    <section id="projects" className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-900 overflow-hidden py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
            Our Projects
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Crafted with precision, built for impact.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 border border-gray-300 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm">
          {[
            { key: "web", label: "Websites" },
            { key: "app", label: "Apps" },
            { key: "fullstack", label: "Full Stack" },
          ].map((tab, index) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-8 py-3 text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-gray-900 text-white"
                  : "bg-transparent text-gray-800 hover:bg-gray-200"
              } ${index !== 0 ? "border-l border-gray-300" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Cards */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="wait">
            {projectsMap[activeTab].map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/ContactForm"
            className="inline-flex items-center gap-3 bg-gray-900 text-white font-semibold px-8 py-4 rounded-2xl text-lg border border-gray-800 hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
          >
            Start Your Project <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        iframe {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
          overflow: hidden !important;
        }
        iframe::-webkit-scrollbar {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
