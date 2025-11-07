"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";


const MotionSection = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.section),
  { ssr: false }
);

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; 

  const projects = [
    { title: "Web Company", image: "/assets/image3.jpeg" },
    { title: "E-Commerce App", image: "/assets/image3.jpeg" },
    { title: "Dashboard UI", image: "/assets/image3.jpeg" },
  ];

  return (
    <MotionSection
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative flex flex-col overflow-hidden text-left max-w-full justify-evenly mx-auto items-center min-h-screen py-20"
    >
      {/* Header */}
      <h3 className="absolute top-10 md:top-16 uppercase tracking-[15px] text-gray-500 text-2xl z-40">
        Projects
      </h3>

      {/* Scroll Container */}
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/40 scrollbar-track-gray-900/30"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen shrink-0 snap-center flex flex-col items-center justify-center space-y-6 px-6 sm:px-10 md:px-20 lg:px-28 h-screen"
          >
            {/* Gambar Project */}
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={project.image}
              alt={project.title}
              className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto rounded-xl object-cover shadow-lg shadow-black/40"
            />

            {/* Deskripsi */}
            <div className="space-y-4 max-w-3xl">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <p className="text-sm sm:text-base md:text-lg text-center md:text-left text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                veniam illo, mollitia sed doloremque voluptates. Quidem
                consequatur dignissimos quibusdam blanditiis. Doloribus optio
                deleniti, unde iste magni dolorem laborum veniam quia!
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Background Dekoratif */}
      <div
        className="
          absolute top-[30%] left-0 w-full 
          h-[500px] bg-[#F7AB0A]/10 
          -skew-y-12 z-0
        "
      />
    </MotionSection>
  );
}
