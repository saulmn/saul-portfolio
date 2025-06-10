import { WobbleCard } from "../ui/wobble-card";
import { cn } from "@/lib/utils";
import { technologies } from "@/constants/technologies";
import { Separator } from "../ui/separator";

export function Technologies() {
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
                  className="w-6 h-6 text-white"
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
