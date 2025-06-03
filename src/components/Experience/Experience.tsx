import { Timeline } from "../ui/timeline";
import { WorkCard, WorkDescription } from "../ui/work-card";
import { technologies } from "@/constants/technologies";

export function Experience() {
  const data = [
    {
      title: "PolyWorks México",
      content: (
        <>
          <WorkCard
            role="Full Stack Developer Resident"
            time="January 2025 - May 2025"
            images={[
              "./assets/experience/polyworks-1.webp",
              "./assets/experience/polyworks-2.webp",
            ]}
            stack={[
              {
                name: "JavaScript",
                color: "bg-[#C6B700]",
                border: "border-[#F7DF1E]",
              },
              {
                name: "React",
                color: "bg-[#379EBE]",
                border: "border-[#61DAFB]",
              },
              {
                name: "MUI",
                color: "bg-[#003A91]",
                border: "border-[#0052CC]",
              },
              {
                name: "Tailwind CSS",
                color: "bg-[#048CA5]",
                border: "border-[#06B6D4]",
              },
              {
                name: "Express",
                color: "bg-[#000000]",
                border: "border-[#000000]",
              },
              {
                name: "Jest",
                color: "bg-[#96101C]",
                border: "border-[#C21325]",
              },
              {
                name: "Selenium",
                color: "bg-[#327C1F]",
                border: "border-[#43B02A]",
              },
              {
                name: "Node.js",
                color: "bg-[#267326]",
                border: "border-[#339933]",
              },
            ]}
            description="Built a web app for internal use with React, Vite, and Express. Integrated Microsoft authentication (MSAL) and APIs from Atlassian and Microsoft Graph. Worked with automated testing, UI architecture, and Agile practices."
          />
        </>
      ),
    },
    {
      title: "Karbook",
      content: (
        <>
          <WorkCard
            role="Full Stack Developer Jr"
            time="May 2023 - January 2025"
            images={[
              "./assets/experience/karbook-1.webp",
              "./assets/experience/karbook-2.webp",
              "./assets/experience/karbook-3.webp",
              "./assets/experience/karbook-4.webp",
            ]}
            stack={[
              {
                name: "TypeScript",
                color: "bg-[#235A97]",
                border: "border-[#3178C6]",
              },
              {
                name: "React",
                color: "bg-[#379EBE]",
                border: "border-[#61DAFB]",
              },
              {
                name: "MySQL",
                color: "bg-[#00546B]",
                border: "border-[#00758F]",
              },
              {
                name: "Drizzle ORM",
                color: "bg-[#1B1B1B]",
                border: "border-[#212121]",
              },
              {
                name: "Sentry",
                color: "bg-[#5E2D79]",
                border: "border-[#8C4B9E]",
              },
              {
                name: "GitHub Actions",
                color: "bg-[#1C3F73]",
                border: "border-[#2C66C2]",
              },
              {
                name: "Fly.io",
                color: "bg-[#4B2676]",
                border: "border-[#6E3FA9]",
              },
              {
                name: "PlanetScale",
                color: "bg-[#0E1A2B]",
                border: "border-[#121E2E]",
              },
              {
                name: "Node.js",
                color: "bg-[#267326]",
                border: "border-[#339933]",
              },
              {
                name: "Twilio",
                color: "bg-[#B6102A]",
                border: "border-[#F22F46]",
              },
              {
                name: "Resend",
                color: "bg-[#1B1B1B]",
                border: "border-[#212121]",
              },
              {
                name: "Vite",
                color: "bg-[#A25EF5]",
                border: "border-[#BD34FE]",
              },
              {
                name: "i18Next",
                color: "bg-[#1F2937]",
                border: "border-[#374151]",
              },
              {
                name: "React Router",
                color: "bg-[#D23C3C]",
                border: "border-[#F44250]",
              },
            ]}
            description="Helped develop the new SaaS version of the platform using Remix, Tailwind, SQL and TypeScript. Contributed to internationalization, landing pages, and internal IT support. Led frontend and backend features for the main dashboard, reports and portal modules. Improved UX using Optimistic UI, integrated Twilio and analytics tools."
          />
        </>
      ),
    },
    {
      title: "Quantum México",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "SEPROSIMA",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  const title = "Where I’ve Worked";
  const description =
    "Companies I’ve had the opportunity to grow with, build products for, and solve real-world problems.";
  return (
    <section className="font-semibold">
      <Timeline title={title} description={description} data={data} />
    </section>
  );
}
