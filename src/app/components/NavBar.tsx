"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Modal from "./Model";
import CTAForm from "./CTAForm";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { label: "Web Development", href: "/services/web" },
    { label: "Mobile Development", href: "/services/mobile" },
    { label: "SEO Optimization", href: "/services/seo" },
    { label: "Cloud Computing", href: "/services/cloud" },
    { label: "E-Commerce", href: "/services/web" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/70 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        } py-4`}
      >
        <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="#home" className="text-white text-2xl font-bold">
            <span className="text-emerald-400">Tech</span>Mystry
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 text-white">
            <Link href="#Hero" className="hover:text-emerald-400">
              Home
            </Link>

            {/* Services Dropdown (Desktop) */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center hover:text-emerald-400"
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-slate-800/90 backdrop-blur rounded-lg shadow-lg py-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-emerald-500/20 hover:text-emerald-400"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="#portfolio" className="hover:text-emerald-400">
              Portfolio
            </Link>
            <Link href="/AboutUsSection" className="hover:text-emerald-400">
              About
            </Link>
            <Link href="#contact" className="hover:text-emerald-400">
              Contact
            </Link>
          </div>

          {/* CTA Button (Desktop) */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden lg:flex bg-emerald-400 text-slate-900 px-6 py-2 rounded-lg font-semibold"
          >
            Get Started
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md py-4 mt-2 space-y-4 text-center text-white">
            <Link href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            {/* Mobile Dropdown Services */}
            <details className="text-white">
              <summary className="cursor-pointer">Services</summary>
              <div className="flex flex-col mt-2">
                {services.map((service, i) => (
                  <Link
                    key={i}
                    href={service.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-sm hover:text-emerald-400"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>
            <Link href="#about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <button
              onClick={() => {
                setMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="bg-emerald-400 text-slate-900 px-6 py-2 rounded-lg font-semibold"
            >
              Get Started
            </button>
          </div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
