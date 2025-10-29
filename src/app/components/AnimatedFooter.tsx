'use client';

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Code,
  Smartphone,
  Search,
  Cloud,
  Twitter,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Sparkles,
  ChevronRight
} from 'lucide-react';

const AnimatedFooter = () => {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        delay: Math.random() * 1.5,
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 2500);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { name: 'Web Development', icon: Code, href: "/services/web" },
    { name: 'Mobile Apps', icon: Smartphone, href: "/services/mobile" },
    { name: 'SEO Optimization', icon: Search, href: "/services/seo" },
    { name: 'Cloud Solutions', icon: Cloud, href: "/services/cloud" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#TabbedServices" },
    { label: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/techmystry' },
    { icon: Github, href: 'https://github.com/techmystry' },
    { icon: Linkedin, href: 'https://linkedin.com/company/techmystry' },
    { icon: Instagram, href: 'https://instagram.com/techmystry' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <AnimatePresence>
            {sparkles.map((sparkle) => (
              <motion.div
                key={sparkle.id}
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{ x: sparkle.x, y: sparkle.y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0], rotate: [0, 360] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1.5, delay: sparkle.delay }}
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.a
            href="https://wa.me/918805526198"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-l-full shadow-xl hover:bg-emerald-700 transition-colors duration-300"
            animate={{
              boxShadow: [
                '0 0 15px rgba(5, 150, 105, 0.4)',
                '0 0 30px rgba(5, 150, 105, 0.7)',
                '0 0 15px rgba(5, 150, 105, 0.4)',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <MessageCircle className="w-7 h-7" />
          </motion.a>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="relative bg-slate-900 text-white overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-emerald-400 rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-emerald-400">TechMystry</h2>
              </motion.div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Crafting innovative digital solutions to empower your business with cutting-edge technology.
              </p>

              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>+91 8805526198</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span>dev.techmystry@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span>Pune, India</span>
                </div>
              </div>
            </motion.div>

            {/* Services Section */}
            <motion.div>
              <h3 className="text-xl font-semibold mb-6 text-emerald-400">Our Services</h3>
              <ul className="space-y-4 text-gray-300">
                {services.map(({ name, icon: Icon, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="flex items-center space-x-3 hover:text-emerald-400 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-emerald-400" />
                      <span>{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links Section */}
            <motion.div>
              <h3 className="text-xl font-semibold mb-6 text-emerald-400">Quick Links</h3>
              <ul className="space-y-4 text-gray-300">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="flex items-center space-x-2 hover:text-emerald-400 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-emerald-400" />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media Section */}
            <motion.div>
              <h3 className="text-xl font-semibold mb-6 text-emerald-400">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 rounded-full text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 transition-colors"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: '0 0 20px rgba(5, 150, 105, 0.4)',
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-500 mt-6 text-sm">
                Join our community for the latest tech updates and insights.
              </p>
            </motion.div>
          </div>

          {/* Footer Bottom Bar */}
          <motion.div
            className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p>© {currentYear} TechMystry. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy, i) => (
                <span
                  key={i}
                  className="hover:text-emerald-400 cursor-pointer transition-colors"
                >
                  {policy}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default AnimatedFooter;
