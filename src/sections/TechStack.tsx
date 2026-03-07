import { motion } from "framer-motion";

import { tech } from "@/data/tech";

export default function TechStack() {
  return (
    <section className="py-24">
      <h2 className="text-3xl font-bold mb-12">Tech Stack</h2>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {tech.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="flex items-center gap-3 border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition"
          >
            <Icon size={22} />
            <span className="text-sm">{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
