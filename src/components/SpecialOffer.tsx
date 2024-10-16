import React from 'react';
import { FaRegCalendar as CalendarIcon } from "react-icons/fa6";
import { CiUser as InstructorIcon } from "react-icons/ci";
import { GiDuration as DurationIcon } from "react-icons/gi";
import BlobButton from './ui/BlobButton';
import { FaXTwitter as TwitterIcon } from "react-icons/fa6";
import { FaInstagram as InstaIcon } from "react-icons/fa6";
import { FaFacebookF as FaceIcon } from "react-icons/fa";
import { FaLinkedin as LinkIcon } from "react-icons/fa";
import { FaYoutube as YoutubeIcon } from "react-icons/fa6";

const SpecialOffer = () => {
    return (
        <div className='w-full bg-specialOffer bg-center bg-cover bg-no-repeat md:h-[635px]  mt-10'>
            <div className='flex flex-col  h-full justify-center items-center md:w-[450px] w-full md:mx-40 md:py-0 py-10 md:gap-0 gap-4'>
                <div className='text-center'>
                    <h5 className='uppercase font-semibold text-[.9rem] text-[#fff] text-center'>Special offer</h5>
                    <h3 className='text-[#fff] text-[2rem] md:text-[2.8rem] font-extrabold z-20 '>Study Abroad</h3>
                    <h3 className='text-[#fff] text-[2.5rem] md:text-[4.5rem] font-extrabold z-20  md:translate-y-[-12px]'>$999</h3>
                </div>

                <div className='flex flex-col md:flex-row md:mt-6 md:mb-12 md:gap-0 gap-4 mb-[3rem]'>
                    <div className='flex flex-col md:gap-4 md:border-r md:border-solid md:border-white md:pr-8'>
                        <div className='flex flex-col gap-2 items-center justify-start'>
                            <CalendarIcon size={24} color='#fff' />
                            <h6 className='uppercase text-[#fff] text-[1rem] font-semibold'>Dates</h6>
                        </div>
                        <p className='text-white text-center'>April 12th 2024</p>
                    </div>
                    <div className='flex flex-col md:gap-4 md:border-r md:border-solid md:border-white md:px-8'>
                        <div className='flex flex-col gap-2 items-center justify-start'>
                            <InstructorIcon size={24} color='#fff' />
                            <h6 className='uppercase text-[#fff] text-[1rem] font-semibold'>Instructor</h6>
                        </div>
                        <p className='text-white text-center'>Maria Lopez</p>
                    </div>
                    <div className='flex flex-col md:gap-4  md:pl-8'>
                        <div className='flex flex-col gap-2 items-center justify-start'>
                            <DurationIcon size={24} color='#fff' />
                            <h6 className='uppercase text-[#fff] text-[1rem] font-semibold'>Duration</h6>
                        </div>
                        <p className='text-white text-center'>4 weeks</p>
                    </div>
                </div>
                <BlobButton color='#fff' variant='outline' size='lg'>APPLY TODAY</BlobButton>
            </div>
            <div className=' bg-[#003C72] md:py-[60px] w-full flex justify-between flex-col md:flex-row items-center md:px-40 py-[3rem] md:gap-y-0 gap-y-10'>
                <h3 className='text-[#fff] text-[2rem] md:text-[2rem] font-extrabold z-20 md:px-0 px-10 md:leading-normal leading-[1.2]'>
                    Join us in social media and stay tuned!
                </h3>
                <div className='flex gap-2 items-center w-full md:w-auto justify-end pr-10'>
                    <button className='w-[45px] h-[45px] rounded-full bg-[#FF1F1F] flex items-center justify-center'>
                        <TwitterIcon size={18} color='#fff' />
                    </button>
                    <button className='w-[45px] h-[45px] rounded-full bg-[#FF1F1F] flex items-center justify-center'>
                        <InstaIcon size={18} color='#fff' />
                    </button>
                    <button className='w-[45px] h-[45px] rounded-full bg-[#FF1F1F] flex items-center justify-center'>
                        <FaceIcon size={18} color='#fff' />
                    </button>
                    <button className='w-[45px] h-[45px] rounded-full bg-[#FF1F1F] flex items-center justify-center'>
                        <LinkIcon size={18} color='#fff' />
                    </button>
                    <button className='w-[45px] h-[45px] rounded-full bg-[#FF1F1F] flex items-center justify-center'>
                        <YoutubeIcon size={18} color='#fff' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffer
