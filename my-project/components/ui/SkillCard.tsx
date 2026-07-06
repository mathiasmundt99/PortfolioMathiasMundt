type SkillCardProps = {
  title: string;
  skills: string[];
};

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <article className="group rounded-[28px] border border-border bg-surface/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20">
      <h3 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h3>

      <div className="mt-8 space-y-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-3 text-muted transition-colors group-hover:text-foreground"
          >
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
