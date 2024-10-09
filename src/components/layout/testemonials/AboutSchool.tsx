"use client";
import Button from "@/components/ui/Button";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import useMediaQuery from "@/utils/useMediaQuery";

const AboutSchool = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const bubbleRef = useRef(null);
  const isInView = useInView(bubbleRef, { once: false });

  console.log(isMobile )

  return (
    <div className="flex flex-col gap-4 pr-[2rem]  justify-center  items-start w-full relative min-h-screen md:min-h-[0]">
      <div className="max-w-[530px] pl-8 md:pl-0">
        <h1 className="text-[3rem] w-[300px] md:w-auto md:text-[3.5rem] text-[#191919] font-extrabold leading-[1.2]">
          Dalia Language School
        </h1>
        <p className="leading-[2] font-[400] mt-8 md:mt-4 mb-8">
        {`   Founded in 2021, Dalia Language School is dedicated to helping
          students learn English, French, and Arabic in a fun and supportive
          environment. Our passionate teachers use engaging methods to make
          language learning exciting and approachable for everyone. Whether
          you're a complete beginner or looking to perfect your skills, Dalia is
          here to guide you every step of the way. Join us and discover the joy
          of learning a new language!`}
        </p>

        <div className="mt-[3rem] md:mt-[4.5rem]">
          <Button variant="default" color="#ff1f1f" size={isMobile ? "lg" : "xl"}>
            Apply
          </Button>
        </div>
      </div>

      <motion.div
        ref={bubbleRef}
        className="absolute top-[-4.5rem] right-[1rem] md:top-[-3.5rem] md:right-0"
        animate={isInView ? { y: [0, -10, 0] } : {}} // Trigger animation when in view
        transition={{
          duration: 2, // Animation duration
          ease: "easeInOut", // Smooth easing
          repeat: 1, // Number of repetitions
        }}
      >
        <Image width={150} height={150} src="/assets/bubble.png" alt="bubble" />
      </motion.div>
    </div>
  );
};

export default AboutSchool;
