// src/components/ProjectsSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function ProjectsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
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
  ];

  const MotionLink = motion(Link);

  const sectionFade: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const gridContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const gridItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="projects"
      className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden py-16 md:py-20 lg:py-24"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-gray-300/20 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: "transform 0.4s ease-out",
          }}
        />
        <div
          className="absolute right-0 bottom-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-gray-400/15 rounded-full blur-2xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.008}px, ${-mousePosition.y * 0.008}px)`,
            transition: "transform 0.4s ease-out",
          }}
        />

        {Array.from({ length: 6 }, (_, i) => ({
          left: `${(i * 19 + 7) % 100}%`,
          top: `${(i * 23 + 11) % 100}%`,
          duration: 3 + (i % 3) * 0.7,
          delay: (i % 2) * 0.6,
        })).map((p, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gray-500/20 rounded-full"
            style={{
              left: p.left,
              top: p.top,
              animation: `float ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-2 md:mb-3"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-0">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
                Featured{" "}
                <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed mb-0">
                Cutting-edge solutions blending innovative technology, stunning
                design, and seamless functionality.
              </p>
            </div>

            <MotionLink
              href="/ContactForm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 text-gray-900 font-medium bg-gray-200/60 px-5 py-2.5 rounded-lg border border-gray-300/50 text-sm transition-all duration-300 hover:bg-gray-300/50"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </MotionLink>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, idx) => {
            const iframeRef = React.useRef<HTMLIFrameElement>(null);

            useEffect(() => {
              const iframe = iframeRef.current;
              if (!iframe?.contentWindow) return;

              try {
                // Check if same-origin
                iframe.contentWindow.location.href;
              } catch {
                // Cross-origin → skip scroll sync
                return;
              }

              const syncScroll = () => {
                const iframeDoc = iframe.contentDocument;
                if (!iframeDoc?.body) return;

                const scrollPercent = scrollY / (document.body.scrollHeight - window.innerHeight);
                const iframeScrollHeight = iframeDoc.body.scrollHeight - iframe.clientHeight;
                const targetScroll = iframeScrollHeight * scrollPercent;

                try {
                  iframe.contentWindow?.scrollTo(0, targetScroll);
                } catch {
                  // Silently fail
                }
              };

              syncScroll();
            }, [scrollY]);

            return (
              <motion.div
                key={idx}
                variants={gridItem}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden transition-all duration-300">
                  {/* Project Preview */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100 transition-transform duration-500 group-hover:scale-[1.03] origin-center">
                    <iframe
                      ref={iframeRef}
                      src={project.url}
                      className="absolute inset-0 w-full h-full"
                      style={{
                        pointerEvents: "none",
                        transform: "none",
                        transformOrigin: "top left",
                      }}
                      loading="lazy"
                      title={project.title}
                      sandbox="allow-same-origin allow-scripts allow-popups"
                      scrolling="no"
                      onLoad={(e) => {
                        const iframe = e.currentTarget;
                        const doc = iframe.contentDocument;
                        if (doc?.body) {
                          doc.body.style.overflow = "hidden";
                          doc.documentElement.style.overflow = "hidden";
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-gray-100/80 text-gray-700 text-[10px] font-medium rounded-full border border-gray-200/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-gray-200/50 grid grid-cols-3 gap-2">
                      {Object.entries(project.stats).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="text-xs sm:text-sm font-semibold text-gray-900">
                            {value}
                          </div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-gray-700 font-medium text-xs pt-2 hover:text-gray-900"
                    >
                      Explore Project
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-gray-500 text-sm sm:text-base italic">
            We’re currently working on more exciting projects stay tuned!
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.2; }
          50% { transform: translateY(-10px); opacity: 0.3; }
        }
      `}</style>
    </motion.section>
  );
}