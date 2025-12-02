"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Globe, Smartphone, Cloud, Search, Code2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Web Development",
        desc: "We build lightning-fast, conversion-focused websites and web applications using Next.js, React, and modern frameworks. From landing pages that convert to complex dashboards and SaaS platforms — every pixel is crafted for performance, accessibility, and scalability.",
        icon: Globe,
        image: "/service/Web-Dev.png",
    },
    {
        title: "App Development",
        desc: "Native and cross-platform mobile apps that feel buttery smooth on iOS and Android. Built with React Native, Flutter, or Swift/Kotlin when needed. We handle everything: UI/UX design, offline support, push notifications, App Store deployment, and post-launch updates.",
        icon: Smartphone,
        image: "/service/App-Dev.png",
    },
    {
        title: "Cloud Solutions",
        desc: "Enterprise-grade cloud infrastructure on AWS, GCP, or Azure. We design auto-scaling architectures, implement CI/CD pipelines, set up monitoring & alerting, and optimize costs. Your app stays fast and available — even under massive traffic spikes.",
        icon: Cloud,
        image: "/service/Cloud.png",
    },
    {
        title: "SEO Optimization",
        desc: "Rank higher, get more traffic, convert better. Technical SEO audits, core web vitals optimization, schema markup, content strategy, backlink analysis, and monthly performance reports. We turn Google into your #1 growth channel.",
        icon: Search,
        image: "/service/SEO.png",
    },
    {
        title: "Full Stack Engineering",
        desc: "End-to-end development of scalable systems: beautiful React/accessible frontends with React/Next.js, robust backends using Node.js, NestJS, Python/Django, or Go, connected to PostgreSQL, MongoDB, or Redis. Secure auth, real-time features, third-party integrations — all in one team.",
        icon: Code2,
        image: "/service/UI-UX.png",
    },
];

export default function ExpertiseSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${services.length * 800}`,
                    scrub: 1, // Smoother scrubbing with slight delay
                    pin: true,
                    anticipatePin: 1, // Prevents jumping
                },
            });

            slidesRef.current.forEach((slide, index) => {
                if (!slide) return;

                // Set initial state - first slide visible, others hidden
                if (index === 0) {
                    gsap.set(slide, { autoAlpha: 1, y: 0 });
                } else {
                    gsap.set(slide, { autoAlpha: 0, y: 60 });
                }

                // Only animate slides after the first one to appear
                if (index > 0) {
                    tl.to(slide, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                    });
                }

                // Animate all slides to disappear except the last one
                if (index < slidesRef.current.length - 1) {
                    tl.to(slide, {
                        autoAlpha: 0,
                        y: -60,
                        duration: 1,
                        ease: "power2.in",
                    });
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center"
        >
            <div className="relative md:absolute md:top-1/2 md:-translate-y-1/2 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {services.map((service, i) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={i}
                            ref={(el) => (slidesRef.current[i] = el)}
                            className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 md:px-0"
                        >
                            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full md:max-w-lg text-center md:text-left px-4 sm:px-0">
                                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
                                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-800 flex-shrink-0" />
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                        {service.title}
                                    </h2>
                                </div>

                                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
                                    {service.desc}
                                </p>
                            </div>

                            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg h-64 sm:h-80 md:h-96 lg:h-[420px] flex-shrink-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority={i === 0}
                                    sizes="(max-width: 640px) 280px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}