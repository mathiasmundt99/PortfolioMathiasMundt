import Navbar from "@/components/layoutMappe/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="min-h-screen  bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
    </main>
  );
}
