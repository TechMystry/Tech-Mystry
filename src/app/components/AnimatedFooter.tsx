"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Marquee animation
      const marqueeText = marqueeRef.current?.querySelector(".marquee-text");
      if (marqueeText) {
        gsap.to(marqueeText, {
          x: "-50%",
          duration: 20,
          repeat: -1,
          ease: "none",
        });
      }

      // Grid items stagger animation
      const gridItems = gridRef.current?.querySelectorAll(".grid-item");
      if (gridItems) {
        gridItems.forEach((item) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 70%",
              scrub: 1,
            },
            opacity: 0,
            y: 60,
            scale: 0.9,
          });
        });
      }

      // Links stagger animation
      const links = document.querySelectorAll(".footer-link");
      links.forEach((link) => {
        gsap.from(link, {
          scrollTrigger: {
            trigger: link,
            start: "top 92%",
            end: "top 78%",
            scrub: 1,
          },
          opacity: 0,
          x: -30,
        });
      });

      // Social icons animation
      const socialIcons = document.querySelectorAll(".social-icon");
      socialIcons.forEach((icon) => {
        gsap.from(icon, {
          scrollTrigger: {
            trigger: icon,
            start: "top 92%",
            end: "top 75%",
            scrub: 1,
          },
          scale: 0,
          rotation: 0,
        });
      });

      // Bottom section animation
      if (bottomRef.current) {
        gsap.from(bottomRef.current, {
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 95%",
            end: "top 85%",
            scrub: 1,
          },
          opacity: 0,
          y: 20,
        });
      }
    }, footerRef);


    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/918805526198"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 right-0 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full shadow-2xl transition-all duration-500 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 group"
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

      <footer
        ref={footerRef}
        className="relative bg-white text-black overflow-hidden"
      >
        {/* Top marquee section */}
        <div
          ref={marqueeRef}
          className="border-b border-black/10 overflow-hidden py-6 sm:py-8"
        >
          <div className="marquee-text whitespace-nowrap inline-block">
            {[...Array(2)].map((_, i) => (
              <span
                key={i}
                className="inline-block text-6xl sm:text-7xl lg:text-8xl mx-8 opacity-7"
              >
                TechMystry • TechMystry • TechMystry • TechMystry • TechMystry •
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          {/* Main Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-12 lg:mb-14"
          >
            {/* Column 1 - Quick Links */}
            <div className="grid-item group">
              <h4 className="text-lg sm:text-xl mb-6 sm:mb-8 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { name: "Home", href: "#home" },
                  { name: "Services", href: "#services" },
                  { name: "Our Process", href: "#process" },
                  { name: "Portfolio", href: "#portfolio" },
                  { name: "Contact", href: "/ContactForm" },
                ].map((link, idx) => (
                  <li key={idx} className="footer-link group/link">
                    <a
                      href={link.href}
                      className="text-black/60 hover:text-black transition-all duration-300 text-sm sm:text-base flex items-center gap-3 group-hover/link:translate-x-2"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 - Services */}
            <div className="grid-item group">
              <h4 className="text-lg sm:text-xl mb-6 sm:mb-8 uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { name: "Web Development", href: "#services" },
                  { name: "Mobile Applications", href: "#services" },
                  { name: "UI/UX Design", href: "#services" },
                  { name: "Full Stack Development", href: "#services" },
                ].map((service, idx) => (
                  <li key={idx} className="footer-link group/link">
                    <a
                      href={service.href}
                      className="text-black/60 hover:text-black transition-all duration-300 text-sm sm:text-base flex items-center gap-3 group-hover/link:translate-x-2"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div className="grid-item group">
              <h4 className="text-lg sm:text-xl mb-6 sm:mb-8 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                {[
                  { name: "Our Work", href: "#portfolio" },
                  { name: "Our Process", href: "#process" },
                  { name: "Contact Us", href: "/ContactForm" },
                ].map((item, idx) => (
                  <li key={idx} className="footer-link group/link">
                    <a
                      href={item.href}
                      className="text-black/60 hover:text-black transition-all duration-300 text-sm sm:text-base flex items-center gap-3 group-hover/link:translate-x-2"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div className="grid-item group">
              <h4 className="text-lg sm:text-xl mb-6 sm:mb-8 uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                <li className="footer-link group/link">
                  <a
                    href="mailto:dev.techmystry@gmail.com"
                    className="text-black/60 hover:text-black transition-colors duration-300 text-sm sm:text-base flex items-start gap-3"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover/link:scale-110 transition-transform" />
                    <span className="break-all">dev.techmystry@gmail.com</span>
                  </a>
                </li>
                <li className="footer-link group/link">
                  <a
                    href="tel:+918805526198"
                    className="text-black/60 hover:text-black transition-colors duration-300 text-sm sm:text-base flex items-start gap-3"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover/link:scale-110 transition-transform" />
                    <span className="break-all">+91 8805526198 / 7038230674</span>
                  </a>
                </li>
                <li className="footer-link group/link">
                  <a
                    href="#"
                    className="text-black/60 hover:text-black transition-colors duration-300 text-sm sm:text-base flex items-start gap-3"
                  >
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover/link:scale-110 transition-transform" />
                    <span>Pune, Maharashtra</span>
                  </a>
                </li>
              </ul>

              {/* Social */}
              <div>
                <p className="text-xs uppercase tracking-wider text-black/80 mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    { Icon: Linkedin, href: "https://www.linkedin.com/company/techmystrym" },
                    { Icon: Youtube, href: "https://youtube.com/@techmystrymedia?si=QFehGN1LFBXckORI" },
                    { Icon: Instagram, href: "https://www.instagram.com/techmystry?igsh=MWFhbWV6aDNwYXZvdQ==" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon group/social bg-black text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-white hover:text-black border-2 border-black transition-all duration-300 hover:scale-110"
                    >
                      <social.Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom - Rights */}
          <div
            ref={bottomRef}
            className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-black/10 pt-4"
          >
            <p className="text-xs sm:text-sm text-black/60">
              © {new Date().getFullYear()} TechMystry. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-black/60">
              Powered by{" "}
              <a
                href="https://waardian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                waardian
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}