"use client";

import React from "react";
import { useRouter } from "next/navigation"; // ✅ added
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock, Lightbulb } from "lucide-react"; // Real icons

const CallToActionSection: React.FC = () => {
  const router = useRouter(); // ✅ added

  const features = [
    {
      name: "Fast Delivery",
      icon: <Zap className="w-5 h-5 text-gray-800" />,
    },
    {
      name: "Quality Assured",
      icon: <ShieldCheck className="w-5 h-5 text-gray-800" />,
    },
    {
      name: "24×7 Support",
      icon: <Clock className="w-5 h-5 text-gray-800" />,
    },
    {
      name: "Creative Solutions",
      icon: <Lightbulb className="w-5 h-5 text-gray-800" />,
    },
  ];

  return (
    <section
      id="cta"
      className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-900 overflow-hidden px-4 md:px-10"
    >
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-gray-400/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gray-500/20 rounded-full blur-3xl -z-10" />

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              y: [0, -15, 0],
              x: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Grid Layout */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center w-full max-w-6xl">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-snug mb-4">
            Ready to Transform Your{" "}
            <span className="block bg-gradient-to-r from-gray-700 via-gray-800 to-black bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Partner with TechMystry for cutting-edge web, app, and cloud
            solutions designed for speed, scalability, and stunning results.
          </p>
        </motion.div>

        {/* Offer Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex justify-center"
        >
          <motion.div
            className="relative bg-white/80 backdrop-blur-sm border border-gray-300 rounded-3xl p-8 text-center shadow-md transition-all duration-300 max-w-md overflow-hidden"
          >
            <div className="text-4xl mb-3 relative">
              <span className="fire-flame">🔥</span>
              <span className="absolute inset-0 animate-fire-glow" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Limited Time Offer
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Book your consultation this month and get{" "}
              <span className="font-semibold text-gray-900">20% OFF</span> your
              first project.
            </p>

            {/* ✅ Updated: Claim Discount Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
              onClick={() => router.push("/ContactForm")} // ✅ Added navigation
              className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl shadow-md transition-all duration-300 relative overflow-hidden text-sm md:text-base"
            >
              <span className="relative z-10">Claim Discount</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </motion.button>

            <span className="text-gray-500 text-xs md:text-sm block mt-2">
              Offer valid until end of month
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mt-10 flex flex-col items-center text-center"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -6, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="live-feature flex items-center gap-2 bg-white/70 px-5 py-2 rounded-full border border-gray-300 hover:border-gray-700 transition-all duration-300 shadow-sm backdrop-blur-sm text-sm"
            >
              <span className="text-xl icon-pulse">{feature.icon}</span>
              <span className="text-gray-800 font-medium">{feature.name}</span>
            </motion.div>
          ))}
        </div>

        {/* ✅ Updated: Start Your Project Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => router.push("/ContactForm")} // ✅ Added navigation
          className="px-8 py-3 bg-gray-900 text-white font-semibold text-base rounded-2xl shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
        >
          Start Your Project
        </motion.button>
      </motion.div>

      {/* 🔥 Custom CSS Animations */}
      <style jsx>{`
        .fire-flame {
          animation: flicker 1.2s infinite ease-in-out;
          display: inline-block;
        }
        @keyframes flicker {
          0% {
            transform: scale(1);
            filter: drop-shadow(0 0 6px #ffb347) drop-shadow(0 0 12px #ff7e00);
          }
          50% {
            transform: scale(1.05);
            filter: drop-shadow(0 0 10px #ff9933)
              drop-shadow(0 0 18px #ff4500);
          }
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 6px #ffb347) drop-shadow(0 0 12px #ff7e00);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2s infinite linear;
        }
        .icon-pulse {
          animation: pulseGlow 2.5s infinite ease-in-out;
        }
        @keyframes pulseGlow {
          0% {
            filter: drop-shadow(0 0 0px #bbb);
          }
          50% {
            filter: drop-shadow(0 0 6px #aaa);
          }
          100% {
            filter: drop-shadow(0 0 0px #bbb);
          }
        }
      `}</style>
    </section>
  );
};

export default CallToActionSection;
