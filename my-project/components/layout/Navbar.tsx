import Link from "next/link";
import { Moon } from "lucide-react";

const navigation = [
  { title: "WORK", href: "#work" },
  { title: "SKILLS", href: "#skills" },
  { title: "ABOUT", href: "#about" },
  { title: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-xl">
      <div className="grid h-20 grid-cols-3 items-center px-6 md:px-10 lg:px-16">
        <div>
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white"
          >
            mathias.mundt
          </Link>
        </div>

        <nav className="hidden justify-center gap-10 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-zinc-300 transition-colors duration-200 hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex justify-end items-center gap-4">
          <button className="rounded-full p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
            <Moon size={18} />
          </button>

          <button className="rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-600">
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
}
