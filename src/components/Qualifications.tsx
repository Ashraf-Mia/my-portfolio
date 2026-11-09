import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import type { IconType } from "react-icons";
import { education, experience } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Item = { title: string; place: string; period: string; points: string[] };

function Timeline({ items, Icon }: { items: Item[]; Icon: IconType }) {
  return (
    <div className="relative mx-auto max-w-3xl border-l-2 border-teal-500/30 pl-8">
      {items.map((it, i) => (
        <Reveal
          key={it.title + it.place}
          delay={i * 0.1}
          className="relative mb-10 last:mb-0"
        >
          <span className="absolute -left-[3.25rem] flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white ring-4 ring-slate-100 dark:bg-teal-500 dark:text-slate-950 dark:ring-slate-950">
            <Icon size={16} />
          </span>
          <div className="card p-6">
            <span className="chip">{it.period}</span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
              {it.title}
            </h3>
            <p className="text-sm font-medium text-teal-600 dark:text-teal-400">
              {it.place}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {it.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Qualifications() {
  return (
    <>
      <section id="education" className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            eyebrow="My background"
            title="Educational Qualification"
          />
          <Timeline items={education} Icon={FaGraduationCap} />
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="What I've done" title="Experience" />
          <Timeline items={experience} Icon={FaBriefcase} />
        </div>
      </section>
    </>
  );
}
