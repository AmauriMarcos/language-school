import React from 'react'
import CarouselTestemonials from './CarouselTestemonials'
import AboutSchool from './AboutSchool'

const Testemonials = () => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-[5rem]'>
      <CarouselTestemonials/>
      <AboutSchool/>
    </div>
  )
}

export default Testemonials
