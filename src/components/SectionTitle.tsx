import Reveal from "./Reveal";

export default function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-teal-400 to-indigo-500" />
    </Reveal>
  );
}
