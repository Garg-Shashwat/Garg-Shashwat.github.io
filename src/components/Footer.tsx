import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { siteConfig } from "@/config/config";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-32 py-12 border-t border-neutral-800 text-sm text-neutral-400"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-neutral-500">© 2026 Shashwat Garg</p>

        <div className="flex items-center gap-3">
          <a
            href={"mailto:" + siteConfig.links.email}
            title="Email"
            className="flex items-center justify-center w-9 h-9 rounded-md border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition"
          >
            <MdEmail className="text-base" />
          </a>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="flex items-center justify-center w-9 h-9 rounded-md border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition"
          >
            <FaGithub className="text-base" />
          </a>

          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="flex items-center justify-center w-9 h-9 rounded-md border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition"
          >
            <FaLinkedin className="text-base" />
          </a>
        </div>
      </div>
    </footer>
  );
}
