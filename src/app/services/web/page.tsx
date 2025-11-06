'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Globe,
  Shield,
  Rocket,
  Code,
  Palette,
  ArrowRight,
  Check,
  Star,
  ChevronRight,
} from 'lucide-react';

export default function WebDevelopment() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="min-h-screen bg-white text-black px-6 py-24 relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
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
            Web Development That Drives Revenue
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            We build <strong>fast, secure, SEO-optimized</strong> websites that convert visitors into customers.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto font-medium"
        >
          From <strong>high-converting landing pages</strong> to <strong>complex SaaS platforms</strong>, every line of code is written with one goal: <em>your business success</em>.
        </motion.p>

        {/* Expertise + Why Trust */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
              <Zap className="w-7 h-7" /> What We Build
            </h3>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="font-medium"><strong>Responsive Websites</strong> – Pixel-perfect on every device</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="font-medium"><strong>Custom CMS & Dashboards</strong> – You control, we empower</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="font-medium"><strong>API Integrations</strong> – Stripe, CRM, AI, and more</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="font-medium"><strong>Micro-interactions</strong> – Delight users, boost engagement</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
              <Rocket className="w-7 h-7" /> Why Clients Trust Us
            </h3>
            <p className="text-gray-800 leading-relaxed mb-4 font-medium">
              We’re not freelancers. We’re <strong>your technical co-founder</strong>.
            </p>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <strong className="font-semibold">100% On-Time Delivery</strong>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <strong className="font-semibold">90-Day Bug-Free Guarantee</strong>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <strong className="font-semibold">SEO & Core Web Vitals Optimized</strong>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Powered by Modern Tech</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'Vercel'].map((tech) => (
              <div key={tech} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-black rounded-xl mb-2 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium">{tech}</span>
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
          <h3 className="text-2xl font-bold mb-4">Real Result: SaaS Dashboard</h3>
          <p className="text-gray-800 mb-4 font-medium">
            <strong>Client:</strong> FinTech startup | <strong>Goal:</strong> Reduce churn
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold">87%</p>
              <p className="text-sm font-medium">User Retention</p>
            </div>
            <div>
              <p className="text-3xl font-bold">2.1s to 0.8s</p>
              <p className="text-sm font-medium">Load Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold">+340%</p>
              <p className="text-sm font-medium">Feature Adoption</p>
            </div>
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Our Proven Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Discovery', desc: 'We learn your goals, users, KPIs' },
              { step: '2', title: 'Design', desc: 'Wireframes to High-fidelity to Approval' },
              { step: '3', title: 'Develop', desc: 'Clean, modular, future-proof code' },
              { step: '4', title: 'Launch & Grow', desc: 'Deploy, monitor, iterate' },
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
          <h3 className="text-2xl font-bold mb-3">Our Promise</h3>
          <p className="text-gray-800 max-w-2xl mx-auto font-medium">
            Your site will load in <strong>under 1 second</strong>, score <strong>95+ on Lighthouse</strong>, and be <strong>fully responsive</strong>.  
            If not — <strong>we fix it for free</strong>.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Got Questions?</h3>
          {[
            { q: 'How long does a website take?', a: '4–8 weeks. MVP in 2 weeks.' },
            { q: 'Do you provide hosting?', a: 'Yes — Vercel, AWS, or your choice. Fully managed.' },
            { q: 'Will my site rank on Google?', a: 'Yes. We bake SEO into every build.' },
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
          <h3 className="text-3xl font-bold mb-4">Ready to Launch Your Next Big Thing?</h3>
          <p className="text-gray-800 mb-8 max-w-2xl mx-auto font-medium">
            Let’s turn your vision into a high-performing, revenue-generating website.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Start Your Project
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Smooth Chevron Rotate */}
      <style jsx>{`
        details[open] summary > svg {
          transform: rotate(90deg);
        }
      `}</style>
    </motion.div>
  );
}