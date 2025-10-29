"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

const SEOServicePage = () => {
  return (
    <section className="relative w-full min-h-screen py-20 text-white" style={{ backgroundColor: "#0B1623" }}>
      <div className="container mx-auto px-6 lg:px-20 space-y-16">

        {/* Page Title */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              SEO & Website Optimization
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Improve your online visibility, attract more traffic, and increase conversions with our comprehensive SEO and website optimization services.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">

          {/* Our SEO Services */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">Comprehensive SEO Services</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our SEO services are designed to improve your website's search engine rankings, enhance user experience, and drive measurable business results.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>On-page SEO Optimization</li>
              <li>Technical SEO & Website Audits</li>
              <li>Performance & Speed Optimization</li>
              <li>Mobile Optimization & Core Web Vitals</li>
              <li>Keyword Strategy & Link Building</li>
              <li>Analytics, Reporting & Continuous Improvement</li>
            </ul>
          </motion.div>

          {/* Why SEO Matters */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">Why SEO Matters</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              SEO is critical to increasing organic traffic and generating leads. Optimized websites rank higher, attract relevant visitors, and deliver a better user experience. Our strategies help businesses dominate search results and outperform competitors.
            </p>
          </motion.div>

          {/* Our SEO Process */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">Our SEO Process</h2>
            <ol className="list-decimal list-inside text-gray-400 space-y-2">
              <li>Website Audit & Performance Analysis</li>
              <li>Keyword Research & Competitor Analysis</li>
              <li>On-page & Technical Optimization</li>
              <li>Content Optimization & Creation</li>
              <li>Link Building & Off-page SEO</li>
              <li>Monitoring, Reporting & Continuous Improvement</li>
            </ol>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeUp} className="text-center mt-12">
            <p className="text-gray-300 text-lg md:text-xl mb-6">
              Ready to boost your search engine rankings and drive more traffic? Partner with us for professional SEO and website optimization services.
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

export default SEOServicePage;
