"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NAVIGATION } from "../constant/data";
export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <h1>Logo</h1>
      <div>
        {NAVIGATION.map((link) => (
          <div key={link.key}>
            <Link className="" href={link.href}>
              {link.title}
            </Link>
          </div>
        ))}
        <div>
          <a href="#">Resume</a>
        </div>
      </div>
    </nav>
  );
}
