import { motion } from "framer-motion";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-10"
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </motion.div>
    </section>
  );
}
