import React from 'react';
import { BsClock as ClockIcon } from 'react-icons/bs';
import { AiOutlinePhone as PhoneIcon } from 'react-icons/ai';
import { IoLocationOutline as LocationIcon } from 'react-icons/io5';
import { FaXTwitter as TwitterIcon } from "react-icons/fa6";
import { FaYoutube as YoutubeIcon } from "react-icons/fa6";
import { FaFacebookF as FaceIcon } from "react-icons/fa";
import { FaInstagram as InstaIcon } from 'react-icons/fa';
import { Input } from "@/components/ui/input"
import BlobButton from '../ui/BlobButton';

const Footer = () => {
    return (
        <div className='md:translate-y-0 translate-y-[-8rem] w-full md:w-[80%] md:gap-48 gap-24 md:m-auto flex flex-col justify-between  md:items-start md:flex-row my-0 md:my-10  md:p-8 md:px-0'>
            <div className='flex md:items-start items-center w-full md:w-[50%] justify-between flex-col md:flex-row md:gap-0 gap-28'>
                <div className='flex flex-col md:gap-2 gap-6 md:items-start items-center md:px-0 md:w-auto w-[130px]'>
                    <h4 className='text-[#181818] text-[1.4rem] md:text-[1.65rem]  font-extrabold mb-4'>Contact us</h4>
                    <div className='flex gap-2 items-center  md:w-auto flex-col md:flex-row '>
                        <LocationIcon size={18} color='#ff1f1f' style={{flexShrink: 0, width:'20px', height: '20px'}} />
                        <p className='md:text-[.875rem] text-[1rem] text-center'>Franklin St, Greenpoint Ave</p>
                    </div>
                    <div className='flex gap-2 items-center  md:w-auto flex-col md:flex-row'>
                        <PhoneIcon size={18} color='#ff1f1f' />
                        <p className='md:text-[.875rem] text-[1rem] text-center'>+2342 5446 67</p>
                    </div>
                    <div className='flex gap-2 items-center  md:w-auto flex-col md:flex-row'>
                        <ClockIcon size={16} color='#ff1f1f' />
                        <p className='md:text-[.875rem] text-[1rem] text-center'>Monday - Friday: 8 AM - 5 PM</p>
                    </div>
                    <div className='flex items-center gap-2 mt-6'>
                        <TwitterIcon color="#242424" size={16} />
                        <FaceIcon color="#242424" size={16} />
                        <YoutubeIcon color="#242424" size={16} />
                        <InstaIcon color="#242424" size={18} />
                    </div>
                </div>
                <div className='flex flex-col gap-8 text-center md:text-start'>
                    <h4 className='text-[#181818] text-[1.4rem] md:text-[1.65rem]   font-extrabold'>Quick Links</h4>
                    <ul className="flex flex-col gap-2 md:w-[90px] w-full items-stretch">
                        <li className="text-[.95rem] font-[400] pb-2 text-[#242424] md:border-b md:border-solid md:border-[#c2c2c2]">
                            <a className="hover:text-[#FF3A3A]" href="#">
                                Home
                            </a>
                        </li>
                        <li className="text-[.95rem] font-[400] pb-2 text-[#242424] md:border-b md:border-solid md:border-[#c2c2c2]">
                            <a className="hover:text-[#FF3A3A]" href="#">
                                About
                            </a>
                        </li>
                        <li className="text-[.95rem] font-[400] pb-2 text-[#242424] md:border-b md:border-solid md:border-[#c2c2c2]">
                            <a className="hover:text-[#FF3A3A]" href="#">
                                Contact
                            </a>
                        </li>
                        <li className="text-[.95rem] font-[400] pb-2 text-[#242424] md:border-b md:border-solid md:border-[#c2c2c2]">
                            <a className="hover:text-[#FF3A3A]" href="#">
                                Pricing
                            </a>
                        </li>
                        <li className="text-[.95rem] font-[400] pb-2 text-[#242424] md:border-b md:border-solid md:border-[#c2c2c2]">
                            <a className="hover:text-[#FF3A3A]" href="#">
                                Courses
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex md:items-start items-center w-full md:w-[50%] justify-between flex-col md:flex-row md:gap-0 gap-20'>
                <div className='flex flex-col gap-8'>
                    <h4 className='text-[#181818] text-[1.4rem] md:text-[1.65rem]   font-extrabold'>About</h4>
                    <ul className="flex flex-col gap-2 md:w-[90px] w-full  md:items-stretch items-center">
                        <li className="text-[.95rem] font-[400] pb-2 text-[#242424] md:border-b md:border-solid md:border-[#c2c2c2] ">
                            <a className="hover:text-[#FF3A3A] " href="#">
                                About Us
                            </a>
                        </li>
                        <li className="text-[.95rem] font-[400] pb-2 text-[#242424] md:border-b md:border-solid md:border-[#c2c2c2]">
                            <a className="hover:text-[#FF3A3A]" href="#">
                                Courses
                            </a>
                        </li>
                        <li className="text-[.95rem] font-[400] pb-2 text-[#242424] md:border-b md:border-solid md:border-[#c2c2c2]">
                            <a className="hover:text-[#FF3A3A]" href="#">
                                Events
                            </a>
                        </li>
                        <li className="text-[.95rem] font-[400] pb-2 text-[#242424] md:border-b md:border-solid md:border-[#c2c2c2]">
                            <a className="hover:text-[#FF3A3A]" href="#">
                                Workshop
                            </a>
                        </li>

                    </ul>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                    <h4 className='text-[#181818] text-[1.4rem] md:text-[1.65rem]   font-extrabold'>Newsletter</h4>
                    <div className='flex flex-col gap-4 w-full md:justify-center items-center'>
                        <Input type="email" placeholder="Email" className='' />
                        <BlobButton>Subscribe</BlobButton>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
