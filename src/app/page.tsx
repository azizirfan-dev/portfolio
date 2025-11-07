import Header from "./component/Header";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Hero from "./component/Hero";
import About from "./component/About";
import Experience from "./component/Experience";
import Skill from "./component/Skill";
import Projects from "./component/Projects";
import ContactMe from "./component/ContactMe";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      id="main-container"
      className={`${geistSans.className} ${geistMono.className} bg-[rgb(36,36,36)] text-gray-100 h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scroll-smooth`}
    >

      <Header />

      {/* Hero Component */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About Component */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience Component */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills Component */}
      <section id="skills" className="snap-start">
        <Skill />
      </section>

      {/* Projects Component */}
      <section id="project" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="aboutme" className="snap-start">
        <ContactMe />
      </section>

    {/* Footer Component */}
      <Footer />
    </div>
  );
}
