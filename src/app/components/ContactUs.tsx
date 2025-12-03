'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { gsap } from 'gsap';

type FormData = {
  name: string;
  email: string;
  project: string;
};

export default function ContactPage() {
  const starRef = useRef<HTMLSpanElement>(null);
  const diamondRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ mode: 'onChange' });

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingData, setPendingData] = useState<FormData | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // ✨ Smooth scroll-linked rotation for star and diamond (gear removed)
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return;

    const rotateStar = starRef.current
      ? gsap.quickTo(starRef.current, 'rotate', { duration: 0.3, ease: 'power3.out', transformOrigin: 'center' })
      : null;
    const rotateDiamond = diamondRef.current
      ? gsap.quickTo(diamondRef.current, 'rotate', { duration: 0.3, ease: 'power3.out', transformOrigin: 'center' })
      : null;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      rotateStar && rotateStar(scrollY / 2);
      rotateDiamond && rotateDiamond(-scrollY / 2);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✨ Smooth entry animation for the whole section
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: 'easeOut' },
      });
    }
  }, [inView, controls]);

  const onSubmit = (data: FormData) => {
    setPendingData(data);
    setConfirmOpen(true);
  };

  const confirmAndSubmit = async () => {
    if (!pendingData) return;
    setConfirmOpen(false);
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('https://formcarry.com/s/WFLDSDu-kJL', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: pendingData.name,
          email: pendingData.email,
          project: pendingData.project,
        }),
      });

      if (!res.ok) {
        let message = 'Submission failed. Please try again.';
        try {
          const data = await res.json();
          if (data && data.message) message = data.message;
        } catch { }
        throw new Error(message);
      }

      setSuccessOpen(true);
      reset();
    } catch (e) {
      const msg = (e as any)?.message || 'Submission failed. Please try again.';
      setSubmitError(msg);
    } finally {
      setSubmitting(false);
      setPendingData(null);
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0.35, y: 80 }}
      animate={controls}
      className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* ------------------------------------------------------------
          Gear removed per request (no gear markup here)
         ------------------------------------------------------------ */}

      {/* 🌠 Hero Section */}
      <section className="relative flex flex-col justify-center pt-16 sm:pt-20 pb-24 sm:pb-32 px-4 sm:px-6 max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center md:text-left"
          >
            Let&apos;s Launch Your
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeInOut' }}
            className="flex flex-col items-center md:flex-row md:items-center mt-3 md:justify-start justify-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">Journey</h1>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              style={{ willChange: 'transform, opacity' }}
              className="flex items-center ml-0 md:ml-6 mt-3 md:mt-0"
            >
              <motion.span
                ref={starRef}
                whileHover={{ scale: 1.1, rotate: 20 }}
                transition={{ type: 'spring', stiffness: 180, damping: 12 }}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#a3c4d9] rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-4xl sm:text-5xl md:text-6xl text-[#0a0a0a] leading-none scale-110">★</span>
              </motion.span>

              <motion.span
                ref={diamondRef}
                whileHover={{ scale: 1.1, rotate: -20 }}
                transition={{ type: 'spring', stiffness: 180, damping: 12 }}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#c7d9c4] rounded-full flex items-center justify-center shadow-md -ml-1"
              >
                <span className="text-4xl sm:text-5xl md:text-6xl text-[#0a0a0a] leading-none scale-110">◆</span>
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 💬 Contact Form Section */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto -mt-20 sm:-mt-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full text-left flex flex-col items-start ml-0 -ml-6 sm:-ml-10 md:-ml-14"
          >
            <p className="text-[#b8b8b8] text-base md:text-lg leading-relaxed max-w-xl">
              We offer free consultations for your next digital product or service.
              Let’s discuss how we can help you build, scale, and optimize your idea.
            </p>

            <div className="mt-10 space-y-3">
              <p className="text-xs text-[#888] uppercase tracking-wider">Contact Us</p>

              <a
                href="mailto:dev.techmystry@gmail.com"
                className="block text-white hover:text-[#cbbaba] transition-colors text-sm md:text-base"
              >
                dev.techmystry@gmail.com
              </a>

              <a
                href="tel:+918805526198"
                className="block text-white hover:text-[#cbbaba] transition-colors text-sm md:text-base"
              >
                +91 88055 26198
              </a>
            </div>
          </motion.div>


          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <label className="block text-xs sm:text-sm text-[#888] uppercase tracking-wider mb-2">
                First & Last Name
              </label>
              <input
                {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name is too short' } })}
                className="w-full bg-transparent border-b border-[#444] text-white placeholder-[#777] pb-2 focus:border-[#cbbaba] focus:outline-none transition-all text-sm md:text-base"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <label className="block text-xs sm:text-sm text-[#888] uppercase tracking-wider mb-2">Email</label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                })}
                type="email"
                className="w-full bg-transparent border-b border-[#444] text-white placeholder-[#777] pb-2 focus:border-[#cbbaba] focus:outline-none transition-all text-sm md:text-base"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <label className="block text-xs sm:text-sm text-[#888] uppercase tracking-wider mb-2">
                About Your Project
              </label>
              <textarea
                {...register('project', {
                  required: 'Please describe your project',
                  minLength: { value: 10, message: 'Please tell us more about your project' },
                })}
                rows={4}
                className="w-full bg-transparent border-b border-[#444] text-white placeholder-[#777] pb-2 focus:border-[#cbbaba] focus:outline-none transition-all resize-none text-sm md:text-base"
                placeholder="Tell us about your project goals..."
              />
              {errors.project && <p className="text-red-400 text-xs mt-1">{errors.project.message}</p>}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              transition={{ type: 'spring', stiffness: 220, damping: 12 }}
              className="mt-6 sm:mt-8 inline-flex items-center gap-3 bg-[#f0f0f0] text-[#1b1b1b] px-6 sm:px-8 py-2 sm:py-2.5 rounded-full font-medium hover:bg-[#e3e3e3] transition-all shadow-md text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={!isValid || submitting}
            >
              {submitting ? 'Sending…' : 'Send Message →'}
            </motion.button>

            {submitError && (
              <div className="text-red-400 text-sm mt-2" role="alert">
                {submitError}
              </div>
            )}
          </motion.form>
        </div>
      </section>

      <div className="h-24" />

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmOpen && pendingData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setConfirmOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121212] text-white rounded-2xl p-6 w-full max-w-md border border-[#2a2a2a] shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-3">Confirm Submission</h3>
              <p className="text-sm text-gray-300 mb-4">Please confirm your details before sending:</p>
              <div className="space-y-2 text-sm">
                <div><span className="text-gray-400">Name:</span> {pendingData.name}</div>
                <div><span className="text-gray-400">Email:</span> {pendingData.email}</div>
                <div><span className="text-gray-400">Project:</span> {pendingData.project}</div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  className="px-4 py-2 rounded-lg bg-[#2a2a2a] hover:bg-[#333]"
                  onClick={() => setConfirmOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded-lg bg-[#f0f0f0] text-[#1b1b1b] hover:bg-[#e3e3e3]"
                  onClick={confirmAndSubmit}
                >
                  Confirm & Send
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Popup */}
      <AnimatePresence>
        {successOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSuccessOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121212] text-white rounded-2xl p-6 w-full max-w-sm border border-[#2a2a2a] shadow-2xl text-center"
            >
              <div className="text-4xl mb-2">✅</div>
              <h3 className="text-xl font-bold mb-2">Message Sent</h3>
              <p className="text-sm text-gray-300">Thank you! We’ll get back to you soon.</p>
              <button
                className="mt-6 px-5 py-2 rounded-full bg-[#f0f0f0] text-[#1b1b1b] hover:bg-[#e3e3e3]"
                onClick={() => setSuccessOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
