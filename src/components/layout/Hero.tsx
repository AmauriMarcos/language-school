"use client";
import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import useMediaQuery from "@/utils/useMediaQuery";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const baseText = "Unlock the World.";
  const sentences = [
    "Become fluent in English",
    "Connect beyond borders",
    "Explore the richness of Arabic",
    "Speak like a native",
    "Discover new cultures",
    "Become fluent in French",
    "Expand your horizons",
  ];
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = sentences[currentSentenceIndex];
      const currentLength = displayedText.length;

      if (!isDeleting && currentLength < fullText.length) {
        // Typing
        setDisplayedText(fullText.substring(0, currentLength + 1));
        setTypingSpeed(100);
      } else if (isDeleting && currentLength > 0) {
        // Deleting
        setDisplayedText(fullText.substring(0, currentLength - 1));
        setTypingSpeed(50);
      } else if (!isDeleting && currentLength === fullText.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentLength === 0) {
        // Add delay after deleting before starting next sentence
        setTimeout(() => {
          setIsDeleting(false);
          setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
        }, 1000);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentSentenceIndex, typingSpeed, sentences]);

  return (
    <div className="relative h-screen 2xl:h-[calc(100vh_-_170px)] w-full">
      <div className="absolute inset-0 bg-heroMobile md:bg-hero bg-cover bg-no-repeat bg-center"></div>
      <div className="absolute inset-0 bg-black md:bg-transparent opacity-30 md:opacity-0"></div>
      <div className="relative z-10 h-full pl-5 md:pl-40 flex flex-col gap-4 md:gap-8 items-start justify-center">
        <div className="flex flex-col leading-[1.5] md:leading-[1.3]">
          <h2 className="text-[2rem] md:text-[3.8rem] text-white font-bold">
            {baseText}
          </h2>
          <h2 className="text-[1.7rem] md:text-[3.5rem] text-white font-normal">
            <span>
              {displayedText}
              <span className="animate-blink font-thin">|</span>
            </span>
          </h2>
        </div>
        <div className="flex gap-6 md:mt-6">
          <Button
            size={isMobile ? "sm" : "lg"}
            variant="default"
            color="#ff1f1f"
          >
            Apply today
          </Button>
          <Button
            size={isMobile ? "sm" : "lg"}
            variant="outline"
            color="#fff"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
