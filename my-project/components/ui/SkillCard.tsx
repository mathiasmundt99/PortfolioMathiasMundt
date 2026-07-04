type SkillCardProps = {
  title: string;
  skills: string[];
};

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <article className="group rounded-[28px] border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>

      <div className="mt-8 space-y-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-3 text-zinc-300 transition-colors group-hover:text-white"
          >
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
