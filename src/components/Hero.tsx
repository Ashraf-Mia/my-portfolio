import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";
import { profile } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import SafeImage from "./SafeImage";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  const text = useTypewriter(profile.roles);

  return (
    <section id="home" className="flex min-h-screen items-center pt-24 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Hello, I'm
          </p>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-6xl dark:text-white">
            {profile.name}
          </h1>
          <h2 className="mt-4 min-h-8 text-lg font-medium text-slate-700 sm:text-2xl dark:text-slate-200">
            {text}
            <span className="animate-blink ml-0.5 text-teal-500">|</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed md:mx-0">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <FaEye /> View Resume
            </a>
            <a
              href="/resume.pdf"
              download="Ashraf-Mia-Resume.pdf"
              className="btn btn-outline"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 mx-auto md:order-2"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-teal-400/40 to-indigo-500/40 blur-2xl" />
            <div className="relative h-64 w-64 rounded-full bg-linear-to-br from-teal-400 to-indigo-500 p-1.5 sm:h-80 sm:w-80">
              <div className="h-full w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <SafeImage
                  src="/profile.jpg"
                  alt={profile.name}
                  className="h-full w-full object-cover"
                  fallback={
                    <div className="flex h-full w-full items-center justify-center text-6xl font-bold text-teal-600 dark:text-teal-400">
                      AM
                    </div>
                  }
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
