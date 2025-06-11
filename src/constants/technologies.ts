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
      name: "MySQL",
      icon: "./icons/mysql.svg",
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
    {
      name: "FastAPI",
      icon: "./icons/fastapi.svg",
      color: "bg-[#009485]",
    },
  ];

  const languages = [
  { name: "HTML", icon: "./icons/html5.svg", color: "bg-[#E34F26]" },
  { name: "CSS", icon: "./icons/css.svg", color: "bg-[#1572B6]" },
  { name: "JavaScript", icon: "./icons/javascript.svg", color: "bg-[#F7DF1E]" },
  { name: "TypeScript", icon: "./icons/typescript.svg", color: "bg-[#3178C6]" },
  { name: "PHP", icon: "./icons/php.svg", color: "bg-[#000000]" },
  { name: "Java", icon: "./icons/java.svg", color: "bg-[#007396]" },
  { name: "Python", icon: "./icons/python.svg", color: "bg-[#3776AB]" },
];

const frameworks = [
  { name: "React", icon: "./icons/react.svg", color: "bg-[#61DAFB]" },
  { name: "Tailwind CSS", icon: "./icons/tailwindcss.svg", color: "bg-[#06B6D4]" },
  { name: "Remix", icon: "./icons/remix.svg", color: "bg-[#FF4C00]" },
  { name: "Next.js", icon: "./icons/nextdotjs.svg", color: "bg-[#000000]" },
  { name: "Bootstrap", icon: "./icons/bootstrap.svg", color: "bg-[#7952B3]" },
  { name: "Express", icon: "./icons/express.svg", color: "bg-[#000000]" },
  { name: "Astro", icon: "./icons/astro.svg", color: "bg-[#FF5D01]" },
  { name: "FastAPI", icon: "./icons/fastapi.svg", color: "bg-[#009485]" },
  { name: "React Router", icon: "./icons/reactrouter.svg", color: "bg-[#CA4245]" },
  { name: "i18next", icon: "./icons/i18next.svg", color: "bg-[#F9A825]" },
  { name: "Prisma", icon: "./icons/prisma.svg", color: "bg-[#2D3748]" },
  { name: "Drizzle", icon: "./icons/drizzle.svg", color: "bg-[#2D3748]" },
  { name: "Axios", icon: "./icons/axios.svg", color: "bg-[#5A29E4]" },
];

const tools = [
  { name: "Figma", icon: "./icons/figma.svg", color: "bg-[#F24E1E]" },
  { name: "Postman", icon: "./icons/postman.svg", color: "bg-[#FF6C37]" },
  { name: "Notion", icon: "./icons/notion.svg", color: "bg-[#000000]" },
  { name: "Jira", icon: "./icons/jira.svg", color: "bg-[#2684FF]" },
  { name: "Confluence", icon: "./icons/confluence.svg", color: "bg-[#172B4D]" },
  { name: "BitBucket", icon: "./icons/bitbucket.svg", color: "bg-[#0052CC]" },
  { name: "Jest", icon: "./icons/jest.svg", color: "bg-[#C21325]" },
  { name: "Selenium", icon: "./icons/selenium.svg", color: "bg-[#43B02A]" },
  { name: "React Router", icon: "./icons/reactrouter.svg", color: "bg-[#CA4245]" }, // could also be framework
];

const operatingSystems = [
  { name: "Linux", icon: "./icons/linux.svg", color: "bg-[#FCC624]" },
];


const devops = [
  { name: "GitHub", icon: "./icons/github.svg", color: "bg-[#F05032]" },
  { name: "GitHub Actions", icon: "./icons/githubactions.svg", color: "bg-[#2088FF]" },
  { name: "Docker", icon: "./icons/docker.svg", color: "bg-[#2496ED]" },
  { name: "TeamCity", icon: "./icons/teamcity.svg", color: "bg-[#0072C6]" },
  { name: "Fly.io", icon: "./icons/flydotio.svg", color: "bg-[#00ADEF]" },
  { name: "Sentry", icon: "./icons/sentry.svg", color: "bg-[#362D59]" },
  { name: "Vite", icon: "./icons/vite.svg", color: "bg-[#646CFF]" },
  { name: "Resend", icon: "./icons/resend.svg", color: "bg-[#FF4F00]" },
  { name: "Twilio", icon: "./icons/twilio.svg", color: "bg-[#F22F46]" },
];

  type Technology = {
    name: string;
    icon: string;
    color: string;
  };
  
  export {technologies, languages, frameworks, tools, devops, operatingSystems, type Technology};