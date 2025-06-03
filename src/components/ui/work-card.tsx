import { cn } from "@/utils/misc";
interface StackItem {
  name: string;
  color: string;
  border?: string;
}

export function WorkCard({
  role,
  time,
  description,
  images,
  stack,
}: {
  role: string;
  time: string;
  description?: string;
  images: string[];
  stack: StackItem[];
}) {
  return (
    <div className="flex flex-col space-y-4">
      <article className="flex-col text-left items-start justify-center">
        <h3 className="text-xl font-semibold">{role}</h3>
        <h4 className="text-md font-normal">{time}</h4>
      </article>
      <p className="text-lg font-normal">{description}</p>
      <div>
        <div className="grid grid-cols-2 gap-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          ))}
        </div>
      </div>
      <div>
        <h4 className="mb-2">Stack</h4>
        <ul className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech.name}
              className={cn(
                `rounded-full backdrop-blur-lg bg-opacity-30 border-2 px-3 py-1 text-sm font-medium text-gray-100`,
                tech.color,
                tech.border
              )}
            >
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function WorkDescription({
  role,
  time,
  description,
  tasks,
}: {
  role: string;
  time: string;
  description?: string;
  tasks: string[];
}) {
  return (
    <div className="flex flex-col space-y-4">
      <article className="flex-col text-left items-start justify-center">
        <h3 className="text-xl font-semibold">{role}</h3>
        <h4 className="text-md font-normal">{time}</h4>
      </article>
      <p className="text-lg font-normal">{description}</p>
      <div>
        <ul className="grid grid-cols-2 gap-2">
          {tasks.map((task, index) => (
            <li key={index} className="text-left text-lg font-normal">
              ✅ {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
