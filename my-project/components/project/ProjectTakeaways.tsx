import type { Project } from "@/data/projects";

type ProjectTakeawaysProps = {
  project: Project;
};

export default function ProjectTakeaways({ project }: ProjectTakeawaysProps) {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
          {project.takeaways.heading}
        </p>

        <div className="mt-10 space-y-6">
          {project.takeaways.items.map((item, index) => (
            <div key={index} className="flex gap-4">
              <span className="mt-1 text-blue-500">•</span>

              <p className="text-lg leading-8 text-zinc-400">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
