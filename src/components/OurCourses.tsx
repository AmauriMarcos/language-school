'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import CourseCard from './CourseCard'
import { coursesData } from '@/app/dummyData/coursesData'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const OurCourses = () => {
  // Use the useAnimation hook from Framer Motion
  const controls = useAnimation()

  // useInView hook from the Intersection Observer API
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.2,    // Start the animation when 20% of the section is in view
  })

  // Trigger animation when the section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  // Animation for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <div className='relative gap-10 flex flex-col w-[80%] m-auto mt-12'>
      <h2 className='text-[#181818] text-[2.3rem] md:text-[3.15rem] font-extrabold z-20 mt-14'>
        Our Courses
      </h2>
      <Image 
        className='z-10 absolute top-[-5rem] left-[-7rem] w-[330px] h-[330px] md:w-[370px] md:h-[370px] object-cover' 
        src='/assets/bubble3.png' 
        alt='bubble'
        width={400} 
        height={400}
      />

      {/* Animated Grid */}
      <motion.div
        ref={ref} // Attach the intersection observer ref
        className='grid grid-cols-1 md:grid-cols-3 z-30 gap-8 w-full mt-2 '
        variants={containerVariants}
        initial="hidden"
        animate={controls} // Trigger animations when in view
      >
        {coursesData.map(({ id, image, subtitle, title, description }) => (
          <CourseCard
            key={id}
            image={image}
            subtitle={subtitle}
            title={title}
            description={description}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default OurCourses
