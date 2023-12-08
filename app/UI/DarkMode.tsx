"use client";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  return (
    <div className="flex relative p-1 rounded-[10px] border border-zinc-300 dark:border-zinc-700 bg-zinc-300 dark:bg-zinc-900 items-center justify-center">
      <input
        className="opacity-0"
        id="toggle-darkmode"
        type="checkbox"
        checked={isDarkMode}
        onChange={handleDarkModeToggle}
      />
      <div className="dark-icon flex  items-center justify-center  absolute">
        <Image className="sun" src={"/sun.svg"} alt="sun" />
        <Image className="moon" src={"/moon.svg"} alt="moon" />
      </div>
    </div>
  );
};

export default ToggleDarkMode;
