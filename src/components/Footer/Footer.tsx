export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={
        "flex flex-col justify-center items-center p-6 mt-10 " +
        // Aqua brushed metal footer bar
        "bg-[linear-gradient(to_bottom,_#d8d8d8_0%,_#c0c0c0_50%,_#b0b0b0_100%)] " +
        "dark:bg-[linear-gradient(to_bottom,_#1e2230_0%,_#141820_100%)] " +
        "border-t-2 border-t-white dark:border-t-gray-600 " +
        "shadow-[0_-2px_8px_rgba(0,0,0,0.1),_0_1px_0_rgba(255,255,255,0.6)_inset] " +
        "dark:shadow-[0_-2px_8px_rgba(0,0,0,0.4)]"
      }
    >
      <p
        className={
          "text-sm text-gray-600 dark:text-gray-400 " +
          "[text-shadow:0_1px_0_rgba(255,255,255,0.7)] dark:[text-shadow:none]"
        }
      >
        Made with ❤️ and ☕ in TLX
      </p>
      <p
        className={
          "text-sm font-semibold text-gray-700 dark:text-gray-300 " +
          "[text-shadow:0_1px_0_rgba(255,255,255,0.7)] dark:[text-shadow:none]"
        }
      >
        {`Saúl Maldonado Navarro — ${currentYear}.`}
      </p>
    </footer>
  );
}
