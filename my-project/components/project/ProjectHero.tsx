import Image from "next/image";

type ProjectHeroProps = {
  title: string;
  subtitle: string;
  technologies: string[];
  image: string;
};

export default function ProjectHero({
  title,
  subtitle,
  technologies,
  image,
}: ProjectHeroProps) {
  return (
    <section className="pt-32">
      <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
        Case Study
      </p>

      <h1 className="mt-4 text-6xl font-bold tracking-tight">{title}</h1>

      <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-400">
        {subtitle}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-16 overflow-hidden rounded-4xl border border-zinc-800">
        <Image
          src={image}
          alt={title}
          width={1600}
          height={900}
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}
