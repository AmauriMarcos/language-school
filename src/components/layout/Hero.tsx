'use client'
import React, { useState, useEffect } from "react";
import Button from "../ui/Button";

const Hero = () => {
  const baseText = "Unlock the World. ";
  const subTitleText= 'Become fluent';
  const words = ["in English", "in French", "in Arabic"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      const currentLength = displayedText.length;

      if (!isDeleting && currentLength < fullText.length) {
        setDisplayedText(fullText.substring(0, currentLength + 1));
        setTypingSpeed(150);
      } else if (isDeleting && currentLength > 0) {
        setDisplayedText(fullText.substring(0, currentLength - 1));
        setTypingSpeed(50);
      } else if (!isDeleting && currentLength === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentLength === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed, words]);

  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-center h-screen 2xl:h-[calc(100vh_-_170px)] w-full pl-40">
      <div className="h-full flex flex-col gap-8 items-start justify-center">
        <div className="flex flex-col h-[266.38px] leading-[1.3] ">
          <h2 className="text-[3.8rem] text-white font-bold">{baseText}</h2>
          <h2 className="text-[3.8rem] text-white font-bold ">{subTitleText}</h2>
          <span className="text-[3.5rem] text-white font-normal ">
            {displayedText}
          </span>
        </div>
        <div className="flex gap-6">
          <Button variant="default" color="#ff1f1f">
            Apply today
          </Button>

          <Button variant="outline" color="#fff">
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;