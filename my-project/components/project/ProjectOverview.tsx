import type { Project } from "@/data/projects";

type ProjectOverviewProps = {
  project: Project;
};

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="grid gap-20 py-32 lg:grid-cols-[2fr_1fr]">
      {/* Left */}
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
          The Project
        </p>

        <h2 className="mt-4 text-5xl font-bold tracking-tight">
          {project.overview.heading}
        </h2>

        <p className="mt-10 max-w-3xl text-lg leading-9 text-zinc-400">
          {project.overview.text}
        </p>
      </div>

      {/* Right */}
      <aside className="space-y-10">
        {project.metadata.map((item) => (
          <div key={item.label}>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              {item.label}
            </p>

            <p className="mt-2 text-xl font-medium">{item.value}</p>
          </div>
        ))}

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Technologies
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
