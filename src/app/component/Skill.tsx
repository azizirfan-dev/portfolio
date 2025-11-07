"use client";
import React from "react";
import { motion } from "framer-motion";
import Skills from "./SkillCard"

const frontEndSkills = [
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
];

const backEndSkills = [
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

const devOpsSkills = [
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Jenkins", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Vercel", src: "https://api.iconify.design/simple-icons/vercel.svg" },
];

export default function Skill() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[1200px] px-6 sm:px-8 md:px-10 min-h-screen justify-center mx-auto items-center overflow-hidden">
      {/* Header */}
      <div className="absolute top-24 flex flex-col items-center w-full">
        <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl mb-2">
          Skills
        </h3>
        <h4 className="uppercase tracking-[3px] text-gray-400 text-sm text-center">
          Hover over a skill to see the name
        </h4>
      </div>

      {/* Wrapper for content */}
      <div className="mt-48 sm:mt-52 md:mt-56 xl:mt-[220px] w-full space-y-10">
        {/* Front-End Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h5 className="text-[#F7AB0A] text-base sm:text-lg font-semibold text-center">
            Front-End Skills
          </h5>
          <div
            className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-1 sm:gap-1.5 md:gap-2justify-items-center items-center">
            {frontEndSkills.map((skill, i) => (
              <Skills key={i} src={skill.src} name={skill.name} directionLeft={i % 2 === 0} />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-1/3 h-px mx-auto bg-linear-to-r from-transparent via-[#F7AB0A]/20 to-transparent" />

        {/* Back-End Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h5 className="text-[#F7AB0A] text-base sm:text-lg font-semibold text-center">
            Back-End Skills
          </h5>
          <div
            className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-1 sm:gap-1.5 md:gap-2justify-items-center items-center">
            {backEndSkills.map((skill, i) => (
              <Skills key={i} src={skill.src} name={skill.name} directionLeft={i % 2 === 0} />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-1/3 h-px mx-auto bg-linear-to-r from-transparent via-[#F7AB0A]/20 to-transparent" />

        {/* DevOps & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h5 className="text-[#F7AB0A] text-base sm:text-lg font-semibold text-center">
            DevOps & Tools
          </h5>
          <div
            className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-1 sm:gap-1.5 md:gap-2justify-items-center items-center">
            {devOpsSkills.map((skill, i) => (
              <Skills key={i} src={skill.src} name={skill.name} directionLeft={i % 2 === 0} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
