import { profile } from "../data/portfolio";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center text-sm">
        <SocialLinks />
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">{profile.name}</span>. All rights
          reserved.
        </p>
        <p className="text-slate-500 dark:text-slate-400">
          Built with React, Vite &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
