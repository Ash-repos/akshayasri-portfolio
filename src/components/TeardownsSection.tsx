"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Presentation, Sparkles, Layers, Compass, Info } from "lucide-react";

interface TeardownItem {
  id: string;
  tag: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  coverImage: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TEARDOWNS: TeardownItem[] = [
  {
    id: "gemini",
    tag: "01 // MULTIMODAL",
    category: "LLM Architecture",
    title: "Google Gemini",
    subtitle: "Product Teardown & Capability Analysis",
    description:
      "Deep dive into multimodal reasoning architectures, context window scaling, UI ergonomics, and how native multimodal inputs transform user problem-solving workflows.",
    highlights: ["Multimodal UX", "Workspace Suite", "Reasoning Latency"],
    coverImage: "/teardowns/gemini-cover.webp",
    url: "https://sonatechac-my.sharepoint.com/:p:/g/personal/akshayasri_23ads_sonatech_ac_in/cQq7w1rfvYarSo-M2xVCVsp0EgUCUUmYbAAGSggI2Wyl5uhIjg",
    icon: Sparkles,
  },
  {
    id: "dreambeans",
    tag: "02 // DREAMBEANS",
    category: "Generative Vision",
    title: "Google DreamBeans",
    subtitle: "DreamBooth Product Teardown",
    description:
      "Deconstruction of subject-driven generative synthesis: analyzing few-shot personalization fidelity, creator experience workflows, and latency tradeoffs.",
    highlights: ["Subject Fidelity", "Creator Pipelines", "Latency vs Quality"],
    coverImage: "/teardowns/dreambeans-cover.webp",
    url: "https://sonatechac-my.sharepoint.com/:p:/g/personal/akshayasri_23ads_sonatech_ac_in/cQorGeEEAWn4RqCDRcquiybEEgUCIubxLlaawZ0SxMbNteIwEw",
    icon: Layers,
  },
  {
    id: "maps",
    tag: "03 // GOOGLE MAPS",
    category: "Spatial Logistics",
    title: "Google Maps Delivery Vision",
    subtitle: "Hyperlocal Logistics & Navigation Strategy",
    description:
      "Architectural analysis of multi-stop routing algorithms, driver telemetry feedback loops, real-time dispatch friction, and local business discoverability.",
    highlights: ["Multi-Stop Routing", "Driver Telemetry", "Local Discovery"],
    coverImage: "/teardowns/maps-cover.webp",
    url: "https://sonatechac-my.sharepoint.com/:p:/g/personal/akshayasri_23ads_sonatech_ac_in/cQryqiHNS9dkQ7Q6x6Q_VS47EgUCDmD9kjbRCW0Xn2RGL5GrPw",
    icon: Compass,
  },
];

export function TeardownsSection() {
  return (
    <section
      id="teardowns"
      className="scroll-mt-24 py-12 md:py-16 border-b border-[var(--border-subtle)] bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-muted)] block font-semibold">
              Product Teardowns
            </span>
            <span className="text-xs font-mono text-[#ff4500] font-bold">// 3 Presentations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Product Deconstructions.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Rigorous breakdowns of user flows, system architecture, UX tradeoffs, and product mechanics across modern consumer and AI products.
          </p>
        </div>

        {/* 3 Teardown Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {TEARDOWNS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="sq-card p-5 sm:p-6 flex flex-col justify-between h-full rounded-2xl hover:border-[#ff4500]/50 transition-all group cursor-pointer relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#ff4500]/40"
              >
                {/* Top Section */}
                <div className="flex flex-col flex-1">
                  {/* First Slide Cover as Card Visual */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--border-subtle)] shadow-xs mb-4">
                    <Image
                      src={item.coverImage}
                      alt={`${item.title} Slide Cover`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />

                    {/* Gradient Overlay for Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Presentation Pill */}
                    <div className="absolute top-2.5 right-2.5 px-2 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono text-white/90 font-medium flex items-center gap-1 border border-white/10 shadow-xs">
                      <Presentation className="w-3 h-3 text-[#ff4500]" />
                      <span>Slide Deck</span>
                    </div>
                  </div>

                  {/* 1. Tag & Category Row (Fixed Height, Single-Line, Never Wraps) */}
                  <div className="flex items-center justify-between gap-2 h-5 mb-2.5">
                    <span className="font-mono text-xs font-bold text-[#ff4500] tracking-wider truncate">
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)] shrink-0">
                      {item.category}
                    </span>
                  </div>

                  {/* 2. Title Row (Fixed Consistent Height for Perfect Alignment) */}
                  <div className="h-14 sm:h-16 flex items-start mb-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[#ff4500] transition-colors leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* 3. Subtitle Row (Fixed Consistent Height for Perfect Alignment) */}
                  <div className="h-7 sm:h-8 flex items-center mb-3">
                    <p className="font-sans text-xs font-semibold text-[var(--text-muted)] line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* 4. Description Row (Fixed Consistent Height for Perfect Alignment) */}
                  <div className="h-20 sm:h-22 flex items-start mb-4">
                    <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-4">
                      {item.description}
                    </p>
                  </div>

                  {/* 5. Highlight Chips (Fixed Height for Consistent Baseline) */}
                  <div className="h-14 sm:h-16 flex flex-wrap content-start gap-1.5 mb-2">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium sq-card-inset text-[var(--text-primary)]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer (Locked to the Bottom Across All Cards) */}
                <div className="pt-4 mt-auto border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                    <Icon className="w-3.5 h-3.5 text-[#ff4500]" />
                    <span>Open PPT Deck</span>
                  </div>

                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-[var(--text-primary)] bg-black/[0.04] dark:bg-white/[0.06] border border-[var(--border-subtle)] group-hover:bg-[#ff4500] group-hover:text-white group-hover:border-[#ff4500] transition-all shadow-xs">
                    <span>View Deck</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Methodology Note */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl sq-card-inset border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-3">
          <Info className="w-4 h-4 text-[#ff4500] shrink-0 mt-0.5" />
          <p>
            <strong className="font-mono font-semibold text-[var(--text-primary)]">Methodology Note:</strong>{" "}
            The core product strategy, user segmentation, and metric frameworks were structured independently; AI-assisted tooling was utilized to accelerate visual prototyping and slide layouts.
          </p>
        </div>
      </div>
    </section>
  );
}
