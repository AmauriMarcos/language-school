'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion' // Import Framer Motion

type OurCoursesProps = {
    image: string;
    subtitle: string;
    title: string;
    description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CourseCard: React.FC<OurCoursesProps> = ({ image, subtitle, title, description }) => {
  return (
    // Animated div for each card
    <motion.div
      className='w-auto md:w-[360px] m-auto h-[520px] relative overflow-hidden z-20 group hover:shadow-md transition-shadow duration-1000 ease-in-out'
      variants={cardVariants} // Apply animation variants
    >
      <div className='w-full max-h-[240px] z-20 overflow-hidden'>
        <Image 
          src={image} 
          className='w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110' 
          width={400} 
          height={400} 
          alt='course image'
        />
      </div>

      <div className='flex flex-col gap-2 items-start p-6 relative z-20 pl-4 md:pl-10'>
        <h5 className='text-[.9rem] font-semibold text-[#545754]'>{subtitle}</h5>
        <h3 className='font-extrabold text-2xl'>{title}</h3>
        <p className='leading-[1.7] text-[.9rem]'>{description}</p>
        <div>

        </div>
        <button className=' text-[#FF1E1F] text-md group hover:text-[#1d1d1d]'>View more  
            <span className='ml-4'>&#8594;</span>
        </button>

      </div>

      <Image 
        src='/assets/redBubble.png' 
        alt='bubble dialogue' 
        className='z-10 absolute bottom-[6rem] left-[-3.5rem] md:left-[-2.5rem]' 
        width={80} 
        height={80} 
      />
    </motion.div>
  )
}

export default CourseCard;
