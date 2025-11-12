"use client";

import { motion } from "framer-motion";
import { ArrowBigRightDash, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// ✅ Create animated Link component
const MotionLink = motion(Link);

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex items-center justify-between w-full px-10 py-5 sticky top-0 z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled ? "bg-[#f9f9f9]/90 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Left: Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center"
      >
        <Image
          src="/Logo_TechMystry_.png"
          alt="TechMystry Logo"
          width={50}
          height={40}
          className="object-contain"
        />
      </motion.div>

      {/* Center: Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="hidden md:flex items-center gap-10"
      >
        {[
          { label: "Home", href: "/#home" },
          { label: "Service", href: "/#expertise" },
          { label: "Process", href: "/#process" },
          { label: "Projects", href: "/#projects" },
        ].map(({ label, href }) => (
          <motion.a
            key={label}
            href={href}
            whileHover={{ y: -2 }}
            className={`relative font-medium text-sm transition-colors duration-200 ${
              scrolled
                ? "text-gray-800 hover:text-black"
                : "text-black hover:text-gray-700"
            }`}
          >
            {label}
            <motion.span
              className="absolute left-0 bottom-0 w-0 h-[2px] rounded-full bg-black"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </motion.nav>

      {/* Right: Let’s Connect Button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="hidden md:flex items-center gap-4"
      >
        {/* ✅ Motion Link (no nested anchor issue) */}
        <MotionLink
          href="/ContactForm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 ${
            scrolled
              ? "bg-black text-white hover:bg-gray-900"
              : "bg-black/10 text-black hover:bg-black/20 backdrop-blur-sm"
          }`}
        >
          Let’s connect
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <ArrowBigRightDash
              size={18}
              className={scrolled ? "text-white" : "text-black"}
            />
          </motion.span>
        </MotionLink>
      </motion.div>

      {/* Mobile hamburger */}
      <motion.button
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35 }}
        aria-label="Toggle navigation"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-gray-300/60 bg-white/70 backdrop-blur-sm shadow-sm"
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>
    </motion.header>

    {/* Mobile menu overlay */}
    <motion.div
      initial={false}
      animate={{
        opacity: mobileOpen ? 1 : 0,
        pointerEvents: mobileOpen ? "auto" : "none",
      }}
      transition={{ duration: 0.2 }}
      className="md:hidden fixed inset-0 z-40"
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: mobileOpen ? 0 : -30, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`mx-4 mt-4 rounded-2xl shadow-lg border ${
          scrolled ? "border-gray-300 bg-[#f9f9f9]/95" : "border-gray-200 bg-white/95"
        } backdrop-blur-md p-6 flex flex-col gap-4`}
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900">Menu</span>
          <button
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="grid gap-3">
          {[
            { label: "Home", href: "/#home" },
            { label: "Service", href: "/#expertise" },
            { label: "Process", href: "/#process" },
            { label: "Projects", href: "/#projects" },
          ].map(({ label, href }, i) => (
            <MotionLink
              key={label}
              href={href}
              whileHover={{ x: 4 }}
              className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-white/80"
              onClick={() => setMobileOpen(false)}
            >
              <span className="font-medium text-gray-800">{label}</span>
              <ArrowBigRightDash className="w-5 h-5 text-gray-600" />
            </MotionLink>
          ))}
        </div>
        <MotionLink
          href="/ContactForm"
          whileHover={{ scale: 1.03 }}
          className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black text-white shadow-md"
          onClick={() => setMobileOpen(false)}
        >
          Let’s connect
          <ArrowBigRightDash size={18} />
        </MotionLink>
      </motion.div>
    </motion.div>
    </>
  );
}