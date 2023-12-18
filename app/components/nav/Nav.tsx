"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NAVIGATION } from "../../constant/data";
import { socialLink, iconNav } from "../../constant/Icons";
import MobileNavigation from "../../components/nav/MobileNavigation"


export default function Navigation() {
  


  return (
    <nav className="fixed left-0 bg-zinc-900 py-3 h-full min-w-[350px] pt-[5rem] max-[600px]:w-full max-[600px]:py-1 z-10">
      <div className="flex items-center flex-col px-5 mx-auto max-[600px]:flex-row max-[600px]:justify-between">
      <motion.div
      className="flex items-center flex-col max-[600px]:flex-row "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Image
            className="grayscale hover:grayscale-0 transition-all ease-linear duration-500 rounded-lg max-[600px]:w-[50px] max-[600px]:h-[50px]"
            src={"/people.webp"}
            width={200}
            height={200}
            alt="people"
          />
          <h1 className="font-extrabold text-3xl pt-3">Bob.</h1>
          <h3 className="text-zinc-400">Web Designer</h3>
        </motion.div>
        <div className="grid gap-8 w-full p-5 max-[600px]:hidden">
          <div className="grid gap-1 w-full">
            {NAVIGATION.map((link) => (
              <Link key={link.key} className="group-hover:text-white NavHover flex items-center gap-3" href={link.href}>
                <div className="fill-white">{link.icon}</div>
                <span>{link.title}</span>
            </Link>
            ))}
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
