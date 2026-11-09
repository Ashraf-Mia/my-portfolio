import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { navLinks, profile } from "../data/portfolio";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-slate-200 bg-slate-100/85 shadow-sm backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          to="/#home"
          onClick={(e) => go(e, "home")}
          className="flex items-center gap-2 font-bold text-slate-900 dark:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-teal-500 to-indigo-500 text-sm text-white">
            AM
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <Link
                  to={`/#${l.id}`}
                  onClick={(e) => go(e, l.id)}
                  className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 lg:hidden dark:border-slate-700 dark:text-slate-300"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden px-5 pb-4 lg:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.id}>
                <Link
                  to={`/#${l.id}`}
                  onClick={(e) => go(e, l.id)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-teal-500/10 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
