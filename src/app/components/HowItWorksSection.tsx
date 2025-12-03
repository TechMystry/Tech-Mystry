"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProcessStep } from './ProcessStep';
import { Search, Target, Palette, Code2, TestTube2, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Research',
    description: 'Deep dive into your business goals, market analysis, and user needs to build the perfect foundation.',
    icon: Search,
    features: ['Market Analysis', 'User Research', 'Requirements'],
    color: 'from-violet-500/10 to-purple-500/10',
    accentColor: 'bg-violet-500',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description: 'Create detailed roadmaps, technical architecture, and clear milestones for project success.',
    icon: Target,
    features: ['Product Roadmap', 'Tech Stack', 'Timeline'],
    color: 'from-blue-500/10 to-cyan-500/10',
    accentColor: 'bg-blue-500',
  },
  {
    number: '03',
    title: 'Design & Prototyping',
    description: 'Craft pixel-perfect interfaces and interactive prototypes that users love.',
    icon: Palette,
    features: ['UI/UX Design', 'Prototypes', 'Design System'],
    color: 'from-pink-500/10 to-rose-500/10',
    accentColor: 'bg-pink-500',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Build scalable, secure applications with cutting-edge tech and clean code.',
    icon: Code2,
    features: ['Frontend', 'Backend', 'Integration'],
    color: 'from-emerald-500/10 to-teal-500/10',
    accentColor: 'bg-emerald-500',
  },
  {
    number: '05',
    title: 'Testing & QA',
    description: 'Comprehensive testing across all devices to ensure flawless performance.',
    icon: TestTube2,
    features: ['Automated Tests', 'Manual QA', 'Security'],
    color: 'from-amber-500/10 to-orange-500/10',
    accentColor: 'bg-amber-500',
  },
  {
    number: '06',
    title: 'Launch & Support',
    description: 'Seamless deployment with ongoing support and continuous optimization.',
    icon: Rocket,
    features: ['Deployment', 'Monitoring', '24/7 Support'],
    color: 'from-indigo-500/10 to-blue-500/10',
    accentColor: 'bg-indigo-500',
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
        },
        opacity: 0,
        y: 60,
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 80%',
          end: 'top 65%',
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-black/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-black/[0.02] rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div ref={titleRef} className="mb-3 sm:mb-4 px-4">
            <h2 className="text-black">
              How We Build Digital Products
            </h2>
          </div>
          <p ref={subtitleRef} className="text-black/60 max-w-2xl mx-auto px-4">
            A streamlined process refined through hundreds of successful projects
          </p>
        </div>

        {/* Process Steps */}
        <div ref={stepsContainerRef} className="space-y-12 md:space-y-16 lg:space-y-20">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
