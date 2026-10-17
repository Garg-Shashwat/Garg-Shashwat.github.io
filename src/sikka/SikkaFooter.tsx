import { FaGithub, FaLinkedin } from "react-icons/fa";

import { sikka } from "@/sikka/config";

/** Footer for the Sikka pages: like the site's, without the email link (these pages carry no contact address). */
export default function SikkaFooter() {
  const iconClass =
    "flex items-center justify-center w-9 h-9 rounded-md border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition";
  return (
    <footer className="mt-32 py-12 border-t border-neutral-800 text-sm text-neutral-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-neutral-500">© 2026 Shashwat Garg</p>
        <div className="flex items-center gap-3">
          <a
            href={sikka.links.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className={iconClass}
          >
            <FaGithub className="text-base" />
          </a>
          <a
            href={sikka.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className={iconClass}
          >
            <FaLinkedin className="text-base" />
          </a>
        </div>
      </div>
    </footer>
  );
}
