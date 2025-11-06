"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  GitBranch,
} from "lucide-react";

// 🔹 Smooth Left Fade-in Animation
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -80, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 50, damping: 18, duration: 1.8 },
  },
};

// 🔹 Floating Mockup (unchanged structure, full-stack content, added glow)
const FloatingMockup = () => {
  const [cpuLoad, setCpuLoad] = useState(72);
  const [ramLoad, setRamLoad] = useState(6.5);
  const [apiCalls, setApiCalls] = useState(1250);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [notifIndex, setNotifIndex] = useState(0);

  const fullCodeLines = [
    "npm run build",
    "Starting API server...",
    "Initializing database...",
    "Deployed to production",
  ];

  const notifications = [
    "Frontend optimized 🚀",
    "Backend APIs connected 🔗",
    "Database migrated 🧠",
    "CI/CD pipeline active ✅",
  ];

  useEffect(() => {
    const stats = setInterval(() => {
      setCpuLoad(Math.floor(60 + Math.random() * 30));
      setRamLoad(Number((6 + Math.random() * 2).toFixed(1)));
      setApiCalls(1200 + Math.floor(Math.random() * 100));
    }, 2000);
    return () => clearInterval(stats);
  }, []);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < fullCodeLines.length) {
        const currentLine = fullCodeLines[lineIndex];
        setCodeLines((prev) => {
          const newLines = [...prev];
          newLines[lineIndex] = currentLine.slice(0, charIndex + 1);
          return newLines;
        });
        charIndex++;
        if (charIndex === currentLine.length) {
          charIndex = 0;
          lineIndex++;
        }
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifIndex((prev) => (prev + 1) % notifications.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="
        relative w-full max-w-5xl mx-auto 
        bg-neutral-900/90 border border-neutral-800 
        rounded-2xl p-5 shadow-2xl 
        flex flex-col sm:flex-row items-stretch gap-6
        hover:border-emerald-400/50 transition-all duration-500
        after:absolute after:inset-0 after:bg-emerald-400/10 after:blur-xl after:opacity-0 hover:after:opacity-30 after:transition-opacity after:duration-500
      "
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="w-full flex flex-col sm:flex-row gap-6"
      >
        {/* Left - Code editor */}
        <div className="flex-1 bg-black/80 rounded-xl p-4 font-mono text-[0.7rem] border border-neutral-800 overflow-hidden">
          {codeLines.map((line, i) => (
            <div
              key={i}
              className={`transition-all ${
                i === 0
                  ? "text-emerald-400"
                  : i === fullCodeLines.length - 1
                  ? "text-gray-100 font-semibold"
                  : "text-gray-400"
              }`}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Right - Stats + Notifications */}
        <div className="flex flex-col justify-between flex-[0.8]">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "CPU", value: `${cpuLoad}%` },
              { label: "RAM", value: `${ramLoad} GB` },
              { label: "API Calls", value: apiCalls },
            ].map((stat, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.4,
                  delay: i * 0.4,
                }}
                className="
                  bg-neutral-800/80 rounded-lg p-3 
                  text-center border border-neutral-700 
                  hover:border-emerald-400 transition-all
                "
              >
                <div className="text-gray-400 text-[0.65rem] sm:text-xs">
                  {stat.label}
                </div>
                <div className="text-white font-bold text-sm sm:text-base">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={notifIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6 }}
              className="
                mt-4 bg-neutral-800/80 border border-neutral-700 
                rounded-lg p-2 text-[0.75rem] font-medium 
                text-emerald-400 text-center shadow-inner
              "
            >
              {notifications[notifIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 🔹 Curved Arrow SVG
const CurvedArrow = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 60 30"
    className={`w-12 h-12 text-gray-400 ${className}`}
  >
    <path
      d="M5 10 C15 0, 40 0, 50 10 M50 10 L40 0 M50 10 L40 20"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 🔹 Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 600], [0, 360]);

  return (
    <section className="relative w-full h-screen bg-[#f9f9f9] text-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-200/50" />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute inset-0 opacity-5 font-mono text-[0.6rem] text-gray-500 pointer-events-none"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <div className="whitespace-nowrap">
          {"const fullStack = () => { frontend: React, backend: Node.js, db: MongoDB, deploy: CI/CD }; "}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col gap-6 relative z-10">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row justify-between gap-6 items-start"
        >
          <div className="flex flex-col">
            <motion.h1
              variants={fadeInLeft}
              className="text-4xl md:text-5xl font-bold leading-tight tracking-tight"
            >
              We Create Digital
              <br />
              <div className="flex items-center gap-2">
                <CurvedArrow />
                <span className="text-[3.5rem] md:text-[4.5rem] font-bold">
                  Brilliance
                </span>

                <motion.span
                  style={{ rotate }}
                  className="relative inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#ddd] shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-10 h-10 md:w-12 md:h-12" > <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" /> <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /> </svg>
                  <span className="absolute w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full shadow-sm" />
                </motion.span>
              </div>
            </motion.h1>
            <motion.p
              variants={fadeInLeft}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-sm mt-3"
            >
              Building scalable apps with React, Node.js, and CI/CD
            </motion.p>
          </div>

          <motion.div
            variants={fadeInLeft}
            transition={{ delay: 0.3, duration: 1.8 }}
            className="flex flex-col justify-between text-xs md:text-sm max-w-sm"
          >
            <p className="text-gray-600 leading-relaxed">
              <strong>TechMystry</strong> is a full-stack development studio
              building robust, scalable solutions with seamless frontend and backend integration.
            </p>

            <motion.a
              href="#works"
              whileHover={{ x: 4, scale: 1.05 }}
              className="flex items-center gap-2 mt-4 font-medium text-gray-800 bg-gray-200/50 px-3 py-2 rounded-lg hover:bg-gray-300/50 hover:underline transition-all"
            >
              <CurvedArrow className="rotate-45 w-4 h-4" />
              Explore projects
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="border-t border-b border-gray-300 py-2 overflow-hidden whitespace-nowrap relative"
        >
          <motion.div
            className="flex items-center gap-4 text-xs font-medium text-gray-600"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {Array(2)
              .fill(
                "FRONTEND ✱ BACKEND → DATABASE ✱ DEVOPS + APIs ✱ SCALABILITY → PERFORMANCE ✱ DEPLOYMENT + CI/CD"
              )
              .map((text, i) => (
                <span key={i} className="flex items-center gap-2 flex-shrink-0">
                  <GitBranch className="w-3 h-3 text-gray-500" />
                  {text}
                </span>
              ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center items-center w-full pt-6"
        >
          <FloatingMockup />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
