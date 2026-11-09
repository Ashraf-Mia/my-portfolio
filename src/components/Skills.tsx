import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaTools } from "react-icons/fa";
import { learning, skillGroups } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const icons = [FaLaptopCode, FaServer, FaTools];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="What I work with" title="Skills" />

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = icons[gi];
            return (
              <Reveal key={group.title} delay={gi * 0.1}>
                <div className="card h-full p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((s) => (
                      <div key={s.name}>
                        <div className="mb-1.5 flex justify-between text-sm">
                          <span>{s.name}</span>
                          <span className="text-slate-500 dark:text-slate-400">
                            {s.level}%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                          <motion.div
                            className="h-full rounded-full bg-linear-to-r from-teal-500 to-indigo-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {learning.map((l) => (
              <span
                key={l}
                className="card flex items-center gap-2 px-4 py-2 text-sm transition duration-300 hover:-translate-y-1"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal-500" />
                {l}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
