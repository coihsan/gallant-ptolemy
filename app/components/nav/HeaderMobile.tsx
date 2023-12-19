"use client";
import React, { useState, useEffect } from "react";
import MobileNavigation from "../../components/nav/MobileNavigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hamburger({ onToggle }: { onToggle: () => void }) {
  return (
    <div className="lg:hidden md:flex">
      <button
        className="cursor-pointer flex items-center gap-2"
        onClick={onToggle}
      >
        <span>Menu</span>
        <Image src={"/menu.svg"} width={30} height={30} alt="menu" />
      </button>
    </div>
  );
}

export default function HeaderMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className="lg:hidden max-[600px]:flex items-center gap-3 fixed px-5 py-3 justify-between w-full bg-zinc-900 z-[50]">
      <motion.div
        className="flex items-center "
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
        <div className="flex items-start flex-col pl-6">
          <h1 className="font-extrabold text-3xl pt-3 max-[600px]:text-2xl">
            Bob.
          </h1>
          <h3 className="text-zinc-400">Web Designer</h3>
        </div>
      </motion.div>
      {isMobile && isOpen ? <MobileNavigation closeMenu={closeMenu} /> : null}
      <Hamburger onToggle={handleToggle} />
    </header>
  );
}
