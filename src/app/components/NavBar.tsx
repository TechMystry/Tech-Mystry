"use client";

import { motion } from "framer-motion";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// ✅ Create animated Link component
const MotionLink = motion(Link);

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
        {["Home", "Service", "Process", "Projects"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -2 }}
            className={`relative font-medium text-sm transition-colors duration-200 ${
              scrolled
                ? "text-gray-800 hover:text-black"
                : "text-black hover:text-gray-700"
            }`}
          >
            {item}
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
        className="flex items-center gap-4"
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
    </motion.header>
  );
}
