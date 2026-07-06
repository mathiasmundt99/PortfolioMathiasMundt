import SkillCard from "../ui/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-32 md:px-10 lg:px-16">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
        Toolkit
      </p>

      <h2 className="mt-4 text-5xl font-bold tracking-tight text-foreground">
        Technologies I enjoy working with.
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        I enjoy building modern, performant and accessible web applications
        using technologies that prioritize developer experience and user
        experience.
      </p>

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <SkillCard
          title="Frontend"
          skills={[
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "Vue",
          ]}
        />

        <SkillCard
          title="Backend"
          skills={["Node.js", "Express", "MongoDB", "REST API", "JWT", "MySQL"]}
        />

        <SkillCard
          title="Tools"
          skills={["GitHub", "Figma", "Vercel", "VS Code", "Git", "Swagger"]}
        />
      </div>
    </section>
  );
}
