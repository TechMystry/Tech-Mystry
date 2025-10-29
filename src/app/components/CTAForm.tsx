"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  "Web Development",
  "Mobile Development",
  "SEO Optimization",
  "Cloud Computing",
  "E-Commerce",
  "Other",
];

export default function CTAForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: services[0],
  });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[999] flex items-center justify-center p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-900 p-6 md:p-8 rounded-2xl w-full max-w-md shadow-2xl text-white"
        >
          <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
            Request a Callback
          </h3>

          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-slate-800 p-3 rounded-lg mb-4 outline-none border border-slate-700"
          />

          <PhoneInput
            value={formData.phone}
            onChange={(v) => setFormData({ ...formData, phone: v || "" })}
            inputClass="!w-full !bg-slate-800 !text-white"
            containerClass="mb-4"
          />

          <select
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
            className="w-full bg-slate-800 p-3 rounded-lg mb-4 outline-none border border-slate-700"
          >
            {services.map((s, i) => (
              <option key={i}>{s}</option>
            ))}
          </select>

          <button className="w-full bg-emerald-500 hover:bg-emerald-600 p-3 rounded-lg font-semibold">
            Submit
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
