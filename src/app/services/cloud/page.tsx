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
  Cpu,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// 📊 Mock data for graphs
const costData = [
  { month: 'Jan', cost: 12000 },
  { month: 'Feb', cost: 9800 },
  { month: 'Mar', cost: 7600 },
  { month: 'Apr', cost: 5400 },
  { month: 'May', cost: 3900 },
  { month: 'Jun', cost: 3700 },
];

const uptimeData = [
  { week: 'W1', uptime: 98.4 },
  { week: 'W2', uptime: 99.1 },
  { week: 'W3', uptime: 99.7 },
  { week: 'W4', uptime: 99.98 },
];

export default function CloudSolutions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="min-h-screen bg-[#fefefe] text-black px-6 md:px-16 py-24 relative overflow-hidden font-[Inter]"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#f2f2f2_1px,transparent_1px),linear-gradient(#f2f2f2_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      <div className="relative max-w-7xl mx-auto space-y-24">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6">
            Scalable <span className="text-gray-400">Cloud Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            We architect, deploy, and optimize cloud infrastructures that
            <strong> scale globally, run 24/7, and cut costs by up to 50%</strong>.
          </p>
        </motion.section>

        {/* SECTION 1 - WHAT WE DO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Cloud Architecture. The Smart Way.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              From initial cloud migration to full-scale infrastructure automation, we engineer
              robust, low-latency systems designed for scalability, security, and speed.
            </p>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5" /> AWS, Azure & GCP Experts
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5" /> DevOps + CI/CD Pipeline Automation
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5" /> 24/7 Monitoring & Auto Healing
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5" /> Multi-region Redundancy
              </li>
            </ul>
          </div>

          {/* Live Graph Mockup */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
              💸 Cost Optimization Over Time
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={costData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cost" stroke="#000000" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.section>

        {/* SECTION 2 - PERFORMANCE & RELIABILITY */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Graph */}
          <div className="bg-black text-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center">
              ⚙️  Uptime Performance (Last 4 Weeks)
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={uptimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="week" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line type="monotone" dataKey="uptime" stroke="#ffffff" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Performance That Never Sleeps</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our intelligent scaling systems and global CDNs ensure 99.99% uptime, sub-second
              load times, and always-on performance — no matter where your users are.
            </p>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-3">
                <Shield className="w-5 h-5" /> End-to-End Encryption
              </li>
              <li className="flex items-center gap-3">
                <Cpu className="w-5 h-5" /> High Availability Infrastructure
              </li>
              <li className="flex items-center gap-3">
                <Zap className="w-5 h-5" /> Auto-Scaling + Load Balancing
              </li>
            </ul>
          </div>
        </motion.section>

        {/* SECTION 3 - CASE STUDY */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-50 border border-gray-200 rounded-3xl p-10 shadow-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Case Study: FinTech Cloud Migration</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            A FinTech client moved from on-premise to AWS — achieving <strong>62% cost reduction</strong>,  
            <strong> 99.99% uptime</strong>, and <strong>global user access in under 200ms</strong>.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-black">62%</p>
              <p className="text-gray-600">Cost Savings</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black">99.99%</p>
              <p className="text-gray-600">Uptime</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black">200ms</p>
              <p className="text-gray-600">Global Latency</p>
            </div>
          </div>
        </motion.section>

        {/* SECTION 4 - CLOUD PROVIDERS */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-10">We Speak All Clouds</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
            {[
              { name: 'AWS', icon: <Server className="w-8 h-8" /> },
              { name: 'Azure', icon: <Globe className="w-8 h-8" /> },
              { name: 'GCP', icon: <Zap className="w-8 h-8" /> },
              { name: 'Cloudflare', icon: <Shield className="w-8 h-8" /> },
              { name: 'DigitalOcean', icon: <Cloud className="w-8 h-8" /> },
              { name: 'Vercel', icon: <Activity className="w-8 h-8" /> },
            ].map((cloud) => (
              <div
                key={cloud.name}
                className="flex flex-col items-center p-4 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition"
              >
                <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-xl mb-3">
                  {cloud.icon}
                </div>
                <span className="font-semibold">{cloud.name}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 5 - CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center border-t border-gray-200 pt-20"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Scale Without Limits?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Let’s build a cloud ecosystem that grows, adapts, and saves — while you focus on innovation.
          </p>
          <a
            href="/ContactForm"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Launch Your Cloud
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.section>
      </div>
    </motion.div>
  );
}
