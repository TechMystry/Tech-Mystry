"use client";

import React, { useEffect, useRef } from "react";

const OurStorySection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const milestones = [
    { date: "July 2025", title: "Company Founded", desc: "Started our journey with a vision to transform digital experiences" },
    { date: "August 2025", title: "First Client", desc: "Successfully delivered our first web application project" },
    { date: "October 2025", title: "Team Growth", desc: "Expanded our team to handle multiple projects simultaneously" },
    { date: "Present", title: "4 Happy Clients", desc: "Built lasting relationships with satisfied clients across various industries" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden py-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Every great journey begins with a single step. Here's how we started and where we're heading.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Story Text */}
          <div className="space-y-6">
            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full"></div>
              <h3 className="text-2xl font-bold text-black mb-4">The Beginning</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                In July 2025, we embarked on a mission to bridge the gap between innovative ideas and digital reality. What started as a passion project quickly evolved into a full-service digital agency.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our founders recognized the growing need for businesses to establish a strong digital presence, and we set out to provide comprehensive solutions that combine creativity, technology, and strategy.
              </p>
            </div>

            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-emerald-700 to-emerald-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-black mb-4">Our Growth</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                From our first client to building a portfolio of successful projects, each milestone has shaped our understanding of what it takes to deliver exceptional digital solutions. Today, we're proud to have earned the trust of businesses across various industries.
              </p>
            </div>
          </div>

          {/* Right - Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-700"></div>

            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full border-2 border-white"></div>

                <div className="ml-16 group">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="text-emerald-600 font-semibold text-sm mb-1">{milestone.date}</div>
                    <h4 className="text-black font-bold text-xl mb-2">{milestone.title}</h4>
                    <p className="text-gray-700">{milestone.desc}</p>
                  </div>

                  <div className="absolute inset-0 bg-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
