"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "IAEPune.com",
    description: "Study Abroad Website helping students find global education opportunities.",
    url: "https://iaepune.com",
  },
  {
    title: "HTDeveloper.com",
    description: "Construction & infrastructure solutions website for a professional audience.",
    url: "https://htdeveloper.com",
  },
  {
    title: "RelaxWorld.in",
    description: "Tours and travel services platform for domestic & international trips.",
    url: "https://relaxworld.in",
  },
];

export default function ProjectsSection() {
  return (
    <section id="portfolio" className="py-28 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-emerald-400">Our</span> Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a look at some of the real products we’ve built and deployed for clients.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl bg-[#0f0f0f] border border-emerald-500/15 
                         hover:border-emerald-500/40 transition-all duration-300 shadow-xl 
                         hover:shadow-[0_0_35px_#00ffb055] overflow-hidden"
            >
              {/* Website Preview - Full Visible */}
              <div className="relative w-full h-60 overflow-hidden bg-black">
                <iframe
                  src={project.url}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="px-6 py-6 space-y-3">
                <h3 className="text-xl font-bold text-emerald-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center text-emerald-400 font-medium 
                             hover:text-emerald-300 transition-colors pt-1"
                >
                  Visit Site <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
