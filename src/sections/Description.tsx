import { motion } from "framer-motion";

export default function Description() {
  return (
    <section
      id="description"
      className="h-screen flex items-center justify-center text-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold">Shashwat Garg</h1>

        <p className="text-neutral-400 mt-4">
          Software Engineer • Angular • Go • Systems
        </p>
      </motion.div>
    </section>
  );
}
