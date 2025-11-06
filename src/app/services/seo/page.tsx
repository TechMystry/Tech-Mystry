'use client';

import { motion } from 'framer-motion';
import {
  Search,
  TrendingUp,
  Zap,
  Globe,
  ArrowRight,
  Check,
  Star,
  ChevronRight,
  BarChart,
  Shield,
} from 'lucide-react';

export default function SEOOptimization() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative min-h-screen bg-white text-black px-6 py-24 overflow-hidden"
    >
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#f0f0f0_1px,transparent_1px),linear-gradient(#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      <div className="relative max-w-5xl mx-auto space-y-16">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            SEO That Ranks #1
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            We don’t chase algorithms. We build <strong>sustainable, data-driven SEO</strong> that drives traffic, leads, and revenue.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto font-medium"
        >
          From <strong>technical audits</strong> to <strong>content strategy</strong>, we optimize every layer of your site to dominate Google — <em>today and tomorrow</em>.
        </motion.p>

        {/* Services + Difference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
              <Search className="w-7 h-7" />
              Our SEO Services
            </h3>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span className="font-medium"><strong>On-Page SEO</strong> – Titles, meta, structure</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span className="font-medium"><strong>Technical SEO</strong> – Speed, schema, crawl</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span className="font-medium"><strong>Content Strategy</strong> – Keywords, blogs, guides</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span className="font-medium"><strong>Backlink Growth</strong> – Authority, trust, rank</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
              <TrendingUp className="w-7 h-7" />
              Why We’re Different
            </h3>
            <p className="text-gray-800 mb-4 font-medium">
              We focus on <strong>long-term dominance</strong>, not quick wins.
            </p>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <strong className="font-semibold">White-Hat Only</strong> – No risks
              </li>
              <li className="flex items-center gap-2">
                <BarChart className="w-5 h-5" />
                <strong className="font-semibold">Monthly Reports</strong> – Transparent ROI
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <strong className="font-semibold">Google-Proof</strong> – Future-ready
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Powered By</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {['Google', 'Ahrefs', 'SEMRush', 'Screaming Frog', 'GTmetrix', 'PageSpeed'].map((tool) => (
              <div key={tool} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-black rounded-xl mb-2 flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">E-Commerce Store</h3>
          <p className="text-gray-800 mb-4 font-medium"><strong>Goal:</strong> Increase organic traffic</p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold">+380%</p>
              <p className="text-sm font-medium">Organic Traffic</p>
            </div>
            <div>
              <p className="text-3xl font-bold">#1 to #1</p>
              <p className="text-sm font-medium">Top Keyword</p>
            </div>
            <div>
              <p className="text-3xl font-bold">+240%</p>
              <p className="text-sm font-medium">Revenue</p>
            </div>
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Our SEO Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Audit', desc: 'Find gaps & opportunities' },
              { step: '2', title: 'Optimize', desc: 'Fix tech, content, speed' },
              { step: '3', title: 'Build', desc: 'Links, authority, trust' },
              { step: '4', title: 'Grow', desc: 'Track, refine, dominate' },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {p.step}
                </div>
                <h4 className="font-semibold mb-1">{p.title}</h4>
                <p className="text-sm text-gray-700 font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          className="bg-white border border-gray-300 rounded-2xl p-8 text-center shadow-sm"
        >
          <Shield className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Our SEO Promise</h3>
          <p className="text-gray-800 max-w-2xl mx-auto font-medium">
            <strong>Top 3 ranking</strong> or <strong>your money back</strong>.  
            We stand by results — not effort.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-center mb-8">FAQ</h3>
          {[
            { q: 'How long until I rank?', a: '3–6 months for competitive keywords. We show progress monthly.' },
            { q: 'Do you write content?', a: 'Yes — SEO-optimized blogs, guides, and product descriptions.' },
            { q: 'What if I get penalized?', a: 'We only use white-hat tactics. Zero risk.' },
          ].map((faq, i) => (
            <details key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6 cursor-pointer">
              <summary className="font-semibold text-lg flex justify-between items-center list-none">
                {faq.q}
                <ChevronRight className="w-5 h-5 transition-transform duration-300" />
              </summary>
              <p className="mt-3 text-gray-800 font-medium">{faq.a}</p>
            </details>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Rank #1?</h3>
          <p className="text-gray-800 mb-8 max-w-2xl mx-auto font-medium">
            Let’s turn your website into a traffic magnet.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Start SEO Audit
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        details[open] summary > svg {
          transform: rotate(90deg);
        }
      `}</style>
    </motion.div>
  );
}