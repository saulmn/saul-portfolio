import { WobbleCard } from "../ui/wobble-card";
import { cn } from "@/lib/utils";

export function Technologies() {
  const technologies = [
    {
      name: "HTML",
      icon: "./icons/html5.svg",
      color: "bg-[#E34F26]",
    },
    {
      name: "CSS",
      icon: "./icons/css.svg",
      color: "bg-[#1572B6]",
    },
    {
      name: "JavaScript",
      icon: "./icons/javascript.svg",
      color: "bg-[#F7DF1E]",
    },
    {
      name: "TypeScript",
      icon: "./icons/typescript.svg",
      color: "bg-[#3178C6]",
    },
    {
      name: "React",
      icon: "./icons/react.svg",
      color: "bg-[#61DAFB]",
    },
    {
      name: "Node.js",
      icon: "./icons/nodedotjs.svg",
      color: "bg-[#339933]",
    },
    {
      name: "PHP",
      icon: "./icons/php.svg",
      color: "bg-[#000000]",
    },
    {
      name: "Tailwind CSS",
      icon: "./icons/tailwindcss.svg",
      color: "bg-[#06B6D4]",
    },
    {
      name: "Docker",
      icon: "./icons/docker.svg",
      color: "bg-[#2496ED]",
    },
    {
      name: "PostgreSQL",
      icon: "./icons/postgresql.svg",
      color: "bg-[#336791]",
    },
    {
      name: "Remix",
      icon: "./icons/remix.svg",
      color: "bg-[#FF4C00]",
    },
    {
      name: "Prisma",
      icon: "./icons/prisma.svg",
      color: "bg-[#2D3748]",
    },
    {
      name: "Drizzle",
      icon: "./icons/drizzle.svg",
      color: "bg-[#2D3748]",
    },
    {
      name: "Sentry",
      icon: "./icons/sentry.svg",
      color: "bg-[#362D59]",
    },
    {
      name: "GitHub",
      icon: "./icons/github.svg",
      color: "bg-[#F05032]",
    },
    {
      name: "Bootstrap",
      icon: "./icons/bootstrap.svg",
      color: "bg-[#7952B3]",
    },
    {
      name: "Vite",
      icon: "./icons/vite.svg",
      color: "bg-[#646CFF]",
    },
    {
      name: "Express",
      icon: "./icons/express.svg",
      color: "bg-[#000000]",
    },
    {
      name: "Java",
      icon: "./icons/java.svg",
      color: "bg-[#007396]",
    },
    {
      name: "Python",
      icon: "./icons/python.svg",
      color: "bg-[#3776AB]",
    },
    {
      name: "Figma",
      icon: "./icons/figma.svg",
      color: "bg-[#F24E1E]",
    },
    {
      name: "Axios",
      icon: "./icons/axios.svg",
      color: "bg-[#5A29E4]",
    },
    {
      name: "Postman",
      icon: "./icons/postman.svg",
      color: "bg-[#FF6C37]",
    },
    {
      name: "Notion",
      icon: "./icons/notion.svg",
      color: "bg-[#000000]",
    },
    {
      name: "Jira",
      icon: "./icons/jira.svg",
      color: "bg-[#2684FF]",
    },
    {
      name: "Confluence",
      icon: "./icons/confluence.svg",
      color: "bg-[#172B4D]",
    },
    {
      name: "BitBucket",
      icon: "./icons/bitbucket.svg",
      color: "bg-[#0052CC]",
    },
    {
      name: "GitHub Actions",
      icon: "./icons/githubactions.svg",
      color: "bg-[#2088FF]",
    },
    {
      name: "Sentry",
      icon: "./icons/sentry.svg",
      color: "bg-[#362D59]",
    },
    {
      name: "Fly.io",
      icon: "./icons/flydotio.svg",
      color: "bg-[#00ADEF]",
    },
    {
      name: "React Router",
      icon: "./icons/reactrouter.svg",
      color: "bg-[#CA4245]",
    },
    {
      name: "Next.js",
      icon: "./icons/nextdotjs.svg",
      color: "bg-[#000000]",
    },
    {
      name: "i18next",
      icon: "./icons/i18next.svg",
      color: "bg-[#F9A825]",
    },
    {
      name: "Linux",
      icon: "./icons/linux.svg",
      color: "bg-[#FCC624]",
    },
    {
      name: "Astro",
      icon: "./icons/astro.svg",
      color: "bg-[#FF5D01]",
    },
    {
      name: "Jest",
      icon: "./icons/jest.svg",
      color: "bg-[#C21325]",
    },
    {
      name: "Selenium",
      icon: "./icons/selenium.svg",
      color: "bg-[#43B02A]",
    },
    {
      name: "TeamCity",
      icon: "./icons/teamcity.svg",
      color: "bg-[#0072C6]",
    },
    {
      name: "Resend",
      icon: "./icons/resend.svg",
      color: "bg-[#FF4F00]",
    },
    {
      name: "Twilio",
      icon: "./icons/twilio.svg",
      color: "bg-[#F22F46]",
    },
  ];
  return (
    <section className="bg-background mt-10 w-full font-semibold">
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h1 className="text-4xl">Technologies</h1>
        <p className="mt-2">
          A list of languages, frameworks, and tools I’ve worked with recently.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {technologies.map((tech) => (
              <WobbleCard
                key={tech.name}
                className={`p-4 flex flex-col items-center justify-center`}
                containerClassName={cn(
                  `hover:opacity-90 rounded-full transition-all duration-300 ease-in-out`,
                  tech.color
                )}
              >
                <img
                  key={tech.name}
                  src={tech.icon}
                  alt={tech.name}
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                <span className="text-white mt-2">{tech.name}</span>
              </WobbleCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
