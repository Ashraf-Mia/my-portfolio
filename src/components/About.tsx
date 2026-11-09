import { about } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Get to know me" title="About Me" />

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="space-y-5 leading-relaxed lg:col-span-3">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
            <div>
              <h3 className="mb-3 font-semibold text-slate-900 dark:text-white">
                Beyond the code
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.hobbies.map((h) => (
                  <span key={h} className="chip">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1">
            {about.facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.1}>
                <div className="card p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-teal-500/60">
                  <p className="text-4xl font-extrabold text-teal-600 dark:text-teal-400">
                    {f.value}
                  </p>
                  <p className="mt-1 text-sm">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
