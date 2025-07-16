import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";
import { HyperText } from "@/components/magicui/hyper-text";
import { FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { WordRotate } from "@/components/magicui/word-rotate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color: 0xffffff,
          backgroundColor: 0x000000,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      id="home"
      ref={vantaRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center"
    >
      {/* Globe background is rendered by Vanta.js on the section itself */}
      <div className="relative z-10 flex flex-col items-start w-full px-4 py-16 sm:py-24 text-left pl-8 sm:pl-16 md:pl-32 lg:pl-48 font-sans">
        <h1 className="text-slate-50 text-4xl sm:text-5xl font-semibold drop-shadow-lg mb-4 text-left">
          Hi, I am
        </h1>
        <h1 className="text-slate-50 text-4xl sm:text-5xl font-semibold drop-shadow-lg mb-4 text-left">
          <TypingAnimation className="text-slate-50 text-4xl sm:text-5xl font-semibold drop-shadow-lg">
            Tushar Baskheti
          </TypingAnimation>
        </h1>
        <WordRotate
          className="text-slate-50 text-4xl sm:text-5xl font-semibold mb-4"
          words={["Full-stack Web Developer", "Programmer", "Engineer"]}
        />
        <div className="text-slate-50 drop-shadow-lg text-2xl sm:text-3xl mt-4 mb-8 text-left max-w-2xl font-semibold">
          Building full-stack apps, solving problems one line of code at a time.
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-6 items-start justify-start">
          <InteractiveHoverButton className="bg-blue-600 text-white border-blue-400 hover:bg-blue-700 hover:border-blue-300 shadow-lg">
            <a href="#projects" className="text-white">
              Dive in
            </a>
          </InteractiveHoverButton>
          <InteractiveHoverButton className="bg-blue-600 text-white border-blue-400 hover:bg-blue-700 hover:border-blue-300 shadow-lg">
            <a href="#contact" className="text-white">
              Ping me
            </a>
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
