"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

/* ============================================
   ABOUT PAGE CONTENT
   ============================================ */

const TEAM = [
  { 
    name: "Saqib Mehmood", 
    role: "Founder & CEO", 
    image: "/profile photos/saqib profile.png",
    bio: "Visionary leader building enterprise-grade AI systems. 4+ years of software architecture expertise."
  },
  { 
    name: "Kashif Mehmood", 
    role: "Co-founder & CTO", 
    image: "/profile photos/kashif profile.png",
    bio: "Full-stack engineer specializing in scalable infrastructure and AI integration."
  },
  { 
    name: "Hassan Aftab", 
    role: "Co-founder & CMO", 
    image: null,
    bio: "Growth strategist focused on market expansion and brand development."
  },
];

const VALUES = [
  { title: "Engineering-First", description: "We solve problems with architecture, not band-aids. Every system is built for scale.", icon: "⚡" },
  { title: "Data-Driven", description: "No guesswork. Every decision is backed by metrics, analytics, and measurable outcomes.", icon: "📊" },
  { title: "AI-Native", description: "We don't bolt on AI as an afterthought. It's embedded into everything we build.", icon: "🤖" },
  { title: "Radical Transparency", description: "Real-time dashboards, sprint updates, and open communication — always.", icon: "🔍" },
];

export default function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06)_0%,transparent_50%)]" />
        <div className="container-default relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-caption mb-4 block"
          >
            // About NexovianDigital
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-display max-w-4xl mx-auto mb-6"
          >
            We&apos;re Not an Agency.<br />
            We&apos;re <span className="text-gradient">Architects</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-body-lg max-w-2xl mx-auto"
          >
            Born from a belief that businesses deserve engineering teams, not just designers.
            We build systems that think, scale, and generate revenue autonomously.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding border-t border-white/[0.04]">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.7 }}
            >
              <span className="text-caption mb-3 block">// Our Mission</span>
              <h2 className="text-headline text-white mb-6">
                Democratize Enterprise-Grade Technology
              </h2>
              <p className="text-body-lg mb-4">
                The same AI, automation, and data infrastructure that Fortune 500 companies use shouldn&apos;t
                cost millions. We package it into accessible, scalable solutions for ambitious companies.
              </p>
              <p className="text-body">
                Every line of code we write, every AI agent we deploy, and every dashboard we build
                is designed with one goal: give our clients an unfair competitive advantage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.7 }}
              className="glass-card !p-8"
            >
              <p className="text-body text-[#9ca3af]">
                We combine deep technical expertise with strategic vision to deliver transformative solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-t border-white/[0.04]">
        <div className="container-default">
          <SectionHeading
            label="// Core Values"
            title="What We Stand For"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {VALUES.map((value) => (
              <motion.div key={value.title} variants={staggerItem} className="glass-card text-center">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2 font-[family-name:var(--font-heading)]">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding border-t border-white/[0.04]">
        <div className="container-default">
          <SectionHeading
            label="// The Engineers"
            title="Meet the Team"
            description="A diverse team of engineers, designers, and strategists building the future."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {TEAM.map((member) => (
              <motion.div 
                key={member.name} 
                variants={staggerItem} 
                className="glass-card overflow-hidden flex flex-col items-center text-center group hover:border-[#00d4ff]/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-500"
              >
                {/* Photo */}
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#00d4ff]/15 to-[#8b5cf6]/15 border-2 border-white/[0.08] flex items-center justify-center mx-auto mt-6 flex-shrink-0 overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-white/5 to-white/[0.02]">
                      <span className="text-white/30 text-xs font-medium">Coming soon</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between py-6 px-6 w-full">
                  <div>
                    <p className="text-base font-semibold text-white mb-1 font-[family-name:var(--font-heading)]">
                      {member.name}
                    </p>
                    <p className="text-sm text-[#00d4ff] font-medium mb-4">{member.role}</p>
                    <p className="text-sm text-[#9ca3af] leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  {/* Action */}
                  <button className="bg-gradient-to-r from-[#00d4ff] to-[#00ff88] text-black font-semibold py-2 px-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 text-sm w-full">
                    Connect
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
