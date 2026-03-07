export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-semibold text-lg">Shashwat</h1>

        <div className="flex gap-6 text-sm">
          <a href="#tech" className="hover:text-neutral-300">
            Tech Stack
          </a>
          <a href="#projects" className="hover:text-neutral-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-neutral-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
