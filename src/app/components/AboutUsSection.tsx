"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Smartphone,
  TrendingUp,
  Cloud,
  Layers,
  Zap,
  Users,
  Award,
  Sparkles,
  GitBranch,
  Server,
  Database,
} from "lucide-react";

const FloatingShape = ({ className = "", delay = 0 }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: [0, -15, 0] }}
    transition={{
      duration: 6 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const AboutUs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      desc: "Responsive, scalable, and fast websites using React & Next.js.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      desc: "Cross-platform mobile applications with modern UI/UX.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO Optimization",
      desc: "Drive organic growth with performance-driven SEO solutions.",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      desc: "Scalable deployments powered by AWS, GCP, and Azure.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Full Stack Development",
      desc: "Integrated systems connecting frontend, backend, and databases.",
    },
  ];

  const teamRoles = [
    {
      icon: <Code className="w-6 h-6 text-gray-500" />,
      title: "Frontend Developer",
      desc: "Pixel-perfect UI crafted with React, Next.js, and Tailwind.",
    },
    {
      icon: <Server className="w-6 h-6 text-gray-500" />,
      title: "Backend Engineer",
      desc: "Building APIs & microservices with Node.js and Express.",
    },
    {
      icon: <Database className="w-6 h-6 text-gray-500" />,
      title: "Database Architect",
      desc: "Optimizing MongoDB & PostgreSQL for performance and scale.",
    },
    {
      icon: <GitBranch className="w-6 h-6 text-gray-500" />,
      title: "DevOps Engineer",
      desc: "Automating CI/CD and cloud infrastructure for efficiency.",
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "Global Clients" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Active Support" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden text-gray-900">
      {/* Animated Background Layers */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ y: yParallax }}
      >
        <div
          className="absolute top-10 left-10 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${
              -mousePosition.y * 0.01
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Floating Geometric SVGs */}
        <FloatingShape
          delay={1}
          className="top-20 left-[10%] w-24 h-24 border-2 border-gray-400/30 rounded-full"
        />
        <FloatingShape
          delay={2}
          className="bottom-20 right-[15%] w-16 h-16 rotate-12 border-2 border-gray-400/20"
        />
        <FloatingShape
          delay={3}
          className="top-[60%] left-[70%] w-32 h-32 border border-gray-400/20 rounded-xl"
        />
      </motion.div>

      {/* Scrolling Code Overlay */}
      <div className="absolute inset-0 opacity-[0.04] font-mono text-[10px] text-gray-600 pointer-events-none overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          {"const TechMystry = { mission: 'Digital Precision', stack: ['Next.js', 'Node', 'Cloud', 'Automation'] }; "}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-28">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-start justify-between gap-12"
        >
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gray-200/60 border border-gray-300 rounded-full">
              <Sparkles className="w-4 h-4 text-gray-700" />
              <span className="text-gray-700 text-xs font-medium">
                About TechMystry
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Elevating <span className="text-gray-700">Digital</span> Experiences
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              We are a team of passionate engineers and creators delivering
              powerful digital products that fuse design, technology, and
              strategy. Every pixel, every line of code — crafted for precision.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex-1 bg-white/60 backdrop-blur-sm border border-gray-300 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              To empower businesses through future-ready digital ecosystems —
              where innovation meets reliability. At TechMystry, we create
              solutions that scale with your ambition.
            </p>
            <button className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-all">
              Let's Collaborate
            </button>
          </motion.div>
        </motion.div>

        {/* Team Roles */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            Team Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamRoles.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-white/70 backdrop-blur-sm border border-gray-300 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-3">{role.icon}</div>
                <h3 className="font-semibold text-base mb-2">{role.title}</h3>
                <p className="text-gray-600 text-xs">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;