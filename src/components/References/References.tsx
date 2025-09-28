export function References() {
  const referenceCategories = [
    {
      title: "UI Libraries & Components",
      links: [
        { name: "shadcn/ui", url: "https://ui.shadcn.com/", description: "Beautifully designed components built with Radix UI and Tailwind CSS" },
        { name: "Aceternity UI", url: "https://ui.aceternity.com/", description: "Copy paste the most trending components" },
        { name: "Magic UI", url: "https://magicui.design/", description: "React components to build beautiful landing pages" },
        { name: "Headless UI", url: "https://headlessui.com/", description: "Unstyled, accessible UI components for React & Vue" },
        { name: "Radix UI", url: "https://www.radix-ui.com/", description: "Low-level UI primitives with accessibility" },
      ]
    },
    {
      title: "Design Resources",
      links: [
        { name: "Figma", url: "https://www.figma.com/", description: "Collaborative interface design tool" },
        { name: "Dribbble", url: "https://dribbble.com/", description: "Design inspiration and showcase" },
        { name: "Behance", url: "https://www.behance.net/", description: "Creative work showcase platform" },
        { name: "UI Movement", url: "https://uimovement.com/", description: "UI design inspiration" },
        { name: "Page Flows", url: "https://pageflows.com/", description: "User flow design patterns" },
      ]
    },
    {
      title: "CSS & Animation",
      links: [
        { name: "Tailwind CSS", url: "https://tailwindcss.com/", description: "Utility-first CSS framework" },
        { name: "Framer Motion", url: "https://www.framer.com/motion/", description: "Motion library for React" },
        { name: "CSS Tricks", url: "https://css-tricks.com/", description: "CSS tips, tricks, and techniques" },
        { name: "Animate.css", url: "https://animate.style/", description: "Cross-browser CSS animations" },
        { name: "Lottie Files", url: "https://lottiefiles.com/", description: "Lightweight animations" },
      ]
    },
    {
      title: "Icons & Graphics",
      links: [
        { name: "Lucide", url: "https://lucide.dev/", description: "Beautiful & consistent icon toolkit" },
        { name: "Heroicons", url: "https://heroicons.com/", description: "Beautiful hand-crafted SVG icons" },
        { name: "Tabler Icons", url: "https://tabler.io/icons", description: "Free SVG icons" },
        { name: "Iconify", url: "https://iconify.design/", description: "Unified icons framework" },
        { name: "Unsplash", url: "https://unsplash.com/", description: "Free high-resolution photos" },
      ]
    },
    {
      title: "Development Tools",
      links: [
        { name: "Astro", url: "https://astro.build/", description: "Build fast websites with less client-side JS" },
        { name: "React", url: "https://react.dev/", description: "Library for building user interfaces" },
        { name: "Vite", url: "https://vitejs.dev/", description: "Fast build tool and dev server" },
        { name: "TypeScript", url: "https://www.typescriptlang.org/", description: "Typed superset of JavaScript" },
        { name: "Biome", url: "https://biomejs.dev/", description: "Fast formatter and linter" },
      ]
    },
    {
      title: "Landing Pages",
      links: [
        { name: "Helium", url: "https://helium.computer/", description: "Internet without interruptions" },
        { name: "Studio Billy", url: "https://www.studiobilly.be/", description: "Wij bouwen websites die je merk versterken en klanten overtuigen!" },
        { name: "Trynia MCP Server", url: "https://www.trynia.ai/", description: "Model Context Protocol Server" },
        { name: "Cluely", url: "https://cluely.com/", description: "Invisible AI That Thinks for You" },
        { name: "Benji SO", url: "https://benji.so/", description: "It's time to simplify everything." },
        { name: "Runway", url: "https://runway.com/blog", description: "Simulate any business decision in seconds" },
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            References & Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            A curated collection of UI libraries, design resources, and development tools that inspire and power modern web development.
          </p>
        </header>

        <div className="grid gap-12">
          {referenceCategories.map((category) => (
            <section key={category.title} className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-3 transition-colors duration-300">
                {category.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
                  >
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                        {link.description}
                      </p>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium transition-colors duration-300">
                        Visit site
                        <svg
                          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-label="External link"
                        >
                          <title>External link</title>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="text-center mt-16 pt-8 border-t border-gray-300 dark:border-gray-700 transition-colors duration-300">
          <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
            More resources will be added regularly. Have a suggestion?{" "}
            <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300">
              Get in touch
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}