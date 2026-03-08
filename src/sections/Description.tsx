import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { siteConfig } from "@/config/config";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-sm text-neutral-400 mb-4"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Shashwat Garg
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.25 }}
            className="mt-4 text-xl text-neutral-300 font-medium"
          >
            Backend & Systems Developer
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-neutral-400"
          >
            Software engineer building scalable systems with Angular, Go, and
            modern web technologies.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-5 py-3 bg-white text-black rounded-md text-sm font-medium hover:bg-neutral-200 transition"
            >
              View Projects
            </a>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-neutral-700 rounded-md text-sm flex items-center gap-2 hover:border-neutral-500 transition"
            >
              <FaGithub size={16} />
              GitHub
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-neutral-700 rounded-md text-sm flex items-center gap-2 hover:border-neutral-500 transition"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>

            <a
              href={"mailto:" + siteConfig.links.email}
              className="px-5 py-3 border border-neutral-700 rounded-md text-sm flex items-center gap-2 hover:border-neutral-500 transition"
            >
              <MdEmail size={16} />
              Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
