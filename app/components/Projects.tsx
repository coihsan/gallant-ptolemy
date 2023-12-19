"use client";
import { projectslist } from "../constant/data";
import { motion } from "framer-motion";
import { icons } from "../constant/Icons";
export default function SideProjects() {
  return (
    <section className="w-full py-[5rem]">
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
        <div className="grid gap-3 lg:grid-cols-3 grid-cols-2 pt-[2rem]">
          {projectslist.map((list) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              key={list.key}
              href={list.url}
              target={"_blank"}
              className="relative group rounded-md bg-white text-zinc-900 hover:bg-zinc-300 transition-colors duration-500 ease-linear px-5 py-9"
            >
              <div>
                <h1 className="font-semibold text-[1.2rem]">
                  {list.projectName}
                </h1>
                <h3 className="pt-2">{list.projectType}</h3>
                <p className="text-zinc-500">{list.companyName}</p>
                <span className="absolute top-3 right-3 fill-[#F3F3F3]">
                  {icons.linkArrow}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
