'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Custom Web & Mobile Applications',
    description:
      'Engaging, user-focused apps built with modern frameworks tailored for your audience.',
    iconColor: 'from-emerald-500 to-emerald-600',
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 16l-4-4 1.41-1.41L8 13.17l10.59-10.6L20 4l-12 12z" />
      </svg>
    ),
  },
  {
    title: 'Scalable Cloud Architecture',
    description:
      'Infrastructure designed to scale with your business, ensuring performance and reliability.',
    iconColor: 'from-emerald-500 to-emerald-600',
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 18H4a4 4 0 010-8h.26A6 6 0 1116 9h1a5 5 0 010 10H6z" />
      </svg>
    ),
  },
  {
    title: 'Performance & SEO Optimization',
    description:
      'Optimized for blazing-fast speed and discoverability to grow your business organically.',
    iconColor: 'from-emerald-500 to-emerald-600',
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 12l5 4v-3h9v-2H7V8l-5 4zm17-9H9a2 2 0 00-2 2v4h2V5h10v14H9v-4H7v4a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2z" />
      </svg>
    ),
  },
];

const NextSection: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delay: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as any },
    },
  };

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center py-20 px-6 lg:px-20 bg-black text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl w-full mx-auto text-center space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-sm md:text-base uppercase tracking-widest text-emerald-400 font-medium">
            THE TECHMYSTRY DIFFERENCE
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Outsmart the Competition with{' '}
            <span className="text-emerald-400">TechMystry’s Modern Stack</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            We blend innovation and experience to deliver scalable, beautiful,
            and secure web solutions for startups to enterprises.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 flex flex-col items-start shadow-md hover:shadow-emerald-500/10 transition-all hover:ring-2 hover:ring-emerald-500 cursor-pointer backdrop-blur-sm"
            >
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.iconColor} flex items-center justify-center mb-4 shadow-md`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NextSection;
