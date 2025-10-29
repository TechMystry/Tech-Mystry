"use client";

import React, { useState } from "react";
import { FaDesktop, FaMobileAlt, FaCloud, FaSearch } from "react-icons/fa";
import Link from "next/link";

const tabData = [
  {
    id: "web",
    label: "Web Development",
    icon: <FaDesktop />,
    content: [
      "Custom Web Design & Development",
      "High-performance web applications",
      "SEO-friendly Architecture",
      "Responsive, mobile-first websites",
      "E-commerce Integration",
      "Content Management Systems (CMS)",
    ],
    description:
      "We create stunning, responsive websites using the latest technologies to ensure a seamless user experience on any device.",
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: <FaMobileAlt />,
    content: [
      "Native iOS & Android Development",
      "Cross-platform with Flutter & React Native",
      "Custom UI/UX Design",
      "App Store Optimization (ASO)",
      "API & Cloud Integration",
      "Push Notifications & Analytics",
    ],
    description:
      "High-performance mobile applications for both iOS and Android platforms, built for scale and performance.",
  },
  {
    id: "cloud",
    label: "Cloud Solutions",
    icon: <FaCloud />,
    content: [
      "Cloud Infrastructure (AWS, Azure, GCP)",
      "Serverless Architecture",
      "Load Balancing & Auto-scaling",
      "Cloud Backups & Monitoring",
      "Enterprise Security Protocols",
      "CI/CD Pipeline Integration",
    ],
    description:
      "Scalable cloud architecture & DevOps services that ensure your systems stay online, secure, and efficient.",
  },
  {
    id: "seo",
    label: "SEO & Optimization",
    icon: <FaSearch />,
    content: [
      "On-page SEO Optimization",
      "Technical SEO & Audits",
      "Performance & Speed Enhancements",
      "Mobile & Core Web Vitals",
      "Analytics Reporting",
      "Keyword Strategy & Link Building",
    ],
    description:
      "Boost your visibility and performance with proven SEO and website optimization techniques.",
  },
];

const TabbedServices = () => {
  const [activeTab, setActiveTab] = useState("web");
  const activeData = tabData.find((tab) => tab.id === activeTab)!;

  return (
    <section
      className="py-20 px-6 lg:px-24 text-white relative overflow-hidden bg-black"
      
    >
      <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-5xl font-extrabold mb-4">
          <span className="block">Our Expertise in</span>
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent animate-gradient-x">
            Every Platform
          </span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Tap into TechMystry's experience across key development disciplines.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-10 relative z-10">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 
              ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-slate-800/60"
              }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-center items-center relative z-10">
        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl shadow-lg backdrop-blur-sm overflow-hidden max-w-4xl w-full mx-auto">
          
          <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700 bg-slate-900/60 rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <div className="text-gray-400 font-semibold text-sm">TechMystry</div>
          </div>

          <div className="px-8 py-10 rounded-b-2xl">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">
              {activeData.label}
            </h3>

            <p className="text-gray-300 mb-6">{activeData.description}</p>

            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-6">
              {activeData.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* ✅ Updated clickable element */}
            <div className="text-right">
              <Link href={`/services/${activeData.id}`}>
                <button className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-full transition-all shadow-md hover:shadow-emerald-400/30">
                  Read More
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Gradient Animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default TabbedServices;
