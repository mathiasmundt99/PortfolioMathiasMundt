"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center md:px-12">
      {/* Badge */}
      <div className="mb-8 rounded-full border border-zinc-800 bg-zinc-900/80 px-5 py-2">
        <span className="flex items-center gap-2 text-sm text-zinc-300">
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
          className="max-w-6xl text-5xl font-bold leading-none tracking-tight md:text-7xl xl:text-8xl"
        >
          Designing experiences,
          <br />
          <span className="text-blue-500">developing products.</span>
        </motion.h1>
      </div>

      {/* Description */}
      <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
        Frontend Developer passionate about building fast, accessible and
        intuitive digital experiences using React, Next.js and modern web
        technologies.
      </p>

      {/* Buttons */}
      <div className="mt-12 flex flex-col gap-12 sm:flex-row">
        <button className="rounded-full bg-blue-500 px-8 py-4 font-semibold transition hover:bg-blue-600">
          View Projects
        </button>

        <button className="rounded-full border border-zinc-700 bg-zinc-900 px-8 py-4 font-semibold transition hover:bg-zinc-800">
          Contact Me
        </button>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-12 text-zinc-500">↓</div>
    </section>
  );
}
