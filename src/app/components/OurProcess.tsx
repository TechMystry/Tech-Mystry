"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Planning",
    description:
      "We collaborate with you to understand your unique business needs, conducting in-depth research and developing a strategic roadmap to ensure project success.",
  },
  {
    title: "Design & Development",
    description:
      "Our expert team crafts visually stunning and functional designs, followed by robust development using the latest technologies to bring your vision to life.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We rigorously test every aspect of the solution to guarantee optimal performance, security, and a seamless user experience across all platforms.",
  },
  {
    title: "Deployment & Launch",
    description:
      "With meticulous planning, we deploy your digital product and ensure a smooth launch, marking the beginning of its impact on your audience.",
  },
  {
    title: "Ongoing Support & Evolution",
    description:
      "Our commitment continues post-launch with dedicated support, updates, and strategic enhancements to keep your solution thriving.",
  },
];

const OurProcess: React.FC = () => {
  return (
    <section
    className="py-20 px-6 lg:px-24 text-white relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto text-center space-y-16 relative z-10">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-extrabold relative"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
            Process
          </span>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-600 rounded-full opacity-75"></div>
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Discover the structured and innovative approach we take to transform
          your digital vision into a thriving reality.
        </motion.p>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700 shadow-lg hover:shadow-emerald-700/30 hover:bg-slate-800/60 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-md transform hover:scale-105 transition-transform duration-300">
                  {i + 1}
                </div>
                <h4 className="ml-6 text-xl font-semibold text-white hover:text-emerald-400 transition-colors duration-300">
                  {step.title}
                </h4>
              </div>
              <p className="text-gray-400 text-base leading-snug">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
