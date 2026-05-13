"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { defaultViewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQS } from "@/lib/constants";

/* ============================================
   FAQ SECTION — Accordion-style FAQ
   with smooth animations
   ============================================ */

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding relative" id="faq">
      <div className="container-default max-w-3xl">
        <SectionHeading
          label="// Knowledge Base"
          title="Frequently Asked Questions"
          description="Everything you need to know before we initialize your project."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7 }}
          className="space-y-3"
        >
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`glass-panel overflow-hidden transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.04] ${
                openIndex === i ? "border-[#00d4ff]/30 shadow-[0_0_30px_rgba(0,212,255,0.05)] bg-white/[0.03]" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left group"
                id={`faq-toggle-${i}`}
              >
                <span className={`text-base font-medium transition-colors duration-300 pr-4 ${openIndex === i ? "text-[#00d4ff]" : "text-white group-hover:text-[#00d4ff]/80"}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 135 : 0 }}
                  transition={{ duration: 0.4, ease: "backOut" }}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    openIndex === i ? "border-[#00d4ff]/40 bg-[#00d4ff]/10 text-[#00d4ff]" : "border-white/10 text-[#6b7280] group-hover:border-white/20"
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-sm text-[#9ca3af] leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
