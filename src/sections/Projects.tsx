import { motion } from "framer-motion";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
