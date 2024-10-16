'use client';
import React from 'react'
import PriceCards from './PriceCards';
import Contact from './Contact';

const Prices = () => {
  return (
    <div className='w-full relative h-auto md:h-[920px] bg-none md:bg-bgSky bg-fit bg-no-repeat bg-right flex flex-col md:flex-row justify-center items-center px-4 md:px-0'>
    <PriceCards/>
    <Contact/>
  </div>
  
  )
}

export default Prices
