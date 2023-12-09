"use client";
import AboutmeButton from "../UI/aboutme";
import ContactmeButton from "../UI/contact";
import { personaldata } from "../constant/data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full px-5 py-[9rem]">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between gap-11 max-[600px]:flex-col max-[600px]:items-start">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="grayscale hover:grayscale-0 transition-all ease-linear duration-500"
            src={"/people.webp"}
            width={500}
            height={500}
            alt="people"
          />
        </motion.div>
        {personaldata.map((personal) => (
          <div key={personal.key}>
            <motion.h1
              className="text-[4rem] leading-none font-semibold pb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 3 }}
            >
              I'm {personal.fullName}.
            </motion.h1>
            <ul className="list-disc pl-3 ml-3 grid gap-3">
              {personal.experties.map((experties, index) => (
                <motion.li
                  className="font-medium text-zinc-300"
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 3 }}
                >
                  {experties}
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center gap-3 pt-[2rem]">
              <ContactmeButton />
              <AboutmeButton />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
