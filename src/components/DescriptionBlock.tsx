import React from 'react'

interface DescriptionBlockProps {
    id: number;
    icon: JSX.Element;
    title: string;
    text: string
}

const DescriptionBlock: React.FC<DescriptionBlockProps> = ({ icon, title, text}) => {
  return (
    <div className='flex flex-col gap-4 items-center md:items-start w-[270px] m-auto'>
      <div className=''>
        {icon}
      </div>
      <h4 className='text-[#242424] uppercase font-semibold'>
        {title}
      </h4>
      <p className='font-[300] leading-[1.7] text-center md:text-left '>
        {text}
      </p>
    </div>
  )
}

export default DescriptionBlock
