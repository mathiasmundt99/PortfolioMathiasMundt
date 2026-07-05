import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

import BackButton from "@/components/project/BackButton";
import ProjectHero from "@/components/project/ProjectHero";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  console.log("Slug:", slug);
  console.log("Projects:", projects);
  console.log("Found project:", project);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-zinc-950 px-6 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="pt-12">
          <BackButton />
        </div>

        <ProjectHero
          title={project.title}
          subtitle={project.subtitle}
          image={project.image}
          technologies={project.technologies}
        />
      </div>
    </main>
  );
}
