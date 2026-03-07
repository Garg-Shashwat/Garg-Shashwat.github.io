import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-24 py-10 border-t border-neutral-800 text-sm text-neutral-400"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <p>© 2026 Shashwat Garg</p>

        <div className="flex gap-6 text-lg">
          <a href="mailto:your@email.com" className="hover:text-white">
            <MdEmail />
          </a>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_PROFILE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
