import { Logo } from "../Logo/logo";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ThemeSwitcher } from "../ui/theme-switcher";

export function NavBar() {
  const navItems = [
    {
      name: "Experience",
      link: "/#experience",
    },
    {
      name: "Technologies",
      link: "/#technologies",
    },
    {
      name: "About Me",
      link: "/#about-me",
    },
    {
      name: "References",
      link: "/references",
    },
    // {
    //   name: "Contact",
    //   link: "#contact",
    // },
  ];
  return (
    <nav
      className={
        "sticky top-2.5 z-50 mx-2 md:mx-auto max-w-2xl md:max-w-4xl " +
        "flex h-14 items-center justify-between " +
        "rounded-full p-5 xl:px-10 " +
        "transition-all duration-300 " +
        // Aqua frosted glass bar
        "bg-[linear-gradient(to_bottom,_rgba(230,240,255,0.97),_rgba(190,215,255,0.93))] " +
        "dark:bg-[linear-gradient(to_bottom,_rgba(20,28,50,0.97),_rgba(15,20,40,0.95))] " +
        "backdrop-blur-md " +
        "border border-t-white/80 border-l-white/80 border-b-blue-300/50 border-r-blue-300/30 " +
        "dark:border-t-gray-600/40 dark:border-l-gray-600/40 dark:border-b-gray-800/60 dark:border-r-gray-800/40 " +
        "shadow-[0_4px_20px_rgba(0,80,200,0.18),_0_1px_2px_rgba(255,255,255,0.8)_inset] " +
        "dark:shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_1px_1px_rgba(255,255,255,0.04)_inset] " +
        "text-gray-800 dark:text-gray-100"
      }
    >
      <div className="flex items-center space-x-6">
        <Logo />
      </div>

      {/* Desktop nav links */}
      <div className="hidden lg:flex items-center justify-end space-x-5">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={
              "relative group px-2 py-1 text-sm font-medium " +
              "text-gray-700 dark:text-gray-200 " +
              "transition-colors duration-200 " +
              "hover:text-blue-700 dark:hover:text-blue-300 " +
              "[text-shadow:0_1px_0_rgba(255,255,255,0.6)] dark:[text-shadow:none]"
            }
          >
            {item.name}
            {/* Aqua gel-blue underline on hover */}
            <span
              className={
                "absolute left-0 -bottom-1 w-full h-0.5 scale-x-0 group-hover:scale-x-100 " +
                "transition-transform duration-300 origin-left rounded-full " +
                "bg-[linear-gradient(to_right,_rgba(30,120,255,0.6),_rgba(0,80,200,1))]"
              }
            />
          </a>
        ))}
        <ThemeSwitcher />
      </div>

      {/* Mobile nav */}
      <div className="flex lg:hidden items-center justify-end space-x-2">
        <ThemeSwitcher />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="text-gray-800 dark:text-gray-100">
              🍔
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className={
              "z-50 w-44 rounded-xl overflow-hidden p-0 " +
              "bg-[linear-gradient(to_bottom,_#e8e8e8_0%,_#d0d0d0_100%)] " +
              "dark:bg-[linear-gradient(to_bottom,_#2a2e3a_0%,_#1e2230_100%)] " +
              "border border-t-white border-l-white border-b-gray-400 border-r-gray-400 " +
              "dark:border-t-gray-600 dark:border-b-gray-800 " +
              "shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            }
            side="bottom"
            align="end"
            alignOffset={-10}
          >
            <div className="flex flex-col gap-0 py-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className={
                    "relative group px-4 py-2 text-sm font-medium " +
                    "text-gray-700 dark:text-gray-200 " +
                    "transition-colors duration-200 " +
                    "hover:bg-[linear-gradient(to_right,_rgba(150,200,255,0.3),_rgba(30,120,255,0.1))] " +
                    "hover:text-blue-700 dark:hover:text-blue-300"
                  }
                >
                  {item.name}
                </a>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
