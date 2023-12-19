"use client";
import { motion } from "framer-motion";
export default function Blogs() {
  return (
    <section className="mx-auto py-[5rem]">
      <div className="max-w-screen-lg mx-auto">
        <motion.h1
          className="text-3xl font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
        >
          Blogs
        </motion.h1>
      </div>
    </section>
  );
}
