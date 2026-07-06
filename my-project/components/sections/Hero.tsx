"use client";

import { motion } from "framer-motion";
import { Mouse, ChevronDown } from "lucide-react";
import { scrollToSection } from "@/components/utils/scrollToSection";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center md:px-12">
      {/* Badge */}
      <div className="mb-8 rounded-full border border-border bg-surface/80 px-5 py-2">
        <span className="flex items-center gap-2 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Available for work
        </span>
      </div>

      {/* Heading */}
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className="max-w-6xl text-5xl font-bold leading-none tracking-tight text-foreground md:text-7xl xl:text-8xl"
        >
          Designing experiences,
          <br />
          <span className="text-primary">developing products.</span>
        </motion.h1>
      </div>

      {/* Description */}
      <p className="mt-10 max-w-2xl text-lg leading-8 text-muted md:text-xl">
        Frontend Developer passionate about building fast, accessible and
        intuitive digital experiences using React, Next.js and modern web
        technologies.
      </p>

      {/* Buttons */}
      <div className="mt-12 flex flex-col gap-12 sm:flex-row">
        <button
          onClick={() => scrollToSection("work")}
          className="rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:bg-primary-hover"
          aria-label="Scroll to projects section"
        >
          View Projects
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="rounded-full border border-border bg-surface px-8 py-4 font-semibold text-foreground transition hover:bg-surface-secondary"
          aria-label="Scroll to contact section"
        >
          Contact Me
        </button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("work")}
        aria-label="Scroll to projects"
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-1 rounded-full border border-border bg-surface/70 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:bg-surface-secondary">
          <Mouse size={18} strokeWidth={1.75} className="text-muted" />

          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={18} strokeWidth={1.75} className="text-muted" />
          </motion.div>
        </div>
      </button>
    </section>
  );
}
