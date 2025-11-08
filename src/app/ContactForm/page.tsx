"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  project?: string;
};

const FORM_CARRY_ENDPOINT = "https://formcarry.com/s/WFLDSDu-kJL";

export default function ContactUsPage() {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const confirmButtonRef = useRef<HTMLButtonElement | null>(null);

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: { firstName: "", lastName: "", email: "", mobile: "", project: "" },
  });

  const watched = watch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const onSubmit = () => {
    setSubmitError(null);
    setShowConfirm(true);
    setTimeout(() => confirmButtonRef.current?.focus(), 100);
  };

  const handleConfirm = async () => {
    const payload = {
      firstName: (document.querySelector('input[name="firstName"]') as HTMLInputElement)?.value,
      lastName: (document.querySelector('input[name="lastName"]') as HTMLInputElement)?.value,
      email: (document.querySelector('input[name="email"]') as HTMLInputElement)?.value,
      mobile: (document.querySelector('input[name="mobile"]') as HTMLInputElement)?.value,
      project: (document.querySelector('textarea[name="project"]') as HTMLTextAreaElement)?.value,
    };

    try {
      setIsSubmitting(true);
      const resp = await fetch(FORM_CARRY_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) throw new Error(`Form submission failed (${resp.status})`);

      setSuccessMessage("Thanks! Your message was sent successfully.");
      setShowConfirm(false);
      reset();
      setTimeout(() => router.push("/"), 1200);
    } catch (err: any) {
      console.error(err);
      setSubmitError(err?.message || "There was an error submitting the form.");
      setIsSubmitting(false);
    }
  };

  const handleCancelConfirm = () => setShowConfirm(false);

  return (
    <main className="min-h-screen bg-white antialiased px-6 md:px-12 py-20 font-sans">
      <section className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl  text-black font-extrabold leading-tight font-heading">
              Let's Build Something Amazing
            </h1>
            <p className="text-black text-lg font-body">
              Have an idea? Want to bring your project to life? Fill out the form and we’ll
              get back to you quickly. Whether it’s a website, app, or full-stack solution, we’re ready.
            </p>
            <ul className="space-y-2 text-gray-600 font-body">
              <li>• Rapid prototyping & MVPs</li>
              <li>• Scalable and secure architecture</li>
              <li>• Clean UI / UX design</li>
              <li>• End-to-end full-stack solutions</li>
            </ul>
          </motion.div>

          {/* Right Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100 p-10 rounded-3xl shadow-2xl border border-gray-200"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/** First Name */}
              <label className="flex flex-col text-sm">
                <span className="font-medium mb-2 text-black">First Name <span className="text-red-600">*</span></span>
                <input
                  {...register("firstName", { required: "First name is required" })}
                  placeholder="First"
                  className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/30 text-black placeholder-gray-500 ${
                    errors.firstName ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>}
              </label>

              {/** Last Name */}
              <label className="flex flex-col text-sm">
                <span className="font-medium mb-2 text-black">Last Name <span className="text-red-600">*</span></span>
                <input
                  {...register("lastName", { required: "Last name is required" })}
                  placeholder="Last"
                  className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/30 text-black placeholder-gray-500 ${
                    errors.lastName ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>}
              </label>

              {/** Email */}
              <label className="flex flex-col text-sm">
                <span className="font-medium mb-2 text-black">Email <span className="text-red-600">*</span></span>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                  })}
                  type="email"
                  placeholder="name@example.com"
                  className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/30 text-black placeholder-gray-500 ${
                    errors.email ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              </label>

              {/** Mobile */}
              <label className="flex flex-col text-sm">
                <span className="font-medium mb-2 text-black">Mobile <span className="text-red-600">*</span></span>
                <input
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: { value: /^\+?[0-9\-()\s]{7,20}$/, message: "Invalid phone number" },
                  })}
                  type="tel"
                  placeholder="+91 88055 88055"
                  className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/30 text-black placeholder-gray-500 ${
                    errors.mobile ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {errors.mobile && <span className="text-red-500 text-xs mt-1">{errors.mobile.message}</span>}
              </label>
            </div>

            {/** Project / Idea */}
            <label className="block mt-6 text-sm">
              <span className="font-medium mb-2 block text-black">Project / Idea (optional)</span>
              <textarea
                {...register("project", { maxLength: { value: 2000, message: "Max 2000 chars" } })}
                rows={6}
                placeholder="Describe your project, goals, timelines, budget..."
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/30 text-black placeholder-gray-500 border-gray-300"
              />
              {errors.project && <span className="text-red-500 text-xs mt-1">{errors.project.message}</span>}
            </label>

            {/** Status & Buttons */}
            <div className="mt-6 flex flex-col md:flex-row md:justify-between items-center gap-4">
              <div className="text-left">
                <AnimatePresence>
                  {submitError && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-600 text-sm">{submitError}</motion.p>}
                  {successMessage && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-green-600 text-sm">{successMessage}</motion.p>}
                </AnimatePresence>
              </div>

              <div className="flex gap-3">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-shadow ${
                    isSubmitting ? "bg-gray-200 text-black cursor-wait" : "bg-black text-white shadow-lg"
                  }`}
                >
                  {isSubmitting ? "Submitting…" : "Submit"}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  className="px-4 py-3 rounded-full border text-sm border-black text-black"
                  onClick={() => reset()}
                >
                  Reset
                </motion.button>
              </div>
            </div>
          </motion.form>
        </motion.div>
      </section>

      {/** Confirmation Modal */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center" role="dialog">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleCancelConfirm} />
            <motion.div initial={{ y: 24, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 12, opacity: 0, scale: 0.98 }} transition={{ duration: 0.28 }} className="relative bg-white text-black rounded-xl p-6 w-full max-w-md shadow-2xl border">
              <h3 className="text-lg font-semibold font-heading">Confirm Submission</h3>
              <p className="mt-2 text-sm text-black font-body">Are you sure you want to submit? We'll send this message and then redirect you to the homepage.</p>
              <div className="mt-5 flex justify-end gap-3">
                <button className="px-4 py-2 rounded-full border border-black text-black" onClick={handleCancelConfirm}>Cancel</button>
                <button ref={confirmButtonRef} onClick={handleConfirm} disabled={isSubmitting} className={`px-4 py-2 rounded-full text-white ${isSubmitting ? "bg-gray-300 cursor-wait" : "bg-black"}`}>{isSubmitting ? "Sending…" : "Yes, Send"}</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
