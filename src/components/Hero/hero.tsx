import { Icon } from "@/components/ui/icon";
import { motion } from "motion/react";

export function Hero() {
  const links = [
    {
      href: "https://www.github.com/saulmn",
      icon: "github",
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/saulmn/",
      icon: "linkedin",
      alt: "Linkedin",
    },
    {
      href: "https://docs.google.com/document/d/1CkjShwaErm3X8dNuLtzPqajTejWy-GxA/edit?usp=drive_link&ouid=101233696113083242593&rtpof=true&sd=true",
      icon: "cv",
      alt: "CV",
    },
    {
      href: "mailto:saulmn.2599@gmail.com",
      icon: "mail",
      alt: "Email",
    },
  ];
  const words = [
    "Computer Science Engineer",
    "Software Developer",
    "Tech Nerd",
    "Mountain Biker",
    "Coffee Enthusiast",
  ];
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <section className="w-full h-screen flex justify-center items-center mt-8 md:mt-0 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 max-w-5xl gap-10 p-4">
        <div className="flex col-span-1 md:col-span-3 flex-col items-start justify-center gap-16">
          <article className="text-4xl mx-auto h-auto font-semibold text-gray-800 dark:text-gray-100">
            <p className="z-10 inline-block relative text-center md:text-left">
              Hi ✌️, my name is Saúl and I'm a Computer Science Engineer
            </p>
          </article>
          <div className="flex justify-around w-full">
            {links.map((link) => (
              <motion.a
                key={link.href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href={link.href}
                aria-label={link.alt}
                title={link.alt}
                target="_blank"
                rel="noreferrer"
                className="hover:bg-gray-200 dark:hover:bg-gray-700 p-3 rounded-full transition-colors duration-300"
              >
                <Icon name={link.icon} className="w-6 h-6 text-gray-900 dark:text-gray-100" />
              </motion.a>
            ))}
          </div>
        </div>
        <div className="flex col-span-1 md:col-span-2 justify-center items-center w-full md:max-w-3xl">
          <img
            alt="Saul M. N."
            loading="lazy"
            className="rounded-full"
            src="./assets/about-me/saul.webp"
          />
        </div>
      </div>
    </section>
  );
}
