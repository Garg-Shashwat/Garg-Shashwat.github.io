import { motion } from "framer-motion";

import type { Project } from "@/types/project";

export default function ProjectCard({ title, description, tech }: Project) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="border rounded-lg p-6 bg-neutral-900 text-white"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-neutral-400 mt-2">{description}</p>

      <div className="flex gap-2 mt-3 flex-wrap">
        {tech.map((t) => (
          <span key={t} className="text-xs bg-neutral-800 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
