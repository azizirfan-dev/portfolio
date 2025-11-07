"use client";

import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import dynamic from "next/dynamic";
import Link from "next/link";

const BackgroundCircle = dynamic(() => import("./backgroundCircle"), {
  ssr: false,
});

type Props = {};

export default function Hero({}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [text] = useTypewriter({
    words: [
      "Hi, my name is Aziz",
      "guy-who-loves-coffee.tsx",
      "<ButLovesToCodeEvenMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  if (!mounted) return null; 

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center
      text-center overflow-hidden"
    >
      <BackgroundCircle />

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/v2/D5603AQFPpr9sa1RJig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691663711448?e=1762992000&v=beta&t=0lQ9DoyO8BOPDNNMRLPFUIUsPiU85kgGPYVEPI98dKg"
        alt="Author Image"
      />

      <div className="z-20">
        <h1 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
          Fullstack-AI-Developer
        </h1>

        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="p-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#project">
            <button className="heroButton">Project</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
