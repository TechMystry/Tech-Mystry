"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as any },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutUsSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden py-20 text-white bg-black"
    >
      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-left mb-16 max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            We're a passionate team dedicated to transforming your digital
            vision into reality through innovative web solutions, mobile apps,
            and cloud services.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-start mb-20"
        >
          {/* Text Content */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Our Journey
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Since July 2025, we've been on a mission to help businesses thrive
              in the digital landscape. Starting fresh with a vision to deliver
              exceptional web and mobile solutions, we've quickly established
              ourselves as a trusted partner for businesses looking to make
              their mark online.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our expertise spans across web development, mobile applications,
              SEO optimization, and cloud services. Every project is an
              opportunity to create something extraordinary that drives real
              business results.
            </p>
          </motion.div>

          {/* Code Block UI */}
          <motion.div variants={fadeUp} className="relative">
            <div className="bg-slate-800/40 border border-slate-700 rounded-3xl p-6 shadow-md hover:shadow-emerald-500/10 transition-all hover:ring-2 hover:ring-emerald-500 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              </div>
              <div className="text-emerald-400 font-mono text-sm space-y-1">
                <div>const ourMission = {'{'}</div>
                <div className="ml-4">vision: "Digital Excellence",</div>
                <div className="ml-4">clients: 4,</div>
                <div className="ml-4">satisfaction: "100%",</div>
                <div className="ml-4">founded: "July 2025"</div>
                <div>{'}'}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
