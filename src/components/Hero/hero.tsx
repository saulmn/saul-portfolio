import { motion } from "motion/react";

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

  return (
    <section className="w-screen h-screen flex justify-center items-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-10">
        <div className="flex flex-col items-start justify-center gap-10">
          <h1 className="text-4xl font-semibold text-left">
            Hi ✌️, my name is Saúl and I'm a Computer Science Engineer.
          </h1>
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
        <div className="flex justify-center items-center max-w-3xl">
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
