"use client";

import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const main = document.getElementById("main-container");

    if (!main) return;

    const handleScroll = () => {
      const heroHeight = window.innerHeight; 
      const currentScroll = main.scrollTop; 

      if (currentScroll > heroHeight * 0.7) {
        setIsVisible(true); 
      } else {
        setIsVisible(false); 
      }
    };

    main.addEventListener("scroll", handleScroll);
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          key="header"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 bg-[rgb(36,36,36)]/80 backdrop-blur-sm shadow-md"
        >
          <div className="flex flex-row items-center space-x-2">
            <SocialIcon
              url="https://www.linkedin.com/in/muhammadazizirfanuddin/"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://www.instagram.com/m_azizirfanuddin/"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/azizirfan-dev"
              fgColor="gray"
              bgColor="transparent"
            />
          </div>
          <div 
          onClick={() => window.location.href = "mailto:azizirfan60@gmail.com"}
          className="flex flex-row items-center text-gray-300 cursor-pointer space-x-2">
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
              Get in touch
            </p>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
