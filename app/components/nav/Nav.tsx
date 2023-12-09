"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAVIGATION } from "../../constant/data";

export function Hamburger() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden md:flex">
      <button className="cursor-pointer flex items-center gap-2" onClick={()=> setIsOpen(!isOpen)}>
        <span>Menu</span>
        <Image src={"/menu.svg"} width={30} height={30} alt="menu" />
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
              className="relative NavHover group w-max font-medium group-hover:text-lime-500"
              key={link.key}
            >
              <Link className="group-hover:text-white" href={link.href}>
                {link.title}
              </Link>
            </div>
          ))}
          <div className="relative NavHover bg-green-500 w-max font-medium rounded-full flex items-center gap-2">
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
