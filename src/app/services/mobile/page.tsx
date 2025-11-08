'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Cpu,
  Rocket,
  Zap,
  Shield,
  Layers,
  Palette,
  ChevronRight,
} from 'lucide-react';

const container: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function MobileDevelopment() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#fdfaf6] text-black px-6 md:px-16 py-20 font-[Inter] overflow-hidden relative"
    >
      {/* Background — soft warm tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fefdfb] to-[#f9f6f1] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-36">
        {/* HERO — centered vertically */}
        <motion.section
          variants={item}
          className="text-center max-w-5xl mx-auto min-h-[75vh] flex flex-col justify-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8">
            Elegant <span className="text-gray-400">Mobile Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            We craft sleek, intuitive mobile apps that blend design precision,
            seamless functionality, and performance built to engage and
            inspire on every device.
          </p>
        </motion.section>

        {/* SECTION 1 - STRATEGY */}
        <motion.section
          variants={item}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">
              Design Meets Function
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every app begins with empathy and insight. We explore user
              behavior, brand tone, and long-term goals to design apps that are
              not only functional but emotionally resonant.  
              <br />
              <span className="font-semibold text-black">
                Because great apps aren’t just built—they’re felt.
              </span>
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4" /> UX Strategy & Wireframes
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4" /> User Flow Optimization
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4" /> Platform Architecture Plan
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 bg-black text-white rounded-3xl p-10 shadow-2xl hover:scale-[1.02] transition-transform">
            <Smartphone className="w-12 h-12 mb-6 text-white" />
            <h3 className="text-2xl font-semibold mb-3">
              Experience First Approach
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Every interaction, animation, and layout decision is made to
              enhance user delight. We design for flow, speed, and engagement
              — turning complex actions into effortless gestures.
            </p>
          </div>
        </motion.section>

        {/* SECTION 2 - WHAT WE BUILD */}
        <motion.section variants={item} className="text-center">
          <h2 className="text-5xl font-bold mb-16">What We Build</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Rocket,
                title: 'Startup MVPs',
                desc: 'Rapidly built prototypes and scalable MVPs ready for investor demos and early adopters.',
              },
              {
                icon: Smartphone,
                title: 'iOS & Android Apps',
                desc: 'Cross-platform or native apps that deliver seamless, responsive user experiences.',
              },
              {
                icon: Cpu,
                title: 'IoT & Smart Apps',
                desc: 'Apps that connect with smart devices, APIs, and sensors for next-gen functionality.',
              },
              {
                icon: Shield,
                title: 'Secure Applications',
                desc: 'Robust data protection and compliance baked into every stage of development.',
              },
              {
                icon: Palette,
                title: 'Beautiful Interfaces',
                desc: 'Polished, consistent, and delightful design systems built with motion and intention.',
              },
              {
                icon: Layers,
                title: 'Cross-Platform Systems',
                desc: 'Single codebase apps powered by React Native or Flutter optimized for performance.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                }}
                className={`p-8 rounded-3xl border-2 ${
                  i % 2 === 0
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-gray-200'
                } transition-all hover:scale-[1.02]`}
              >
                <card.icon
                  className={`w-10 h-10 mb-4 ${
                    i % 2 === 0 ? 'text-white' : 'text-black'
                  }`}
                />
                <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                <p
                  className={`${
                    i % 2 === 0 ? 'text-gray-300' : 'text-gray-700'
                  } leading-relaxed`}
                >
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 3 - TECH STACK */}
        <motion.section
          variants={item}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          <div className="md:w-1/2 bg-black text-white rounded-3xl p-10 shadow-2xl hover:scale-[1.02] transition-transform">
            <h2 className="text-4xl font-bold mb-6">Modern Tech Stack</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We combine proven technologies with modern performance frameworks
              to deliver apps that are fast, flexible, and future-proof.
            </p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>React Native + Expo</li>
              <li>TypeScript + Zustand</li>
              <li>Firebase + Supabase</li>
              <li>Node.js + GraphQL APIs</li>
            </ul>
          </div>

          <div className="md:w-1/2 space-y-8">
            <h3 className="text-3xl font-semibold">Performance Obsessed</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              From milliseconds of render time to offline readiness, we fine-tune
              every app for speed, battery efficiency, and real-world usage.
            </p>
          </div>
        </motion.section>

        {/* FINAL SECTION */}
        <motion.section
          variants={item}
          className="text-center border-t border-gray-200 pt-20"
        >
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Mobile That Matters
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We merge innovation, design, and technology to create apps that
            inspire loyalty and drive growth — purposeful, polished, and
            built to last.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
}
