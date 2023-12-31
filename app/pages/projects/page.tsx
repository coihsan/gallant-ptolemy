"use client";
import { projectslist } from "../../constant/data";
import { motion } from "framer-motion";
import { icons } from "../../constant/Icons";
import Link from "next/link";
export default function Projects() {
  return (
    <section className="w-full max-[600px]:pt-[9rem]">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center">
          <motion.h1
            className="text-3xl font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h1>
          <Link
            className="hover:underline text-[14px] text-zinc-400 hover:text-white transition-colors duration-300 ease-linear"
            href={"/pages/projects"}
          >
            More Projects
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-3 max-[600px]:grid-cols-2 pt-[2rem]">
          {projectslist.map((list) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              key={list.key}
              href={list.url}
              target={"_blank"}
              className="relative group rounded-md bg-zinc-900 hover:bg-zinc-800 transition-colors duration-500 ease-linear px-5 py-9"
            >
              <div>
                <h1 className="font-semibold text-[1.2rem]">
                  {list.projectName}
                </h1>
                <h3 className="pt-2">{list.projectType}</h3>
                <p className="text-zinc-500">{list.companyName}</p>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 delay-100 top-3 right-3 fill-[#F3F3F3]">
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
