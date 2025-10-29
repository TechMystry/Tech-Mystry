"use client";

import React, { useState } from "react";

const CallToActionSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    { icon: "⚡", text: "Fast Delivery" },
    { icon: "🎯", text: "Quality Assured" },
    { icon: "🔧", text: "Ongoing Support" },
    { icon: "💡", text: "Creative Solutions" },
  ];

  return (
    <section
    className="py-20 px-6 lg:px-24 text-white relative overflow-hidden bg-black">
      <div className="relative z-10 container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Ready to Transform Your{" "}
            <span className="block bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12">
            Join the businesses that have already transformed their digital landscape with our innovative solutions. Let’s build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              className="px-12 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold text-lg rounded-2xl shadow-emerald-500/20 shadow-lg transform hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Start Your Project
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-500/10 hover:border-emerald-400/40 transition-all duration-300 group"
              >
                <span className="text-2xl group-hover:scale-110 text-emerald-400 transition-transform duration-300">
                  {feature.icon}
                </span>
                <span className="text-gray-200 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Offer Section */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-emerald-800/20 to-emerald-700/10 backdrop-blur-sm rounded-3xl p-12 border border-emerald-400/20 shadow-lg text-center">
            <div className="relative z-10">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Limited Time Offer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Book your consultation this month and get{" "}
                <span className="text-emerald-400 font-bold">20% off</span> on
                your first project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                  Claim Your Discount
                </button>
                <span className="text-gray-400 text-sm">
                  Offer valid until end of month
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center relative">
          <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-600/30 backdrop-blur-sm rounded-3xl p-12 border border-emerald-400/30 shadow-xl">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let’s Build Something Amazing Together
              </h3>
              <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
                Your next big breakthrough is just one conversation away.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold text-lg rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  Get Started Now
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 mt-8 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>No Upfront Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
