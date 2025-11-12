"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: "S01",
    title: "Contact & Discover",
    subtitle:
      "We connect, understand your goals, and align on vision and expectations.",
    desc: [
      "Schedule a quick call to gather requirements, ideas, and expectations.",
      "Clarify target audience, success metrics, timeline, and constraints.",
      "Define scope: website, app, cloud, SEO — or a combination.",
      "Establish communication rhythm and project workflows from day one.",
    ],
    progress: 25,
    image: "/Product.svg",
  },
  {
    id: "S02",
    title: "Research & Proposal",
    subtitle:
      "Deep research and a tailored plan for UI/UX, growth, and delivery.",
    desc: [
      "Audit competition and market; identify growth opportunities.",
      "Propose UI/UX direction and a roadmap for features and scale.",
      "Outline tech stack, architecture, timelines, and investment.",
      "Share how the business can grow and what more can be done.",
    ],
    progress: 50,
    image: "/design.svg",
  },
  {
    id: "S03",
    title: "Build & Optimize",
    subtitle:
      "We develop a fast, secure, and scalable solution across web, app, and cloud.",
    desc: [
      "Implement best-practice frontends and robust backends with modern APIs.",
      "Optimize performance, accessibility, and Core Web Vitals.",
      "Automate CI/CD with testing and secure deployments.",
      "Iterate quickly with your feedback to refine UX and features.",
    ],
    progress: 75,
    image: "/Development.svg",
  },
  {
    id: "S04",
    title: "Go Live & Scale",
    subtitle:
      "Launch confidently and grow with continuous improvements and analytics.",
    desc: [
      "Ship to production with monitoring, backups, and alerts.",
      "Track user behavior and optimize funnels and SEO.",
      "Plan new features, A/B experiments, and scale infrastructure.",
      "Partner long-term — performance reviews and roadmap updates.",
    ],
    progress: 100,
    image: "/Grow.svg",
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const controls = useAnimation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % steps.length);
      }, 5000);
    };

    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView]);

  useEffect(() => {
    controls
      .start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.3, ease: "easeInOut" },
      })
      .then(() => {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        });
      });
  }, [active, controls]);

  const handleManualClick = (i: number) => {
    setActive(i);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 5000);
  };

  const step = steps[active];

  return (
    <motion.section
      ref={sectionRef}
      id="process"
      className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 md:px-10 py-20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl mb-16"
      >
        <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
          / How It Works /
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900">
            Crafting Growth
            <br />
            Through Digitalization with{" "}
            <span className="inline-block font-extrabold tracking-tight text-gray-800">
              Tech<span className="underline decoration-gray-300">Mystry</span>
            </span>
          </h2>

          <p className="max-w-md text-sm md:text-base leading-relaxed text-gray-600">
            From concept to conversion — we simplify complex ideas into powerful
            digital solutions. Our process is designed to ensure speed,
            creativity, and scalability every step of the way.
          </p>
        </div>
      </motion.div>

      {/* Title + Progress */}
      <div className="w-full max-w-6xl mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
          {step.title}
        </h3>

        <div className="flex items-center gap-4 w-full md:w-1/2">
          <div className="flex items-center text-[10px] uppercase tracking-widest text-gray-500 space-x-3">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => handleManualClick(i)}
                className={`transition-all duration-300 ${
                  i === active
                    ? "text-gray-900 font-bold"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {s.id}
              </button>
            ))}
          </div>

          <div className="flex-1 h-[6px] bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gray-900"
              initial={{ width: 0 }}
              animate={{ width: `${step.progress}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>

          <span className="text-[10px] text-gray-500 font-medium w-10 text-right">
            {step.progress}%
          </span>
        </div>
      </div>

      {/* Animated Card */}
      <motion.div
        animate={controls}
        className="w-full max-w-5xl bg-gray-50 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 p-8 md:p-10 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <motion.img
            key={step.image}
            src={step.image}
            alt={step.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-[300px] h-[220px] md:w-[380px] md:h-[280px] object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center w-full md:w-1/2 text-gray-700">
          <p className="text-sm md:text-base mb-4 font-medium text-gray-700">
            {step.subtitle}
          </p>

          <div className="space-y-2">
            {step.desc.map((d, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-xs md:text-sm text-gray-600"
              >
                <ArrowRight className="w-4 h-4 mt-[3px] text-gray-400" />
                {d}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}