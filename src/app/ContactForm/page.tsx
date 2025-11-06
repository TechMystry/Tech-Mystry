"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

/**
 * Contact Page
 * - Replace FORM_CARRY_ENDPOINT with: `https://formcarry.com/s/YOUR_FORMCARRY_ID`
 * - Keeps white bg / black text theme and high-quality animations
 */

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  project?: string;
};

const FORM_CARRY_ENDPOINT = "https://formcarry.com/s/WFLDSDu-kJL"; // <-- replace YOUR_FORMCARRY_ID

export default function ContactUsPage() {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const confirmButtonRef = useRef<HTMLButtonElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      project: "",
    },
  });

  // Watch fields so we can slightly animate submit availability
  const watched = watch();

  // For subtle page entrance animation
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Called when user clicks "Submit" — shows confirmation modal
  const onSubmit = (data: FormValues) => {
    setSubmitError(null);
    setShowConfirm(true);
    // focus confirm button for accessibility when modal opens
    setTimeout(() => confirmButtonRef.current?.focus(), 100);
  };

  // Called when user confirms in modal — sends to Formcarry
  const handleConfirm = async () => {
    // Get current form values (we could also call getValues() from useForm)
    const payload = {
      firstName: (document.querySelector('input[name="firstName"]') as HTMLInputElement)
        ?.value,
      lastName: (document.querySelector('input[name="lastName"]') as HTMLInputElement)
        ?.value,
      email: (document.querySelector('input[name="email"]') as HTMLInputElement)
        ?.value,
      mobile: (document.querySelector('input[name="mobile"]') as HTMLInputElement)
        ?.value,
      project: (document.querySelector('textarea[name="project"]') as HTMLTextAreaElement)
        ?.value,
    };

    try {
      setIsSubmitting(true);
      setSubmitError(null);

      // POST to Formcarry
      const resp = await fetch(FORM_CARRY_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(text || `Form submission failed (${resp.status})`);
      }

      // success
      setSuccessMessage("Thanks — your message was sent! Redirecting to home…");
      setShowConfirm(false);
      reset();
      // small delay so user sees success message
      setTimeout(() => {
        router.push("/");
      }, 1100);
    } catch (err: any) {
      console.error("Form submit error:", err);
      setSubmitError(
        err?.message || "There was a problem submitting the form. Please try again."
      );
      setIsSubmitting(false);
    }
  };

  // Cancel confirmation
  const handleCancelConfirm = () => {
    setShowConfirm(false);
  };

  // helper phone regex (simple international support)
  const PHONE_REGEX = /^\+?[0-9\-()\s]{7,20}$/;

  return (
    <main className="min-h-screen bg-white text-black antialiased">
      {/* Top hero / intro with SVG and entrance animation */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-start gap-8"
        >
          <div className="flex-1">
            <motion.h1
              initial={{ scale: 0.995 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.1 }}
              className="mt-4 text-lg text-gray-700 max-w-2xl"
            >
              Tell us about your idea — a quick chat is all it takes. Fill the form and we’ll
              get back to you promptly.
            </motion.p>

            {/* decorative animated SVG */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15 }}
              className="mt-8"
              aria-hidden
            >
              <svg
                viewBox="0 0 900 160"
                className="w-full h-32 md:h-40"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0 80 C120 10, 300 10, 420 80 C540 150, 720 150, 900 80 L900 160 L0 160 Z"
                  fill="url(#g1)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          </div>

          {/* animated floating card / highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="w-full md:w-96 p-6 border rounded-2xl shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3">Why work with us?</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Rapid prototypes</li>
              <li>• Scalable architecture</li>
              <li>• Clean UI & polished UX</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="px-4 py-2 bg-black text-white rounded-full text-sm"
                onClick={() => {
                  // focus first input on click
                  const el = document.querySelector<HTMLInputElement>('input[name="firstName"]');
                  el?.focus();
                }}
              >
                Start a chat
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="px-4 py-2 border rounded-full text-sm"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
              >
                View services
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Form section */}
      <section className="w-full max-w-4xl mx-auto px-6 pb-20">
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <label className="flex flex-col text-sm">
              <span className="font-medium mb-2">First name <span className="text-red-600">*</span></span>
              <input
                aria-invalid={errors.firstName ? "true" : "false"}
                {...register("firstName", {
                  required: "First name is required",
                  minLength: { value: 1, message: "Enter your first name" },
                })}
                name="firstName"
                placeholder="John"
                className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 ${
                  errors.firstName ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.firstName && (
                <span role="alert" className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </span>
              )}
            </label>

            {/* Last Name */}
            <label className="flex flex-col text-sm">
              <span className="font-medium mb-2">Last name <span className="text-red-600">*</span></span>
              <input
                aria-invalid={errors.lastName ? "true" : "false"}
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: { value: 1, message: "Enter your last name" },
                })}
                name="lastName"
                placeholder="Doe"
                className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 ${
                  errors.lastName ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.lastName && (
                <span role="alert" className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </span>
              )}
            </label>

            {/* Email */}
            <label className="flex flex-col text-sm">
              <span className="font-medium mb-2">Email <span className="text-red-600">*</span></span>
              <input
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                })}
                name="email"
                type="email"
                placeholder="john@example.com"
                className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 ${
                  errors.email ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.email && (
                <span role="alert" className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </span>
              )}
            </label>

            {/* Mobile */}
            <label className="flex flex-col text-sm">
              <span className="font-medium mb-2">Mobile number <span className="text-red-600">*</span></span>
              <input
                aria-invalid={errors.mobile ? "true" : "false"}
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: { value: /^\+?[0-9\-()\s]{7,20}$/, message: "Invalid phone number" },
                })}
                name="mobile"
                inputMode="tel"
                placeholder="+91 88055 26198"
                className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 ${
                  errors.mobile ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.mobile && (
                <span role="alert" className="text-red-500 text-xs mt-1">
                  {errors.mobile.message}
                </span>
              )}
            </label>
          </div>

          {/* Project / Idea (optional) */}
          <label className="block mt-6 text-sm">
            <span className="font-medium mb-2 block">Tell us about your idea or project (optional)</span>
            <textarea
              {...register("project", {
                maxLength: { value: 2000, message: "Maximum 2000 characters" },
              })}
              name="project"
              rows={6}
              placeholder="Describe goals, timelines, platform preference, budgets (optional)..."
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 border-gray-200"
            />
            {errors.project && (
              <span role="alert" className="text-red-500 text-xs mt-1">
                {errors.project.message}
              </span>
            )}
          </label>

          {/* Status / Actions */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <div>
              <AnimatePresence>
                {submitError && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="text-sm text-red-600"
                  >
                    {submitError}
                  </motion.p>
                )}
                {successMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="text-sm text-green-600"
                  >
                    {successMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-shadow ${
                  isSubmitting ? "bg-gray-200 text-black cursor-wait" : "bg-black text-white shadow"
                }`}
                aria-disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting…" : "Submit"}
                <motion.svg
                  initial={{ x: 0 }}
                  animate={{ x: isSubmitting ? 6 : 0 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className={`${isSubmitting ? "opacity-60" : ""}`}
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                className="px-4 py-3 rounded-full border text-sm"
                onClick={() => {
                  reset();
                }}
              >
                Reset
              </motion.button>
            </div>
          </div>
        </motion.form>
      </section>

      {/* CONFIRMATION MODAL */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={handleCancelConfirm}
            />

            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 12, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="relative bg-white text-black rounded-xl p-6 w-full max-w-md shadow-xl border"
            >
              <h3 className="text-lg font-semibold">Confirm submission</h3>
              <p className="mt-2 text-sm text-gray-700">
                Are you sure you want to submit? We'll send this message and then redirect you to the homepage.
              </p>

              <div className="mt-5 flex justify-end gap-3">
                <button
                  className="px-4 py-2 rounded-full border"
                  onClick={handleCancelConfirm}
                >
                  Cancel
                </button>
                <button
                  ref={confirmButtonRef}
                  onClick={handleConfirm}
                  disabled={isSubmitting}
                  className={`px-4 py-2 rounded-full text-white ${isSubmitting ? "bg-gray-300" : "bg-black"}`}
                >
                  {isSubmitting ? "Sending…" : "Yes, send"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
