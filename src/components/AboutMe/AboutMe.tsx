export function AboutMe() {
  const birthDate = new Date("1999-10-25");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return (
    <section className="font-semibold">
      <h1 className="text-4xl">About Me</h1>
      <div>
        <div></div>
        <div>
          <article>
            {`Hey! I’m Saul Maldonado Navarro, a ${age} y/o computer Computer 
            Science Engineer and full-stack developer
            from Tlaxcala, Mexico. I specialize in building clean, efficient,
            and maintainable web applications using technologies like React,
            Node.js, TypeScript, and SQL. My journey into software development
            started with curiosity and turned into a career — from intern to
            full-time developer, working on a SaaS platform for automotive
            workshops and helping ship features that solve real problems. I also have experience with
            tests like unit, E2E and regression, authentication, dashboards, and CI/CD pipelines — always
            aiming to write code that’s both thoughtful and useful. Outside of
            work, I’m passionate about mountain biking 🚵‍♂️, hiking and discover new
            music. I believe in team work, clear communication, and continuous
            improvement and learning. 246 109 5142`}
          </article>
        </div>
      </div>
    </section>
  );
}
