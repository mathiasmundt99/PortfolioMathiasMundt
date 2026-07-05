"use client";

import Link from "next/link";
import { Moon } from "lucide-react";

import { scrollToSection } from "@/components/utils/scrollToSection";

const navigation = [
  { title: "WORK", id: "work" },
  { title: "SKILLS", id: "skills" },
  { title: "ABOUT", id: "about" },
  { title: "CONTACT", id: "contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-xl">
      <div className="grid h-20 grid-cols-3 items-center px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white"
          >
            mathias.mundt
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden justify-center gap-10 md:flex">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium tracking-wide text-zinc-300 transition-colors duration-200 hover:text-white"
            >
              {item.title}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4">
          <button className="rounded-full p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
            <Moon size={18} />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
}
