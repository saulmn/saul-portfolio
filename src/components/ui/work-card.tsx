import { cn } from "@/utils/misc";
import { motion } from "motion/react";

interface StackItem {
  name: string;
  color: string;
  border?: string;
}

export function WorkCard({
  workRole,
  time,
  description,
  images,
  stack,
}: {
  workRole: string;
  time: string;
  description?: string;
  images?: string[];
  stack: StackItem[];
}) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-0 rounded-2xl overflow-hidden",
        // Aqua window chrome
        "border border-t-white border-l-white border-b-gray-400 border-r-gray-400",
        "dark:border-t-gray-600 dark:border-l-gray-600 dark:border-b-gray-900 dark:border-r-gray-800",
        "shadow-[0_8px_28px_rgba(0,0,0,0.3),_0_2px_4px_rgba(255,255,255,0.8)_inset]",
        "dark:shadow-[0_8px_28px_rgba(0,0,0,0.55),_0_1px_2px_rgba(255,255,255,0.06)_inset]"
      )}
    >
      {/* Aqua title bar */}
      <div
        className={cn(
          "flex items-center gap-2",
          "bg-[linear-gradient(to_bottom,_#e4e4e4_0%,_#b8b8b8_100%)]",
          "dark:bg-[linear-gradient(to_bottom,_#2e3344_0%,_#1a1f2e_100%)]",
          "border-b border-b-gray-400 dark:border-b-gray-700",
          "px-3 py-2"
        )}
      >
        {/* Stoplight controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span
            className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_1px_2px_rgba(0,0,0,0.3)] inline-block"
            aria-hidden="true"
          />
          <span
            className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_1px_2px_rgba(0,0,0,0.3)] inline-block"
            aria-hidden="true"
          />
          <span
            className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_1px_2px_rgba(0,0,0,0.3)] inline-block"
            aria-hidden="true"
          />
        </div>
        {/* Window title */}
        <article className="flex-1 text-left pl-2">
          <h3
            className={cn(
              "text-base font-semibold text-gray-800 dark:text-gray-100",
              "[text-shadow:0_1px_0_rgba(255,255,255,0.6)] dark:[text-shadow:none]"
            )}
          >
            {workRole}
          </h3>
          <h4 className="text-xs font-normal text-gray-500 dark:text-gray-400">
            {time}
          </h4>
        </article>
      </div>

      {/* Card body — brushed metal */}
      <div
        className={cn(
          "flex flex-col space-y-4 p-4",
          "bg-[linear-gradient(to_bottom,_#d8d8d8_0%,_#cccccc_100%)]",
          "dark:bg-[linear-gradient(to_bottom,_#1e2230_0%,_#141820_100%)]"
        )}
      >
        {description && (
          <p className="text-sm font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        )}

        {images && images.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Portfolio ${index + 1}`}
                className={cn(
                  "h-20 w-full rounded-lg object-cover md:h-44 lg:h-60",
                  "border border-t-white border-l-white border-b-gray-400 border-r-gray-400",
                  "dark:border-t-gray-600 dark:border-b-gray-800",
                  "shadow-[0_4px_12px_rgba(0,0,0,0.2),_0_1px_0_rgba(255,255,255,0.5)_inset]"
                )}
              />
            ))}
          </div>
        )}

        <div>
          <h4
            className={cn(
              "mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300",
              "[text-shadow:0_1px_0_rgba(255,255,255,0.6)] dark:[text-shadow:none]"
            )}
          >
            Technologies
          </h4>
          <ul className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <motion.li
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.85 }}
                key={tech.name}
                className={cn(
                  // Aqua tech badge — colored base + gel sheen overlay
                  "relative rounded-full px-3 py-1 text-xs font-semibold text-white overflow-hidden",
                  "border-2",
                  "shadow-[0_2px_6px_rgba(0,0,0,0.3),_0_1px_0_rgba(255,255,255,0.25)_inset]",
                  "hover:cursor-pointer",
                  tech.color,
                  tech.border
                )}
              >
                {/* Aqua glossy sheen overlay — top half white gradient */}
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.45),_rgba(255,255,255,0.05))] rounded-t-full"
                  aria-hidden="true"
                />
                <span className="relative z-10">{tech.name}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
