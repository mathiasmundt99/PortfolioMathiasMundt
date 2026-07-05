type ProjectSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="py-28">
      <h2 className="text-4xl font-bold tracking-tight">{title}</h2>

      <div className="mt-10 max-w-3xl text-lg leading-9 text-zinc-400">
        {children}
      </div>
    </section>
  );
}
