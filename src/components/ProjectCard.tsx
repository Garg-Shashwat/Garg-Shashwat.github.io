import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import type { Project } from "@/types/project";

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  highlights,
}: Project) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
        borderColor: "#404040",
        backgroundColor: "rgba(23,23,23,0.4)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="border border-neutral-800 rounded-lg p-6 flex flex-col"
    >
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="flex gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="flex items-center justify-center w-8 h-8 rounded-md border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition"
            >
              <FaGithub className="text-base" />
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              className="flex items-center justify-center w-8 h-8 rounded-md border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition"
            >
              <FiExternalLink className="text-base" />
            </a>
          )}
        </div>
      </div>

      <div className="mt-3 flex-1">
        <p className="text-neutral-400 text-sm leading-relaxed">
          {description}
        </p>

        {highlights && (
          <ul className="mt-3 text-sm text-neutral-500 list-disc list-inside space-y-1">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex gap-2 mt-4">
        {tech.map((t) => {
          const Icon = t.icon;

          return (
            <div
              key={t.name}
              title={t.name}
              className="flex items-center justify-center w-7 h-7 rounded-md border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition"
            >
              <Icon className="text-sm" />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
