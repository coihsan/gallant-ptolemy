"use client";
import { Inter } from "next/font/google";
import AboutmeButton from "../UI/aboutme";
import ContactmeButton from "../UI/contact";
import { personaldata } from "../constant/personal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full px-5 max-[600px]:py-[9rem] ">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between gap-11 max-[600px]:flex-col max-[600px]:items-start">
        
        {personaldata.map((personal) => (
          <div key={personal.key}>
            <motion.h1
              className="text-[4rem] leading-none font-semibold pb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 3 }}
            >
              I{"'"}m {personal.fullName}.
            </motion.h1>
            <h3>Real Things. Experienced Designer.</h3>
            <ul className="list-disc pl-3 ml-3 grid gap-3">
              {personal.experties.map((experties, index) => (
                <motion.li
                  className="text-zinc-300 font-sans font-normal"
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 2 }}
                >
                  {experties}
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="flex items-center gap-3 pt-[2rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <ContactmeButton />
              <AboutmeButton />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
