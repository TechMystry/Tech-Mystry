"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Service {
  id: string;
  label: string;
  title: string;
  color: string;
}

const services: Service[] = [
  {
    id: "web-dev",
    label: "WEB DEVELOPMENT",
    title: "Modern and responsive websites built with industry-leading frameworks.",
    color: "#0A1A2F" // Executive Navy
  },
  {
    id: "app-dev",
    label: "APP DEVELOPMENT",
    title: "High-performance mobile apps with seamless navigation and UI.",
    color: "#0031A8" // Deep Royal Blue
  },
  {
    id: "full-stack",
    label: "FULL STACK",
    title: "End-to-end development solutions covering frontend and backend.",
    color: "#4B008E" // Ultra Purple
  },
  {
    id: "cloud",
    label: "CLOUD COMPUTING",
    title: "Secure, scalable, and reliable cloud solutions for your business.",
    color: "#007F7B" // Teal Emerald
  },
  {
    id: "seo",
    label: "SEO OPTIMIZATION",
    title: "Boost visibility with optimized search performance and ranking.",
    color: "#E65100" // Fire Orange
  },
  {
    id: "ui-ux",
    label: "UI UX DESIGN",
    title: "Human-centered design for intuitive and delightful user experiences.",
    color: "#B00020" // Crimson Red
  },
  {
    id: "digital-marketing",
    label: "DIGITAL MARKETING",
    title: "Effective marketing strategies to grow your brand online.",
    color: "#B8860B" // Dark Gold
  }
];

