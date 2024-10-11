"use client";
import React, { useState, useEffect } from "react";
import useMediaQuery from "@/utils/useMediaQuery";
import BlobButton from "../ui/BlobButton";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const baseText = "Unlock ";
  const baseTextSubtitle = "the World.";
  const sentences = [
    "Become fluent in English",
    "Connect beyond borders",
    "Explore the richness of Spanish",
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
        <div className="h-[250px] md:h-auto flex flex-col leading-[1.1] md:leading-[1.3]">
          <div className="flex flex-col md:flex-row ">
            <h2 className="text-[3.3rem] mb-8 md:mb-0 md:text-[3.8rem] text-white font-bold">
              {baseText}
            </h2>
            <h2 className="translate-y-[-1.5rem] md:translate-y-0  md:ml-6 text-[3.3rem] mb-8 md:mb-0 md:text-[3.8rem] text-white font-bold">
              {baseTextSubtitle}
            </h2>
          </div>

          <h2 className="text-[2rem] md:text-[3.5rem] mb-14 md:mb-0 text-white font-normal mr-4 md:mr-0">
            <span>
              {displayedText}
              <span className="animate-blink font-thin">|</span>
            </span>
          </h2>
        </div>
        <div className="flex gap-6 mt-10 md:mt-6">
          <BlobButton
            size={isMobile ? "sm" : "lg"}
            variant="default"
            color="#ff1f1f"
          >
              Apply today
          </BlobButton>

          <BlobButton
            size={isMobile ? "sm" : "lg"}
            variant="outline"
            color="#fff"
          >
              Get Quote
          </BlobButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
