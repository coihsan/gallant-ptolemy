"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { personaldata } from "../../constant/personal";
export default function Aboutme() {
  return (
    <>
      {personaldata.map((personal) => (
        <section className="">
          <div className="grid grid-cols-2 items-start">
            <motion.div
              className="pr-5 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Image
                className="grayscale hover:grayscale-0 transition-all ease-linear duration-500"
                src={"/people.webp"}
                width={500}
                height={500}
                alt="people"
              />
            </motion.div>
            <div>
              <h1 className="text-3xl">Hey there!</h1>
              <br />
              <p className="">
                I{"'"}m a digital marketing whiz who lives and breathes sales
                growth.
              </p>
              <br />
              <p>
                My mission? To get your website noticed by the Google gods and
                send a flood of potential customers your way.
              </p>
              <br />
              <p>
                I do this by weaving SEO magic and crafting landing pages that
                convert visitors into paying fans like nobody{"'"}s business.
                But wait, there{"'"}s more! I{"'"}m also a travel bug with a
                serious case of wanderlust. {"✈️"}{" "}
              </p>
              <br />
              <p>
                My camera is always by my side, capturing the beauty of the
                world around me. When I{"'"}m not busy globetrotting or crushing
                digital marketing goals, you
                {"'"}ll find me in Tangerang City, Indonesia. {"🇮🇩"} I{"'"}m
                always down to chat about anything and everything, especially if
                it involves marketing, travel, or both! ☕
              </p>
            </div>
          </div>
          <div className="pt-[2rem]">
            <h1 className="text-2xl">Passionate</h1>
            <ul className="flex items-center gap-3 w-full">
              {personal.passionate.map((passionate) => (
                <li className="px-5 py-2 rounded-md bg-zinc-900">
                  {passionate}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
