import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  comingSoon: boolean;
};

export default function ProjectCard({
  slug,
  title,
  description,
  technologies,
  image,
  comingSoon,
}: ProjectCardProps) {
  const card = (
    <article
      className={`group overflow-hidden rounded-[28px] border border-border bg-surface/60 transition-all duration-500 ${
        comingSoon
          ? "cursor-not-allowed opacity-80"
          : "hover:-translate-y-2 hover:border-foreground/20"
      }`}
    >
      {/* Image */}
      <div className="relative aspect-16/10 overflow-hidden bg-surface-secondary">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
          className={`object-cover transition-transform duration-700 ${
            comingSoon ? "" : "group-hover:scale-105"
          }`}
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent" />

        {/* Coming Soon */}
        {comingSoon && (
          <div className="absolute right-4 top-4 rounded-full border border-border bg-surface/90 px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted backdrop-blur-md">
            Coming Soon
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-semibold tracking-tight text-foreground">
            {title}
          </h3>

          {!comingSoon && (
            <span className="translate-x-2 text-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              ↗
            </span>
          )}
        </div>

        <p className="mt-5 leading-7 text-muted">{description}</p>

        <p className="mt-8 text-sm tracking-wide text-muted">
          {technologies.join(" · ")}
        </p>
      </div>
    </article>
  );

  if (comingSoon) {
    return card;
  }

  return <Link href={`/projects/${slug}`}>{card}</Link>;
}
