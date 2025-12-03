import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProcessStepProps {
    step: {
        number: string;
        title: string;
        description: string;
        icon: LucideIcon;
        features: string[];
        color: string;
        accentColor: string;
    };
    index: number;
    isEven: boolean;
}

export function ProcessStep({ step, index, isEven }: ProcessStepProps) {
    const stepRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const iconContainerRef = useRef<HTMLDivElement>(null);
    const numberRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    const Icon = step.icon;

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Card entrance animation
            gsap.from(cardRef.current, {
                scrollTrigger: {
                    trigger: stepRef.current,
                    start: 'top 75%',
                    end: 'top 50%',
                    scrub: 1,
                },
                opacity: 0,
                y: 60,
                scale: 0.95,
            });

            // Icon container animation with rotation
            gsap.from(iconContainerRef.current, {
                scrollTrigger: {
                    trigger: stepRef.current,
                    start: 'top 70%',
                    end: 'top 50%',
                    scrub: 1,
                },
                opacity: 0,
                scale: 0,
                rotation: -180,
            });

            // Number parallax effect
            gsap.to(numberRef.current, {
                scrollTrigger: {
                    trigger: stepRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
                y: -40,
                opacity: 0.3,
            });

            // Content fade and slide
            gsap.from(contentRef.current?.children || [], {
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 80%',
                    end: 'top 60%',
                    scrub: 1,
                },
                opacity: 0,
                y: 20,
                stagger: 0.1,
            });

            // Glow effect on scroll
            gsap.to(glowRef.current, {
                scrollTrigger: {
                    trigger: stepRef.current,
                    start: 'top 60%',
                    end: 'top 40%',
                    scrub: 1,
                },
                opacity: 0.6,
                scale: 1.1,
            });

            // Hover animation
            const card = cardRef.current;
            if (card) {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -4,
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                    gsap.to(iconContainerRef.current, {
                        scale: 1.1,
                        rotation: 5,
                        duration: 0.4,
                        ease: 'back.out(1.7)',
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                    gsap.to(iconContainerRef.current, {
                        scale: 1,
                        rotation: 0,
                        duration: 0.4,
                        ease: 'back.out(1.7)',
                    });
                });
            }
        }, stepRef);

        return () => ctx.revert();
    }, [isEven]);

    return (
        <div ref={stepRef} className="relative group">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center`}>
                {/* Card */}
                <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <div
                        ref={cardRef}
                        className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-black/5 overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                    >
                        {/* Glow effect */}
                        <div
                            ref={glowRef}
                            className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${step.color} rounded-full blur-3xl opacity-0 transition-opacity duration-500`}
                        />

                        <div ref={contentRef} className="relative z-10">
                            {/* Header */}
                            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className={`w-6 sm:w-8 h-1 ${step.accentColor} rounded-full`} />
                                <span className="text-xs sm:text-sm text-black/40">{step.number}</span>
                            </div>

                            <h3 className="text-black mb-2 sm:mb-3">
                                {step.title}
                            </h3>

                            <p className="text-black/60 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                {step.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2">
                                {step.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="inline-flex items-center gap-2 bg-black/5 rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-black/70 hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                                    >
                                        <div className={`w-1 h-1 ${step.accentColor} rounded-full`} />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Icon Section */}
                <div className={`flex items-center justify-center ${isEven ? 'md:order-1' : 'md:order-2'} py-6 sm:py-8 md:py-0`}>
                    <div className="relative">
                        {/* Large number background */}
                        <div
                            ref={numberRef}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
                        >
                            <div className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[200px] opacity-5">
                                {step.number}
                            </div>
                        </div>

                        {/* Icon container */}
                        <div
                            ref={iconContainerRef}
                            className={`relative bg-black rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl border-2 sm:border-3 md:border-4 border-white z-10`}
                        >
                            <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                        </div>

                        {/* Decorative elements */}
                        <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${step.color} rounded-xl sm:rounded-2xl blur-xl opacity-50 scale-110`} />
                    </div>
                </div>
            </div>

            {/* Connection line */}
            {index < 5 && (
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-8 md:-bottom-10 w-px h-16 md:h-20 bg-gradient-to-b from-black/20 to-transparent" />
            )}
        </div>
    );
}
