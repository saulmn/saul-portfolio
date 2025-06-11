import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { WobbleCard } from "../ui/wobble-card";
import { tools, devops, languages, frameworks } from "@/constants/technologies";

export function Technologies() {
  return (
    <section
      className="bg-background mt-10 w-full font-semibold"
      id="technologies"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-4xl">Technologies</h1>
        <p className="mt-2 text-neutral-700">
          A list of languages, frameworks, and tools I’ve worked with recently.
        </p>
        <div className="mt-10 flex flex-col">
          <div className="flex flex-col items-center md:items-end justify-end max-w-5xl">
            <h3 className="text-2xl">Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {languages.map((tech) => (
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
                    className="w-8 h-8"
                  />
                  <span className="text-white mt-2">{tech.name}</span>
                </WobbleCard>
              ))}
            </div>
            <Separator className="my-10" />
          </div>
          <div className="flex flex-col items-center md:items-start justify-start max-w-5xl">
            <h3 className="text-2xl">Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {frameworks.map((tech) => (
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
                    className="w-8 h-8"
                  />
                  <span className="text-white mt-2">{tech.name}</span>
                </WobbleCard>
              ))}
            </div>
            <Separator className="my-10" />
          </div>
          <div className="flex flex-col items-center md:items-end justify-end max-w-5xl">
            <h3 className="text-2xl">Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {tools.map((tech) => (
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
                    className="w-8 h-8"
                  />
                  <span className="text-white mt-2">{tech.name}</span>
                </WobbleCard>
              ))}
            </div>
            <Separator className="my-10" />
          </div>
          <div className="flex flex-col items-center md:items-start justify-start max-w-5xl">
            <h3 className="text-2xl">DevOps</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {devops.map((tech) => (
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
                    className="w-8 h-8"
                  />
                  <span className="text-white mt-2">{tech.name}</span>
                </WobbleCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
