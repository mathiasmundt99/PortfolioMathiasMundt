export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
          Contact
        </p>

        <h2 className="mt-4 text-5xl font-bold tracking-tight">
          Ready to create something together?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          I'm always open to discussing new opportunities, exciting projects or
          simply connecting with like-minded people.
        </p>

        {/*Mail skal sættes op*/}
        <a
          href="mailto:mathiasbeck99@gmail.com"
          className="mt-12 inline-flex rounded-full bg-blue-500 px-8 py-4 text-lg font-medium text-white transition hover:bg-blue-600"
        >
          Get in touch
        </a>

        <div className="mt-16 flex flex-wrap justify-center gap-10 text-zinc-500">
          <a
            href="mailto:mathiasbeck99@gmail.com"
            className="transition hover:text-white"
          >
            Email
          </a>

          <a
            href="https://linkedin.com/in/mathias-mundt"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/mathiasmundt99"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
