"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Props = {
  title: string;
  company: string;
  imgSrc: string;
  techImages: string[];
  date: string;
  responsibilities: string[];
};

export default function ExperienceCard({
  title,
  company,
  imgSrc,
  techImages,
  date,
  responsibilities,
}: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="
        flex flex-col items-center justify-start rounded-2xl shadow-lg bg-[#292929]/90 backdrop-blur-sm p-6 sm:p-8 md:p-10 space-y-6 shrink-0 w-[280px] sm:w-[400px] md:w-[500px] xl:w-[700px]
        hover:opacity-100 opacity-60 cursor-pointer transition-all duration-300 overflow-hidden snap-center hover:scale-[1.02]
      "
    >
      {/* Foto perusahaan atau logo */}
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={imgSrc}
        alt="company-logo"
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 xl:w-40 xl:h-40 rounded-full object-cover object-center border border-gray-700 shadow-md"
      />

      {/* Konten teks */}
      <div className="px-2 sm:px-4 md:px-6 text-gray-300 text-center md:text-left w-full">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-light text-[#F7AB0A]">
          {title}
        </h4>
        <p className="font-semibold text-lg sm:text-xl mt-1">{company}</p>

        {/* Logo Tech Stack / Tools */}
        <div className="flex justify-center md:justify-start space-x-2 my-3">
          {techImages.map((img, i) => (
            <img
              key={i}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover bg-gray-800 "
              src={img}
              alt={`tech-${i}`}
            />
          ))}
        </div>

        {/* Waktu kerja */}
        <p className="uppercase py-2 text-sm sm:text-base text-gray-400">
          {date}
        </p>

        {/* Deskripsi pengalaman */}
        <ul className="list-disc space-y-3 ml-5 text-sm sm:text-base leading-relaxed text-left max-h-[200px] sm:max-h-[250px] overflow-y-auto pr-2 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-[#F7AB0A]/50 hover:scrollbar-thumb-[#F7AB0A]">
          {responsibilities.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
