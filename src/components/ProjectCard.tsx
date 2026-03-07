import { motion } from "framer-motion";

import type { Project } from "@/types/project";

export default function ProjectCard({ title, description, tech }: Project) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220 }}
      className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors"
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-neutral-400 text-sm mt-3">{description}</p>

      <div className="flex gap-2 flex-wrap mt-4 text-xs text-neutral-500">
        {tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}
