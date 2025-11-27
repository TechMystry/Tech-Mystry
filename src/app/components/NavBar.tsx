// src/components/NavBar.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * Tweak these:
 * FLIP_DUR  -> seconds for motion animations (flip / popup)
 * HIGHLIGHT_MS -> ms for the underline transition
 */
const FLIP_DUR = 0.50; // seconds (lower = faster)
const HIGHLIGHT_MS = 200; // milliseconds (lower = snappier)

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const pillRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // only prevent background scroll for mobile popup (open && not desktop)
  useEffect(() => {
    const shouldLock = open && !isDesktop;
    document.documentElement.style.overflow = shouldLock ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open, isDesktop]);

  // close when clicking outside the pill (desktop) OR outside popup (mobile)
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      const insidePill = pillRef.current?.contains(target);
      const insidePopup = popupRef.current?.contains(target);
      if (!insidePill && !insidePopup) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const menuItems = [
    { href: "/#home", label: "Home" },
    { href: "/#expertise", label: "Service" },
    { href: "/#projects", label: "Projects" },
    { href: "/ContactForm", label: "Let’s connect", cta: true },
  ];

  const frontVariants = {
    visible: { rotateY: 0, opacity: 1 },
    hidden: { rotateY: 180, opacity: 0 },
  };
  const backVariants = {
    hidden: { rotateY: -180, opacity: 0 },
    visible: { rotateY: 0, opacity: 1 },
  };

  return (
    <header className="w-full bg-[#f9f9f9] sticky top-0 z-50">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: FLIP_DUR, ease: "easeOut" }}
          className={`mx-auto my-3 rounded-full transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"}`}
          style={{ maxWidth: 920 }}
        >
          <div ref={pillRef} style={{ perspective: 1000 }} className="relative">
            <div
              className="bg-black rounded-full px-4 md:px-6 py-2 flex items-center justify-between gap-4"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front */}
              <motion.div
                variants={frontVariants}
                animate={isDesktop && open ? "hidden" : "visible"}
                initial="visible"
                transition={{ duration: FLIP_DUR }}
                className="relative w-full flex items-center justify-between"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Link href="/" className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6" cy="6" r="2.8" fill="#FFF24A" />
                      <circle cx="12" cy="4" r="2.6" fill="#FFF24A" />
                      <circle cx="18" cy="7" r="2.3" fill="#FFF24A" />
                      <rect x="10.4" y="10.5" width="3" height="7.5" rx="0.9" fill="#FFF24A" />
                    </svg>
                  </span>

                  <span className="hidden sm:block text-white font-semibold text-sm">
                    TechMystry<span className="text-white/70">.studio</span>
                  </span>
                </Link>

                {/* Hamburger: on desktop it only opens, it will NOT close the flipped menu */}
                <button
                  aria-label={open ? "Close menu" : "Open menu"}
                  onClick={() => {
                    if (isDesktop && open) return; // prevent closing via hamburger on desktop
                    setOpen((s) => !s);
                  }}
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/10 shadow-sm hover:scale-105 active:scale-95 transition-transform"
                >
                  {open ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
                </button>
              </motion.div>

              {/* Back (desktop in-place menu) */}
              <motion.div
                variants={backVariants}
                animate={isDesktop && open ? "visible" : "hidden"}
                initial="hidden"
                transition={{ duration: FLIP_DUR }}
                className="absolute inset-0 flex items-center justify-between px-4"
                style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-3">
                  {menuItems.slice(0, 3).map((m) => (
                    <Link
                      key={m.href}
                      href={m.href}
                      onClick={() => {
                        // desktop: do NOT close the flipped menu on item click
                        // mobile: closing is handled below in mobile popup code
                        if (!isDesktop) setOpen(false);
                      }}
                      className="text-white/90 font-medium text-sm px-3 py-2 rounded-md hover:bg-white/6 transition"
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href="/ContactForm"
                    onClick={() => {
                      if (!isDesktop) setOpen(false);
                    }}
                    className="px-3 py-2 rounded-full bg-white text-black font-medium text-sm"
                  >
                    Let’s connect
                  </Link>

                  {/* Small X inside flipped pill; this closes the pill */}
                  <button
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-white/8 hover:bg-white/12 transition"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile popup when not desktop */}
      <AnimatePresence>
        {open && !isDesktop && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FLIP_DUR }}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={{ duration: FLIP_DUR }}
              className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4"
            >
              <div
                ref={popupRef}
                className="relative w-full max-w-xs bg-white rounded-3xl p-6 shadow-2xl ring-1 ring-black/5"
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>

                <ul className="flex flex-col gap-3 mt-4">
                  {menuItems.map((m) => (
                    <li key={m.href}>
                      <Link
                        href={m.href}
                        onClick={() => setOpen(false)} // mobile: close on item tap
                        className={`group relative block w-full text-center px-4 py-3 rounded-lg font-semibold transition ${m.cta ? "bg-black text-white" : "text-gray-900 hover:bg-gray-100"}`}
                      >
                        {m.label}
                        <span
                          className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#FFF24A] scale-x-0 group-hover:scale-x-100 transform origin-center rounded-full"
                          style={{ transitionProperty: "transform, opacity", transitionDuration: `${HIGHLIGHT_MS}ms` }}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 text-xs text-center text-gray-400">© TechMystry · Studio</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
