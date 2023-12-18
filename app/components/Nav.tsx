"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAVIGATION } from "../constant/data";
import { socialLink, iconNav } from "../constant/Icons";
import { motion } from "framer-motion";
export function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden md:flex">
      <button
        className="cursor-pointer flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Menu</span>
        <Image src={"/menu.svg"} width={30} height={30} alt="menu" />
      </button>
    </div>
  );
}
export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="fixed left-0 py-3 bg-zinc-900 h-full min-w-[350px]">
      <div className="flex items-center flex-col px-5 mx-auto ">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Image
            className="grayscale hover:grayscale-0 transition-all ease-linear duration-500 rounded-lg"
            src={"/people.webp"}
            width={200}
            height={200}
            alt="people"
          />
          <h1>Web Designer</h1>
        </motion.div>
        <h1 className="font-extrabold text-3xl">Bob.</h1>
        <div className="grid gap-8 w-full p-5">
          <div className="grid gap-1 w-full">
            {NAVIGATION.map((link) => (
              <Link key={link.key} className="group-hover:text-white NavHover flex items-center gap-3" href={link.href}>
                <div className="fill-white">{link.icon}</div>
                <span>{link.title}</span>
            </Link>
            ))}
            <Hamburger />
          </div>
        <div className="flex items-center gap-3">
          {socialLink.map((iconLink) => (
            <div className="" key={iconLink.id}>
              <Link className="fill-white text-[30px]" href={iconLink.url}>
                {iconLink.icons}
              </Link>
            </div>
          ))}
        </div>
        </div>
      </div>
    </nav>
  );
}
