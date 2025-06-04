export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-center items-center p-4">
      <p>Made with ❤️ and ☕ in TLX</p>
      <p>{`Saúl Maldonado Navarro - ${currentYear}.`}</p>
    </footer>
  );
}
