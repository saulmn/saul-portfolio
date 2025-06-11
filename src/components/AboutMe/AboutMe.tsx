import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function AboutMe() {
  const items = [
    {
      title: "Peña de Bernal",
      image: "./assets/about-me/about-me-2.webp",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Racing",
      image: "./assets/about-me/about-me-6.webp",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Haku",
      image: "./assets/about-me/about-me-1.webp",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Tepeticpac",
      image: "./assets/about-me/about-me-3.webp",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Tamiko",
      image: "./assets/about-me/about-me-4.webp",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Sierra Gorda",
      image: "./assets/about-me/about-me-7.webp",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "La Cañada",
      image: "./assets/about-me/about-me-5.webp",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
  ];
  const birthDate = new Date("1999-10-25");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return (
    <section className="bg-background mt-10 w-full" id="about-me">
      <div className="max-w-7xl flex items-center justify-center pt-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-4xl font-semibold">About Me</h1>
      </div>
      <div className="mx-auto py-10 w-full px-4 md:px-8 lg:px-10">
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="text-md md:text-2xl flex-col max-w-2xl mx-auto space-y-4">
            <article>
              {`Hey! I’m Saul Maldonado Navarro, a ${age} y/o Computer 
            Science Engineer and full-stack developer
            from Tlaxcala, Mexico. I specialize in building clean, efficient,
            and maintainable web applications using technologies like React,
            Node.js, TypeScript, and MySQL.`}
            </article>
            <p>
              My journey into software development started with curiosity and
              turned into a career — from intern to full-time developer, working
              on a SaaS platforms and helping ship features that solve real
              problems. I also have experience with tests like unit, E2E and
              regression, authentication, dashboards, and CI/CD pipelines —
              always aiming to write code that’s both thoughtful and useful. I
              believe in team work, clear communication, and continuous
              improvement and learning.
            </p>
            <p>
              Outside of work, I’m passionate about mountain biking 🚵‍♂️, hiking,
              take a walk with my dogs, play Monster Hunter and discover new
              music.
            </p>
          </div>
          <div>
            <DraggableCardContainer className="relative flex md:min-h-screen w-full items-center justify-center overflow-clip">
              <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
                Hellow :)
              </p>
              {items.map((item, index) => (
                <DraggableCardBody key={index} className={item.className}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                  />
                  <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                    {item.title}
                  </h3>
                </DraggableCardBody>
              ))}
            </DraggableCardContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
