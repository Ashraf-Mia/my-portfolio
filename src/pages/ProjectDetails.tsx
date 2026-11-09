import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolio";
import SafeImage from "../components/SafeImage";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-5 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Project not found
        </h1>
        <Link to="/#projects" className="btn btn-primary">
          <FaArrowLeft /> Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="px-5 pt-28 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        <Link
          to="/#projects"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:underline dark:text-teal-400"
        >
          <FaArrowLeft size={12} /> Back to Projects
        </Link>

        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
          {project.title}
        </h1>

        <div className="card mt-8 aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
          <SafeImage
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            fallback={
              <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-teal-500/30 to-indigo-500/30 text-6xl font-bold text-teal-700 dark:text-teal-300">
                {project.title.slice(0, 2).toUpperCase()}
              </div>
            }
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <FaExternalLinkAlt size={13} /> Live Project
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> GitHub Repository
          </a>
        </div>

        <section className="mt-12">
          <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
            Description
          </h2>
          <p className="leading-relaxed">{project.description}</p>
        </section>

        <section className="mt-10">
          <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
            Main Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="card p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              Challenges Faced
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {project.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <section className="card p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              Improvements &amp; Future Plans
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {project.future.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
