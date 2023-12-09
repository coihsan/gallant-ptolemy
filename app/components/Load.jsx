"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100,
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);
};

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 3 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-[100]"
    >
      <div className="text-4xl font-bold text-white">
        <Progress />
      </div>
    </motion.div>
  );
};

export default Preloader;
