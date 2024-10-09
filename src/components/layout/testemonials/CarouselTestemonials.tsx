'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { testemonialsData } from '@/app/dummyData/testemonialsData';
import { motion } from 'framer-motion';

const CarouselTestemonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const isLastSlide = currentIndex === testemonialsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Automatically move to the next slide
    }, 9000); // Change slide every 5 seconds

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='min-w-auto md:min-w-[780px] min-h-screen md:min-h-[544px] bg-[#003C72] px-[30px] flex flex-col justify-center items-end text-end relative pr-[5%] gap-6'>
      <motion.div
        key={currentIndex} // Ensures smooth transition each time index changes
        initial={{ opacity: 0, x: -20 }} // Initial state
        animate={{ opacity: 1, x: 0 }} // Animated to this state
        exit={{ opacity: 0, x: 20 }} // Exit state
        transition={{ duration: 0.5, ease: 'easeInOut' }} // Transition settings
        className="w-full self-end"
      >
        <p className='text-white text-[1.5rem] italic text-right leading-[2] w-[100%] min-h-[288px] md:min-h-[0]'>
          {`"${testemonialsData[currentIndex].testemonial}"`}
        </p>
        
        <div className='mb-6 w-full flex justify-end mt-0 md:mt-4'>
          <Image
            className='rounded-full self-end'
            width={80}
            height={80}
            src={testemonialsData[currentIndex].image}
            alt={testemonialsData[currentIndex].name}
          />
        </div>

        <div className='flex flex-col items-end'>
          <h3 className='text-white font-bold uppercase text-sm mb-1'>
            {testemonialsData[currentIndex].name}
          </h3>
          <p className='text-white text-xs'>{testemonialsData[currentIndex].occupation}</p>
        </div>
      </motion.div>

      <div className='flex gap-2 mt-8'>
        {testemonialsData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-red-600' : 'bg-white'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselTestemonials;
