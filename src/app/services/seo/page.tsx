'use client';

import { motion } from 'framer-motion';
import {
  LineChart,
  TrendingUp,
  Search,
  Globe,
  Target,
  BarChart3,
  PieChart,
  Layers,
  Shield,
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

export default function SEOOptimization() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#f9fafb] text-black px-6 md:px-16 py-20 font-[Inter] overflow-hidden relative"
    >
      {/* Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f3f4f6] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-36">
        {/* HERO SECTION */}
        <motion.section
          variants={item}
          className="text-center max-w-5xl mx-auto min-h-[75vh] flex flex-col justify-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8">
            <span className="text-gray-800">SEO</span>{' '}
            <span className="text-gray-400">Optimization</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            Drive visibility, traffic, and conversions with a data-driven SEO
            strategy designed to grow your brand organically and sustainably.
          </p>
        </motion.section>

        {/* STRATEGY SECTION */}
        <motion.section
          variants={item}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">
              Strategy Rooted in Data
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              SEO is not guesswork; it’s a science of data and intent. We build
              personalized optimization strategies based on real metrics, search
              behavior, and content performance to place your brand where it
              deserves to be seen.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4" /> Keyword and Competitor Research
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4" /> Technical SEO Audits
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4" /> Content Optimization Strategy
              </li>
            </ul>
          </div>

          {/* MOCKUP ANALYTICS CARD */}
          <div className="md:w-1/2 bg-black text-white rounded-3xl p-10 shadow-2xl hover:scale-[1.02] transition-transform">
            <BarChart3 className="w-12 h-12 mb-6 text-white" />
            <h3 className="text-2xl font-semibold mb-3">Real-Time SEO Analytics</h3>
            <p className="text-gray-300 leading-relaxed">
              Track keyword trends, backlinks, and organic growth using our live
              analytics dashboard with easy-to-read performance visuals.
            </p>

            {/* Realistic Vertical Graph */}
            <div className="mt-8 flex items-end justify-between h-48 bg-gray-800 rounded-2xl p-4 overflow-hidden">
              {[50, 80, 40, 70, 90, 60].map((height, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${height - 10}%`, `${height + 10}%`] }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="w-8 rounded-t-lg bg-gradient-to-t from-green-400 to-emerald-500"
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* WHAT WE OPTIMIZE */}
        <motion.section variants={item} className="text-center">
          <h2 className="text-5xl font-bold mb-16">What We Optimize</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Search,
                title: 'On-Page SEO',
                desc: 'Optimized titles, meta descriptions, and content structure for better discoverability.',
              },
              {
                icon: Globe,
                title: 'Off-Page SEO',
                desc: 'High-quality backlinks and PR campaigns that build long-term authority.',
              },
              {
                icon: Target,
                title: 'Local SEO',
                desc: 'Enhanced regional presence using Google My Business and location-based keywords.',
              },
              {
                icon: Layers,
                title: 'Technical SEO',
                desc: 'Fast load times, mobile-first design, and perfect site architecture.',
              },
              {
                icon: TrendingUp,
                title: 'Analytics & Insights',
                desc: 'Interactive dashboards that visualize organic performance and ROI.',
              },
              {
                icon: Shield,
                title: 'SEO Security',
                desc: 'Maintaining secure, compliant, and crawl-friendly environments.',
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

        {/* LIVE GRAPH VISUALIZATION */}
        <motion.section
          variants={item}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          <div className="md:w-1/2 bg-black text-white rounded-3xl p-10 shadow-2xl hover:scale-[1.02] transition-transform">
            <h2 className="text-4xl font-bold mb-6">Organic Growth Over Time</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Experience consistent visibility improvement through our ongoing
              keyword tracking and performance refinement system.
            </p>

            {/* Realistic Animated Bar Chart */}
            <div className="flex items-end justify-between h-56 bg-gray-800 mt-8 rounded-2xl p-4 overflow-hidden">
              {[30, 50, 70, 90, 60, 80].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${h - 15}%`, `${h + 10}%`] }}
                  transition={{
                    duration: 2.5 + i * 0.2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className={`w-10 rounded-t-lg ${
                    i % 2 === 0
                      ? 'bg-gradient-to-t from-blue-500 to-cyan-400'
                      : 'bg-gradient-to-t from-green-400 to-lime-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="md:w-1/2 space-y-8">
            <h3 className="text-3xl font-semibold">Climb Rankings and Stay There</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We focus on long-term, sustainable SEO performance. With continuous
              monitoring and adaptive algorithms, your site stays ahead of
              competition — even as search engines evolve.
            </p>
          </div>
        </motion.section>

        {/* FINAL CTA */}
        <motion.section
          variants={item}
          className="text-center border-t border-gray-200 pt-20"
        >
          <h2 className="text-4xl font-bold mb-6">
            Let’s Elevate Your Search Presence
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            From technical audits to creative content strategy, we blend art,
            data, and innovation to position your brand at the top of search
            results and keep it there.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
}
