import { motion } from "framer-motion";

import { tech } from "@/data/tech";

export default function TechStack() {
  const techList = Object.values(tech);

  return (
    <section id="tech" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">Tech Stack</h2>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {techList.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              className="flex items-center gap-3 border border-neutral-800 rounded-lg px-4 py-3 hover:border-neutral-600 hover:bg-neutral-900 transition"
            >
              <Icon className="text-xl text-neutral-300" />

              <span className="text-sm text-neutral-400">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
