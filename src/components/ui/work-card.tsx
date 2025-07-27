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
    <div className="flex flex-col space-y-4">
      <article className="flex-col text-left items-start justify-center">
        <h3 className="text-xl font-semibold">{workRole}</h3>
        <h4 className="text-md font-normal">{time}</h4>
      </article>
      <p className="text-lg font-normal">{description}</p>
      <div>
        {images && images.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            ))}
          </div>
        )}
      </div>
      <div>
        <h4 className="mb-2">Technologies</h4>
        <ul className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              key={tech.name}
              className={cn(
                'rounded-full backdrop-blur-lg bg-opacity-30 border-2 px-3 py-1 text-sm font-medium text-gray-100 hover:cursor-pointer',
                tech.color,
                tech.border
              )}
            >
              {tech.name}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
