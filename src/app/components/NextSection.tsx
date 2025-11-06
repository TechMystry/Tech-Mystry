"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Cloud, Rocket, Cog } from "lucide-react";

const features = [
  {
    icon: <Code2 className="w-6 h-6 text-white" />,
    title: "Custom Web & Mobile Apps",
    text: "Seamless, scalable, and high-performance experiences tailored for your audience.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-white" />,
    title: "Cloud Infrastructure",
    text: "Resilient, secure, and future-ready systems that scale as you grow.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "Performance Optimization",
    text: "Every millisecond engineered to deliver speed, reliability, and excellence.",
  },
];

const HeroWithNextSection = () => {
  const { scrollYProgress } = useScroll();
  const rotateGear = useTransform(scrollYProgress, [0, 1], [0, 1080]);
  const gearY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">
      {/* === Background Layers === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top wave gradient */}
        <svg
          className="absolute top-0 left-0 w-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="url(#grad1)"
            d="M0,224L60,234.7C120,245,240,267,360,245.3C480,224,600,160,720,149.3C840,139,960,181,1080,213.3C1200,245,1320,267,1380,277.3L1440,288L1440,320L0,320Z"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#999", stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: "#444", stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Rotating Gear */}
        <motion.div
          style={{ y: gearY, rotate: rotateGear }}
          className="absolute top-32 right-20 text-gray-500/30"
        >
          <Cog size={90} strokeWidth={1.2} />
        </motion.div>

        {/* Floating blurred lights */}
        <motion.div
          className="absolute top-10 left-10 w-[300px] h-[300px] bg-white/5 rounded-full blur-[120px]"
          animate={{ y: [0, 80, 0], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-gray-700/10 rounded-full blur-[140px]"
          animate={{ y: [0, -50, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Extra animated tech SVGs */}
        <motion.svg
          className="absolute top-1/3 left-20 w-12 h-12 text-gray-700/20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <polygon points="12 2 19 21 5 21 12 2" strokeWidth="1.2" />
        </motion.svg>

        <motion.svg
          className="absolute bottom-1/3 right-24 w-10 h-10 text-gray-700/25"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="8" strokeWidth="1.2" />
        </motion.svg>

        <motion.svg
          className="absolute top-1/2 right-1/4 w-10 h-10 text-gray-600/25"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="5" y="5" width="14" height="14" rx="3" strokeWidth="1.2" />
        </motion.svg>
      </div>

      {/* === Section Content === */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-100 via-white to-gray-400 bg-clip-text text-transparent"
        >
          The TechMystry Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Precision. Innovation. Execution. <br /> We don’t just build — we engineer timeless digital systems designed to inspire.
        </motion.p>

        {/* === Animated Features Grid === */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.3,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
              className="relative flex flex-col items-center text-center space-y-4 group"
            >
              {/* Glow Background */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-700/10 to-gray-900/20 opacity-0 group-hover:opacity-100 blur-lg transition-all"
                transition={{ duration: 0.4 }}
              />

              {/* Icon Bubble */}
              <motion.div
                className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-500/20 to-gray-800/30 backdrop-blur-lg border border-gray-600/40 shadow-lg relative z-10"
                whileHover={{ rotate: 8 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {f.icon}
              </motion.div>

              {/* Text */}
              <div className="z-10">
                <h3 className="text-sm md:text-base font-semibold text-gray-100 mb-1">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm max-w-[240px] mx-auto">
                  {f.text}
                </p>
              </div>

              {/* Underline */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
    </section>
  );
};

export default HeroWithNextSection;
