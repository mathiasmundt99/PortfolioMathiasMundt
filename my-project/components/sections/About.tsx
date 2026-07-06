import AboutSlider from "../ui/AboutSlider";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-32 md:px-10 lg:px-16">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">About</p>

      <h2 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-foreground">
        The man behind the code.
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        Behind every developer is a person with hobbies, interests and stories.
        Here's a little about mine.
      </p>

      <div className="mt-20">
        <AboutSlider />
      </div>
    </section>
  );
}
