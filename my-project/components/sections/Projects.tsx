import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="px-6 py-32 md:px-10 lg:px-16">
      <p className="text-blue-500">Selected Work</p>

      <h2 className="mt-3 text-5xl font-bold">
        Projects I've enjoyed building.
      </h2>

      <p className="mt-6 max-w-2xl text-zinc-400">
        A selection of projects ranging from frontend applications to UX-focused
        experiences and full-stack solutions.
      </p>

      <div className="mt-20 grid gap-10 lg:grid-cols-2">
        <ProjectCard
          title="Alai"
          description="Live football analysis platform developed with React, Next.js and TypeScript."
          technologies={["React", "Next.js", "TypeScript", "Tailwind"]}
          image="/images/alai_portfolio.webp"
        />

        <ProjectCard
          title="ModuleX"
          description="An onboarding platform for customers of ModuleX, built with Vue, JavaScript and in cooperation with the backend team."
          technologies={["Vue", "Nuxt", "GSAP"]}
          image="/images/ModuleX_Portfolio.webp"
        />
      </div>
    </section>
  );
}
