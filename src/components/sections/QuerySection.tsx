"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { defaultViewport } from "@/lib/animations";

/* ============================================
   QUERY SECTION — Simple form for customer queries
   Collects name, email, message and sends via email
   ============================================ */

export default function QuerySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="section-padding border-t border-white/[0.04]">
        <div className="container-default max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7 }}
            className="glass-card text-center py-16"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mx-auto mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#34d399"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="text-title text-white mb-3">Query Received</h3>
            <p className="text-body max-w-md mx-auto mb-6">
              Thank you for reaching out. Our team has received your message and will get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2 rounded-lg bg-white/[0.08] border border-white/[0.16] text-white text-sm hover:bg-white/[0.12] transition-colors duration-300"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding border-t border-white/[0.04]">
      <div className="container-default max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <span className="text-caption mb-3 block">// Have Questions?</span>
            <h2 className="text-headline text-white mb-4">Send us a Query</h2>
            <p className="text-body-lg max-w-xl mx-auto">
              Have a question or want to discuss your project? Send us a message and our team will respond within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm text-[#9ca3af] mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm outline-none focus:border-[#00d4ff]/40 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-[#6b7280] disabled:opacity-50"
                placeholder="John Doe"
                disabled={loading}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-[#9ca3af] mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm outline-none focus:border-[#00d4ff]/40 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-[#6b7280] disabled:opacity-50"
                placeholder="john@example.com"
                disabled={loading}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-[#9ca3af] mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm outline-none focus:border-[#00d4ff]/40 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-[#6b7280] resize-none disabled:opacity-50"
                placeholder="Tell us about your question or project..."
                disabled={loading}
              />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-500/10 border border-red-500/20"
              >
                <p className="text-sm text-red-400">{error}</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-medium hover:shadow-lg hover:shadow-[#00d4ff]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Query"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
