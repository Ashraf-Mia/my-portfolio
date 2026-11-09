import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { profile } from '../data/portfolio'
import { profile } from "../data/portfolio";

const items = [
  { label: "GitHub", href: profile.github, Icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedinIn },
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.whatsapp}`,
    Icon: FaWhatsapp,
  },
  { label: "Email", href: `mailto:${profile.email}`, Icon: FaEnvelope },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {items.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-500 hover:text-white dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-400 dark:hover:bg-teal-400 dark:hover:text-slate-950"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
