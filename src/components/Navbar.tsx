export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight hover:text-neutral-300 transition-colors"
        >
          Shashwat
        </a>

        <div className="flex items-center gap-8 text-sm text-neutral-400">
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>

          <a href="#tech" className="hover:text-white transition-colors">
            Tech
          </a>

          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
