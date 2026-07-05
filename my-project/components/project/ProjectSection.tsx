import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectSectionProps = {
  section: Project["sections"][number];
};

export default function ProjectSection({ section }: ProjectSectionProps) {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-5xl font-bold tracking-tight">{section.title}</h2>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
          {section.description}
        </p>

        <div className="mt-16 overflow-hidden rounded-4xl border border-zinc-800">
          <Image
            src={section.image}
            alt={section.imageAlt ?? section.title}
            width={1600}
            height={900}
            className="w-full object-cover transition duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}
