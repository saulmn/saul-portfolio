import { Logo } from "../Logo/logo";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ThemeSwitcher } from "../ui/theme-switcher";

export function NavBar() {
  const navItems = [
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Technologies",
      link: "#technologies",
    },
    {
      name: "About Me",
      link: "#about-me",
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
    <nav className="sticky top-2.5 z-50 mx-2 md:mx-auto max-w-2xl md:max-w-4xl flex h-14 items-center justify-between rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border border-gray-200/20 dark:border-gray-700/20 p-5 text-gray-900 dark:text-gray-100 xl:px-10 transition-all duration-300">
      <div className="flex items-center space-x-6">
        <Logo />
      </div>
      <div className="hidden lg:flex items-center justify-end space-x-5">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="relative group px-2 py-1 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        ))}
        <ThemeSwitcher />
      </div>
      <div className="flex lg:hidden items-center justify-end space-x-2">
        <ThemeSwitcher />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost"><Icon name="menu" size="md" /></Button>
          </PopoverTrigger>
          <PopoverContent className="z-50 w-40" side="bottom" align="end" alignOffset={-10}>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="relative group px-2 py-1 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
      {/* <motion.div className="hidden lg:flex items-center justify-end space-x-5">
        <a href="#contact">Contact</a>
      </motion.div> */}
      {/* <motion.div className="hidden lg:flex items-center justify-end space-x-5">
        Theme
      </motion.div>
      <motion.div className="hidden lg:flex items-center justify-end space-x-5">
        Language
      </motion.div> */}
    </nav>
  );
}
