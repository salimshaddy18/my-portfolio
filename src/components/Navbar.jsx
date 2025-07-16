import React from "react";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { RainbowButton } from "@/components/magicui/rainbow-button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white drop-shadow-lg">
          Tushar Baskheti
        </h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="text-white hover:text-blue-400 transition">
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white hover:text-blue-400 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-blue-400 transition"
          >
            Contact
          </a>
        </div>
        <RainbowButton>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </RainbowButton>
      </nav>
      <div className="z-51 rounded-lg">
        <ScrollProgress className="top-[65px]" />
      </div>
    </header>
  );
};

export default Navbar;
