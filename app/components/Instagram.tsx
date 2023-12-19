"use client";
import Link from "next/link";
import Image from "next/image";
import { gallery } from "../constant/data";
import { iconSocial } from "../constant/Icons";
import { motion } from "framer-motion";
export default function Instagram() {
  return (
    <section className="w-full">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-semibold">My Photos</h1>
          <Link
            className="flex items-center gap-2 bg-zinc-800 px-4 py-1 text-zinc-50 font-medium rounded-md w-max"
            href={"#"}
          >
            <span className="fill-white">{iconSocial.instagram}</span>
            <span>bobybrown</span>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-3 w-full pt-[2rem] max-[600px]:grid-cols-2">
          {gallery.map((postImage) => (
            <motion.div
              key={postImage.key}
              className="relative rounded-md overflow-hidden group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            >
              <Image
                className="grayscale hover:grayscale-0 transition-all ease-linear duration-300 hover:scale-[1.1]"
                src={postImage.src}
                width={400}
                height={300}
                alt={postImage.alt}
              />
              <div className="absolute bottom-3 translate-y-32 group-hover:translate-y-0 left-3 transition-transform ease-in-out duration-300">
                <h3 className="text-[1.3rem]">{postImage.title}</h3>
                <span className="text-[14px]">{postImage.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
