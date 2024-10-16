'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import part1 from '../../public/assets/partners/part1.png';
import part2 from '../../public/assets/partners/part2.png';
import part3 from '../../public/assets/partners/part3.png';
import part4 from '../../public/assets/partners/part4.png';
import part5 from '../../public/assets/partners/part5.png';
import part6 from '../../public/assets/partners/part6.png';

const images = [part1, part2, part3, part4, part5, part6];

const Carousel = () => {
  const imageWidth = 200; // Width of each image in pixels
  const imageHeight = 160; // Height of each image in pixels
  const totalImages = images.concat(images); // Duplicate images for seamless looping
  const animateX = -images.length * imageWidth; // Total distance to scroll

  return (
    <div className='w-auto md:w-[1200px] overflow-hidden md:m-auto'>
      <motion.div
        className='flex'
        animate={{ x: [0, animateX] }}
        transition={{ duration: images.length * 4, ease: 'linear', repeat: Infinity }}
      
      >
        {totalImages.map((img, index) => (
          <div
            key={index}
            className='flex-shrink-0'
            style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
          >
            <Image
              src={img}
              alt={`partner ${index}`}
              width={imageWidth}
              height={imageHeight}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
