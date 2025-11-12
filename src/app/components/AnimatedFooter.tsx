"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export default function AnimatedFooter() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    { name: "Web Development", href: "/services/web" },
    { name: "Mobile Apps", href: "/services/mobile" },
    { name: "SEO Optimization", href: "/services/seo" },
    { name: "Cloud Solutions", href: "/services/cloud" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#expertise" },
    { label: "Process", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "/ContactForm" },
  ];

  // FIXED: Hardcoded URLs to prevent SSR/Client mismatch
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/techmystrymedia/" },
    { icon: Instagram, href: "https://www.instagram.com/techmystry?igsh=MWFhbWV6aDNwYXZvdQ==" },
    { icon: Youtube, href: "//youtube.com/@techmystrymedia?si=QFehGN1LFBXckORI" },
  ];

  const currentYear = new Date().getFullYear();

  const handleQuickLink = (href: string) => {
    if (href.startsWith("#")) {
      if (window.location.pathname === "/") {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/" + href);
      }
    } else {
      router.push(href);
    }
  };

  const handleServiceClick = (href: string) => {
    router.push(href);
    router.refresh();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/918805526198"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed z-50 
          right-0 top-1/2 -translate-y-1/2 
          flex items-center justify-center 
          rounded-full shadow-2xl 
          transition-all duration-500 ease-out
          hover:scale-110 
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
          group
        "
        style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#25D366',
          transform: 'translateX(50%)',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(0%)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(50%)'}
        aria-label="Chat on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-6 h-6 drop-shadow-md group-hover:animate-pulse"
        />
      </a>

      <footer className="relative overflow-hidden bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 text-gray-800 py-10 sm:py-12">
        {/* Background Accent Glow */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 left-0 w-[250px] h-[250px] bg-gray-400/20 rounded-full blur-3xl"
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              transition: "transform 0.4s ease-out",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-gray-500/25 rounded-full blur-3xl"
            style={{
              transform: `translate(${-mousePosition.x * 0.008}px, ${-mousePosition.y * 0.008}px)`,
              transition: "transform 0.4s ease-out",
            }}
          />
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src="/Logo_TechMystry_.png"
                alt="TechMystry Logo"
                width={55}
                height={45}
                className="rounded-md"
              />
              <h3 className="text-lg font-bold text-gray-900">TechMystry</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm max-w-xs">
              Crafting smart, scalable, and aesthetic digital solutions for the
              modern web.
            </p>
            <div className="space-y-1 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>+91 8805526198</span>
                <span>+91 7038230674</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>dev.techmystry@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>Pune, India</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {services.map(({ name, href }, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleServiceClick(href)}
                    className="flex items-center gap-2 group hover:text-gray-900 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-all" />
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {quickLinks.map(({ label, href }, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleQuickLink(href)}
                    className="flex items-center gap-2 group hover:text-gray-900 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-all" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Connect With Us
            </h3>
            <div className="flex gap-3 mb-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-300/30 rounded-full hover:bg-gray-400/40 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm leading-snug">
              Follow us for updates, ideas, and behind-the-scenes creativity.
            </p>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="relative z-10 border-t border-gray-400/30 mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 px-4 sm:px-6">
          <p>© {currentYear} TechMystry. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Designed with [heart] by <span className="font-semibold">TechMystry</span>
          </p>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
              opacity: 0.2;
            }
            50% {
              transform: translateY(-10px);
              opacity: 0.4;
            }
          }
        `}</style>
      </footer>
    </>
  );
}