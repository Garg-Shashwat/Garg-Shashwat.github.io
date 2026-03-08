import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const sections = ["projects", "tech", "experience", "contact"] as const;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const linkClass = (id: string) =>
    `transition-colors ${
      activeSection === id ? "text-white" : "text-neutral-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight hover:text-neutral-300 transition-colors"
        >
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="SG logo" className="w-8 h-8" />
            <span className="font-semibold text-lg">Shashwat</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>

          <a href="#tech" className={linkClass("tech")}>
            Tech
          </a>

          <a href="#experience" className={linkClass("experience")}>
            Experience
          </a>

          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-300 hover:text-white"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[64px] left-0 w-full bg-black border-t border-neutral-800"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-sm">
              <a href="#projects" className={linkClass("projects")}>
                Projects
              </a>

              <a href="#tech" className={linkClass("tech")}>
                Tech
              </a>

              <a href="#experience" className={linkClass("experience")}>
                Experience
              </a>

              <a href="#contact" className={linkClass("contact")}>
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
