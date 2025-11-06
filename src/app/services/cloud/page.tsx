'use client';

import { motion } from 'framer-motion';
import {
  Cloud,
  Shield,
  Zap,
  Globe,
  Lock,
  ArrowRight,
  Check,
  Star,
  ChevronRight,
  Server,
  Activity,
} from 'lucide-react';

export default function CloudSolutions() {
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
            Cloud That Never Sleeps
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Secure, scalable, cost-optimized infrastructure that grows with your business.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-800 max-w-4xl mx-auto"
        >
          From <strong>startup MVPs</strong> to <strong>enterprise systems</strong>, we design <strong>AWS, Azure, GCP</strong> architectures that run <strong>24/7 and save 30–50% on costs</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
              <Cloud className="w-7 h-7" /> What We Deliver
            </h3>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span><strong>Cloud Architecture</strong> – Scalable, zero-downtime</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span><strong>Security & Compliance</strong> – SOC 2, GDPR, encryption</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span><strong>CI/CD + DevOps</strong> – Automate deploy, test, scale</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span><strong>Cost Optimization</strong> – Save 30–50% on bills</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
              <Shield className="w-7 h-7" /> Why Trust Us
            </h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <strong>99.99% Uptime SLA</strong>
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                <strong>End-to-End Encryption</strong>
              </li>
              <li className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                <strong>24/7 Monitoring + Alerting</strong>
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
          <h3 className="text-2xl font-bold mb-6 text-center">We Speak All Clouds</h3>
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { name: 'AWS', icon: <Server className="w-8 h-8" /> },
              { name: 'Azure', icon: <Globe className="w-8 h-8" /> },
              { name: 'GCP', icon: <Zap className="w-8 h-8" /> },
            ].map((cloud) => (
              <div key={cloud.name} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-black rounded-xl mb-3 flex items-center justify-center text-white">
                  {cloud.icon}
                </div>
                <span className="text-lg font-semibold">{cloud.name}</span>
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
          <h3 className="text-2xl font-bold mb-4">Case: E-Commerce Platform</h3>
          <p className="text-gray-800 mb-4">
            <strong>Challenge:</strong> 5s load time, $12k/month AWS bill
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold">4.8s → 0.9s</p>
              <p className="text-sm text-gray-600">Page Load</p>
            </div>
            <div>
              <p className="text-3xl font-bold">$12k → $3.8k</p>
              <p className="text-sm text-gray-600">Monthly Cost</p>
            </div>
            <div>
              <p className="text-3xl font-bold">+290%</p>
              <p className="text-sm text-gray-600">Conversion Rate</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Our Cloud Journey</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Assess', desc: 'Audit current setup & goals' },
              { step: '2', title: 'Design', desc: 'Build scalable architecture' },
              { step: '3', title: 'Migrate', desc: 'Zero-downtime transition' },
              { step: '4', title: 'Optimize', desc: 'Monitor, scale, save' },
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
          <h3 className="text-2xl font-bold mb-3">Our Cloud Promise</h3>
          <p className="text-gray-800 max-w-2xl mx-auto">
            <strong>99.99% uptime</strong>, <strong>encrypted by default</strong>, and <strong>30%+ cost savings</strong>.  
            If we fail — <strong>your next month is free</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Common Questions</h3>
          {[
            { q: 'Can you migrate my app?', a: 'Yes — 50+ apps migrated with zero downtime.' },
            { q: 'Do you manage backups?', a: 'Automated daily + disaster recovery included.' },
            { q: 'What about compliance?', a: 'SOC 2, HIPAA, GDPR — we handle it all.' },
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
          <h3 className="text-3xl font-bold mb-4">Ready to Scale Without Limits?</h3>
          <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
            Let’s move your business to a cloud that grows with you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Launch Your Cloud
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