import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  src?: string;
  name?: string;
};

export default function Skills({
  directionLeft,
  src = "/assets/image3.jpeg",
  name = "Skill",
}: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -80 : 80,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="group relative flex flex-col items-center justify-center cursor-pointer"
    >
      {/* Skill Icon */}
      <motion.img
        src={src}
        alt={name}
        className=" object-contain w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full border border-gray-600/40 bg-white/5 brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-300 ease-in-out shadow-md shadow-[#F7AB0A]/10"
      />

      {/* Skill Name */}
      <p
        className="mt-2 text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {name}
      </p>
    </motion.div>
  );
}
