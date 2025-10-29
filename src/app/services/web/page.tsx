"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

const WebServicePage = () => {
  return (
    <section className="relative w-full min-h-screen py-20 text-white" style={{ backgroundColor: "#0B1623" }}>
      <div className="container mx-auto px-6 lg:px-20 space-y-16">

        {/* Page Title */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Web Development Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            We provide end-to-end web development solutions that transform ideas into functional, high-performing websites and applications. From startups to enterprises, we deliver scalable, secure, and SEO-optimized websites tailored to your business needs.
          </p>
        </motion.div>

        {/* Detailed Sections */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">

          {/* What We Offer */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">What We Offer</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our web development services cover everything from responsive front-end interfaces to robust back-end systems. We create websites that are visually appealing, intuitive to navigate, and fully optimized for performance and SEO.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Custom Website Design & Development</li>
              <li>High-performance Web Applications</li>
              <li>SEO-friendly Architecture & On-page Optimization</li>
              <li>Responsive, Mobile-first Websites</li>
              <li>E-commerce & CMS Integration</li>
              <li>Progressive Web Applications (PWA)</li>
            </ul>
          </motion.div>

          {/* Why Web Development Matters */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">Why Web Development Matters for Your Business</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A website is often the first interaction your customers have with your brand. A well-built, fast, and responsive website increases user trust, engagement, and conversion rates. Our focus is on creating websites that not only look great but also perform exceptionally well on all devices.
            </p>
          </motion.div>

          {/* Our Process */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">Our Web Development Process</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We follow a structured approach to ensure every project is delivered on time, within budget, and exceeds expectations:
            </p>
            <ol className="list-decimal list-inside text-gray-400 space-y-2">
              <li>Consultation & Requirement Analysis</li>
              <li>UI/UX Design & Prototyping</li>
              <li>Front-end and Back-end Development</li>
              <li>SEO & Performance Optimization</li>
              <li>Testing, QA & Launch</li>
              <li>Ongoing Support & Maintenance</li>
            </ol>
          </motion.div>

          {/* Benefits for Clients */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">Benefits for Your Business</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Enhanced brand credibility with professional design.</li>
              <li>Improved search engine visibility with SEO-friendly websites.</li>
              <li>Increased conversion through intuitive navigation and fast performance.</li>
              <li>Future-proof solutions using modern technologies and best practices.</li>
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeUp} className="text-center mt-12">
            <p className="text-gray-300 text-lg md:text-xl mb-6">
              Ready to launch a website that elevates your business? Let’s build something amazing together.
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

export default WebServicePage;
