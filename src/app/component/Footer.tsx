"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { HomeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const MotionDiv = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; 

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    heroSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="fixed bottom-5 left-0 right-0 flex justify-center z-50">
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <button
          onClick={scrollToHero}
          className="group relative flex items-center justify-center rounded-full bg-[#2a2a2a] border border-gray-600/40 h-12 w-12 sm:h-14 sm:w-14 hover:bg-[#F7AB0A]/90 hover:border-[#F7AB0A]/80 transition-all duration-300 ease-in-out shadow-md hover:cursor-pointer"
        >
          <HomeIcon
            className="h-6 w-6 text-gray-300 group-hover:text-black transition-all duration-300 ease-in-out"
          />
        </button>
      </MotionDiv>
    </footer>
  );
}
