"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  BarChart3,
  Terminal,
  Server,
  GitBranch,
  Database
} from "lucide-react";

const HeroSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const words = ["Digital Experiences"];

  // Typing animation for the hero heading
  useEffect(() => {
    let index = 0;
    const fullWord = words[0];
    const typingInterval = setInterval(() => {
      setDisplayedText(fullWord.slice(0, index + 1));
      index++;
      if (index === fullWord.length) clearInterval(typingInterval);
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);

  // Animated values for mockup elements
  const [cpuLoad, setCpuLoad] = useState(75);
  const [ramLoad, setRamLoad] = useState(6.8);
  const [users, setUsers] = useState(1234);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad(Math.floor(60 + Math.random() * 30)); // CPU 60-90%
      setRamLoad(Number((6 + Math.random() * 2).toFixed(1)));
      setUsers(1200 + Math.floor(Math.random() * 100)); // Users 1200-1300
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Typing animation for code editor
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const fullCodeLines = [
    "npm start",
    "Starting server on port 3000...",
    "Compiling React App...",
    "Server running successfully ✅"
  ];

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    const interval = setInterval(() => {
      if (lineIndex < fullCodeLines.length) {
        const currentLine = fullCodeLines[lineIndex];
        setCodeLines((prev) => {
          const newLines = [...prev];
          newLines[lineIndex] = currentLine.slice(0, charIndex + 1);
          return newLines;
        });
        charIndex++;
        if (charIndex === currentLine.length) {
          charIndex = 0;
          lineIndex++;
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Animated notifications
  const [notifIndex, setNotifIndex] = useState(0);
  const notifications = [
    "Frontend Deployed",
    "Backend Connected",
    "Database Synced",
    "API Endpoints Live"
  ]; // Updated notifications to match Full Stack theme

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifIndex((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white overflow-hidden">
      
      {/* === Abstract Glowing Background Shapes === */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 to-emerald-700/10 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute -bottom-60 -right-60 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-400/10 to-emerald-600/30 rounded-full blur-2xl z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px] z-0 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-10 h-10 rotate-45 bg-emerald-400/30 rounded-sm blur-sm z-0 pointer-events-none" />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-emerald-900/20"></div>

      {/* Large curved background element */}
      <div className="absolute right-0 top-0 w-3/4 h-full">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-emerald-600/20 rounded-full blur-3xl transform rotate-12"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                Transfering ideas<br />
                Into Stunning <br />
                {" "}
                <span className="text-emerald-400">
                  {displayedText}
                  <span className="inline-block w-1 h-12 bg-emerald-400 animate-pulse ml-1 align-middle"></span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 leading-relaxed max-w-lg"
              >
                Create high-performance web and mobile applications with modern frameworks, APIs, and databases. Deliver complete full-stack solutions that scale effortlessly and engage users.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105">
                  Enter Now
                </button>
              </motion.div>
            </div>

            {/* Right Side - Full Stack Dashboard Mockup */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative"
              >
                {/* Dashboard container */}
                <div className="relative">

                  {/* Top Bar */}
                  <div className="flex space-x-3 mb-4">
                    <div className="bg-slate-700 rounded-lg p-3 shadow-lg hover:ring-2 hover:ring-emerald-400 transition"><Terminal className="w-5 h-5 text-gray-400" /></div>
                    <div className="bg-slate-700 rounded-lg p-3 shadow-lg ring-2 ring-emerald-400 hover:ring-emerald-500 transition"><Server className="w-5 h-5 text-emerald-400" /></div>
                    <div className="bg-slate-700 rounded-lg p-3 shadow-lg hover:ring-2 hover:ring-emerald-400 transition"><Database className="w-5 h-5 text-gray-400" /></div>
                    <div className="bg-slate-700 rounded-lg p-3 shadow-lg hover:ring-2 hover:ring-emerald-400 transition"><GitBranch className="w-5 h-5 text-gray-400" /></div>
                  </div>

                  {/* Dashboard main window */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-700 backdrop-blur-sm space-y-4"
                  >

                    {/* Code Editor with typing animation */}
                    <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm h-40 overflow-auto hover:ring-2 hover:ring-emerald-400 transition">
                      {codeLines.map((line, idx) => (
                        <div key={idx} className={idx === 0 ? "text-green-400 animate-pulse" : idx === 3 ? "text-gray-300 font-semibold" : "text-gray-300"}>
                          {line}
                        </div>
                      ))}
                    </div>

                    {/* Server stats */}
                    <div className="flex justify-between space-x-4">
                      <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="flex-1 bg-slate-700 rounded-xl p-3 text-center hover:ring-2 hover:ring-emerald-400 transition">
                        <div className="text-gray-400 text-sm">CPU</div>
                        <div className="text-white font-bold text-lg">{cpuLoad}%</div>
                      </motion.div>
                      <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} className="flex-1 bg-slate-700 rounded-xl p-3 text-center hover:ring-2 hover:ring-emerald-400 transition">
                        <div className="text-gray-400 text-sm">RAM</div>
                        <div className="text-white font-bold text-lg">{ramLoad}GB</div>
                      </motion.div>
                      <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} className="flex-1 bg-slate-700 rounded-xl p-3 text-center hover:ring-2 hover:ring-emerald-400 transition">
                        <div className="text-gray-400 text-sm">Users</div>
                        <div className="text-white font-bold text-lg">{users}</div>
                      </motion.div>
                    </div>

                    {/* Charts */}
                    <motion.div
                      animate={{ rotate: [0, 0, 0, -0, 0] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="bg-slate-700 rounded-xl p-4 flex justify-around items-center hover:ring-2 hover:ring-emerald-400 transition"
                    >
                      <div className="flex flex-col items-center">
                        <TrendingUp className="text-emerald-400 w-6 h-6 mb-1" />
                        <span className="text-white text-sm font-bold">Traffic</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <BarChart3 className="text-emerald-400 w-6 h-6 mb-1" />
                        <span className="text-white text-sm font-bold">Revenue</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <DollarSign className="text-emerald-400 w-6 h-6 mb-1" />
                        <span className="text-white text-sm font-bold">Sales</span>
                      </div>
                    </motion.div>

                    {/* Animated Notifications */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={notifIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-700 rounded-xl p-3 text-sm text-white font-semibold hover:ring-2 hover:ring-emerald-400 transition"
                      >
                        {notifications[notifIndex]}
                      </motion.div>
                    </AnimatePresence>

                  </motion.div>

                  {/* Floating Circular Indicator */}
                  <div className="absolute -top-4 -right-12 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-8 -left-8 w-3 h-3 bg-emerald-400 rounded-full opacity-60 animate-bounce"></div>

                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;