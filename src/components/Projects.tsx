import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "../data/portfolio";
import Reveal from "./Reveal";
import SafeImage from "./SafeImage";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="My work" title="Projects" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-teal-500/60 hover:shadow-xl hover:shadow-teal-500/10">
                <div className="aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <SafeImage
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    fallback={
                      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-teal-500/30 to-indigo-500/30 text-4xl font-bold text-teal-700 dark:text-teal-300">
                        {p.title.slice(0, 2).toUpperCase()}
                      </div>
                    }
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed">
                    {p.short}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${p.slug}`}
                    className="btn btn-primary mt-6 self-start"
                  >
                    View Details <FaArrowRight size={12} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
