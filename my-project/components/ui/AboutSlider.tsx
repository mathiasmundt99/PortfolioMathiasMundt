"use client";

import Image from "next/image";
import { useState } from "react";

import { aboutItems } from "@/components/data/aboutItems";

export default function AboutSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = aboutItems[activeIndex];

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      {/* Image */}

      <div className="relative w-full max-w-lg overflow-hidden rounded-4xl border border-zinc-800 bg-zinc-900">
        <div className="relative aspect-4/5">
          <Image
            src={active.image}
            alt={active.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}

      <div>
        <h3 className="text-4xl font-semibold tracking-tight">
          {active.title}
        </h3>

        <p className="mt-8 min-h-20 max-w-xl text-lg leading-9 text-zinc-400">
          {active.text}
        </p>
        <div className="mt-12 space-y-6">
          {aboutItems.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setActiveIndex(index)}
              className={`flex w-fit items-center border-l-2 py-3 pl-5 pr-8 text-left transition-all duration-300 ${
                activeIndex === index
                  ? "translate-x-2 border-blue-500 text-white"
                  : "border-transparent text-zinc-500 hover:translate-x-1 hover:border-zinc-700 hover:text-zinc-300"
              }`}
            >
              <span className="text-xl font-medium tracking-tight">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
