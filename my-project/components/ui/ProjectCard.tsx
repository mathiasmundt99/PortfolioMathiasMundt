import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
};

export default function ProjectCard({
  title,
  slug,
  description,
  technologies,
  image,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <article className="group overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-900/60 transition-all duration-500 hover:-translate-y-2 hover:border-zinc-700">
        {/* Image */}
        <div className="relative aspect-16/10 overflow-hidden bg-zinc-800">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950/20 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-semibold tracking-tight">{title}</h3>

            <span className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              ↗
            </span>
          </div>

          <p className="mt-5 leading-7 text-zinc-400">{description}</p>

          <p className="mt-8 text-sm tracking-wide text-zinc-500">
            {technologies.join(" · ")}
          </p>
        </div>
      </article>
    </Link>
  );
}
