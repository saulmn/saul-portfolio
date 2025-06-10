import { Logo } from "../Logo/logo";

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
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <nav className="sticky top-1 z-50 mx-auto w-full max-w-4xl flex h-14 items-center justify-between rounded-full bg-opacity-30 backdrop-blur-xl shadow-xs p-5 text-black xl:px-10">
      <div className="flex items-center space-x-6">
        <Logo />
      </div>
      <div className="hidden lg:flex items-center justify-end space-x-5">
        <a href="#experience">Experience</a>
      </div>
      <div className="hidden lg:flex items-center justify-end space-x-5">
        <a href="#technologies">Technologies</a>
      </div>
      <div className="hidden lg:flex items-center justify-end space-x-5">
        <a href="#about-me">About Me</a>
      </div>
      {/* <div className="hidden lg:flex items-center justify-end space-x-5">
        <a href="#contact">Contact</a>
      </div> */}
      {/* <div className="hidden lg:flex items-center justify-end space-x-5">
        Theme
      </div>
      <div className="hidden lg:flex items-center justify-end space-x-5">
        Language
      </div> */}
    </nav>
  );
}
