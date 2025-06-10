import { motion } from "motion/react";
import { FlipWords } from "@/components/ui/flip-words";

export function Hero() {
  const links = [
    {
      href: "https://www.github.com/saulmn",
      icon: "/icons/github.svg",
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/saulmn/",
      icon: "/icons/linkedin.svg",
      alt: "Linkedin",
    },
    {
      href: "https://www.drive.com/",
      icon: "/icons/cv.svg",
      alt: "CV",
    },
    {
      href: "mailto:saulmn.2599@gmail.com",
      icon: "/icons/mail.svg",
      alt: "Email",
    },
  ];
  const words = [
    "Computer Science Engineer",
    "Software Developer",
    "Tech Enthusiast",
    "Mountain Biker",
  ];
  return (
    <section className="w-screen h-screen flex justify-center items-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-5 max-w-5xl gap-10">
        <div className="flex col-span-3 flex-col items-start justify-center gap-10">
          <article className="text-4xl mx-auto font-semibold text-neutral-600 dark:text-neutral-400">
            <p className="mb-2">Hi ✌️, my name is Saúl and I'm a</p>
            <FlipWords words={words} /> <br />
          </article>
          <div className="flex justify-around w-full">
            {links.map((link, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                href={link.href}
                aria-label={link.alt}
                title={link.alt}
                target="_blank"
                rel="noreferrer"
                className="hover:bg-gray-200 p-3 rounded-full transition-colors duration-300"
              >
                <img src={link.icon} alt={link.alt} className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
        <div className="flex col-span-2 justify-center items-center max-w-3xl">
          <img
            alt="Hi!"
            loading="lazy"
            className="rounded-full"
            src="https://michaeldeboey.be/img/Micha%C3%ABl.jpg"
          />
        </div>
      </div>
    </section>
  );
}
