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
              width: isMobile ? "calc(100vw - 16px)" : "min(1380px, calc(100vw - 32px))",
              height: isMobile ? "auto" : "auto",
              minHeight: isMobile ? 480 : 560,
              maxHeight: isMobile ? "85vh" : "auto",
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
                    ? "px-4 sm:px-6 pt-4 pb-8 sm:pb-10 space-y-6 sm:space-y-8 overflow-y-auto max-h-[calc(85vh-80px)]"
                    : "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 px-6 sm:px-8 lg:px-12 pt-6 sm:pt-8 pb-10 sm:pb-14"
                }
              >
                {/* Quick Links */}
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-5">
                    Quick Links
                  </p>
                  <ul className="space-y-3 sm:space-y-4 text-white text-base sm:text-lg">
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      <a href="#home">Home</a>
                    </li>
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      <a href="#services">Services</a>
                    </li>
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      <a href="#process">Our Process</a>
                    </li>
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      <a href="/ContactForm">Contact</a>
                    </li>
                  </ul>
                </div>

                {/* Our Portfolio */}
                <div className={isMobile ? "pt-8 border-t border-white/10" : ""}>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-5">
                    Our Portfolio
                  </p>
                  <ul className="space-y-3 sm:space-y-4 text-white/80 text-base sm:text-lg">
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      <a href="#portfolio">Websites</a>
                    </li>
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      <a href="#portfolio">Applications</a>
                    </li>
                    <li className="hover:text-lime-400 transition cursor-pointer">
                      <a href="#portfolio">CRM Systems</a>
                    </li>
                  </ul>
                  <div
                    className={`flex gap-3 sm:gap-4 ${isMobile ? "mt-6 sm:mt-8" : "mt-10 sm:mt-14"}`}
                  >
                    {[
                      { icon: "in", href: "https://www.linkedin.com/company/techmystrym" },
                      { icon: "ig", href: "https://www.instagram.com/techmystry?igsh=MWFhbWV6aDNwYXZvdQ==" },
                      { icon: "X", href: "https://youtube.com/@techmystrymedia?si=QFehGN1LFBXckORI" }
                    ].map((social) => (
                      <a
                        key={social.icon}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-bold">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Development Offers Card */}
                <div className={isMobile ? "pt-8 border-t border-white/10" : ""}>
                  <div className="bg-gradient-to-br from-lime-900/30 to-green-900/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 border border-lime-500/30">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      <span className="text-[10px] sm:text-xs bg-white/10 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full font-bold">
                        LIMITED OFFER
                      </span>
                      <span className="text-[10px] sm:text-xs bg-lime-600 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full font-bold">
                        SPECIAL
                      </span>
                    </div>

                    <h2 className="font-black text-white leading-tight mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      Development Offers
                    </h2>

                    <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5 text-white/90">
                      <li className="flex items-start gap-2 text-xs sm:text-sm">
                        <span className="text-lime-400 mt-0.5 flex-shrink-0">✓</span>
                        <span>Website Development - Starting ₹15,000</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm">
                        <span className="text-lime-400 mt-0.5 flex-shrink-0">✓</span>
                        <span>Mobile Apps - Starting ₹25,000</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm">
                        <span className="text-lime-400 mt-0.5 flex-shrink-0">✓</span>
                        <span>CRM Solutions - Custom Pricing</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs sm:text-sm">
                        <span className="text-lime-400 mt-0.5 flex-shrink-0">✓</span>
                        <span>Free Consultation & Support</span>
                      </li>
                    </ul>

                    <a href="/ContactForm">
                      <button className="w-full py-2.5 sm:py-3 md:py-3.5 bg-white text-black font-bold rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-200 shadow-lg text-xs sm:text-sm md:text-base">
                        Get Started
                      </button>
                    </a>
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