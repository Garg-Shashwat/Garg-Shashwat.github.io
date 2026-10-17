import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Footer from "@/components/Footer";
import { sikka, type SikkaPage } from "@/sikka/config";

/** Shell for the Sikka pages: the site's navbar style with Sikka's own links, then the page. */
export default function SikkaLayout({
  page,
  children,
}: {
  page: SikkaPage;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const linkClass = (id: string) =>
    `transition-colors ${page === id ? "text-white" : "text-neutral-400 hover:text-white"}`;

  return (
    <main className="bg-black text-white min-h-screen">
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <a
              href="/"
              title="Shashwat Garg"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/favicon.png" alt="SG logo" className="w-8 h-8" />
            </a>
            <span className="text-neutral-700">/</span>
            <a
              href="/sikka/"
              className="font-semibold text-lg hover:text-neutral-300 transition-colors"
            >
              Sikka
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            {sikka.pages.map((p) => (
              <a key={p.id} href={p.href} className={linkClass(p.id)}>
                {p.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
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
                {sikka.pages.map((p) => (
                  <a key={p.id} href={p.href} className={linkClass(p.id)}>
                    {p.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-32">{children}</article>

      <Footer />
    </main>
  );
}
