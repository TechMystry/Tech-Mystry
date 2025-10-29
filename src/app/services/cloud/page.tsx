"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

const CloudServicePage = () => {
  return (
    <section className="relative w-full min-h-screen py-20 text-white" style={{ backgroundColor: "#0B1623" }}>
      <div className="container mx-auto px-6 lg:px-20 space-y-16">

        {/* Page Title */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Cloud Solutions
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Leverage the power of the cloud to scale your business. We provide secure, reliable, and cost-effective cloud infrastructure and DevOps solutions tailored to your organization.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">

          {/* What We Offer */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">Our Cloud Services</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We provide end-to-end cloud solutions including architecture design, migration, deployment, and ongoing management. Our solutions improve scalability, security, and operational efficiency.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Cloud Infrastructure Setup (AWS, Azure, GCP)</li>
              <li>Serverless Architecture & Microservices</li>
              <li>Load Balancing, Auto-scaling & High Availability</li>
              <li>Continuous Integration / Continuous Deployment (CI/CD)</li>
              <li>Monitoring, Backups, and Disaster Recovery</li>
              <li>Enterprise Security & Compliance</li>
            </ul>
          </motion.div>

          {/* Benefits of Cloud Solutions */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">Why Cloud Solutions Matter</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Cloud infrastructure allows businesses to operate efficiently, scale on demand, and reduce operational costs. It ensures your systems are secure, reliable, and always available to your clients.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Scalable and flexible infrastructure to handle growing workloads.</li>
              <li>Enhanced data security and compliance.</li>
              <li>Reduced operational costs with pay-as-you-go services.</li>
              <li>Rapid deployment and faster time-to-market.</li>
            </ul>
          </motion.div>

          {/* Our Process */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">Our Cloud Implementation Process</h2>
            <ol className="list-decimal list-inside text-gray-400 space-y-2">
              <li>Requirement Analysis & Cloud Strategy Planning</li>
              <li>Architecture Design & Security Planning</li>
              <li>Migration & Deployment</li>
              <li>Performance Monitoring & Optimization</li>
              <li>Disaster Recovery & Backup Setup</li>
              <li>Ongoing Management & Support</li>
            </ol>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeUp} className="text-center mt-12">
            <p className="text-gray-300 text-lg md:text-xl mb-6">
              Ready to leverage cloud technology to scale your business securely and efficiently? Let’s create a cloud infrastructure tailored to your needs.
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

export default CloudServicePage;
