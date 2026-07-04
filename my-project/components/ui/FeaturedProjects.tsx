type FeaturedProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
};

export default function FeaturedProject({
  title,
  description,
  technologies,
}: FeaturedProjectProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition hover:border-zinc-700">
      <div className="aspect-16/8 bg-zinc-800" />

      <div className="p-10">
        <h3 className="text-3xl font-semibold">{title}</h3>

        <p className="mt-4 max-w-3xl text-zinc-400">{description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
