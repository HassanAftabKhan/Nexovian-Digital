"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

/* ============================================
   TESTIMONIALS SECTION — Client quotes
   with glassmorphism cards and avatars
   ============================================ */

export default function TestimonialsSection() {
  return (
    <section className="section-padding relative" id="testimonials">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container-default">
        <SectionHeading
          label="// Client Transmissions"
          title="Trusted by Industry Leaders"
          description="Don't take our word for it — hear from the companies we've helped transform."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.author} variants={staggerItem}>
              <div className="glass-card h-full flex flex-col p-8 group hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)] transition-all duration-500 relative overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00d4ff]/10 to-[#8b5cf6]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#00d4ff" stroke="none" className="drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base text-[#d1d5db] leading-relaxed mb-8 flex-1 italic relative z-10 font-[family-name:var(--font-mono)]">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-white/[0.06] relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 border border-white/[0.08] group-hover:border-[#00d4ff]/40 flex items-center justify-center transition-colors duration-500 shadow-inner">
                    <span className="text-sm font-bold text-white tracking-widest">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="text-sm text-white font-semibold font-[family-name:var(--font-heading)]">{t.author}</p>
                    <p className="text-xs text-[#00d4ff] mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
