import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const items = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneIntl}`,
    Icon: FaPhoneAlt,
  },
  {
    label: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/${profile.whatsapp}`,
    Icon: FaWhatsapp,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Let's talk" title="Contact Me" />

        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <p>
            Have a project in mind, a question, or just want to say hello? Reach
            out directly using any of the options below and I'll get back to you
            as soon as possible.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ label, value, href, Icon }, i) => (
            <Reveal key={label} delay={i * 0.1}>
              <a
                href={href}
                target={label === "WhatsApp" ? "_blank" : undefined}
                rel="noreferrer"
                className="card group flex flex-col items-center p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-teal-500/60 hover:shadow-xl hover:shadow-teal-500/10"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 transition duration-300 group-hover:bg-teal-500 group-hover:text-white dark:text-teal-400 dark:group-hover:text-slate-950">
                  <Icon size={22} />
                </span>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {label}
                </h3>
                <p className="mt-1 break-all text-sm">{value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
