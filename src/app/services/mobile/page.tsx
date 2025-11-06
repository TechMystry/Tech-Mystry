'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Check,
  Star,
  ChevronRight,
  Code,
  Palette,
  Rocket,
  Activity,
} from 'lucide-react';

export default function MobileApps() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="min-h-screen bg-white text-black px-6 py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#f0f0f0_1px,transparent_1px),linear-gradient(#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      <div className="relative max-w-5xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Mobile Apps That Win Users
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Native & cross-platform apps that load fast, feel native, and grow your business.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-800 max-w-4xl mx-auto"
        >
          We code in <strong>React Native, Flutter, Swift, Kotlin</strong> — and deliver apps that <strong>load in less than 1s, rank in App Stores, and drive real growth</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
              <Smartphone className="w-7 h-7" /> What We Build
            </h3>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span><strong>Native iOS & Android</strong> – Swift, Kotlin</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span><strong>Cross-Platform</strong> – React Native, Flutter</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span><strong>UI/UX Design</strong> – Figma, animations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span><strong>App Store Optimization</strong> – Get discovered</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
              <Rocket className="w-7 h-7" /> Why Mobile Matters
            </h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <strong>4.8+ App Store Rating</strong>
              </li>
              <li className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                <strong>Push + In-App Messaging</strong>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <strong>Offline + Secure</strong>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Built With the Best</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Figma'].map((tech) => (
              <div key={tech} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-black rounded-xl mb-2 flex items-center justify-center">
                  {tech.includes('React') || tech.includes('Flutter') ? (
                    <Code className="w-6 h-6 text-white" />
                  ) : tech.includes('Figma') ? (
                    <Palette className="w-6 h-6 text-white" />
                  ) : (
                    <Smartphone className="w-6 h-6 text-white" />
                  )}
                </div>
                <span className="text-sm text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Case: Fitness App</h3>
          <p className="text-gray-800 mb-4">
            <strong>Goal:</strong> Increase daily active users
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold">+420%</p>
              <p className="text-sm text-gray-600">Daily Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4.9 stars</p>
              <p className="text-sm text-gray-600">App Store Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1.2s</p>
              <p className="text-sm text-gray-600">Avg. Load Time</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">From Idea to App Store</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Ideate', desc: 'Validate idea, define MVP' },
              { step: '2', title: 'Design', desc: 'Wireframes to UI to Prototype' },
              { step: '3', title: 'Build', desc: 'Code, test, refine' },
              { step: '4', title: 'Launch', desc: 'Submit, monitor, update' },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {p.step}
                </div>
                <h4 className="font-semibold mb-1">{p.title}</h4>
                <p className="text-sm text-gray-700">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          className="bg-white border border-gray-300 rounded-2xl p-8 text-center shadow-sm"
        >
          <Shield className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Our Mobile Promise</h3>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Your app will <strong>load in under 1.5s</strong>, work <strong>offline</strong>, and be <strong>App Store ready</strong>.  
            If not — <strong>we fix it free</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Got Questions?</h3>
          {[
            { q: 'How long does an app take?', a: '4–10 weeks. MVP in 3 weeks.' },
            { q: 'Do you publish to stores?', a: 'Yes — we handle Apple & Google submissions.' },
            { q: 'Can you update my old app?', a: 'Absolutely. We modernize legacy code.' },
          ].map((faq, i) => (
            <details key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6 cursor-pointer">
              <summary className="font-semibold text-lg flex justify-between items-center list-none">
                {faq.q}
                <ChevronRight className="w-5 h-5 transition-transform duration-300" />
              </summary>
              <p className="mt-3 text-gray-800">{faq.a}</p>
            </details>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Go Mobile?</h3>
          <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
            Let’s build an app your users will love — and your business will grow from.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Build Your App
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