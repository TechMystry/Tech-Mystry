"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

const MobileServicePage = () => {
  return (
    <section className="relative w-full min-h-screen py-20 text-white" style={{ backgroundColor: "#0B1623" }}>
      <div className="container mx-auto px-6 lg:px-20 space-y-16">

        {/* Page Title */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Mobile App Development
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            We design and develop mobile applications for iOS and Android that are visually stunning, fast, and scalable. Our apps are tailored to deliver excellent user experiences and achieve business goals.
          </p>
        </motion.div>

        {/* Detailed Sections */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">

          {/* What We Offer */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">Our Mobile App Services</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              From concept to launch, we provide end-to-end mobile app solutions using native and cross-platform frameworks to ensure high performance and user satisfaction.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Native iOS & Android App Development</li>
              <li>Cross-platform development with Flutter & React Native</li>
              <li>Custom UI/UX design tailored to your brand</li>
              <li>API and backend integration</li>
              <li>App Store Optimization (ASO)</li>
              <li>Push notifications, analytics, and maintenance</li>
            </ul>
          </motion.div>

          {/* Why Mobile Apps Matter */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">Why Mobile Apps Matter</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Mobile apps help businesses engage customers directly, increase brand loyalty, and provide seamless access to services. With billions of smartphone users globally, a well-designed app is critical for competitive advantage.
            </p>
          </motion.div>

          {/* Our Development Process */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">Our Process</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We follow a structured process to ensure high-quality apps delivered on time:
            </p>
            <ol className="list-decimal list-inside text-gray-400 space-y-2">
              <li>Requirement Analysis & Planning</li>
              <li>Wireframing & Prototyping</li>
              <li>UI/UX Design & Feedback</li>
              <li>Development & Integration</li>
              <li>Testing, QA, and Launch</li>
              <li>Post-launch Support & Updates</li>
            </ol>
          </motion.div>

          {/* Client Benefits */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">Benefits for Your Business</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Enhanced customer engagement through intuitive apps.</li>
              <li>Improved brand loyalty with personalized experiences.</li>
              <li>Seamless integration with existing systems and services.</li>
              <li>Scalable solutions for future growth and updates.</li>
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeUp} className="text-center mt-12">
            <p className="text-gray-300 text-lg md:text-xl mb-6">
              Ready to launch a mobile app that delights users and grows your business? Let’s build it together.
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-emerald-400/30">
              Get Started
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default MobileServicePage;
