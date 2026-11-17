"use client";

import React from "react";
import { motion } from "framer-motion";

export function ApproachSection() {
  const steps = [
    {
      step: "01",
      title: "Uncover the root problem",
      description:
        "I engage directly with users and stakeholders, map real-world constraints, and identify high-leverage opportunities worth solving before writing a single line of spec.",
    },
    {
      step: "02",
      title: "Scope a testable MVP",
      description:
        "I turn discovery insights into actionable product artifacts: unambiguous PRDs, explicit user journeys, and tightly scoped MVP boundaries with clear engineering tradeoffs.",
    },
    {
      step: "03",
      title: "Ship, measure, and iterate",
      description:
        "I partner hands-on with engineering through delivery, validate releases against quantitative metrics, and establish continuous feedback loops to refine what matters.",
    },
  ];

  return (
    <section id="approach" className="scroll-mt-24 py-12 md:py-16 border-b border-[var(--border-subtle)] bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-muted)] block font-semibold">
            Product Approach
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            From problem discovery to shipped product.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            How I collaborate with cross-functional teams: aligning on the core problem, defining MVP boundaries, and delivering with engineering.
          </p>
        </div>

        {/* 3 Step Cards in Squared Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.22 }}
              className="sq-card p-6 sm:p-8 flex flex-col justify-start gap-3 h-full hover:border-[#ff4500]/40 transition-all group"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#ff4500] uppercase tracking-wider">
                  Step {s.step} //
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                {s.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
