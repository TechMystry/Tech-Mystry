"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  Variants,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Globe, Smartphone, Cloud, Search, Code2 } from "lucide-react";

// Fade animation for sidebar buttons
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 45,
      damping: 16,
      delay: 0.2 + i * 0.1,
    },
  }),
};

// Services data (improved & expanded)
const services = [
  {
    title: "Web Development",
    desc: "Transforming your digital presence with intelligent, fast, and visually stunning web experiences.",
    icon: Globe,
    type: "web",
    points: [
      "Tailored Web Solutions built around your brand and audience.",
      "High-performance Web Applications optimized for speed and scalability.",
      "Conversion-focused UI/UX design that drives engagement and retention.",
      "SEO-first architecture ensuring visibility and organic growth.",
      "Progressive Web Apps (PWAs) that feel native, load instantly, and work offline.",
      "Maintenance & ongoing optimization to keep your platform future-ready.",
    ],
  },
  {
    title: "App Development",
    desc: "Crafting sleek, high-performance mobile experiences that captivate users and elevate your brand.",
    icon: Smartphone,
    type: "app",
    points: [
      "Native-quality apps using React Native & Flutter for iOS and Android.",
      "Pixel-perfect UI and buttery-smooth transitions for delightful usability.",
      "Offline-first design ensuring reliability even without connectivity.",
      "Real-time sync and API integration for seamless user journeys.",
      "Optimized for App Store and Play Store visibility with best practices.",
      "Secure architecture and analytics integration for measurable growth.",
    ],
  },
  {
    title: "Cloud Solutions",
    desc: "Empowering scalability, security, and automation through next-gen cloud architecture.",
    icon: Cloud,
    type: "cloud",
    points: [
      "Cloud-native design leveraging AWS, Azure, and GCP best practices.",
      "Serverless computing and microservices for flexible, cost-efficient scaling.",
      "DevOps pipelines with automated CI/CD for faster deployments.",
      "Data backups, monitoring, and resilience strategies for zero downtime.",
      "Performance analytics and optimization to reduce latency and cost.",
      "Multi-environment cloud management with real-time scaling and alerts.",
    ],
  },
  {
    title: "SEO Optimization",
    desc: "Turning search engines into your brand’s best marketers through precision-driven SEO strategies.",
    icon: Search,
    type: "seo",
    points: [
      "Deep keyword research and market analysis for your target audience.",
      "On-page optimization — meta tags, schema, headings, and clean structure.",
      "Technical SEO audits and Core Web Vitals performance enhancement.",
      "Strategic content mapping designed to convert visitors into leads.",
      "Backlink and domain authority growth through ethical outreach.",
      "Comprehensive analytics reporting for actionable insights and ROI tracking.",
    ],
  },
  {
    title: "Full Stack Engineering",
    desc: "Seamlessly integrating powerful backends with cutting-edge frontends — built for performance and scale.",
    icon: Code2,
    type: "fullstack",
    points: [
      "Frontend excellence with React, Next.js, and TypeScript.",
      "Scalable backends using Node.js, Express, and modern APIs.",
      "Optimized database design with MongoDB, PostgreSQL, or MySQL.",
      "Authentication, role management, and secure API communication.",
      "Integrated DevOps workflows for fast, reliable releases.",
      "End-to-end development — from design to deployment and beyond.",
    ],
  },
];

