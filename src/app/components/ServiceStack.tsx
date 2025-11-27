// src/components/WhatWeDo.tsx
"use client";

import React, { JSX } from "react";
import { ArrowRight } from "lucide-react";

// Auto-select text color based on brightness
function getTextColor(hex: string) {
    const c = hex.replace("#", "");
    const r = parseInt(c.substr(0, 2), 16);
    const g = parseInt(c.substr(2, 2), 16);
    const b = parseInt(c.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155 ? "black" : "white";
}

type Card = {
    id: string;
    title: string;
    description: string;
    cta?: string;
    vignette?: string;
    baseColor: string;
};

const TOP_BG = "#ffffff";

const topCards: Card[] = [
    {
        id: "web-dev",
        title: "Web Development",
        description:
            "We build websites based on your needs, from custom-coded solutions to platforms like Shopify, WordPress, and no-code tools.",
        cta: "Request a quote",
        baseColor: "#FF6B6B",
        vignette:
            "radial-gradient(circle at right center, #FF9A9A 0%, #FF6B6B 45%, #B10000 100%)",
    },
    {
        id: "uiux",
        title: "UI/UX",
        description:
            "We design websites and apps that seamlessly merge functionality with modern design and micro interactions.",
        cta: "See our work",
        baseColor: "#4ECDC4",
        vignette:
            "radial-gradient(circle at right center, #9CF7EE 0%, #4ECDC4 45%, #007F78 100%)",
    },
];

const bottomCards: Card[] = [
    {
        id: "app",
        title: "App development",
        description:
            "We turn your vision into powerful, user-friendly apps. From iOS to Android and cross-platform solutions.",
        baseColor: "#FFD93D",
        vignette:
            "radial-gradient(circle at right center, #FFF07A 0%, #FFD93D 45%, #B88600 100%)",
    },
    {
        id: "ai",
        title: "AI Solutions",
        description:
            "Harness AI's power to transform your business with automation and intelligent workflows.",
        baseColor: "#1A1A2E",
        vignette:
            "radial-gradient(circle at right center, #3A3A5C 0%, #1A1A2E 45%, #000009 100%)",
    },
    {
        id: "seo",
        title: "SEO",
        description:
            "Boost your digital presence with data-driven SEO strategies to reach your target audience and rank higher.",
        baseColor: "#7B2CBF",
        vignette:
            "radial-gradient(circle at right center, #C084FF 0%, #7B2CBF 45%, #3A0D66 100%)",
    },
];

export default function WhatWeDo(): JSX.Element {
    return (
        <section style={{ background: TOP_BG }} className="min-h-screen py-8">
            <div className="max-w-[1400px] mx-auto px-6">
                <h1
                    className="font-extrabold leading-none tracking-tight text-center mb-6"
                    style={{ fontSize: "6rem", lineHeight: 0.95, color: "#000" }}
                >
                    What We Do
                </h1>

                {/* TOP CARDS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    {topCards.map((c) => {
                        const textColor = getTextColor(c.baseColor);
                        const secondary =
                            textColor === "white" ? "text-white/80" : "text-black/70";

                        return (
                            <article
                                key={c.id}
                                className="rounded-[22px] p-8 shadow-lg"
                                style={{
                                    background: c.vignette,
                                    minHeight: "30vh",
                                }}
                            >
                                <h3
                                    className="text-3xl font-extrabold mb-3"
                                    style={{ color: textColor }}
                                >
                                    {c.title}
                                </h3>

                                <p className={`text-sm max-w-xl mb-4 ${secondary}`}>
                                    {c.description}
                                </p>

                                {c.cta && (
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium shadow"
                                    >
                                        {c.cta}
                                        <ArrowRight size={14} />
                                    </a>
                                )}
                            </article>
                        );
                    })}
                </div>

                {/* BOTTOM CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {bottomCards.map((c) => {
                        const textColor = getTextColor(c.baseColor);
                        const secondary =
                            textColor === "white" ? "text-white/70" : "text-black/70";

                        return (
                            <article
                                key={c.id}
                                className="rounded-[18px] p-6 shadow-md"
                                style={{
                                    background: c.vignette,
                                    minHeight: "18vh",
                                }}
                            >
                                <h4
                                    className="font-bold text-lg mb-2"
                                    style={{ color: textColor }}
                                >
                                    {c.title}
                                </h4>

                                <p className={`text-xs ${secondary}`}>{c.description}</p>
                            </article>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="w-full flex justify-center mt-8">
                    <a
                        href="#"
                        className="inline-block rounded-full bg-black text-white px-6 py-2 text-sm font-semibold shadow-lg"
                    >
                        Request a quote
                    </a>
                </div>
            </div>
        </section>
    );
}
