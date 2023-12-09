"use client";
import { motion, whileInView } from "framer-motion";

export default function SideProjects() {
  return (
    <section className="w-full px-5 py-[5rem]">
      <div className="max-w-screen-lg mx-auto">
        <motion.h1
          className="text-3xl font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>
      </div>
    </section>
  );
}