const ExpertiseSection = () => {
  const headingControls = useAnimation();
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  const [selected, setSelected] = useState(0);
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true });
  const [showIntro, setShowIntro] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Cinematic heading animation (slowed down)
  useEffect(() => {
    const animateHeading = async () => {
      await headingControls.start({
        opacity: 1,
        scale: 1.2,
        y: -20,
        filter: "blur(0px)",
        transition: { duration: 2, ease: "easeOut" },
      });
      await headingControls.start({
        scale: 1,
        y: -40,
        transition: { duration: 1.8, ease: "easeInOut" },
      });
    };
    if (isInView) animateHeading();
  }, [isInView, headingControls]);

  // First-visit overlay intro
  useEffect(() => {
    if (sectionInView) {
      setShowIntro(true);
      const t = setTimeout(() => {
        setShowIntro(false);
        setTimeout(() => setShowContent(true), 1000);
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [sectionInView]);

  const service = services[selected];

  return (
    <motion.section
      ref={sectionRef}
      id="expertise"
      className="relative w-full min-h-screen bg-[#f9f9f9] text-gray-900 flex flex-col items-center justify-center overflow-hidden py-8 md:py-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Intro overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="absolute inset-0 z-30 flex items-center justify-center bg-[#f9f9f9]"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight text-center"
              >
                Our Expertise
              </motion.h2>

              {/* Light sweep */}
              <motion.div
                aria-hidden
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 -skew-x-6"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle floating glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-[420px] h-[420px] bg-neutral-400/10 rounded-full blur-3xl"
        animate={{ x: [0, 15, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Cinematic Heading (after intro) */}
      {!showIntro && (
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, scale: 0.9, y: 60, filter: "blur(12px)" }}
          animate={headingControls}
          className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight text-center leading-tight"
        >
          Our Expertise
        </motion.h2>
      )}

      {/* Show cards + sidebar only after intro finishes */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          {/* Small heading before cards */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-gray-600 text-base font-medium text-center"
          >
            <div className="text-extra-bold uppercase tracking-widest text-gray-1000 mb-1">
              / Explore Our Services /
            </div>
          </motion.h3>

          {/* Layout */}
          <div className="mt-6 flex flex-col lg:flex-row max-w-6xl w-full px-4 lg:px-8 gap-4 items-start">
            {/* Mobile icon row selector */}
            <div className="w-full lg:hidden">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = selected === i;
                  return (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelected(i)}
                      aria-label={s.title}
                      className={`min-w-[72px] flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "bg-gray-900 text-white border-gray-900 shadow-md"
                          : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <span
                        className={`p-2 rounded-lg ${
                          isActive ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-[11px] font-semibold text-center whitespace-nowrap">
                        {s.title.split(" ")[0]}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Sidebar (desktop only) */}
            <div className="hidden lg:flex flex-col gap-2 lg:w-1/3">
              {services.map((s, i) => {
                const Icon = s.icon;
                const isActive = selected === i;
                return (
                  <motion.button
                    key={i}
                    custom={i}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => setSelected(i)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-500 ${
                      isActive
                        ? "bg-gray-900 text-white border-gray-900 shadow-xl"
                        : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-left">
                      <div
                        className={`p-2 rounded-lg ${
                          isActive
                            ? "bg-gray-800 text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs md:text-sm font-semibold">
                        {s.title}
                      </h3>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Dynamic Right Panel */}
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", duration: 0.7, ease: "easeInOut" }}
              className="lg:w-2/3 relative bg-white border border-gray-200 rounded-2xl shadow-lg p-6 overflow-hidden min-h-[300px]"
            >
              {/* === Card Types === */}
              {service.type === "web" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl"
                >
                  {/* === Browser Header === */}
                  <div className="flex items-center gap-2 px-3 py-1.5 border-b border-gray-200 bg-gray-50">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                    <span className="ml-3 text-xs text-gray-500 font-medium">
                      www.techmystryweb.com
                    </span>
                  </div>

                  {/* === Browser Content === */}
                  <div className="p-4 bg-gradient-to-br from-white via-gray-50 to-gray-100">
                    {/* === Simulated Website Header === */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="flex justify-between items-center border-b border-gray-200 pb-2 mb-3"
                    >
                      <h3 className="text-base font-semibold text-gray-900">
                        TechMystry Studio
                      </h3>
                      <div className="flex gap-3 text-xs text-gray-500 font-medium">
                        <span className="hover:text-gray-700 transition">Home</span>
                        <span className="hover:text-gray-700 transition">Services</span>
                        <span className="hover:text-gray-700 transition">Contact</span>
                      </div>
                    </motion.div>

                    {/* === Hero Mock Section === */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <div className="md:w-1/2 text-left">
                        <motion.h4
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className="text-xl font-bold text-gray-900 mb-2"
                        >
                          Exceptional Web Experiences
                        </motion.h4>

                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                          className="text-gray-600 text-xs leading-relaxed mb-4"
                        >
                          We build sleek, high-performing websites that combine aesthetics with
                          powerful functionality — designed to captivate and convert.
                        </motion.p>

                        <ul className="space-y-1 text-gray-600 text-xs">
                          {service.points.map((p, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + idx * 0.15 }}
                              className="flex items-start gap-1"
                            >
                              <span className="text-gray-400 mt-[2px]">▸</span> {p}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* === Mock Webpage Preview === */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="md:w-1/2 bg-white rounded-xl border border-gray-200 p-3 shadow-md hover:shadow-lg transition"
                      >
                        <div className="h-20 w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg mb-2" />
                        <div className="space-y-1.5">
                          <div className="h-2 w-3/4 bg-gray-200 rounded-full" />
                          <div className="h-2 w-2/3 bg-gray-200 rounded-full" />
                          <div className="h-2 w-1/2 bg-gray-200 rounded-full" />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* === Subtle Bottom Glow === */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                </motion.div>
              )}

              {service.type === "app" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center items-center"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-2 shadow-2xl border-[2px] border-gray-950 w-[200px] h-[400px] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-3 bg-black rounded-b-xl z-20" />

                    {/* Inner phone screen */}
                    <div className="bg-white rounded-[1.5rem] w-full h-full overflow-hidden shadow-inner relative">
                      {/* App header */}
                      <div className="bg-gray-900 text-white px-3 py-2 flex items-center justify-between">
                        <span className="font-semibold text-xs">TechMystry App</span>
                        <div className="flex gap-1">
                          <span className="w-1 h-1 bg-white rounded-full opacity-70" />
                          <span className="w-1 h-1 bg-white rounded-full opacity-50" />
                          <span className="w-1 h-1 bg-white rounded-full opacity-30" />
                        </div>
                      </div>

                      {/* Hero image section */}
                      <div className="h-20 bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center text-white text-sm font-semibold">
                        Welcome Back
                      </div>

                      {/* App content */}
                      <div className="p-3 flex flex-col gap-3">
                        {/* Small stats cards */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-100 rounded-lg p-2 shadow-sm">
                            <p className="text-[10px] text-gray-500 mb-1">Projects</p>
                            <p className="text-sm font-bold text-gray-900">12</p>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-2 shadow-sm">
                            <p className="text-[10px] text-gray-500 mb-1">Clients</p>
                            <p className="text-sm font-bold text-gray-900">8</p>
                          </div>
                        </div>

                        {/* Recent Activity Card */}
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 shadow-sm">
                          <p className="text-xs font-semibold text-gray-900 mb-1">
                            Recent Activity
                          </p>
                          <ul className="space-y-1 text-[10px] text-gray-600">
                            <li>• New project “Fintech UI” added</li>
                            <li>• Meeting scheduled with CloudX</li>
                            <li>• Deployment pushed to live server</li>
                          </ul>
                        </div>

                        {/* CTA Button */}
                        <button className="mt-auto bg-gray-900 text-white rounded-lg py-1.5 font-semibold text-xs shadow-md hover:bg-gray-800 transition-all duration-300">
                          View Dashboard
                        </button>
                      </div>

                      {/* Bottom nav bar */}
                      <div className="absolute bottom-0 left-0 w-full bg-gray-100 border-t border-gray-200 flex justify-around py-1.5 text-gray-500 text-[10px]">
                        <div className="flex flex-col items-center gap-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w,w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 12l2-2m0 0l7-7 7 7M13 5v14"
                            />
                          </svg>
                          <span className="text-[8px]">Home</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3"
                            />
                          </svg>
                          <span className="text-[8px]">Activity</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5.121 17.804A9 9 0 1118.364 4.56a9 9 0 01-13.243 13.243z"
                            />
                          </svg>
                          <span className="text-[8px]">Profile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {service.type === "cloud" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow-xl overflow-hidden mt-4"
                >
                  {/* Floating animated clouds (background visuals) */}
                  <motion.div
                    className="absolute top-8 right-4 w-24 h-10 bg-white/50 blur-2xl rounded-full"
                    animate={{ x: [0, -50, 0] }}
                    transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
                  />

                  {/* Cloud Dashboard Header */}
                  <div className="bg-gray-900 text-white px-4 py-2 flex items-center justify-between border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 15a4 4 0 014-4h10a4 4 0 010 8H7a4 4 0 01-4-4z"
                        />
                      </svg>
                      <span className="font-semibold text-xs tracking-wide">
                        TechMystry Cloud Manager
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-400">Status: <span className="text-green-400 font-medium">Active</span></span>
                  </div>

                  {/* Main Dashboard Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 relative z-10">
                    {/* Cloud Nodes */}
                    <motion.div
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm flex flex-col items-center"
                    >
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6l4 2"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800 text-xs">Frontend Server</h4>
                      <p className="text-gray-500 text-[10px] mb-1">{service.points[0]}</p>
                      <span className="px-2 py-0.5 text-[10px] bg-green-100 text-green-600 rounded-full font-medium">
                        Online
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm flex flex-col items-center"
                    >
                      <div className="w-8 h-8 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800 text-xs">Backend Services</h4>
                      <p className="text-gray-500 text-[10px] mb-1">{service.points[1]}</p>
                      <span className="px-2 py-0.5 text-[10px] bg-yellow-100 text-yellow-700 rounded-full font-medium">
                        Deploying...
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm flex flex-col items-center"
                    >
                      <div className="w-8 h-8 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800 text-xs">Database Node</h4>
                      <p className="text-gray-500 text-[10px] mb-1">{service.points[2]}</p>
                      <span className="px-2 py-0.5 text-[10px] bg-blue-100 text-blue-700 rounded-full font-medium">
                        Replicating
                      </span>
                    </motion.div>
                  </div>

                  {/* Status Footer */}
                  <div className="bg-gray-900 text-gray-300 text-[10px] flex items-center justify-between px-4 py-1.5 border-t border-gray-800">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <span>Connected to Hostinger Cloud</span>
                    </div>
                    <span>Last Sync: 2m ago</span>
                  </div>
                </motion.div>
              )}

              {service.type === "seo" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative mt-4 bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-xl overflow-hidden"
                >
                  {/* Dashboard Header */}
                  <div className="bg-gray-900 text-white px-4 py-2 flex items-center justify-between border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 3a1 1 0 011 1v16a1 1 0 01-2 0V4a1 1 0 011-1zm7 4a1 1 0 011 1v9a1 1 0 01-2 0V8a1 1 0 011-1zm-14 6a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z"
                        />
                      </svg>
                      <span className="font-semibold text-xs tracking-wide">
                        SEO Performance Overview
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-400">Updated: 2 hrs ago</span>
                  </div>

                  {/* Chart Section */}
                  <div className="p-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-inner">
                      <div className="flex items-end gap-2 h-36 overflow-hidden">
                        {[30, 50, 90, 70, 110, 140, 100].map((h, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-t-lg bg-gradient-to-t from-indigo-500 via-indigo-400 to-indigo-300 shadow-md"
                            initial={{ height: 0 }}
                            animate={{ height: h }}
                            transition={{ delay: i * 0.08, duration: 0.6, type: "spring" }}
                          />
                        ))}
                      </div>
                      <p className="text-center mt-2 text-xs text-gray-600 font-medium">
                        Organic Traffic — Steady Growth Over Time
                      </p>
                    </div>
                  </div>

                  {/* Analytics Summary */}
                  <div className="grid grid-cols-3 gap-3 px-4 pb-4">
                    {[
                      { title: "Impressions", value: "84.2K", change: "+12%" },
                      { title: "CTR", value: "3.9%", change: "+0.7%" },
                      { title: "Avg. Position", value: "#8.4", change: "↑1.2" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="bg-white border border-gray-200 rounded-lg py-2 px-3 text-center shadow-sm hover:shadow-md transition"
                      >
                        <h4 className="text-gray-500 text-[10px] uppercase tracking-wide">
                          {stat.title}
                        </h4>
                        <p className="text-gray-900 font-bold text-sm">{stat.value}</p>
                        <p
                          className={`text-[10px] font-medium ${
                            stat.change.startsWith("+") || stat.change.startsWith("↑")
                              ? "text-green-600"
                              : "text-red-500"
                          }`}
                        >
                          {stat.change}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="bg-gray-900 text-gray-400 text-[10px] flex items-center justify-center py-1.5 border-t border-gray-800">
                    <span>Analyzed by TechMystry SEO Engine</span>
                  </div>
                </motion.div>
              )}

              {service.type === "fullstack" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-[#0d0d0f] border border-gray-800 rounded-2xl p-4 text-gray-200 font-mono shadow-lg overflow-hidden"
                >
                  {/* === Header Bar (like VS Code / Terminal) === */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="ml-2 text-[10px] text-gray-400">dev@techmystry:~</span>
                  </div>

                  {/* === Console Output === */}
                  <div className="bg-[#0f0f12] border border-gray-800 rounded-lg p-3 shadow-inner h-auto min-h-[140px] relative overflow-hidden">
                    <pre className="text-xs whitespace-pre-wrap leading-relaxed">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400"
                      >
                        {`> Initializing Full Stack Environment...`}
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="block text-blue-400"
                      >
                        {`> Connecting Frontend ↔ Backend`}
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="block text-indigo-400"
                      >
                        {`> Integrating Secure API Systems...`}
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="block text-gray-300"
                      >
                        {`> Running Build & Optimization`}
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        className="block text-emerald-400"
                      >
                        {`> Deployment Pipeline Active ✔`}
                      </motion.span>
                    </pre>

                    {/* Animated Cursor */}
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute bottom-3 left-3 text-white"
                    >
                      ▋
                    </motion.span>
                  </div>

                  {/* === Feature List Below === */}
                  <ul className="mt-4 space-y-1 text-xs text-gray-400">
                    {service.points.map((p, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6 + idx * 0.2 }}
                        className="flex items-start gap-1"
                      >
                        <span className="text-gray-600 mt-[2px]">▸</span> {p}
                      </motion.li>
                    ))}
                  </ul>

                  {/* === Bottom Glow === */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default ExpertiseSection;