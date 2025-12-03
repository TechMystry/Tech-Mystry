"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navSize, setNavSize] = useState({ width: 0, height: 0 });

  const navRef = useRef<HTMLDivElement>(null);

  const navControls = useAnimation();
  const menuControls = useAnimation();

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  // Measure navbar size AFTER layout + animation state applies
  useLayoutEffect(() => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setNavSize({ width: rect.width, height: rect.height });
    }
  }, [isOpen, isMobile]);

  // Debug in console if needed
  useEffect(() => {
    console.log("Navbar size:", navSize);
  }, [navSize]);

  const toggleMenu = async () => {
    if (isOpen) {
      await menuControls.start("hidden");
      await navControls.start("closed");
      setIsOpen(false);
    } else {
      setIsOpen(true);
      await navControls.start("open");
      menuControls.start("visible");
    }
  };

  return (
    <>
      {/* Navbar Wrapper - Removed fixed positioning, added top positioning */}
      <motion.nav
        className="relative z-50 pointer-events-none mt-8"
        animate={navControls}
        initial="closed"
      >
        <motion.div
          ref={navRef}
          className="relative overflow-hidden bg-black/95 backdrop-blur-xl border border-white/10 shadow-xl pointer-events-auto mx-2 md:mx-auto"
          variants={{
            closed: {
              width: isMobile ? "calc(100vw - 32px)" : "420px",
              height: isMobile ? 52 : 66,
              borderRadius: "18px",
              transition: { duration: 0.45, ease: "easeInOut" },
            },
            open: {
              width: isMobile ? "calc(100vw - 16px)" : "1380px",
              height: isMobile ? "auto" : 620,
              minHeight: isMobile ? 540 : 620,
              borderRadius: isMobile ? "26px" : "30px",
              transition: { duration: 0.45, ease: "easeInOut" },
            },
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-2 md:px-6 md:py-3">
            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex items-center h-full gap-2 text-white/90 hover:text-white transition z-10"
            >
              {isOpen ? (
                <X size={isMobile ? 22 : 26} />
              ) : (
                <Menu size={isMobile ? 22 : 26} />
              )}
              <span className="font-bold text-sm md:text-base tracking-tight flex items-center h-full">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>

            {/* Logo */}
            <h1 className="absolute left-1/2 -translate-x-1/2 font-black text-xl md:text-2xl tracking-tighter text-white pointer-events-none flex items-center">
              Tech
              <span className="relative">
                Mystry
                {/* Subtext directly under Mystry */}
                <span className="absolute left-1/2 -translate-x-1/2 translate-x-[2px] top-full text-[5px] md:text-[7px] tracking-wider whitespace-nowrap">
                  <span className="text-white/70">by </span>
                  <span className="text-blue-400">waardian</span>
                </span>

              </span>
            </h1>


            {/* Join Button */}
            {!isOpen && (
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-xs sm:text-sm font-bold bg-lime-400 text-black rounded-full hover:bg-lime-300 transition shadow-md flex items-center h-full">
                Join
              </button>
            )}
          </div>

          {/* Menu Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={menuControls}
                exit="hidden"
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={
                  isMobile
                    ? "px-6 pt-4 pb-10 space-y-10"
                    : "grid grid-cols-3 gap-12 px-12 pt-8 pb-14"
                }
              >
                {/* Products */}
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-5">
                    Our Products
                  </p>
                  <ul className="space-y-3 sm:space-y-4 text-white text-base sm:text-lg">
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      The Vault
                    </li>
                    <li className="flex items-center gap-2 hover:text-lime-400 transition cursor-pointer">
                      Page Transition Course
                      <span className="text-xs bg-violet-600 px-2 py-1 rounded font-bold">
                        WIP
                      </span>
                    </li>
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      Icon Library
                    </li>
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      Community
                    </li>
                    <li className="text-white/40 flex items-center gap-2">
                      Easings{" "}
                      <span className="text-xs bg-neutral-700 px-2 py-1 rounded">
                        soon
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Explore */}
                <div className={isMobile ? "pt-8 border-t border-white/10" : ""}>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-5">
                    Explore
                  </p>
                  <ul className="space-y-3 sm:space-y-4 text-white/80 text-base sm:text-lg">
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      Osmo Showcase
                    </li>
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      Updates
                    </li>
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      Pricing
                    </li>
                  </ul>
                  <div
                    className={`flex gap-4 ${isMobile ? "mt-8" : "mt-14"}`}
                  >
                    {["in", "ig", "X"].map((icon) => (
                      <div
                        key={icon}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition cursor-pointer"
                      >
                        <span className="text-sm font-bold">{icon}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestone Card */}
                <div className={isMobile ? "pt-8 border-t border-white/10" : ""}>
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-3xl p-7 md:p-8 border border-purple-500/30">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-white/10 px-3.5 py-1.5 rounded-full font-bold">
                        FEATURED
                      </span>
                      <span className="text-xs bg-violet-600 px-3.5 py-1.5 rounded-full font-bold">
                        MILESTONE
                      </span>
                    </div>

                    <h2
                      className={`font-black text-white leading-none mb-4 sm:mb-5 ${isMobile ? "text-2xl sm:text-3xl" : "text-4xl sm:text-5xl"
                        }`}
                    >
                      We just hit 1400 Members!
                    </h2>

                    <button className="w-full py-3 sm:py-3.5 bg-white text-black font-bold rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-200 shadow-lg text-xs sm:text-sm md:text-base">
                      Join them
                    </button>

                    <div className="flex -space-x-4 justify-center mt-8">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <img
                          key={i}
                          src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"
                            }/${15 + i * 17}.jpg`}
                          alt="member"
                          className="w-13 h-13 rounded-full border-4 border-black object-cover shadow-md"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
}