export function WhatWeOfferSection() {
  const [mousePosition, setMousePosition] = useState<{
    [key: string]: { x: number; y: number };
  }>({});

  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // new refs for header and subtitle
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  // Filter out UI/UX card
  const visibleServices = services.filter((s) => s.id !== "ui-ux");
  const mainGroup = visibleServices.slice(0, Math.max(0, visibleServices.length - 2));
  const bottomPair = visibleServices.slice(Math.max(0, visibleServices.length - 2));
  const allServices = [...mainGroup, ...bottomPair];

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    // Detect mobile / small screens: treat widths under 768px as mobile
    const isMobile = typeof window !== "undefined" && (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);

    // If mobile, skip GSAP animations for cards entirely (simple scroll behavior)
    if (isMobile) {
      // Still ensure header & subtitle are visible (no animation)
      if (headingRef.current) gsap.set(headingRef.current, { opacity: 1, y: 0 });
      if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial state for header & subtitle
      if (headingRef.current) {
        gsap.set(headingRef.current, { opacity: 0, y: 24 });
      }
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
      }

      // Set initial state for all cards
      allServices.forEach((service) => {
        const card = cardRefs.current[service.id];
        if (card) {
          gsap.set(card, {
            rotationX: -90,
            y: 100,
            opacity: 0,
            transformOrigin: "bottom center",
            transformPerspective: 1000
          });
        }
      });

      // Create timeline for header -> subtitle -> sequential card reveals
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${allServices.length * 400}`, // More scroll distance = smoother
          scrub: 1,
          pin: sectionRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      // 1) Heading animation (when section enters)
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 0);

      // 2) Subtitle animation (immediately after heading)
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out"
      }, 0.25);

      // 3) Cards: start after subtitle animation finishes
      const cardsStartOffset = 0.9; // offset after header+subtitle
      allServices.forEach((service, index) => {
        const card = cardRefs.current[service.id];
        if (card) {
          tl.to(
            card,
            {
              rotationX: 0,
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out"
            },
            cardsStartOffset + index * 0.8 // stagger timing after header and subtitle
          );
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement>,
    serviceId: string
  ) => {
    const card = cardRefs.current[serviceId];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition((prev) => ({
      ...prev,
      [serviceId]: { x, y }
    }));
  };

  const handleMouseLeave = (serviceId: string) => {
    setMousePosition((prev) => ({
      ...prev,
      [serviceId]: { x: 0, y: 0 }
    }));
  };

  return (
    <div ref={triggerRef} className="min-h-screen bg-white text-black">
      <div ref={sectionRef} className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 lg:mb-20">
            <div>
              <h1 ref={headingRef} className="text-black mb-4 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">What We Offer</h1>
              <div className="w-20 sm:w-24 h-1 bg-black"></div>
            </div>

            <div className="flex items-center">
              <p ref={subtitleRef} className="leading-relaxed text-black text-base sm:text-lg">
                A complete range of digital solutions designed to grow your brand,
                expand your presence, and accelerate your business goals with
                precision and quality.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="flex justify-start md:justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
              {mainGroup.map((service) => {
                const pos = mousePosition[service.id] || { x: 0, y: 0 };
                const isHovered = pos.x !== 0 || pos.y !== 0;

                return (
                  <div
                    key={service.id}
                    ref={(el) => { cardRefs.current[service.id] = el; }}
                    onMouseMove={(e) => handleMouseMove(e, service.id)}
                    onMouseLeave={() => handleMouseLeave(service.id)}
                    className="relative group cursor-pointer"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Card with vignette + subtle shine */}
                    <div
                      className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[300px] lg:h-72 rounded-xl sm:rounded-2xl transition-all duration-500 ease-out"
                      style={{
                        background: `
                linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 30%, rgba(255,255,255,0.00) 60%),
                radial-gradient(circle at 50% 35%, rgba(255,255,255,0.06), rgba(255,255,255,0) 30%),
                ${service.color}
              `,
                        transform: isHovered
                          ? `rotateX(${(pos.y - 140) / 22}deg) rotateY(${(pos.x - 100) / 22}deg)`
                          : "rotateX(0deg) rotateY(0deg)",
                        transformStyle: "preserve-3d",
                        boxShadow: "none",
                        border: "1px solid rgba(0,0,0,0.12)",
                        overflow: "hidden"
                      }}
                    >
                      <div className="absolute inset-0 rounded-2xl p-[2px]">
                        <div
                          className="h-full w-full rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col justify-between relative overflow-hidden"
                          style={{ background: "transparent" }}
                        >
                          {/* Label */}
                          <div className="relative z-10">
                            <div
                              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 bg-white"
                              style={{
                                transform: isHovered
                                  ? `translate(${(pos.x - 100) / 28}px, ${(pos.y - 140) / 28}px)`
                                  : "translate(0, 0)",
                                transition: "transform 0.2s ease-out"
                              }}
                            >
                              <span className="text-black font-extrabold">
                                {service.label}
                              </span>
                            </div>
                          </div>

                          {/* Title */}
                          <div className="relative z-10">
                            <p
                              className="text-white text-base sm:text-lg font-extrabold leading-tight"
                              style={{
                                textShadow: "0 1px 0 rgba(0,0,0,0.35)",
                                transform: isHovered
                                  ? `translate(${(pos.x - 100) / 24}px, ${(pos.y - 140) / 24}px)`
                                  : "translate(0, 0)",
                                transition: "transform 0.2s ease-out"
                              }}
                            >
                              {service.title}
                            </p>
                          </div>

                          {/* Bottom-right corner accent */}
                          <div
                            className="absolute bottom-0 right-0"
                            style={{
                              width: 100,
                              height: 100,
                              background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.12))",
                              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                              transform: isHovered ? "scale(1.12)" : "scale(1)",
                              transformOrigin: "bottom right",
                              transition: "transform 0.35s ease-out"
                            }}
                          />

                          {/* Top-right mark */}
                          <div
                            className="absolute top-5 right-5"
                            style={{
                              width: 40,
                              height: 40,
                              borderTop: "2px solid rgba(255,255,255,0.12)",
                              borderRight: "2px solid rgba(255,255,255,0.12)",
                              transform: isHovered ? "scale(1.12)" : "scale(1)",
                              transformOrigin: "top right",
                              transition: "transform 0.35s ease-out"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom two cards centered */}
          {bottomPair.length > 0 && (
            <div className="mt-8 sm:mt-10 md:mt-12 flex justify-start md:justify-center">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-3xl justify-center">
                {bottomPair.map((service) => {
                  const pos = mousePosition[service.id] || { x: 0, y: 0 };
                  const isHovered = pos.x !== 0 || pos.y !== 0;

                  return (
                    <div
                      key={service.id}
                      ref={(el) => { cardRefs.current[service.id] = el; }}
                      onMouseMove={(e) => handleMouseMove(e, service.id)}
                      onMouseLeave={() => handleMouseLeave(service.id)}
                      className="relative group cursor-pointer flex-1"
                      style={{ perspective: "1000px" }}
                    >
                      <div
                        className="relative min-h-[220px] sm:min-h-[240px] md:h-64 rounded-xl sm:rounded-2xl transition-all duration-500 ease-out"
                        style={{
                          background: `
                  linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 30%, rgba(255,255,255,0.00) 60%),
                  radial-gradient(circle at 50% 30%, rgba(255,255,255,0.06), rgba(255,255,255,0) 30%),
                  ${service.color}
                `,
                          transform: isHovered
                            ? `rotateX(${(pos.y - 120) / 22}deg) rotateY(${(pos.x - 100) / 22}deg)`
                            : "rotateX(0deg) rotateY(0deg)",
                          transformStyle: "preserve-3d",
                          boxShadow: "none",
                          border: "1px solid rgba(0,0,0,0.12)",
                          overflow: "hidden"
                        }}
                      >
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl p-[2px]">
                          <div className="h-full w-full rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
                            <div
                              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 bg-white"
                              style={{
                                transform: isHovered
                                  ? `translate(${(pos.x - 100) / 28}px, ${(pos.y - 120) / 28}px)`
                                  : "translate(0, 0)",
                                transition: "transform 0.2s ease-out"
                              }}
                            >
                              <span className="text-black font-extrabold">
                                {service.label}
                              </span>
                            </div>

                            <p
                              className="text-white text-sm sm:text-base font-extrabold leading-tight"
                              style={{
                                textShadow: "0 1px 0 rgba(0,0,0,0.35)",
                                transform: isHovered
                                  ? `translate(${(pos.x - 100) / 24}px, ${(pos.y - 120) / 24}px)`
                                  : "translate(0, 0)",
                                transition: "transform 0.2s ease-out"
                              }}
                            >
                              {service.title}
                            </p>

                            <div
                              className="absolute bottom-0 right-0"
                              style={{
                                width: 80,
                                height: 80,
                                background: "linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.1))",
                                clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                                transform: isHovered ? "scale(1.1)" : "scale(1)",
                                transformOrigin: "bottom right",
                                transition: "transform 0.35s ease-out"
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
