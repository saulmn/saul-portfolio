import { Logo } from "../Logo/logo";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

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
    <nav className="sticky top-2.5 z-50 mx-2 md:mx-auto max-w-2xl md:max-w-4xl flex h-14 items-center justify-between rounded-full bg-white/60 backdrop-blur-md shadow-sm p-5 text-black xl:px-10">
      <div className="flex items-center space-x-6">
        <Logo />
      </div>
      <div className="hidden lg:flex items-center justify-end space-x-5">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="relative group px-2 py-1 transition-colors duration-200"
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        ))}
      </div>
      <div className="flex lg:hidden items-center justify-end space-x-5">
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
                  className="relative group px-2 py-1 transition-colors duration-200"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
