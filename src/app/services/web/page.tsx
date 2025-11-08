'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Globe,
  Shield,
  Rocket,
  Zap,
  Palette,
  Layers,
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

export default function WebDevelopmentBW() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#fafafa] text-black px-6 md:px-16 py-28 font-[Poppins] overflow-hidden relative"
    >
      <div className="relative max-w-7xl mx-auto space-y-40">
        {/* HERO */}
        <motion.section
          variants={item}
          className="text-center max-w-5xl mx-auto mt-20"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8">
            Precision <span className="text-gray-400">Web Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            We build conversion-driven digital experiences that combine visual
            clarity, performance, and growth-focused strategy designed to make
            every pixel work harder.
          </p>
        </motion.section>

        {/* SECTION 1 - STRATEGIC FOUNDATION */}
        <motion.section
          variants={item}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">
              Strategy Before Code
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every great build begins with deep understanding. We dive into
              your goals, audience, and competitive landscape to craft a
              blueprint that aligns user experience with measurable business
              outcomes.  
              <br />  
              <span className="font-semibold text-black">
                Because coding without direction is just decoration.
              </span>
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4" /> Market & UX Research
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4" /> Conversion Strategy Mapping
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4" /> Technical Architecture Plan
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 bg-black text-white rounded-3xl p-10 shadow-2xl hover:scale-[1.02] transition-transform">
            <Zap className="w-12 h-12 mb-6 text-white" />
            <h3 className="text-2xl font-semibold mb-3">Outcome-Driven Design</h3>
            <p className="text-gray-200 leading-relaxed">
              We architect websites that don’t just look beautiful they move
              users to act. Every animation, layout decision, and code snippet
              is tied to performance data and business KPIs.
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
                title: 'SaaS Platforms',
                desc: 'From MVP to scale-ready systems, built with Next.js and a clean, maintainable architecture.',
              },
              {
                icon: Globe,
                title: 'Marketing Websites',
                desc: 'Pixel-perfect, SEO-optimized, lightning-fast pages designed to elevate brand presence.',
              },
              {
                icon: Code,
                title: 'Custom Web Apps',
                desc: 'Fully tailored dashboards, portals, and tools that bring your vision to life efficiently.',
              },
              {
                icon: Shield,
                title: 'Secure Platforms',
                desc: 'We bake in enterprise-grade security and accessibility from the first commit.',
              },
              {
                icon: Palette,
                title: 'Creative Interfaces',
                desc: 'Beautiful UI systems powered by Framer Motion and Tailwind for seamless interactivity.',
              },
              {
                icon: Layers,
                title: 'Headless Architecture',
                desc: 'CMS freedom with Sanity, Strapi, or custom backends built for scalability and ownership.',
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
              We leverage battle-tested frameworks and cutting-edge tools to
              ensure unmatched scalability, speed, and maintainability.
            </p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>Next.js 15 + React 19</li>
              <li>TypeScript + Prisma ORM</li>
              <li>Tailwind CSS + Framer Motion</li>
              <li>Vercel Edge + Server Actions</li>
            </ul>
          </div>

          <div className="md:w-1/2 space-y-8">
            <h3 className="text-3xl font-semibold">Performance Obsessed</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We don’t just code we engineer for outcomes. Each line of code
              is written to minimize render time, reduce bundle size, and boost
              SEO rankings. You’ll get a site that performs as powerfully as it
              looks.
            </p>
          </div>
        </motion.section>
        
        {/* FINAL SECTION */}
        <motion.section
          variants={item}
          className="text-center border-t border-gray-200 pt-20"
        >
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Timeless
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We merge code, creativity, and clarity to create digital experiences
            that not only perform but endure. Every line written, every design
            pixel intentional, impactful, and future-proof.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
}
