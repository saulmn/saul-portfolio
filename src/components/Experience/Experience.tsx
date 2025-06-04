import { Timeline } from "../ui/timeline";
import { WorkCard } from "../ui/work-card";
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
              "./assets/experience/polyworks-3.webp",
              "./assets/experience/polyworks-4.webp",
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
        <WorkCard
          role="IT Assistant"
          time="February 2023 - May 2023"
          description="Developed internal tools with Microsoft Access and VBA. Designed the company’s landing page and provided tech support and reporting solutions."
          stack={[
            {
              name: "Excel",
              color: "bg-[#10793F]",
              border: "border-[#217346]",
            },
            {
              name: "Access",
              color: "bg-[#7A0026]",
              border: "border-[#A4373A]",
            },
            {
              name: "Adobe XD",
              color: "bg-[#4A0033]",
              border: "border-[#FF2BC2]",
            },
            { name: "Wix", color: "bg-[#1C1C1C]", border: "border-[#333333]" },
          ]}
        />
      ),
    },
    {
      title: "SEPROSIMA",
      content: (
        <WorkCard
          role="IT Assistant"
          time="July 2019 - October 2022"
          description="Provided IT support, maintained computer systems, managed Moodle course platform and email server, and handled user support, reports, and billing tasks."
          stack={[
            {
              name: "Excel",
              color: "bg-[#10793F]",
              border: "border-[#217346]",
            },
            {
              name: "Moodle",
              color: "bg-[#A95500]",
              border: "border-[#F98012]",
            },
            {
              name: "cPanel",
              color: "bg-[#BF4E00]",
              border: "border-[#FF6C2C]",
            },
          ]}
        />
      ),
    },
  ];
  const title = "My Experience";
  const description =
    "Companies I’ve had the opportunity to grow with, build products for, and solve real-world problems.";
  return (
    <section className="font-semibold">
      <Timeline title={title} description={description} data={data} />
    </section>
  );
}
