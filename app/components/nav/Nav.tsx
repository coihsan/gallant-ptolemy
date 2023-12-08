"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAVIGATION } from "../../constant/data";

export function Hamburger() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden md:flex">
      <button className="cursor-pointer flex items-center gap-2" onClick={()=> setIsOpen}>
        <span>Menu</span>
        <Image src={"/menu.svg"} width={20} height={20} alt="menu" />
      </button>
    </div>
  );
}
export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="absolute w-full  mx-auto px-5 py-3 ">
      <div className="flex items-center justify-between mx-auto max-w-screen-lg">
        <h1 className="font-extrabold text-5xl">BB.</h1>
        <div className="flex items-center gap-2">
          {NAVIGATION.map((link) => (
            <div
              className="hover:bg-neutral-800 transition-colors duration-300 ease-linear font-medium px-4 py-1 rounded-full"
              key={link.key}
            >
              <Link className="" href={link.href}>
                {link.title}
              </Link>
            </div>
          ))}
          <div className="hover:bg-neutral-800 transition-colors duration-300 ease-linear font-medium px-4 py-1 rounded-full flex items-center gap-2">
            <a href="#">Resume</a>
            <Image
              className=""
              src={"/arrow-up-right-from-square.svg"}
              width={16}
              height={16}
              alt="arrow link"
            />
          </div>
          <Hamburger />
        </div>
      </div>
    </nav>
  );
}
