import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

import BackButton from "@/components/project/BackButton";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectSection from "@/components/project/ProjectSection";
import ProjectTakeaways from "@/components/project/ProjectTakeaways";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

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
          image={project.images.hero}
          technologies={project.technologies}
        />

        <ProjectOverview project={project} />

        {project.sections.map((section) => (
          <ProjectSection key={section.title} section={section} />
        ))}

        <ProjectTakeaways project={project} />
      </div>
    </main>
  );
}
