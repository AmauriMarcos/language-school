"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCircleCheck as CheckIcon } from "react-icons/fa6";
import BlobButton from "./ui/BlobButton";

const PriceCards = () => {
  const basicFeatures = [
    { id: 1, text: "Access to self-paced lessons" },
    { id: 2, text: "Mobile & desktop access" },
    { id: 3, text: "Basic grammar & vocabulary practice" },
    { id: 4, text: "Community forum access" },
  ];
  const proFeatures = [
    { id: 1, text: "Live instructor-led classes" },
    { id: 2, text: "Weekly language practice sessions" },
    { id: 3, text: "Access to advanced grammar & vocabulary lessons" },
    { id: 4, text: "Homework review and feedback" },
  ];
  const premiumFeatures = [
    { id: 1, text: "Personalized 1-on-1 tutoring sessions" },
    { id: 2, text: "Flexible scheduling for classes" },
    { id: 3, text: "Access to all learning materials & resources" },
    { id: 4, text: "Certificate upon completion" },
  ];

  const eliteFeatures = [
    { id: 1, text: "Unlimited 1-on-1 tutoring sessions" },
    { id: 2, text: "Priority scheduling for all classes" },
    { id: 3, text: "Access to exclusive learning materials" },
    { id: 4, text: "Personalized learning path & support" },

  ];

  // Animation controls
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger when 20% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center relative gap-4" ref={ref}>
      {/* Basic Plan Card */}
      <motion.div
        className="border border-solid border-[#FF1E1F] md:border-none flex flex-col gap-8 bg-white p-8 items-center h-[570px] rounded-2xl w-[320px] z-10"
        variants={cardVariants}
        initial="hidden"
        animate={controls}
      >
        <h3 className="uppercase text-2xl font-semibold text-[#535353]">Basic</h3>
        <p className="text-[.875rem] w-[250px] text-center text-[#a5a5a5] leading-[1.3]">
          Suitable for Beginners looking for Self-Paced Learning
        </p>
        <h2 className="text-[3rem] font-semibold text-[#FF1E1F]">$ 199</h2>
        <div className="w-full mx-auto flex justify-center">
          <BlobButton variant="default" color="#FF1E1F" size="lg">
            Get Started
          </BlobButton>
        </div>
        <div className="flex flex-col gap-6 mt-6">
          {basicFeatures.map(({ id, text }) => (
            <div key={id} className="flex items-center gap-2 ">
              <CheckIcon color="#FF1E1F" size={18} />
              <p className="text-[.875rem] w-[250px] text-start leading-[1.3]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pro Plan (Featured) */}
      <motion.div
        className="flex flex-col gap-8 bg-gradient-to-tl from-red-600 to-red-800 p-8 items-center h-[570px] rounded-2xl w-[320px] z-20 transform scale-110"
        variants={cardVariants}
        initial="hidden"
        animate={controls}
      >
        <h3 className="uppercase text-md font-extrabold text-[#fff]">Pro</h3>
        <p className="text-[.875rem] w-[250px] text-center text-[#fff] leading-[1.3]">
          Ideal for Learners who Want Instructor-Led Classes
        </p>
        <h2 className="text-[3rem] font-semibold text-[#E5E9F5]">$ 499</h2>
        <div className="w-full mx-auto flex justify-center">
          <BlobButton variant="default" color="#fff" size="lg">
            Get Started
          </BlobButton>
        </div>
        <div className="flex flex-col gap-6 mt-6">
          {proFeatures.map(({ id, text }) => (
            <div key={id} className="flex items-center gap-2 ">
              <CheckIcon color="#fff" size={18} />
              <p className="text-[.875rem] w-[250px] text-start text-[#fff] leading-[1.3]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Premium Plan */}
      <motion.div
        className="border border-solid border-[#FF1E1F] md:border-none flex flex-col gap-8 bg-white p-8 items-center h-[570px] rounded-2xl w-[320px] z-10"
        variants={cardVariants}
        initial="hidden"
        animate={controls}
      >
        <h3 className="uppercase text-2xl font-semibold text-[#535353]">Premium</h3>
        <p className="text-[.875rem] w-[250px] text-center text-[#a5a5a5] leading-[1.3]">
          Best for Learners Seeking 1-on-1 Personalized Tutoring
        </p>
        <h2 className="text-[3rem] font-semibold text-[#FF1E1F]">$ 999</h2>
        <div className="w-full mx-auto flex justify-center">
          <BlobButton variant="default" color="#FF1E1F" size="lg">
            Get Started
          </BlobButton>
        </div>
        <div className="flex flex-col gap-6 mt-6">
          {premiumFeatures.map(({ id, text }) => (
            <div key={id} className="flex items-center gap-2 ">
              <CheckIcon color="#FF1E1F" size={18} />
              <p className="text-[.875rem] w-[250px] text-start leading-[1.3]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Elite Plan */}
      <motion.div
        className="border border-solid border-[#FF1E1F] md:border-none flex flex-col gap-8 bg-white p-8 items-center h-[570px] rounded-2xl w-[320px] z-10"
        variants={cardVariants}
        initial="hidden"
        animate={controls}
      >
        <h3 className="uppercase text-2xl font-semibold text-[#535353]">Elite</h3>
        <p className="text-[.875rem] w-[250px] text-center text-[#a5a5a5] leading-[1.3]">
          For those who want the ultimate personalized learning experience
        </p>
        <h2 className="text-[3rem] font-semibold text-[#FF1E1F]">$ 1,499</h2>
        <div className="w-full mx-auto flex justify-center">
          <BlobButton variant="default" color="#FF1E1F" size="lg">
            Get Started
          </BlobButton>
        </div>
        <div className="flex flex-col gap-6 mt-6">
          {eliteFeatures.map(({ id, text }) => (
            <div key={id} className="flex items-center gap-2 ">
              <CheckIcon color="#FF1E1F" size={18} />
              <p className="text-[.875rem] w-[250px] text-start leading-[1.3]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PriceCards;
