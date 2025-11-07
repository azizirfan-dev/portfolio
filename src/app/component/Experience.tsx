"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const ExperienceCard = dynamic(() => import("./ExperienceCard"), {
  ssr: false,
});

type Props = {};

export default function Experience({}: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id="experience"
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      {/* ✅ Container Card */}
      <div
        className="
          w-full flex space-x-5 overflow-x-auto md:overflow-x-scroll p-4 sm:p-8 md:p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-[#F7AB0A]/50 hover:scrollbar-thumb-[#F7AB0A]">
        <ExperienceCard
          title="Business advisor"
          company="Odoo Software"
          imgSrc="./assets/image2.jpeg"
          techImages={["./assets/odoologo.jpeg"]}
          date="August 2023 - November 2024"
          responsibilities={[
            "Analyzed business requirements and workflows.",
            "Collaborated with developers to optimize systems.",
            "Built internal dashboards using Next.js and Tailwind.",
          ]}
        />

        <ExperienceCard
          title="Fullstack Developer"
          company="Purwadhika"
          imgSrc="/company2.png"
          techImages={["./assets/htmllogo.png", "./assets/jslogo.png", "./assets/nextlogo.png", "./assets/tailwindlogo.png","./assets/csslogo.png","./assets/reactlogo.png"]}
          date="September 2025 - Present"
          responsibilities={[
            "Developed RESTful APIs using Node.js and Prisma.",
            "Created modern UI with Next.js 16 and Framer Motion.",
            "Integrated authentication and role-based access control.",
          ]}
        />
                <ExperienceCard
          title="AI Agentic Developer"
          company="Purwadhika"
          imgSrc="/company2.png"
          techImages={["/node.png", "/prisma.png", "/postgres.png"]}
          date="January 2026 - March 2026"
          responsibilities={[
            "Developed RESTful APIs using Node.js and Prisma.",
            "Created modern UI with Next.js 16 and Framer Motion.",
            "Integrated authentication and role-based access control.",
            "Integrated authentication and role-based access control.",
          ]}
        />
      </div>
    </section>
  );
}
