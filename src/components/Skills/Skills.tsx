import { cn } from "@/utils/misc";
import { Separator } from "../ui/separator";
import { WobbleCard } from "../ui/wobble-card";
import { tools, devops, languages, frameworks } from "@/constants/technologies";
import { Icon } from "../ui/icon";

export function Technologies() {
  return (
    <section
      className="bg-background mt-10 w-full font-semibold"
      id="technologies"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h1
          className={
            "text-4xl font-semibold " +
            "text-gray-800 dark:text-gray-100 " +
            "[text-shadow:0_1px_0_rgba(255,255,255,0.8)] dark:[text-shadow:none]"
          }
        >
          Technologies
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A list of languages, frameworks, and tools I've worked with recently.
        </p>
        <div className="mt-10 flex flex-col">
          {/* Languages */}
          <div className="flex flex-col items-center md:items-end justify-end max-w-5xl">
            <h3
              className={
                "text-2xl font-semibold " +
                "text-gray-700 dark:text-gray-200 " +
                "[text-shadow:0_1px_0_rgba(255,255,255,0.7)] dark:[text-shadow:none]"
              }
            >
              Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {languages.map((tech) => (
                <WobbleCard
                  key={tech.name}
                  className="p-4 flex flex-col items-center justify-center"
                  containerClassName={cn(
                    "hover:opacity-90 rounded-full transition-all duration-300 ease-in-out " +
                      "border-2 border-t-white/30 border-l-white/20 border-b-black/20 border-r-black/10 " +
                      "shadow-[0_4px_14px_rgba(0,0,0,0.3),_0_1px_1px_rgba(255,255,255,0.25)_inset] " +
                      "hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)]",
                    tech.color
                  )}
                >
                  <Icon key={tech.name} name={tech.icon} className="w-8 h-8" />
                  <span className="text-white mt-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                    {tech.name}
                  </span>
                </WobbleCard>
              ))}
            </div>
            <Separator className="my-10" />
          </div>

          {/* Frameworks */}
          <div className="flex flex-col items-center md:items-start justify-start max-w-5xl">
            <h3
              className={
                "text-2xl font-semibold " +
                "text-gray-700 dark:text-gray-200 " +
                "[text-shadow:0_1px_0_rgba(255,255,255,0.7)] dark:[text-shadow:none]"
              }
            >
              Frameworks
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {frameworks.map((tech) => (
                <WobbleCard
                  key={tech.name}
                  className="p-4 flex flex-col items-center justify-center"
                  containerClassName={cn(
                    "hover:opacity-90 rounded-full transition-all duration-300 ease-in-out " +
                      "border-2 border-t-white/30 border-l-white/20 border-b-black/20 border-r-black/10 " +
                      "shadow-[0_4px_14px_rgba(0,0,0,0.3),_0_1px_1px_rgba(255,255,255,0.25)_inset] " +
                      "hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)]",
                    tech.color
                  )}
                >
                  <Icon key={tech.name} name={tech.icon} className="w-8 h-8" />
                  <span className="text-white mt-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                    {tech.name}
                  </span>
                </WobbleCard>
              ))}
            </div>
            <Separator className="my-10" />
          </div>

          {/* Tools */}
          <div className="flex flex-col items-center md:items-end justify-end max-w-5xl">
            <h3
              className={
                "text-2xl font-semibold " +
                "text-gray-700 dark:text-gray-200 " +
                "[text-shadow:0_1px_0_rgba(255,255,255,0.7)] dark:[text-shadow:none]"
              }
            >
              Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {tools.map((tech) => (
                <WobbleCard
                  key={tech.name}
                  className="p-4 flex flex-col items-center justify-center"
                  containerClassName={cn(
                    "hover:opacity-90 rounded-full transition-all duration-300 ease-in-out " +
                      "border-2 border-t-white/30 border-l-white/20 border-b-black/20 border-r-black/10 " +
                      "shadow-[0_4px_14px_rgba(0,0,0,0.3),_0_1px_1px_rgba(255,255,255,0.25)_inset] " +
                      "hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)]",
                    tech.color
                  )}
                >
                  <Icon key={tech.name} name={tech.icon} className="w-8 h-8" />
                  <span className="text-white mt-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                    {tech.name}
                  </span>
                </WobbleCard>
              ))}
            </div>
            <Separator className="my-10" />
          </div>

          {/* DevOps */}
          <div className="flex flex-col items-center md:items-start justify-start max-w-5xl">
            <h3
              className={
                "text-2xl font-semibold " +
                "text-gray-700 dark:text-gray-200 " +
                "[text-shadow:0_1px_0_rgba(255,255,255,0.7)] dark:[text-shadow:none]"
              }
            >
              DevOps
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {devops.map((tech) => (
                <WobbleCard
                  key={tech.name}
                  className="p-4 flex flex-col items-center justify-center"
                  containerClassName={cn(
                    "hover:opacity-90 rounded-full transition-all duration-300 ease-in-out " +
                      "border-2 border-t-white/30 border-l-white/20 border-b-black/20 border-r-black/10 " +
                      "shadow-[0_4px_14px_rgba(0,0,0,0.3),_0_1px_1px_rgba(255,255,255,0.25)_inset] " +
                      "hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)]",
                    tech.color
                  )}
                >
                  <Icon key={tech.name} name={tech.icon} className="w-8 h-8" />
                  <span className="text-white mt-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                    {tech.name}
                  </span>
                </WobbleCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
