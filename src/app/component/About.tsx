"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({ }: Props) {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-6 sm:px-8 md:px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      {/* Judul Section */}
      <h3 className="absolute top-24 uppercase tracking-[10px] sm:tracking-[15px] md:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        About
      </h3>

      {/* Gambar profil */}
      <motion.img
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src="/assets/image1.jpeg"
        alt="About image"
        className="mt-28 md:mt-0 shrink-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-80 xl:w-[450px] xl:h-[550px] rounded-full md:rounded-lg object-cover"
      />

      {/* Teks */}
      <div className="mt-8 md:mt-0 space-y-6 sm:space-y-8 px-4 sm:px-6 md:px-10 text-gray-300 max-w-xl">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left leading-tight">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background:
        </h4>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify md:text-left">
        Hi! I’m <span className="font-bold">Muhammad Aziz Irfanuddin</span>, a{" "} <span className="font-bold">Fullstack Web Developer</span> with a solid foundation in{" "} <span className="font-bold">business strategy and ERP systems</span>. Before diving into tech, I worked as a Business Advisor — and that experience helped me develop strong client communication skills, problem-solving abilities, and a deep understanding of how technology drives business growth.
        </p>
         <p className="text-base md:text-lg leading-relaxed"> Now, as a developer, I combine that business insight with my technical expertise to build products that are both functional and meaningful. I enjoy collaborating with teams, experimenting with new ideas, and creating digital experiences that make an impact.
      </p>
      </div>
    </motion.section>
  );
}
