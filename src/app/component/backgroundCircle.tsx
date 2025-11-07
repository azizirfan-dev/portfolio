"use client";

import { motion } from "framer-motion";

export default function BackgroundCircle() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative flex justify-center items-center" >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute border border-gray-600 rounded-full h-[200px] w-[200px] mt-52 shadow-[0_0_15px_2px_rgba(247,171,10,0.05)]"/>
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          absolute border border-gray-700 rounded-full h-[350px] w-[350px] mt-52 shadow-[0_0_25px_4px_rgba(247,171,10,0.05)]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.05, 0.2],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="
          absolute border border-[#F7AB0A]/40 rounded-full h-[600px] w-[600px] mt-52 shadow-[0_0_40px_6px_rgba(247,171,10,0.05)]"
      />
    </motion.div>
  );
}
