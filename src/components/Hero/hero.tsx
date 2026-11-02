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
          <article
            className={
              "text-4xl mx-auto h-auto font-semibold " +
              "text-gray-800 dark:text-gray-100 " +
              "[text-shadow:0_1px_0_rgba(255,255,255,0.8)] dark:[text-shadow:0_1px_2px_rgba(0,0,0,0.5)]"
            }
          >
            <p className="z-10 inline-block relative text-center md:text-left">
              Hi ✌️, my name is Saúl and I'm a Computer Science Engineer
            </p>
          </article>

          {/* Social icon links — Aqua gel circular buttons */}
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
                className={
                  "relative p-3 rounded-full overflow-hidden " +
                  "bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.9)_0%,_rgba(180,220,255,0.7)_40%,_rgba(30,120,255,0.85)_75%,_rgba(0,80,200,1)_100%)] " +
                  "dark:bg-[linear-gradient(to_bottom,_rgba(60,80,130,0.9)_0%,_rgba(30,50,100,0.8)_40%,_rgba(10,30,80,0.9)_75%,_rgba(5,15,50,1)_100%)] " +
                  "border border-t-white/80 border-l-white/60 border-b-blue-700/60 border-r-blue-600/40 " +
                  "dark:border-t-gray-500/40 dark:border-b-gray-900/80 " +
                  "shadow-[0_4px_12px_rgba(0,80,200,0.45),_0_1px_2px_rgba(0,0,0,0.3),_inset_0_1px_1px_rgba(255,255,255,0.5)] " +
                  "dark:shadow-[0_4px_12px_rgba(0,20,80,0.6),_0_1px_2px_rgba(0,0,0,0.5)] " +
                  "transition-all duration-200 " +
                  "hover:shadow-[0_6px_18px_rgba(0,80,200,0.6),_0_1px_3px_rgba(0,0,0,0.4),_inset_0_1px_1px_rgba(255,255,255,0.6)] " +
                  "active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]"
                }
              >
                {/* Gel specular highlight */}
                <span
                  className="pointer-events-none absolute inset-x-1 top-1 h-1/3 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.6),_rgba(255,255,255,0))] rounded-full"
                  aria-hidden="true"
                />
                <Icon
                  name={link.icon}
                  className="w-6 h-6 text-white relative z-10 [filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.4))]"
                />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex col-span-1 md:col-span-2 justify-center items-center w-full md:max-w-3xl">
          <img
            alt="Saul M. N."
            loading="lazy"
            className={
              "rounded-full " +
              "border-4 border-t-white border-l-white border-b-gray-300 border-r-gray-300 " +
              "shadow-[0_8px_32px_rgba(0,80,200,0.25),_0_2px_6px_rgba(0,0,0,0.2),_inset_0_2px_4px_rgba(255,255,255,0.6)]"
            }
            src="./assets/about-me/saul.webp"
          />
        </div>
      </div>
    </section>
  );
}
